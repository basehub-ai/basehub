---
"basehub": major
---

- Renamed `lang` to `language` in the `<CodeBlock />` component, to better match `<RichText />`'s types.
- In the `<RichText />` component, we made inline code be overridable just via `code`, and the full width code block be overridable via `pre`. Previously, code blocks passed both via `pre` and via `code` (in the latter case, with `isInline` set to `false`), which was quite confusing.

* Automatic draftMode detection for Next.js
* We now preserve the ref (branch) selection in cookies, so that server-side request query the correct ref
