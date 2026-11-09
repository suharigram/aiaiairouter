# AiAiAiRouter

The official marketing website and developer documentation for AiAiAiRouter — one OpenAI-compatible API for Kimi, ChatGPT, GLM and 99+ models.

Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui. The interface uses a dark, developer-focused design with responsive layouts, subtle motion, and reduced-motion support.

## Features

- Product landing page with interactive routing and SDK examples
- Filterable model catalog with typed model data and official pricing sources
- Developer, Team, and Enterprise pricing plans
- Client-side token-based billing calculator
- Nine documentation guides with cURL, JavaScript, and Python examples
- API reference for models, chat completions, usage, and keys
- Validated contact form with explicit backend-integration status
- Privacy, Terms, Refund, and Cookie policies
- Responsive navigation and accessible keyboard states
- Unique metadata, canonical URLs, Open Graph, Twitter Cards, and JSON-LD
- Generated sitemap, robots.txt, and social preview image

## Tech Stack

- [Next.js 16](https://nextjs.org/) with App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) and Radix UI
- [Lucide](https://lucide.dev/) icons

## Getting Started

### Prerequisites

- Node.js 20.9 or newer
- npm 10 or newer

### Installation

```bash
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

All configuration is public and uses the `NEXT_PUBLIC_` prefix. Do not store API secrets or private credentials in these variables.

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical website origin used by metadata, sitemap, and robots.txt | `http://localhost:3000` in `.env.example` |
| `NEXT_PUBLIC_CONSOLE_URL` | Destination for account and console CTAs | `https://console.aiaiairouter.com` |
| `NEXT_PUBLIC_API_URL` | API base URL shown in code examples | `https://api.aiaiairouter.com/v1` |
| `NEXT_PUBLIC_GITHUB_URL` | GitHub profile or repository | `https://github.com/GonidonCloud/AiAiAiRouter` |
| `NEXT_PUBLIC_DISCORD_URL` | Discord invitation | `https://discord.gg/aiaiairouter` |
| `NEXT_PUBLIC_YOUTUBE_URL` | YouTube channel | `https://youtube.com/@AiAiAiRouter` |
| `NEXT_PUBLIC_TELEGRAM_URL` | Telegram channel | `https://t.me/AiAiAiRouter` |
| `NEXT_PUBLIC_HUGGINGFACE_URL` | Hugging Face profile | `https://huggingface.co/GonidonCloud` |

Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin in production, without a trailing slash. Redeploy after changing environment variables because public values are embedded at build time.

## Available Scripts

```bash
npm run dev        # Start the development server
npm run build      # Create an optimized production build
npm run start      # Serve the production build
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript without emitting files
```

Before deploying, verify the project with:

```bash
npm run lint
npm run typecheck
npm run build
```

## Project Structure

```text
app/
├── api-reference/       # Endpoint reference
├── docs/                # Documentation index and dynamic guide pages
├── models/              # Model catalog
├── pricing/             # Plans and billing calculator
├── privacy/             # Privacy Policy
├── terms/               # Terms of Service
├── globals.css          # Theme, typography, and animations
├── layout.tsx           # Shared layout and global structured data
├── opengraph-image.tsx  # Generated social preview
├── robots.ts            # robots.txt
└── sitemap.ts           # XML sitemap
components/
├── ui/                  # Reusable shadcn/ui primitives
└── ...                  # Navigation, catalog, forms, and code examples
lib/
├── api-reference.ts     # Typed API reference content
├── docs.ts              # Documentation content and navigation
├── env.ts               # Public environment configuration
├── metadata.ts          # Shared metadata generation
└── models.ts            # Typed model catalog data
```

## Model and Pricing Data

Model specifications and reference prices live in `lib/models.ts`. Pricing cards link to official provider sources. Models without a confirmed reference price display **Check provider pricing** instead of an estimated or invented rate.

The billing calculator runs entirely in the browser. Its results are estimates rather than invoices or price guarantees.

## Contact Form

The contact form currently performs client-side validation only. It does not simulate a successful server submission. Connect it to a backend or form API before enabling real message delivery.

## Deployment

The project can be deployed directly to [Vercel](https://vercel.com/):

1. Push the repository to GitHub.
2. Import it into Vercel as a new project.
3. Keep the default Next.js build settings.
4. Add the environment variables listed above.
5. Deploy and connect the production domain.
6. Update `NEXT_PUBLIC_SITE_URL` with that domain and redeploy.

Do not commit `.env` or other local environment files.

## Community

- [GitHub](https://github.com/GonidonCloud/AiAiAiRouter)
- [Discord](https://discord.gg/aiaiairouter)
- [YouTube](https://youtube.com/@AiAiAiRouter)
- [Telegram](https://t.me/AiAiAiRouter)
- [Hugging Face](https://huggingface.co/GonidonCloud)

## Contact

- Product support: [support@aiaiairouter.com](mailto:support@aiaiairouter.com)
- Privacy questions: [privacy@aiaiairouter.com](mailto:privacy@aiaiairouter.com)

---

AiAiAiRouter is developed by [GonidonCloud](https://github.com/GonidonCloud).
