"use client";

import { useState } from "react";
import { submitEnquiry } from "@/src/lib/enquiry";

const fieldClass =
  "w-full rounded-[14px] border border-white/15 bg-white/10 px-3 text-sm text-white scheme-dark outline-none transition placeholder:text-white/40 focus:border-accent focus:ring-2 focus:ring-accent/30";

export function ContactForm({
  service,
  budgets,
  timelines,
  submitLabel,
}: {
  service: string;
  budgets: string[];
  timelines: string[];
  submitLabel: string;
}) {
  const [error, setError] = useState("");

  async function onSubmit(formData: FormData) {
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const budget = String(formData.get("budget") ?? "").trim();
    const timeline = String(formData.get("timeline") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setError("Name, email, and a short message are required.");
      return;
    }

    setError("");
    await submitEnquiry({ service, name, email, company, budget, timeline, message });
  }

  return (
    <form id="enquiry" action={onSubmit} className="grid scroll-mt-28 gap-3">
      <label className="grid gap-1.5 text-sm font-semibold text-white">
        Name
        <input name="name" autoComplete="name" required className={`h-11 ${fieldClass}`} />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold text-white">
        Email
        <input name="email" type="email" autoComplete="email" required className={`h-11 ${fieldClass}`} />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold text-white">
        Company
        <input name="company" autoComplete="organization" className={`h-11 ${fieldClass}`} />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold text-white">
        Budget
        <select name="budget" defaultValue={budgets[0] ?? ""} className={`h-11 ${fieldClass}`}>
          {budgets.map((budget) => (
            <option key={budget}>{budget}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-semibold text-white">
        Timeline
        <select name="timeline" defaultValue={timelines[0] ?? ""} className={`h-11 ${fieldClass}`}>
          {timelines.map((timeline) => (
            <option key={timeline}>{timeline}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-semibold text-white">
        Message
        <textarea name="message" required rows={4} className={`py-3 ${fieldClass}`} />
      </label>
      {error ? <p className="text-sm text-red-200">{error}</p> : null}
      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center rounded-[14px] bg-accent text-[15px] font-semibold text-white shadow-[0_12px_28px_-12px_rgba(34,197,94,0.95)] transition hover:bg-[#1cb253]"
      >
        {submitLabel}
      </button>
    </form>
  );
}
