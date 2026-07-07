"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  address: string;
  problem: string;
  _honeypot: string;
}

const FORMSPREE_URL = "https://formspree.io/f/mykaqjvo";

const wrapStyle: React.CSSProperties = {
  background: "var(--navy)",
  borderRadius: "50% 50% 0 0 / 50px 50px 0 0",
  padding: "2.75rem 1.75rem 2rem",
  overflow: "hidden",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "1px solid rgba(255,255,255,0.2)",
  borderRadius: "var(--radius)",
  padding: "0.65rem 0.875rem",
  fontSize: "0.9rem",
  color: "#fff",
  background: "rgba(255,255,255,0.1)",
  outline: "none",
  fontFamily: "inherit",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.75rem",
  fontWeight: 600,
  color: "rgba(237,234,228,0.65)",
  marginBottom: "0.3rem",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  fontFamily: "inherit",
};

export default function ContactForm({ className = "" }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    if (data._honeypot) return;
    setError("");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          address: data.address,
          problem: data.problem,
          _subject: `New estimate request — ${data.name}`,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const body = await res.json().catch(() => ({}));
        setError(body?.error ?? "Submission failed. Please call us directly.");
      }
    } catch {
      setError("Network error. Please call us at (818) 915-5715.");
    }
  };

  if (submitted) {
    return (
      <div className={`flex flex-col items-center text-center gap-4 ${className}`} style={{ ...wrapStyle, paddingTop: "3rem", paddingBottom: "3rem" }}>
        <CheckCircle size={44} style={{ color: "var(--brown-warm)" }} />
        <h3 className="font-heading font-bold" style={{ fontSize: "1.3rem", color: "var(--text-warm)" }}>
          Request Received!
        </h3>
        <p style={{ color: "rgba(237,234,228,0.7)", maxWidth: 280, fontSize: "0.92rem" }}>
          We&apos;ll call you back within 30 minutes during business hours. For emergencies,
          call{" "}
          <a href="tel:+18189155715" style={{ color: "var(--brown-warm)", fontWeight: 600 }}>
            (818) 915-5715
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`space-y-4 ${className}`}
      style={wrapStyle}
      noValidate
    >
      <div className="mb-2">
        <h3 className="font-heading font-bold" style={{ fontSize: "1.15rem", color: "var(--text-warm)", marginBottom: "0.2rem" }}>
          Request a Free Estimate
        </h3>
        <p style={{ fontSize: "0.82rem", color: "rgba(237,234,228,0.55)" }}>
          We call back within 30 minutes during business hours.
        </p>
      </div>

      {/* Honeypot — hidden from humans */}
      <input type="text" tabIndex={-1} autoComplete="off" style={{ display: "none" }} {...register("_honeypot")} />

      {/* Name */}
      <div>
        <label style={labelStyle}>Your Name *</label>
        <input
          type="text"
          placeholder="John Smith"
          style={{ ...inputStyle, borderColor: errors.name ? "#f87171" : "rgba(255,255,255,0.2)" }}
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p style={{ color: "#f87171", fontSize: "0.75rem", marginTop: "0.2rem" }}>{errors.name.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label style={labelStyle}>Phone Number *</label>
        <input
          type="tel"
          placeholder="(818) 555-0100"
          style={{ ...inputStyle, borderColor: errors.phone ? "#f87171" : "rgba(255,255,255,0.2)" }}
          {...register("phone", {
            required: "Phone is required",
            pattern: { value: /^[\d\s\-\(\)+]{7,}$/, message: "Enter a valid phone number" },
          })}
        />
        {errors.phone && <p style={{ color: "#f87171", fontSize: "0.75rem", marginTop: "0.2rem" }}>{errors.phone.message}</p>}
      </div>

      {/* Address */}
      <div>
        <label style={labelStyle}>Property Address</label>
        <input
          type="text"
          placeholder="123 Main St, Los Angeles, CA"
          style={inputStyle}
          {...register("address")}
        />
      </div>

      {/* Problem Description */}
      <div>
        <label style={labelStyle}>Problem Description *</label>
        <textarea
          rows={4}
          placeholder="e.g. My electric gate stopped opening this morning…"
          style={{ ...inputStyle, resize: "none", borderColor: errors.problem ? "#f87171" : "rgba(255,255,255,0.2)" }}
          {...register("problem", {
            required: "Please describe your problem",
            minLength: { value: 10, message: "Please add a bit more detail" },
          })}
        />
        {errors.problem && <p style={{ color: "#f87171", fontSize: "0.75rem", marginTop: "0.2rem" }}>{errors.problem.message}</p>}
      </div>

      {error && (
        <p className="rounded p-3 text-sm" style={{ color: "#f87171", background: "rgba(248,113,113,0.12)", border: "1px solid rgba(248,113,113,0.25)" }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full font-semibold flex items-center justify-center gap-2 transition-opacity"
        style={{
          background: "var(--brown)",
          color: "#fff",
          border: "none",
          borderRadius: "999px",
          padding: "0.8rem 1.5rem",
          fontSize: "0.95rem",
          cursor: isSubmitting ? "not-allowed" : "pointer",
          opacity: isSubmitting ? 0.65 : 1,
          fontFamily: "inherit",
        }}
      >
        <Send size={16} />
        {isSubmitting ? "Sending…" : "Get My Free Estimate"}
      </button>

      <p style={{ fontSize: "0.73rem", color: "rgba(237,234,228,0.35)", textAlign: "center" }}>
        We respect your privacy. No spam, ever.
      </p>
    </form>
  );
}
