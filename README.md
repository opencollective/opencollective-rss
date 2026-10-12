# 📰 opencollective-rss

A lightweight TypeScript service to generate RSS feeds for updates from any [Open Collective](https://opencollective.com) account, using GraphQL and Hono.

## ✨ Features

- ⚡ Fast and modern HTTP server using [Hono](https://hono.dev)
- 🔒 Fully type-safe thanks to [GraphQL Code Generator](https://www.graphql-code-generator.com/)
- 🧼 Linted and formatted with ESLint + Prettier
- ✅ Tested with Vitest
- 📡 RSS feed generation using [`rss`](https://www.npmjs.com/package/rss)
- 📦 Deployable to any Node/Edge platform (Cloudflare Workers, Vercel, etc.)

## 🧪 Endpoint

- **GET** `/[accountSlug]/updates.rss`

Example:  
`/babel/updates.rss`

Returns an RSS feed of the latest updates from the given Open Collective account.

## 📦 Scripts

```bash
# Start dev server
npm run dev

# Type check
npm run build

# Lint and format
npm run lint
npm run format

# Run tests
npm run test

# Generate types and SDK from GraphQL schema
npm run codegen
```

## Resources

- [Open Collective GraphQL API](https://graphql-docs-v2.opencollective.com/access)

### Turborepo tasks

Use the usual npm commands: `npm run build`, `npm run lint`, `npm test`,
`npm run type:check`, and `npm run format:check`. They run through
Turbo by default. Development and watch commands remain uncached; checks and
compilation use the declared cache inputs and dependency graph.

Forward runner arguments as usual, for example `npm test -- path/to/test`.
Internal `:task` scripts contain the underlying commands and are scheduled directly
by the parent workspace to avoid invoking Turbo recursively. For advanced Turbo
options, use `npm run turbo -- run lint:task --dry=json`. Standalone installs
keep this repository's own lockfile.

### Remote cache in CI

CI uses Vercel Remote Cache through GitHub OIDC for repository branch pushes and
same-repository pull requests. Fork PRs and runs without `TURBO_TEAM` use local
caching. The organization-level `TURBO_TEAM` Actions variable is already available
in this repository; no `TURBO_TOKEN` repository secret is needed.

In Vercel team Settings → Build and Deployment → OIDC Policies for CLI Access,
create or update a Turborepo CLI policy for `opencollective/opencollective-rss` and
`.github/workflows/ci.yml`. Allow branch-push and pull-request claims, use the
default audience, and remove any main-only branch restriction. Keep repository
and workflow restrictions, and update existing policies instead of creating
overlapping ones. The pinned setup action exchanges GitHub OIDC tokens for a
short-lived cache token before Turbo runs and revokes it at job completion.

See [Vercel's OIDC setup](https://vercel.com/docs/monorepos/remote-caching/external-ci-cd#create-an-oidc-policy).
