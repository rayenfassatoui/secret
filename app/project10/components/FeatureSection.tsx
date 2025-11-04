import Image from "next/image";

import { HighlightsGrid } from "./HighlightsGrid";

export function FeatureSection() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
      <div className="text-center text-white">
        <h2 className="text-3xl font-semibold sm:text-4xl">Access to the future of work</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/70 sm:text-base">
          Experience AI-driven features: intelligent automation, seamless integrations, and real-time insights. Benefit from a user-friendly interface and top-notch security, boosting your team&apos;s productivity.
        </p>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-emerald-500/10 via-black to-black/80 p-8 text-white shadow-[0_30px_120px_-60px_rgba(16,185,129,0.8)]">
          <span className="inline-flex rounded-full bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-300">
            Scalability
          </span>
          <h3 className="mt-6 text-3xl font-semibold leading-tight">
            Build scalable product with the help of our AI
          </h3>
          <p className="mt-4 max-w-md text-sm text-white/70">
            Easily scale your resources up or down based on business needs without hardware limitations.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/60 p-6">
              <p className="text-sm text-white/60">Automated Workflows</p>
              <p className="mt-4 text-3xl font-semibold text-white">+42%</p>
              <p className="mt-3 text-xs text-white/50">
                Increase campaign velocity with AI-assisted automation and real-time monitoring.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/60 p-6">
              <p className="text-sm text-white/60">Support Tickets</p>
              <p className="mt-4 text-3xl font-semibold text-white">-63%</p>
              <p className="mt-3 text-xs text-white/50">
                Resolve customer issues faster with predictive routing and intelligent suggestions.
              </p>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-px rounded-[34px] border border-emerald-500/20" />
          <div className="pointer-events-none absolute -top-32 right-24 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
        </div>

        <div className="relative h-[420px] overflow-hidden rounded-[36px] border border-white/10">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
            alt="Professional collaborating"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 90vw, 480px"
            priority
            unoptimized
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </div>

      <HighlightsGrid />
    </section>
  );
}
