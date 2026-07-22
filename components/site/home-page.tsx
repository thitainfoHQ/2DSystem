"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleDot,
  Factory,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const machineImage = "/images/products/apijet-900/apijet-900-machine.jpeg";
const printheadImage = "/images/products/apijet-900/apijet-900-printhead.jpeg";
const bottleImage = "/images/applications/bottle-cap-coding.jpeg";
const tubeImage = "/images/applications/tube-and-hose-coding.jpeg";
const pouchImage = "/images/applications/flexible-packaging-coding.jpeg";

const applications: Array<{
  label: string;
  title: string;
  image: string;
  className: string;
}> = [
  {
    label: "Flexible packaging",
    title: "Clear, repeatable codes on every pack",
    image: pouchImage,
    className: "application-large",
  },
  {
    label: "Bottles & caps",
    title: "Traceability where it starts",
    image: bottleImage,
    className: "application-tall",
  },
  {
    label: "Wire, tube & hose",
    title: "Marking that follows the line",
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

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`brand-mark ${light ? "brand-mark-light" : ""}`}
      aria-label="2D System"
    >
      <span className="brand-mark-symbol">2D</span>
      <span className="brand-mark-copy">
        <strong>2D SYSTEM</strong>
        <small>RELATIONSHIPS • RESOURCES • RESULTS</small>
      </span>
    </span>
  );
}

