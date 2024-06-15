import { Pump } from "basehub/react-pump";
import { BaseHubImage } from "basehub/next-image";
import Image from "next/image";

export default async function HomePage() {
  return (
    <Pump
      queries={[
        {
          footer: {
            someImage: {
              url: true,
              width: true,
              height: true,
              alt: true,
            },
          },
        },
      ]}
    >
      {async ([data]) => {
        "use server";
        return (
          <div>
            <BaseHubImage
              src={data.footer.someImage.url}
              alt={data.footer.someImage.alt ?? ""}
              width={1600 / 2}
              height={900 / 2}
            />
            <Image
              src={data.footer.someImage.url}
              alt={data.footer.someImage.alt ?? ""}
              width={1600 / 2}
              height={900 / 2}
            />
          </div>
        );
      }}
    </Pump>
  );
}
