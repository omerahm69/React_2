## Purpose
This project is a Vite + React + TypeScript site (Urban Heritage). These instructions help AI coding agents be immediately productive by pointing to the app entry points, localization strategy, build/test commands, and component conventions.

## Big picture
- Framework: Vite + React + TypeScript. Entry: [src/main.tsx](src/main.tsx#L1-L14).
- Routing & pages: routes implemented with `react-router-dom` and page components live in [src/pages](src/pages).
- UI primitives: shared low-level components live under [src/components/ui](src/components/ui) (e.g., `button.tsx`, `toast.tsx`, `dialog.tsx`) — use these for consistent styling and accessibility.

## Localization
- i18n is configured in [src/i18n/index.ts](src/i18n/index.ts#L1-L120). It uses `i18next` with `i18next-http-backend` to load JSON files from `/locales/{{lng}}/translation.json` (served from `public/locales`).
- There is also an internal `LanguageContext` at [src/contexts/LanguageContext.tsx](src/contexts/LanguageContext.tsx#L1-L80) providing a `t(key)` helper and `language`/`dir` state for components that opt-in to the context.
- Translation keys are flat dot-keys (examples: `nav.home`, `hero.tagline`) — prefer reusing existing keys when adding UI strings.
- To re-scan and update translation keys use: `npm run i18n:scan` (see [package.json](package.json#L1-L40)).

## Build / Dev / Debug
- Run locally: `npm run dev` (Vite dev server). Open the port Vite prints (default 5173).
- Production build: `npm run build` (runs `tsc -b` then `vite build`). Use `npm run preview` to preview the build.
- Linting: `npm run lint` (ESLint configured at project root).
- Type-checking is enforced via `tsc -b` as part of `build` — keep types intact when editing public APIs.

## Conventions & patterns
- TypeScript `.tsx` for components; prefer typed props and avoid `any` for exported components.
- Styling: Tailwind CSS. Global styles in `src/index.css` and `tailwind.config.ts` present.
- Component split: Presentational/page components in `src/pages` and composable primitives in `src/components/ui`. When adding a new UI primitive follow the existing file naming and export pattern.
- State & data fetching: project includes `@tanstack/react-query` — use it for asynchronous data and caching patterns.
- Theme handling: `next-themes` is present for theme toggling — check `Header` or `App` for usage patterns.

## Integration & external deps to note
- i18n backend loads from `public/locales/*` — ensure new language files are under `public/locales/<lng>/translation.json` or the scanner updates them.
- `vite-intlayer` and `intlayer` appear in deps; treat these as project-specific integrations — search the repo for initialization spots before changing.

## Helpful file references (examples)
- App root / i18n provider: [src/main.tsx](src/main.tsx#L1-L14)
- i18n setup: [src/i18n/index.ts](src/i18n/index.ts#L1-L120)
- Language context: [src/contexts/LanguageContext.tsx](src/contexts/LanguageContext.tsx#L1-L80)
- UI primitives: [src/components/ui](src/components/ui)
- Pages: [src/pages](src/pages)
- Scripts & deps: [package.json](package.json#L1-L40)

## What to avoid / quick checks
- Do not duplicate translation keys — prefer extending the existing `translation.json` files.
- When changing build/runtime behavior check `vite.config.ts` and `tailwind.config.ts` first.
- If you see runtime differences between dev and build, confirm `tsc -b` output and that `public/locales` files are bundled/served correctly.

If any section is unclear or you want me to expand examples (e.g., common component prop shapes, sample `useQuery` usages), tell me which area to expand.
