import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us — Real Gate & Garage Door | San Fernando Valley",
  description:
    `The story behind Real Gate & Garage Door — San Fernando Valley's trusted gate and garage door repair specialists. Family-owned, ${BUSINESS.yearsInBusiness}+ years, honest pricing.`,
  alternates: { canonical: "/about" },
};

const values = [
  { num: "01", title: "Repair First, Always", desc: "We default to repair over replacement. If repair is the right call, that's what we recommend — even if a new unit would mean more revenue for us." },
  { num: "02", title: "Upfront Pricing", desc: "You see the price before we start. The quote you approve is the price you pay. No surprises at the invoice stage." },
  { num: "03", title: "Same-Day Response", desc: "We know a broken gate or garage door disrupts your day. We staff our trucks to reach most calls the same day." },
  { num: "04", title: "Valley-Rooted", desc: "We serve the communities we live in. The Valley is our home — we treat every call like a neighbor asking for help." },
];

const credentials = [
  "CA Licensed Contractor",
  "Fully Bonded",
  "General Liability Insurance",
  "Workers Compensation",
  "BBB Accredited",
  "Google 5-Star Rated",
  "CSLB Verified",
  "Background-Checked Technicians",
];

const storyChecklist = [
  "Same-day response — because your time matters",
  "Family-owned and Valley-rooted since day one",
  "We work on every brand and model — no exceptions",
  "Honest diagnosis — no upselling, ever",
  "All work backed by a written warranty",
  "Trusted by homeowners across 25+ cities in LA",
  "Real humans answer — no phone trees, no hold music",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 section--dark">
        <div className="container-max max-w-2xl">
          <span className="eyebrow">Who We Are</span>
          <h1 style={{ color: "var(--text-warm)", marginBottom: "1rem" }}>
            About Real Gate &amp; <em>Garage Door</em>
          </h1>
          <p style={{ color: "rgba(237,234,228,0.75)", fontSize: "1.05rem" }}>
            San Fernando Valley&apos;s local gate and garage door specialists —{" "}
            {BUSINESS.yearsInBusiness}+ years of honest, reliable service.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding" style={{ background: "var(--bg-base)" }}>
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
            <div>
              <span className="eyebrow">Our Story</span>
              <h2 style={{ marginBottom: "1.5rem" }}>
                Built on the Valley.{" "}
                <em>Driven by Trust.</em>
              </h2>
              <div style={{ color: "var(--text-mid)", lineHeight: 1.85, fontSize: "1.02rem" }}>
                <p style={{ marginBottom: "1.25rem" }}>
                  We didn&apos;t build Real Gate &amp; Garage Door on advertising. We built it on
                  the referrals of neighbors telling neighbors — because when something breaks
                  at your gate or garage door, you need someone you can actually trust to show
                  up, fix it right, and not disappear.
                </p>
                <p style={{ marginBottom: "1.25rem" }}>
                  We started with garage doors — but as customers trusted us more, they started
                  asking about their gates. Gate repair is where we differentiate: most competitors
                  lead with doors. We lead with gates, because that&apos;s where our customers need
                  the most expert help.
                </p>
                <p style={{ marginBottom: "1.25rem" }}>
                  Every call we answer, every repair we make — we treat it like it&apos;s our own
                  home. That&apos;s not a line. That&apos;s {BUSINESS.yearsInBusiness}+ years of five-star reviews.
                </p>
                <p>
                  The Valley is our community. These are our roads, our streets, our
                  neighbors&apos; homes. We&apos;re not just passing through.
                </p>
              </div>
            </div>

            {/* Checklist card */}
            <div
              className="rounded-[var(--radius-lg)] p-8"
              style={{ background: "var(--bg-card)", border: "1px solid var(--line)" }}
            >
              <p
                className="font-heading font-bold mb-6"
                style={{ fontSize: "1.05rem", color: "var(--navy)" }}
              >
                What sets us apart
              </p>
              <ul className="space-y-4">
                {storyChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: "var(--brown-light)" }}
                    />
                    <span style={{ color: "var(--text-mid)", fontSize: "0.95rem" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Photo */}
          <div
            className="rounded-[var(--radius-lg)] overflow-hidden mb-20"
            style={{ aspectRatio: "16/6", position: "relative" }}
          >
            <Image
              src="/images/story/building.jpeg"
              alt="Real Gate and Garage Door team serving San Fernando Valley"
              fill
              className="object-cover"
            />
          </div>

          {/* Values */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <span className="eyebrow">Our Values</span>
              <h2>What We Stand For</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="card" style={{ borderTop: "3px solid var(--brown)" }}>
                  <p
                    className="font-heading font-bold mb-3"
                    style={{ fontSize: "2rem", color: "var(--brown-warm)", lineHeight: 1, letterSpacing: "-0.04em" }}
                  >
                    {v.num}
                  </p>
                  <h3
                    className="font-heading font-semibold mb-2"
                    style={{ fontSize: "1.05rem", color: "var(--navy)" }}
                  >
                    {v.title}
                  </h3>
                  <p style={{ color: "var(--text-soft)", fontSize: "0.92rem", lineHeight: 1.7 }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Credentials */}
          <div
            className="rounded-[var(--radius-lg)] p-8 mb-12"
            style={{ background: "var(--bg-muted)", border: "1px solid var(--line)" }}
          >
            <h2 className="text-center mb-8" style={{ fontSize: "1.6rem" }}>
              Our Credentials
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {credentials.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={16} className="flex-shrink-0" style={{ color: "var(--success)" }} />
                  <span style={{ fontSize: "0.875rem", color: "var(--text-mid)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 style={{ marginBottom: "0.75rem" }}>Ready to Work Together?</h2>
            <p style={{ color: "var(--text-soft)", marginBottom: "1.75rem" }}>
              Same-day appointments available throughout the San Fernando Valley and greater Los Angeles.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={BUSINESS.phoneHref} className="btn-primary">
                <Phone size={16} /> Call {BUSINESS.phone}
              </a>
              <Link href="/contact" className="btn-secondary">
                Get a Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
