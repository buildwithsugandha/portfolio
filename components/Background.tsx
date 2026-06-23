"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(0,180,255,0.07) 0%, transparent 50%), radial-gradient(ellipse at 80% 0%, rgba(0,255,209,0.05) 0%, transparent 50%), #020817",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,209,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,209,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial fade to hide grid at bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(2,8,23,0.8) 0%, transparent 70%)",
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 animate-float"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,209,0.4) 0%, transparent 70%)",
          filter: "blur(40px)",
          animationDuration: "8s",
        }}
      />
      <div
        className="absolute top-3/4 right-1/4 w-64 h-64 rounded-full opacity-8 animate-float"
        style={{
          background:
            "radial-gradient(circle, rgba(0,180,255,0.4) 0%, transparent 70%)",
          filter: "blur(40px)",
          animationDuration: "10s",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full opacity-6 animate-float"
        style={{
          background:
            "radial-gradient(circle, rgba(157,78,221,0.4) 0%, transparent 70%)",
          filter: "blur(30px)",
          animationDuration: "12s",
          animationDelay: "4s",
        }}
      />
    </div>
  );
}
