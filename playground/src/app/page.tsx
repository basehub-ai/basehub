import { basehub } from "../../.basehub";
import { Transaction } from "basehub/api-transaction";

export default async function HomePage() {
  return (
    <main>
      <form
        action={async () => {
          "use server";
          return await basehub({ cache: "no-cache" }).mutation({
            transaction: {
              __args: {
                data: JSON.stringify([
                  {
                    type: "create",
                    data: {
                      type: "document",
                      title: "my api first",
                      value: [
                        {
                          type: "text",
                          title: "hero title",
                          value: "ohuuuuu!",
                        },
                      ],
                    },
                  },
                ] satisfies Transaction),
              },
            },
          });
        }}
      >
        <h1>Does it work?</h1>
        <button>Lego!</button>
      </form>
    </main>
  );
}
