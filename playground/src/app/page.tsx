import { Pump } from "basehub/react-pump";

export default async function HomePage() {
  return (
    <>
      <Pump
        queries={[
          {
            blog: {
              __args: {
                variants: {
                  language: "en",
                },
              },
              _title: true,
              posts: {
                item: {
                  _id: true,
                },
              },
            },
          },
        ]}
      >
        {async ([data]) => {
          "use server";

          return (
            <div>
              <pre>
                <code>{JSON.stringify(data, null, 2)}</code>
              </pre>
            </div>
          );
        }}
      </Pump>
    </>
  );
}
