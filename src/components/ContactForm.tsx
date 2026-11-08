"use client";

import { FormEvent, useState, type ReactNode } from "react";
import { site, waLink } from "@/lib/site";

type Choice = { value: string; label: string };

const intents: Choice[] = [
  { value: "rent", label: "השכרה" },
  { value: "buy", label: "רכישה" },
  { value: "unsure", label: "עדיין לא בטוח" },
];

type Errors = Partial<Record<"name" | "phone" | "equipment" | "intent", string>>;

export function ContactForm({
  choices,
  initialProduct = "",
}: {
  choices: Choice[];
  initialProduct?: string;
}) {
  const preset = choices.some((choice) => choice.value === initialProduct) ? initialProduct : "";
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [equipment, setEquipment] = useState(preset);
  const [intent, setIntent] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<{ href: string } | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Errors = {};
    if (name.trim().length < 2) nextErrors.name = "נא להזין שם מלא.";
    const digits = phone.replace(/[^\d]/g, "");
    if (!/^0\d{8,9}$/.test(digits)) nextErrors.phone = "נא להזין מספר טלפון תקין.";
    if (!equipment) nextErrors.equipment = "נא לבחור סוג ציוד.";
    if (!intent) nextErrors.intent = "נא לבחור סוג פנייה.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (company.trim()) {
      setSent({ href: waLink("שלום, אשמח לקבל הצעת מחיר לציוד לבנייה.") });
      return;
    }

    const equipmentLabel = choices.find((choice) => choice.value === equipment)?.label ?? equipment;
    const intentLabel = intents.find((choice) => choice.value === intent)?.label ?? intent;
    const lines = [
      "שלום, אשמח לקבל הצעת מחיר.",
      `שם: ${name.trim()}`,
      `טלפון: ${digits}`,
      `סוג פנייה: ${intentLabel}`,
      `ציוד: ${equipmentLabel}`,
    ];
    if (message.trim()) lines.push(`הודעה: ${message.trim()}`);
    const href = waLink(lines.join("\n"));
    setSent({ href });

    const anchor = document.createElement("a");
    anchor.href = href;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.click();
  }

  if (sent) {
    return (
      <div className="form-success" role="status">
        <h2>ההודעה מוכנה ב-WhatsApp</h2>
        <p>אשרו את השליחה שם ונחזור אליכם בהקדם. אפשר גם להתקשר עכשיו.</p>
        <div className="btn-row">
          <a className="btn btn-gold" href={sent.href} target="_blank" rel="noopener noreferrer">
            פתיחת ההודעה
          </a>
          <a className="btn btn-line" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form className="quote-form" noValidate onSubmit={onSubmit}>
      <div className="hp" aria-hidden="true">
        <label>
          אתר
          <input tabIndex={-1} autoComplete="off" value={company} onChange={(event) => setCompany(event.target.value)} />
        </label>
      </div>
      <Field id="full-name" label="שם מלא" error={errors.name}>
        <input
          id="full-name"
          name="name"
          autoComplete="name"
          value={name}
          aria-invalid={Boolean(errors.name)}
          onChange={(event) => setName(event.target.value)}
        />
      </Field>
      <Field id="phone" label="טלפון" error={errors.phone}>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={phone}
          aria-invalid={Boolean(errors.phone)}
          onChange={(event) => setPhone(event.target.value)}
        />
      </Field>
      <Field id="equipment" label="סוג הציוד" error={errors.equipment}>
        <select
          id="equipment"
          name="equipment"
          value={equipment}
          aria-invalid={Boolean(errors.equipment)}
          onChange={(event) => setEquipment(event.target.value)}
        >
          <option value="">בחרו סוג ציוד</option>
          {choices.map((choice) => (
            <option key={choice.value} value={choice.value}>
              {choice.label}
            </option>
          ))}
        </select>
      </Field>
      <Field id="intent" label="סוג פנייה" error={errors.intent}>
        <select
          id="intent"
          name="intent"
          value={intent}
          aria-invalid={Boolean(errors.intent)}
          onChange={(event) => setIntent(event.target.value)}
        >
          <option value="">בחרו סוג פנייה</option>
          {intents.map((choice) => (
            <option key={choice.value} value={choice.value}>
              {choice.label}
            </option>
          ))}
        </select>
      </Field>
      <Field id="message" label="הודעה">
        <textarea
          id="message"
          name="message"
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="אתר, גובה, משך או כל פרט שחשוב להצעה"
        />
      </Field>
      <button className="btn btn-gold" type="submit">
        שליחת פנייה
      </button>
      <p className="form-note">הפנייה נפתחת כהודעת WhatsApp, עם שם הציוד וסוג הפנייה.</p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className={`field ${error ? "has-error" : ""}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error ? (
        <p className="field-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
