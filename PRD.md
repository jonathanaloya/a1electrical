# Product Requirements Document (PRD)
## A1 Electricals Ltd — React E-Commerce Website

**Version:** 1.0  
**Date:** August 2026  
**Owner:** A1 Electricals Ltd  
**Status:** Draft for Review

---

## 1. Executive Summary

A1 Electricals Ltd is Kampala's leading supplier and distributor of electrical and lighting products across Uganda and East Africa. This PRD defines the requirements for the company's public-facing React website — a component-based single-page application (SPA) that replaces the legacy static HTML/CSS/JS site with a modern, maintainable, and scalable digital storefront.

The website serves as the primary digital gateway for customers to browse products, understand brand quality, submit enquiries, and initiate orders — particularly via WhatsApp and phone — reflecting the buying behaviour of the Ugandan electrical trade market.

---

## 2. Business Objectives

| Objective | Description |
|-----------|-------------|
| **Increase Enquiries** | Drive more product-specific enquiries from homeowners, contractors, and businesses. |
| **Reduce Friction** | Enable instant contact via WhatsApp, phone, and enquiry forms on every product page. |
| **Showcase Breadth** | Clearly present 15+ product categories and 11+ leading brands in a browsable, filterable interface. |
| **Establish Authority** | Position A1 Electricals as the knowledgeable, stock-rich, fast-delivery supplier in Kampala. |
| **Enable Self-Service** | Allow visitors to find specifications, brand information, and contact details without calling. |
| **Export Readiness** | Lay groundwork for future B2B portal, pricing tiers, and regional delivery options. |

---

## 3. Target Audience & User Personas

### Persona A: The Contractor (Primary)
- **Who:** Licensed electrical contractors, project managers, facilities engineers.
- **Needs:** Fast access to specs, bulk pricing cues, brand authenticity, stock availability, same-day collection.
- **Behaviour:** Browses by category, reads technical details, contacts via WhatsApp or phone for quotes.

### Persona B: The Homeowner (Secondary)
- **Who:** Homeowners, property developers, small business owners in Kampala.
- **Needs:** Trustworthy brands, clear product descriptions, showroom location, opening hours, delivery info.
- **Behaviour:** Reads "Why Choose Us", views product ranges, submits enquiry forms.

### Persona C: The Procurement Officer (B2B)
- **Who:** Procurement teams at hotels, hospitals, schools, construction firms.
- **Needs:** Brand certifications, large-order capability, delivery across Uganda, invoice-ready contact details.
- **Behaviour:** Filters by brand, downloads/requests specs, uses structured enquiry forms.

---

## 4. Site Information Architecture

```
Home (/)
├── Hero Carousel
├── Promo Grid (Products, Brands, About)
├── Split Sections (Trust, Showroom)
├── Statement (Why Choose Us)
└── Product Tiles

Products (/products)
└── ProductsOverview — Grid of all product categories

Product Detail (/products/:slug)
├── Hero + Features
├── Product Info + Enquiry Form
├── Why Choose Us Statement
├── Sub-Category Split Sections
├── More Products Grid
└── CTA Strip

Brands (/brands)
└── BrandsOverview — Grid of all brands

Brand Detail (/brands/:slug)
├── Brand Info + Enquiry Form
├── More Products
├── Related Brands
└── CTA Strip

Customer Service (/customer-service)
├── Warranty Information
├── Returns Policy
├── Technical Support
└── FAQ

Ordering & Delivery (/ordering-delivery)
├── Ordering Process
├── Delivery Options
├── Delivery Zones
└── Lead Times

About (/about)
├── Company History
├── Mission & Values
├── Team
└── Why A1 Electricals

Contact (/contact)
├── Contact Form
├── Map
├── Contact Details
└── Opening Hours

Privacy (/privacy)
└── Privacy Policy

NotFound (/*)
└── 404 Page
```

---

## 5. Functional Requirements by Page

