# A1 Electricals Ltd — React Site

A React (Vite) rebuild of the A1 Electricals prototype, converted from the
original static multi-page HTML/CSS/JS version into a proper component-based
single-page app with client-side routing.

## Running it locally

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build locally
npm run audit     # check dependencies for known vulnerabilities
```

## Project structure

```
src/
├── main.jsx                 Entry point
├── App.jsx                  Route definitions
├── index.css                All styles (ported from the original site)
├── data/                    Product/brand/hero-slide data
├── context/ToastContext.jsx Form-submission confirmation toast
├── utils/formSecurity.js    Client-side form hardening helpers
├── components/              Header, Footer, HeroCarousel, EnquiryForm,
│                             RecaptchaWidget, shared layout pieces, icons
└── pages/                   Home, Products, ProductDetail, Brands,
                              BrandDetail, CustomerService, Careers,
                              About, Contact, Privacy, NotFound
public/images/                Site images (logo, storefront, stock photo,
                               and real brand logos where available)
```

Product and brand detail pages are each a **single** component parameterised
by the URL slug (`/products/:slug`, `/brands/:slug`) rather than 18 and 12
separate files — the data lives in `src/data/`.

---

## Security — what's actually in place, and what it does and doesn't cover

Being direct about this: **no frontend can make a site "unhackable."** A
static React SPA with no backend, no login, no database, and no file uploads
already has a very small attack surface — there's no server code or data
store here for an attacker to actually breach. Real security work matters
most once you add a backend API, authentication, or a database. With that
context, here's what this build does and why:

### In this repo
- **XSS resistance by construction** — the old vanilla-JS version built HTML
  via string templates (`innerHTML`-style rendering), which is an easy way to
  introduce injection bugs. React's JSX auto-escapes all rendered text, and
  this project uses **no** `dangerouslySetInnerHTML` anywhere, so there's no
  code path where a string is casually reinterpreted as HTML/JS.
- **No inline string event handlers** — the original had `onclick="..."`
  string attributes; React uses real function references (synthetic events),
  which removes that entire class of injection risk.
- **Security headers** (`vercel.json`) — Content-Security-Policy, X-Frame-
  Options (clickjacking), X-Content-Type-Options (MIME sniffing),
  Referrer-Policy, Permissions-Policy, and HSTS are set at the hosting layer.
- **Form hardening** (`src/utils/formSecurity.js`, `EnquiryForm.jsx`):
  - Hidden **honeypot** field to catch unsophisticated bots.
  - Client-side **input length caps** and **email format validation**.
  - A basic **submission throttle** (min gap between submits) to reduce
    accidental double-submits and naive spam scripts.
  - The **reCAPTCHA widget is a visual mockup** — it demonstrates the UX
    pattern but verifies nothing server-side. It is explicitly commented as
    such in the code. A real deployment needs a real CAPTCHA provider
    (Google reCAPTCHA v3, hCaptcha, Cloudflare Turnstile) checked by a
    backend, because anything checked only in the browser can be bypassed by
    calling the API directly.
- **No secrets in the client bundle** — `.env.example` documents that any
  `VITE_`-prefixed variable is public once built, and `.gitignore` keeps a
  real `.env` out of version control.
- **Minimal, pinned dependencies** — only `react`, `react-dom`, and
  `react-router-dom` in production; run `npm run audit` periodically.

### Known `npm audit` findings and why they're accepted for now
Running `npm audit` will show two findings:
1. **esbuild (moderate, dev-server only)** — affects `npm run dev`'s local
   dev server, not the production build output. Fixing it requires a
   breaking Vite major-version upgrade; tracked as a follow-up rather than
   done blind under time pressure.
2. **react-router (high, RSC-mode CSRF)** — this advisory only affects apps
   using React Router's *unstable* React Server Components / Framework Mode
   server actions. This app uses plain client-side `BrowserRouter` +
   `Routes`/`Route` (Declarative Mode) with no server actions, so the
   vulnerable code path isn't reachable here. Documented rather than
   papered over with an untested major-version migration.

Both are judgment calls made explicitly, not vulnerabilities left unnoticed —
re-run `npm audit` before shipping if dependencies have moved on since this
was written.

### If/when a real backend is added
- Re-validate every field server-side (never trust client validation alone).
- Rate-limit by IP/account, not just client-side throttling.
- Verify CAPTCHA tokens server-side.
- Use parameterised queries/an ORM — never build SQL from raw strings.
- Return generic error messages (don't leak stack traces or schema details).
- Keep real secrets (API keys, DB credentials) server-side only, never in a
  `VITE_` variable.

## Notes
- Brand logos: real logo images are used where available in the repo (ABB,
  Siemens, LEDVANCE, Philips, Marshall Tufflex, Sollatek, Larsen &
  Toubro); the rest fall back to initials badges since no logo file exists
  for them yet — drop a file in `public/images/brands/` and add the path in
  `src/data/brands.js` to swap one in.
- Forms don't submit anywhere real yet — see `EnquiryForm.jsx` for where a
  `fetch()` to a real endpoint would go.
