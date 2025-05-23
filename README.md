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