### 5.1 Home Page
- **Hero Carousel:** Auto-rotating banner with promotional slides, call-to-action buttons.
- **Promo Cards:** Three high-level entry points — Product Range, Leading Brands, About Us.
- **Split Sections:** Alternating image/text blocks highlighting trust, showroom, and stock.
- **Statement Block:** "Why Choose A1 Electricals" with contact CTAs.
- **Product Tiles:** Quick-access tiles for top 4 categories with hover effects.

### 5.2 Products Overview
- **Grid Layout:** Display all 15 product categories in a responsive 3-column grid.
- **Card Design:** Each card shows category number, name, blurb, hero image, and "View category" link.
- **Filtering (Future):** Search and filter by category keyword.

### 5.3 Product Detail
- **Hero Section:** Full-width product image with category label overlay.
- **Feature Pills:** Three trust signals — Trusted Locally, Fast Delivery, High Stock Levels.
- **Breadcrumb:** Products > [Category Name]
- **Split Layout (`.pdsplit`):**
  - Left: Product description, spec bullets, stock statement, WhatsApp/phone/email contact row.
  - Right: Sticky enquiry form with leading brand logo background.
- **Statement Block:** "Why Choose A1 Electricals" with manufacturer list.
- **Sub-Category Split Sections:** Dynamic rendering of category-specific content (3 sections + 1 manufacturer section).
  - Headings and content aligned to product category.
  - Alternating image layout with bordered, inset images.
  - Final section shows leading manufacturer with logo.
- **More Products:** Horizontal grid of 6 related products with images/icons and pill labels.
- **CTA Strip:** Bottom-of-page contact prompt.

### 5.4 Brands Overview
- **Grid Layout:** Display all brands in a responsive 4-column grid.
- **Card Design:** Brand logo/initials, name, and product category.
- **Hover States:** Subtle border/shadow transitions.

### 5.5 Brand Detail
- **Breadcrumb:** Brands > [Brand Name]
- **Split Layout (`.pdsplit`):**
  - Left: Brand description, range items, expertise paragraphs.
  - Right: Brand logo/initials + enquiry form.
- **More Products:** Grid of 3 related products.
- **Related Brands:** Grid of 4 other brands.

### 5.6 Customer Service
- **Content Sections:** Warranty, returns, technical support, FAQ.
- **Contact Integration:** Links to enquiry form and WhatsApp.

### 5.7 Ordering & Delivery
- **Content Sections:** Ordering process, delivery options, zones, lead times.
- **Contact Integration:** Phone and WhatsApp links.

### 5.8 About
- **Company Story:** History, mission, values.
- **Team Section (Future):** Key personnel.
- **Why A1 Electricals:** Trust-building content.

### 5.9 Contact
- **Two-Column Layout:**
  - Left: Enquiry form with optional product category dropdown.
  - Right: Contact details (address, phone, email, hours) + embedded Google Maps.
- **Form:** Name, company, email, message, honeypot, throttle, reCAPTCHA mockup.

### 5.10 Privacy
- **Static Content:** Privacy policy text.

---

## 6. Content Strategy

### 6.1 Product Content Model
Each product record includes:
- `slug` — URL identifier
- `heroImage` — Primary product image path
- `name` — Display name
- `n` — Sequence number (01–15)
- `cat` — Category key (maps to sub-category content)
- `blurb` — Short description for cards
- `desc` — Full description
- `specs` — Key-value specification pairs
- `bullets` — Feature list
- `split1`, `split2`, `split3` — Legacy split section content (retained for reference)

### 6.2 Brand Content Model
Each brand record includes:
- `slug` — URL identifier
- `name` — Display name
- `init` — Initials for logo fallback
- `cat` — Product category association
- `desc` — Brand description
- `logo` — Logo image path (or null for initials fallback)

### 6.3 Sub-Category Content
Dynamic per-product-category content stored in `PRODUCT_SUB_CATEGORIES`:
- 3 content sections per category with heading + body copy.
- Content adapted from Sartra International (reference competitor).
- 1 final manufacturer section pulled from `getLeadingBrand(cat)`.

