# Alembic Project Overview

A high-end React-based portfolio/showcase application built with Vite, featuring sophisticated GSAP-powered animations and a multi-language (English/Arabic) system.

## Technology Stack

- **Framework**: React 19 + React Router 7 (Single Page Application)
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS 4 (@tailwindcss/vite)
- **Animations**: GSAP 3 (@gsap/react) for UI and page transitions
- **Smooth Scroll**: Lenis
- **Localization**: i18next + react-i18next (supports English and Arabic)
- **Icons**: Lucide React

## Project Structure

- `src/pages/`: Route-level components (Home, About, Agents, Projects).
- `src/components/`:
    - `Navigation/`: Contains `Navbar.jsx` and `FullScreenNav.jsx`.
    - `common/`: Shared components like `Stairs.jsx` (animation overlay).
    - `home/`, `projects/`: Feature-specific components.
- `src/hook/`: Custom hooks like `usePageTransition.js`.
- `src/utils/`: Utility functions, primarily `animations.js` for GSAP logic.
- `src/locales/`: JSON translation files for `en` and `ar`.

## Key Architectural Patterns

### 1. Smooth Scrolling (Lenis)
The project uses Lenis for smooth scrolling, initialized in `App.jsx`. It manages the scrolling performance and provides a consistent feel across browsers.

### 2. Animation & Transition System
The project uses a "stair" animation effect for page transitions and menu overlays.
- **GSAP Utilities**: Defined in `src/utils/animations.js` (`coverScreen`, `revealScreen`, `openNavAnimation`, `closeNavAnimation`).
- **Page Transitions**: Triggered via the `usePageTransition` hook. It calls `coverScreen` before navigating.
- **Reveal Logic**: The `Stairs` component listens for a custom `PAGE_READY` window event. Every page component MUST dispatch this event on mount:
  ```javascript
  useEffect(() => {
    window.dispatchEvent(new Event("PAGE_READY"));
  }, []);
  ```

### 2. Localization
- Localization is initialized in `src/i18n.js`.
- Components use `useTranslation` hook from `react-i18next`.
- Translation files are located in `src/locales/`.

### 3. Navigation State
- Global navigation state (`isNavOpen`) is managed in `src/App.jsx`.
- Transitions between routes are handled by `usePageTransition` to ensure the "stair" animation plays correctly.

### 4. UI/UX Standards
- **Scrollbar**: Hidden globally via CSS in `index.css`.
- **RTL Support**: Horizontal scroll animations (GSAP) must account for document direction. Check `document.documentElement.dir === 'rtl'` and adjust translation values accordingly (e.g., in `src/components/home/Info.jsx`).

## Building and Running

### Development
```bash
npm run dev
```
Starts the Vite development server (usually on port 5173).

### Production
```bash
npm run build
# To preview the build:
npm run preview
```

### Linting
```bash
npm run lint
```

## Development Conventions

- **Animations**: Prefer GSAP timelines over raw CSS for complex sequences. Use the existing utilities in `src/utils/animations.js` to maintain consistency.
- **Routing**: Use the `usePageTransition` hook instead of `useNavigate` directly for internal links to ensure smooth transitions.
- **State Management**: Keep UI-related state (like menu toggles) lifted to `App.jsx` if it needs to interact with the global animation system.
- **Localization**: All user-facing text should be added to `src/locales/en.json` and `src/locales/ar.json` and accessed via the `t()` function.
- **Styling**: Use Tailwind CSS 4 utility classes. Complex custom styles should be kept to a minimum in `index.css`.
