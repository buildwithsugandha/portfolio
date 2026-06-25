"use client";

import { Github, Linkedin, Mail, Terminal } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md flex items-center justify-center neon-border">
              <Terminal className="w-4 h-4 text-neon-teal" />
            </div>
            <div>
              <p className="font-display font-bold text-white">
                Sugandha <span className="text-gradient-teal">Vashishtha</span>
              </p>
              <p className="text-white/30 text-xs font-mono">
                Cloud & Site Reliability Engineer
              </p>
            </div>
          </div>

          {/* Tech stack used */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"].map(
              (tech) => (
                <span key={tech} className="skill-badge text-xs">
                  {tech}
                </span>
              )
            )}
          </div>

          {/* Social + Copyright */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/buildwithsugandha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass text-white/40 hover:text-neon-teal transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/sugandha-vashishtha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass text-white/40 hover:text-neon-teal transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:Sugandh1212@gmail.com"
                className="p-2 rounded-lg glass text-white/40 hover:text-neon-teal transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-white/20 text-xs font-mono">
              © {year} Sugandha Vashishtha · Crafted with ⚡
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
