import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import BrandsMarquee from "@/components/BrandsMarquee";
import RevealWrapper from "@/components/RevealWrapper";
import DiagnosticWidget from "@/components/DiagnosticWidget";
import { BUSINESS, REVIEWS, SFV_CITIES } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Gate & Garage Door Repair San Fernando Valley — Real Gate & Garage Door",
  description:
    "Expert gate repair and garage door repair in San Fernando Valley, CA. Same-day service, 24/7 emergency, free estimates. Gates are our #1 specialty. Call (818) 915-5715.",
  alternates: { canonical: "/" },
};

const gateServices = [
  { href: "/services/gate-repair", name: "Gate Repair", desc: "Fast, honest diagnosis. No upselling. Fixed the first time.", img: "/images/services/black-iron-gate.jpeg" },
  { href: "/services/automatic-gate-repair", name: "Automatic Gate Repair", desc: "Every make, every brand. Motor, controller, sensors.", img: "/images/services/gate-motor.jpeg" },
  { href: "/services/driveway-gate-repair", name: "Driveway Gate Repair", desc: "Sliding, swing, and ornamental. Same-day response.", img: "/images/services/swing-1.jpeg" },
  { href: "/services/electric-gate-repair", name: "Electric Gate Repair", desc: "Wiring, boards, remotes. We trace the fault and fix it.", img: "/images/services/iron-black-gate.jpeg" },
  { href: "/services/gate-opener-repair", name: "Gate Opener Repair", desc: "LiftMaster, Viking, DoorKing, All-O-Matic, and more.", img: "/images/services/outside-gate.jpeg" },
  { href: "/services/iron-gate-repair", name: "Iron Gate Repair", desc: "Structural, hinges, welds, finishes — fully restored.", img: "/images/services/grey-iron-gate.jpeg" },
];

const garageDoorServices = [
  { href: "/services/garage-door-repair", name: "Garage Door Repair", desc: "Complete repair for all door problems.", img: "/images/services/white-garage.jpeg" },
  { href: "/services/garage-door-spring-repair", name: "Spring Repair", desc: "Torsion & extension — same-day replacement.", img: "/images/services/walnut-garage.jpeg" },
  { href: "/services/garage-door-opener-repair", name: "Opener Repair", desc: "LiftMaster, Genie, Chamberlain & all brands.", img: "/images/services/new-garage.jpeg" },
  { href: "/services/emergency-garage-door-repair", name: "24/7 Emergency", desc: "We answer live, arrive in 1–2 hours.", img: "/images/services/swing-2.jpeg" },
];

const storyChecklist = [
  "Same-day response — because your time matters",
  "Family-owned and Valley-rooted",
  "We work on every brand and model",
  "Honest diagnosis — no upselling, ever",
  "All work backed by a written warranty",
  "Trusted by homeowners across 25+ cities in LA",
  "Real humans answer — no phone trees",
];

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Gate Repair & Garage Door Repair",
  provider: { "@type": "LocalBusiness", name: BUSINESS.name },
  areaServed: { "@type": "AdministrativeArea", name: "San Fernando Valley, CA" },
};

