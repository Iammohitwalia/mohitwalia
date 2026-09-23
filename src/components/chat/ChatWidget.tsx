"use client";

import { ArrowUpRight, MessageCircle, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import type { FormEvent } from "react";
import { openWhatsApp } from "@/src/lib/contact";

interface Question {
  id: string;
  ask: string;
  options?: string[];
  placeholder?: string;
  optional?: boolean;
}

const questions: Question[] = [
  {
    id: "need",
    ask: "What are you looking to build?",
    options: ["A new website", "An online store", "A web app", "Automation", "Not sure yet"],
  },
  {
    id: "timeline",
    ask: "When would you like to start?",
    options: ["As soon as possible", "This month", "In a few months", "Just exploring"],
  },
  {
    id: "name",
    ask: "What should I call you?",
    placeholder: "Your name",
  },
  {
    id: "detail",
    ask: "Anything else I should know?",
    placeholder: "A link, a goal, a deadline...",
    optional: true,
  },
];

interface Answer {
  id: string;
  ask: string;
  value: string;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState("");
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const step = Math.min(answers.length, questions.length);
  const current = questions[step];
  const finished = step >= questions.length;

  useEffect(() => {
    if (!open) return;
    panelRef.current?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    setOpen(false);
  }

  function pushAnswer(value: string) {
    if (!current) return;
    setAnswers((previous) => [...previous, { id: current.id, ask: current.ask, value }]);
    setDraft("");
    setError("");
  }

  function onTextSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = draft.trim();
    if (!value && !current?.optional) {
      setError("Add your name so I know who to reply to.");
      return;
    }
    pushAnswer(value);
  }

  function send() {
    const find = (id: string) => answers.find((answer) => answer.id === id)?.value ?? "";
    const detail = find("detail");
    const message = [
      "Hi Mohit, I'd like to talk about a project.",
      `Name: ${find("name")}`,
      `Looking for: ${find("need")}`,
      `Start: ${find("timeline")}`,
      detail && detail !== "Nothing else for now" ? `Details: ${detail}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    openWhatsApp(message);
  }

  return (
    <>
      {open ? (
        <button
          type="button"
          aria-label="Close chat"
          className="fixed inset-0 z-40 bg-[#0F172A]/25"
          onClick={close}
        />
      ) : null}

      {open ? (
        <div
          ref={panelRef}
          id="site-chat"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          tabIndex={-1}
          className="fixed bottom-[calc(9.35rem+env(safe-area-inset-bottom))] left-4 z-50 flex max-h-[min(34rem,calc(100dvh-11rem))] w-[min(22.5rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-[22px] border border-line bg-white text-foreground shadow-[0_24px_60px_-24px_rgba(15,23,42,0.5)] outline-none lg:bottom-24 lg:left-6"
        >
          <div className="flex items-start justify-between gap-3 bg-[#0B1220] px-4 py-3.5 text-white">
            <div>
              <p id={titleId} className="text-[15px] font-bold tracking-[-0.02em]">
                Ask Mohit
              </p>
              <p className="mt-0.5 text-[12px] text-white/65">
                {finished ? "Ready to send" : `Question ${step + 1} of ${questions.length}`}
              </p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close chat"
              className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-4 py-4">
            <BotLine>Hi. Answer a few quick questions and I’ll open WhatsApp with the details.</BotLine>
            {answers.map((answer) => (
              <div key={answer.id} className="space-y-2">
                <BotLine>{answer.ask}</BotLine>
                {answer.value ? (
                  <p className="ml-auto w-fit max-w-[85%] rounded-[16px] rounded-br-md bg-accent px-3 py-2 text-[13px] leading-5 font-semibold text-white">
                    {answer.value}
                  </p>
                ) : null}
              </div>
            ))}
            {current ? <BotLine>{current.ask}</BotLine> : null}
            {finished ? (
              <BotLine>That’s everything. Send it on WhatsApp and I’ll reply there.</BotLine>
            ) : null}
          </div>

          <div className="border-t border-line px-4 py-3">
            {current?.options ? (
              <div className="flex flex-wrap gap-2">
                {current.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => pushAnswer(option)}
                    className="rounded-full border border-line bg-white px-3 py-2 text-left text-[13px] font-semibold text-foreground transition hover:border-accent hover:text-[#15803d]"
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : null}

            {current && !current.options ? (
              <form onSubmit={onTextSubmit} className="flex gap-2">
                <input
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder={current.placeholder}
                  aria-label={current.ask}
                  className="h-11 min-w-0 flex-1 rounded-[14px] border border-line bg-surface px-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
                <button
                  type="submit"
                  className="h-11 shrink-0 rounded-[14px] bg-accent px-3 text-[13px] font-semibold text-white"
                >
                  Next
                </button>
                {current.optional ? (
                  <button
                    type="button"
                    onClick={() => pushAnswer("")}
                    className="h-11 shrink-0 rounded-[14px] px-2 text-[13px] font-semibold text-muted"
                  >
                    Skip
                  </button>
                ) : null}
              </form>
            ) : null}

            {finished ? (
              <button
                type="button"
                onClick={send}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-[14px] bg-accent px-4 text-[14px] font-semibold text-white shadow-[0_12px_28px_-12px_rgba(34,197,94,0.95)]"
              >
                Send on WhatsApp
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>
            ) : null}

            {error ? <p className="mt-2 text-[12px] font-medium text-[#B91C1C]">{error}</p> : null}

            {answers.length > 0 ? (
              <button
                type="button"
                onClick={() => {
                  setAnswers((previous) => previous.slice(0, -1));
                  setError("");
                }}
                className="mt-2 text-[12px] font-semibold text-muted transition hover:text-foreground"
              >
                Previous question
              </button>
            ) : null}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        aria-expanded={open}
        aria-controls="site-chat"
        onClick={() => setOpen((value) => !value)}
        className="fixed bottom-[calc(5.35rem+env(safe-area-inset-bottom))] left-4 z-50 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-white shadow-[0_14px_30px_-12px_rgba(34,197,94,0.95)] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 lg:bottom-6 lg:left-6"
      >
        {open ? <X className="h-6 w-6" aria-hidden="true" /> : <MessageCircle className="h-6 w-6" aria-hidden="true" />}
        <span className="sr-only">{open ? "Close chat" : "Open chat"}</span>
      </button>
    </>
  );
}

function BotLine({ children }: { children: string }) {
  return (
    <p className="w-fit max-w-[90%] rounded-[16px] rounded-bl-md bg-surface px-3 py-2 text-[13px] leading-5 text-foreground">
      {children}
    </p>
  );
}
