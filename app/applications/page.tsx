import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { SectionIntro } from "@/components/site/section-intro";
import { bottleImage, pouchImage, tubeImage } from "@/components/site/images";
import { pageMetadata } from "@/components/site/site-metadata";

export const metadata = pageMetadata({
  title: "Coding Applications by Industry & Material",
  description:
    "Dependable continuous inkjet coding across flexible packaging, bottles and caps, wire, tube and hose — trusted in food, pharma, automotive and more.",
  path: "/applications",
});

const applications: Array<{
  label: string;
  title: string;
  alt: string;
  image: string;
  className: string;
}> = [
  {
    label: "Flexible packaging",
    title: "Clear, repeatable codes on every pack",
    alt: "Batch and date code printed on a flexible pouch package",
    image: pouchImage,
    className: "application-large",
  },
  {
    label: "Bottles & caps",
    title: "Traceability where it starts",
    alt: "Continuous inkjet code marked on a bottle cap",
    image: bottleImage,
    className: "application-tall",
  },
  {
    label: "Wire, tube & hose",
    title: "Marking that follows the line",
    alt: "Printed marking running along an extruded tube on a production line",
    image: tubeImage,
    className: "application-wide",
  },
];

const industries = [
  "Food & beverage",
  "Pharmaceuticals",
  "Wire & cable",
  "Automotive parts",
  "Personal care",
  "Extrusion & pipes",
];

export default function ApplicationsPage() {
  return (
    <section className="applications section-pad">
      <div className="container-wide">
        <SectionIntro
          as="h1"
          eyebrow="Proof on product"
          title="Your material is our starting point."
          copy="See what dependable coding looks like across the surfaces and industries your customers rely on."
        />
        <div className="application-grid">
          {applications.map((item) => (
            <article
              className={`application-card ${item.className}`}
              key={item.title}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="application-overlay">
                <span>{item.label}</span>
                <h2>{item.title}</h2>
                <ArrowUpRight size={20} />
              </div>
            </article>
          ))}
        </div>
        <div className="industry-strip">
          <span className="industry-label">Trusted across</span>
          {industries.map((industry) => (
            <span className="industry-pill" key={industry}>
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
