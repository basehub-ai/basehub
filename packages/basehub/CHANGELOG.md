# basehub

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
