# Deployment & CI/CD — Nooha Labs

## Target Platforms
- **Primary Deployment**: Vercel (Edge Network & Serverless Next.js Hosting)
- **Backend & Database**: Firebase (Cloud Firestore & Auth)

## Deployment Pipeline
1. `git push` to feature branch -> Preview build on Vercel
2. Pull Request merged to `develop` -> Staging environment deployment
3. Merge `develop` into `main` -> Production release on Vercel (noohalabs.com)
