# Copilot Instructions for seller-app

## Project Architecture

- **Type:** React SPA using Vite, TypeScript, and Tailwind CSS.
- **Entry:** `src/app.tsx` (mounts to `#root` in `index.html`).
- **Routing:** `react-router-dom@7` with routes in `src/pages/router.tsx` (all routes currently lazy-load `src/pages/home`).
- **Providers:** `src/lib/components/AppProviders` (wraps app for context, extend here for global state/theming).

## UI & Layout Patterns

- **Layout:** Use `DefaultPage`/`PageContent` (`src/lib/common/Containers/Pages.tsx`) and `Row`/`Column` (`src/lib/common/Containers/Flex.tsx`) for page structure and flex layouts.
- **Text/i18n:** Use `Text` (`src/lib/common/Text/Text.tsx`) for i18n, with keys from `src/public/i18n/{en,pt}.json`. Use `Title`/`Paragraph` for styled/semantic text.
- **Inputs:** Prefer components in `src/lib/common/Inputs/` (e.g., `TextInput`, `SelectInput`, `MultiFileInput`).
- **Tables:** Use `CollapsibleTable` (`src/lib/common/Tables/CollapsibleTable.tsx`) for advanced table UIs.
- **Page Example:** See `src/pages/home/index.tsx` for canonical usage of layout, text, and section composition.

## Styling & Theming

- **Global styles:** `src/style/global.css` (imports Tailwind, sets font, root CSS vars).
- **Colors:** Use palette from `src/style/colors.ts`.
- **Fonts:** Loaded in `index.html` from `src/public/fonts/`.

## Services & Utilities

- **Local Storage:** Use `saveStorage`/`readStorage` from `src/services/localStorage.ts` (with error handling).
- **Service pattern:** Place new services in `src/services/`, export functions (see `localStorage.ts` for style). Service folders may be stubs.
- **Utilities:** Place helpers in `src/utils/`.

## Developer Workflow

- **Dev server:** `npm run dev` (Vite, use `--host` for LAN access)
- **Build:** `npm run build`
- **Preview:** `npm run preview` (serves built app)
- **Format:** `npm run format` (Prettier, import sorting)
- **Type checking:** TypeScript strict mode (`tsconfig.json`)

## Project Conventions

- **Path aliases:** Use `src/*` for imports (see `tsconfig.json`, Vite config).
- **Component style:** Functional components, hooks, and composition (no inheritance, no Redux/MobX).
- **i18n:** Always use the `Text` component for user-facing strings.
- **Styling:** Use Tailwind classes, merge dynamically with `twMerge` if needed.
- **Extensibility:** Add providers to `AppProviders`, pages to `src/pages/`, services to `src/services/`.

## External Dependencies

- React 19, React Router 7, Tailwind CSS 4, Vite 6, Prettier, tailwind-merge

---

**AI Agent Guidance:**

- Follow patterns in `src/pages/home` and `src/lib/common` for new features.
- Compose new UI from existing layout/text components before adding new primitives.
- For new services, follow the export style in `src/services/localStorage.ts`.
- Keep imports sorted and code formatted (`npm run format`).
- If unsure, check referenced files for examples.

---

**Feedback requested:**
If any section is unclear or missing key project-specific details, please specify so it can be improved.
