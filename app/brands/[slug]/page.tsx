import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ChevronRight, AlertCircle, ArrowRight } from "lucide-react";
import { BRANDS, getBrandBySlug } from "@/lib/brands-data";
import { BUSINESS, REVIEWS, SFV_CITIES, ORG_ID } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";
import ArchImage from "@/components/ArchImage";
import IronDivider from "@/components/IronDivider";
import SectionRule from "@/components/SectionRule";
import ReviewQuote from "@/components/ReviewQuote";

export async function generateStaticParams() {
  return BRANDS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return {};
  const url = `/brands/${brand.slug}`;
  const ogImage = { url: "/images/og/og-default.jpg", width: 1200, height: 630 };
  return {
    title: brand.metaTitle,
    description: brand.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: brand.metaTitle, description: brand.metaDescription, url, images: [ogImage] },
    twitter: { card: "summary_large_image", images: [ogImage.url] },
  };
}

const BRAND_IMAGES: Record<string, { hero: string; photo: string }> = {
  "all-o-matic":  { hero: "/images/brands/all-o-matic/all-o-matic-hero.webp", photo: "/images/brands/all-o-matic/all-o-matic-1.webp" },
  "liftmaster":   { hero: "/images/brands/liftmaster/liftmaster-hero.webp",   photo: "/images/brands/liftmaster/liftmaster-1.webp" },
  "doorking":     { hero: "/images/gallery/commercial-1.webp",     photo: "/images/gallery/commercial-1.webp" },
  "genie":        { hero: "/images/services/garage-door-repair.webp",          photo: "/images/services/walnut-garage.webp" },
  "doorbird":     { hero: "/images/services/commercial-3.webp",        photo: "/images/gallery/outside-1.webp" },
  "chamberlain":  { hero: "/images/services/white-garage.webp",        photo: "/images/services/wood-garage.webp" },
  "elite":        { hero: "/images/brands/elite/elite-hero.webp",      photo: "/images/brands/elite/elite-1.webp" },
  "viking":       { hero: "/images/services/estate-gate.webp",         photo: "/images/services/iron-gold-gate.webp" },
  "ramset":       { hero: "/images/services/iron-gate-1.webp",         photo: "/images/services/long-iron-gate.webp" },
  "linear":       { hero: "/images/services/malibu-gate.webp",         photo: "/images/services/gate-motor.webp" },
  "eagle":        { hero: "/images/services/gated-community.webp",     photo: "/images/gallery/commercial-1.webp" },
};

// Extra jobsite photos for the 3 brands with a real photo gallery — rendered as an "Our Work" grid
const BRAND_GALLERY: Record<string, string[]> = {
  "liftmaster": [
    "/images/brands/liftmaster/liftmaster-2.webp",
    "/images/brands/liftmaster/liftmaster-3.webp",
    "/images/brands/liftmaster/liftmaster-4.webp",
  ],
  "all-o-matic": [
    "/images/brands/all-o-matic/all-o-matic-2.webp",
    "/images/brands/all-o-matic/all-o-matic-2.webp",
    "/images/brands/all-o-matic/all-o-matic-4.webp",
    "/images/brands/all-o-matic/all-o-matic-5.webp",
  ],
};

// Price/time and relevant service links by brand category — reuses the same ranges quoted on the service pages
const TYPE_INFO: Record<string, { priceRange: string; services: { href: string; label: string }[] }> = {
  "gate": {
    priceRange: "$200–$700 for most gate operator repairs",
    services: [
      { href: "/services/gate-opener-repair", label: "Gate Opener Repair" },
      { href: "/services/automatic-gate-repair", label: "Automatic Gate Repair" },
    ],
  },
  "garage-door": {
    priceRange: "$100–$350 for most opener repairs",
    services: [
      { href: "/services/garage-door-opener-repair", label: "Garage Door Opener Repair" },
      { href: "/services/garage-door-repair", label: "Garage Door Repair" },
    ],
  },
  "both": {
    priceRange: "$100–$700 depending on gate or garage door repair",
    services: [
      { href: "/services/gate-opener-repair", label: "Gate Opener Repair" },
      { href: "/services/garage-door-opener-repair", label: "Garage Door Opener Repair" },
    ],
  },
  "access-control": {
    priceRange: "$200–$800 for access control and gate system repairs",
    services: [
      { href: "/services/commercial-gate-repair", label: "Commercial Gate Repair" },
      { href: "/services/gate-opener-repair", label: "Gate Opener Repair" },
    ],
  },
};

