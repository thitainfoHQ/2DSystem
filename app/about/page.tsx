import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionIntro } from "@/components/site/section-intro";
import { pageMetadata } from "@/components/site/site-metadata";

export const metadata = pageMetadata({
  title: "About 2D System — Coding & Marking Specialists",
  description:
    "2D System is a continuous inkjet coding and marking specialist in Surat, India, helping manufacturers mark products, packaging and production lines.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="solutions section-pad">
      <div className="container-wide solutions-grid">
        <SectionIntro
          as="h1"
          eyebrow="Who we are"
          title="Coding partners, not just suppliers."
          copy="2D System helps manufacturers across India put clear, reliable codes on the products, packaging and production lines their customers depend on."
        />
        <div className="benefit-list">
          <div className="benefit-item">
            <span className="benefit-number">01</span>
            <div>
              <h2>Built on relationships</h2>
              <p>
                Our name stands for Relationships, Resources and Results. We
                start by understanding your line, your material and the
                information you need to print — then stay with you long after
                installation.
              </p>
            </div>
          </div>
          <div className="benefit-item">
            <span className="benefit-number">02</span>
            <div>
              <h2>Based in Surat, serving India</h2>
              <p>
                Working from Surat, Gujarat, we supply continuous inkjet (CIJ)
                printers and consumables and provide responsive local support so
                your production keeps moving.
              </p>
            </div>
          </div>
          <div className="benefit-item">
            <span className="benefit-number">03</span>
            <div>
              <h2>Focused on uptime</h2>
              <p>
                From food and beverage to pharmaceuticals, wire and cable,
                automotive parts and personal care, we match the right printer,
                ink and setup to your real-world production conditions.
              </p>
            </div>
          </div>
        </div>
        <Link className="button button-dark" href="/contact">
          Talk to our team <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
