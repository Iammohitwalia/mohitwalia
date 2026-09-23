"use client";

import { ArrowLeft, ArrowUpRight, Calendar, Clock } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { FormEvent, PointerEvent } from "react";
import { Reveal } from "@/src/components/ui/Reveal";
import { contact, openWhatsApp } from "@/src/lib/contact";
import {
  clockHourFromPointer,
  dayKey,
  dayOptions,
  isSlotOpen,
  istNow,
  timeSlots,
} from "@/src/lib/booking";
import type { DayOption, IstNow, TimeSlot } from "@/src/lib/booking";

const projectTypes = ["New website", "Online store", "Web app", "Automation", "Rebuild"];
const timelines = ["This week", "This month", "1–3 months", "Exploring"];
const slots = timeSlots();

const fieldClass =
  "mt-2 h-12 w-full rounded-[14px] border border-line bg-surface px-4 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30";

function handPoint(angle: number, length: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: 60 + Math.cos(rad) * length, y: 60 + Math.sin(rad) * length };
}

function ClockFace({
  now,
  selected,
  onPickHour,
}: {
  now: IstNow | null;
  selected: TimeSlot | null;
  onPickHour: (hour24: number) => void;
}) {
  const hour = selected?.hour24 ?? now?.hour ?? 10;
  const minute = selected?.minute ?? now?.minute ?? 0;
  const second = selected ? 0 : (now?.second ?? 0);
  const hourHand = handPoint((hour % 12) * 30 + minute * 0.5, 28);
  const minuteHand = handPoint(minute * 6 + second * 0.1, 38);
  const secondHand = handPoint(second * 6, 42);

  function onPointerDown(event: PointerEvent<SVGSVGElement>) {
    const hour24 = clockHourFromPointer(event, event.currentTarget.getBoundingClientRect());
    if (hour24) onPickHour(hour24);
  }

  return (
    <div className="flex w-[9.5rem] shrink-0 flex-col items-center">
      <svg
        viewBox="0 0 120 120"
        className="h-[9.5rem] w-[9.5rem] cursor-pointer touch-manipulation"
        role="img"
        aria-label={selected ? `Selected time ${selected.label}` : "Clock showing India Standard Time"}
        onPointerDown={onPointerDown}
      >
        <circle cx="60" cy="60" r="56" fill="#F8FAFC" stroke={selected ? "#22C55E" : "#E5E7EB"} strokeWidth="2" />
        {Array.from({ length: 12 }, (_, index) => {
          const number = index + 1;
          const point = handPoint(number * 30, 44);
          const active = selected ? selected.hour24 % 12 === number % 12 : false;
          return (
            <text
              key={number}
              x={point.x}
              y={point.y}
              textAnchor="middle"
              dominantBaseline="central"
              fill={active ? "#16A34A" : "#0F172A"}
              fontSize="9"
              fontWeight="700"
            >
              {number}
            </text>
          );
        })}
        <line x1="60" y1="60" x2={hourHand.x} y2={hourHand.y} stroke="#0F172A" strokeWidth="3.2" strokeLinecap="round" />
        <line x1="60" y1="60" x2={minuteHand.x} y2={minuteHand.y} stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
        {selected ? null : (
          <line x1="60" y1="60" x2={secondHand.x} y2={secondHand.y} stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" />
        )}
        <circle cx="60" cy="60" r="3.2" fill="#22C55E" />
      </svg>
      <p className="mt-2 text-center text-[12px] font-semibold text-foreground">
        {selected ? selected.label : "Live IST"}
      </p>
      <p className="text-center text-[11px] text-muted">{selected ? "Selected slot" : "Tap the clock or a slot"}</p>
    </div>
  );
}

