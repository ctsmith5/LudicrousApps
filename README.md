# LudicrousApps

Marketing site for **LudicrousApps** — a modern landing page built with **Bun + Vite + React + Tailwind CSS**.

## Getting started

```bash
bun install
```

## Development

```bash
bun dev
```

Then open the URL printed in the terminal.

## Production build

```bash
bun run build
```

## Preview the production build locally

```bash
bun run preview
```

## Deployment notes (high level)
- The built static site lives in `dist/` after `bun run build`.
- For Cloudflare Pages:
  - Build command: `bun run build`
  - Output directory: `dist`
  - If your domain is registered on Cloudflare, DNS is already set up — just attach `ludicrousapps.io` in your Pages project’s Custom Domains.

## Rummage Support ghost page

This site includes a hidden support page for the iOS App Store listing:
- `https://ludicrousapps.io/RummageSupport`

It is **not linked** from the main site navigation, but is accessible via direct URL.

### Support API (Google Cloud Run)
The support form POSTs to your backend:
- `POST https://rummage-backend-287868745320.us-central1.run.app/api/support`

Payload includes:
- `name`
- `email`
- `message`
- `recaptchaToken` (also sent as `gRecaptchaResponse` for compatibility)

Make sure your backend allows CORS from `https://ludicrousapps.io` (and supports `OPTIONS`).

### reCAPTCHA v2 (checkbox)
The client uses reCAPTCHA v2 checkbox.

Set this **Cloudflare Pages environment variable** (Build & Deployments → Environment variables):
- `VITE_RUMMAGE_RECAPTCHA_SITE_KEY`: your reCAPTCHA site key

The secret key is verified server-side in your Cloud Run service.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
