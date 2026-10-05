# Development conventions

Keep the portfolio straightforward: semantic HTML, CSS design tokens and small JavaScript enhancements. Explain non-obvious behavior in comments; avoid framework dependencies for simple content changes.

## Formatting and validation

```bash
npm install
npm run format:check
npm run check
```

To format changed files, run `npm run format`. Preview at mobile and desktop sizes before committing layout changes. Verify contact links and case-study expansion. Update the README image if the landing page changes.

## Content and accessibility

Use descriptive link text and alternative text. Retain keyboard focus styles, reduced-motion support and heading order. Keep unverified results and planned capabilities clearly labeled. Never commit private credentials or third-party personal data.

The source on the default branch represents the current portfolio. Earlier Git history remains available without maintaining draft-version promises in the README.
