import { SectionIntro } from "@/components/site/section-intro";
import { pageMetadata } from "@/components/site/site-metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy — Your Data & Privacy Rights",
  description:
    "How 2D System collects, uses and protects the information you share through this website and our inquiry form, plus your privacy rights.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="section-pad">
      <div className="container-wide legal-content">
        <SectionIntro
          as="h1"
          eyebrow="Legal"
          title="Privacy Policy"
          copy="This policy explains what information we collect through this website and how we use it. Please review and adapt it with your own legal counsel before publishing."
        />

        <h2>Information we collect</h2>
        <p>
          When you submit our inquiry form, we collect the details you provide —
          such as your name, company, phone number and a description of what you
          need to mark — so we can respond to your request.
        </p>

        <h2>How we use your information</h2>
        <p>
          We use the information you share solely to answer your inquiry, provide
          product recommendations and follow up about continuous inkjet coding
          solutions. We do not sell your personal information.
        </p>

        <h2>How we store and protect it</h2>
        <p>
          Inquiry details are handled by our team and kept only as long as needed
          to support your request and any resulting business relationship. We take
          reasonable measures to protect the information you share with us.
        </p>

        <h2>Your rights</h2>
        <p>
          You may ask us to access, correct or delete the personal information you
          have provided. To make a request, contact us using the details below.
        </p>

        <h2>Contact us</h2>
        <p>
          For any questions about this policy or your information, email{" "}
          <a href="mailto:2dsystem777@gmail.com">2dsystem777@gmail.com</a> or call{" "}
          <a href="tel:+919586853777">+91 95868 53777</a>. 2D System, Surat,
          Gujarat, India.
        </p>

        <p className="legal-note">Last updated: 24 July 2026.</p>
      </div>
    </section>
  );
}
