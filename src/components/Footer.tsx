import Link from "next/link";
import { Logo } from "./Logo";
import { site, waGeneralMessage, waLink } from "@/lib/site";

const links = [
  { href: "/", label: "עמוד הבית" },
  { href: "/products", label: "הציוד שלנו" },
  { href: "/about", label: "אודות" },
  { href: "/contact", label: "צור קשר" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p className="footer-tag">{site.tagline}</p>
          <p>השכרה ומכירה של פיגומים, מערכות תמיכה וציוד נלווה.</p>
        </div>
        <nav aria-label="תחתית">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="footer-contact">
          <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
          <a href={waLink(waGeneralMessage)} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
      <div className="container footer-copy">© {site.name} {new Date().getFullYear()}</div>
    </footer>
  );
}
