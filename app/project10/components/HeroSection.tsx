import { HeroVisual } from "./HeroVisual";

export function HeroSection() {
  return (
    <section className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-16 pt-10 md:flex-row md:items-center md:justify-between md:pb-24 md:pt-16">
      <div className="max-w-xl space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          We raised $1M as pre-seed fund
        </div>
        <h1 className="text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
          The AI SaaS your product needs
        </h1>
        <p className="text-base text-zinc-300 sm:text-lg">
          Our AI SaaS solution enhances your product with advanced intelligence,
          streamlining operations and driving efficiency and innovation.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400">
            Get Template
          </button>
          <button className="rounded-full border border-white/15 bg-black/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Learn More
          </button>
        </div>
      </div>
      <HeroVisual />
    </section>
  );
}
