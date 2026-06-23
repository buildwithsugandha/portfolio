"use client";

import { useState } from "react";
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@sugandhsharma.dev",
    href: "mailto:hello@sugandhsharma.dev",
    color: "#00FFD1",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sugandhsharma",
    href: "https://linkedin.com/in/sugandhsharma",
    color: "#00B4FF",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/sugandhsharma",
    href: "https://github.com/sugandhsharma",
    color: "#9D4EDD",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: "#",
    color: "#00FFD1",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — replace with your preferred form service (Formspree, Resend, etc.)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag">
            <span>08</span>
            Contact
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            Open to Cloud, DevOps, and SRE opportunities. Drop me a message — I respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="glass glass-hover rounded-xl p-4 flex items-center gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ background: `${item.color}15` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs mb-0.5">{item.label}</p>
                    <p className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}

            {/* Status */}
            <div className="glass rounded-xl p-4 mt-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Available for opportunities</span>
              </div>
              <p className="text-white/40 text-xs leading-relaxed">
                Actively seeking Cloud Engineer, DevOps Engineer, and SRE roles. Open to
                both remote and India-based positions.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="glass rounded-2xl p-6">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ background: "rgba(0,255,209,0.1)", border: "1px solid rgba(0,255,209,0.3)" }}
                  >
                    <CheckCircle className="w-8 h-8 text-neon-teal" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">Message sent!</h3>
                  <p className="text-white/50 text-sm">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/40 text-xs mb-1.5 font-mono">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "rgba(0,255,209,0.4)";
                          e.target.style.boxShadow = "0 0 0 3px rgba(0,255,209,0.08)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "rgba(255,255,255,0.08)";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-white/40 text-xs mb-1.5 font-mono">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "rgba(0,255,209,0.4)";
                          e.target.style.boxShadow = "0 0 0 3px rgba(0,255,209,0.08)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "rgba(255,255,255,0.08)";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/40 text-xs mb-1.5 font-mono">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Job opportunity / Collaboration / Hello"
                      className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(0,255,209,0.4)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(0,255,209,0.08)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(255,255,255,0.08)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-white/40 text-xs mb-1.5 font-mono">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about the role, project, or just say hi..."
                      className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/20 outline-none transition-all duration-200 resize-none"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(0,255,209,0.4)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(0,255,209,0.08)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(255,255,255,0.08)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-dark-950/30 border-t-dark-950 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
