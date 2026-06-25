"use client";

import { useState, useEffect } from "react";
import { Download, Mail, FolderOpen, MapPin, ChevronDown, Github, Linkedin } from "lucide-react";

const titles = [
  "Infrastructure Engineer | Building Reliable Cloud & Network Platforms",
  "Network-to-Cloud Engineer | Automating Infra with AWS, Azure & Terraform",
  "Cloud & SRE Engineer | Focused on Reliability, Automation & Scale",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 45);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2800);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 22);
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
              <span className="text-green-400">Open to Cloud, DevOps & SRE Opportunities</span>
            </div>

            {/* Greeting */}
            <p className="text-white/50 font-mono text-sm mb-3 tracking-widest uppercase">
              Hi, I&apos;m
            </p>

            {/* Name */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="text-white">Sugandha</span>
              <br />
              <span className="text-gradient">Vashishtha</span>
            </h1>

            {/* Animated title */}
            <div className="h-12 flex items-center justify-center lg:justify-start mb-6 overflow-hidden">
              <span className="font-mono text-sm sm:text-base text-neon-teal leading-snug">
                {displayText}
                <span className="cursor-blink text-neon-teal">|</span>
              </span>
            </div>

            {/* Value proposition */}
            <p className="text-white/55 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6">
              9+ years of experience in enterprise infrastructure, cloud operations, incident
              response, and network reliability. Specializing in AWS, Azure, SRE, and
              production observability with Dynatrace & Microsoft ICM.
            </p>

            {/* Location + Education */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1 text-white/40 text-sm mb-8">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                Noida, India
              </span>
              <span className="text-white/20 hidden sm:inline">·</span>
              <span>MCA – Manipal University Jaipur</span>
              <span className="text-white/20 hidden sm:inline">·</span>
              <span className="text-neon-teal font-mono text-xs">Tech Mahindra</span>
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
                href="https://github.com/buildwithsugandha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg glass glass-hover text-white/50 hover:text-neon-teal transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/sugandha-vashishtha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg glass glass-hover text-white/50 hover:text-neon-teal transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:Sugandh1212@gmail.com"
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
              {/* Outer spinning ring */}
              <div
                className="absolute inset-0 rounded-full animate-spin"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, rgba(0,255,209,0.6) 60deg, transparent 120deg)",
                  animationDuration: "8s",
                }}
              />
              {/* Inner counter-spinning ring */}
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
                {!imgError ? (
                  <img
                    src="/profile.jpg"
                    alt="Sugandha Vashishtha – Cloud & SRE Engineer"
                    onError={() => setImgError(true)}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", borderRadius: "9999px" }}
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ background: "radial-gradient(circle at 30% 30%, rgba(0,255,209,0.1) 0%, rgba(0,20,40,0.8) 60%)" }}
                  >
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-bold font-display"
                      style={{ background: "linear-gradient(135deg, rgba(0,255,209,0.3), rgba(0,180,255,0.2))", border: "2px solid rgba(0,255,209,0.3)" }}
                    >
                      <span className="text-gradient">SV</span>
                    </div>
                  </div>
                )}
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
                🔧 SRE
              </div>
              <div
                className="absolute top-1/2 -right-10 px-3 py-1.5 rounded-full text-xs font-mono font-bold animate-float"
                style={{
                  background: "rgba(157,78,221,0.15)",
                  border: "1px solid rgba(157,78,221,0.4)",
                  color: "#9D4EDD",
                  animationDuration: "6s",
                  animationDelay: "2s",
                }}
              >
                🛡️ Azure
              </div>
            </div>

            {/* Quick stats strip below photo */}
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { icon: "📍", label: "Noida, India" },
                { icon: "💼", label: "9+ Yrs Exp" },
                { icon: "☁️", label: "Cloud & SRE" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass rounded-lg px-2 py-2"
                >
                  <div className="text-base mb-0.5">{item.icon}</div>
                  <div className="text-white/50 text-xs font-mono leading-tight">
                    {item.label}
                  </div>
                </div>
              ))}
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