---

## 7. Design & UX Requirements

### 7.1 Visual Design
- **Colour Palette:** Ink (`#1a1a1a`), Paper (`#f5f5f0`), Copper (`#b87333`), Steel (`#6b7280`).
- **Typography:** System font stack with monospace accents for metadata.
- **Imagery:** Real product photography, brand logos, showroom/storefront images.
- **Borders:** Split section images feature `2px solid #e5e7eb` border with `4px` radius.

### 7.2 Layout Principles
- **Split Sections:** Two-column grid (`1.4fr 1fr`), alternating image/text, white background, inset padding (`20px`), internal gap (`16px`).
- **Responsive Breakpoints:**
  - Desktop: >900px — two-column split sections, 3-column product grid, 4-column brand grid.
  - Tablet: ≤900px — single-column split sections, 2-column grids.
  - Mobile: ≤600px — stacked layouts, reduced padding and typography.
- **Sticky Sidebar:** Enquiry form on product/brand pages sticks at `top: 140px`.

### 7.3 Micro-Interactions
- Card hover: Image zoom (`scale(1.04)`), shadow lift.
- Logo row: Horizontal scroll with hover border/brand-colour transitions.
- Dropdown menus: Open/close with scroll-outside and click-outside dismissal.
- Mobile nav: Burger menu toggle with animated open/close icons.

---

## 8. Technical Architecture

### 8.1 Stack
- **Framework:** React 18.3 (via Vite 5.4)
- **Routing:** React Router DOM 7.18 (BrowserRouter, Routes, Route)
- **Language:** JavaScript (ES Modules)
- **Styling:** Single `index.css` file (ported from legacy site)
- **Build:** Vite production build → `dist/`

### 8.2 Project Structure
```
src/
├── main.jsx                 Entry point
├── App.jsx                  Route definitions + ToastProvider
├── index.css                Global styles
├── context/
│   └── ToastContext.jsx      Form submission toast state
├── utils/
│   └── formSecurity.js      Honeypot, throttle, validation
├── data/
│   ├── products.js          15 product records
│   ├── brands.js            11 brand records + helpers
│   └── heroSlides.js        Carousel slide data
├── components/
│   ├── Header.jsx            Navigation with dropdowns
│   ├── Footer.jsx            Site footer
│   ├── HeroCarousel.jsx      Auto-rotating banner
│   ├── EnquiryForm.jsx       Reusable enquiry form
│   ├── RecaptchaWidget.jsx   reCAPTCHA mockup
│   ├── Shared.jsx            SplitSection, SplitList, CtaStrip, LogoRow, Statement
│   ├── icons.jsx             SVG icon components
│   └── ...
└── pages/
    ├── Home.jsx
    ├── ProductsOverview.jsx
    ├── ProductDetail.jsx
    ├── BrandsOverview.jsx
    ├── BrandDetail.jsx
    ├── CustomerService.jsx
    ├── OrderingDelivery.jsx
    ├── About.jsx
    ├── Contact.jsx
    ├── Privacy.jsx
    └── NotFound.jsx
```

### 8.3 Data-Driven Routing
- **Products:** Single `ProductDetail` component parameterised by `slug`. Data lives in `src/data/products.js`.
- **Brands:** Single `BrandDetail` component parameterised by `slug`. Data lives in `src/data/brands.js`.
- **Helpers:** `findProduct(slug)`, `findBrand(slug)`, `getSubCategories(cat)`, `getLeadingBrand(cat)`, `brandRangeItems(cat)`.

---

## 9. Non-Functional Requirements

### 9.1 Performance
- First Contentful Paint (FCP) < 1.5s on 4G.
- Time to Interactive (TTI) < 3.5s.
- Production JS bundle < 350KB (gzipped < 100KB).
- Images lazy-loaded where appropriate.