export default function HomePage() {
  const tipPosts = BLOG_POSTS.slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />

      {/* ── HERO ── */}
      <section
        className="relative flex flex-col justify-end overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        <Image
          src="/images/hero/hero-thin-gate.jpeg"
          alt="Gate and garage door repair San Fernando Valley CA"
          fill
          className="object-cover"
          priority
        />
        {/* Scrim — bottom-heavy so content is readable, top shows the photo */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(12,30,53,0.93) 0%, rgba(12,30,53,0.55) 45%, rgba(12,30,53,0.12) 75%, rgba(12,30,53,0.1) 100%)",
          }}
        />
        {/* Content — bottom left */}
        <div className="relative z-10 container-max pb-16 pt-32">
          <div className="max-w-2xl">
            <span
              className="eyebrow"
              style={{ color: "rgba(196,133,90,0.9)" }}
            >
              San Fernando Valley, CA
            </span>
            <h1 style={{ color: "var(--text-warm)", lineHeight: 1.0, marginBottom: "1.25rem" }}>
              Gate &amp; Garage Door Repair
              That Gets It Right —{" "}
              <em style={{ color: "#C9A84C", fontStyle: "italic" }}>The First Time.</em>
            </h1>
            <p
              className="mb-8"
              style={{ color: "rgba(237,234,228,0.8)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "560px" }}
            >
              Same-day service across the entire Valley. We fix gates and garage doors
              fast, honestly, and with a warranty.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a href={BUSINESS.phoneHref} className="btn-primary text-base">
                <Phone size={18} />
                Call {BUSINESS.phone}
              </a>
              <Link
                href="/contact"
                className="text-base font-semibold inline-flex items-center gap-2"
                style={{
                  background: "#C9A84C",
                  color: "#1a1200",
                  padding: "0.8rem 1.75rem",
                  borderRadius: "999px",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Get a Free Estimate →
              </Link>
            </div>
            {/* Stats row */}
            <div
              className="flex flex-wrap gap-x-8 gap-y-2 pt-6 text-sm"
              style={{
                borderTop: "1px solid rgba(237,234,228,0.2)",
                color: "rgba(237,234,228,0.7)",
              }}
            >
              <span>✦ Same-Day Service</span>
              <span>✦ 5-Star Rated</span>
              <span>✦ Gates Specialist</span>
              <span>✦ Free Estimates</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIAGNOSTIC WIDGET ── */}
      <DiagnosticWidget />

      {/* ── TRUST BAR ── */}
      <section style={{ background: "var(--bg-muted)", padding: "3rem 0" }}>
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { stat: "500+", label: "Gates & Doors Fixed" },
              { stat: "Same-Day", label: "Service Available" },
              { stat: `${BUSINESS.yearsInBusiness}+`, label: "Years Serving the Valley" },
              { stat: "Real Person", label: "Always Answers" },
            ].map(({ stat, label }) => (
              <div key={label}>
                <p
                  className="font-heading font-bold"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--navy)", lineHeight: 1.1 }}
                >
                  {stat}
                </p>
                <p
                  style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--stone)", marginTop: "0.3rem" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS STORY ── */}
      <RevealWrapper>
        <section className="section-padding" style={{ background: "var(--bg-base)" }}>
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              {/* Copy */}
              <div>
                <span className="eyebrow">Our Story</span>
                <h2 style={{ marginBottom: "1.5rem" }}>
                  Built on the Valley.{" "}
                  <em>Driven by Trust.</em>
                </h2>
                <div style={{ color: "var(--text-mid)", lineHeight: 1.85, fontSize: "1.05rem" }}>
                  <p style={{ marginBottom: "1.25rem" }}>
                    We didn&apos;t build Real Gate &amp; Garage Door on advertising. We built it on
                    the referrals of neighbors telling neighbors — because when something breaks at
                    your gate or garage door, you need someone you can actually trust to show up,
                    fix it right, and not disappear.
                  </p>
                  <p style={{ marginBottom: "1.25rem" }}>
                    Every call we answer, every repair we make — we treat it like it&apos;s our own
                    home. That&apos;s not a line. That&apos;s {BUSINESS.yearsInBusiness}+ years of five-star reviews.
                  </p>
                  <p>
                    The Valley is our community. These are our roads, our streets, our neighbors&apos;
                    homes. We&apos;re not just passing through.
                  </p>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 mt-6 font-semibold"
                  style={{ color: "var(--brown)" }}
                >
                  Our Story <ArrowRight size={16} />
                </Link>
              </div>
              {/* Checklist */}
              <div
                className="rounded-[var(--radius-lg)] p-8"
                style={{ background: "var(--bg-card)", border: "1px solid var(--line)" }}
              >
                <ul className="space-y-4">
                  {storyChecklist.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
                        size={20}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: "var(--brown-light)" }}
                      />
                      <span style={{ color: "var(--text-mid)", fontSize: "0.97rem" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── GATE SERVICES (60%) ── */}
      <RevealWrapper>
        <section className="section-padding section--muted">
          <div className="container-max">
            <div className="mb-12">
              <span className="eyebrow">What We Do</span>
              <h2 style={{ marginBottom: "0.5rem" }}>
                Precision Repairs.{" "}
                <em>Every Single Time.</em>
              </h2>
              <p style={{ color: "var(--stone)", maxWidth: 520, marginTop: "0.5rem" }}>
                Gates are our #1 specialty — all types, all brands, same-day across the Valley.
              </p>
            </div>

            {/* Gate section label */}
            <p
              className="font-heading font-semibold mb-5"
              style={{ fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--stone)" }}
            >
              Gate Services
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
              {gateServices.map((s, i) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group flex flex-col transition-all duration-200 overflow-hidden"
                  style={{
                    textDecoration: "none",
                    background: "var(--bg-card)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius-lg)",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                  }}
                  data-delay={String((i % 4) + 1)}
                >
                  <div style={{ aspectRatio: "16/9", position: "relative", overflow: "hidden" }}>
                    <Image
                      src={s.img}
                      alt={s.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4 flex flex-col gap-2 flex-1">
                    <h3
                      className="font-heading font-semibold"
                      style={{ fontSize: "1rem", color: "var(--navy)" }}
                    >
                      {s.name}
                    </h3>
                    <p style={{ color: "var(--text-soft)", fontSize: "0.88rem", flexGrow: 1 }}>{s.desc}</p>
                    <span
                      className="inline-flex items-center gap-1 font-semibold text-sm mt-1"
                      style={{ color: "var(--brown)" }}
                    >
                      Learn More <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mb-10">
              <Link href="/services/gate-installation" className="btn-secondary text-sm">
                + Gate Installation
              </Link>
            </div>

            {/* Garage Door section */}
            <p
              className="font-heading font-semibold mb-5"
              style={{ fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--stone)" }}
            >
              Garage Door Services
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
              {garageDoorServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group flex flex-col overflow-hidden transition-all duration-200"
                  style={{
                    textDecoration: "none",
                    background: "var(--bg-card)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius-lg)",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                  }}
                >
                  <div style={{ aspectRatio: "4/3", position: "relative", overflow: "hidden" }}>
                    <Image
                      src={s.img}
                      alt={s.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3
                      className="font-heading font-semibold"
                      style={{ fontSize: "0.88rem", color: "var(--navy)" }}
                    >
                      {s.name}
                    </h3>
                    <p style={{ color: "var(--text-soft)", fontSize: "0.78rem", marginTop: "0.2rem" }}>{s.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/services/garage-door-cable-repair", label: "Cable Repair" },
                { href: "/services/garage-door-panel-repair", label: "Panel Repair" },
                { href: "/services/commercial-garage-door", label: "Commercial Doors" },
                { href: "/services/garage-door-installation", label: "Door Installation" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="btn-secondary text-sm">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── BRAND MARQUEE ── */}
      <BrandsMarquee />

      {/* ── REVIEWS — dark section ── */}
      <section className="section-padding section--dark">
        <div className="container-max">
          <RevealWrapper>
            <div className="mb-12">
              <span className="eyebrow">Client Reviews</span>
              <h2 style={{ color: "#ffffff" }}>
                What Valley Homeowners{" "}
                <em style={{ color: "var(--brown-warm)" }}>Say About Us</em>
              </h2>
            </div>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {REVIEWS.slice(0, 3).map((r, i) => (
              <RevealWrapper key={r.name} delay={i + 1}>
                <div className="card-dark flex flex-col gap-4 h-full">
                  <div className="stars text-lg">★★★★★</div>
                  <blockquote
                    className="flex-1 leading-relaxed"
                    style={{ color: "rgba(237,234,228,0.8)", fontSize: "0.92rem" }}
                  >
                    &ldquo;{r.text}&rdquo;
                  </blockquote>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "var(--text-warm)" }}>
                      {r.name}
                    </p>
                    <p style={{ fontSize: "0.78rem", color: "rgba(237,234,228,0.45)", marginTop: "0.15rem" }}>
                      {r.city} · {r.service} · {r.date}
                    </p>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/reviews" className="btn-ghost">
              See All {BUSINESS.reviewCount}+ Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <RevealWrapper>
        <section className="section-padding" style={{ background: "var(--bg-muted)" }}>
          <div className="container-max text-center">
            <span className="eyebrow">Where We Work</span>
            <h2 style={{ marginBottom: "0.75rem" }}>
              The Entire Valley —{" "}
              <em>And Beyond.</em>
            </h2>
            <p style={{ color: "var(--stone)", maxWidth: 520, margin: "0 auto 2.5rem" }}>
              We serve San Fernando Valley and all cities within 20 miles — from Malibu to
              Pasadena, Beverly Hills to Simi Valley.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {SFV_CITIES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/areas/${c.slug}`}
                  className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--line)",
                    color: "var(--text-mid)",
                    textDecoration: "none",
                  }}
                >
                  {c.name}
                </Link>
              ))}
            </div>
            <Link href="/service-areas" className="inline-flex items-center gap-1 mt-6 text-sm font-semibold" style={{ color: "var(--brown)" }}>
              View all 29 service areas <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </RevealWrapper>

      {/* ── TIPS TEASER ── */}
      <RevealWrapper>
        <section className="section-padding" style={{ background: "var(--bg-base)" }}>
          <div className="container-max">
            <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
              <div>
                <span className="eyebrow">From Our Tips</span>
                <h2>
                  Real Answers for{" "}
                  <em>Valley Homeowners</em>
                </h2>
              </div>
              <Link href="/tips" className="btn-secondary text-sm">
                All Tips →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tipPosts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/tips/${post.slug}`}
                  className="card flex flex-col gap-3 transition-all duration-200 hover:shadow-md"
                  style={{ textDecoration: "none" }}
                  data-delay={String(i + 1)}
                >
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: "var(--brown-light)" }}
                  >
                    {post.category === "gate" ? "Gate Tips" : "Garage Door Tips"}
                  </span>
                  <h3
                    className="font-heading font-semibold leading-snug"
                    style={{ fontSize: "1rem", color: "var(--navy)" }}
                  >
                    {post.title}
                  </h3>
                  <p style={{ color: "var(--text-soft)", fontSize: "0.88rem", flexGrow: 1 }}>
                    {post.metaDescription.slice(0, 100)}…
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-sm font-semibold"
                    style={{ color: "var(--brown)" }}
                  >
                    Read <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── CONTACT FORM ── */}
      <section className="section-padding section--muted" id="contact">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <RevealWrapper>
              <span className="eyebrow">Free Estimates, No Pressure</span>
              <h2 style={{ marginBottom: "1.25rem" }}>
                Get Your Free Estimate <em>Today</em>
              </h2>
              <p style={{ color: "var(--text-soft)", marginBottom: "1.75rem" }}>
                Tell us what&apos;s going on and we&apos;ll call you back within 30 minutes during
                business hours.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Same-day appointments available",
                  "Upfront quote before any work starts",
                  "No pressure, no upselling",
                  "Licensed CA Contractor · Bonded · Insured",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3" style={{ color: "var(--text-mid)" }}>
                    <CheckCircle size={17} className="flex-shrink-0" style={{ color: "var(--success)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div
                className="rounded-[var(--radius-lg)] p-5"
                style={{ background: "var(--navy)" }}
              >
                <p className="font-semibold text-lg mb-1" style={{ color: "var(--text-warm)" }}>
                  Emergency? Call Now:
                </p>
                <a
                  href={BUSINESS.phoneHref}
                  className="text-2xl font-bold font-heading transition-colors"
                  style={{ color: "var(--brown-warm)" }}
                >
                  {BUSINESS.phone}
                </a>
                <p style={{ color: "rgba(237,234,228,0.6)", fontSize: "0.85rem", marginTop: "0.25rem" }}>
                  Live answer 24/7 for emergencies
                </p>
              </div>
            </RevealWrapper>
            <RevealWrapper delay={1}>
              <ContactForm />
            </RevealWrapper>
          </div>
        </div>
      </section>
    </>
  );
}
