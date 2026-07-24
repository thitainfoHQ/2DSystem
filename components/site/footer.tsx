import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { BrandMark } from "./brand-mark";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-wide footer-top">
        <BrandMark light />
        <div className="footer-tagline">
          Small character coding.
          <br />
          <strong>Big production confidence.</strong>
        </div>
        <Link className="footer-arrow" href="#top" aria-label="Back to top">
          <ArrowUpRight size={22} />
        </Link>
      </div>
      <nav className="container-wide footer-nav" aria-label="Footer navigation">
        <Link href="/solutions">Solutions</Link>
        <Link href="/products">Products</Link>
        <Link href="/applications">Applications</Link>
        <Link href="/process">How we work</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </nav>
      <div className="container-wide footer-bottom">
        <span>© 2026 2D System. Relationships • Resources • Results.</span>
        <span>Continuous inkjet solutions from Surat, India</span>
      </div>
    </footer>
  );
}
