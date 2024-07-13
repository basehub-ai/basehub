import { Pump } from "basehub/react-pump";

export default async function HomePage() {
  return (
    <Pump
      queries={[
        {
          boomba: {
            thing: true,
          },
        },
      ]}
      next={{ revalidate: 1 }}
    >
      {async ([data]) => {
        "use server";
        return (
          <div>
            <h1>{data.boomba.thing}</h1>
          </div>
        );
      }}
    </Pump>
  );
}
