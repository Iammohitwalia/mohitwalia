export function CategoryFilter({
  categories,
  active,
  onChange,
}: {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}) {
  const options = ["All", ...categories];

  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Service categories">
      {options.map((category) => {
        const selected = category === active;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(category)}
            className={`rounded-full border px-3 py-2 text-[13px] font-semibold transition ${
              selected ? "border-accent bg-accent text-white" : "border-line bg-white text-foreground hover:border-accent/40"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
