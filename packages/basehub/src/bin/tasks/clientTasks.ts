import crypto from "crypto";
import { ListrTask, Listr } from "listr2";
import { Config } from "./main.js";
import { writeFileToPath } from "./helpers/files.js";
import { RenderContext } from "./render/common/RenderContext.js";
import { renderRequestTypes } from "./render/requestTypes/renderRequestTypes.js";
import { renderResponseTypes } from "./render/responseTypes/renderResponseTypes.js";
import { renderSchema } from "./render/schema/renderSchema.js";
import {
  renderModuleAugmentation,
  enhanceMutationGenqlSelection,
} from "./render/responseTypes/renderModuleAugmentation.js";
// import { GraphQLSchema, GraphQLEnumType, isEnumType } from "graphql";
// import { excludedTypes } from "./render/common/excludedTypes.js";
// import { camelCase, capitalize } from "./utils.js";
// import { renderTypeGuards } from "./render/typeGuards/renderTypeGuards.js";

export type OutputContextRef = {
  current: { preventedClientGeneration: boolean; schemaHash: string };
};

export const clientTasks = (
  config: Config,
  outputContextRef: OutputContextRef
): ListrTask[] => {
  if (!config.output) throw new Error("`output` must be defined in the config");

  const output = config.output;

  const tasks: (false | ListrTask)[] = [
    {
      title: `processing schema`,
      task: async (ctx) => {
        const renderCtx = new RenderContext(ctx.schema, config);
        renderSchema(ctx.schema, renderCtx);
        const schemaContent = await renderCtx.toCode("graphql");
        const schemaHash = crypto
          .createHash("md5")
          .update(schemaContent)
          .digest("hex");

        outputContextRef.current.schemaHash = schemaHash;

        if (config.previousSchemaHash === schemaHash) {
          ctx.preventedClientGeneration = true;
          outputContextRef.current.preventedClientGeneration = true;
          return;
        }

        // should generate client
        outputContextRef.current.preventedClientGeneration = false;

        // keep going with the rest of the tasks
        return new Listr(
          [
            {
              title: `writing ${config.output}`,
              task: async (ctx) => {
                const renderCtx = new RenderContext(ctx.schema, config);

                renderModuleAugmentation(ctx.schema, renderCtx);
                renderResponseTypes(ctx.schema, renderCtx);
                renderRequestTypes(ctx.schema, renderCtx);
                // renderTypeGuards(ctx.schema, renderCtx);
                // renderEnumsMaps(ctx.schema, renderCtx);

                await writeFileToPath(
                  [output],
                  "/* istanbul ignore file */\n/* tslint:disable */\n/* eslint-disable */\n// @ts-nocheck\n\n" +
                    enhanceMutationGenqlSelection(
                      await renderCtx.toCode("typescript")
                    )
                );
              },
            },
          ],
          { ctx, concurrent: true }
        );
      },
    },
  ];

  return [
    {
      title: `writing files`,
      task: () => {
        return new Listr(tasks.filter((x) => Boolean(x)) as ListrTask[], {
          concurrent: true,
        });
      },
    },
  ];
};

// function renderEnumsMaps(schema: GraphQLSchema, ctx: RenderContext) {
//   const typeMap = schema.getTypeMap();

//   const enums: GraphQLEnumType[] = [];
//   for (const name in typeMap) {
//     if (excludedTypes.includes(name)) continue;

//     const type = typeMap[name];

//     if (isEnumType(type)) {
//       enums.push(type);
//     }
//   }
//   if (enums.length === 0) return;

//   ctx.addCodeBlock(
//     enums
//       .map(
//         (type) =>
//           `export const ${"enum" + capitalize(camelCase(type.name))} = {\n` +
//           type
//             .getValues()
//             .map((v) => {
//               if (!v?.name) {
//                 return "";
//               }
//               return `   ${v.name}: '${v.name}' as const`;
//             })
//             .join(",\n") +
//           `\n}\n`
//       )
//       .join("\n")
//   );
// }
