import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Real Gate & Garage Door",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max max-w-3xl">
        <h1 className="text-primary mb-6">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: January 1, 2025</p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
          <p>
            {BUSINESS.name} (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) operates this website. This Privacy Policy explains how we collect, use, and protect your information when you use our website or contact us for service.
          </p>

          <h2 className="text-primary">Information We Collect</h2>
          <p>We collect information you provide directly, including your name, phone number, email address, service address, and description of your service need when you submit our contact form.</p>

          <h2 className="text-primary">How We Use Your Information</h2>
          <p>We use your information solely to respond to your service inquiry, schedule appointments, and follow up on completed service. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

          <h2 className="text-primary">Analytics</h2>
          <p>We use Google Analytics 4 to understand how visitors use our website. This data is aggregated and anonymized. You can opt out via Google&apos;s browser add-on.</p>

          <h2 className="text-primary">Contact</h2>
          <p>Questions about this policy? Contact us at <a href={`mailto:${BUSINESS.email}`} className="text-accent">{BUSINESS.email}</a>.</p>
        </div>
      </div>
    </section>
  );
}
