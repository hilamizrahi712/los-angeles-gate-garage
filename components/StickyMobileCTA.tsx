"use client";

import Link from "next/link";
import { Phone, MessageSquare, ClipboardList } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function StickyMobileCTA() {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-2"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={BUSINESS.phoneHref}
        className="flex flex-col items-center justify-center py-3 gap-1"
        style={{ background: "var(--brown)", color: "var(--text-warm)" }}
      >
        <Phone size={20} />
        <span className="text-xs font-semibold">Call Now</span>
      </a>
      <Link
        href="/contact"
        className="flex flex-col items-center justify-center py-3 gap-1"
        style={{ background: "var(--navy)", color: "var(--text-warm)" }}
      >
        <ClipboardList size={20} />
        <span className="text-xs font-semibold">Free Estimate</span>
      </Link>
    </div>
  );
}
