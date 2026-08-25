# Nooha Design & Interaction System V1.0

## 1. Brand Identity
The Nooha brand is defined by technical precision, institutional stability, and modern intelligence.

### 1.1 Palette (Official)
- **Midnight (Base):** `#020617` (Backgrounds, Depths)
- **Nooha Green (Primary):** `#10B981` (Action, Vitality, Operational Success)
- **Technology Blue (Strategic):** `#2563EB` (Security, Trust, Infrastructure)
- **Technology Cyan (Data):** `#06B6D4` (Flow, Connectivity, Real-time Telemetry)
- **AI Violet (Intelligence):** `#7C3AED` (Analytics, Predictive Logic, Neural Core)
- **Border:** `rgba(255, 255, 255, 0.05)` (Standard) | `rgba(37, 99, 235, 0.2)` (Focus/Hover)

### 1.2 Typography Hierarchy
- **Display:** font-black, tracking-tighter, leading-[1.05]
- **H1-H3:** font-black, tracking-tight, uppercase italic for emphasis
- **Body:** font-medium, leading-relaxed, text-nooha-muted
- **Caption:** font-black, uppercase, tracking-[0.4em], text-[10px]

---

## 2. Visual Language

### 2.1 Photography & Product Imagery
- **Human Assets:** Real editorial photography only. No stock illustrations.
- **Treatment:** Grayscale (30-40% opacity) by default. Transition to 80-100% color on interaction/hover.
- **Product UI:** Real high-fidelity dashboard screenshots (`NOOHA-ERP-01.png`). Always nested in a "Glass Surface" container with a shadow-glow.
- **Mockups:** Use consistent 3D perspective or flat-frontal alignment within rounded-large frames.

### 2.2 Infographic Patterns
1.  **The Hub:** Central system core radiating out to nodes (e.g., Roles & Permissions).
2.  **The Interlocking Path:** Horizontal or vertical cells with connection markers (e.g., Deployment Journey).
3.  **The Cyclic Flow:** Continuous loop around a human center (e.g., Operational Lifecycle).

---

## 3. Interaction & Motion

### 3.1 Physics & Easing
- **Primary Ease:** `[0.21, 0.45, 0.32, 0.9]` (Snappy entrance, smooth settle).
- **Duration:** 0.8s for sections, 0.4s for elements.

### 3.2 Key Micro-interactions
- **Magnetic Buttons:** Primary CTAs should follow the cursor with a spring force of 0.2.
- **Scroll Reveal:** Staggered child animations (`staggerChildren: 0.1`) for list items and grids.
- **Card Focus:** Border illumination (white/5 -> blue/20) + scale (1.02) + deep shadow-glow.
- **Hotspots:** Pulsing circles that expand info-cards on hover.

---

## 4. Components Standard

### 4.1 Buttons
- **Premium:** White background, navy text. For primary global CTAs.
- **Primary:** Nooha Green or Blue background. For section actions.
- **Secondary:** Slate/Transparent with border. For navigation/secondary info.
- **Ghost:** Text only, border on hover. For low-priority links.

### 4.2 Cards
- **Variant "Glass":** `bg-nooha-slate/40 backdrop-blur-xl border-white/5`.
- **Corner Radius:** `rounded-[2.5rem]` (Small cards) | `rounded-[4rem]` (Hero/Hero blocks).

---

## 5. Trust & Technical Architecture

### 5.1 Trust Signal Logic
- **Metrics over Adjectives:** Use "120 staff hours saved" instead of "extremely fast."
- **Transparency:** Always show the "Technical Path" (10-stage journey) before asking for contact info.
- **Security Layers:** Always visualize Tenant Isolation, RBAC, and Audit Logs as concentric layers.

### 5.2 Technical Standards
- **Performance:** All images use `next/image` with WebP/AVIF. Lazy loading enabled by default.
- **Accessibility:** 
    - Contrast ratio 4.5:1 minimum.
    - Explicit focus states for keyboard navigation.
    - ARIA labels for all interactive SVG infographics.
- **Error States:** Every form must have a "Submission Pending" and "Logic Validated" state before the final success message.

---

## 6. Implementation Reference
The **Nooha ERP Product Page (`ErpProductFeature.tsx`)** is the reference implementation for V1.0. Any new page must match its typography, spacing, and interaction density.
