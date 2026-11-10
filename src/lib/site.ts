export const site = {
  name: "גרוסמן פיגומים",
  tagline: "פתרונות פיגומים מתקדמים",
  slogan: "כל הפתרונות לפרויקט שלך, מהחפירה ועד לגמר",
  phoneDisplay: "052-954-6133",
  phoneTel: "0529546133",
  phoneE164: "+972529546133",
  waPath: "972529546133",
  area: "בית שמש, ירושלים ומטה יהודה",
  addressLocality: "בית שמש",
  hours: "8:00–18:00",
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
  address: {
    "@type": "PostalAddress",
    addressLocality: site.addressLocality,
    addressCountry: "IL",
  },
  areaServed: [
    { "@type": "City", name: "בית שמש" },
    { "@type": "City", name: "ירושלים" },
    { "@type": "AdministrativeArea", name: "מטה יהודה" },
  ],
  url: siteUrl,
};

export const generalFaqs = [
  {
    q: "אתם משכירים או מוכרים?",
    a: "גם וגם. פיגומים, מערכות תמיכה וציוד נלווה זמינים להשכרה ולרכישה. באתר אין מחירון ואין מלאי. ההצעה נבנית לפי הפרויקט.",
  },
  {
    q: "איך מקבלים הצעת מחיר?",
    a: "מתקשרים, שולחים WhatsApp, או ממלאים את הטופס. הטופס פותח הודעה מוכנה ב-WhatsApp, ואותה שולחים בעצמכם. כדאי לציין איזה ציוד צריך, איפה האתר, והאם מדובר בהשכרה או ברכישה.",
  },
  {
    q: "מה שעות המענה?",
    a: "שעות המענה הן 8:00–18:00, בטלפון וב-WhatsApp.",
  },
  {
    q: "איפה אתם עובדים?",
    a: "אזור העבודה הוא בית שמש, ירושלים ומטה יהודה. העסק עצמו בבית שמש. כתובת מדויקת תימסר כשצריך לתאם הגעה.",
  },
  {
    q: "יש הרכבה ופירוק?",
    a: "כן, מרכיבים ומפרקים פיגומים באתר. לגבי מגדלי אקרו, רגלי בניין ודוקה כדאי לציין בפנייה אם צריך רק את הציוד או גם עבודה באתר.",
  },
];
