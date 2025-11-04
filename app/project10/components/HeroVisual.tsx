export function HeroVisual() {
  return (
    <div className="relative w-full max-w-xl self-center rounded-[32px] border border-white/10 bg-gradient-to-br from-emerald-500/10 via-black to-black/80 p-8 text-white shadow-[0_0_120px_-40px_rgba(16,185,129,0.6)]">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <span className="h-3 w-3 rounded-full bg-emerald-500" />
          <span>Active Sessions</span>
        </div>
        <div className="flex gap-1">
          <span className="h-2 w-8 rounded-full bg-white/10" />
          <span className="h-2 w-8 rounded-full bg-white/10" />
          <span className="h-2 w-8 rounded-full bg-white/10" />
        </div>
      </div>

      <div className="space-y-5">
        <div className="rounded-2xl bg-white/5 p-5 shadow-inner">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-emerald-300">Overview</span>
            <span className="text-xs text-zinc-400">Last 30 days</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[60, 80, 45].map((value, index) => (
              <div key={index} className="rounded-xl border border-white/5 bg-black/60 p-4">
                <p className="text-xs uppercase tracking-wide text-zinc-400">
                  {index === 0 ? "Conversions" : index === 1 ? "Retention" : "Automation"}
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">{value}%</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/5 bg-black/60 p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-zinc-400">Workflow Efficiency</span>
            <span className="text-xs text-emerald-300">+18%</span>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {[45, 75, 55, 82, 64].map((height, index) => (
              <div key={index} className="flex h-24 items-end">
                <span
                  className="w-full rounded-full bg-gradient-to-t from-emerald-500 via-emerald-400 to-emerald-300"
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-zinc-300">Recommended Action</p>
            <p className="text-sm text-white">Launch customer onboarding sequence</p>
          </div>
          <button className="rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-300">
            View Detail
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute -inset-0 rounded-[32px] border border-emerald-500/40" />
      <div className="pointer-events-none absolute -inset-16 -z-10 rounded-full bg-emerald-500/20 blur-3xl" />
    </div>
  );
}
