export function Search({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block min-w-0 flex-1">
      <span className="sr-only">Search services</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search services"
        className="h-12 w-full rounded-[14px] border border-line bg-white px-4 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </label>
  );
}
