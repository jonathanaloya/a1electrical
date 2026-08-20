import { useState } from 'react';
import EnquiryForm from '../components/EnquiryForm.jsx';
import { PRODUCTS } from '../data/products.js';
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from '../components/icons.jsx';
import { CtaStrip } from '../components/Shared.jsx';

export default function Contact() {
  const [category, setCategory] = useState('');

  return (
    <>
      <section className="pdhero">
        <img src="/images/hero-banner-2.jpeg" alt="A1 Electricals" />
        <div className="pdhero-label">Contact Us</div>
      </section>

      <section className="contact-page">
        <div className="wrap">
          <div className="contact-grid">

            {/* LEFT — form */}
            <div className="contact-form-col">
              <div className="eyebrow">Send an enquiry</div>
              <h2>Get in touch</h2>
              <p className="contact-intro">
                Fill in the form and a member of our team will respond within one working day.
              </p>
              <div className="field" style={{ marginTop: 28 }}>
                <label htmlFor="cat-select">Product category (optional)</label>
                <select
                  id="cat-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select a category</option>
                  {PRODUCTS.map((p) => (
                    <option key={p.slug} value={p.name}>{p.name}</option>
                  ))}
                </select>
              </div>
              <EnquiryForm key={category} title="" compact defaultMessage={category ? `I'm interested in ${category}...` : ''} onSuccess={() => setCategory('')} />
            </div>

            {/* RIGHT — details + map */}
            <div className="contact-info-col">
              <div className="eyebrow">Our location</div>
              <h2>Find us</h2>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon"><PinIcon /></div>
                  <div>
                    <b>Plot no. 49 Luthuli Avenue, Industrial Area, Bugolobi, P.O Box 31503, Kampala, Uganda</b>
                    <span>Kampala, Uganda</span>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-detail-icon"><PhoneIcon /></div>
                  <div>
                    <b><a href="tel:+256752347110">+256 752 347110</a></b>
                    <span>Mon–Sat, 8:30am–6:00pm EAT</span>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-detail-icon"><MailIcon /></div>
                  <div>
                    <b><a href="mailto:info@a1electricalsltd.com">info@a1electricalsltd.com</a></b>
                    <span>Product &amp; order enquiries</span>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-detail-icon"><ClockIcon /></div>
                  <div>
                    <b>Opening hours</b>
                    <span>Mon–Sat: 8:30am – 6:00pm</span>
                  </div>
                </div>
              </div>

              <div className="contact-map">
                <iframe
                  title="A1 Electricals Location"
                  src="https://www.google.com/maps?q=Plot%20no.%2049%20Luthuli%20Avenue%2C%20Industrial%20Area%2C%20Bugolobi%2C%20Kampala%2C%20Uganda&output=embed"
                  className="w-full h-[420px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
