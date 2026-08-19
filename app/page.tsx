import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageSquareText, CheckCircle, ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import BrandsMarquee from "@/components/BrandsMarquee";
import RevealWrapper from "@/components/RevealWrapper";
import DiagnosticWidget from "@/components/DiagnosticWidget";
import ServiceGridReveal from "@/components/ServiceGridReveal";
import ArchImage from "@/components/ArchImage";
import IronDivider from "@/components/IronDivider";
import ReviewQuote from "@/components/ReviewQuote";
import SectionRule from "@/components/SectionRule";
import { BUSINESS, REVIEWS, SFV_CITIES, ORG_ID } from "@/lib/constants";
import { CITIES } from "@/lib/cities-data";
import { BLOG_POSTS } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Gate & Garage Door Repair — Real Gate & Garage Door",
  description:
    "Expert gate repair and garage door repair in Los Angeles, CA. Same-day service, 24/7 emergency, free estimates. Gates are our #1 specialty. Call (818) 915-5715.",
  alternates: { canonical: "/" },
};

const gatePrimary = [
  { href: "/services/gate-repair", name: "Gate Repair", desc: "Fast, honest diagnosis. No upselling. Fixed the first time.", img: "/images/gallery/gate-1.webp" },
  { href: "/services/gate-installation", name: "New Installation", desc: "New gate systems, fully installed and programmed.", img: "/images/brands/all-o-matic/all-o-matic-2.webp" },
  { href: "/services/emergency-gate-repair", name: "Emergency Gate Repair", desc: "Stuck open or shut? We're there in 1–2 hours.", img: "/images/services/swing-motor.webp" },
  { href: "/services/gate-opener-repair", name: "Gate Opener Repair", desc: "LiftMaster, Viking, DoorKing, All-O-Matic, and more.", img: "/images/gallery/outside-1.webp" },
];

const gateRest = [
  { href: "/services/automatic-gate-repair", name: "Automatic Gate Repair", desc: "Every make, every brand. Motor, controller, sensors.", img: "/images/services/gate-motor.webp" },
  { href: "/services/driveway-gate-repair", name: "Driveway Gate Repair", desc: "Sliding, swing, and ornamental. Same-day response.", img: "/images/gallery/gate-5.webp" },
  { href: "/services/electric-gate-repair", name: "Electric Gate Repair", desc: "Wiring, boards, remotes. We trace the fault and fix it.", img: "/images/gallery/gate-4.webp" },
  { href: "/services/iron-gate-repair", name: "Iron Gate Repair", desc: "Structural, hinges, welds, finishes — fully restored.", img: "/images/gallery/gate-3.webp" },
];

const garagePrimary = [
  { href: "/services/garage-door-repair", name: "Garage Door Repair", desc: "Complete repair for all door problems.", img: "/images/services/garage-door-repair.webp" },
  { href: "/services/garage-door-spring-repair", name: "Spring Repair", desc: "Torsion & extension — same-day replacement.", img: "/images/services/walnut-garage.webp" },
];

const garageRest = [
  { href: "/services/garage-door-opener-repair", name: "Opener Repair", desc: "LiftMaster, Genie, Chamberlain & all brands.", img: "/images/services/garage-door-repair.webp" },
  { href: "/services/garage-door-cable-repair", name: "Cable Repair", desc: "Snapped or frayed cables replaced same day.", img: "/images/services/white-garage.webp" },
  { href: "/services/garage-door-panel-repair", name: "Panel Repair", desc: "Dented or damaged panels replaced same day.", img: "/images/services/wood-garage.webp" },
  { href: "/services/garage-door-installation", name: "Door Installation", desc: "New doors, fully installed and balanced.", img: "/images/services/wood-garage.webp" },
];

