import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { categories, productsInCategory, type CategoryId } from "@/lib/products";

export const metadata: Metadata = {
  title: "ציוד להשכרה ולמכירה",
  description:
    "פיגום זקיפים, פיגום נייד, מגדלי אקרו, רגלי בניין, דוקה וציוד נלווה. לכל פריט עמוד פרטים ופנייה להצעת מחיר.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = categories.find((item) => item.id === category);
  const groups = active ? [active] : categories;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">גרוסמן פיגומים</p>
          <h1>הציוד להשכרה ולמכירה</h1>
          <p className="lede">
            מערכות פיגומים, מערכות תמיכה ותבניות, וציוד נלווה לאתר. בחרו סוג ציוד וממשיכים להצעת מחיר.
          </p>
          <div className="filters">
            <Link href="/products" className={!active ? "is-active" : undefined}>
              הכל
            </Link>
            {categories.map((item) => (
              <Link
                key={item.id}
                href={`/products?category=${item.id}`}
                className={active?.id === item.id ? "is-active" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          {groups.map((group) => (
            <div className="cat-block" key={group.id}>
              <div className="cat-head">
                <h2>{group.label}</h2>
                <p>{group.text}</p>
              </div>
              <div className="grid">
                {productsInCategory(group.id as CategoryId).map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          ))}
          <div className="catalog-end">
            <p>לא בטוחים איזו מערכת מתאימה? ספרו לנו מה בונים.</p>
            <Link href="/contact">להצעת מחיר</Link>
          </div>
        </div>
      </section>
    </>
  );
}
