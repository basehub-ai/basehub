import { basehub } from "../../.basehub";
import { Pump } from "../../.basehub/react-pump";

export default async function HomePage() {
  const { homepage } = await basehub({ cache: "no-cache" }).query({
    homepage: {
      _id: true,
    },
  });

  console.log("got homepage", homepage);

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
