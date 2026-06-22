"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  _honeypot: string;
}

const SERVICES = [
  "Gate Repair",
  "Gate Installation",
  "Garage Door Repair",
  "Garage Door Installation",
  "Emergency Service",
];

const FORMSPREE_URL = "https://formspree.io/f/mykaqjvo";

const inputStyle = {
  width: "100%",
  border: "1px solid var(--line-strong)",
  borderRadius: "var(--radius)",
  padding: "0.6rem 0.875rem",
  fontSize: "0.9rem",
  color: "var(--text-mid)",
  background: "white",
  outline: "none",
  fontFamily: "inherit",
};

const labelStyle = {
  display: "block",
  fontSize: "0.8rem",
  fontWeight: 600,
  color: "var(--text-mid)",
  marginBottom: "0.35rem",
  fontFamily: "inherit",
};

export default function ContactForm({ className = "" }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Honeypot check
    if (data._honeypot) return;

    setError("");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email,
          service: data.service,
          message: data.message,
          _subject: `New estimate request — ${data.service} — ${data.name}`,
          _replyto: data.email,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const body = await res.json().catch(() => ({}));
        setError(body?.error ?? "Submission failed. Please call us directly.");
      }
    } catch {
      setError("Network error. Please call us directly at (818) 915-5715.");
    }
  };

  if (submitted) {
    return (
      <div className={`card flex flex-col items-center text-center py-10 gap-4 ${className}`}>
        <CheckCircle size={44} style={{ color: "var(--success)" }} />
        <h3
          className="font-heading font-bold"
          style={{ fontSize: "1.3rem", color: "var(--navy)" }}
        >
          Request Received!
        </h3>
        <p style={{ color: "var(--text-soft)", maxWidth: 300, fontSize: "0.92rem" }}>
          We&apos;ll call you back within 30 minutes during business hours. For emergencies,
          call us directly at{" "}
          <a href="tel:+18189155715" style={{ color: "var(--brown)", fontWeight: 600 }}>
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
      className={`card space-y-4 ${className}`}
      noValidate
    >
      <div>
        <h3
          className="font-heading font-bold"
          style={{ fontSize: "1.1rem", color: "var(--navy)", marginBottom: "0.25rem" }}
        >
          Request a Free Estimate
        </h3>
        <p style={{ fontSize: "0.82rem", color: "var(--stone)" }}>
          We call back within 30 minutes during business hours.
        </p>
      </div>

      {/* Honeypot — hidden from humans */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: "none" }}
        {...register("_honeypot")}
      />

      {/* Name */}
      <div>
        <label style={labelStyle}>Your Name *</label>
        <input
          type="text"
          placeholder="John Smith"
          style={{
            ...inputStyle,
            borderColor: errors.name ? "var(--error)" : "var(--line-strong)",
          }}
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p style={{ color: "var(--error)", fontSize: "0.75rem", marginTop: "0.2rem" }}>
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Phone + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>Phone Number *</label>
          <input
            type="tel"
            placeholder="(818) 555-0100"
            style={{
              ...inputStyle,
              borderColor: errors.phone ? "var(--error)" : "var(--line-strong)",
            }}
            {...register("phone", {
              required: "Phone is required",
              pattern: { value: /^[\d\s\-\(\)+]{7,}$/, message: "Enter a valid phone number" },
            })}
          />
          {errors.phone && (
            <p style={{ color: "var(--error)", fontSize: "0.75rem", marginTop: "0.2rem" }}>
              {errors.phone.message}
            </p>
          )}
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            placeholder="john@email.com"
            style={inputStyle}
            {...register("email")}
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label style={labelStyle}>Service Needed *</label>
        <select
          style={{
            ...inputStyle,
            borderColor: errors.service ? "var(--error)" : "var(--line-strong)",
          }}
          {...register("service", { required: "Please select a service" })}
        >
          <option value="">Select service…</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.service && (
          <p style={{ color: "var(--error)", fontSize: "0.75rem", marginTop: "0.2rem" }}>
            {errors.service.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label style={labelStyle}>Describe Your Issue *</label>
        <textarea
          rows={4}
          placeholder="e.g. My electric gate stopped opening this morning…"
          style={{
            ...inputStyle,
            resize: "none",
            borderColor: errors.message ? "var(--error)" : "var(--line-strong)",
          }}
          {...register("message", { required: "Please describe your issue", minLength: { value: 10, message: "Please add a bit more detail" } })}
        />
        {errors.message && (
          <p style={{ color: "var(--error)", fontSize: "0.75rem", marginTop: "0.2rem" }}>
            {errors.message.message}
          </p>
        )}
      </div>

      {error && (
        <p
          className="rounded p-3 text-sm"
          style={{ color: "var(--error)", background: "#FFF0EE", border: "1px solid #F5C6C2" }}
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full justify-center"
        style={{ fontSize: "0.95rem", opacity: isSubmitting ? 0.65 : 1 }}
      >
        <Send size={16} />
        {isSubmitting ? "Sending…" : "Get My Free Estimate"}
      </button>

      <p style={{ fontSize: "0.73rem", color: "var(--stone-light)", textAlign: "center" }}>
        We respect your privacy. No spam, ever.
      </p>
    </form>
  );
}
