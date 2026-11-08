import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="גרוסמן פיגומים, עמוד הבית">
      <svg className="logo-mark" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M8 12h20M8 22h20M8 32h20" />
        <path d="M8 8v28M18 8v28M28 8v28" />
        <path d="M28 12l10-5M28 22l10-5M28 32l10-5" />
        <path d="M38 7v28" />
        <path d="M8 8l10-5h20" />
      </svg>
      <span className="logo-words">
        <span className="logo-gold">גרוסמן</span>
        <span className="logo-white">פיגומים</span>
      </span>
    </Link>
  );
}
