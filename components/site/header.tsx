"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, MapPin, Menu, X } from "lucide-react";

import { BrandMark } from "./brand-mark";

const navLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/process", label: "How we work" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMenuOpen(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="site-header">
      <div className="topline">
        <span>Continuous inkjet coding & marking</span>
        <span className="topline-location">
          <MapPin size={13} /> Surat, India
        </span>
      </div>
      <div className="nav-shell container-wide">
        <Link href="/" aria-label="2D System home">
          <BrandMark />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="nav-cta" href="/contact">
          Talk to an expert <ArrowUpRight size={17} />
        </Link>
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
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu}>
              {link.label} <ArrowUpRight size={17} />
            </Link>
          ))}
          <Link className="mobile-nav-cta" href="/contact" onClick={closeMenu}>
            Talk to an expert <ArrowUpRight size={17} />
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
