---
"basehub": major
---

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

---

Please let us know if you encounter any issues.
