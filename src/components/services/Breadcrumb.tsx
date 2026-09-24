import Link from "next/link";

export function Breadcrumb({ current }: { current?: string }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
        <li>
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          {current ? (
            <Link href="/services" className="transition-colors hover:text-foreground">
              Services
            </Link>
          ) : (
            <span className="text-foreground">Services</span>
          )}
        </li>
        {current ? (
          <>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-foreground">{current}</li>
          </>
        ) : null}
      </ol>
    </nav>
  );
}
