import { Pump, PumpChildren, PumpQuery, PumpProps } from "basehub/next-pump";

const BlogPumpQuery = {
  blog: {
    _slug: true,
    _id: true,
  },
  homepage: {
    _id: true,
  },
} satisfies PumpQuery;

const BlogPump = ({
  children,
}: {
  children: PumpChildren<typeof BlogPumpQuery>;
}) => {
  return <Pump query={BlogPumpQuery}>{children}</Pump>;
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

          return <div>Hey there friends: {data.homepage._id}</div>;
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
