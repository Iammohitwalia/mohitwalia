export interface IstNow {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

export interface DayOption {
  key: string;
  weekday: string;
  day: number;
  monthLabel: string;
  label: string;
}

export interface TimeSlot {
  id: string;
  label: string;
  hour24: number;
  minute: number;
}

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function part(parts: Intl.DateTimeFormatPart[], type: string) {
  return Number(parts.find((item) => item.type === type)?.value ?? "0");
}

export function istNow(date = new Date()): IstNow {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  return {
    year: part(parts, "year"),
    month: part(parts, "month"),
    day: part(parts, "day"),
    hour: part(parts, "hour"),
    minute: part(parts, "minute"),
    second: part(parts, "second"),
  };
}

function shiftDay(year: number, month: number, day: number, amount: number) {
  const date = new Date(Date.UTC(year, month - 1, day + amount));
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
  };
}

export function dayKey(year: number, month: number, day: number) {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export function dayOptions(count = 14, now = istNow()): DayOption[] {
  return Array.from({ length: count }, (_, index) => {
    const date = shiftDay(now.year, now.month, now.day, index);
    const utc = new Date(Date.UTC(date.year, date.month - 1, date.day));
    const weekday = weekdays[utc.getUTCDay()] ?? "Sun";
    const monthLabel = months[date.month - 1] ?? "";
    return {
      key: dayKey(date.year, date.month, date.day),
      weekday: index === 0 ? "Today" : weekday,
      day: date.day,
      monthLabel,
      label: `${weekday}, ${date.day} ${monthLabel} ${date.year}`,
    };
  });
}

export function timeSlots(): TimeSlot[] {
  const slots: TimeSlot[] = [];
  for (let hour = 10; hour <= 19; hour += 1) {
    for (const minute of [0, 30]) {
      if (hour === 19 && minute > 0) continue;
      const hour12 = hour % 12 === 0 ? 12 : hour % 12;
      const suffix = hour < 12 ? "AM" : "PM";
      const label = `${hour12}:${String(minute).padStart(2, "0")} ${suffix}`;
      slots.push({ id: `${hour}-${minute}`, label, hour24: hour, minute });
    }
  }
  return slots;
}

export function isSlotOpen(day: string, slot: TimeSlot, now = istNow()) {
  const today = dayKey(now.year, now.month, now.day);
  if (day !== today) return day > today;
  return slot.hour24 * 60 + slot.minute >= now.hour * 60 + now.minute + 30;
}

export function clockHourFromPointer(event: { clientX: number; clientY: number }, rect: DOMRect) {
  const x = event.clientX - (rect.left + rect.width / 2);
  const y = event.clientY - (rect.top + rect.height / 2);
  const distance = Math.hypot(x, y);
  if (distance < rect.width * 0.16) return null;
  const angle = (Math.atan2(y, x) * 180) / Math.PI;
  const clock = (angle + 90 + 360) % 360;
  const hour12 = Math.round(clock / 30) % 12 || 12;
  if (hour12 >= 8 && hour12 <= 9) return null;
  return hour12 >= 10 ? hour12 : hour12 + 12;
}
