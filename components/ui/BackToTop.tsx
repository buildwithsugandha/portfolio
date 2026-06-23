"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 neon-border neon-glow"
      style={{ background: "rgba(13,21,38,0.9)", backdropFilter: "blur(12px)" }}
      aria-label="Back to top"
    >
      <ChevronUp className="w-5 h-5 text-neon-teal" />
    </button>
  );
}
