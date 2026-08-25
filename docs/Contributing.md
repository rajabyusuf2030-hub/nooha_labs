# Contributing Guidelines — Project Atlas

## Git Branching Model
- `main`: Production release code
- `develop`: Integration & staging branch
- `feature/<feature-name>`: Individual feature implementation branch (e.g. `feature/navbar`, `feature/homepage`)

## Quality Gates Before Merging
- [x] Builds without errors (`npm run build`)
- [x] TypeScript validation (`npx tsc --noEmit`)
- [x] Responsive layout verified
- [x] Accessibility (a11y) check completed
