"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { PhoneIcon } from "./Icons";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "עמוד הבית" },
  { href: "/products", label: "הציוד שלנו" },
  { href: "/about", label: "אודות" },
  { href: "/contact", label: "צור קשר" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  function closeMenu() {
    setOpen(false);
    toggleRef.current?.focus();
  }
  const lightTop = /^\/products\/.+/.test(pathname);
  const solid = scrolled || open || lightTop;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-header ${solid ? "is-solid" : ""}`}>
      <div className="container header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="ראשי">
          {links.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined}>
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="header-tools">
          <a className="header-phone" href={`tel:${site.phoneTel}`} aria-label={`${site.phoneDisplay}, חיוג`}>
            <PhoneIcon />
            <span>{site.phoneDisplay}</span>
          </a>
          <Link className="btn btn-gold header-cta" href="/contact">
            הצעת מחיר
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className={`menu-toggle ${open ? "is-open" : ""}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "סגירת תפריט" : "פתיחת תפריט"}</span>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <nav id="mobile-nav" className={`nav-panel ${open ? "is-open" : ""}`} aria-label="מובייל" aria-hidden={!open} inert={!open}>
        <div className="nav-top">
          <p className="nav-kicker">{site.tagline}</p>
          <button type="button" className="nav-close" onClick={closeMenu}>
            <span className="sr-only">סגירת תפריט</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <div className="nav-links">
          {links.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            );
          })}
        </div>
        <Link className="btn btn-gold" href="/contact" onClick={() => setOpen(false)}>
          הצעת מחיר
        </Link>
        <a className="nav-phone" href={`tel:${site.phoneTel}`}>
          <PhoneIcon />
          {site.phoneDisplay}
        </a>
      </nav>
    </header>
  );
}
