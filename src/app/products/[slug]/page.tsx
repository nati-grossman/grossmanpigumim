import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { ProductMedia } from "@/components/ProductMedia";
import { categoryById, getProduct, products, relatedProducts } from "@/lib/products";
import { site, siteUrl, waLink, waProductMessage } from "@/lib/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "ציוד" };
  return {
    title: `השכרה ומכירה של ${product.name}`,
    description: `${product.summary} להשכרה או לרכישה לפי צורכי הפרויקט. טלפון, WhatsApp או טופס.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = categoryById(product.category);
  const related = relatedProducts(product);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.lead,
    category: category.label,
    brand: { "@type": "Brand", name: site.name },
    image: product.image ? new URL(product.image, siteUrl).toString() : undefined,
  };

  return (
    <article className="product-page">
      <div className="container">
        <div className="product-top">
          <div className="product-gallery">
            <ProductMedia product={product} priority sizes="(max-width: 767px) 100vw, 55vw" />
          </div>
          <div className="product-copy">
            <Link className="back" href={`/products?category=${product.category}`}>
              חזרה ל{category.label}
            </Link>
            <p className="eyebrow on-light">{category.label}</p>
            <h1>{product.name}</h1>
            <p className="lede lede-dark">{product.lead}</p>
            <div className="btn-row product-actions">
              <Link className="btn btn-gold" href={`/contact?product=${product.slug}`}>
                לקבלת הצעת מחיר
              </Link>
              <a className="btn btn-line" href={waLink(waProductMessage(product.name))} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="product-body">
          <div className="prose">
            <h2>על הציוד</h2>
            <p>{product.about}</p>
            <h2>שימושים עיקריים</h2>
            <ul className="clean-list">
              {product.uses.map((use) => (
                <li key={use}>{use}</li>
              ))}
            </ul>
          </div>
          <aside className="side-note">
            <h2>כדי לבנות הצעה</h2>
            <ul className="clean-list">
              {product.questions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="product-repeat">
          <p>להשכרה או לרכישה לפי הפרויקט.</p>
          <div className="btn-row">
            <Link className="btn btn-gold" href={`/contact?product=${product.slug}`}>
              לקבלת הצעת מחיר
            </Link>
            <a className="btn btn-line" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
          </div>
        </div>

        {related.length > 0 ? (
          <section className="related">
            <h2>ציוד נוסף באותה קבוצה</h2>
            <div className="grid">
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  );
}
