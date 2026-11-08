"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

const STORAGE_KEY = "grossman-a11y";

type Settings = {
  text: 0 | 1 | 2;
  contrast: boolean;
  links: boolean;
  readable: boolean;
  motion: boolean;
  gray: boolean;
  cursor: boolean;
};

const empty: Settings = {
  text: 0,
  contrast: false,
  links: false,
  readable: false,
  motion: false,
  gray: false,
  cursor: false,
};

const textLabels = ["רגיל", "בינוני", "גדול"];

function applySettings(settings: Settings) {
  const root = document.documentElement;
  root.classList.toggle("a11y-text-1", settings.text === 1);
  root.classList.toggle("a11y-text-2", settings.text === 2);
  root.classList.toggle("a11y-contrast", settings.contrast);
  root.classList.toggle("a11y-links", settings.links);
  root.classList.toggle("a11y-readable", settings.readable);
  root.classList.toggle("a11y-motion", settings.motion);
  root.classList.toggle("a11y-gray", settings.gray);
  root.classList.toggle("a11y-cursor", settings.cursor);
}

export function AccessibilityMenu() {
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(empty);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    try {
      const parsed = { ...empty, ...JSON.parse(saved) } as Settings;
      setSettings(parsed);
      applySettings(parsed);
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLElement>("button, a")?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function update(next: Settings) {
    setSettings(next);
    applySettings(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  function reset() {
    update(empty);
  }

  return (
    <div className="a11y-dock">
      {open ? (
        <div
          ref={panelRef}
          id={panelId}
          className="a11y-panel"
          role="dialog"
          aria-label="אפשרויות נגישות"
        >
          <p className="a11y-title">נגישות</p>
          <div className="a11y-size">
            <button type="button" onClick={() => update({ ...settings, text: settings.text > 0 ? ((settings.text - 1) as 0 | 1 | 2) : 0 })} disabled={settings.text === 0}>
              הקטנת טקסט
            </button>
            <span aria-live="polite">גודל: {textLabels[settings.text]}</span>
            <button type="button" onClick={() => update({ ...settings, text: settings.text < 2 ? ((settings.text + 1) as 0 | 1 | 2) : 2 })} disabled={settings.text === 2}>
              הגדלת טקסט
            </button>
          </div>
          <Toggle label="ניגודיות גבוהה" pressed={settings.contrast} onClick={() => update({ ...settings, contrast: !settings.contrast })} />
          <Toggle label="הדגשת קישורים" pressed={settings.links} onClick={() => update({ ...settings, links: !settings.links })} />
          <Toggle label="גופן קריא" pressed={settings.readable} onClick={() => update({ ...settings, readable: !settings.readable })} />
          <Toggle label="עצירת אנימציות" pressed={settings.motion} onClick={() => update({ ...settings, motion: !settings.motion })} />
          <Toggle label="גווני אפור" pressed={settings.gray} onClick={() => update({ ...settings, gray: !settings.gray })} />
          <Toggle label="סמן גדול" pressed={settings.cursor} onClick={() => update({ ...settings, cursor: !settings.cursor })} />
          <button type="button" className="a11y-reset" onClick={reset}>
            איפוס הגדרות
          </button>
          <Link href="/accessibility" onClick={() => setOpen(false)}>
            הצהרת נגישות
          </Link>
        </div>
      ) : null}
      <button
        ref={buttonRef}
        type="button"
        className="a11y-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "סגירת תפריט נגישות" : "פתיחת תפריט נגישות"}</span>
        <AccessibilityIcon />
      </button>
    </div>
  );
}

function Toggle({ label, pressed, onClick }: { label: string; pressed: boolean; onClick: () => void }) {
  return (
    <button type="button" aria-pressed={pressed} onClick={onClick}>
      {label}
    </button>
  );
}

function AccessibilityIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <circle cx="12" cy="4.5" r="1.8" />
      <path d="M5 8.5h14M12 8.5v4.5M12 13l-4 7M12 13l4 7" />
    </svg>
  );
}
