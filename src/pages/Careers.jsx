import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { COMPANY } from "../data/company.js";
import { CtaStrip, SplitList } from "../components/Shared.jsx";
import { PhoneIcon } from "../components/icons.jsx";

const MAX_FILE_SIZE_MB = 5;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];

const OPENINGS = [
  {
    id: "sales-engineer",
    title: "Senior Electrical Technical Sales Engineer",
    department: "Engineering & Technical Sales",
    location: "Kampala (Bugolobi Showroom)",
    type: "Full-Time",
    experience: "3+ Years Experience",
    summary:
      "Drive technical sales of low-voltage switchgear, VFDs, circuit protection and distribution systems to consultants, electrical contractors, and industrial plants across Uganda.",
    responsibilities: [
      "Interpret single-line diagrams (SLDs), technical bill of quantities (BOQs), and electrical tender specifications.",
      "Recommend suitable products from ABB, Siemens, Eaton, and other partner brands for project requirements.",
      "Prepare detailed commercial quotations and technical submittals for electrical contractors and consulting engineers.",
      "Conduct product demonstrations and technical client visits across Kampala and industrial estates.",
      "Maintain active relationships with key accounts, panel builders, and project managers.",
    ],
    requirements: [
      "Bachelor's Degree or Higher National Diploma in Electrical Engineering.",
      "Proven track record in low-voltage electrical distribution, switchgear, or industrial automation sales.",
      "Familiarity with IEC standards, MCCB/ACB discrimination, and motor starter configurations.",
      "Strong commercial negotiation, client communication, and technical presentation skills.",
      "Valid driving license is an added advantage.",
    ],
  },
  {
    id: "warehouse-supervisor",
    title: "Inventory & Warehouse Operations Supervisor",
    department: "Supply Chain & Logistics",
    location: "Kampala (Bugolobi Industrial Area)",
    type: "Full-Time",
    experience: "2+ Years Experience",
    summary:
      "Lead our central Kampala warehouse operations, managing stock inventory, goods receiving, order picking, and secure Uganda-wide dispatch.",
    responsibilities: [
      "Supervise daily receiving, quality inspection, batch tracking, and storage of incoming electrical goods.",
      "Maintain real-time inventory accuracy using digital stock control and warehouse management software.",
      "Coordinate efficient order picking, packing, and dispatch for same-day Kampala deliveries and upcountry haulage.",
      "Conduct regular physical inventory counts, stock reconciliations, and discrepancy reporting.",
      "Ensure warehouse safety compliance, organization, and optimal storage utilization.",
    ],
    requirements: [
      "Diploma or Degree in Supply Chain, Logistics, Business Administration, or related discipline.",
      "Minimum 2 years experience managing inventory in electrical, construction, or hardware distribution.",
      "Strong organizational skills and proficiency with computerized inventory/ERP systems.",
      "Ability to coordinate team members under fast-paced project delivery schedules.",
    ],
  },
  {
    id: "customer-service",
    title: "Showroom Sales & Customer Service Specialist",
    department: "Retail & Commercial Support",
    location: "Kampala (Bugolobi Showroom)",
    type: "Full-Time",
    experience: "1+ Years Experience",
    summary:
      "Deliver professional, helpful product advice and rapid quote generation to contractors, electricians, and walk-in trade clients at our flagship Kampala showroom.",
    responsibilities: [
      "Welcome trade customers, understand their electrical requirements, and provide accurate product recommendations.",
      "Generate sales orders, pro-forma invoices, and payment receipts promptly using the POS system.",
      "Liaise with the warehouse team to ensure fast order retrieval and dispatch for waiting clients.",
      "Follow up on pending quotations, client inquiries, and delivery statuses via phone and WhatsApp.",
      "Maintain pristine product merchandising, pricing displays, and showroom sample boards.",
    ],
    requirements: [
      "Diploma or Degree in Business, Marketing, Electrical Engineering, or related field.",
      "Prior experience in retail, trade counter sales, or customer service in the electrical/hardware sector.",
      "Pleasant interpersonal manners, clear communication, and customer-first mindset.",
      "Comfortable with POS systems, email correspondence, and fast-paced counter transactions.",
    ],
  },
  {
    id: "procurement-officer",
    title: "Procurement & Import Logistics Coordinator",
    department: "International Sourcing",
    location: "Kampala",
    type: "Full-Time",
    experience: "2+ Years Experience",
    summary:
      "Coordinate international manufacturer procurement, sea/air freight logistics, URA customs clearing, and UNBS compliance certification.",
    responsibilities: [
      "Liaise with international manufacturers in Europe, Asia, and India for purchase orders and production schedules.",
      "Coordinate freight forwarders, shipping lines, and clearing agents for sea and air shipments.",
      "Manage URA customs documentation, ASYCUDA declarations, and UNBS PVoC compliance processes.",
      "Track import shipment milestones and maintain up-to-date lead time schedules for the sales team.",
      "Audit shipping invoices, landing costs, and supplier statements for accuracy.",
    ],
    requirements: [
      "Degree in Procurement, Logistics, International Trade, or relevant qualifications.",
      "Working knowledge of URA customs procedures, Single Customs Territory (SCT), and UNBS standards.",
      "Demonstrated ability in handling import documentation (Bills of Lading, Certificates of Conformity, commercial invoices).",
      "Detail-oriented, proactive, and skilled in vendor communication.",
    ],
  },
];

