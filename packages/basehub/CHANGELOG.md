# basehub

## 7.5.0

### Minor Changes

- e41cdd0: Add support for linking git branches to basehub branches

### Patch Changes

- 8945431: fix
- 8945431: Fix
- dbe9b38: Use resolvedRef in the runtime
- 1f74c57: improvements
- 8945431: Fix
- dbe9b38: fix
- b5a5bd6: sort by default or not
- 9f17428: fix
- 8d2af40: improvements
- 1f24ced: fix
- 7d76da3: log
- bc9d438: make the branch switcher work
- 7d76da3: fix resolve ref

## 7.5.0-canary.12

### Patch Changes

- fix

## 7.5.0-canary.11

### Patch Changes

- improvements

## 7.5.0-canary.10

### Patch Changes

- sort by default or not

## 7.5.0-canary.9

### Patch Changes

- fix resolve ref

## 7.5.0-canary.8

### Patch Changes

- log

## 7.5.0-canary.7

### Patch Changes

- make the branch switcher work

## 7.5.0-canary.6

### Patch Changes

- Use resolvedRef in the runtime
- fix

## 7.5.0-canary.5

### Patch Changes

- fix

## 7.5.0-canary.4

### Patch Changes

- improvements

## 7.5.0-canary.3

### Patch Changes

- fix

## 7.5.0-canary.2

### Patch Changes

- Fix

## 7.5.0-canary.1

### Patch Changes

- Fix

## 7.5.0-canary.0

### Minor Changes

- Add support for linking git branches to basehub branches

## 7.4.2

### Patch Changes

- support loading env from .dev.vars

## 7.4.1

### Patch Changes

- fix type error

## 7.4.0

### Minor Changes

- e7f7042: Auto on-demand revalidation and draftMode for Next.js

### Patch Changes

- c048383: upgrade genql
- 3edca41: made it simpler
- make sure revalidateTag is only allowed against basehub- tags
- 6f9406a: add data attr to root post revalidation
- 4e6819b: fix rendering toolbar when there are tags to revalidate
- ee86877: fix
- 9b01a98: catch

## 7.4.0-canary.7

### Patch Changes

- make sure revalidateTag is only allowed against basehub- tags

## 7.4.0-canary.6

### Patch Changes

- catch

## 7.4.0-canary.5

### Patch Changes

- fix rendering toolbar when there are tags to revalidate

## 7.4.0-canary.4

### Patch Changes

- upgrade genql

## 7.4.0-canary.3

### Patch Changes

- fix

## 7.4.0-canary.2

### Patch Changes

- add data attr to root post revalidation

## 7.4.0-canary.1

### Patch Changes

- made it simpler

## 7.4.0-canary.0

### Minor Changes

- Auto on-demand revalidation and draftMode for Next.js

## 7.3.4

### Patch Changes

- update @basehub/mutation-api-helpers

## 7.3.3

### Patch Changes

- upgrade shiki

## 7.3.2

### Patch Changes

- remove log

## 7.3.1

### Patch Changes

- Fix basehub image regression

## 7.3.0

### Minor Changes

- pass basehub.earth to assets.basehub.com in BaseHubImage

## 7.2.10

### Patch Changes

- Add controls to default video renderer

## 7.2.9

### Patch Changes

- remove unused search param

## 7.2.8

### Patch Changes

- line numbers nit

## 7.2.7

### Patch Changes

- useId to generate IDs; works on RSC also!

## 7.2.6

### Patch Changes

- set id to optional

## 7.2.5

### Patch Changes

- Support lineNumbers out of the box

## 7.2.4

### Patch Changes

- 759148a: improvements
- 759148a: include code files
- 759148a: Export use context as another entrypoint
- 759148a: dude
- 759148a: useCopyToClipboard
- 759148a: Wip code renderer
- 759148a: export useCodeBlockContext
- 759148a: Fix exports
- 759148a: types stuff

## 7.2.4-code.8

### Patch Changes

- useCopyToClipboard

## 7.2.4-code.7

### Patch Changes

- Fix exports

## 7.2.4-code.6

### Patch Changes

- Export use context as another entrypoint

## 7.2.4-code.5

### Patch Changes

- types stuff

## 7.2.4-code.4

### Patch Changes

- improvements

## 7.2.4-code.3

### Patch Changes

- dude

## 7.2.4-code.2

### Patch Changes

- export useCodeBlockContext

## 7.2.4-code.1

### Patch Changes

- include code files

