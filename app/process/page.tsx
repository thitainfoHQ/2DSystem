import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionIntro } from "@/components/site/section-intro";
import { printheadImage } from "@/components/site/images";
import { pageMetadata } from "@/components/site/site-metadata";

export const metadata = pageMetadata({
  title: "How We Work — From Requirement to Running Line",
  description:
    "Our process is simple: tell us what you mark, get a practical printer and ink recommendation, then install with responsive local support.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <section className="process section-pad">
      <div className="container-wide process-grid">
        <div>
          <SectionIntro
            as="h1"
            eyebrow="A clear way forward"
            title="From requirement to running line."
            copy="Good guidance should feel straightforward. We make it that way."
          />
          <div className="process-image">
            <Image
              src={printheadImage}
              alt="Continuous inkjet printer printhead"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </div>
        </div>
        <div className="process-steps">
          <div className="process-step">
            <span>01</span>
            <div>
              <h2>Tell us what you mark</h2>
              <p>
                Share your product, surface, line speed and the information you
                need to print.
              </p>
            </div>
          </div>
          <div className="process-step">
            <span>02</span>
            <div>
              <h2>Get a practical recommendation</h2>
              <p>
                We help you match the right printer, ink and setup for your
                production reality.
              </p>
            </div>
          </div>
          <div className="process-step">
            <span>03</span>
            <div>
              <h2>Start with confidence</h2>
              <p>
                Test, install and keep your system running with responsive local
                support.
              </p>
            </div>
          </div>
          <Link className="button button-dark" href="/contact">
            Start a conversation <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
