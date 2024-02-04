import { Pump, PumpChildren, PumpQuery, PumpProps } from "basehub/next-pump";
import { HeroSection } from "./some-server-comp";
import { FieldsSelection, Query } from "basehub";

const BlogBase = {
  blog: {
    _slug: true,
    _id: true,
  },
  homepage: {
    _id: true,
    heroTitle: {
      plainText: true,
    },
    heroSubtitle: {
      plainText: true,
    },
  },
} satisfies PumpQuery;

export type BlogBase = FieldsSelection<Query, typeof BlogBase>;

const BlogPump = ({
  children,
}: {
  children: PumpChildren<typeof BlogBase>;
}) => {
  return <Pump query={BlogBase}>{children}</Pump>;
};

const PumpWithPredefinedCache = <Q extends PumpQuery>(props: PumpProps<Q>) => {
  return <Pump {...props} next={{ revalidate: 60 }} />;
};

export default async function HomePage() {
  return (
    <main>
      <BlogPump>
        {async (data) => {
          "use server";

          return (
            <div>
              Hey there friends
              <br />
              <HeroSection
                title={data.homepage.heroTitle?.plainText ?? ""}
                subtitle={data.homepage.heroSubtitle?.plainText ?? ""}
                raw={data}
              />
            </div>
          );
        }}
      </BlogPump>
      <Pump
        query={{
          blog: {
            _slug: true,
            _id: true,
          },
        }}
        next={{ revalidate: 30 }}
      >
        {async (data) => {
          "use server";

          return <pre>{JSON.stringify({ data }, null, 2)}</pre>;
        }}
      </Pump>

      <br />
      <br />
      <h1>Does it work?</h1>
      <PumpWithPredefinedCache
        query={{
          demos: {
            homepageDemo: {
              script: {
                html: true,
              },
              video: {
                url: true,
              },
            },
          },
        }}
      >
        {async (data) => {
          "use server";

          return (
            <div
              dangerouslySetInnerHTML={{
                __html:
                  data.demos.homepageDemo.script?.html ?? "<div>Empty</div>",
              }}
            />
          );
        }}
      </PumpWithPredefinedCache>
    </main>
  );
}
