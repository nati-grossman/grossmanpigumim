import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { equipmentChoices, getProduct } from "@/lib/products";
import { site, waGeneralMessage, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "הצעת מחיר להשכרה ולרכישה",
  description: "התקשרות, WhatsApp או השארת פרטים לקבלת הצעת מחיר להשכרה או לרכישה של ציוד.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product: productSlug } = await searchParams;
  const product = productSlug ? getProduct(productSlug) : undefined;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">גרוסמן פיגומים</p>
          <h1>לקבלת הצעת מחיר</h1>
          <p className="lede">
            {product
              ? `פנייה לגבי ${product.name}. התקשרו, שלחו WhatsApp, או השאירו פרטים.`
              : "התקשרו, שלחו WhatsApp, או השאירו פרטים. כדאי לציין איזה ציוד הפרויקט דורש."}
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow on-light">מדברים ישירות</p>
            <a className="contact-phone" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
            <div className="btn-row">
              <a className="btn btn-gold" href={`tel:${site.phoneTel}`}>
                חיוג
              </a>
              <a className="btn btn-line" href={waLink(product ? `שלום, אני מתעניין ב${product.name} ואשמח לקבל הצעת מחיר.` : waGeneralMessage)} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
            <p className="contact-area">{site.area}</p>
          </div>
          <ContactForm choices={equipmentChoices} initialProduct={product?.slug ?? ""} />
        </div>
      </section>
    </>
  );
}