### 9.2 Browser Support
- Chrome, Edge, Firefox, Safari (last 2 major versions).
- Mobile Safari (iOS 14+) and Chrome Mobile (Android 10+).

### 9.3 Accessibility
- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<header>`, `<footer>`).
- Alt text on all meaningful images.
- Focus-visible states for interactive elements.
- Sufficient colour contrast for text (WCAG AA).

### 9.4 SEO
- Unique `<title>` and meta descriptions per route.
- Semantic heading hierarchy (h1 → h2 → h3).
- Structured data (Schema.org) for LocalBusiness on Contact page.
- XML sitemap (future).
- robots.txt (future).

---

## 10. Security Considerations

### 10.1 Current Implementation
- **XSS Resistance:** React JSX auto-escapes all rendered text. No `dangerouslySetInnerHTML` used.
- **No Inline Event Handlers:** Eliminates string-based injection risk.
- **Form Hardening:**
  - Hidden honeypot field.
  - Client-side input length caps.
  - Email format validation.
  - Submission throttle (minimum gap between submits).
- **Security Headers:** Deployed via `vercel.json` — CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS.
- **No Secrets in Bundle:** `.env` gitignored; `VITE_` variables are public by design.

### 10.2 Known Limitations
- **reCAPTCHA:** Currently a visual mockup only. A real deployment requires server-side token verification.
- **No Backend:** Form submissions have no real endpoint. `fetch()` calls need a backend API.
- **npm audit:** Two accepted findings (esbuild dev-server moderate; react-router RSC-mode high — not applicable to client-side routing).

### 10.3 Future Hardening
- Server-side form validation and rate limiting.
- Real CAPTCHA provider (Cloudflare Turnstile, hCaptcha, or Google reCAPTCHA v3).
- Parameterised database queries if a CMS/backend is added.
- Generic error messages (no stack traces in production).

---

## 11. Integrations & Third-Party Services

| Integration | Purpose | Status |
|-------------|---------|--------|
| **Google Maps** | Contact page embedded map | Implemented via iframe |
| **WhatsApp API** | Direct order/enquiry messaging | Linked via `wa.me/256752347110` |
| **reCAPTCHA** | Spam prevention on forms | Mockup only — needs backend |
| **Vercel** | Hosting + security headers | Configured via `vercel.json` |

---

## 12. SEO & Analytics Strategy

### 12.1 On-Page SEO
- Unique H1 per page (product name, category name, brand name).
- Descriptive meta titles and descriptions.
- Breadcrumb navigation for hierarchy.
- Internal linking between products, brands, and category pages.

### 12.2 Content SEO
- Category-rich product descriptions with keyword-aligned headings.
- Brand authority pages with manufacturer certifications.
- Local business signals (Kampala address, phone, hours) on every page.

### 12.3 Analytics (Future)
- Google Analytics 4 (GA4) or Plausible for privacy-first analytics.
- Event tracking for: form submissions, WhatsApp clicks, phone clicks, product page views.
- Conversion funnel: Home → Product → Enquiry → Contact.

---

## 13. Future Enhancements & Roadmap

### Phase 2 (Next 3 Months)
- [ ] **Search:** Full-text product and brand search in header.
- [ ] **Pricing Tiers:** B2B vs. retail pricing display (hidden by default).
- [ ] **Stock Indicators:** In-stock / low-stock / out-of-stock badges.
- [ ] **Real Form Backend:** Node.js/Express or serverless function for enquiry submissions + email notifications.
- [ ] **Real CAPTCHA:** Cloudflare Turnstile or hCaptcha integration.
- [ ] **Image Optimisation:** Next-gen formats (WebP/AVIF), responsive `srcset`.

### Phase 3 (3–6 Months)
- [ ] **B2B Portal:** Login for contractors to view net pricing, order history, and quotes.
- [ ] **Product Comparison:** Side-by-side comparison of up to 3 products.
- [ ] **Multi-language:** English + Luganda toggle (market-localisation).
- [ ] **Delivery Calculator:** Zone-based delivery cost estimator.
- [ ] **CRM Integration:** Enquiry form pushes to CRM (HubSpot, Zoho, or custom).
- [ ] **Live Chat:** Tawk.to or Crisp for real-time support alongside WhatsApp.

### Phase 4 (6–12 Months)
- [ ] **E-Commerce Checkout:** Cart, payment gateway (MTN Mobile Money, Stripe), order tracking.
- [ ] **Inventory Management:** Admin panel for stock updates and order fulfilment.
- [ ] **Blog/Resources:** Technical articles, installation guides, case studies.
- [ ] **Referral Programme:** Customer referral tracking and rewards.

---

## 14. Success Metrics & KPIs

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Enquiry Conversion Rate** | > 5% of product page views | Google Analytics + form tracking |
| **WhatsApp Click-Through** | > 15% of contact interactions | Event tracking on `wa.me` links |
| **Bounce Rate** | < 50% | GA4 / Plausible |
| **Average Session Duration** | > 2 minutes | Analytics |
| **Top Pages** | Product & Brand detail pages > Home | Page view tracking |
| **Form Completion Rate** | > 70% | Form analytics |
| **Mobile Traffic** | > 60% of sessions | Device analytics |
| **Core Web Vitals** | LCP < 2.5s, FID < 100ms, CLS < 0.1 | Google Search Console |

---

## 15. Launch Criteria

The site is considered ready for production launch when:

1. **All 15 product detail pages** render with correct sub-category split sections and manufacturer branding.
2. **All 11 brand detail pages** render with correct branding and related product grids.
3. **Contact form** submits successfully (mock or real) with validation and anti-spam measures.
4. **Responsive design** passes testing on mobile (320px), tablet (768px), and desktop (1440px).
5. **Security headers** are active on the production domain.
6. **Forms** have working honeypot, throttle, and email validation.
7. **Images** exist for all referenced product/hero/brand assets (fallbacks in place for missing logos).
8. **Build passes** (`npm run build`) with zero warnings.
9. **Accessibility audit** passes basic checks (alt text, heading order, focus states).
10. **Stakeholder review** completed and content approved.

---

## 16. Appendix

### 16.1 Product Category Map
| Product Name | Category Key |
|--------------|-------------|
| Switchgear & Protection Equipment | Switchgear Distribution |
| Circuit Breakers (MCB, MCCB, ACB) | Circuit Protection |
| Contactors & Motor Starters | Motor Controls & Starters |
| Industrial Control & Automation | Switchgear Distribution |
| Electrical Panels & Distribution Boards | Switchgear Distribution |
| Indoor & Outdoor LED Lighting | Light Fittings & Luminaires |
| Decorative & Architectural Lighting | Light Fittings & Luminaires |
| Industrial & Commercial Lighting | Light Fittings & Luminaires |
| Electrical Cables & Cable Accessories | Cables & Wires |
| Wiring Accessories | Wiring Accessories |
| Switches & Sockets | Wiring Accessories |
| Conduits & Cable Management Systems | Cable Trays & Conduits |
| Earthing & Lightning Protection Systems | Lightning Protection |
| Transformers & Power Distribution Equipment | Switchgear Distribution |
| Solar & Energy-Efficient Electrical Solutions | Solar LED Lighting |

### 16.2 Brand List
ABB, Siemens, VAF Power, Philips & Signify, Marshall-Tufflex, Orient Electric, RR Electric, Sollatek, Eaton, Neelkanth Cables, Servo Stabilizers.

### 16.3 Contact Details
- **Address:** Plot no. 49 Luthuli Avenue, Industrial Area, Bugolobi, P.O Box 31503, Kampala, Uganda
- **Phone:** +256 752 347110
- **WhatsApp:** +256 755 347100
- **Email:** info@a1electricalsltd.com
- **Hours:** Mon–Sat: 8:30am – 6:00pm

---

*End of Document*
