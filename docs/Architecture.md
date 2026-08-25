# Project Atlas Architecture — Nooha Labs

## System Overview
Project Atlas is the digital foundation of the Nooha Labs ecosystem. It powers the official public web presence, client discovery workflows, product showcases (School Management System, Building Materials Rental Platform, Nova AI), and forms the foundation for future client and administrative portals.

## Architectural Architecture & Folder Strategy

```
src/
├── app/          # Next.js App Router (Page entries & metadata)
├── components/   # Shared presentation primitives (UI, Layout, Feedback)
├── features/     # Feature-first domain modules (Home, Services, Products, etc.)
├── config/       # App-wide configuration & SEO defaults
├── types/        # TypeScript domain models and interface contracts
├── styles/       # Design tokens & CSS setup
├── providers/    # Root React context providers (Theme, Toast, Modal, Auth)
├── contexts/     # React state context definitions
├── firebase/     # Firebase SDK initialization & service handlers
├── services/     # External API and backend integration drivers
├── hooks/        # Reusable custom React hooks
├── utils/        # Generic helper utility functions
├── constants/    # Static application constants
├── store/        # Client state management stores
└── data/         # Mock data and static content definitions
```

## Feature-First Modular Pattern
Each domain feature in `src/features/<feature-name>` is self-contained and encapsulates:
- `components/`: Feature-specific visual components
- `hooks/`: Feature-specific state hooks
- `types/`: Feature domain types
- `utils/`: Domain-specific transformations
- `index.ts`: Public API export boundary

## Tech Stack Architecture
- **Framework**: Next.js 15 (App Router with Server Components & React 19)
- **Language**: TypeScript 5+ with strict mode enabled
- **Styling**: Tailwind CSS v4 design token mapping
- **State & Theme**: React Context + CSS variables for Light / Dark / System modes
- **Backend & Persistence**: Firebase Auth, Cloud Firestore, Firebase Storage
- **Animation**: Framer Motion
- **Icons**: Lucide React
