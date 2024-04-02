import { Pump } from "../../.basehub/react-pump";

export default async function HomePage() {
  return (
    <main>
      <Pump
        queries={[
          {
            homepage: {
              heroTitle: true,
              heroSubtitle: true,
              cta: {
                label: true,
                href: true,
              },
            },
          },
        ]}
        cache="no-store"
      >
        {async ([{ homepage }]) => {
          "use server";
          return (
            <div>
              <h1>{homepage.heroTitle}</h1>
              <p>{homepage.heroSubtitle}</p>
              <a href={homepage.cta.href}>{homepage.cta.label}</a>
            </div>
          );
        }}
      </Pump>
    </main>
  );
}
