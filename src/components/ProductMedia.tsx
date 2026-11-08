import Image from "next/image";
import type { Product } from "@/lib/products";
import { Icon } from "./Icons";

export function ProductMedia({
  product,
  priority = false,
  decorative = false,
  sizes = "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw",
}: {
  product: Product;
  priority?: boolean;
  decorative?: boolean;
  sizes?: string;
}) {
  if (product.image) {
    return (
      <Image
        src={product.image}
        alt={decorative ? "" : product.imageAlt}
        fill
        priority={priority}
        sizes={sizes}
        className="media-img"
      />
    );
  }

  return (
    <div className="plate" role={decorative ? undefined : "img"} aria-label={decorative ? undefined : product.imageAlt} aria-hidden={decorative || undefined}>
      <span className="plate-tick plate-tl" />
      <span className="plate-tick plate-tr" />
      <span className="plate-tick plate-bl" />
      <span className="plate-tick plate-br" />
      <Icon name={product.icon} />
    </div>
  );
}
