import { basehub } from "basehub";

export default async function HomePage() {
  const data = await basehub({ cache: "no-cache" }).query({
    unionTests: {
      union: {
        on_FeaturesBigImageComponent: {
          __typename: true,
          // __scalar: true,
          conflict: true,
        },
        on_AnotherCompComponent: {
          __typename: true,
          // __scalar: true,
          conflict: true,
          nested: {
            on_AnotherCompComponent: {
              conflict: true,
            },
            on_FeaturesBigImageComponent: {
              conflict: true,
            },
          },
        },
      },
    },
  });

  return (
    <div>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
}
