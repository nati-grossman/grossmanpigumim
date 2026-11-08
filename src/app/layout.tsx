import type { Metadata, Viewport } from "next";
import { Heebo } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactDock } from "@/components/ContactDock";
import { businessJsonLd, site, siteUrl } from "@/lib/site";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "השכרה ומכירה של פיגומים וציוד לבנייה | גרוסמן פיגומים",
    template: "%s | גרוסמן פיגומים",
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    locale: "he_IL",
    type: "website",
    siteName: site.name,
    images: ["/images/site-hero.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#101010",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="he" dir="rtl" className={heebo.className} data-scroll-behavior="smooth">
      <body>
        <a className="skip" href="#main">
          לתוכן
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ContactDock />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />
      </body>
    </html>
  );
}
