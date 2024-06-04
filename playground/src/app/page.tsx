import { Pump } from "basehub/react-pump";

export default async function HomePage() {
  return (
    <Pump
      queries={[
        {
          blog: {
            posts: {
              items: {
                _title: true,
                richText: {
                  html: true,
                },
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
