import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      {/* Glow */}
      <div
        className="absolute w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00FFD1, transparent 70%)" }}
      />

      {/* Code block */}
      <div className="relative z-10 mb-8">
        <p className="font-mono text-neon-teal text-sm mb-2 opacity-60">sugandha@cloud:~$</p>
        <div
          className="inline-block px-6 py-3 rounded-xl font-mono text-7xl font-bold"
          style={{ background: "rgba(0,255,209,0.05)", border: "1px solid rgba(0,255,209,0.15)" }}
        >
          <span className="text-gradient">404</span>
        </div>
        <p className="font-mono text-white/20 text-sm mt-3">
          Error: route not found — exiting with code 1
        </p>
      </div>

      {/* Message */}
      <h1 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
        This page doesn&apos;t exist
      </h1>
      <p className="text-white/40 text-sm max-w-sm mb-10">
        The URL you followed is broken or the page has been moved. Head back to the portfolio.
      </p>

      {/* CTA */}
      <Link href="/" className="btn-primary inline-flex items-center gap-2">
        ← Back to Portfolio
      </Link>

      {/* Quick nav */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {[
          { label: "About", href: "/#about" },
          { label: "Projects", href: "/#projects" },
          { label: "Contact", href: "/#contact" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="px-4 py-2 rounded-lg text-sm font-mono text-white/40 hover:text-neon-teal transition-colors"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