const storyChecklist = [
  "Honest diagnosis — no upselling, ever",
  "All work backed by a written warranty",
  "We work on every brand and model",
  "Real humans answer — no phone trees",
];

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Gate Repair & Garage Door Repair",
  provider: { "@id": ORG_ID },
  areaServed: { "@type": "AdministrativeArea", name: "Los Angeles County, CA" },
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
      <section className="relative overflow-hidden" style={{ minHeight: "92vh" }}>
        <Image
          src="/images/hero/hero-thin-gate.webp"
          alt="Gate and garage door repair Los Angeles CA"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
        />
        {/* Scrim — bottom-heavy so content is readable, top shows the photo */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(12,30,53,0.93) 0%, rgba(12,30,53,0.6) 45%, rgba(12,30,53,0.45) 75%, rgba(12,30,53,0.45) 100%)",
          }}
        />
        {/* Content */}
        <div
          className="relative z-10 container-max flex items-center"
          style={{ minHeight: "92vh", paddingTop: "7rem", paddingBottom: "3rem" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-center w-full">
            {/* Copy */}
            <div className="max-w-2xl">
              <span
                className="eyebrow"
                style={{ color: "rgba(196,133,90,0.9)" }}
              >
                Los Angeles, CA
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
                Same-day service across Los Angeles &amp; Southern California. We fix gates and
                garage doors fast, honestly, and with a warranty.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <a href={BUSINESS.phoneHref} className="btn-gold text-base">
                  <Phone size={18} />
                  Call {BUSINESS.phone}
                </a>
                <a href={BUSINESS.smsHref} className="btn-ghost text-base">
                  <MessageSquareText size={18} />
                  Text us a photo
                </a>
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

            {/* Compact form — desktop only, mirrors hero on mobile below */}
            <div className="hidden lg:block">
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>

      <IronDivider />

      {/* ── MOBILE FORM — directly below hero ── */}
      <div className="lg:hidden" style={{ background: "var(--bg-muted)", padding: "2rem 1.5rem" }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <ContactForm compact />
        </div>
      </div>

      {/* ── THIN TRUST BAR ── */}
      <div style={{ background: "var(--navy)", padding: "0.65rem 1rem" }}>
        <div className="container-max">
          <div
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm font-semibold"
            style={{ color: "#fff", letterSpacing: "0.02em" }}
          >
            <span>Bonded &amp; Insured</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <a href={BUSINESS.googleReviewsUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none" }}>
              ★ 4.9 on Google
            </a>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>Same-Day Service</span>
          </div>
        </div>
      </div>

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
                Gates are our #1 specialty — all types, all brands, same-day service.
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
              <ServiceGridReveal
                primary={gatePrimary.map((s, i) => (
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
                    <div style={{ aspectRatio: "16/9", position: "relative", overflow: "hidden", borderRadius: "12px 12px 0 0" }}>
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
                rest={gateRest.map((s, i) => (
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
                    <div style={{ aspectRatio: "16/9", position: "relative", overflow: "hidden", borderRadius: "12px 12px 0 0" }}>
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
              />
            </div>
            {/* Garage Door section */}
            <p
              className="font-heading font-semibold mb-5"
              style={{ fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--stone)" }}
            >
              Garage Door Services
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-5">
              <ServiceGridReveal
                mobileOnly
                primary={garagePrimary.map((s) => (
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
                    <div style={{ aspectRatio: "4/3", position: "relative", overflow: "hidden", borderRadius: "12px 12px 0 0" }}>
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
                rest={garageRest.map((s) => (
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
                    <div style={{ aspectRatio: "4/3", position: "relative", overflow: "hidden", borderRadius: "12px 12px 0 0" }}>
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
              />
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── BRAND MARQUEE ── */}
      <BrandsMarquee />

      {/* ── DIAGNOSTIC WIDGET ── */}
      <DiagnosticWidget />

      {/* ── REVIEWS — dark section ── */}
      <section className="section-padding section--dark">
        <div className="container-max">
          <RevealWrapper>
            <div className="mb-12">
              <span className="eyebrow">Client Reviews</span>
              <h2 style={{ color: "#ffffff" }}>
                What LA Homeowners{" "}
                <em style={{ color: "var(--brown-warm)" }}>Say About Us</em>
              </h2>
            </div>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {REVIEWS.slice(0, 3).map((r, i) => (
              <RevealWrapper key={r.name} delay={i + 1}>
                <ReviewQuote review={r} className="h-full" />
              </RevealWrapper>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/reviews" className="btn-ghost">
              See All {BUSINESS.reviewCount}+ Reviews →
            </Link>
            <a
              href={BUSINESS.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold"
              style={{ color: "var(--text-warm)", textDecoration: "none" }}
            >
              ★ 4.9 on Google
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <div style={{ background: "var(--brown)", padding: "1.75rem 0" }}>
        <div className="container-max flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="font-heading font-bold" style={{ fontSize: "1.15rem", color: "var(--text-warm)" }}>
            Gate stuck? Call now — {BUSINESS.phone}
          </p>
          <a href={BUSINESS.phoneHref} className="btn-gold">
            <Phone size={16} /> Call Now
          </a>
        </div>
      </div>

      {/* ── BUSINESS STORY ── */}
      <RevealWrapper>
        <section className="section-padding" style={{ background: "var(--bg-base)" }}>
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              {/* Copy */}
              <div>
                <span className="eyebrow">Our Story</span>
                <h2 style={{ marginBottom: "1.5rem" }}>
                  LA-Rooted.{" "}
                  <em>Driven by Trust.</em>
                </h2>
                <p style={{ color: "var(--text-mid)", lineHeight: 1.85, fontSize: "1.05rem" }}>
                  We didn&apos;t build Real Gate &amp; Garage Door on advertising — we built it on
                  neighbors telling neighbors. Every call, every repair, we treat like it&apos;s our
                  own home. That&apos;s {BUSINESS.yearsInBusiness}+ years of five-star reviews, from the
                  Valley to the coast.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 mt-6 font-semibold"
                  style={{ color: "var(--brown)" }}
                >
                  Our Story <ArrowRight size={16} />
                </Link>
              </div>
              {/* Photo + Checklist */}
              <div className="flex flex-col gap-6">
                <ArchImage
                  src="/images/story/building.webp"
                  alt="Real Gate & Garage Door team at work"
                  aspect="4/5"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
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
          </div>
        </section>
      </RevealWrapper>

      {/* ── SERVICE AREAS ── */}
      <RevealWrapper>
        <section className="section-padding" style={{ background: "var(--bg-muted)" }}>
          <div className="container-max text-center">
            <span className="eyebrow">Where We Work</span>
            <h2 style={{ marginBottom: "0.75rem" }}>
              Los Angeles &amp;{" "}
              <em>Southern California.</em>
            </h2>
            <SectionRule />
            <p style={{ color: "var(--stone)", maxWidth: 520, margin: "1.25rem auto 2.5rem" }}>
              We serve cities across Los Angeles &amp; Southern California — from Malibu to
              Long Beach, Santa Barbara to Orange County.
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
              View all {CITIES.length} service areas <ArrowRight size={14} />
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
                  <em>Local Homeowners</em>
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
                  "Bonded & Insured",
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
                <p style={{ color: "rgba(237,234,228,0.6)", fontSize: "0.85rem", marginBottom: "1rem" }}>
                  Live answer 24/7 for emergencies
                </p>
                <a href={BUSINESS.smsHref} className="btn-ghost text-sm">
                  <MessageSquareText size={16} />
                  Text us a photo
                </a>
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
