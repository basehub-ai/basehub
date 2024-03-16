# playground

## 0.0.55

### Patch Changes

- Updated dependencies [2070118]
- Updated dependencies [2070118]
  - basehub@3.0.5

## 0.0.55-next.1

### Patch Changes

- Updated dependencies
  - basehub@3.0.5-next.1

## 0.0.55-next.0

### Patch Changes

- Updated dependencies
  - basehub@3.0.5-next.0

## 0.0.54

### Patch Changes

- Updated dependencies
  - basehub@3.0.4

## 0.0.53

### Patch Changes

- a743356: add toasts by the amazing sonner
- Updated dependencies [f5c1b63]
- Updated dependencies [a743356]
  - basehub@3.0.3

## 0.0.52

### Patch Changes

- Updated dependencies
  - basehub@3.0.2

## 0.0.51

### Patch Changes

- Updated dependencies
  - basehub@3.0.1

## 0.0.50

### Patch Changes

- f893a7a: ## Introducing `Pump`: Fast Refresh for Your Content

  This new major introduces `react-pump`, a component that brings realtime updates from BaseHub into your app. Via a combination of React Server Components, React Server Actions, and the existing `basehub` SDK, it has a very elegant API and pushes forward our vision of making content editing (and previewing) seamless.

  This is a short example of how to use it:

  ```tsx
  import { Pump } from "basehub/react-pump";

  const Page = () => {
    const yourLogicForDraftMode = true; // in Next.js, you'd use draftMode()
    return (
      <Pump queries={[{ _sys: { id: true } }]} draft={yourLogicForDraftMode}>
        {async ([data]) => {
          "use server";

          // `data` is typesafe, of course!

          return (
            <pre>
              <code>{JSON.stringify(data, null, 2)}</code>
            </pre>
          );
        }}
      </Pump>
    );
  };
  ```

  When `draft === true`, `Pump` will mount a Client Component that will subscribe to real time updates from BaseHub, and will push does updates to your render function in real time. This gives you **"fast refresh" for your content**.

  `Pump` relies on experimental React features: React Server Components, and Server Actions. Currently, Next.js is the only framework we know of that supports these.

  You may have a lot of questions, such as "why a component instead of a hook?", "why a render function, and why does it need to be `async` and have `"use server"`?", which we'll answer in our official Docs soon.

  ## Breaking Changes

  The `basehub/react` namespace has been removed in favour of having more specific namespaces. The only affected component (because is the only one we expose as of now) is `RichText`. This is how you migrate:

  ```diff
  - import { RichText } from 'basehub/react'
  + import { RichText } from 'basehub/react-rich-text'
  ```

  ## Mutations API Helpers

  With the introduction of the Mutation API, we've added some helper TypeScript types that will allow you to send mutations in a typesafe manner. For example:

  ```tsx
  import { basehub } from "basehub";
  import { Transaction } from "basehub/api-transaction";

  export function Example() {
    return (
      <div>
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
                        title: "A Document from our API",
                        value: [
                          {
                            type: "text",
                            title: "hero title",
                            value: "Hello World!",
                            isRequired: true,
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
          <button>Submit</button>
        </form>
      </div>
    );
  }
  ```

  ***

  Enjoy, and go write!

- Updated dependencies [f893a7a]
  - basehub@3.0.0

## 0.0.49

### Patch Changes

- Updated dependencies [d4c0021]
  - basehub@2.0.1

## 0.0.48

### Patch Changes

- Updated dependencies [b3ff244]
  - basehub@2.0.0

## 0.0.47

### Patch Changes

- Updated dependencies [bc3492b]
- Updated dependencies [b05f553]
- Updated dependencies [bc3492b]
- Updated dependencies [9d50ff5]
- Updated dependencies [a39bb9f]
- Updated dependencies [bc3492b]
- Updated dependencies [bc3492b]
- Updated dependencies [3529057]
  - basehub@1.4.0

## 0.0.47-next.7

### Patch Changes

- Updated dependencies
  - basehub@1.4.0-next.7

## 0.0.47-next.6

### Patch Changes

- Updated dependencies
  - basehub@1.4.0-next.6

## 0.0.47-next.5

### Patch Changes

- Updated dependencies
  - basehub@1.4.0-next.5

## 0.0.47-next.4

### Patch Changes

- Updated dependencies
  - basehub@1.4.0-next.4

## 0.0.47-next.3

### Patch Changes

- Updated dependencies
  - basehub@1.4.0-next.3

## 0.0.47-next.2

### Patch Changes

- Updated dependencies
  - basehub@1.4.0-next.2

## 0.0.47-next.1

### Patch Changes

- Updated dependencies
  - basehub@1.4.0-next.1

## 0.0.47-next.0

### Patch Changes

- Updated dependencies
  - basehub@1.4.0-next.0

## 0.0.46

### Patch Changes

- Updated dependencies [e489ff6]
  - basehub@1.3.17

## 0.0.45

### Patch Changes

- Updated dependencies [706a871]
  - basehub@1.3.16

## 0.0.44

