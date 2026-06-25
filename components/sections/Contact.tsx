"use client";

import { useState } from "react";
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle, Download, Calendar } from "lucide-react";

const FORMSPREE_ID = "xqevppzo";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Sugandh1212@gmail.com",
    href: "mailto:Sugandh1212@gmail.com",
    color: "#00FFD1",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sugandha-vashishtha",
    href: "https://linkedin.com/in/sugandha-vashishtha",
    color: "#00B4FF",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/buildwithsugandha",
    href: "https://github.com/buildwithsugandha",
    color: "#9D4EDD",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Noida, India",
    href: "#",
    color: "#00FFD1",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please email me directly at Sugandh1212@gmail.com");
      }
    } catch {
      setError("Network error. Please email me directly at Sugandh1212@gmail.com");
    } finally {
      setLoading(false);
    }
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
          <p className="mt-4 text-white/50 max-w-2xl mx-auto">
            Open to Infrastructure, Cloud, DevOps, and SRE opportunities at enterprise technology
            organizations. Drop me a message — I respond within 24 hours.
          </p>
        </div>

        {/* Calendly CTA — prominent hire me banner */}
        <div
          className="glass rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ border: "1px solid rgba(0,255,209,0.2)" }}
        >
          <div>
            <p className="text-white font-display font-bold text-lg mb-1">
              Prefer a quick call? 📅
            </p>
            <p className="text-white/50 text-sm">
              Schedule a 15-minute intro call — no commitment, just a conversation about how I can help.
            </p>
          </div>
          <a
            href="https://calendly.com/sugandh1212"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 flex-shrink-0 whitespace-nowrap"
          >
            <Calendar className="w-4 h-4" />
            Schedule a Call
          </a>
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
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}15` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: item.color }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white/30 text-xs mb-0.5">{item.label}</p>
                    <p className="text-white/80 text-sm font-medium group-hover:text-white transition-colors truncate">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}

            {/* Resume download */}
            <a
              href="/resume.pdf"
              download="Sugandha_Vashishtha_Resume.pdf"
              className="glass glass-hover rounded-xl p-4 flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-neon-teal/10">
                <Download className="w-4 h-4 text-neon-teal" />
              </div>
              <div>
                <p className="text-white/30 text-xs mb-0.5">Resume</p>
                <p className="text-white/80 text-sm font-medium group-hover:text-neon-teal transition-colors">
                  Download PDF
                </p>
              </div>
            </a>

            {/* Calendly card */}
            <a
              href="https://calendly.com/sugandh1212"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover rounded-xl p-4 flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,180,255,0.1)" }}>
                <Calendar className="w-4 h-4 text-neon-blue" />
              </div>
              <div>
                <p className="text-white/30 text-xs mb-0.5">Schedule a Call</p>
                <p className="text-white/80 text-sm font-medium group-hover:text-neon-blue transition-colors">
                  Book a 15-min intro
                </p>
              </div>
            </a>

            {/* Availability status */}
            <div className="glass rounded-xl p-4 mt-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Available for opportunities</span>
              </div>
              <p className="text-white/40 text-xs leading-relaxed">
                Actively seeking Cloud Infrastructure, SRE, and DevOps roles at enterprise
                organizations — Microsoft, Google, Amazon, Deloitte, Accenture, Kyndryl, IBM.
                Remote and Noida/India-based positions welcome.
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
                      <label className="block text-white/40 text-xs mb-1.5 font-mono">Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                        onFocus={(e) => { e.target.style.borderColor = "rgba(0,255,209,0.4)"; e.target.style.boxShadow = "0 0 0 3px rgba(0,255,209,0.08)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>
                    <div>
                      <label className="block text-white/40 text-xs mb-1.5 font-mono">Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                        onFocus={(e) => { e.target.style.borderColor = "rgba(0,255,209,0.4)"; e.target.style.boxShadow = "0 0 0 3px rgba(0,255,209,0.08)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/40 text-xs mb-1.5 font-mono">Subject</label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Job opportunity / Collaboration / Hello"
                      className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                      onFocus={(e) => { e.target.style.borderColor = "rgba(0,255,209,0.4)"; e.target.style.boxShadow = "0 0 0 3px rgba(0,255,209,0.08)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }}
                    />
                  </div>

                  <div>
                    <label className="block text-white/40 text-xs mb-1.5 font-mono">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about the role, project, or just say hi..."
                      className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/20 outline-none transition-all duration-200 resize-none"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                      onFocus={(e) => { e.target.style.borderColor = "rgba(0,255,209,0.4)"; e.target.style.boxShadow = "0 0 0 3px rgba(0,255,209,0.08)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }}
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-xs font-mono bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2">
                      {error}
                    </p>
                  )}

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
