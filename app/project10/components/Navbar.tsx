import Link from "next/link";

const NAV_ITEMS = [
  { label: "Home", href: "#" },
  { label: "All Pages", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
];

export function Navbar() {
  return (
    <header className="relative z-20 py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 rounded-full border border-white/10 bg-black/60 px-6 py-4 backdrop-blur">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold text-white"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-sm font-bold">
            EI
          </span>
          Index
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-300 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-black shadow-[0_25px_60px_-25px_rgba(16,185,129,0.8)] transition hover:bg-emerald-400">
            Get this Template
          </button>
        </div>
      </div>
    </header>
  );
}
