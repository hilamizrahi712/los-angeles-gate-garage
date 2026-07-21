import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { BUSINESS } from "@/lib/constants";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

// TODO: Set NEXT_PUBLIC_GSC_VERIFICATION in Cloudflare Pages → Settings → Environment Variables
// once realgaterepair.com is connected and verified in Google Search Console.
const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.domain),
  title: {
    default: `${BUSINESS.name} — Gate & Garage Door Repair`,
    // Passthrough — every page title already includes "| Real Gate & Garage Door"
    template: "%s",
  },
  description:
    "Expert gate repair and garage door repair in Los Angeles, CA. Same-day service, 24/7 emergency, free estimates. Call (818) 915-5715.",
  keywords: ["gate repair Los Angeles", "garage door repair Los Angeles", "gate repair near me"],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: BUSINESS.name,
    images: [{ url: "/images/og/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  ...(gscVerification ? { verification: { google: gscVerification } } : {}),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS.name,
  description: "Expert gate and garage door repair, installation, and 24/7 emergency service across greater Los Angeles, CA",
  url: BUSINESS.domain,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Los Angeles County",
    addressRegion: "CA",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 34.1975, longitude: -118.4937 },
  areaServed: [
    "Woodland Hills", "Sherman Oaks", "Encino", "Calabasas", "Tarzana",
    "Chatsworth", "Van Nuys", "Reseda", "Northridge", "North Hollywood",
    "Studio City", "Burbank", "Glendale", "Canoga Park",
    "Los Angeles", "Beverly Hills", "West Hollywood", "Santa Monica",
    "Malibu", "Pasadena", "Culver City", "Silver Lake", "Thousand Oaks", "Simi Valley",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"],
    opens: "07:00",
    closes: "22:00",
  },
  priceRange: "$$",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${BUSINESS.gaId}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${BUSINESS.gaId}');`,
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen pb-14 lg:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
