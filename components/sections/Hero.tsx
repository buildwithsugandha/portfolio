"use client";

import { useState, useEffect } from "react";
import { Download, Mail, FolderOpen, MapPin, ChevronDown, Github, Linkedin } from "lucide-react";

const titles = [
  "Network Engineer",
  "Cloud Engineer",
  "DevOps Engineer",
  "SRE Enthusiast",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex((i) => (i + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass neon-border mb-8 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400">Available for opportunities</span>
            </div>

            {/* Greeting */}
            <p className="text-white/50 font-mono text-sm mb-3 tracking-widest uppercase">
              Hi, I&apos;m
            </p>

            {/* Name */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="text-white">Sugandh</span>
              <br />
              <span className="text-gradient">Sharma</span>
            </h1>

            {/* Animated title */}
            <div className="h-10 flex items-center justify-center lg:justify-start mb-6">
              <span className="font-mono text-xl text-neon-teal">
                {displayText}
                <span className="cursor-blink text-neon-teal">|</span>
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-white/40 text-sm mb-8">
              <MapPin className="w-4 h-4" />
              <span>India</span>
              <span className="mx-2">·</span>
              <span>MCA – Manipal University Jaipur</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10">
              <a
                href="/resume.pdf"
                download
                className="btn-primary flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <button
                onClick={() => handleScroll("contact")}
                className="btn-outline flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </button>
              <button
                onClick={() => handleScroll("projects")}
                className="btn-outline flex items-center gap-2"
              >
                <FolderOpen className="w-4 h-4" />
                View Projects
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a
                href="https://github.com/sugandhsharma"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg glass glass-hover text-white/50 hover:text-neon-teal transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/sugandhsharma"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg glass glass-hover text-white/50 hover:text-neon-teal transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@sugandhsharma.dev"
                className="p-2.5 rounded-lg glass glass-hover text-white/50 hover:text-neon-teal transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Visual */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Outer ring */}
              <div
                className="absolute inset-0 rounded-full animate-spin"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, rgba(0,255,209,0.6) 60deg, transparent 120deg)",
                  animationDuration: "8s",
                }}
              />
              {/* Inner ring */}
              <div
                className="absolute inset-2 rounded-full animate-spin"
                style={{
                  background:
                    "conic-gradient(from 180deg, transparent 0deg, rgba(0,180,255,0.4) 60deg, transparent 120deg)",
                  animationDuration: "12s",
                  animationDirection: "reverse",
                }}
              />

              {/* Profile image container */}
              <div className="absolute inset-4 rounded-full glass neon-border overflow-hidden flex items-center justify-center">
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(0,255,209,0.1) 0%, rgba(0,20,40,0.8) 60%)",
                  }}
                >
                  {/* Placeholder avatar */}
                  <div className="text-center">
                    <div
                      className="w-24 h-24 mx-auto rounded-full mb-2 flex items-center justify-center text-4xl font-bold font-display"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(0,255,209,0.3), rgba(0,180,255,0.2))",
                        border: "2px solid rgba(0,255,209,0.3)",
                      }}
                    >
                      <span className="text-gradient">SS</span>
                    </div>
                    <p className="text-neon-teal text-xs font-mono">
                      sugandh.sharma
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating skill badges */}
              <div
                className="absolute -top-2 -right-2 px-3 py-1.5 rounded-full text-xs font-mono font-bold animate-float"
                style={{
                  background: "rgba(0,255,209,0.15)",
                  border: "1px solid rgba(0,255,209,0.4)",
                  color: "#00FFD1",
                  animationDuration: "5s",
                }}
              >
                ☁️ AWS
              </div>
              <div
                className="absolute -bottom-2 -left-2 px-3 py-1.5 rounded-full text-xs font-mono font-bold animate-float"
                style={{
                  background: "rgba(0,180,255,0.15)",
                  border: "1px solid rgba(0,180,255,0.4)",
                  color: "#00B4FF",
                  animationDuration: "7s",
                  animationDelay: "1s",
                }}
              >
                ⚙️ K8s
              </div>
              <div
                className="absolute top-1/2 -right-8 px-3 py-1.5 rounded-full text-xs font-mono font-bold animate-float"
                style={{
                  background: "rgba(157,78,221,0.15)",
                  border: "1px solid rgba(157,78,221,0.4)",
                  color: "#9D4EDD",
                  animationDuration: "6s",
                  animationDelay: "2s",
                }}
              >
                🔧 DevOps
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs font-mono">
          <span>scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
