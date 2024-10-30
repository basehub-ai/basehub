import { Pump } from "basehub/react-pump";

export default function HomePage() {
  return (
    <Pump queries={[{ one: { hola: true } }]}>
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
