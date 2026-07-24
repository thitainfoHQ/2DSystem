import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  CircleDot,
  ShieldCheck,
} from "lucide-react";

import { machineImage } from "@/components/site/images";

export default function Home() {
  return (
    <section className="hero">
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
            <Link className="button button-primary" href="/contact">
              Find your printer <ArrowUpRight size={18} />
            </Link>
            <Link className="text-link text-link-light" href="/applications">
              See applications <ChevronRight size={18} />
            </Link>
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
