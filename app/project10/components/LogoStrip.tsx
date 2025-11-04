const logos = ["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"];

export function LogoStrip() {
  return (
    <section className="relative z-10 bg-black/60 py-10">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-10 px-6 text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
        {logos.map((logo, index) => (
          <span
            key={`${logo}-${index}`}
            className="flex items-center gap-2 text-xs text-white/50"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
