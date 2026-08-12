import ReCAPTCHA from "react-google-recaptcha";

export default function RecaptchaWidget({ recaptchaRef }) {
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  if (!siteKey) return null;
  return <ReCAPTCHA ref={recaptchaRef} sitekey={siteKey} />;
}