function SectionIntro({
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-intro section-intro-${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="topline">
        <span>Continuous inkjet coding & marking</span>
        <span className="topline-location">
          <MapPin size={13} /> Surat, India
        </span>
      </div>
      <div className="nav-shell container-wide">
        <a href="#top" aria-label="2D System home">
          <BrandMark />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#solutions">Solutions</a>
          <a href="#products">Products</a>
          <a href="#applications">Applications</a>
          <a href="#process">How we work</a>
        </nav>
        <a className="nav-cta" href="#contact">
          Talk to an expert <ArrowUpRight size={17} />
        </a>
        <button
          className="mobile-menu"
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {menuOpen ? (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="#solutions" onClick={closeMenu}>
            Solutions <ArrowUpRight size={17} />
          </a>
          <a href="#products" onClick={closeMenu}>
            Products <ArrowUpRight size={17} />
          </a>
          <a href="#applications" onClick={closeMenu}>
            Applications <ArrowUpRight size={17} />
          </a>
          <a href="#process" onClick={closeMenu}>
            How we work <ArrowUpRight size={17} />
          </a>
          <a className="mobile-nav-cta" href="#contact" onClick={closeMenu}>
            Talk to an expert <ArrowUpRight size={17} />
          </a>
        </nav>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid container-wide">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span className="signal-dot" /> Coding you can count on
          </div>
          <h1>
            Make every mark <em>matter.</em>
          </h1>
          <p className="hero-description">
            Reliable continuous inkjet systems for the products, packages and
            production lines that keep business moving.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Find your printer <ArrowUpRight size={18} />
            </a>
            <a className="text-link text-link-light" href="#applications">
              See applications <ChevronRight size={18} />
            </a>
          </div>
          <div className="hero-proof">
            <ShieldCheck size={18} />
            <span>Built for high-speed, non-contact marking</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-grid-lines" />
          <div className="hero-image-frame">
            <Image
              src={machineImage}
              alt="2D System continuous inkjet printer"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 55vw"
            />
          </div>
          <div className="hero-spec-card">
            <span className="spec-index">01 / 03</span>
            <strong>
              Small character.
              <br />
              Big capability.
            </strong>
            <span>APijet 900 series</span>
          </div>
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
        </div>
      </div>
      <div className="hero-ticker" aria-label="Capabilities">
        <div className="ticker-track">
          <span>Batch codes</span>
          <CircleDot />
          <span>Expiry dates</span>
          <CircleDot />
          <span>Barcodes</span>
          <CircleDot />
          <span>Variable data</span>
          <CircleDot />
          <span>QR codes</span>
          <CircleDot />
          <span>Batch codes</span>
          <CircleDot />
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section className="solutions section-pad" id="solutions">
      <div className="container-wide solutions-grid">
        <SectionIntro
          eyebrow="The 2D System difference"
          title="A better line starts with a better mark."
          copy="From your first product test to years of dependable production, we pair the right coding technology with practical support."
        />
        <div className="benefit-list">
          <div className="benefit-item">
            <span className="benefit-number">01</span>
            <div>
              <h3>Easy to operate</h3>
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
              <h3>Made for uptime</h3>
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
              <h3>Ready for your material</h3>
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

function ProductSection() {
  return (
    <section className="products section-pad" id="products">
      <div className="container-wide">
        <div className="product-heading-row">
          <SectionIntro
            eyebrow="Choose your setup"
            title="Printers with a production mindset."
            copy="Small-character coding systems configured around your line speed, substrate and message needs."
          />
          <a className="text-link" href="#contact">
            Compare capabilities <ArrowUpRight size={17} />
          </a>
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
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="product-card-body">
              <h3>APijet 900</h3>
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
              <a className="card-link" href="#contact">
                Talk APijet <ArrowUpRight size={16} />
              </a>
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
              <h3>Mark what matters.</h3>
              <p>
                From batch and expiry codes to barcodes, MRP and QR data, build
                the message your line needs.
              </p>
              <div className="capability-chips">
                <span>Fast setup</span>
                <span>Low maintenance</span>
                <span>High contrast</span>
              </div>
              <a className="card-link card-link-light" href="#contact">
                Find the right fit <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="dark-card-pattern" />
          </article>
        </div>
      </div>
    </section>
  );
}

function Applications() {
  return (
    <section className="applications section-pad" id="applications">
      <div className="container-wide">
        <SectionIntro
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
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
              <div className="application-overlay">
                <span>{item.label}</span>
                <h3>{item.title}</h3>
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

function Process() {
  return (
    <section className="process section-pad" id="process">
      <div className="container-wide process-grid">
        <div>
          <SectionIntro
            eyebrow="A clear way forward"
            title="From requirement to running line."
            copy="Good guidance should feel straightforward. We make it that way."
          />
          <div className="process-image">
            <Image
              src={printheadImage}
              alt="Continuous inkjet printer printhead"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              loading="lazy"
            />
          </div>
        </div>
        <div className="process-steps">
          <div className="process-step">
            <span>01</span>
            <div>
              <h3>Tell us what you mark</h3>
              <p>
                Share your product, surface, line speed and the information you
                need to print.
              </p>
            </div>
          </div>
          <div className="process-step">
            <span>02</span>
            <div>
              <h3>Get a practical recommendation</h3>
              <p>
                We help you match the right printer, ink and setup for your
                production reality.
              </p>
            </div>
          </div>
          <div className="process-step">
            <span>03</span>
            <div>
              <h3>Start with confidence</h3>
              <p>
                Test, install and keep your system running with responsive local
                support.
              </p>
            </div>
          </div>
          <a className="button button-dark" href="#contact">
            Start a conversation <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container-wide contact-grid">
        <div className="contact-copy">
          <p className="eyebrow eyebrow-yellow">
            Let&apos;s make your line clearer
          </p>
          <h2>Tell us what needs to be marked.</h2>
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
            <h3>Start with the basics.</h3>
          </div>
          <label htmlFor="name">
            Your name
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Full name"
              required
            />
          </label>
          <label htmlFor="company">
            Company
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Company name"
            />
          </label>
          <label htmlFor="phone">
            Phone number
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91"
              required
            />
          </label>
          <label htmlFor="requirement">
            What are you marking?
            <textarea
              id="requirement"
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

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-wide footer-top">
        <BrandMark light />
        <div className="footer-tagline">
          Small character coding.
          <br />
          <strong>Big production confidence.</strong>
        </div>
        <a className="footer-arrow" href="#top" aria-label="Back to top">
          <ArrowUpRight size={22} />
        </a>
      </div>
      <div className="container-wide footer-bottom">
        <span>© 2026 2D System. Relationships • Resources • Results.</span>
        <span>Continuous inkjet solutions from Surat, India</span>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <ProductSection />
        <Applications />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
