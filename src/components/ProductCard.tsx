import Link from "next/link";
import { categoryById, type Product } from "@/lib/products";
import { ProductMedia } from "./ProductMedia";

export function ProductCard({
  product,
  heading = "h3",
}: {
  product: Product;
  heading?: "h3" | "h4";
}) {
  const Title = heading;
  const category = categoryById(product.category);

  return (
    <Link href={`/products/${product.slug}`} className="card">
      <div className="card-media">
        <ProductMedia product={product} decorative />
      </div>
      <div className="card-body">
        <p className="card-cat">{category.label}</p>
        <Title className="card-title">{product.name}</Title>
        <p className="card-summary">{product.summary}</p>
        <span className="more">לפרטים</span>
      </div>
    </Link>
  );
}
