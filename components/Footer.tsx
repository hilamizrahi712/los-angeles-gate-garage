import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { BUSINESS, SFV_CITIES, EXTENDED_CITIES } from "@/lib/constants";

const gateServiceLinks = [
  { href: "/services/gate-repair", label: "Gate Repair" },
  { href: "/services/automatic-gate-repair", label: "Automatic Gate Repair" },
  { href: "/services/electric-gate-repair", label: "Electric Gate Repair" },
  { href: "/services/gate-opener-repair", label: "Gate Opener Repair" },
  { href: "/services/iron-gate-repair", label: "Iron Gate Repair" },
  { href: "/services/commercial-gate-repair", label: "Commercial Gate" },
  { href: "/services/gate-installation", label: "Gate Installation" },
];

const garageDoorLinks = [
  { href: "/services/garage-door-repair", label: "Garage Door Repair" },
  { href: "/services/garage-door-spring-repair", label: "Spring Repair" },
  { href: "/services/garage-door-opener-repair", label: "Opener Repair" },
  { href: "/services/garage-door-cable-repair", label: "Cable Repair" },
  { href: "/services/emergency-garage-door-repair", label: "Emergency Service" },
  { href: "/services/commercial-garage-door", label: "Commercial Doors" },
  { href: "/services/garage-door-installation", label: "Door Installation" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/reviews", label: "Customer Reviews" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/tips", label: "Tips" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer-dark">
      {/* CTA Strip */}
      <div className="footer-cta-strip">
        <div className="container-max flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="footer-cta-title">Ready for Same-Day Service?</p>
            <p className="footer-cta-sub">Gates · Garage Doors · 24/7 Emergency · Free Estimates</p>
          </div>
          <a href={BUSINESS.phoneHref} className="btn-gold">
            <Phone size={18} />
            Call {BUSINESS.phone}
          </a>
        </div>
      </div>

      {/* Main Grid */}
      <div className="container-max py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Column */}
        <div>
          <p className="footer-col-brand">{BUSINESS.name}</p>
          <p className="footer-tagline">{BUSINESS.tagline}</p>
          <div className="space-y-2 footer-contact">
            <a href={BUSINESS.phoneHref} className="footer-link flex items-center gap-2">
              <Phone size={13} /> {BUSINESS.phone}
            </a>
            <a href={`mailto:${BUSINESS.email}`} className="footer-link flex items-center gap-2">
              <Mail size={13} /> {BUSINESS.email}
            </a>
            <div className="footer-link flex items-start gap-2">
              <MapPin size={13} className="mt-0.5 flex-shrink-0" />
              <span>{BUSINESS.address}</span>
            </div>
          </div>
          <p className="footer-tagline mt-4" style={{ lineHeight: 1.65 }}>
            Hours: Sun–Fri 7 AM–10 PM<br />
            Saturday: Closed · Emergency: 24/7
          </p>
          <p className="footer-tagline mt-2">Licensed · Bonded · Insured</p>
          <a href={BUSINESS.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="footer-link inline-block mt-2">
            ★ Read Our Google Reviews
          </a>
        </div>

        {/* Gate Services */}
        <div>
          <p className="footer-col-heading">Gate Services</p>
          <ul className="space-y-2.5">
            {gateServiceLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="footer-link text-sm">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Garage Door + Company */}
        <div>
          <p className="footer-col-heading">Garage Door Services</p>
          <ul className="space-y-2.5 mb-6">
            {garageDoorLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="footer-link text-sm">{l.label}</Link>
              </li>
            ))}
          </ul>
          <p className="footer-col-heading">Company</p>
          <ul className="space-y-2.5">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="footer-link text-sm">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <p className="footer-col-heading">Service Areas</p>
          <ul className="space-y-2 columns-2">
            {SFV_CITIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/areas/${c.slug}`} className="footer-link text-sm">{c.name}</Link>
              </li>
            ))}
          </ul>
          <Link href="/service-areas" className="footer-more-link">
            + {EXTENDED_CITIES.length} more cities →
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved. · Licensed · Bonded · Insured</span>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="footer-link">Privacy Policy</Link>
            <Link href="/sitemap.xml" className="footer-link">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
