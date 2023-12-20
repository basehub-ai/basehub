# basehub 🪄

JavaScript / TypeScript SDK for [BaseHub](https://basehub.com/), the first AI-native content hub.

**Features:**

- ✨ Infers types from your BaseHub repository... _meaning IDE autocompletion works great._
- 🏎️ No dependency on graphql... _meaning your bundle is more lightweight._
- 🌐 Works everywhere `fetch` is supported... _meaning you can use it anywhere._

## Install

```zsh
npm i basehub
```

## Quickstart

#### 1. Set required environment variable:

```zsh
# .env

BASEHUB_URL="https://basehub.com/<team-slug>/<repo-slug>/graphql?token=<read-token>"

# or disambiguated

BASEHUB_TEAM="<team-slug>"
BASEHUB_REPO="<repo-slug>"
BASEHUB_TOKEN="<read-token>"
```

💡 Get your read token from the Connect panel: `https://basehub.com/<team-slug>/<repo-slug>/connect`

#### 2. Generate client:

```zsh
npx run basehub
```

**❗️ Important:** make sure you run the generator before your app's build step. A common pattern is to run it in your [postinstall script](https://docs.npmjs.com/cli/v9/using-npm/scripts).

#### 3. Use in your app:

This example uses [Next.js](https://nextjs.org/), but you can use any JavaScript framework.

```tsx
// app/page.tsx

import { basehub } from "basehub";

const Page = async () => {
  const firstQuery = await basehub().query({
    __typename: true,
  });

  return <pre>{JSON.stringify(firstQuery, null, 2)}</pre>;
};

export default Page;
```

## Choosing another output directory with `--output`

By default, `basehub` will generate the SDK inside `node_modules/basehub/dist/generated-client`. While this is a good default as it allows you to quickly get started, this approach modifies `node_modules` which, depending on your setup, might result in IDE or build pipeline issues. If this happens, please report the issue!

Additionally, you might want to connect to more than one BaseHub Repository.

To solve this, `basehub` supports an `--output` argument that specifies the directory in which the SDK will be generated. You then can use this directory to import generated stuff. For example: running `basehub --output .basehub` will generate the SDK in a new `.basehub` directory in the root of your project. You can then `import { basehub } from '../<path>/.basehub'` and use the SDK normally.

We recommend including the new `--output` directory to `.gitignore`, as these generated files are not precisely relevant to Git, but that's up to you and shouldn't affect the SDK's behavior.

## About the SDK

The `basehub` sdk is generated with [GenQL](https://genql.dev/) (read their [docs](https://genql.dev/docs)). Thank you [Morse](https://github.com/remorses) for creating such a great package.
