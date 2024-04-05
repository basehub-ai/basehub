---
"basehub": major
"playground": patch
---

# New `fragmentOn` helper to extract fragments

In this new major version, we're introducing `fragmentOn`, a simpler way to create fragments in the `basehub` SDK.

Previously, in order to reuse a fragment, you'd do something like this:

```ts
// old way 👎
import { LinkComponentGenqlSelection, LinkComponent, FieldsSelection } from 'basehub'

const LinkFragment = {
  href: true,
  label: true
} satisfies LinkComponentGenqlSelection

// extract the type
type LinkFragment = FieldsSelection<LinkComponent, typeof LinkFragment>
```

Looks simple, but it's a bit hard to understand. You need to know that we're exposing a `LinkComponentGenqlSelection`, and that you should use the `satisfies` so the object's type is constrained but also can be more specific. Then, to extract the type, you'd get `FieldsSelection`, and finally, `LinkComponent`. A lot of types!

Moreover, if you needed to create another fragment, it'd be this same process, over and over again.

This is how it's done in the new version:

```ts
// new way 👍
import { fragmentOn } from 'basehub'

const LinkFragment = fragmentOn("LinkComponent", {
  href: true,
  label: true
})

// extract the type
type LinkFragment = fragmentOn.infer<typeof LinkFragment>
```

Much simpler!

## Why is this a breaking change

Before this version, we exposed a lot of the internal types from `'basehub'`. We now don't. Some applications might depend on this, and that's why this is a breaking change. If you need those types for some reason that wasn't discussed in this document, feel free to raise an issue and we can see to bring them back.
