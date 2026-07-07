import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { BRANDS } from "@/lib/brands-data";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gate & Garage Door Brands We Service | Real Gate & Garage Door",
  description:
    "We repair and service all major gate operator and garage door brands — LiftMaster, Viking, Genie, DoorKing, Chamberlain, and more. Licensed technicians in Los Angeles.",
  alternates: { canonical: "/brands" },
};

const typeLabel: Record<string, string> = {
  gate: "Gate Operator",
  "garage-door": "Garage Door",
  both: "Gate & Garage Door",
  "access-control": "Access Control",
};

export default function BrandsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 section--dark">
        <div className="container-max max-w-2xl">
          <span className="eyebrow">Brands We Service</span>
          <h1 style={{ color: "var(--text-warm)", marginBottom: "1rem" }}>
            Every Major Brand. <em>Expert Repair.</em>
          </h1>
          <p style={{ color: "rgba(237,234,228,0.75)", fontSize: "1.05rem" }}>
            We stock parts and carry hands-on experience for every leading gate
            operator and garage door manufacturer. Click any brand to see the
            specific services, models, and what our customers should know.
          </p>
        </div>
      </section>

      {/* Brand Grid */}
      <section className="section-padding" style={{ background: "var(--bg-base)" }}>
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRANDS.map((brand) => (
              <Link
                key={brand.slug}
                href={`/brands/${brand.slug}`}
                className="card flex flex-col gap-4 transition-all duration-200 hover:shadow-md"
                style={{ textDecoration: "none" }}
              >
                {/* Logo area */}
                <div
                  className="flex items-center justify-center rounded-[var(--radius)]"
                  style={{ height: 80, background: "var(--bg-muted)", padding: "1rem" }}
                >
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={160}
                    height={56}
                    style={{ objectFit: "contain", maxHeight: 56, width: "auto" }}
                    unoptimized
                  />
                </div>

                {/* Info */}
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--brown)",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {typeLabel[brand.type]}
                  </span>
                  <h2
                    className="font-heading font-bold"
                    style={{ fontSize: "1.15rem", color: "var(--navy)", marginBottom: "0.35rem" }}
                  >
                    {brand.name}
                  </h2>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-soft)", lineHeight: 1.5 }}>
                    {brand.tagline}
                  </p>
                </div>

                <span
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "var(--brown-warm)",
                    marginTop: "auto",
                  }}
                >
                  View Services →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section--dark">
        <div className="container-max max-w-2xl text-center">
          <h2 style={{ color: "var(--text-warm)", marginBottom: "0.75rem" }}>
            Not Sure Which Brand You Have?
          </h2>
          <p style={{ color: "rgba(237,234,228,0.7)", marginBottom: "2rem", fontSize: "0.95rem" }}>
            That&apos;s fine — we&apos;ll identify your system on arrival. Call us and describe
            what&apos;s happening, and we&apos;ll send the right technician.
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
      </section>
    </>
  );
}
