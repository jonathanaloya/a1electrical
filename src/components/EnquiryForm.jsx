import { useRef, useState } from "react";
import RecaptchaWidget from "./RecaptchaWidget.jsx";
import { useToast } from "../context/ToastContext.jsx";
import {
  isValidEmail,
  sanitizeText,
  isHoneypotTripped,
} from "../utils/formSecurity.js";

export default function EnquiryForm({
  title = "Product Enquiry",
  defaultMessage = "",
  compact = false,
}) {
  const { showToast, hideToast } = useToast();
  const recaptchaRef = useRef(null);
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    message: defaultMessage,
    hp: "",
  });
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function update(field, max) {
    return (e) =>
      setValues((v) => ({
        ...v,
        [field]: max ? sanitizeText(e.target.value, max) : e.target.value,
      }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (isHoneypotTripped(values)) {
      setValues({ name: "", company: "", email: "", message: "", hp: "" });
      return;
    }
    if (!values.name.trim() || !values.message.trim()) {
      setError("Please fill in your name and message.");
      return;
    }
    if (!isValidEmail(values.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (siteKey && !recaptchaRef.current?.getValue()) {
      setError("Please confirm you're not a robot.");
      return;
    }

    const key = import.meta.env.VITE_WEB3FORMS_KEY;
    setSubmitting(true);
    showToast("Opening WhatsApp\u2026", "toast-sending", 0);

    try {
      const text = [
        values.name && `Name: ${values.name}`,
        values.company && `Company: ${values.company}`,
        values.email && `Email: ${values.email}`,
        values.message && `\nMessage:\n${values.message}`,
      ].filter(Boolean).join("\n");

      window.open(
        `https://wa.me/256755347100?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener,noreferrer"
      );

      if (key) {
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: key,
            name: values.name,
            company: values.company,
            email: values.email,
            message: values.message,
            botcheck: values.hp,
          }),
        }).catch(() => {});
      }

      showToast("WhatsApp opened \u2014 your message is ready to send.", "toast-success", 5000);
      setValues({ name: "", company: "", email: "", message: "", hp: "" });
      recaptchaRef.current?.reset();
    } catch {
      hideToast();
      setError("Could not open WhatsApp. Please message us directly at +256755347100.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className={compact ? "" : "pdform"}>
      {title && <h3>{title}</h3>}
      <form onSubmit={handleSubmit} noValidate>
        <div
          className="field"
          style={{ position: "absolute", left: "-5000px" }}
          aria-hidden="true"
        >
          <label htmlFor="hp">Leave this field blank</label>
          <input
            type="text"
            id="hp"
            name="hp"
            tabIndex={-1}
            autoComplete="off"
            value={values.hp}
            onChange={update("hp", 200)}
          />
        </div>

        <div className="field">
          <input
            type="text"
            required
            placeholder="Name"
            maxLength={120}
            value={values.name}
            onChange={update("name", 120)}
          />
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Company"
            maxLength={120}
            value={values.company}
            onChange={update("company", 120)}
          />
        </div>
        <div className="field">
          <input
            type="email"
            required
            placeholder="Email"
            maxLength={254}
            value={values.email}
            onChange={update("email")}
          />
        </div>
        <div className="field">
          <textarea
            rows={5}
            required
            placeholder="Message"
            maxLength={2000}
            value={values.message}
            onChange={update("message", 2000)}
          />
        </div>

        {error && (
          <p
            role="alert"
            style={{
              color: "#B5322F",
              fontSize: "13.5px",
              marginBottom: "14px",
            }}
          >
            {error}
          </p>
        )}

        <RecaptchaWidget recaptchaRef={recaptchaRef} />

        <button
          type="submit"
          className="btn btn-copper"
          style={{ width: "100%", justifyContent: "center" }}
          disabled={submitting}
        >
          {submitting ? "Sending…" : "Send"}
        </button>
      </form>
    </div>
  );
}
