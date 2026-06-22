import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import { CITIES, getCityBySlug } from "@/lib/cities-data";
import { BUSINESS, REVIEWS } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

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
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/areas/${city}` },
    openGraph: { title: data.metaTitle, description: data.metaDescription },
    keywords: data.extraKeywords,
  };
}

const cityServices = [
  { href: "/services/gate-repair", label: "Gate Repair" },
  { href: "/services/automatic-gate-repair", label: "Automatic Gate Repair" },
  { href: "/services/electric-gate-repair", label: "Electric Gate Repair" },
  { href: "/services/iron-gate-repair", label: "Iron Gate Repair" },
  { href: "/services/garage-door-repair", label: "Garage Door Repair" },
  { href: "/services/garage-door-spring-repair", label: "Spring Repair" },
  { href: "/services/garage-door-opener-repair", label: "Opener Repair" },
  { href: "/services/emergency-garage-door-repair", label: "24/7 Emergency Service" },
];

// Non-commercial gate/property photos — expanded pool for city hero cycling (23 unique images)
const CITY_HERO_POOL = [
  "/images/hero/hero-home.jpeg",
  "/images/services/black-iron-gate.jpeg",
  "/images/services/swing-1.jpeg",
  "/images/services/grey-iron-gate.jpeg",
  "/images/services/wood-gate.jpeg",
  "/images/services/iron-black-gate.jpeg",
  "/images/services/swing-2.jpeg",
  "/images/hero/hero-gate.jpeg",
  "/images/services/outside-gate.jpeg",
  "/images/services/gate-motor.jpeg",
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
  "/images/services/motor-wood.jpeg",
  "/images/services/swing-motor.jpeg",
];

// 3-photo strip for each city page — gallery images for visual variety
const CITY_PHOTO_STRIP = [
  { src: "/images/gallery/gate-4.jpeg", alt: "Iron gate repair and service" },
  { src: "/images/gallery/gate-5.jpeg", alt: "Gate installation and service" },
  { src: "/images/gallery/gate-6.jpeg", alt: "Custom gate repair service" },
];

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const data = getCityBySlug(city);
  if (!data) notFound();

  const cityReviews = REVIEWS.filter((r) => r.city === data.name).slice(0, 2);
  const displayReviews = cityReviews.length > 0 ? cityReviews : REVIEWS.slice(0, 2);

  // Unique hero per city — cycle through non-commercial pool by position in CITIES array
  const cityIndex = CITIES.findIndex((c) => c.slug === city);
  const heroImg = CITY_HERO_POOL[cityIndex % CITY_HERO_POOL.length];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    description: data.metaDescription,
    url: `${BUSINESS.domain}/areas/${city}`,
    telephone: BUSINESS.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: data.name,
      addressRegion: "CA",
      addressCountry: "US",
    },
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="relative flex flex-col justify-end overflow-hidden" style={{ minHeight: "55vh" }}>
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
        <div className="relative z-10 container-max pb-12 pt-32">
          <span className="eyebrow" style={{ color: "rgba(196,133,90,0.9)" }}>
            San Fernando Valley · {data.name}
          </span>
          <h1 style={{ color: "var(--text-warm)", marginBottom: "0.75rem" }}>
            {data.heroH1}
          </h1>
          <p style={{ color: "rgba(237,234,228,0.8)", fontSize: "1.05rem", marginBottom: "1.5rem", maxWidth: 560 }}>
            {data.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={BUSINESS.phoneHref} className="btn-primary">
              <Phone size={16} /> Call {BUSINESS.phone}
            </a>
            <Link href="/contact" className="btn-ghost">
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="section-padding" style={{ background: "var(--bg-base)" }}>
        <div className="container-max grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Main column */}
          <div className="lg:col-span-2 space-y-12">

            {/* Intro */}
            <div>
              {data.intro.split("\n\n").map((para, i) => (
                <p key={i} className="leading-relaxed mb-4" style={{ color: "var(--text-mid)", fontSize: "1.02rem" }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Photo strip — 3 real photos */}
            <div className="grid grid-cols-3 gap-3">
              {CITY_PHOTO_STRIP.map((photo, i) => (
                <div
                  key={i}
                  className="rounded-[var(--radius)] overflow-hidden"
                  style={{ aspectRatio: "4/3", position: "relative" }}
                >
                  <Image
                    src={photo.src}
                    alt={`${photo.alt} in ${data.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 33vw, 20vw"
                  />
                </div>
              ))}
            </div>

            {/* Services */}
            <div>
              <h2 style={{ marginBottom: "1.25rem", fontSize: "1.75rem" }}>
                Services Available in {data.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cityServices.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="card flex items-center gap-3 transition-all hover:shadow-md"
                    style={{ textDecoration: "none" }}
                  >
                    <CheckCircle size={17} className="flex-shrink-0" style={{ color: "var(--brown-light)" }} />
                    <span className="font-semibold text-sm" style={{ color: "var(--navy)" }}>
                      {s.label}
                    </span>
                    <ArrowRight size={13} className="ml-auto flex-shrink-0" style={{ color: "var(--stone-light)" }} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Why Us */}
            <div>
              <h2 style={{ marginBottom: "1.25rem", fontSize: "1.75rem" }}>
                Why {data.name} Residents Choose Us
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {data.whyUs.map((item) => (
                  <div key={item.title} className="card">
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
            </div>

            {/* Reviews */}
            <div>
              <h2 style={{ marginBottom: "1.25rem", fontSize: "1.75rem" }}>
                What Customers Say
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {displayReviews.map((r) => (
                  <div key={r.name} className="card flex flex-col gap-3">
                    <div className="stars">★★★★★</div>
                    <blockquote
                      className="flex-1 leading-relaxed text-sm"
                      style={{ color: "var(--text-mid)" }}
                    >
                      &ldquo;{r.text}&rdquo;
                    </blockquote>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "var(--navy)" }}>{r.name}</p>
                      <p style={{ fontSize: "0.75rem", color: "var(--stone)" }}>{r.city} · {r.service}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 style={{ marginBottom: "1.25rem", fontSize: "1.75rem" }}>
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

            {/* CTA */}
            <div
              className="rounded-[var(--radius-lg)] p-6 text-center"
              style={{ background: "var(--navy)" }}
            >
              <h2 className="font-heading font-bold text-xl mb-2" style={{ color: "var(--text-warm)" }}>
                Ready for Same-Day Service in {data.name}?
              </h2>
              <p style={{ color: "rgba(237,234,228,0.7)", fontSize: "0.9rem", marginBottom: "1.25rem" }}>
                Call now or fill out the form — we respond within 30 minutes during business hours.
              </p>
              <a href={BUSINESS.phoneHref} className="btn-primary">
                <Phone size={16} /> Call {BUSINESS.phone}
              </a>
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
              <a href={BUSINESS.phoneHref} className="btn-primary w-full justify-center">
                <Phone size={16} /> {BUSINESS.phone}
              </a>
              <p style={{ fontSize: "0.78rem", color: "rgba(237,234,228,0.5)", marginTop: "0.75rem" }}>
                Licensed · Bonded · Insured · 7 Days a Week
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
