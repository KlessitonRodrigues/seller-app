# Copilot Instructions for seller-app

## Project Overview

- **Type:** React SPA (Single Page Application) using Vite, TypeScript, and Tailwind CSS.
- **Entry Point:** `src/app.tsx` mounts the app to `#root` in `index.html`.
- **Routing:** Uses `react-router-dom@7` with routes defined in `src/pages/router.tsx`. All routes currently lazy-load `src/pages/home`.
- **Providers:** `src/lib/components/AppProviders` wraps the app for context providers (currently a passthrough, but extend here for global state, theming, etc).

## UI Architecture

- **Layout Components:**
  - `src/lib/common/Containers/Pages.tsx` provides `DefaultPage` and `PageContent` for page structure.
  - `src/lib/common/Containers/Flex.tsx` provides `Row` and `Column` with Tailwind-based flex utilities.
- **Text Components:**
  - `src/lib/common/Text/Text.tsx` renders i18n text from `src/public/i18n/{en,pt}.json` based on browser language.
  - `Title` and `Paragraph` in the same folder are used for semantic and styled text.
- **Page Example:** See `src/pages/home/index.tsx` for typical usage of layout and text components.

## Styling

- **Global Styles:** `src/style/global.css` (imports Tailwind, sets font-family, and root CSS vars).
- **Color Palette:** `src/style/colors.ts` exports a large Material color palette object.
- **Fonts:** Custom fonts loaded in `index.html` from `src/public/fonts/`.

## Services & Utilities

- **Local Storage:** `src/services/localStorage.ts` provides `saveStorage` and `readStorage` with error handling.
- **Service Structure:** Service folders (e.g., `salles`, `opotunity`) are present but may be stubs or empty.

## Build & Dev

- **Dev Server:** `npm run dev` (Vite, with `--host` for LAN access)
- **Build:** `npm run build`
- **Preview:** `npm run preview` (serves built app)
- **Format:** `npm run format` (Prettier with import sorting)
- **Type Checking:** TypeScript strict mode is enabled; see `tsconfig.json` for details.

## Patterns & Conventions

- **Path Aliases:** Use `src/*` for imports (see `tsconfig.json` and Vite config).
- **Component Structure:** Prefer functional components, hooks, and composition over inheritance.
- **i18n:** Use the `Text` component with a `path` prop matching keys in the i18n JSON files.
- **Styling:** Use Tailwind classes, optionally merged with `twMerge` for dynamic class composition.
- **Extensibility:** Add new providers to `AppProviders`, new pages to `src/pages/`, and new services under `src/services/`.

## External Dependencies

- **React 19, React Router 7, Tailwind CSS 4, Vite 6, Prettier, tailwind-merge**
- **No Redux/MobX:** State management is expected to be context/hooks-based.

---

**For AI agents:**

- When adding new features, follow the patterns in `src/pages/home` and `src/lib/common`.
- For new services, create a folder in `src/services/` and export functions as in `localStorage.ts`.
- For new UI, compose from existing layout and text components before introducing new primitives.
- Keep imports sorted and code formatted using the provided scripts.
- If unsure about a pattern, check the referenced files for examples.
