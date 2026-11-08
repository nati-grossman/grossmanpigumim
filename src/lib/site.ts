export const site = {
  name: "גרוסמן פיגומים",
  tagline: "פתרונות פיגומים מתקדמים",
  slogan: "כל הפתרונות לפרויקט שלך, מהחפירה ועד לגמר",
  phoneDisplay: "052-954-6133",
  phoneTel: "0529546133",
  phoneE164: "+972529546133",
  waPath: "972529546133",
  description:
    "השכרה ומכירה של מערכות פיגומים, מערכות תמיכה וציוד נלווה לקבלנים ולחברות בנייה.",
};

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

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
  areaServed: "IL",
  url: siteUrl,
};
