import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "הצהרת נגישות",
  description: "הצהרת הנגישות של אתר גרוסמן פיגומים, לפי תקן ישראלי 5568.",
};

export default function AccessibilityPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">גרוסמן פיגומים</p>
          <h1>הצהרת נגישות</h1>
          <p className="lede">האתר נבנה במטרה לאפשר שימוש נוח גם באמצעות מקלדת, קורא מסך והתאמות תצוגה.</p>
        </div>
      </section>
      <section className="section">
        <div className="container prose">
          <p>
            אתר גרוסמן פיגומים שואף לעמוד בדרישות תקן ישראלי 5568, המבוסס על הנחיות WCAG 2.0 ברמת AA.
            ההצהרה עודכנה ב-8 בנובמבר 2026.
          </p>
          <h2>מה קיים באתר</h2>
          <ul className="clean-list">
            <li>מבנה כותרות, טפסים עם תוויות, וקישור לדילוג אל התוכן.</li>
            <li>אפשרות הפעלה במקלדת, כולל סימון ברור של הרכיב שנמצא בפוקוס.</li>
            <li>טקסט חלופי לתמונות ציוד, ושפה עברית עם כיוון מימין לשמאל.</li>
            <li>תפריט נגישות: גודל טקסט, ניגודיות, הדגשת קישורים, גופן קריא, עצירת אנימציות, גווני אפור וסמן גדול.</li>
            <li>האתר מתחשב גם בהגדרת המכשיר להפחתת תנועה.</li>
          </ul>
          <h2>פנייה בנושא נגישות</h2>
          <p>
            אם נתקלתם בקושי בגלישה, אפשר לפנות בטלפון{" "}
            <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>. נטפל בפנייה ונתקן מה שאפשר באתר.
          </p>
          <p>
            שם רכז הנגישות יפורסם כאן ברגע שבעל העסק ימסור אותו. עד אז הפניות מתקבלות במספר הטלפון של העסק.
          </p>
        </div>
      </section>
    </>
  );
}
