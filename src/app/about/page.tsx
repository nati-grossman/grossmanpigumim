import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/products";
import { site, waGeneralMessage, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "אודות",
  description:
    "גרוסמן פיגומים משכירה ומוכרת פיגומים, מערכות תמיכה וציוד נלווה, ומרכיבה ומפרקת פיגומים בבית שמש, בירושלים ובמטה יהודה.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{site.tagline}</p>
          <h1>נעים להכיר, גרוסמן פיגומים</h1>
          <p className="lede">
            משכירים ומוכרים ציוד לענף הבנייה. ההצעה נבנית לפי הפרויקט, אחרי שיחה קצרה על סוג העבודה.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container about-layout">
          <figure className="about-figure">
            <Image
              src="/images/site-hero.jpg"
              alt="אתר בנייה עם פיגומים, קורות טפסנות ורגלי תמיכה"
              fill
              sizes="(max-width: 1023px) 100vw, 45vw"
            />
          </figure>
          <div className="about-block prose">
            <p>
              גרוסמן פיגומים משכירה ומוכרת ציוד לענף הבנייה: מערכות פיגומים, מערכות תמיכה ותבניות, וציוד נלווה.
              אין כאן מחירון ומלאי אונליין. אומרים מה צריך, ומקבלים הצעה.
            </p>
            <p>
              העבודה בבית שמש, בירושלים ובמטה יהודה. מעבר להשכרה ולמכירה של הציוד, מרכיבים ומפרקים פיגומים באתר.
              שעות המענה {site.hours}. העסק ב{site.addressLocality}, וכתובת מדויקת תימסר כשצריך.
            </p>
            <h2>במה אנחנו עוסקים</h2>
            <div className="about-links">
              {categories.map((category) => (
                <Link key={category.id} href={`/products?category=${category.id}`}>
                  <strong>{category.label}</strong>
                  <span>{category.text}</span>
                </Link>
              ))}
            </div>
            <h2>עם מי עובדים</h2>
            <p>
              קבלני בנייה, חברות בנייה ותשתיות, קבלני שלד, מנהלי פרויקטים וקבלני שיפוצים. גם מי שצריך ציוד נקודתי מוזמן לפנות.
            </p>
            <h2>איך מתקדמים</h2>
            <ul className="clean-list">
              <li>פונים בטלפון, ב-WhatsApp או בטופס.</li>
              <li>מספרים איזה ציוד צריך, והאם מדובר בהשכרה או ברכישה.</li>
              <li>מקבלים הצעה לפי הפרויקט.</li>
            </ul>
            <div className="btn-row" style={{ marginTop: 24 }}>
              <a className="btn btn-gold" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
              <a className="btn btn-line" href={waLink(waGeneralMessage)} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
