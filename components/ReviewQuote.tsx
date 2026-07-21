interface Props {
  review: { name: string; city: string; service: string; text: string };
  className?: string;
}

export default function ReviewQuote({ review, className = "" }: Props) {
  return (
    <div
      className={className}
      style={{
        background: "var(--navy)",
        borderLeft: "6px solid #C9A84C",
        borderRadius: "var(--radius-lg)",
        padding: "1.5rem",
      }}
    >
      <div className="stars text-lg mb-2">★★★★★</div>
      <blockquote
        className="font-heading italic leading-relaxed mb-3"
        style={{ color: "rgba(237,234,228,0.9)", fontSize: "1rem" }}
      >
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <p className="font-semibold text-sm" style={{ color: "var(--text-warm)" }}>{review.name}</p>
      <p style={{ fontSize: "0.78rem", color: "rgba(237,234,228,0.5)" }}>{review.city} · {review.service}</p>
    </div>
  );
}
