import { Pump } from "../../.basehub/react-pump";

export default async function HomePage() {
  return (
    <main>
      <Pump queries={[{ homepage: { heroTitle: true } }]} cache="no-store">
        {async ([{ homepage }]) => {
          "use server";

          return (
            <div>
              <h1>{homepage.heroTitle}</h1>
            </div>
          );
        }}
      </Pump>
    </main>
  );
}
