# Nooha Labs Coding Standards

## Core Principles
1. **Single Responsibility**: One component per file, performing a focused job.
2. **Feature-First Architecture**: Group code by business domain in `src/features/`.
3. **Strict Type Safety**: Fully type all props, state, functions, and API responses. No explicit `any`.
4. **No Inline Styling**: Use Tailwind CSS utilities and design tokens exclusively.
5. **No Duplicated Logic**: Extract shared functionality into custom hooks (`src/hooks/`) or utility functions (`src/utils/`).
6. **Accessibility**: All interactive elements must support keyboard navigation, ARIA roles, and high contrast standards.
