# Copilot Instructions

## Build Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server on port 3000
npm run build      # Production build
```

There are no tests or linters configured.

## Architecture

This is a single-page React 19 marketing site for GPUcloud.xyz. There is no router library—navigation is handled via a `ViewState` union type in `App.tsx` and a `currentView` state variable. Components receive an `onNavigate: (view: ViewState) => void` callback prop to trigger navigation.

All page and UI components live in a flat `components/` directory. Each page component corresponds to a value in the `ViewState` type. When adding a new page:

1. Create the component in `components/`
2. Add its key to the `ViewState` union type in `App.tsx`
3. Add a conditional render (`{currentView === 'key' && <Component />}`) in the appropriate section of `App.tsx`

Two pages (`dashboard`, `console`) render without the shared `Header`/`Footer` and use their own full-page layouts with early returns in `App.tsx`.

## Styling

Tailwind CSS is loaded via **CDN script tag** in `index.html`—there is no PostCSS or Tailwind config file. The Tailwind theme is extended inline in `index.html` with a custom `dats` color palette:

- `dats-dark`: `#000000` (true black)
- `dats-blue`: `#3b82f6` (primary accent)
- `dats-light`: `#0a0a0a`
- `dats-gray`: `#222222`
- `dats-border`: `#ffffff`

Custom utility classes are defined via `<style>` tags in `App.tsx` (and duplicated in special-layout pages):

- `sharp-shadow` / `sharp-shadow-sm` / `sharp-shadow-blue` — box shadows for the brutalist high-contrast aesthetic
- `bg-grid-pattern` — grid background overlay

Fonts: **JetBrains Mono** (default `font-sans` and `font-mono`) and **Space Grotesk** (`font-display`), loaded via Bunny Fonts CDN in `index.html`.

## Conventions

- Components use `React.FC` with explicit prop interfaces
- Icons from `lucide-react` exclusively
- Path alias `@/*` maps to the project root (configured in `tsconfig.json` and `vite.config.ts`)
- Path alias `@/*` maps to the project root (configured in `tsconfig.json` and `vite.config.ts`)
