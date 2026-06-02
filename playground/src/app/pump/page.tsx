import { Pump } from "basehub/react-pump";

export default async function TestBaseHubPumpPage() {
  "use cache";

  return (
    <Pump
      queries={[
        {
          blog: {
            posts: {
              items: {
                date: true,
              },
            },
          },
        },
      ]}
    >
      {async ([data]) => {
        "use server";

        return (
          <pre>
            <code>{JSON.stringify(data, null, 2)}</code>
          </pre>
        );
      }}
    </Pump>
  );
}
