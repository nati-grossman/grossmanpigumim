/**
 * Temporary photos are crops from the company advertisement.
 * Swap a file in /public or change `image` — pages read this list only.
 * Do not add sizes, loads, or standards until the owner confirms them.
 */

export type IconName =
  | "frame"
  | "mobile"
  | "suspended"
  | "trestle"
  | "tower"
  | "stairs"
  | "beams"
  | "plank"
  | "board"
  | "sheet"
  | "prop";

export type CategoryId = "scaffolding" | "support" | "accessories";

export type Product = {
  slug: string;
  name: string;
  category: CategoryId;
  summary: string;
  lead: string;
  about: string;
  uses: string[];
  questions: string[];
  icon: IconName;
  image?: string;
  imageAlt: string;
};

export const categories: { id: CategoryId; label: string; text: string }[] = [
  {
    id: "scaffolding",
    label: "מערכות פיגומים",
    text: "פיגומים לעבודה בגובה ולגישה באתר.",
  },
  {
    id: "support",
    label: "מערכות תמיכה ותבניות",
    text: "מגדלים, רגליים וציוד טפסנות ליציקות.",
  },
  {
    id: "accessories",
    label: "ציוד נלווה",
    text: "קרשים, לוחות וטגו לעבודת האתר.",
  },
];

const ask = ["סוג העבודה", "מיקום האתר", "השכרה או רכישה"];

