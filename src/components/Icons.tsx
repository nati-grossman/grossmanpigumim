import type { ReactNode } from "react";
import type { IconName } from "@/lib/products";

export function Icon({ name }: { name: IconName }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="icon">
      {paths[name]}
    </svg>
  );
}

const paths: Record<IconName, ReactNode> = {
  frame: (
    <>
      <path d="M8 12h20M8 22h20M8 32h20" />
      <path d="M8 8v28M18 8v28M28 8v28" />
      <path d="M28 12l10-5M28 22l10-5M28 32l10-5" />
      <path d="M38 7v28" />
      <path d="M8 8l10-5h20" />
    </>
  ),
  mobile: (
    <>
      <path d="M16 8h16v26H16z" />
      <path d="M16 16h16M16 24h16" />
      <circle cx="20" cy="39" r="3" />
      <circle cx="28" cy="39" r="3" />
      <path d="M18 8V5h12v3" />
    </>
  ),
  suspended: (
    <>
      <path d="M10 6v36" />
      <path d="M10 28h22" />
      <path d="M10 28L24 12" />
      <path d="M24 12v16" />
      <path d="M10 34h22" />
    </>
  ),
  trestle: (
    <>
      <path d="M8 16h32" />
      <path d="M14 16L24 38" />
      <path d="M34 16L24 38" />
      <path d="M16 28h16" />
    </>
  ),
  tower: (
    <>
      <path d="M14 14h20v24H14z" />
      <path d="M14 22h20M14 30h20" />
      <path d="M14 14l10 8 10-8M14 38l10-8 10 8" />
      <path d="M10 40h28" />
    </>
  ),
  stairs: (
    <>
      <path d="M8 40V16h32" />
      <path d="M8 40h10V32h10V24h12" />
    </>
  ),
  beams: (
    <>
      <path d="M6 12h36v6H6zM6 21h36v6H6zM6 30h36v6H6z" />
    </>
  ),
  plank: <path d="M6 20h36v8H6z" />,
  board: <path d="M12 8h24v32H12z" />,
  sheet: (
    <>
      <path d="M12 8h24v32H12z" />
      <path d="M16 12h16v24H16z" />
    </>
  ),
  prop: (
    <>
      <path d="M16 8h16" />
      <path d="M24 8v30" />
      <path d="M20 20h8" />
      <path d="M12 38h24l-3 4H15z" />
    </>
  ),
};

export function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M8 3h3l1.5 4-2 1.5a12 12 0 0 0 5 5L17 12l4 1.5V17a2 2 0 0 1-2 2A15 15 0 0 1 5 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M12 3a8.5 8.5 0 0 0-7.4 12.6L3 21l5.6-1.5A8.5 8.5 0 1 0 12 3z" />
      <path d="M9 10.2c.2 1.6 1.8 3.2 3.4 3.6.4.1.8 0 1.1-.3l.6-.7c.2-.2 0-.4-.2-.6l-.8-.4c-.2-.1-.4 0-.5.2l-.3.4c-.8-.4-1.4-1-1.7-1.7l.4-.3c.2-.1.3-.3.2-.5l-.4-.8c-.1-.2-.4-.3-.6-.2l-.7.6c-.3.3-.4.7-.3 1.1z" />
    </svg>
  );
}
