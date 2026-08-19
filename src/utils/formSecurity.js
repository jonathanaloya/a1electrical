// Client-side hardening for the enquiry forms.
//
// IMPORTANT: none of this is a substitute for server-side validation.
// A static/client-only site has no real backend to "hack", but the moment
// these forms are wired up to an API, that API must independently:
//   - re-validate every field (never trust the client)
//   - rate-limit by IP / account
//   - verify a real CAPTCHA/token server-side
//   - use parameterised queries / an ORM (no raw SQL string building)
//   - return generic error messages (don't leak stack traces or schema info)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Cap length so a field can't be used to flood storage/logs.
 *  Intentionally does NOT trim — trimming happens at validation time,
 *  not on every keystroke, so users can type spaces normally. */
export function sanitizeText(value, maxLength = 500) {
  return String(value ?? "").slice(0, maxLength);
}

export function isValidEmail(value) {
  const str = String(value ?? "").trim();
  return EMAIL_RE.test(str) && str.length <= 254;
}

/**
 * Very simple honeypot check: a hidden field ("company_website") that real
 * users never see or fill in. Most unsophisticated bots fill in every field
 * they find, so a non-empty honeypot is a strong signal of automated spam.
 */
export function isHoneypotTripped(formValues) {
  return Boolean(formValues.hp);
}

/**
 * Basic client-side throttle so a single browser tab can't fire the submit
 * handler dozens of times a second. This is a UX/abuse-reduction measure
 * only — a determined attacker can bypass it by calling the API directly,
 * which is exactly why real rate limiting has to live server-side too.
 */
const lastSubmitAt = { current: 0 };
export function isSubmittingTooFast(minGapMs = 4000) {
  const now = Date.now();
  if (now - lastSubmitAt.current < minGapMs) return true;
  lastSubmitAt.current = now;
  return false;
}
