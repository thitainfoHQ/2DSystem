import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { pageMetadata } from "@/components/site/site-metadata";

export const metadata = pageMetadata({
  title: "Contact 2D System — Coding & Marking Experts",
  description:
    "Tell us what needs to be marked. Share your product and production-line details and our team in Surat, India will help you find a solution.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="contact-section">
      <div className="container-wide contact-grid">
        <div className="contact-copy">
          <p className="eyebrow eyebrow-yellow">
            Let&apos;s make your line clearer
          </p>
          <h1>Tell us what needs to be marked.</h1>
          <p>
            Send us a few details about your product and production line. Our
            team will help you find a dependable way forward.
          </p>
          <div className="contact-details">
            <a href="tel:+919586853777">
              <Phone size={17} /> +91 95868 53777
            </a>
            <a href="mailto:2dsystem777@gmail.com">
              <Mail size={17} /> 2dsystem777@gmail.com
            </a>
            <span>
              <MapPin size={17} /> Surat, Gujarat, India
            </span>
          </div>
        </div>
        <form
          className="inquiry-form"
          action="mailto:2dsystem777@gmail.com"
          method="post"
          encType="text/plain"
        >
          <div className="form-heading">
            <span>Inquiry / 01</span>
            <h2>Start with the basics.</h2>
          </div>
          <label>
            Your name
            <input name="name" type="text" placeholder="Full name" required />
          </label>
          <label>
            Company
            <input name="company" type="text" placeholder="Company name" />
          </label>
          <label>
            Phone number
            <input name="phone" type="tel" placeholder="+91" required />
          </label>
          <label>
            What are you marking?
            <textarea
              name="requirement"
              placeholder="Tell us about your product or line"
              rows={3}
              required
            />
          </label>
          <button className="button button-yellow" type="submit">
            Send inquiry <ArrowUpRight size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