## 7.2.4-code.0

### Patch Changes

- Wip code renderer

## 7.2.3

### Patch Changes

- f667be3: Pass env populated headers to Pump draft queries

## 7.2.2

### Patch Changes

- Fix race condition with watcher and async operation

## 7.2.1

### Patch Changes

- Prevent conflict of cache no-store and revalidate: 0

## 7.2.0

### Minor Changes

- Revert back to not doing thumbhash magic

### Patch Changes

- d5008d7: try another way
- 61149ce: go over annoying next.js warning
- 72f877b: Fix the way we generate placeholders: just client side, and preventing hydration mismatches with an inline script.

## 7.2.0-canary.3

### Minor Changes

- Revert back to not doing thumbhash magic

## 7.1.3-canary.2

### Patch Changes

- try another way

## 7.1.3-canary.1

### Patch Changes

- go over annoying next.js warning

## 7.1.3-canary.0

### Patch Changes

- Fix the way we generate placeholders: just client side, and preventing hydration mismatches with an inline script.

## 7.1.2

### Patch Changes

- forwardRef basehub image

## 7.1.1

### Patch Changes

- Fix client pump not removing aliases

## 7.1.0

### Minor Changes

- 6be2d3f: Support raw thumbhashes in basehub image

### Patch Changes

- 477049b: Improve prop descriptions

## 7.1.0-canary.1

### Patch Changes

- Improve prop descriptions

## 7.1.0-canary.0

### Minor Changes

- Support raw thumbhashes in basehub image

## 7.0.13

### Patch Changes

- a5b750f: Export BaseHubImageProps

## 7.0.12

### Patch Changes

- 6042f19: Override placeholder so that it doesn't throw a typescript error

## 7.0.11

### Patch Changes

- 8b27ee9: Add unoptimized at BasehubImage for .svg files

## 7.0.10

### Patch Changes

- 1f96141: Remove React from direct dependencies in favor of existing peer dependency declaration.
- 249a647: Pin `@radix-ui/react-slot` dependency to SemVer MAJOR

## 7.0.9

### Patch Changes

- Fix watcher coming up twice

## 7.0.8

### Patch Changes

- Improve watcher logic

## 7.0.7

### Patch Changes

- patch
- Fix error log when token is not found
- 4940acc: Auto alias union fields to prevent conflicts
- e83c917: replaceSystemAliases on pump response also

## 7.0.7-canary.3

### Patch Changes

- Fix error log when token is not found

## 7.0.7-canary.2

### Patch Changes

- patch

## 7.0.7-canary.1

### Patch Changes

- replaceSystemAliases on pump response also

## 7.0.7-canary.0

### Patch Changes

- Auto alias union fields to prevent conflicts

## 7.0.6

### Patch Changes

- Fix transactionAwaitable type

## 7.0.5

### Patch Changes

- fix transactionAwaitable type signature

## 7.0.4

### Patch Changes

- update @basehub/mutation-api-helpers

## 7.0.3

### Patch Changes

- update @basehub/mutation-api-helpers

## 7.0.2

### Patch Changes

- add a build-manifest so we cleanup existing outputs when version changes

## 7.0.1

### Patch Changes

- Add aria label to toolbar btn

## 7.0.0

### Major Changes

