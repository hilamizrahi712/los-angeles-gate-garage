import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";
import { CITIES, getCityBySlug } from "@/lib/cities-data";
import { BUSINESS, REVIEWS, ORG_ID } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";
import BrandsMarquee from "@/components/BrandsMarquee";
import ArchImage from "@/components/ArchImage";
import IronDivider from "@/components/IronDivider";
import ReviewQuote from "@/components/ReviewQuote";
import SectionRule from "@/components/SectionRule";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const data = getCityBySlug(city);
  if (!data) return {};
  const url = `/areas/${city}`;
  const ogImage = { url: "/images/og/og-default.jpg", width: 1200, height: 630 };
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: data.metaTitle, description: data.metaDescription, url, images: [ogImage] },
    twitter: { card: "summary_large_image", images: [ogImage.url] },
  };
}

const gateCityServices = [
  { href: "/services/gate-repair",               label: "Gate Repair",            img: "/images/services/black-iron-gate.jpeg" },
  { href: "/services/automatic-gate-repair",     label: "Automatic Gate Repair",  img: "/images/services/gate-motor.jpeg" },
  { href: "/services/electric-gate-repair",      label: "Electric Gate Repair",   img: "/images/services/swing-motor.jpeg" },
  { href: "/services/iron-gate-repair",          label: "Iron Gate Repair",       img: "/images/services/iron-black-gate.jpeg" },
];

const garageCityServices = [
  { href: "/services/garage-door-repair",        label: "Garage Door Repair",     img: "/images/services/garage-door-repair.jpeg" },
  { href: "/services/garage-door-spring-repair", label: "Spring Repair",          img: "/images/services/whatsapp-photo-1.jpeg" },
  { href: "/services/garage-door-opener-repair", label: "Opener Repair",          img: "/images/services/motor-wood.jpeg" },
  { href: "/services/emergency-garage-door-repair", label: "24/7 Emergency",      img: "/images/hero/hero-gate.jpeg" },
];

const CITY_HERO_POOL = [
  "/images/hero/hero-home.jpeg",
  "/images/services/swing-1.jpeg",
  "/images/services/grey-iron-gate.jpeg",
  "/images/services/wood-gate.jpeg",
  "/images/services/swing-2.jpeg",
  "/images/services/outside-gate.jpeg",
  "/images/story/building.jpeg",
  "/images/services/gate-view.jpeg",
  "/images/services/gated-community.jpeg",
  "/images/services/iron-gate-1.jpeg",
  "/images/services/iron-gold-gate.jpeg",
  "/images/services/estate-gate.jpeg",
  "/images/services/malibu-gate.jpeg",
  "/images/services/long-iron-gate.jpeg",
  "/images/services/frezno-gate.jpeg",
  "/images/services/short-gate.jpeg",
  "/images/services/black-wood-gate.jpeg",
];

