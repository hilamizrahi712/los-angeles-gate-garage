import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  aspect?: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
}

export default function ArchImage({ src, alt, aspect = "3/4", sizes, className = "", priority }: Props) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: aspect,
        borderRadius: "110px 110px 0 0",
        border: "2px solid var(--brown-warm)",
      }}
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} priority={priority} />
      {/* Iron bars — top of the arch only, photo stays visible through the gaps */}
      <div
        className="absolute inset-x-0 top-0 flex justify-center gap-[7%]"
        style={{ height: "32%", pointerEvents: "none" }}
        aria-hidden="true"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} style={{ width: 2, height: "100%", background: "rgba(196,133,90,0.45)" }} />
        ))}
      </div>
    </div>
  );
}
