import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

import { SectionIntro } from "@/components/site/section-intro";
import { machineImage } from "@/components/site/images";
import { pageMetadata } from "@/components/site/site-metadata";

export const metadata = pageMetadata({
  title: "APijet 900 Continuous Inkjet Printers",
  description:
    "APijet 900 small-character continuous inkjet (CIJ) printers configured to your line speed and substrate — up to 5 print lines and 320 m/min.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <section className="products section-pad">
      <div className="container-wide">
        <div className="product-heading-row">
          <SectionIntro
            as="h1"
            eyebrow="Choose your setup"
            title="Printers with a production mindset."
            copy="Small-character coding systems configured around your line speed, substrate and message needs."
          />
          <Link className="text-link" href="/contact">
            Compare capabilities <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="product-grid">
          <article className="product-card product-card-primary">
            <div className="product-card-top">
              <span className="product-label">01 / APijet</span>
              <span className="product-badge">900 series</span>
            </div>
            <div className="product-image product-image-machine">
              <Image
                src={machineImage}
                alt="APijet 900 continuous inkjet printer"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="product-card-body">
              <h2>APijet 900</h2>
              <p>
                A reliable, touch-driven CIJ printer for high-speed production
                and precise variable-data coding.
              </p>
              <ul>
                <li>
                  <Check size={15} /> Up to 5 print lines
                </li>
                <li>
                  <Check size={15} /> Up to 320 m/min line speed
                </li>
                <li>
                  <Check size={15} /> Automatic shutdown cleaning
                </li>
              </ul>
              <Link className="card-link" href="/contact">
                Talk APijet <ArrowUpRight size={16} />
              </Link>
            </div>
          </article>
          <article className="product-card product-card-dark">
            <div className="product-card-top">
              <span className="product-label">02 / Continuous inkjet</span>
              <span className="product-badge">Flexible by design</span>
            </div>
            <div className="product-card-body">
              <div className="product-icon">
                <Sparkles size={25} />
              </div>
              <h2>Mark what matters.</h2>
              <p>
                From batch and expiry codes to barcodes, MRP and QR data, build
                the message your line needs.
              </p>
              <div className="capability-chips">
                <span>Fast setup</span>
                <span>Low maintenance</span>
                <span>High contrast</span>
              </div>
              <Link className="card-link card-link-light" href="/contact">
                Find the right fit <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="dark-card-pattern" />
          </article>
        </div>
      </div>
    </section>
  );
}
