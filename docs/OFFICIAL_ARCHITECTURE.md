# Nooha Labs Official Website — Architecture & Information Architecture v1.0

## 1. Executive Summary
The Nooha Labs website is the primary commercial gateway into the Nooha Ecosystem. It serves three distinct audiences:
- **Prospects:** Discovering capabilities and evaluating products.
- **Applicants:** Educational institutions applying for Nooha ERP provisioning.
- **Customers:** Existing users transitioning to the Nooha Hub (Customer Portal).

## 2. Core Sitemap & Route Map

### 2.1 Public Foundation
- `/` — Homepage (The Narrative & Ecosystem Hub)
- `/about` — Origin, Mission, and Technical Philosophy
- `/services` — Custom Engineering, AI Orchestration, Cloud Support
- `/portfolio` — Case Studies and Proof of Impact
- `/blog` — Nooha Insights (Engineering Notes & Industry Analysis)
- `/careers` — Life at the Lab & Open Positions

### 2.2 Product Ecosystem
- `/products` — Full Portfolio Overview
- `/products/erp` — Nooha ERP: The OS for Schools (Flagship)
- `/products/rental` — Nooha Rental: Logistics & Asset Mastery
- `/products/ai` — Nooha AI: Context-Aware Intelligence

### 2.3 Commercial Funnels (The "Conversion" Layer)
- `/apply` — Standard Institutional Application for Nooha ERP
- `/demo` — Multi-product Demo Request Workflow
- `/contact` — Strategic Inquiries & General Support

### 2.4 Customer Gateway
- `/hub` — (Link out to Nooha Hub) Unified Account & Subscription Management

## 3. Visual Identity & UI Standards (Brand v2)

### 3.1 The Nooha Symbolism
- **Component:** `NoohaLogo`
- **Variants:** Full (Wordmark + Symbol), Compact (Symbol Only), Monochrome, Animated Loader.
- **Core Palette:** Emerald (#10B981) Primary, Dark Slate (#090D16) Background, Cyan/Blue accents for AI/Data layers.

### 3.2 Design Principles
- **Motion:** Staggered entrance, floating metrics, interactive mockups.
- **Typography:** Black/Extrabold headers, high-tracking uppercase subheaders.
- **Cards:** Glassmorphism with emerald border-glows on hover.

## 4. User Journeys (Commercial Workflows)

### 4.1 The ERP Application Journey
1. **Discover:** User lands on `/products/erp`.
2. **Evaluate:** User views ROI Calculator and Module Showcase.
3. **Trigger:** User clicks "Apply for Nooha ERP".
4. **Action:** User fills out `/apply` (Institutional details, scale, current pain points).
5. **Ingest:** Data is sent to `nooha_applications` (formerly legacy leads).
6. **EdControl:** Super Admin verifies and triggers the Provisioning Pipeline.

### 4.2 The Demo Workflow
1. **Select:** User chooses product on `/demo`.
2. **Schedule:** Integration with scheduling logic or direct capture.
3. **Confirmation:** Unique Lead ID generated and sent to prospect.

## 5. Technical Integration Architecture

### 5.1 External Boundaries
- **EdControl Boundary:** The website writes to the `nooha_command` namespace in Firestore.
- **Nooha Hub Boundary:** Seamless handoff via authenticated sessions (Shared Auth package).

### 5.2 Clean-up (Naming Audit)
- All legacy "Ubora" references replaced with "Nooha".
- Collection `ubora_leads` -> `nooha_leads` (Migration required).
- Collection `ubora_applications` -> `nooha_applications`.

## 6. Trust, Legal & SEO

### 6.1 Trust Signals
- Verified Uptime (99.9%)
- TLS 1.3 & Data Isolation badges.
- Case Study Metrics (Greenwood Academy, etc.)

### 6.2 Legal Gates
- `/privacy` — Operational Data Protection
- `/terms` — Software Licensing & IP Framework

### 6.3 SEO Framework
- JSON-LD Organization data on all routes.
- Product-specific Metadata (OpenGraph tags).
