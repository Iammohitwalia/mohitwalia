"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { submitContactEnquiry } from "@/src/lib/contact-enquiry";
import type { ContactEnquiry } from "@/src/lib/contact-enquiry";
import { contactBudgets, contactServices, contactTimelines } from "@/src/lib/contact-page";

const fieldClass =
  "w-full rounded-[14px] border border-white/15 bg-white/10 px-3 text-sm text-white scheme-dark outline-none transition placeholder:text-white/40 focus:border-accent focus:ring-2 focus:ring-accent/30";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormState extends ContactEnquiry {
  agree: boolean;
}

const emptyForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  timeline: "",
  message: "",
  agree: false,
};

function validate(values: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!values.firstName.trim()) errors.firstName = "Enter your first name.";
  if (!values.lastName.trim()) errors.lastName = "Enter your last name.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Enter a valid email address.";
  if (!values.service) errors.service = "Choose a service.";
  if (!values.budget) errors.budget = "Choose a budget.";
  if (!values.timeline) errors.timeline = "Choose a timeline.";
  if (!values.message.trim()) errors.message = "Tell me a little about the project.";
  if (!values.agree) errors.agree = "Confirm that I can contact you about this enquiry.";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  function update<Key extends keyof FormState>(key: Key, value: FormState[Key]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    if (status === "error" || status === "success") setStatus("idle");
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("loading");
    await new Promise((resolve) => window.setTimeout(resolve, 450));
    const result = await submitContactEnquiry({
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      email: values.email.trim(),
      company: values.company.trim(),
      service: values.service,
      budget: values.budget,
      timeline: values.timeline,
      message: values.message.trim(),
    });
    setStatus(result.ok ? "success" : "error");
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-[24px] shadow-[0_28px_50px_-18px_rgba(15,23,42,0.55)]"
    >
    <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0B1220] p-5 text-white sm:p-8">
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-48 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.28),transparent_68%)]"
        aria-hidden="true"
      />
      <div className="relative">
      <h2 className="text-2xl font-black tracking-[-0.03em] text-white">Tell me about the project</h2>
      <p className="mt-2 text-sm leading-6 text-white/70">
        The form opens WhatsApp with your note filled in. You still send the message.
      </p>

      {Object.keys(errors).length > 0 ? (
        <p className="mt-5 rounded-2xl bg-red-500/15 px-4 py-3 text-sm text-red-100" role="alert">
          Check the highlighted fields.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-5 rounded-2xl bg-red-500/15 px-4 py-3 text-sm text-red-100" role="alert">
          WhatsApp could not open. Allow pop-ups for this site, then submit again.
        </p>
      ) : null}
      {status === "success" ? (
        <p className="mt-5 rounded-2xl bg-white/10 px-4 py-3 text-sm text-white" role="status">
          WhatsApp is open with your enquiry. Send the message there to reach me.
        </p>
      ) : null}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="First name" error={errors.firstName}>
          <input
            value={values.firstName}
            autoComplete="given-name"
            aria-invalid={Boolean(errors.firstName)}
            onChange={(event) => update("firstName", event.target.value)}
            className={`h-11 ${fieldClass} ${errors.firstName ? "border-red-400" : ""}`}
          />
        </Field>
        <Field label="Last name" error={errors.lastName}>
          <input
            value={values.lastName}
            autoComplete="family-name"
            aria-invalid={Boolean(errors.lastName)}
            onChange={(event) => update("lastName", event.target.value)}
            className={`h-11 ${fieldClass} ${errors.lastName ? "border-red-400" : ""}`}
          />
        </Field>
        <Field label="Email address" error={errors.email} className="sm:col-span-2">
          <input
            type="email"
            value={values.email}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            onChange={(event) => update("email", event.target.value)}
            className={`h-11 ${fieldClass} ${errors.email ? "border-red-400" : ""}`}
          />
        </Field>
        <Field label="Company" error={errors.company} className="sm:col-span-2">
          <input
            value={values.company}
            autoComplete="organization"
            onChange={(event) => update("company", event.target.value)}
            className={`h-11 ${fieldClass}`}
          />
        </Field>
        <Field label="Project budget" error={errors.budget}>
          <select
            value={values.budget}
            aria-invalid={Boolean(errors.budget)}
            onChange={(event) => update("budget", event.target.value)}
            className={`h-11 ${fieldClass} ${errors.budget ? "border-red-400" : ""}`}
          >
            <option value="">Select a budget</option>
            {contactBudgets.map((budget) => (
              <option key={budget}>{budget}</option>
            ))}
          </select>
        </Field>
        <Field label="Service required" error={errors.service}>
          <select
            value={values.service}
            aria-invalid={Boolean(errors.service)}
            onChange={(event) => update("service", event.target.value)}
            className={`h-11 ${fieldClass} ${errors.service ? "border-red-400" : ""}`}
          >
            <option value="">Select a service</option>
            {contactServices.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </Field>
        <Field label="Project timeline" error={errors.timeline} className="sm:col-span-2">
          <select
            value={values.timeline}
            aria-invalid={Boolean(errors.timeline)}
            onChange={(event) => update("timeline", event.target.value)}
            className={`h-11 ${fieldClass} ${errors.timeline ? "border-red-400" : ""}`}
          >
            <option value="">Select a timeline</option>
            {contactTimelines.map((timeline) => (
              <option key={timeline}>{timeline}</option>
            ))}
          </select>
        </Field>
        <Field label="Message" error={errors.message} className="sm:col-span-2">
          <textarea
            value={values.message}
            rows={5}
            aria-invalid={Boolean(errors.message)}
            onChange={(event) => update("message", event.target.value)}
            className={`py-3 ${fieldClass} ${errors.message ? "border-red-400" : ""}`}
          />
        </Field>
      </div>

      <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-white">
        <input
          type="checkbox"
          checked={values.agree}
          onChange={(event) => update("agree", event.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-[#22C55E]"
        />
        <span>I agree to be contacted regarding my enquiry.</span>
      </label>
      {errors.agree ? <p className="mt-2 text-sm text-red-200">{errors.agree}</p> : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-[14px] bg-accent text-[15px] font-semibold text-white shadow-[0_12px_28px_-12px_rgba(34,197,94,0.95)] transition hover:-translate-y-0.5 hover:bg-[#1cb253] disabled:translate-y-0 disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />
            Sending
          </>
        ) : (
          "Submit"
        )}
      </button>
      </div>
    </div>
    </form>
  );
}

function Field({
  label,
  error,
  className = "",
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label className={`grid gap-1.5 text-sm font-semibold text-white ${className}`}>
      {label}
      {children}
      {error ? <span className="text-sm font-medium text-red-200">{error}</span> : null}
    </label>
  );
}