export function Schedule() {
  const [step, setStep] = useState<1 | 2>(1);
  const [name, setName] = useState("");
  const [project, setProject] = useState("");
  const [timeline, setTimeline] = useState("");
  const [note, setNote] = useState("");
  const [dateKey, setDateKey] = useState("");
  const [selected, setSelected] = useState<TimeSlot | null>(null);
  const [error, setError] = useState("");
  const [now, setNow] = useState<IstNow | null>(null);

  useEffect(() => {
    const tick = () => setNow(istNow());
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const days = useMemo(() => (now ? dayOptions(14, now) : []), [now]);

  useEffect(() => {
    if (!now || dateKey) return;
    const openDay = dayOptions(14, now).find((day) => slots.some((slot) => isSlotOpen(day.key, slot, now)));
    if (openDay) setDateKey(openDay.key);
  }, [now, dateKey]);

  const selectedDay = days.find((day) => day.key === dateKey);
  const todayKey = now ? dayKey(now.year, now.month, now.day) : "";
  const visibleSlots = slots.filter((slot) => {
    if (!now || !dateKey || dateKey !== todayKey) return true;
    return isSlotOpen(dateKey, slot, now);
  });

  function chooseDay(day: DayOption) {
    setDateKey(day.key);
    setError("");
    if (selected && now && !isSlotOpen(day.key, selected, now)) setSelected(null);
  }

  function chooseHour(hour24: number) {
    if (!now || !dateKey) return;
    const match =
      slots.find((slot) => slot.hour24 === hour24 && slot.minute === 0 && isSlotOpen(dateKey, slot, now)) ??
      slots.find((slot) => slot.hour24 === hour24 && isSlotOpen(dateKey, slot, now));
    if (!match) {
      setError("That hour has already passed today.");
      return;
    }
    setSelected(match);
    setError("");
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step === 1) {
      if (!name.trim() || !project || !timeline) {
        setError("Add your name, the kind of project, and when you want to start.");
        return;
      }
      setError("");
      setStep(2);
      return;
    }
    if (!selectedDay || !selected) {
      setError("Pick a day and a time slot.");
      return;
    }
    setError("");
    const message = [
      "Hi Mohit, I'd like to schedule a call.",
      `Name: ${name.trim()}`,
      `Project: ${project}`,
      `Start: ${timeline}`,
      `Date: ${selectedDay.label}`,
      `Time: ${selected.label} IST`,
      note.trim() ? `Details: ${note.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    openWhatsApp(message);
  }

  return (
    <section id="schedule" className="scroll-mt-24 px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <Reveal>
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 overflow-hidden rounded-[28px] bg-[#0B1220] px-6 py-10 text-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.7)] sm:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 lg:px-14 lg:py-16">
          <div
            className="pointer-events-none absolute -top-24 left-0 h-64 w-72 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.22),transparent_68%)]"
            aria-hidden="true"
          />
          <div className="cta-dots pointer-events-none absolute top-8 right-8 h-32 w-32 opacity-50" aria-hidden="true" />

          <div className="relative min-w-0 max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-white/80 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              Schedule a call
            </p>
            <h2 className="mt-5 text-balance text-[2rem] leading-[1.05] font-black tracking-[-0.04em] sm:text-5xl">
              Pick a time. <span className="text-accent">I&apos;ll take it from there.</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Tell me what you want to build, then choose a day and a slot. The clock runs on India
              Standard Time, and the details open in WhatsApp.
            </p>
            <ul className="mt-8 space-y-3 text-sm font-medium text-white/85">
              <li className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-accent" aria-hidden="true" />
                A short intro call, about 30 minutes
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
                Slots from 10:00 AM to 7:00 PM IST
              </li>
              <li className="flex items-center gap-3">
                <ArrowUpRight className="h-4 w-4 text-accent" aria-hidden="true" />
                Sent to {contact.phoneDisplay} on WhatsApp
              </li>
            </ul>
          </div>

          <form
            onSubmit={onSubmit}
            className="relative min-w-0 rounded-[22px] border border-white/10 bg-white p-5 text-foreground shadow-[0_24px_50px_-28px_rgba(0,0,0,0.45)] sm:p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <StepMark number="1" label="Project" active={step === 1} done={step === 2} />
              <span className="h-px flex-1 bg-line" aria-hidden="true" />
              <StepMark number="2" label="Time" active={step === 2} done={false} />
            </div>

            {step === 1 ? (
              <div className="grid gap-4">
                <label className="block">
                  <span className="text-[13px] font-semibold">Name</span>
                  <input
                    name="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    autoComplete="name"
                    placeholder="Your name"
                    className={fieldClass}
                  />
                </label>
                <fieldset>
                  <legend className="text-[13px] font-semibold">What do you need?</legend>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {projectTypes.map((item) => (
                      <Choice key={item} active={project === item} onClick={() => setProject(item)}>
                        {item}
                      </Choice>
                    ))}
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="text-[13px] font-semibold">When do you want to start?</legend>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {timelines.map((item) => (
                      <Choice key={item} active={timeline === item} onClick={() => setTimeline(item)}>
                        {item}
                      </Choice>
                    ))}
                  </div>
                </fieldset>
                <label className="block">
                  <span className="text-[13px] font-semibold">What should we cover?</span>
                  <textarea
                    name="note"
                    value={note}
                    onChange={(event) => setNote(event.target.value)}
                    rows={3}
                    placeholder="A store, an app, a rebuild..."
                    className="mt-2 w-full resize-none rounded-[14px] border border-line bg-surface px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                  />
                </label>
              </div>
            ) : (
              <div>
                <p className="text-[13px] font-semibold">Pick a day</p>
                <div className="mt-2 flex w-full min-w-0 gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {days.map((day) => {
                    const active = day.key === dateKey;
                    return (
                      <button
                        key={day.key}
                        type="button"
                        aria-pressed={active}
                        onClick={() => chooseDay(day)}
                        className={`flex w-[4.4rem] shrink-0 flex-col items-center rounded-[14px] border px-2 py-2.5 transition ${
                          active
                            ? "border-accent bg-accent text-white"
                            : "border-line bg-surface text-foreground hover:border-accent/40"
                        }`}
                      >
                        <span className={`text-[10px] font-semibold tracking-wide uppercase ${active ? "text-white/80" : "text-muted"}`}>
                          {day.weekday}
                        </span>
                        <span className="mt-0.5 text-lg leading-none font-black">{day.day}</span>
                        <span className={`mt-0.5 text-[11px] font-medium ${active ? "text-white/80" : "text-muted"}`}>
                          {day.monthLabel}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start">
                  <ClockFace now={now} selected={selected} onPickHour={chooseHour} />
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-semibold">Open slots</p>
                    {visibleSlots.length === 0 ? (
                      <p className="mt-3 text-sm leading-6 text-muted">
                        No times left today. Choose another day.
                      </p>
                    ) : (
                      <div className="mt-2 grid max-h-52 grid-cols-2 gap-2 overflow-y-auto pr-0.5 sm:grid-cols-3">
                        {visibleSlots.map((slot) => {
                          const active = selected?.id === slot.id;
                          return (
                            <button
                              key={slot.id}
                              type="button"
                              aria-pressed={active}
                              onClick={() => {
                                setSelected(slot);
                                setError("");
                              }}
                              className={`h-10 rounded-[12px] border text-[13px] font-semibold transition ${
                                active
                                  ? "border-accent bg-accent text-white"
                                  : "border-line bg-surface text-foreground hover:border-accent/40"
                              }`}
                            >
                              {slot.label}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {error ? <p className="mt-3 text-sm font-medium text-[#B91C1C]">{error}</p> : null}

            <div className={`mt-5 flex gap-2 ${step === 2 ? "" : ""}`}>
              {step === 2 ? (
                <button
                  type="button"
                  onClick={() => {
                    setStep(1);
                    setError("");
                  }}
                  className="inline-flex h-12 items-center justify-center gap-1.5 rounded-[14px] border border-line px-4 text-sm font-semibold text-foreground transition hover:bg-surface"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  Back
                </button>
              ) : null}
              <button
                type="submit"
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-[14px] bg-accent px-5 text-[15px] font-semibold text-white shadow-[0_12px_28px_-12px_rgba(34,197,94,0.95)] transition hover:-translate-y-0.5 hover:bg-[#1cb253] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                {step === 1 ? "Choose a time" : "Send on WhatsApp"}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </Reveal>
    </section>
  );
}

function StepMark({ number, label, active, done }: { number: string; label: string; active: boolean; done: boolean }) {
  const on = active || done;
  return (
    <span className="inline-flex items-center gap-2">
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full text-[12px] font-bold ${
          on ? "bg-accent text-white" : "bg-surface text-muted"
        }`}
      >
        {number}
      </span>
      <span className={`text-[13px] font-semibold ${on ? "text-foreground" : "text-muted"}`}>{label}</span>
    </span>
  );
}

function Choice({ active, onClick, children }: { active: boolean; onClick: () => void; children: string }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-full border px-3 py-2 text-[13px] font-semibold transition ${
        active ? "border-accent bg-accent text-white" : "border-line bg-white text-foreground hover:border-accent/40"
      }`}
    >
      {children}
    </button>
  );
}
