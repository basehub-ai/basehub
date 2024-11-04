import { Pump } from "basehub/react-pump";

export default function HomePage() {
  return (
    <Pump queries={[{ home: { text: true } }]}>
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
  );
}