- Change asset delivery domain from basehub.earth to assets.basehub.com

  basehub.earth will still work, but the response from our API will default to the new origin.

  This is a breaking change because many developers already allowed basehub.earth as a domain for next/image and not yet assets.basehub.earth

  So, why the change?

  basehub.earth is the "raw" asset URL (that's stored in cloudflare r2). In order to perform image optimization and improve caching (assets are now cached as immutable), we needed to place a worker in front of r2. This new worker is in assets.basehub.com

  Oh, also! We're introducing our next/image loader.

  ```tsx
  import { BaseHubImage, basehubImageLoader } from "basehub/next-image";
  ```

  `BaseHubImage` just returns the regular `next/image` but passes a loader that understands our image optimization cdn. This is great, as you can leverage our cdn instead of needing the asset to pass again via Next.js' optimization pipeline. Also, the URLs will be cleaner.

  Enjoy!

## 6.0.7

### Patch Changes

- improve transaction typings

## 6.0.6

### Patch Changes

- update genql

## 6.0.5

### Patch Changes

- improve race conditioning logic

## 6.0.4

### Patch Changes

- fix missing type exports

## 6.0.3

### Patch Changes

- Fix race conditions on use search

## 6.0.2

### Patch Changes

- add content prop and deprecate children for the RichText

## 6.0.1

### Patch Changes

- 1d57369: Improve toolbar styles

## 6.0.0

### Major Changes

- 2dc79d3: Pass everything except for our CLI to ESM only
- 5f2f9ea: Fix some old exports
- bf871c3: Implement response hashing to dedupe queries
- d25c4dc: Add api versioning

#### New API Versioning

We work hard to avoid breaking changes in our GraphQL API (api.basehub.com/graphql). In fact, up until now, we've never had one. That being said, there were some little quirks we wanted to fix, and therefore we decided to create a new API Version.

`basehub@6` will query `api.basehub.com/graphql?api-version=1` by default. You can override this behaviour and go back to the default version by using the environment variable `BASEHUB_API_VERSION="default"`. Older versions of `basehub` will still query the default version, so using the new API Version is totally opt in.

#### GraphQL API Version 1

We fixed two quirks:

1. Collection template components' names, in GraphQL, were inferred from the component's "display title", or from the collection's api name. The component's own api name was ignored. No any more.
2. Reference and union blocks are represented in GraphQL by a GraphQL Union. Before this new version, reference and union blocks that accepted just one component value were not represented by a Union, but rather referenced that component directly. While we designed this with good intentions—we wanted to save developers of doing `...on SomeFragment` for simple use cases—, this created more harm than good, as the action of allowing one more option would break apps. Fixed.

#### ESM Only

Before this version, we had a nasty mix between cjs and esm that introduced problems with some vite-based frameworks (sveltekit, astrok, remix, etc). We now only ship esm. Hopefully this doesn't break stuff elsewhere. We don't think so, as people often times use `basehub` with a modern web framework.

## 6.0.0-esm-only.4

### Patch Changes

- Implement response hashing to dedupe queries
- d25c4dc: Add api versioning

## 6.0.0-esm-only.1

### Patch Changes

- Fix some old exports

## 6.0.0-esm-only.0

### Major Changes

- Pass everything except for our CLI to ESM only

## 5.2.5

### Patch Changes

- Expose textMatch prop and also cache search results by default

## 5.2.4

### Patch Changes

- fallback to first snippet if array of snippets

## 5.2.3

### Patch Changes

- ignore \_id and \_slug in search fallback searcher

## 5.2.2

### Patch Changes

- 33819d9: Refresh on draft mode activation, styling corrections, full drag handle.

## 5.2.1

### Patch Changes

- trigger release

## 5.2.0

### Minor Changes

- Support more specific types for select blocks

## 5.1.1

### Patch Changes

- af73b24: Lazy loading
- af73b24: fix react import
- af73b24: Fixed dts generation

## 5.1.1-canary.2

### Patch Changes

- Lazy loading

## 5.1.1-canary.1

### Patch Changes

- fix react import

## 5.1.1-canary.0

### Patch Changes

- Fixed dts generation

## 5.1.0

### Minor Changes

- aeac3b6: Toolbar V1.0:

  - Hardcoded & disabled branch switcher
  - Draft mode button

## 5.0.3

### Patch Changes

- use revalidate: 0 instead of no-store for draft requests

## 5.0.2

### Patch Changes

- Update @basehub/genql

## 5.0.1

### Patch Changes

- 24d2545: Introduce analytics utils

## 5.0.0

### Major Changes

- 335ae9a:

  ## Context

  Before this version, the default output path of the generated code `basehub` yielded was within the basehub node_module itself. This allowed a great starting point, as developers could instantly `import { basehub } from 'basehub'` and it would just work.

  But, generating the SDK and placing it in `node_modules` was problematic, because the TS server is generally not watching `node_modules`. Because of this, users were required to "Restart TS Server" every time they run the SDK generator. Although this is not a big deal once you get accustomed to it, it's very problematic for folks that don't know about this trick, and about the reason of why this doesn't work. So, in other words, this was shit.

  Because of this, we introduced the `--output` arg. With this argument, the developer could specify a custom output. One that their TS server would watch and therefore would know about when it changed. This worked great.

  After we introduced and started using `--watch`, the path forward became clear: it was preferrable to run `basehub --output .basehub` by default rather than start fast but then need to transition into a custom output because the default flow just wouldn't scale well.

  ## Breaking Change

  So this version introduces a single, potentially breaking, change: we now output to `.basehub` by default. This means, if you have a regular Next.js App, you'll now see a `.basehub` directory next to your `.next`, `node_modules`, etc.

  ### Will I need to change all my imports?

  No. This release includes a clever (hacky, maybe) trick: when you run `basehub`, we'll automatically alias the package that's stored in `node_modules` to target the new output path, and so the `import {} from 'basehub'` should work out of the box.

  ### Does .basehub need to be .gitignored?

  Yes. And we'll try to automatically do that for you if we find your .gitignore file.

  ***

  Please let us know if you encounter any issues.

## 5.0.0-canary.0

### Major Changes

- Default to outputting stuff into .basehub and aliasing basehub to it.

## 4.0.17

### Patch Changes

- Support <kbd> in rich text

## 4.0.16

### Patch Changes

- defbe89: Make recent searches keys just use the document id
- 6c55965: Introduce `useSearch` (alpha)
- 452a6de: nits
- c706083: upd
- 0df0a6e: expose onHitSelect
- 364ff62: Fix querySelector bug
- 576f0bc: changes
- 177fd64: expose search files in package.json
- 4574dab: improve ts
- f4c4b75: add \_getFieldHighlight helper
- 08ee565: nits
- 97c1ce1: improve types
- 0806303: export more types
- 12fa9ee: Implement SearchBox
- 6e7bd4a: add selection prefill
- 0ecdf13: improve recent searches highlighting
- d5e33c9: fix next link bug

## 4.0.16-canary.16

### Patch Changes

- add \_getFieldHighlight helper

## 4.0.16-canary.15

### Patch Changes

- Make recent searches keys just use the document id

## 4.0.16-canary.14

### Patch Changes

- Fix querySelector bug

## 4.0.16-canary.13

### Patch Changes

- fix next link bug

## 4.0.16-canary.12

### Patch Changes

- expose onHitSelect

## 4.0.16-canary.11

### Patch Changes

- nits

## 4.0.16-canary.10

### Patch Changes

- improve recent searches highlighting

## 4.0.16-canary.9

### Patch Changes

- improve ts

## 4.0.16-canary.8

### Patch Changes

- export more types

## 4.0.16-canary.7

### Patch Changes

- add selection prefill

## 4.0.16-canary.6

### Patch Changes

- improve types

## 4.0.16-canary.5

### Patch Changes

- Implement SearchBox

## 4.0.16-canary.4

### Patch Changes

- upd

## 4.0.16-canary.3

### Patch Changes

- nits

## 4.0.16-canary.2

### Patch Changes

- changes

## 4.0.16-canary.1

### Patch Changes

- expose search files in package.json

## 4.0.16-canary.0

### Patch Changes

- Introduce `useSearch` (alpha)

## 4.0.15

### Patch Changes

- e0d9ebf: Update mutation-api-helpers

## 4.0.14

### Patch Changes

- 9ed4d10: Update Deps

## 4.0.13

### Patch Changes

- 2fe5b05: Update @basehub/mutation-api-helpers dependency to latest version

## 4.0.12

### Patch Changes

- Upgrade genql

## 4.0.11

### Patch Changes

- prevent commenting on .graphql file

## 4.0.10

### Patch Changes

- remove a remaining log

## 4.0.9

### Patch Changes

- Logging improvements

## 4.0.8

### Patch Changes

- f7fabb2: Update dependencies, add support for date and color blocks via the mutation API

## 4.0.7

### Patch Changes

- support caption for videos

## 4.0.6

### Patch Changes

- Fix an issue with nested pumps

## 4.0.5

### Patch Changes

- 8cee68d: React RichText component now implements GithubSlugger to generate the headings IDs

## 4.0.4

### Patch Changes

- 715b7d8: update genql
- b0d2975: cache no store in draft mode

## 4.0.3

### Patch Changes

- fix some lil bugs

## 4.0.2

### Patch Changes

- update genql

## 4.0.1

### Patch Changes

- Fix exports issue

## 4.0.0

### Major Changes

- 7a85095: # New `fragmentOn` helper to extract fragments

  In this new major version, we're introducing `fragmentOn`, a simpler way to create fragments in the `basehub` SDK.

  Previously, in order to reuse a fragment, you'd do something like this:

  ```ts
  // old way 👎
  import {
    LinkComponentGenqlSelection,
    LinkComponent,
    FieldsSelection,
  } from "basehub";

  const LinkFragment = {
    href: true,
    label: true,
  } satisfies LinkComponentGenqlSelection;

  // extract the type
  type LinkFragment = FieldsSelection<LinkComponent, typeof LinkFragment>;
  ```

  Looks simple, but it's a bit hard to understand. You need to know that we're exposing a `LinkComponentGenqlSelection`, and that you should use the `satisfies` so the object's type is constrained but also can be more specific. Then, to extract the type, you'd get `FieldsSelection`, and finally, `LinkComponent`. A lot of types!

  Moreover, if you needed to create another fragment, it'd be this same process, over and over again.

  This is how it's done in the new version:

  ```ts
  // new way 👍
  import { fragmentOn } from "basehub";

  const LinkFragment = fragmentOn("LinkComponent", {
    href: true,
    label: true,
  });

  // extract the type
  type LinkFragment = fragmentOn.infer<typeof LinkFragment>;
  ```

  Much simpler!

  ## Why is this a breaking change

  Before this version, we exposed a lot of the internal types from `'basehub'`. We now don't. Some applications might depend on this, and that's why this is a breaking change. If you need those types for some reason that wasn't discussed in this document, feel free to raise an issue and we can see to bring them back.

## 3.2.0

### Minor Changes

- 8491d89: Introduce --watch mode, plus a new `basehub dev` command to help you get up and running faster in your local environment.

## 3.2.0-next.0

### Minor Changes

- Introduce --watch mode, plus a new `basehub dev` command to help you get up and running faster in your local environment.

## 3.1.10

### Patch Changes

- update @basehub/mutation-api-helpers

## 3.1.9

### Patch Changes

- Add support custom rel to anchor in target \_blank

## 3.1.8

### Patch Changes

- Accept "\_target" in rich text links and add it to default handler

## 3.1.7

### Patch Changes

- Fix bug with automatic draft mode

## 3.1.6

### Patch Changes

- Manage error for not async pump children

## 3.1.5

### Patch Changes

- Better pump url management

## 3.1.4

### Patch Changes

- Receive output from vars optionally

## 3.1.3

### Patch Changes

- Hoist pump data to prevent deduping errors

## 3.1.2

### Patch Changes

- Better errror logging

## 3.1.1

### Patch Changes

- use draft from .env if available

## 3.1.0

### Minor Changes

- efee77d: accept --env-prefix argument, and some other generator fixes

## 3.0.8

### Patch Changes

- 1fa4021: Support `--banner`.

## 3.0.7

### Patch Changes

- fix pumpToken re renders

## 3.0.6

### Patch Changes

- bea7eb6: Keep the read token always in the server, plus hit pump directly to improve performance.

## 3.0.5

### Patch Changes

- 2070118: Resolve basehub with resolve-pkg for better monorepo support.
- 2070118: Cleanup

## 3.0.5-next.1

### Patch Changes

- Cleanup

## 3.0.5-next.0

### Patch Changes

- Resolve basehub with resolve-pkg for better monorepo support.

## 3.0.4

### Patch Changes

- add support for custom --token arg

## 3.0.3

### Patch Changes

- f5c1b63: Improved `null` error handling for API responses. The toast now renders more relevant content, and your app shouldn't break on initial load.
- a743356: add toasts by the amazing sonner

## 3.0.2

### Patch Changes

- update @basehub/mutation-api-helpers

## 3.0.1

### Patch Changes

- update @basehub/mutation-api-helpers

## 3.0.0

### Major Changes

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

## 2.0.1

### Patch Changes

- d4c0021: fix multiple pusher connections being created

## 2.0.0

### Major Changes

- b3ff244: Add next-pump: fast refresh for your content. And also go full ESM.

## 1.4.0

### Minor Changes

- bc3492b: Add next pump

### Patch Changes

- bc3492b: Expose next pump in files
- b05f553: Infer app origin
- bc3492b: tweak react import
- 9d50ff5: fixes
- a39bb9f: append ts-nocheck for generated ts files
- bc3492b: react types bug
- 3529057: support multiple paralel queries

## 1.4.0-next.7

### Patch Changes

- append ts-nocheck for generated ts files

## 1.4.0-next.6

### Patch Changes

- fixes

## 1.4.0-next.5

### Patch Changes

- support multiple paralel queries

## 1.4.0-next.4

### Patch Changes

- Infer app origin

## 1.4.0-next.3

### Patch Changes

- react types bug

## 1.4.0-next.2

### Patch Changes

- tweak react import

## 1.4.0-next.1

### Patch Changes

- Expose next pump in files

## 1.4.0-next.0

### Minor Changes

- Add next pump

## 1.3.17

### Patch Changes

- e489ff6: pass code as a string param

## 1.3.16

### Patch Changes

- 706a871: Pass language to code handler

## 1.3.15

### Patch Changes

- 89d6004: expose language on pre

## 1.3.14

### Patch Changes

- 53b559d: Actually pass caption

## 1.3.13

### Patch Changes

- 2f7ac52: Add caption to image

## 1.3.12

### Patch Changes

- 67e81df: update genql to fix --turbo

## 1.3.11

### Patch Changes

- d5b686f: make rich text return a ReactNode type

## 1.3.10

### Patch Changes

- 3ea6b08: expose token as a parameter to basehub, plus add --ts-only option

## 1.3.9

### Patch Changes

- b847609: nit

## 1.3.8

### Patch Changes

- 57684fc: export type helper to for getting handler props

## 1.3.7

### Patch Changes

- fde7dd2: support more dom elements

## 1.3.6

### Patch Changes

- 266cb69: Update GenQL and fix a typescript nit

## 1.3.5

### Patch Changes

- 0eb3565: remove error also from mark
- 345bdad: add children to inline mark type

## 1.3.4

### Patch Changes

- 7e96901: Fix type with custom component marks

## 1.3.3

### Patch Changes

- d56c394: don't throw if basehub-block is not sent through

## 1.3.2

### Patch Changes

- 5b846f9: Add `createRichTextWithDefaultComponents` helper for composing RichText renderers with default handlers.

## 1.3.1

### Patch Changes

- 5de4bcf: Update CustomBlocks return type -- Now typescript will accept all ReactNode types as the return type for custom basehub blocks handlers

## 1.3.0

### Minor Changes

- 44e0a65: Expose `--output` arg to specify a custom output directory.

## 1.2.14

### Patch Changes

- 374061a: ---

  ## "basehub": patch

  Headings now receive their `id` when using the default handlers for them

## 1.2.13

### Patch Changes

- ec8853c: add slugify for more robust heading ids

## 1.2.12

### Patch Changes

- d6c61b8: type id as string for headings
- 34b786f: Add support for inline componentes in rich text renderer

## 1.2.11

### Patch Changes

- f3a0b60: return stringified version of error, so that it displays fully on terminals

## 1.2.10

### Patch Changes

- 554854e: Fixes error when re-rendering the rich text renderer component in the following marks:
  - Code
  - Heading

## 1.2.9

### Patch Changes

- 03c9941: support draft param

## 1.2.8

### Patch Changes

- edfb6a2: fix original marks getting mutated non-intentionally

## 1.2.7

### Patch Changes

- 2806e97: fix nested mark issue

## 1.2.6

### Patch Changes

- 46232c4: fix generated IDs
- 8b13701: don't add the id to headings

## 1.2.5

### Patch Changes

- e21f970: some typing nits

## 1.2.4

### Patch Changes

- da951ae: pass id prop to heading nodes

## 1.2.3

### Patch Changes

- cfeb13b: guard for undefined value in rich text

## 1.2.2

### Patch Changes

- 01b6865: New RichText Renderer for React.

## 1.2.1

### Patch Changes

- 8224267: Remove postinstall script which sometimes throws

## 1.2.1-next.0

### Patch Changes

- Remove postinstall script which sometimes throws

## 1.2.0

### Minor Changes

- 244d9c1: Accept just BASEHUB_TOKEN, update to use the new API, with backwards compat.

## 1.1.0

### Minor Changes

- 1cce612: Support .env in monorepos, and .env.development, etc...

## 1.0.1

### Patch Changes

- ef95aad: Don't throw an error for origin mismatches

## 1.0.0

### Major Changes

- 36a4e02: Some extra security measures, and we're in v1!

## 0.0.10

### Patch Changes

- 158e1a3: remove console logs

## 0.0.9

### Patch Changes

- bab5c5b: Debug

## 0.0.8

### Patch Changes

- 9a2b88f: debug

## 0.0.7

### Patch Changes

- c354c23: include scripts on bundle

## 0.0.6

### Patch Changes

- 09fc5ca: test postinstall hook

## 0.0.5

### Patch Changes

- 509b984: bundle generated client with esbuild

## 0.0.4

### Patch Changes

- 51ca886: receive draft query param, if sent

## 0.0.3

### Patch Changes

- b17ac04: Expose options to basehub export

## 0.0.2

### Patch Changes

- a8ae53b: Iteration.
