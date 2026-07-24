import { Factory, ScanLine, Workflow } from "lucide-react";

import { SectionIntro } from "@/components/site/section-intro";
import { pageMetadata } from "@/components/site/site-metadata";

export const metadata = pageMetadata({
  title: "Continuous Inkjet Coding Solutions & Support",
  description:
    "The 2D System difference: easy-to-operate, uptime-focused continuous inkjet coding built for your material, line speed and production reality.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <section className="solutions section-pad">
      <div className="container-wide solutions-grid">
        <SectionIntro
          as="h1"
          eyebrow="The 2D System difference"
          title="A better line starts with a better mark."
          copy="From your first product test to years of dependable production, we pair the right coding technology with practical support."
        />
        <div className="benefit-list">
          <div className="benefit-item">
            <span className="benefit-number">01</span>
            <div>
              <h2>Easy to operate</h2>
              <p>
                Clear touchscreen controls and simple message editing keep
                operators moving.
              </p>
            </div>
            <ScanLine size={25} />
          </div>
          <div className="benefit-item">
            <span className="benefit-number">02</span>
            <div>
              <h2>Made for uptime</h2>
              <p>
                Automatic cleaning and quick-disconnect components make
                maintenance predictable.
              </p>
            </div>
            <Workflow size={25} />
          </div>
          <div className="benefit-item">
            <span className="benefit-number">03</span>
            <div>
              <h2>Ready for your material</h2>
              <p>
                Print on porous, non-porous, smooth, curved and textured
                surfaces.
              </p>
            </div>
            <Factory size={25} />
          </div>
        </div>
      </div>
    </section>
  );
}
