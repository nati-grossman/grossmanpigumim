import { PhoneIcon, WhatsAppIcon } from "./Icons";
import { site, waGeneralMessage, waLink } from "@/lib/site";

export function ContactDock() {
  const wa = waLink(waGeneralMessage);

  return (
    <>
      <a
        className="wa-float"
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="שליחת הודעת WhatsApp"
      >
        <WhatsAppIcon />
      </a>
      <div className="mobile-bar">
        <a href={`tel:${site.phoneTel}`}>
          <PhoneIcon />
          התקשרו
        </a>
        <a href={wa} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>
    </>
  );
}
