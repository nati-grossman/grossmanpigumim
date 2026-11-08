import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <p className="eyebrow on-light">גרוסמן פיגומים</p>
        <h1>העמוד לא נמצא</h1>
        <p>אפשר לחזור לציוד או לשלוח פנייה להצעת מחיר.</p>
        <div className="btn-row">
          <Link className="btn btn-gold" href="/products">
            לציוד
          </Link>
          <Link className="btn btn-line" href="/contact">
            הצעת מחיר
          </Link>
        </div>
      </div>
    </section>
  );
}
