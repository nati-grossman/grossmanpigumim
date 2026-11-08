import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = ["/", "/products", "/about", "/contact", ...products.map((product) => `/products/${product.slug}`)];

  return paths.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    lastModified,
  }));
}
