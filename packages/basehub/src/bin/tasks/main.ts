import { Listr } from "listr2";
import { OutputContextRef, clientTasks } from "./clientTasks.js";
import { schemaTask } from "./schemaTask.js";

export interface Config {
  verbose?: boolean;
  endpoint?: string;
  // the output dir
  output?: string;
  packageName?: string;
  // options?: Options
  headers?: Record<string, string>;
  scalarTypes?: { [k: string]: string };
  sortProperties?: boolean;
  silent?: boolean;
  banner?: string;
  /**
   * Will compare the schema hash with the previous one to decide if the client should be regenerated.
   */
  previousSchemaHash?: string;
}

export const generate = async (
  config: Config
): Promise<OutputContextRef["current"]> => {
  if (!config.output) {
    throw new Error("`output` must be defined in the config");
  }

  const outputContextRef: OutputContextRef = {
    current: { preventedClientGeneration: false, schemaHash: "" },
  };

  await new Listr(
    [
      {
        title: `generating the client in \`${config.output}\``,
        task: () =>
          new Listr([
            schemaTask(config),
            ...clientTasks(config, outputContextRef),
          ]),
      },
    ],
    {
      renderer: config.verbose ? "verbose" : "default",
      exitOnError: true,
      ...(config.silent ? { silentRendererCondition: () => true } : {}),
    }
  )
    .run()
    .catch((e) => {
      // cconsole.log(e)
      throw e?.errors?.[0];
    });

  return outputContextRef.current;
};
