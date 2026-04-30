# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- **Start dev server**: `npm run dev` (runs on localhost:5173 by default with HMR enabled)
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`
- **Lint code**: `npm lint`

## Architecture

This is a React portfolio/showcase site built with Vite, featuring sophisticated page transition animations using GSAP.

### Technology Stack
- **Framework**: React 19 + React Router 7 (SPA with client-side routing)
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS 4 with Vite plugin (@tailwindcss/vite)
- **Animations**: GSAP 3 (@gsap/react) - handles all page transitions and UI animations
- **Icons**: Lucide React
- **Linting**: ESLint 9

### Project Structure

```
src/
├── pages/                 # Page components for routes
│   ├── Home.jsx          # Landing page
│   ├── Projects.jsx      # Portfolio/projects showcase
│   └── Agents.jsx        # Agent-related page
├── components/
│   ├── Navigation/       # Navigation components
│   │   ├── Navbar.jsx    # Top navigation bar
│   │   └── FullScreenNav.jsx  # Full-screen overlay nav
│   ├── home/             # Home page specific components
│   ├── projects/         # Project showcase components
│   └── common/
│       └── Stairs.jsx    # Stair animation overlay for page transitions
├── hook/
│   └── usePageTransition.js  # Custom hook for animated page navigation
├── utils/
│   └── animations.js     # GSAP animation utilities
├── App.jsx               # Main app router and nav state
├── main.jsx              # React DOM entry point
└── index.css             # Global styles
```

### Animation System

The site uses a sophisticated stair-stepping animation effect for page transitions:

**Core Functions** (in `src/utils/animations.js`):
- `coverScreen(callback)` - Stair animation covering the screen upward (used during navigation)
- `revealScreen()` - Stair animation sliding down to reveal next page (after navigation completes)
- `openNavAnimation(callback)` - Stair animation for opening full-screen nav
- `closeNavAnimation(callback)` - Stair animation for closing full-screen nav

These animations target:
- Element with id `stair-parent` - container holding the stair elements
- Elements with class `.stair` - individual stair steps (likely multiple divs staggered)

**Page Transitions**:
- Use `usePageTransition()` hook in components to navigate with animated cover/reveal
- Hook wraps React Router's `useNavigate()` and triggers `coverScreen()` before navigation
- After navigation, `revealScreen()` is called (likely via a useEffect in a route listener)

### Navigation

- **State Management**: Controlled at App level with `isNavOpen` state
- **Components**:
  - `Navbar` - Always visible top navigation with open button
  - `FullScreenNav` - Full-screen overlay menu (animated open/close with stairs effect)
  - `Stairs` - Shared overlay element for all stair animations
- **Event System**: Custom window events `NAVBAR_HIDE` and `NAVBAR_SHOW` dispatched during stair animations to coordinate UI state

### Styling

- **Tailwind CSS**: Global utility-first styling with Vite integration for faster dev builds
- **Responsive**: Uses Tailwind's breakpoint system
- **Classes**: Review Tailwind docs for available utilities; most styling is in JSX className props

### Key Notes

1. **GSAP Timelines**: Animations use `gsap.timeline()` for sequencing multiple animations with staggered elements and callbacks
2. **DOM Coupling**: Animation system queries DOM directly (getElementById, querySelectorAll) - ensure stair HTML structure matches expectations
3. **Route Protection**: `usePageTransition` checks current pathname to avoid redundant navigation
4. **Stagger Stagger values in GSAP can be positive (forward) or negative (backward) - review specific animation needs when modifying
5. **No TypeScript**: Project uses JSX without TypeScript - type safety is minimal
