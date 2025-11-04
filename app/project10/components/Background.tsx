export function Background() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#060b0c]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.45),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.6),_transparent_70%)]" />
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage:
          "linear-gradient(to_right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to_bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
    </div>
  );
}
