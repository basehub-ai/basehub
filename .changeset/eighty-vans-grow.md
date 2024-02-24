---
"basehub": major
"playground": patch
---

## Introducing `Pump`: Fast Refresh for Your Content

This new major introduces `react-pump`, a component that brings realtime updates from BaseHub into your app. Via a combination of React Server Components, React Server Actions, and the existing `basehub` SDK, it has a very elegant API and pushes forward our vision of making content editing (and previewing) seamless.

This is a short example of how to use it:

```tsx
import { Pump } from "basehub/react-pump";

const Page = () => {
  const yourLogicForDraftMode = true // in Next.js, you'd use draftMode()
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

Enjoy, and go write!