export const products: Product[] = [
  {
    slug: "zekifim",
    name: "פיגום זקיפים",
    category: "scaffolding",
    summary: "מערכת פיגום לעבודה לאורך חזית ומעטפת.",
    lead: "מערכת פיגום על זקיפים, לעבודה בגובה על מעטפת המבנה.",
    about:
      "פיגום זקיפים משמש כשצריך משטח עבודה לאורך זמן על חזית הבניין. הציוד זמין להשכרה ולמכירה, וההצעה נבנית לפי הפרויקט.",
    uses: ["עבודה על חזית ומעטפת", "עבודות שלד וגמר בגובה", "שלב עבודה שבו הפיגום נשאר במקום"],
    questions: ["היקף החזית", ...ask],
    icon: "frame",
    image: "/images/products/zekifim.jpg",
    imageAlt: "פיגום זקיפים על חזית בניין",
  },
  {
    slug: "mobile",
    name: "פיגום נייד",
    category: "scaffolding",
    summary: "מגדל על גלגלים, לעבודה שמשנה מקום באתר.",
    lead: "מגדל עבודה על גלגלים, שאפשר להזיז בין נקודות באתר.",
    about:
      "פיגום נייד מתאים כשמיקום העבודה משתנה, בלי לפרק את המערכת בכל מעבר. אפשר לשכור או לרכוש.",
    uses: ["עבודות גמר ותחזוקה", "התקנות בתוך מבנה", "שיפוץ שבו נקודת העבודה זזה"],
    questions: ["איפה העבודה מתבצעת", "לאיזה גובה צריך להגיע", ...ask],
    icon: "mobile",
    image: "/images/products/mobile.jpg",
    imageAlt: "פיגום נייד על גלגלים עם משטחים צהובים",
  },
  {
    slug: "stair-tower",
    name: "מגדלי מדרגות",
    category: "scaffolding",
    summary: "מגדל גישה עם מדרגות בין מפלסים באתר.",
    lead: "מגדל מדרגות למעבר בין מפלסים באתר הבנייה.",
    about:
      "מגדל מדרגות נותן גישה מסודרת בין קומות ומפלסים באתר. ההצעה להשכרה או לרכישה נבנית לפי הפרויקט.",
    uses: ["מעבר בין קומות באתר", "גישה מסודרת לצוותים", "פרויקטים עם כמה מפלסי עבודה"],
    questions: ["כמה מפלסים צריך לחבר", ...ask],
    icon: "stairs",
    imageAlt: "מגדלי מדרגות",
  },
  {
    slug: "suspended",
    name: "פיגום תלוי (קונזוליים)",
    category: "scaffolding",
    summary: "פתרון לחזית כשלא מקימים פיגום מהקרקע.",
    lead: "פיגום לחזית, לעבודה שלא נשענת על הקמה מהקרקע.",
    about:
      "פיגום תלוי (קונזוליים) מיועד לחזית כשלא מקימים פיגום מהקרקע. אם הפרויקט דורש מערכת תלויה, מערכת קונזולית או שילוב, מציינים זאת בפנייה וההצעה נבנית בהתאם.",
    uses: ["עבודה על חזית", "אתרים שבהם אין העמדה מהקרקע"],
    questions: ["תיאור החזית", ...ask],
    icon: "suspended",
    imageAlt: "פיגום תלוי",
  },
  {
    slug: "kozalot",
    name: "פיגום קוזלות",
    category: "scaffolding",
    summary: "פיגום קוזלות להשכרה ולמכירה.",
    lead: "פיגום קוזלות, לפי צורכי העבודה באתר.",
    about:
      "פיגום קוזלות זמין להשכרה ולמכירה. כדי להתאים את ההצעה, מספרים לנו מה בונים ואיפה מתבצעת העבודה.",
    uses: ["עבודות באתר לפי אופי הפרויקט"],
    questions: ask,
    icon: "trestle",
    imageAlt: "פיגום קוזלות",
  },
  {
    slug: "acrow-tower",
    name: "מגדלי אקרו",
    category: "support",
    summary: "מגדל תמיכה ליציקות ולטפסנות.",
    lead: "מגדלי תמיכה ליציקות ולטפסנות באתר.",
    about:
      "מגדלי אקרו משמשים לתמיכה בזמן יציקת תקרות ואלמנטים מבטון. ההצעה נקבעת לפי הפרויקט, להשכרה או לרכישה. זהו פריט נפרד מרגלי בניין.",
    uses: ["תמיכה לטפסנות תקרה", "יציקות שדורשות מגדל תמיכה"],
    questions: ["סוג היציקה", ...ask],
    icon: "tower",
    imageAlt: "מגדלי אקרו",
  },
  {
    slug: "raglei-binyan",
    name: "רגלי בניין",
    category: "support",
    summary: "רגלי פלדה מתכווננות לתמיכת טפסנות ויציקות.",
    lead: "רגלי פלדה מתכווננות, בנפרד ממגדלי אקרו.",
    about:
      "רגלי בניין הן רגלי תמיכה בודדות לעבודות יציקה וטפסנות. אפשר לשכור או לרכוש לפי הכמות שהפרויקט דורש.",
    uses: ["תמיכה נקודתית לטפסנות", "יציקות שבהן נדרשות רגליים ולא מגדל שלם"],
    questions: ["כמות משוערת", ...ask],
    icon: "prop",
    image: "/images/products/raglei-binyan.jpg",
    imageAlt: "רגלי בניין מפלדה מגולוונת",
  },
  {
    slug: "doka",
    name: "דוקה",
    category: "support",
    summary: "ציוד טפסנות דוקה להשכרה ולמכירה.",
    lead: "ציוד טפסנות מסוג דוקה לעבודות יציקה באתר.",
    about:
      "ציוד טפסנות מסוג דוקה לעבודות יציקה באתר. ההצעה נבנית לפי סוג העבודה, להשכרה או לרכישה.",
    uses: ["תמיכת טפסנות לתקרות וליציקות", "עבודות בטון לפי שיטת העבודה באתר"],
    questions: ["סוג היציקה", "כמות משוערת", ...ask],
    icon: "beams",
    image: "/images/products/doka.jpg",
    imageAlt: "קורות טפסנות צהובות מסומנות H20",
  },
  {
    slug: "plank",
    name: "קרש",
    category: "accessories",
    summary: "קרש דריכה למערכת הפיגום.",
    lead: "קרש דריכה שמרכיבים על מערכת הפיגום.",
    about:
      "קרשים להשכרה ולמכירה כחלק מציוד הפיגום. הכמות נקבעת לפי המערכת והעבודה.",
    uses: ["משטח דריכה על פיגום"],
    questions: ["לאיזו מערכת הקרש נדרש", "כמות משוערת", ...ask],
    icon: "plank",
    imageAlt: "קרש לפיגום",
  },
  {
    slug: "board",
    name: "לוח",
    category: "accessories",
    summary: "לוח לעבודות באתר, להשכרה ולמכירה.",
    lead: "לוח לעבודות בנייה באתר.",
    about:
      "לוחות להשכרה ולמכירה לפי סוג העבודה. בפנייה כדאי לציין למה הלוח נדרש, כדי שנתאים את ההצעה.",
    uses: ["עבודות באתר לפי הצורך שיתואר בפנייה"],
    questions: ["לאיזו עבודה הלוח נדרש", "כמות משוערת", ...ask],
    icon: "board",
    imageAlt: "לוח לעבודות בנייה",
  },
  {
    slug: "tego",
    name: "טגו",
    category: "accessories",
    summary: "טגו לעבודות באתר, להשכרה ולמכירה.",
    lead: "טגו לפי צורכי העבודה באתר.",
    about:
      "טגו להשכרה ולמכירה כחלק מציוד האתר. ההצעה נקבעת לפי סוג העבודה והכמות.",
    uses: ["עבודות באתר שבהן נדרש טגו"],
    questions: ["לאיזו עבודה הטגו נדרש", "כמות משוערת", ...ask],
    icon: "sheet",
    imageAlt: "טגו",
  },
];

export function categoryById(id: CategoryId) {
  return categories.find((category) => category.id === id)!;
}

export function productsInCategory(id: CategoryId) {
  return products.filter((product) => product.category === id);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function relatedProducts(product: Product) {
  return productsInCategory(product.category)
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);
}

export const equipmentChoices = [
  ...products.map((product) => ({ value: product.slug, label: product.name })),
  { value: "multiple", label: "כמה סוגים" },
  { value: "unsure", label: "עדיין לא בטוח" },
];