// Rotating sets so nearby cities on the list don't all show the same three photos
const CITY_PHOTO_STRIPS = [
  [
    { src: "/images/gallery/gate-4.jpeg", alt: "Iron gate repair and service" },
    { src: "/images/gallery/gate-5.jpeg", alt: "Gate installation and service" },
    { src: "/images/gallery/gate-6.jpeg", alt: "Custom gate repair service" },
  ],
  [
    { src: "/images/gallery/gate-1.jpeg", alt: "Sliding gate repair and service" },
    { src: "/images/gallery/gate-2.jpeg", alt: "Driveway gate repair and service" },
    { src: "/images/gallery/gate-3.jpeg", alt: "New gate installation" },
  ],
  [
    { src: "/images/gallery/commercial-1.jpeg", alt: "Commercial gate service" },
    { src: "/images/gallery/outside-1.jpeg", alt: "Gate repair on-site" },
    { src: "/images/services/iron-wood-gate.jpeg", alt: "Iron and wood gate repair" },
  ],
  [
    { src: "/images/services/new-garage.jpeg", alt: "Garage door opener repair" },
    { src: "/images/services/wood-garage.jpeg", alt: "Wood garage door repair" },
    { src: "/images/services/whatsapp-photo-2.jpeg", alt: "Garage door service" },
  ],
];

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const data = getCityBySlug(city);
  if (!data) notFound();

  const cityReviews = REVIEWS.filter((r) => r.city === data.name);
  const displayReviews = [
    ...cityReviews,
    ...REVIEWS.filter((r) => r.city !== data.name),
  ].slice(0, 3);

  const cityIndex = CITIES.findIndex((c) => c.slug === city);
  const heroImg = CITY_HERO_POOL[cityIndex % CITY_HERO_POOL.length];
  const photoStrip = CITY_PHOTO_STRIPS[cityIndex % CITY_PHOTO_STRIPS.length];
  const nearbyCities = Array.from({ length: 4 }, (_, i) => CITIES[(cityIndex + i + 1) % CITIES.length]);

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(data.name + ", CA")}&output=embed&z=12`;

  const cityServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Gate & Garage Door Repair — ${data.name}, CA`,
    description: data.metaDescription,
    url: `${BUSINESS.domain}/areas/${city}`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "City", name: data.name },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BUSINESS.domain },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: `${BUSINESS.domain}/service-areas` },
      { "@type": "ListItem", position: 3, name: data.name, item: `${BUSINESS.domain}/areas/${city}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cityServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ minHeight: "55vh" }}>
        <Image
          src={heroImg}
          alt={`Gate and garage door repair in ${data.name}, CA`}
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(12,30,53,0.95) 0%, rgba(12,30,53,0.55) 60%, rgba(12,30,53,0.3) 100%)" }}
        />
        <div
          className="relative z-10 container-max flex items-center"
          style={{ minHeight: "55vh", paddingTop: "7rem", paddingBottom: "2rem" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 items-center w-full">
            <div>
              <span className="eyebrow" style={{ color: "rgba(196,133,90,0.9)" }}>
                {data.name}, CA
              </span>
              <h1 style={{ color: "var(--text-warm)", marginBottom: "0.75rem" }}>
                {data.heroH1}
              </h1>
              <p style={{ color: "rgba(237,234,228,0.8)", fontSize: "1.05rem", marginBottom: "1.5rem", maxWidth: 560 }}>
                {data.heroSubtitle}
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

            {/* Mini lead form — desktop only, mirrors hero on mobile below */}
            <div className="hidden lg:block">
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>

      <IronDivider />

      {/* MOBILE FORM — directly below hero */}
      <div className="lg:hidden" style={{ background: "var(--bg-muted)", padding: "1.5rem" }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <ContactForm compact />
        </div>
      </div>

      {/* TRUST BAR — gold */}
      <div style={{ background: "#C9A84C", padding: "0.65rem 1rem" }}>
        <div className="container-max">
          <div
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm font-semibold"
            style={{ color: "#1a1a1a", letterSpacing: "0.02em" }}
          >
            <span>✦ Serving {data.name}</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>Arrival in 30–45 min to {data.name}</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>Same-Day Service</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>5★ Rated</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>Bonded &amp; Insured</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>Free Estimates</span>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="section-padding" style={{ background: "var(--bg-base)" }}>
        <div className="container-max space-y-10">

          {/* Gate Services — with images */}
          <div>
            <h2
              style={{
                marginBottom: "0.5rem",
                fontSize: "1.75rem",
                borderLeft: "4px solid var(--brown)",
                paddingLeft: "0.75rem",
              }}
            >
              Gate Repair in {data.name}
            </h2>
            <p style={{ color: "var(--text-soft)", fontSize: "0.92rem", marginBottom: "1.25rem", paddingLeft: "0.75rem" }}>
              Sliding, swing, and automatic gates — motors, sensors, hinges, and tracks fixed same-day for {data.name} homes and businesses.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {gateCityServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="card flex flex-col overflow-hidden transition-all hover:shadow-md"
                  style={{ textDecoration: "none", padding: 0 }}
                >
                  <div className="relative" style={{ height: 100, overflow: "hidden", borderRadius: "12px 12px 0 0" }}>
                    <Image
                      src={s.img}
                      alt={`${s.label} in ${data.name}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>
                  <div className="px-3 py-2.5 flex items-center gap-2">
                    <span className="font-semibold text-xs" style={{ color: "var(--navy)", flex: 1, lineHeight: 1.3 }}>
                      {s.label}
                    </span>
                    <ArrowRight size={12} style={{ color: "var(--stone-light)", flexShrink: 0 }} />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Garage Door Services — with images */}
          <div>
            <h2
              style={{
                marginBottom: "0.5rem",
                fontSize: "1.75rem",
                borderLeft: "4px solid var(--brown)",
                paddingLeft: "0.75rem",
              }}
            >
              Garage Door Repair in {data.name}
            </h2>
            <p style={{ color: "var(--text-soft)", fontSize: "0.92rem", marginBottom: "1.25rem", paddingLeft: "0.75rem" }}>
              Springs, cables, openers, and emergencies — parts on the truck for one-visit repairs across {data.name}.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {garageCityServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="card flex flex-col overflow-hidden transition-all hover:shadow-md"
                  style={{ textDecoration: "none", padding: 0 }}
                >
                  <div className="relative" style={{ height: 100, overflow: "hidden", borderRadius: "12px 12px 0 0" }}>
                    <Image
                      src={s.img}
                      alt={`${s.label} in ${data.name}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>
                  <div className="px-3 py-2.5 flex items-center gap-2">
                    <span className="font-semibold text-xs" style={{ color: "var(--navy)", flex: 1, lineHeight: 1.3 }}>
                      {s.label}
                    </span>
                    <ArrowRight size={12} style={{ color: "var(--stone-light)", flexShrink: 0 }} />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Inline CTA */}
          <div
            className="flex flex-wrap items-center justify-between gap-4 rounded-[var(--radius-lg)] px-5 py-4"
            style={{ background: "var(--bg-card)", border: "1px solid var(--line)" }}
          >
            <div>
              <p className="font-semibold" style={{ color: "var(--navy)", marginBottom: "0.15rem" }}>
                Need same-day service in {data.name}?
              </p>
              <p style={{ fontSize: "0.82rem", color: "var(--stone)" }}>
                We respond within 30 minutes during business hours.
              </p>
            </div>
            <a href={BUSINESS.phoneHref} className="btn-primary" style={{ flexShrink: 0 }}>
              <Phone size={15} /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <BrandsMarquee />

      {/* PHOTOS */}
      <section className="section-padding" style={{ background: "var(--bg-muted)" }}>
        <div className="container-max">
          <div className="grid grid-cols-3 gap-3">
            {photoStrip.map((photo, i) => (
              <ArchImage
                key={i}
                src={photo.src}
                alt={`${photo.alt} in ${data.name}`}
                aspect="3/4"
                sizes="(max-width: 768px) 33vw, 20vw"
              />
            ))}
          </div>
        </div>
      </section>

      {/* TEXT + everything else */}
      <section className="section-padding" style={{ background: "var(--bg-base)" }}>
        <div className="container-max grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Main column */}
          <div className="lg:col-span-2 space-y-10">

            {/* Intro */}
            <div>
              {data.intro.split("\n\n").map((para, i) => (
                <p key={i} className="leading-relaxed mb-4" style={{ color: "var(--text-mid)", fontSize: "1.02rem" }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Why Us */}
            <div>
              <h2
                style={{
                  marginBottom: "1.25rem",
                  fontSize: "1.75rem",
                  borderLeft: "4px solid var(--brown)",
                  paddingLeft: "0.75rem",
                }}
              >
                Why {data.name} Residents Choose Us
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {data.whyUs.map((item) => (
                  <div key={item.title} className="card" style={{ borderTop: "3px solid var(--brown-warm)" }}>
                    <h3
                      className="font-heading font-semibold mb-2"
                      style={{ fontSize: "0.95rem", color: "var(--navy)" }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ color: "var(--text-soft)", fontSize: "0.88rem" }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA after Why Us */}
              <div className="flex flex-wrap gap-3 mt-6">
                <a href={BUSINESS.phoneHref} className="btn-primary">
                  <Phone size={16} /> Call {BUSINESS.phone}
                </a>
                <Link href="/contact" className="btn-secondary">
                  Request Free Estimate
                </Link>
              </div>
            </div>

            {/* Reviews */}
            <div>
              <h2
                style={{
                  marginBottom: "1.25rem",
                  fontSize: "1.75rem",
                  borderLeft: "4px solid var(--brown)",
                  paddingLeft: "0.75rem",
                }}
              >
                What Customers Say
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayReviews.map((r, i) => (
                  <ReviewQuote key={i} review={r} className="h-full" />
                ))}
              </div>
              <div className="mt-5 text-center">
                <Link
                  href="/reviews"
                  className="btn-secondary text-sm"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}
                >
                  View All Customer Reviews <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2
                style={{
                  marginBottom: "1.25rem",
                  fontSize: "1.75rem",
                  borderLeft: "4px solid var(--brown)",
                  paddingLeft: "0.75rem",
                }}
              >
                {data.name} — Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {data.faq.map((f, i) => (
                  <div
                    key={i}
                    className="rounded-[var(--radius-lg)] p-5"
                    style={{ border: "1px solid var(--line)", background: "var(--bg-card)" }}
                  >
                    <h3
                      className="font-heading font-semibold mb-2"
                      style={{ fontSize: "1rem", color: "var(--navy)" }}
                    >
                      {f.q}
                    </h3>
                    <p style={{ color: "var(--text-soft)", fontSize: "0.92rem" }}>{f.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Areas */}
            <div>
              <h2
                style={{
                  marginBottom: "1rem",
                  fontSize: "1.4rem",
                  borderLeft: "4px solid var(--brown)",
                  paddingLeft: "0.75rem",
                }}
              >
                Nearby Areas We Serve
              </h2>
              <div className="flex flex-wrap gap-2">
                {nearbyCities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/areas/${c.slug}`}
                    className="px-3 py-1.5 rounded-full text-sm transition-colors"
                    style={{
                      background: "var(--bg-muted)",
                      color: "var(--text-mid)",
                      border: "1px solid var(--line)",
                      textDecoration: "none",
                    }}
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div
              className="section--dark rounded-[var(--radius-lg)] p-6 text-center"
              style={{ background: "var(--navy)" }}
            >
              <h2 className="font-heading font-bold text-xl mb-2" style={{ color: "var(--text-warm)" }}>
                Ready for Same-Day Service in {data.name}?
              </h2>
              <SectionRule />
              <p style={{ color: "rgba(237,234,228,0.7)", fontSize: "0.9rem", marginTop: "1.25rem", marginBottom: "1.25rem" }}>
                Call now or fill out the form — we respond within 30 minutes during business hours.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href={BUSINESS.phoneHref} className="btn-gold">
                  <Phone size={16} /> Call {BUSINESS.phone}
                </a>
                <Link href="/contact" className="btn-secondary">
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div
              className="rounded-[var(--radius-lg)] p-5 text-center"
              style={{ background: "var(--navy)" }}
            >
              <p
                className="font-heading font-bold mb-3"
                style={{ fontSize: "1rem", color: "var(--text-warm)" }}
              >
                Same-Day Service in {data.name}
              </p>
              <a href={BUSINESS.phoneHref} className="btn-gold w-full justify-center">
                <Phone size={16} /> {BUSINESS.phone}
              </a>
              <p style={{ fontSize: "0.78rem", color: "rgba(237,234,228,0.5)", marginTop: "0.75rem" }}>
                Bonded &amp; Insured · Sun–Fri 7AM–10PM
              </p>
            </div>

            <p className="text-center font-heading font-bold" style={{ color: "#C9A84C", fontSize: "1.05rem" }}>
              Free Estimate in {data.name}
            </p>
            <ContactForm />

            {/* Google Map + business card */}
            <div
              className="rounded-[var(--radius-lg)] overflow-hidden"
              style={{ border: "2px solid var(--brown-warm)" }}
            >
              <div
                className="px-4 py-2.5"
                style={{ background: "var(--brown)", color: "#fff" }}
              >
                <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                  📍 Serving {data.name}, CA
                </span>
              </div>
              <div style={{ background: "var(--bg-muted)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
                <iframe
                  src={mapSrc}
                  width="100%"
                  height="220"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  title={`Map — ${data.name}, CA gate and garage door service`}
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              {/* Business card below map */}
              <div
                className="px-4 py-3 flex items-center justify-between gap-3"
                style={{ background: "var(--bg-card)", borderTop: "1px solid var(--line)" }}
              >
                <div>
                  <p className="font-bold text-sm" style={{ color: "var(--navy)", lineHeight: 1.2 }}>
                    Real Gate &amp; Garage Door
                  </p>
                  <p style={{ fontSize: "0.72rem", color: "var(--stone)", marginTop: "0.2rem" }}>
                    ★★★★★ 5-Star Rated · Bonded &amp; Insured
                  </p>
                </div>
                <a
                  href={BUSINESS.phoneHref}
                  style={{ fontSize: "0.78rem", color: "var(--brown-warm)", fontWeight: 700, textDecoration: "none", flexShrink: 0 }}
                >
                  {BUSINESS.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
