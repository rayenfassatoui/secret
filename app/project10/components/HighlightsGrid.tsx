const barHeights = [60, 80, 55, 90, 70, 85];

export function HighlightsGrid() {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div className="col-span-2 rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-black to-black/80 p-6 text-white">
        <span className="inline-flex rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-emerald-300">
          Subscription Successful
        </span>
        <p className="mt-4 text-sm text-white/70">Today, 09:24</p>
        <h3 className="mt-6 text-xl font-semibold text-white">
          Cost-effectiveness
        </h3>
        <p className="mt-3 text-sm text-white/60">
          Reduce upfront costs with a subscription-based model and avoid expenses associated with hardware maintenance.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-black/70 p-6 text-white">
        <p className="text-sm text-white/60">Overall Satisfaction</p>
        <p className="mt-4 text-5xl font-bold">90%</p>
        <div className="mt-6 flex items-end gap-2">
          {barHeights.map((height, index) => (
            <span
              key={index}
              className="flex-1 rounded-full bg-gradient-to-t from-emerald-500 via-emerald-400 to-emerald-300"
              style={{ height: `${height}%`, minHeight: `${height * 0.8}px` }}
            />
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-black/70 p-6 text-white">
        <p className="text-sm font-semibold text-white">Global Teams</p>
        <p className="mt-3 text-sm text-white/60">
          Our users span across the different continents of the world.
        </p>
        <div className="mt-6 flex -space-x-3">
          {["A", "B", "C", "D"].map((label) => (
            <span
              key={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/40 bg-emerald-500/30 text-sm font-medium"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-black/70 p-6 text-white">
        <p className="text-sm font-semibold text-white">Analytics and Insights</p>
        <p className="mt-3 text-sm text-white/60">
          Gain valuable insights through built-in analytics by leveraging ready-to-use data for decision making.
        </p>
        <button className="mt-6 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/15">
          View Report
        </button>
      </div>
    </div>
  );
}
