import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ExternalLink } from "lucide-react";
import { BUSINESS, REVIEWS, ORG_ID } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials | Real Gate & Garage Door",
  description: "See what homeowners say about Real Gate & Garage Door. Real customer testimonials from gate and garage door repair jobs across Los Angeles.",
  alternates: { canonical: "/reviews" },
};

// Same @id as the LocalBusiness in app/layout.tsx — this attaches data to that same
// entity node rather than declaring a second, separate business.
// aggregateRating intentionally omitted: Google's structured data policy excludes
// self-serving reviews (reviews a business collects and displays about itself) from
// review rich results, even when genuine. Restore it here, with real numbers, once
// the Google Business Profile has accumulated reviews of its own.
const reviewsPageSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": ORG_ID,
};

export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsPageSchema) }} />

      {/* Hero */}
      <section className="py-20 section--dark">
        <div className="container-max max-w-2xl">
          <span className="eyebrow">What Our Customers Say</span>
          <h1 style={{ color: "#ffffff", marginBottom: "0.75rem" }}>
            Customer Reviews &amp; <em>Testimonials</em>
          </h1>
          <div className="flex items-center gap-4 mt-4">
            <div style={{ fontSize: "2rem", color: "#C9A84C", letterSpacing: "0.05em" }}>★★★★★</div>
            <div>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "1.15rem" }}>
                Real Customer Testimonials
              </p>
              <p style={{ color: "rgba(237,234,228,0.65)", fontSize: "0.85rem" }}>
                5.0 average rating
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--bg-base)" }}>
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 rounded-[var(--radius-lg)] p-6"
                style={{ background: "var(--bg-card)", border: "1px solid var(--line)" }}
              >
                <div style={{ fontSize: "1.25rem", color: "#C9A84C", letterSpacing: "0.05em" }}>★★★★★</div>
                <blockquote
                  className="flex-1 leading-relaxed"
                  style={{ color: "var(--text-mid)", fontSize: "0.88rem" }}
                >
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <div style={{ borderTop: "1px solid var(--line)", paddingTop: "0.75rem" }}>
                  <p className="font-semibold" style={{ color: "var(--text-dark)" }}>{r.name}</p>
                  <p style={{ color: "var(--stone)", fontSize: "0.78rem" }}>
                    {r.city} &middot; {r.service} &middot; {r.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <h2 style={{ marginBottom: "1rem" }}>Had a Good Experience With Us?</h2>
            <p style={{ color: "var(--text-soft)", maxWidth: 480, margin: "0 auto 1.5rem" }}>
              We&apos;re building out our Google Business Profile and would love your feedback there.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={BUSINESS.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2"
              >
                <ExternalLink size={16} /> Leave Us a Review
              </a>
              <a href={BUSINESS.phoneHref} className="btn-primary">
                <Phone size={16} /> Call {BUSINESS.phone}
              </a>
              <Link href="/contact" className="btn-secondary">Get a Free Estimate</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
