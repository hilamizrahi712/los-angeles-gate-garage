"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const LOGOS = [
  "/images/brands/logo-1.png",
  "/images/brands/logo-2.png",
  "/images/brands/logo-3.png",
  "/images/brands/logo-4.png",
  "/images/brands/logo-5.png",
  "/images/brands/logo-6.png",
  "/images/brands/logo-7.png",
  "/images/brands/logo-8.png",
  "/images/brands/logo-9.png",
  "/images/brands/logo-10.png",
  "/images/brands/logo-11.png",
];

export default function BrandsMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const halfRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const getHalf = () => { halfRef.current = track.scrollWidth / 2; };

    const tick = () => {
      offsetRef.current += 0.5;
      if (halfRef.current > 0 && offsetRef.current >= halfRef.current) {
        offsetRef.current = 0;
      }
      track.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    const start = () => { getHalf(); rafRef.current = requestAnimationFrame(tick); };

    if (document.readyState === "complete") {
      start();
    } else {
      window.addEventListener("load", start, { once: true });
    }

    window.addEventListener("resize", getHalf, { passive: true });

    const onTouchStart = (e: TouchEvent) => e.preventDefault();
    track.addEventListener("touchstart", onTouchStart, { passive: false });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", getHalf);
      track.removeEventListener("touchstart", onTouchStart);
    };
  }, []);

  // Duplicate the set for seamless infinite loop
  const items = [...LOGOS, ...LOGOS];

  return (
    <section className="brands-bar">
      <div className="brands-head">
        <span className="eyebrow">Brands We Service</span>
        <h2>Every Major Manufacturer. <em>Every Model.</em></h2>
        <p>We work on them all — from LiftMaster to Viking, Genie to DoorKing.</p>
      </div>
      <div className="brands-marquee-wrap" aria-hidden="true">
        <div className="brands-marquee-track" ref={trackRef}>
          {items.map((src, i) => (
            <div
              key={i}
              style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <Image
                src={src}
                alt={`Brand logo ${(i % LOGOS.length) + 1}`}
                width={120}
                height={44}
                style={{ objectFit: "contain", height: 44, width: "auto", maxWidth: 120 }}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
