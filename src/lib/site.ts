export const site = {
  name: "גרוסמן פיגומים",
  tagline: "פתרונות פיגומים מתקדמים",
  slogan: "כל הפתרונות לפרויקט שלך, מהחפירה ועד לגמר",
  phoneDisplay: "052-954-6133",
  phoneTel: "0529546133",
  phoneE164: "+972529546133",
  waPath: "972529546133",
  area: "בית שמש, ירושלים ומטה יהודה",
  description:
    "השכרה ומכירה של מערכות פיגומים, מערכות תמיכה וציוד נלווה לקבלנים ולחברות בנייה. הרכבה ופירוק פיגומים בבית שמש, בירושלים ובמטה יהודה.",
};

function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();

export function waLink(message: string) {
  return `https://wa.me/${site.waPath}?text=${encodeURIComponent(message)}`;
}

export const waGeneralMessage = "שלום, אשמח לקבל הצעת מחיר לציוד לבנייה.";

export function waProductMessage(name: string) {
  return `שלום, אני מתעניין ב${name} ואשמח לקבל הצעת מחיר.`;
}

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  slogan: site.slogan,
  description: site.description,
  telephone: site.phoneE164,
  areaServed: [
    { "@type": "City", name: "בית שמש" },
    { "@type": "City", name: "ירושלים" },
    { "@type": "AdministrativeArea", name: "מטה יהודה" },
  ],
  url: siteUrl,
};