const SYMPTOMS = [
  "Not responding to the remote or keypad",
  "Stops or reverses mid-travel",
  "Beeping or flashing an error light",
  "Making grinding or unusual noise before failing",
];

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) notFound();

  const images = BRAND_IMAGES[brand.slug] ?? {
    hero: "/images/hero/hero-gate.webp",
    photo: "/images/services/gate-motor.webp",
  };
  const typeInfo = TYPE_INFO[brand.type];
  const gallery = BRAND_GALLERY[brand.slug];
  const matchedReview = REVIEWS.find((r) => r.brand === brand.slug);
  const whyUsShort = brand.whyUs.split(". ")[0] + ".";
  const topCities = SFV_CITIES.slice(0, 6);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${brand.name} Repair`,
    serviceType: `${brand.name} Repair`,
    description: brand.metaDescription,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "AdministrativeArea", name: "Los Angeles County, CA" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BUSINESS.domain },
      { "@type": "ListItem", position: 2, name: brand.name, item: `${BUSINESS.domain}/brands/${brand.slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: brand.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO — full image background */}
      <section className="relative flex flex-col justify-end overflow-hidden" style={{ minHeight: "55vh" }}>
        <Image
          src={images.hero}
          alt={`${brand.name} gate and garage door repair in Los Angeles`}
          fill
          className="object-cover"
          priority
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(12,30,53,0.95) 0%, rgba(12,30,53,0.55) 60%, rgba(12,30,53,0.25) 100%)" }}
        />
        <div className="relative z-10 container-max pb-12 pt-32">
          {/* Logo pill */}
          <div
            className="inline-flex items-center justify-center rounded-[var(--radius)] mb-5"
            style={{ background: "rgba(255,255,255,0.12)", padding: "0.6rem 1.25rem", backdropFilter: "blur(6px)" }}
          >
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              width={140}
              height={48}
              style={{ objectFit: "contain", maxHeight: 44, width: "auto" }}
              unoptimized
            />
          </div>

          <span className="eyebrow" style={{ color: "rgba(196,133,90,0.9)" }}>
            Expert Service · Los Angeles
          </span>
          <h1 style={{ color: "var(--text-warm)", marginBottom: "0.5rem" }}>
            {brand.name} Repair — <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Los Angeles</em>
          </h1>
          <p style={{ color: "rgba(237,234,228,0.82)", fontSize: "1.05rem", marginBottom: "0.5rem", maxWidth: 560 }}>
            {brand.tagline}
          </p>
          <p className="font-semibold" style={{ color: "#C9A84C", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
            Parts on our truck · Fixed same-day
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={BUSINESS.phoneHref} className="btn-gold">
              <Phone size={16} /> Call {BUSINESS.phone}
            </a>
            <Link href="/contact" className="btn-ghost">
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <IronDivider />

      {/* TRUST BAR */}
      <div style={{ background: "var(--brown)", padding: "0.65rem 1rem" }}>
        <div className="container-max">
          <div
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm font-semibold"
            style={{ color: "#fff", letterSpacing: "0.02em" }}
          >
            <span>✦ {brand.name} Specialists</span>
            <span style={{ opacity: 0.45 }}>·</span>
            <span>Same-Day Service</span>
            <span style={{ opacity: 0.45 }}>·</span>
            <span>5★ Rated</span>
            <span style={{ opacity: 0.45 }}>·</span>
            <span>Bonded &amp; Insured</span>
            <span style={{ opacity: 0.45 }}>·</span>
            <span>Free Estimates</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section className="section-padding" style={{ background: "var(--bg-base)" }}>
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main column */}
            <div className="lg:col-span-2 flex flex-col gap-10">

              {/* Symptoms */}
              <div
                className="rounded-[var(--radius-lg)] p-6"
                style={{ background: "var(--bg-card)", border: "1px solid var(--line)" }}
              >
                <h2 style={{ marginBottom: "1rem", fontSize: "1.4rem" }}>
                  Is Your {brand.name} <em>Doing This?</em>
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {SYMPTOMS.map((s) => (
                    <li key={s} className="flex items-start gap-2.5">
                      <AlertCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: "var(--brown-warm)" }} />
                      <span style={{ color: "var(--text-mid)", fontSize: "0.92rem" }}>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Time */}
              <div style={{ background: "var(--brown)", borderRadius: "var(--radius-lg)", padding: "0.85rem 1.5rem", textAlign: "center" }}>
                <p className="font-semibold" style={{ color: "var(--text-warm)", fontSize: "0.95rem" }}>
                  {typeInfo.priceRange} · Fixed same-day
                </p>
              </div>

              {/* Intro */}
              <div>
                <h2
                  className="font-heading font-bold"
                  style={{ fontSize: "1.5rem", color: "var(--navy)", marginBottom: "1rem", borderLeft: "4px solid var(--brown)", paddingLeft: "0.75rem" }}
                >
                  About {brand.name}
                </h2>
                <p style={{ color: "var(--text-mid)", lineHeight: 1.8, fontSize: "1.02rem" }}>
                  {brand.intro}
                </p>
              </div>

              {/* Services */}
              <div
                className="rounded-[var(--radius-lg)] p-6"
                style={{ background: "var(--bg-card)", border: "1px solid var(--line)" }}
              >
                <h2
                  className="font-heading font-bold"
                  style={{ fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", borderLeft: "4px solid var(--brown)", paddingLeft: "0.75rem" }}
                >
                  {brand.name} Services We Handle
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {brand.services.map((s, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle
                        size={17}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: "var(--brown-warm)" }}
                      />
                      <span style={{ color: "var(--text-mid)", fontSize: "0.92rem" }}>{s}</span>
                    </li>
                  ))}
                </ul>

                {/* Inline CTA */}
                <div
                  className="mt-6 pt-5 flex flex-wrap items-center justify-between gap-4"
                  style={{ borderTop: "1px solid var(--line)" }}
                >
                  <p style={{ color: "var(--text-soft)", fontSize: "0.88rem" }}>
                    Need any of these services? We respond within 30 minutes.
                  </p>
                  <a href={BUSINESS.phoneHref} className="btn-primary" style={{ flexShrink: 0 }}>
                    <Phone size={15} /> Call Now
                  </a>
                </div>
              </div>

              {/* Photo / Gallery */}
              {gallery ? (
                <div>
                  <h2
                    className="font-heading font-bold"
                    style={{ fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", borderLeft: "4px solid var(--brown)", paddingLeft: "0.75rem" }}
                  >
                    Our {brand.name} Work
                  </h2>
                  <div className="grid grid-cols-3 gap-3">
                    <ArchImage
                      src={images.photo}
                      alt={`${brand.name} repair and installation work by Real Gate & Garage Door`}
                      aspect="3/4"
                      sizes="(max-width: 768px) 33vw, 20vw"
                    />
                    {gallery.map((src) => (
                      <ArchImage
                        key={src}
                        src={src}
                        alt={`${brand.name} installation by Real Gate & Garage Door`}
                        aspect="3/4"
                        sizes="(max-width: 768px) 33vw, 20vw"
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <ArchImage
                  src={images.photo}
                  alt={`${brand.name} repair and installation work by Real Gate & Garage Door`}
                  aspect="4/5"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              )}

              {/* Common Models */}
              <div>
                <h2
                  className="font-heading font-bold"
                  style={{ fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", borderLeft: "4px solid var(--brown)", paddingLeft: "0.75rem" }}
                >
                  Common {brand.name} Models We Service
                </h2>
                <div className="space-y-3">
                  {brand.models.map((m, i) => (
                    <div key={i} className="card" style={{ padding: "1rem 1.25rem" }}>
                      <p className="font-heading font-semibold" style={{ fontSize: "0.92rem", color: "var(--navy)", marginBottom: "0.25rem" }}>
                        {m}
                      </p>
                      <p style={{ color: "var(--text-soft)", fontSize: "0.85rem" }}>
                        {brand.modelNotes[i]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Matched Review */}
              {matchedReview && <ReviewQuote review={matchedReview} />}

              {/* Why Us — navy block */}
              <div
                className="rounded-[var(--radius-lg)] p-6"
                style={{ background: "var(--navy)" }}
              >
                <h2
                  className="font-heading font-bold"
                  style={{ fontSize: "1.15rem", color: "var(--text-warm)", marginBottom: "0.75rem" }}
                >
                  Why Choose Us for {brand.name}?
                </h2>
                <p style={{ color: "rgba(237,234,228,0.8)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "1.25rem" }}>
                  {whyUsShort}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href={BUSINESS.phoneHref} className="btn-gold" style={{ fontSize: "0.9rem" }}>
                    <Phone size={15} /> Call {BUSINESS.phone}
                  </a>
                  <Link href="/contact" className="btn-ghost" style={{ fontSize: "0.9rem" }}>
                    Request Estimate
                  </Link>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2
                  className="font-heading font-bold"
                  style={{ fontSize: "1.5rem", color: "var(--navy)", marginBottom: "1rem", borderLeft: "4px solid var(--brown)", paddingLeft: "0.75rem" }}
                >
                  {brand.name} — Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {brand.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="rounded-[var(--radius-lg)] p-5"
                      style={{ border: "1px solid var(--line)", background: "var(--bg-card)" }}
                    >
                      <h3
                        className="font-heading font-semibold mb-2"
                        style={{ fontSize: "1rem", color: "var(--navy)" }}
                      >
                        {faq.q}
                      </h3>
                      <p style={{ color: "var(--text-soft)", fontSize: "0.92rem", lineHeight: 1.7 }}>
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Internal Links */}
              <div>
                <h2
                  className="font-heading font-bold"
                  style={{ fontSize: "1.15rem", color: "var(--navy)", marginBottom: "1rem" }}
                >
                  Related Services &amp; Areas
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {typeInfo.services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm"
                      style={{ background: "var(--bg-muted)", border: "1px solid var(--line)", color: "var(--text-mid)", textDecoration: "none" }}
                    >
                      {s.label} <ArrowRight size={12} />
                    </Link>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {topCities.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/areas/${c.slug}`}
                      className="px-3 py-1.5 rounded-full text-sm"
                      style={{ background: "var(--bg-muted)", border: "1px solid var(--line)", color: "var(--text-mid)", textDecoration: "none" }}
                    >
                      {brand.name} repair in {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-6">
              {/* Phone card */}
              <div
                className="rounded-[var(--radius-lg)] p-5 text-center"
                style={{ background: "var(--navy)" }}
              >
                <p
                  className="font-heading font-bold mb-3"
                  style={{ fontSize: "1rem", color: "var(--text-warm)" }}
                >
                  {brand.name} Repair — Same Day
                </p>
                <a href={BUSINESS.phoneHref} className="btn-gold w-full justify-center">
                  <Phone size={16} /> {BUSINESS.phone}
                </a>
                <p style={{ fontSize: "0.78rem", color: "rgba(237,234,228,0.5)", marginTop: "0.75rem" }}>
                  Bonded &amp; Insured · Sun–Fri 7AM–10PM
                </p>
              </div>

              <ContactForm />

              {/* Other brands */}
              <div
                className="rounded-[var(--radius-lg)] p-5"
                style={{ background: "var(--bg-card)", border: "1px solid var(--line)" }}
              >
                <p
                  className="font-heading font-bold"
                  style={{ fontSize: "0.9rem", color: "var(--navy)", marginBottom: "0.75rem" }}
                >
                  Other Brands We Service
                </p>
                <ul className="flex flex-col gap-1">
                  {BRANDS.filter((b) => b.slug !== brand.slug).map((b) => (
                    <li key={b.slug}>
                      <Link
                        href={`/brands/${b.slug}`}
                        className="flex items-center gap-2 py-1.5"
                        style={{ color: "var(--text-soft)", fontSize: "0.85rem", textDecoration: "none" }}
                      >
                        <ChevronRight size={14} style={{ color: "var(--brown-light)", flexShrink: 0 }} />
                        {b.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding section--dark">
        <div className="container-max max-w-2xl text-center">
          <span className="eyebrow" style={{ color: "var(--brown-warm)" }}>Ready to Get Started?</span>
          <h2 style={{ color: "var(--text-warm)", marginBottom: "0.75rem" }}>
            Need {brand.name} Service Today?
          </h2>
          <SectionRule />
          <p style={{ color: "rgba(237,234,228,0.7)", marginTop: "1.25rem", marginBottom: "2rem", fontSize: "0.95rem", lineHeight: 1.75 }}>
            We offer same-day service for most {brand.name} repairs across greater Los Angeles. Call now
            and we&apos;ll have a technician at your property within hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS.phoneHref} className="btn-gold">
              <Phone size={16} /> Call {BUSINESS.phone}
            </a>
            <Link href="/contact" className="btn-secondary">
              Request Estimate Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
