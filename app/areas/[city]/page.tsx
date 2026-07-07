import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import { CITIES, getCityBySlug } from "@/lib/cities-data";
import { BUSINESS, REVIEWS } from "@/lib/constants";
import { BRANDS } from "@/lib/brands-data";
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

const CITY_PHOTO_STRIP = [
  { src: "/images/gallery/gate-4.jpeg", alt: "Iron gate repair and service" },
  { src: "/images/gallery/gate-5.jpeg", alt: "Gate installation and service" },
  { src: "/images/gallery/gate-6.jpeg", alt: "Custom gate repair service" },
];

// Top brands shown on city pages
const CITY_BRANDS = BRANDS.slice(0, 8);

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const data = getCityBySlug(city);
  if (!data) notFound();

  const cityReviews = REVIEWS.filter((r) => r.city === data.name).slice(0, 2);
  const displayReviews = cityReviews.length > 0 ? cityReviews : REVIEWS.slice(0, 2);

  const cityIndex = CITIES.findIndex((c) => c.slug === city);
  const heroImg = CITY_HERO_POOL[cityIndex % CITY_HERO_POOL.length];

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(data.name + ", CA")}&output=embed&z=12`;

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
            {data.name}, CA
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

      {/* GOLD TRUST BAR */}
      <div style={{ background: "var(--brown)", padding: "0.65rem 1rem" }}>
        <div className="container-max">
          <div
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm font-semibold"
            style={{ color: "#fff", letterSpacing: "0.02em" }}
          >
            <span>✦ Serving {data.name}</span>
            <span style={{ opacity: 0.45 }}>·</span>
            <span>Same-Day Service</span>
            <span style={{ opacity: 0.45 }}>·</span>
            <span>5★ Rated</span>
            <span style={{ opacity: 0.45 }}>·</span>
            <span>Licensed &amp; Insured</span>
            <span style={{ opacity: 0.45 }}>·</span>
            <span>Free Estimates</span>
          </div>
        </div>
      </div>

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

            {/* Photo strip */}
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
              <h2
                style={{
                  marginBottom: "1.25rem",
                  fontSize: "1.75rem",
                  borderLeft: "4px solid var(--brown)",
                  paddingLeft: "0.75rem",
                }}
              >
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

            {/* Brands strip */}
            <div>
              <h2
                style={{
                  marginBottom: "1rem",
                  fontSize: "1.5rem",
                  borderLeft: "4px solid var(--brown)",
                  paddingLeft: "0.75rem",
                }}
              >
                Brands We Service in {data.name}
              </h2>
              <div
                className="rounded-[var(--radius-lg)] p-5"
                style={{ background: "var(--bg-muted)", border: "1px solid var(--line)" }}
              >
                <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
                  {CITY_BRANDS.map((brand) => (
                    <Link
                      key={brand.slug}
                      href={`/brands/${brand.slug}`}
                      className="flex items-center justify-center rounded-[var(--radius)] p-2 transition-opacity hover:opacity-70"
                      style={{ background: "var(--bg-card)", border: "1px solid var(--line)" }}
                      title={brand.name}
                    >
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={90}
                        height={32}
                        style={{ objectFit: "contain", maxHeight: 32, width: "auto" }}
                        unoptimized
                      />
                    </Link>
                  ))}
                </div>
                <p style={{ textAlign: "center", marginTop: "0.75rem", fontSize: "0.78rem", color: "var(--stone)" }}>
                  + all other major brands &mdash;{" "}
                  <Link href="/brands" style={{ color: "var(--brown-warm)", textDecoration: "none" }}>
                    see all brands →
                  </Link>
                </p>
              </div>
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

            {/* Google Map */}
            <div
              className="rounded-[var(--radius-lg)] overflow-hidden"
              style={{ border: "2px solid var(--brown-warm)" }}
            >
              <div
                className="px-4 py-2.5 flex items-center gap-2"
                style={{ background: "var(--brown)", color: "#fff" }}
              >
                <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                  📍 Serving {data.name}, CA
                </span>
              </div>
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
          </div>
        </div>
      </section>
    </>
  );
}
