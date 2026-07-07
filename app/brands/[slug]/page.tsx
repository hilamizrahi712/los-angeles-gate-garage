import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ChevronRight } from "lucide-react";
import { BRANDS, getBrandBySlug } from "@/lib/brands-data";
import { BUSINESS } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

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
  return {
    title: brand.metaTitle,
    description: brand.metaDescription,
    alternates: { canonical: `/brands/${brand.slug}` },
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) notFound();

  return (
    <>
      {/* Hero */}
      <section className="py-20 section--dark">
        <div className="container-max max-w-3xl">
          {/* Logo */}
          <div
            className="rounded-[var(--radius-lg)] flex items-center justify-center mb-8"
            style={{ background: "rgba(255,255,255,0.06)", padding: "1.5rem 2rem", display: "inline-flex" }}
          >
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              width={180}
              height={64}
              style={{ objectFit: "contain", maxHeight: 64, width: "auto" }}
              unoptimized
            />
          </div>

          <span className="eyebrow">Brand Service Page</span>
          <h1 style={{ color: "var(--text-warm)", marginBottom: "0.75rem" }}>
            {brand.name} <em>Repair & Service</em>
          </h1>
          <p style={{ color: "rgba(237,234,228,0.8)", fontSize: "1.05rem", maxWidth: 600 }}>
            {brand.tagline}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href={BUSINESS.phoneHref} className="btn-primary">
              <Phone size={15} /> Call {BUSINESS.phone}
            </a>
            <Link href="/contact" className="btn-secondary">
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding" style={{ background: "var(--bg-base)" }}>
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left column — main content */}
            <div className="lg:col-span-2 flex flex-col gap-10">

              {/* Image placeholders */}
              <div className="grid grid-cols-2 gap-4">
                {[1, 2].map((n) => (
                  <div
                    key={n}
                    className="rounded-[var(--radius)] flex items-center justify-center"
                    style={{ aspectRatio: "4/3", background: "var(--bg-muted)", border: "2px dashed var(--line)" }}
                  >
                    <p style={{ color: "var(--stone)", fontSize: "0.8rem", textAlign: "center", padding: "0.5rem" }}>
                      Photo {n} — {brand.name} Work
                    </p>
                  </div>
                ))}
              </div>

              {/* Intro */}
              <div>
                <h2
                  className="font-heading font-bold"
                  style={{ fontSize: "1.4rem", color: "var(--navy)", marginBottom: "1rem" }}
                >
                  About {brand.name}
                </h2>
                <p style={{ color: "var(--text-soft)", lineHeight: 1.75, fontSize: "0.97rem" }}>
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
                  style={{ fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem" }}
                >
                  {brand.name} Services We Handle
                </h2>
                <ul className="flex flex-col gap-2.5">
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
              </div>

              {/* Common Models */}
              <div>
                <h2
                  className="font-heading font-bold"
                  style={{ fontSize: "1.25rem", color: "var(--navy)", marginBottom: "0.75rem" }}
                >
                  Common {brand.name} Models
                </h2>
                <div className="flex flex-wrap gap-2">
                  {brand.models.map((m, i) => (
                    <span
                      key={i}
                      className="rounded-full px-3 py-1"
                      style={{
                        background: "var(--bg-muted)",
                        border: "1px solid var(--line)",
                        fontSize: "0.82rem",
                        color: "var(--text-mid)",
                      }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* What Customers Should Know */}
              <div
                className="rounded-[var(--radius-lg)] p-6"
                style={{ background: "var(--bg-muted)", border: "1px solid var(--line)" }}
              >
                <h2
                  className="font-heading font-bold"
                  style={{ fontSize: "1.15rem", color: "var(--navy)", marginBottom: "0.75rem" }}
                >
                  What to Know About {brand.name}
                </h2>
                <p style={{ color: "var(--text-soft)", lineHeight: 1.75, fontSize: "0.92rem" }}>
                  {brand.customerInfo}
                </p>
              </div>

              {/* Why Us */}
              <div
                className="rounded-[var(--radius-lg)] p-6"
                style={{ background: "var(--navy)", color: "var(--text-warm)" }}
              >
                <h2
                  className="font-heading font-bold"
                  style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}
                >
                  Why Choose Us for {brand.name}?
                </h2>
                <p style={{ color: "rgba(237,234,228,0.8)", lineHeight: 1.75, fontSize: "0.92rem" }}>
                  {brand.whyUs}
                </p>
              </div>
            </div>

            {/* Right column — sidebar */}
            <aside className="flex flex-col gap-6">
              <ContactForm />

              {/* Quick links to other brands */}
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
          <h2 style={{ color: "var(--text-warm)", marginBottom: "0.75rem" }}>
            Need {brand.name} Service Today?
          </h2>
          <p style={{ color: "rgba(237,234,228,0.7)", marginBottom: "2rem", fontSize: "0.95rem" }}>
            We offer same-day service for most {brand.name} repairs. Call now and we&apos;ll
            have a technician at your gate or garage door within hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS.phoneHref} className="btn-primary">
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
