import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { categories, productsInCategory } from "@/lib/products";
import { site, waGeneralMessage, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "השכרה ומכירה של פיגומים וציוד לבנייה | גרוסמן פיגומים",
  },
  description:
    "השכרה ומכירה של מערכות פיגומים, מגדלי תמיכה וציוד נלווה לקבלנים ולחברות בנייה. להתקשרות ולהצעת מחיר.",
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <Image src="/images/site-hero.jpg" alt="" fill priority sizes="100vw" />
        </div>
        <div className="hero-scrim" />
        <div className="container hero-content">
          <p className="eyebrow">{site.tagline}</p>
          <h1>השכרה ומכירה של פיגומים וציוד לבנייה</h1>
          <p className="lede">{site.slogan}.</p>
          <div className="btn-row">
            <Link className="btn btn-gold" href="/products">
              לצפייה בציוד
            </Link>
            <Link className="btn btn-ghost" href="/contact">
              הצעת מחיר
            </Link>
          </div>
        </div>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <h2 id="trust-title" className="sr-only">
          למה לפנות לגרוסמן פיגומים
        </h2>
        <article>
          <VarietyIcon />
          <h3>מגוון לאתר אחד</h3>
          <p>פיגומים, תמיכות וציוד נלווה להשכרה ולמכירה.</p>
        </article>
        <article>
          <SiteIcon />
          <h3>ציוד של אנשי שטח</h3>
          <p>מערכות שמוכרות מקבלני שלד ועד שיפוצים.</p>
        </article>
        <article>
          <FitIcon />
          <h3>התאמה לפרויקט</h3>
          <p>ההצעה נבנית לפי סוג העבודה, לא לפי מחירון קבוע.</p>
        </article>
        <article>
          <DirectIcon />
          <h3>מענה ישיר</h3>
          <p>טלפון או WhatsApp. בלי הזמנה אונליין.</p>
        </article>
      </section>

      <section className="section rise">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">כל מה שהפרויקט צריך, במקום אחד</h2>
            <p>אחד עשר פריטים להשכרה ולמכירה. בוחרים ציוד וממשיכים לפירוט ולהצעת מחיר.</p>
          </div>
          {categories.map((category) => (
            <div className="cat-block" key={category.id}>
              <div className="cat-head">
                <h3>{category.label}</h3>
                <p>{category.text}</p>
              </div>
              <div className="grid">
                {productsInCategory(category.id).map((product) => (
                  <ProductCard key={product.slug} product={product} heading="h4" />
                ))}
              </div>
            </div>
          ))}
          <div className="catalog-end">
            <p>רוצים לראות את כל הציוד עם סינון לפי קבוצה?</p>
            <Link href="/products">לכל הציוד</Link>
          </div>
        </div>
      </section>

      <section className="section process rise">
        <div className="container">
          <h2 className="section-title">איך מתקדמים להצעה</h2>
          <div className="steps">
            <article>
              <span>01</span>
              <h3>פונים</h3>
              <p>שיחה, WhatsApp או טופס.</p>
            </article>
            <article>
              <span>02</span>
              <h3>מספרים על העבודה</h3>
              <p>סוג הציוד, אופי הפרויקט, ומה שחשוב להצעה.</p>
            </article>
            <article>
              <span>03</span>
              <h3>מקבלים הצעה</h3>
              <p>להשכרה או לרכישה, לפי הצורך.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-media">
          <Image src="/images/site-hero.jpg" alt="" fill sizes="100vw" />
        </div>
        <div className="cta-scrim" />
        <div className="container">
          <h2>מתכננים פרויקט בנייה?</h2>
          <p>צריכים פיגומים או ציוד להשכרה ולמכירה? נעזור למצוא את מה שמתאים לעבודה.</p>
          <div className="btn-row">
            <a className="btn btn-gold" href={`tel:${site.phoneTel}`}>
              התקשרו אלינו
            </a>
            <a className="btn btn-ghost" href={waLink(waGeneralMessage)} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function VarietyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
    </svg>
  );
}

function SiteIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M4 20h16M6 20V9l6-4 6 4v11M10 20v-5h4v5" />
    </svg>
  );
}

function FitIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M4 7h16M4 17h16M8 7v10M16 7v10" />
    </svg>
  );
}

function DirectIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M8 3h3l1.5 4-2 1.5a12 12 0 0 0 5 5L17 12l4 1.5V17a2 2 0 0 1-2 2A15 15 0 0 1 5 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}
