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
              idkAnImage: {
                url: true,
              },
              cta: {
                label: true,
                href: true,
              },
              coll: {
                items: {
                  _id: true,
                  _title: true,
                  someTextHere: true,
                },
              },
            },
          },
        ]}
        cache="no-store"
      >
        {async ([d]) => {
          "use server";
          const homepage = d?.homepage;
          console.log("homepage", JSON.stringify(homepage));
          return (
            <div>
              <h1>{homepage.heroTitle}</h1>
              <p>{homepage.heroSubtitle}</p>
              <a href={homepage.cta.href}>{homepage.cta.label}</a>
              <img
                src={homepage.idkAnImage.url}
                alt="something"
                width={200}
                height={200}
                style={{ display: "block" }}
              />
              {homepage.coll.items.map((item) => {
                return (
                  <div key={item._id}>
                    <h2>{item._title}</h2>
                    <p>{item.someTextHere}</p>
                  </div>
                );
              })}
            </div>
          );
        }}
      </Pump>
    </main>
  );
}