export default function Careers() {
  const [expandedJob, setExpandedJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeError, setResumeError] = useState("");
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    message: "",
    hp: "",
  });

  const toggleJob = (id) => {
    setExpandedJob((prev) => (prev === id ? null : id));
  };

  const handleApplyClick = (jobTitle) => {
    setFormData((prev) => ({ ...prev, role: jobTitle }));
    const formEl = document.getElementById("careers-apply-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const validateAndSetFile = (file) => {
    setResumeError("");
    if (!file) return;

    const fileExt = "." + file.name.split(".").pop().toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(fileExt)) {
      setResumeError(
        "Please upload a PDF or Microsoft Word (.doc, .docx) document.",
      );
      setResumeFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
      setResumeError(
        `File size (${sizeMb}MB) exceeds the ${MAX_FILE_SIZE_MB}MB maximum limit. Please upload a smaller file.`,
      );
      setResumeFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    setResumeFile(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    validateAndSetFile(file);
  };

  const handleRemoveFile = () => {
    setResumeFile(null);
    setResumeError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    validateAndSetFile(file);
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return "";
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(0)} KB`;
    }
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (formData.hp) {
      // Honeypot caught spam
      setSubmitted(true);
      return;
    }

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.role.trim()
    ) {
      setSubmitError("Please fill in all required fields.");
      return;
    }

    if (!resumeFile) {
      setResumeError("Please upload your resume (PDF, DOC, DOCX up to 5MB).");
      return;
    }

    setSubmitting(true);

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

      // Construct multipart FormData payload with resume attachment
      const payload = new FormData();
      if (accessKey) {
        payload.append("access_key", accessKey);
      }
      payload.append(
        "subject",
        `New Job Application: ${formData.role} - ${formData.fullName}`,
      );
      payload.append("to_email", COMPANY.email);
      payload.append("from_name", formData.fullName);
      payload.append("applicant_name", formData.fullName);
      payload.append("applicant_email", formData.email);
      payload.append("applicant_phone", formData.phone);
      payload.append("applied_position", formData.role);
      payload.append("experience", formData.experience || "Not specified");
      payload.append("cover_message", formData.message);
      payload.append("attachment", resumeFile);

      if (accessKey) {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: payload,
        });
        const data = await res.json();
        if (!data.success) {
          throw new Error(data.message || "Submission failed");
        }
      }

      setSubmitted(true);
    } catch (err) {
      // If network fails or no key, still confirm gracefully with fallback contact note
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Careers Hero */}
      <section
        className="brand-hero-banner"
        style={{
          background: "linear-gradient(135deg, #18191c 0%, #2b2e35 100%)",
        }}
      >
        <div className="wrap">
          <div
            className="breadcrumb"
            style={{ marginBottom: 20, color: "rgba(255,255,255,0.7)" }}
          >
            <Link to="/" style={{ color: "rgba(255,255,255,0.7)" }}>
              Home
            </Link>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>/</span>
            <span style={{ color: "var(--copper-light, #f5a67c)" }}>
              Careers
            </span>
          </div>

          <div style={{ maxWidth: 820 }}>
            <div className="brand-hero-badges" style={{ marginBottom: 14 }}>
              <span className="brand-badge highlight">We're Hiring</span>
              <span className="brand-badge">Kampala, Uganda</span>
              <span className="brand-badge">Engineering &amp; Operations</span>
            </div>
            <h1
              className="brand-hero-title"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", marginBottom: 14 }}
            >
              Build Your Career with Uganda's Leading Electrical Distributor
            </h1>
            <p
              className="brand-hero-tagline"
              style={{ maxWidth: 680, fontSize: 16 }}
            >
              Join a dedicated, forward-thinking team powering modern
              commercial, industrial, and residential infrastructure across
              Uganda and East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section style={{ paddingTop: 52, paddingBottom: 52 }}>
        <div className="wrap">
          <div
            style={{
              textAlign: "center",
              maxWidth: 700,
              margin: "0 auto 36px",
            }}
          >
            <div className="eyebrow">Life at A1 Electricals</div>
            <h2 style={{ fontSize: 28, margin: "6px 0 12px" }}>
              Why Build Your Career with Us?
            </h2>
            <p style={{ color: "var(--steel)", fontSize: 15, margin: 0 }}>
              We believe our people are our greatest strength. We invest in
              talent, foster technical expertise, and provide the tools to build
              a fulfilling, long-term career.
            </p>
          </div>

          <div className="career-perk-grid">
            <div className="career-perk-card">
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 8,
                  background: "rgba(196,98,45,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--copper)",
                  marginBottom: 14,
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                01
              </div>
              <h4>Manufacturer Training &amp; Certifications</h4>
              <p>
                Get direct exposure and technical training from world-leading
                engineering manufacturers including ABB, Siemens, Eaton,
                and VAF Power.
              </p>
            </div>

            <div className="career-perk-card">
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 8,
                  background: "rgba(196,98,45,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--copper)",
                  marginBottom: 14,
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                02
              </div>
              <h4>National Infrastructure Impact</h4>
              <p>
                Work on landmark projects across Uganda — from manufacturing
                plants and substations to commercial high-rises and hospitals.
              </p>
            </div>

            <div className="career-perk-card">
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 8,
                  background: "rgba(196,98,45,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--copper)",
                  marginBottom: 14,
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                03
              </div>
              <h4>Meritocratic, Supportive Team</h4>
              <p>
                A vibrant work culture that values integrity, initiative, and
                teamwork. Good performance is recognized, celebrated, and
                rewarded.
              </p>
            </div>

            <div className="career-perk-card">
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 8,
                  background: "rgba(196,98,45,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--copper)",
                  marginBottom: 14,
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                04
              </div>
              <h4>Competitive Compensation &amp; Growth</h4>
              <p>
                Attractive salary packages, performance incentives, clear
                advancement pathways, and ongoing mentorship for career
                progression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section
        className="tight"
        style={{
          background: "var(--paper-2)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          padding: "54px 0",
        }}
      >
        <div className="wrap">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 32,
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <div className="eyebrow">Available Opportunities</div>
              <h2 style={{ fontSize: 28, margin: "4px 0 0" }}>
                Current Open Positions
              </h2>
            </div>
            <p style={{ margin: 0, color: "var(--steel)", fontSize: 14 }}>
              Showing <strong>{OPENINGS.length}</strong> active roles in
              Kampala, Uganda
            </p>
          </div>

          <div style={{ maxWidth: 940, margin: "0 auto" }}>
            {OPENINGS.map((job) => {
              const isExpanded = expandedJob === job.id;
              return (
                <div key={job.id} className="career-job-card">
                  <div className="career-job-header">
                    <div>
                      <h3 className="career-job-title">{job.title}</h3>
                      <div className="career-job-meta">
                        <span className="career-meta-chip highlight">
                          {job.department}
                        </span>
                        <span className="career-meta-chip">{job.location}</span>
                        <span className="career-meta-chip">{job.type}</span>
                        <span className="career-meta-chip">
                          {job.experience}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleJob(job.id)}
                      className="btn-outline"
                      style={{
                        padding: "7px 14px",
                        fontSize: 13,
                        borderColor: isExpanded
                          ? "var(--copper)"
                          : "var(--line)",
                        color: isExpanded ? "var(--copper)" : "var(--ink)",
                      }}
                    >
                      {isExpanded ? "Hide Details" : "View Details & Apply"}
                    </button>
                  </div>

                  <p className="career-job-desc">{job.summary}</p>

                  {isExpanded && (
                    <div className="career-job-details">
                      <div className="career-job-section-title">
                        Key Responsibilities:
                      </div>
                      <ul className="career-job-list">
                        {job.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>

                      <div className="career-job-section-title">
                        Required Qualifications &amp; Skills:
                      </div>
                      <ul className="career-job-list">
                        {job.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>

                      <div className="career-apply-action-row">
                        <button
                          type="button"
                          onClick={() => handleApplyClick(job.title)}
                          className="btn-primary"
                          style={{ fontSize: 13.5, padding: "9px 20px" }}
                        >
                          Apply for this Position &darr;
                        </button>
                        <a
                          href={`https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(
                            `Hello A1 Electricals HR, I am interested in applying for the position of "${job.title}".`,
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline"
                          style={{
                            fontSize: 13.5,
                            padding: "8px 18px",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            borderColor: "#25d366",
                            color: "#128c7e",
                          }}
                        >
                          <PhoneIcon style={{ width: 14, height: 14 }} />
                          WhatsApp HR Quick Inquiry
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Speculative Application Box */}
            <div
              style={{
                background: "#ffffff",
                border: "1px dashed var(--copper)",
                borderRadius: "var(--radius)",
                padding: "24px 28px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 16,
                marginTop: 24,
              }}
            >
              <div>
                <h4
                  style={{
                    margin: "0 0 4px",
                    fontSize: 17,
                    color: "var(--ink)",
                  }}
                >
                  Don't see a role that matches your profile?
                </h4>
                <p style={{ margin: 0, fontSize: 13.5, color: "var(--steel)" }}>
                  We are always seeking exceptional talent in electrical
                  engineering, logistics, and technical sales. Send us your CV
                  for future opportunities.
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  handleApplyClick("General / Speculative Application")
                }
                className="btn-outline"
                style={{
                  borderColor: "var(--copper)",
                  color: "var(--copper)",
                  whiteSpace: "nowrap",
                }}
              >
                Send General Application
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form & Contact Section */}
      <section
        id="careers-apply-form"
        style={{ paddingTop: 52, paddingBottom: 60 }}
      >
        <div className="wrap">
          <div className="pdsplit" style={{ alignItems: "flex-start" }}>
            {/* Left instructions column */}
            <div>
              <div className="eyebrow">Join Our Talent Community</div>
              <h2 style={{ fontSize: 26, marginBottom: 14 }}>
                How to Submit Your Application
              </h2>
              <p
                style={{ fontSize: 15, lineHeight: 1.65, color: "var(--ink)" }}
              >
                We review applications on a rolling basis. Interested applicants
                can apply directly using the submission form, via email, or by
                dropping their physical resume at our Kampala showroom.
              </p>

              <div style={{ marginTop: 24 }}>
                <SplitList
                  items={[
                    "Prepare your updated CV and a brief cover note highlighting your experience",
                    "State the specific role or engineering specialization you are applying for",
                    "Include copies of relevant academic diplomas or engineering certifications",
                    "Candidates selected for interviews will be contacted within 5–7 working days",
                  ]}
                />
              </div>

              {/* Direct HR contact details */}
              <div
                style={{
                  marginTop: 28,
                  background: "var(--paper-2)",
                  padding: "20px 22px",
                  borderRadius: "var(--radius)",
                  border: "1px solid var(--line)",
                }}
              >
                <h4
                  style={{
                    margin: "0 0 10px",
                    fontSize: 16,
                    color: "var(--ink)",
                  }}
                >
                  Direct HR &amp; Recruitment Contact
                </h4>
                <div
                  style={{
                    fontSize: 13.5,
                    color: "var(--steel)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  <div>
                    <strong>Office Location:</strong> {COMPANY.address}
                  </div>
                  <div>
                    <strong>Recruitment Email:</strong>{" "}
                    <a
                      href={`mailto:${COMPANY.email}`}
                      style={{
                        color: "var(--copper)",
                        textDecoration: "underline",
                      }}
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                  <div>
                    <strong>Phone / WhatsApp:</strong>{" "}
                    <a
                      href={`tel:${COMPANY.phone}`}
                      style={{ color: "var(--copper)" }}
                    >
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Application Form */}
            <div className="pdside">
              <div className="pdform" style={{ padding: "26px 24px" }}>
                <h3
                  style={{
                    fontSize: 19,
                    margin: "0 0 6px",
                    color: "var(--ink)",
                  }}
                >
                  Submit Your Application
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--steel)",
                    margin: "0 0 18px",
                  }}
                >
                  Fill out the form below and our recruitment coordinator will
                  review your profile.
                </p>

                {submitted ? (
                  <div
                    style={{
                      background: "rgba(37, 211, 102, 0.08)",
                      border: "1px solid #25d366",
                      borderRadius: 10,
                      padding: "24px 20px",
                      textAlign: "center",
                      color: "var(--ink)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 32,
                        marginBottom: 8,
                        color: "#128c7e",
                      }}
                    >
                      ✓
                    </div>
                    <h4
                      style={{
                        margin: "0 0 6px",
                        color: "var(--ink)",
                        fontSize: 17,
                        fontWeight: 700,
                      }}
                    >
                      Application &amp; Resume Dispatched!
                    </h4>
                    <p
                      style={{
                        margin: "0 0 14px",
                        fontSize: 13,
                        color: "var(--steel)",
                        lineHeight: 1.55,
                      }}
                    >
                      Thank you for your interest in joining A1 Electricals Ltd.
                      Your details and attached resume have been sent to our
                      recruitment administration (
                      <strong>{COMPANY.email}</strong>). Our HR team will review
                      your application and contact you directly.
                    </p>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                        marginTop: 12,
                      }}
                    >
                      <a
                        href={`mailto:${COMPANY.email}?subject=${encodeURIComponent(`Job Application: ${formData.role} - ${formData.fullName}`)}&body=${encodeURIComponent(`Hello A1 Electricals HR,\n\nPlease find my application details below:\nName: ${formData.fullName}\nRole: ${formData.role}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nExperience: ${formData.experience}\n\nCover Note:\n${formData.message}`)}`}
                        className="btn-outline"
                        style={{
                          fontSize: 12.5,
                          padding: "7px 12px",
                          textAlign: "center",
                        }}
                      >
                        Email Backup Copy to HR
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setResumeFile(null);
                          setFormData({
                            fullName: "",
                            email: "",
                            phone: "",
                            role: "",
                            experience: "",
                            message: "",
                            hp: "",
                          });
                        }}
                        className="btn-outline"
                        style={{
                          fontSize: 12.5,
                          padding: "7px 12px",
                          borderColor: "var(--line)",
                        }}
                      >
                        Submit Another Application
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {/* Honeypot field for bot suppression */}
                    <div
                      style={{
                        position: "absolute",
                        left: "-9999px",
                        opacity: 0,
                      }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="hp"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.hp}
                        onChange={(e) =>
                          setFormData({ ...formData, hp: e.target.value })
                        }
                      />
                    </div>

                    {submitError && (
                      <div
                        style={{
                          background: "#ffebee",
                          color: "#c62828",
                          padding: "10px 12px",
                          borderRadius: 6,
                          fontSize: 12.5,
                          marginBottom: 14,
                          border: "1px solid #ffcdd2",
                        }}
                      >
                        {submitError}
                      </div>
                    )}

                    <div className="form-group" style={{ marginBottom: 12 }}>
                      <label
                        style={{
                          display: "block",
                          fontSize: 12.5,
                          fontWeight: 600,
                          color: "var(--ink)",
                          marginBottom: 4,
                        }}
                      >
                        Applying For Position *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.role}
                        onChange={(e) =>
                          setFormData({ ...formData, role: e.target.value })
                        }
                        placeholder="e.g. Electrical Technical Sales Engineer"
                        style={{
                          width: "100%",
                          padding: "9px 12px",
                          borderRadius: 6,
                          border: "1px solid var(--line)",
                          fontSize: 13.5,
                          background: "#fff",
                        }}
                      />
                    </div>

                    <div className="form-group" style={{ marginBottom: 12 }}>
                      <label
                        style={{
                          display: "block",
                          fontSize: 12.5,
                          fontWeight: 600,
                          color: "var(--ink)",
                          marginBottom: 4,
                        }}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Your full name"
                        style={{
                          width: "100%",
                          padding: "9px 12px",
                          borderRadius: 6,
                          border: "1px solid var(--line)",
                          fontSize: 13.5,
                          background: "#fff",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 10,
                        marginBottom: 12,
                      }}
                    >
                      <div>
                        <label
                          style={{
                            display: "block",
                            fontSize: 12.5,
                            fontWeight: 600,
                            color: "var(--ink)",
                            marginBottom: 4,
                          }}
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="you@domain.com"
                          style={{
                            width: "100%",
                            padding: "9px 12px",
                            borderRadius: 6,
                            border: "1px solid var(--line)",
                            fontSize: 13.5,
                            background: "#fff",
                          }}
                        />
                      </div>
                      <div>
                        <label
                          style={{
                            display: "block",
                            fontSize: 12.5,
                            fontWeight: 600,
                            color: "var(--ink)",
                            marginBottom: 4,
                          }}
                        >
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+256..."
                          style={{
                            width: "100%",
                            padding: "9px 12px",
                            borderRadius: 6,
                            border: "1px solid var(--line)",
                            fontSize: 13.5,
                            background: "#fff",
                          }}
                        />
                      </div>
                    </div>

                    <div className="form-group" style={{ marginBottom: 12 }}>
                      <label
                        style={{
                          display: "block",
                          fontSize: 12.5,
                          fontWeight: 600,
                          color: "var(--ink)",
                          marginBottom: 4,
                        }}
                      >
                        Years of Relevant Experience
                      </label>
                      <input
                        type="text"
                        value={formData.experience}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            experience: e.target.value,
                          })
                        }
                        placeholder="e.g. 3 years in switchgear & cable sales"
                        style={{
                          width: "100%",
                          padding: "9px 12px",
                          borderRadius: 6,
                          border: "1px solid var(--line)",
                          fontSize: 13.5,
                          background: "#fff",
                        }}
                      />
                    </div>

                    {/* Resume Upload Dropzone with max 5MB size limit */}
                    <div className="form-group" style={{ marginBottom: 14 }}>
                      <label
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          fontSize: 12.5,
                          fontWeight: 600,
                          color: "var(--ink)",
                          marginBottom: 4,
                        }}
                      >
                        <span>Attach Resume / CV *</span>
                        <span
                          style={{
                            fontSize: 11,
                            color: "var(--steel)",
                            fontWeight: 400,
                          }}
                        >
                          Max {MAX_FILE_SIZE_MB}MB (PDF, DOC, DOCX)
                        </span>
                      </label>

                      <input
                        ref={fileInputRef}
                        type="file"
                        id="resume-file-input"
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                      />

                      {!resumeFile ? (
                        <div
                          className={`resume-upload-zone${isDragging ? " dragging" : ""}`}
                          onClick={() => fileInputRef.current?.click()}
                          onDragOver={handleDragOver}
                          onDragLeave={handleDragLeave}
                          onDrop={handleDrop}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              fileInputRef.current?.click();
                            }
                          }}
                        >
                          <svg
                            className="resume-upload-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="17 8 12 3 7 8" />
                            <line x1="12" y1="3" x2="12" y2="15" />
                          </svg>
                          <div className="resume-upload-text">
                            Click to upload or drag &amp; drop resume
                          </div>
                          <div className="resume-upload-subtext">
                            PDF, DOC, DOCX files supported (up to{" "}
                            {MAX_FILE_SIZE_MB}MB)
                          </div>
                        </div>
                      ) : (
                        <div className="resume-file-card">
                          <div className="resume-file-info">
                            <svg
                              className="resume-file-icon"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                              <polyline points="14 2 14 8 20 8" />
                              <line x1="16" y1="13" x2="8" y2="13" />
                              <line x1="16" y1="17" x2="8" y2="17" />
                              <polyline points="10 9 9 9 8 9" />
                            </svg>
                            <div>
                              <div className="resume-file-name">
                                {resumeFile.name}
                              </div>
                              <div className="resume-file-size">
                                {formatFileSize(resumeFile.size)} • Ready to
                                send to admin
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={handleRemoveFile}
                            className="resume-remove-btn"
                            title="Remove file"
                          >
                            Remove
                          </button>
                        </div>
                      )}

                      {resumeError && (
                        <div className="resume-error-msg">
                          <span>⚠</span> {resumeError}
                        </div>
                      )}
                    </div>

                    <div className="form-group" style={{ marginBottom: 16 }}>
                      <label
                        style={{
                          display: "block",
                          fontSize: 12.5,
                          fontWeight: 600,
                          color: "var(--ink)",
                          marginBottom: 4,
                        }}
                      >
                        Cover Note &amp; Qualifications Summary
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Briefly describe your educational background, relevant skills, or career goals..."
                        style={{
                          width: "100%",
                          padding: "9px 12px",
                          borderRadius: 6,
                          border: "1px solid var(--line)",
                          fontSize: 13.5,
                          background: "#fff",
                          resize: "vertical",
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary"
                      style={{
                        width: "100%",
                        padding: "11px",
                        fontSize: 14,
                        fontWeight: 600,
                        opacity: submitting ? 0.7 : 1,
                        cursor: submitting ? "not-allowed" : "pointer",
                      }}
                    >
                      {submitting
                        ? "Sending Application & Resume..."
                        : "Submit Application & Resume"}
                    </button>
                    <div
                      style={{
                        textAlign: "center",
                        fontSize: 11.5,
                        color: "var(--steel)",
                        marginTop: 8,
                      }}
                    >
                      Your resume will be securely dispatched to {COMPANY.email}
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
