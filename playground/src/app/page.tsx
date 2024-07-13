import { Pump } from "basehub/react-pump";

export default async function HomePage() {
  return (
    <Pump
      queries={[
        {
          homepage: {
            title: true,
          },
        },
      ]}
      next={{ revalidate: 1 }}
    >
      {async ([data]) => {
        "use server";
        return (
          <div>
            <h1>{data.homepage.title}</h1>
          </div>
        );
      }}
    </Pump>
  );
}
