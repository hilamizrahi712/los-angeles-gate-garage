import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, Clock, Shield, Star } from "lucide-react";
import { SERVICES, getServiceBySlug } from "@/lib/services-data";
import { BUSINESS, SFV_CITIES } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: { title: service.metaTitle, description: service.metaDescription },
  };
}

// Map service slugs to real uploaded images — each service gets a unique photo
const SERVICE_IMAGES: Record<string, string> = {
  "gate-repair":                  "/images/services/iron-gate-1.jpeg",
  "automatic-gate-repair":        "/images/services/motor-wood.jpeg",
  "driveway-gate-repair":         "/images/services/gated-community.jpeg",
  "electric-gate-repair":         "/images/services/iron-gold-gate.jpeg",
  "gate-opener-repair":           "/images/services/swing-motor.jpeg",
  "iron-gate-repair":             "/images/services/estate-gate.jpeg",
  "commercial-gate-repair":       "/images/services/commercial-gate.jpeg",
  "gate-installation":            "/images/gallery/gate-3.jpeg",
  "garage-door-repair":           "/images/services/white-garage.jpeg",
  "garage-door-spring-repair":    "/images/services/walnut-garage.jpeg",
  "garage-door-opener-repair":    "/images/services/new-garage.jpeg",
  "garage-door-cable-repair":     "/images/gallery/commercial-1.jpeg",
  "garage-door-panel-repair":     "/images/services/garage-door-repair.jpeg",
  "emergency-garage-door-repair": "/images/services/whatsapp-photo-1.jpeg",
  "commercial-garage-door":       "/images/services/commercial-3.jpeg",
  "garage-door-installation":     "/images/services/black-wood-gate.jpeg",
};

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = SERVICES.filter((s) => service.relatedSlugs.includes(s.slug));
  const heroImg = SERVICE_IMAGES[slug] ?? "/images/services/black-iron-gate.jpeg";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
    provider: { "@type": "LocalBusiness", name: BUSINESS.name, telephone: BUSINESS.phone },
    areaServed: { "@type": "AdministrativeArea", name: "Los Angeles County, CA" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
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
      { "@type": "ListItem", position: 2, name: service.title, item: `${BUSINESS.domain}/services/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative flex flex-col justify-end overflow-hidden" style={{ minHeight: "50vh" }}>
        <Image
          src={heroImg}
          alt={service.heroH1}
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(11,28,46,0.96) 0%, rgba(11,28,46,0.6) 55%, rgba(11,28,46,0.25) 100%)" }}
        />
        {service.isEmergency && (
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
            <span
              className="font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full"
              style={{ background: "#B03025", color: "#fff" }}
            >
              24/7 Emergency Service
            </span>
          </div>
        )}
        <div className="relative z-10 container-max pb-12 pt-32">
          <div className="max-w-2xl">
            <span className="eyebrow" style={{ color: "rgba(196,133,90,0.9)" }}>
              {service.isEmergency ? "Emergency Response" : service.isInstallation ? "Installation" : "Repair Service"}
            </span>
            <h1 style={{ color: "var(--text-warm)", marginBottom: "0.75rem" }}>
              {service.heroH1}
            </h1>
            <p style={{ color: "rgba(237,234,228,0.82)", fontSize: "1.05rem", marginBottom: "1.5rem" }}>
              {service.heroSubtitle}
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
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="section-padding" style={{ background: "var(--bg-base)" }}>
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main Column */}
            <div className="lg:col-span-2 space-y-10">

              {/* Image placeholders — swap with real photos when available */}
              <div className="grid grid-cols-2 gap-4">
                {[1, 2].map((n) => (
                  <div
                    key={n}
                    className="rounded-[var(--radius)] overflow-hidden flex items-center justify-center"
                    style={{ aspectRatio: "4/3", background: "var(--bg-muted)", border: "2px dashed var(--line)" }}
                  >
                    <p style={{ color: "var(--stone)", fontSize: "0.8rem", textAlign: "center", padding: "0.5rem" }}>
                      Photo {n} — {service.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* Intro */}
              <div>
                {service.intro.split("\n\n").map((para, i) => (
                  <p key={i} className="leading-relaxed mb-4" style={{ color: "var(--text-mid)", fontSize: "1.02rem" }}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Features */}
              <div>
                <h2 style={{ marginBottom: "1.25rem", fontSize: "1.75rem" }}>
                  What We Do for {service.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {service.features.map((f, i) => (
                    <div key={f.title} className="card" style={{ borderTop: "3px solid var(--brown)" }}>
                      <p
                        className="font-heading font-bold mb-3"
                        style={{ fontSize: "1.5rem", color: "var(--brown-warm)", lineHeight: 1 }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3
                        className="font-heading font-semibold mb-1"
                        style={{ fontSize: "0.95rem", color: "var(--navy)" }}
                      >
                        {f.title}
                      </h3>
                      <p style={{ color: "var(--text-soft)", fontSize: "0.875rem" }}>{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* How It Works */}
              <div>
                <h2 style={{ marginBottom: "1.25rem", fontSize: "1.75rem" }}>How It Works</h2>
                <ol className="space-y-4">
                  {service.howItWorks.map((step, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span
                        className="flex-shrink-0 w-8 h-8 rounded-full font-bold flex items-center justify-center text-sm"
                        style={{ background: "var(--brown)", color: "var(--text-warm)" }}
                      >
                        {i + 1}
                      </span>
                      <p className="pt-1" style={{ color: "var(--text-mid)" }}>{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* FAQ */}
              <div>
                <h2 style={{ marginBottom: "1.25rem", fontSize: "1.75rem" }}>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, i) => (
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

              {/* Related Services */}
              {related.length > 0 && (
                <div>
                  <h2 style={{ marginBottom: "1rem", fontSize: "1.75rem" }}>Related Services</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/services/${r.slug}`}
                        className="card transition-all hover:shadow-md"
                        style={{ textDecoration: "none" }}
                      >
                        <h3
                          className="font-heading font-semibold mb-1"
                          style={{ fontSize: "0.95rem", color: "var(--navy)" }}
                        >
                          {r.title}
                        </h3>
                        <p style={{ color: "var(--text-soft)", fontSize: "0.85rem", marginBottom: "0.75rem" }}>
                          {r.heroSubtitle}
                        </p>
                        <span
                          className="inline-flex items-center gap-1 text-sm font-semibold"
                          style={{ color: "var(--brown)" }}
                        >
                          Learn more <ArrowRight size={12} />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Service Areas */}
              <div>
                <h2 style={{ marginBottom: "0.75rem", fontSize: "1.75rem" }}>Service Areas</h2>
                <p style={{ color: "var(--text-soft)", fontSize: "0.9rem", marginBottom: "1rem" }}>
                  We provide {service.title.toLowerCase()} across greater Los Angeles:
                </p>
                <div className="flex flex-wrap gap-2">
                  {SFV_CITIES.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/areas/${c.slug}`}
                      className="px-3 py-1 rounded-full text-sm transition-colors"
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
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Same-Day CTA box */}
              <div
                className="rounded-[var(--radius-lg)] overflow-hidden"
                style={{ border: "1px solid var(--line)" }}
              >
                <div
                  className="p-5 text-center"
                  style={{ background: "var(--navy)" }}
                >
                  <p
                    className="font-heading font-bold mb-1"
                    style={{ fontSize: "1.1rem", color: "var(--text-warm)" }}
                  >
                    Same-Day Service
                  </p>
                  <p style={{ color: "rgba(237,234,228,0.65)", fontSize: "0.82rem", marginBottom: "1rem" }}>
                    Call now — we confirm your appointment immediately.
                  </p>
                  <a href={BUSINESS.phoneHref} className="btn-primary w-full justify-center">
                    <Phone size={16} /> {BUSINESS.phone}
                  </a>
                </div>
                <div
                  className="p-4"
                  style={{ background: "var(--bg-card)", borderTop: "1px solid var(--line)" }}
                >
                  <div className="space-y-2.5">
                    {[
                      { Icon: Shield, label: "Licensed, Bonded & Insured" },
                      { Icon: Clock, label: "7 Days a Week, Including Holidays" },
                      { Icon: Star, label: "Upfront Pricing — No Surprises" },
                    ].map(({ Icon, label }) => (
                      <div key={label} className="flex items-center gap-2">
                        <Icon size={14} className="flex-shrink-0" style={{ color: "var(--brown-light)" }} />
                        <span style={{ fontSize: "0.82rem", color: "var(--text-mid)" }}>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