### Patch Changes

- Updated dependencies [89d6004]
  - basehub@1.3.15

## 0.0.43

### Patch Changes

- Updated dependencies [53b559d]
  - basehub@1.3.14

## 0.0.42

### Patch Changes

- Updated dependencies [2f7ac52]
  - basehub@1.3.13

## 0.0.41

### Patch Changes

- Updated dependencies [67e81df]
  - basehub@1.3.12

## 0.0.40

### Patch Changes

- Updated dependencies [d5b686f]
  - basehub@1.3.11

## 0.0.39

### Patch Changes

- Updated dependencies [3ea6b08]
  - basehub@1.3.10

## 0.0.38

### Patch Changes

- Updated dependencies [b847609]
  - basehub@1.3.9

## 0.0.37

### Patch Changes

- Updated dependencies [57684fc]
  - basehub@1.3.8

## 0.0.36

### Patch Changes

- Updated dependencies [fde7dd2]
  - basehub@1.3.7

## 0.0.35

### Patch Changes

- Updated dependencies [266cb69]
  - basehub@1.3.6

## 0.0.34

### Patch Changes

- Updated dependencies [0eb3565]
- Updated dependencies [345bdad]
  - basehub@1.3.5

## 0.0.33

### Patch Changes

- Updated dependencies [7e96901]
  - basehub@1.3.4

## 0.0.32

### Patch Changes

- Updated dependencies [d56c394]
  - basehub@1.3.3

## 0.0.31

### Patch Changes

- 5b846f9: Add `createRichTextWithDefaultComponents` helper for composing RichText renderers with default handlers.
- Updated dependencies [5b846f9]
  - basehub@1.3.2

## 0.0.30

### Patch Changes

- Updated dependencies [5de4bcf]
  - basehub@1.3.1

## 0.0.29

### Patch Changes

- Updated dependencies [44e0a65]
  - basehub@1.3.0

## 0.0.28

### Patch Changes

- Updated dependencies [374061a]
  - basehub@1.2.14

## 0.0.27

### Patch Changes

- Updated dependencies [ec8853c]
  - basehub@1.2.13

## 0.0.26

### Patch Changes

- Updated dependencies [d6c61b8]
- Updated dependencies [34b786f]
  - basehub@1.2.12

## 0.0.25

### Patch Changes

- Updated dependencies [f3a0b60]
  - basehub@1.2.11

## 0.0.24

### Patch Changes

- Updated dependencies [554854e]
  - basehub@1.2.10

## 0.0.23

### Patch Changes

- Updated dependencies [03c9941]
  - basehub@1.2.9

## 0.0.22

### Patch Changes

- Updated dependencies [edfb6a2]
  - basehub@1.2.8

## 0.0.21

### Patch Changes

- Updated dependencies [2806e97]
  - basehub@1.2.7

## 0.0.20

### Patch Changes

- Updated dependencies [46232c4]
- Updated dependencies [8b13701]
  - basehub@1.2.6

## 0.0.19

### Patch Changes

- Updated dependencies [e21f970]
  - basehub@1.2.5

## 0.0.18

### Patch Changes

- Updated dependencies [da951ae]
  - basehub@1.2.4

## 0.0.17

### Patch Changes

- Updated dependencies [cfeb13b]
  - basehub@1.2.3

## 0.0.16

### Patch Changes

- Updated dependencies [01b6865]
  - basehub@1.2.2

## 0.0.15

### Patch Changes

- Updated dependencies [8224267]
  - basehub@1.2.1

## 0.0.15-next.0

### Patch Changes

- Updated dependencies
  - basehub@1.2.1-next.0

## 0.0.14

### Patch Changes

- Updated dependencies [244d9c1]
  - basehub@1.2.0

## 0.0.13

### Patch Changes

- Updated dependencies [1cce612]
  - basehub@1.1.0

## 0.0.12

### Patch Changes

- Updated dependencies [ef95aad]
  - basehub@1.0.1

## 0.0.11

### Patch Changes

- Updated dependencies [36a4e02]
  - basehub@1.0.0

## 0.0.10

### Patch Changes

- Updated dependencies [158e1a3]
  - basehub@0.0.10

## 0.0.9

### Patch Changes

- Updated dependencies [bab5c5b]
  - basehub@0.0.9

## 0.0.8

### Patch Changes

- Updated dependencies [9a2b88f]
  - basehub@0.0.8

## 0.0.7

### Patch Changes

- Updated dependencies [c354c23]
  - basehub@0.0.7

## 0.0.6

### Patch Changes

- Updated dependencies [09fc5ca]
  - basehub@0.0.6

## 0.0.5

### Patch Changes

- Updated dependencies [509b984]
  - basehub@0.0.5

## 0.0.4

### Patch Changes

- Updated dependencies [51ca886]
  - basehub@0.0.4

## 0.0.3

### Patch Changes

- Updated dependencies [b17ac04]
  - basehub@0.0.3

## 0.0.2

### Patch Changes

- Updated dependencies [a8ae53b]
  - basehub@0.0.2
