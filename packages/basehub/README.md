# basehub 🪄

The First AI-Native Headless CMS. JavaScript / TypeScript SDK.

## Install

```zsh
npm i basehub
```

## Quickstart for Next.js

#### 1. Set required environment variable:

```zsh
# .env

BASEHUB_URL="https://basehub.com/<team-slug>/<repo-slug>/graphql?token=<read-token>"
```

- Get your read token in the Connect panel: `https://basehub.com/<team-slug>/<repo-slug>/connect`

#### 2. Run your first query:

```tsx
// /app/page.ts

import { basehub } from "basehub";

const Page = async () => {
  const firstQuery = await basehub.query({
    __typename: true,
  });

  return <pre>{JSON.stringify(firstQuery, null, 2)}</pre>;
};

export default Page;
```

#### 3. (Optional) Generate TypeScript types for Intellisense:

```zsh
npm run basehub
```

Tip: to keep your types up to date, you can add `basehub` to your [postinstall script](https://docs.npmjs.com/cli/v9/using-npm/scripts).
