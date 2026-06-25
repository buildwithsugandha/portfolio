"use client";

import { Award, ExternalLink, ShieldCheck, Clock } from "lucide-react";

const completed = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    issued: "Issued May 2026",
    icon: "🟠",
    color: "#FF9900",
    bg: "rgba(255,153,0,0.08)",
    border: "rgba(255,153,0,0.25)",
    description: "Designing resilient, cost-optimized, and high-performing architectures on AWS",
    verifyUrl: "https://www.credly.com/badges/42740e8c-9fb7-4422-a3eb-3e9464f915da/public_url",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issued: "Issued Jun 2025 · Valid through Jun 2028",
    icon: "🟠",
    color: "#FF9900",
    bg: "rgba(255,153,0,0.08)",
    border: "rgba(255,153,0,0.25)",
    description: "Foundational AWS cloud concepts, services, security, and billing",
    verifyUrl: "https://www.credly.com/badges/0acd94aa-1a4b-422e-9d64-f1dc528ce651/public_url",
  },
  {
    name: "Red Hat System Administration I (RH124) — Ver. 9.3",
    issuer: "Red Hat",
    issued: "Issued via Credly",
    icon: "🎩",
    color: "#EE0000",
    bg: "rgba(238,0,0,0.08)",
    border: "rgba(238,0,0,0.25)",
    description: "Linux system administration fundamentals on Red Hat Enterprise Linux 9 — users, storage, networking, and services",
    verifyUrl: "https://www.credly.com/badges/1e3d5cd7-17ea-418b-be50-d12e2e0ebc46/public_url",
  },
  {
    name: "Red Hat System Administration I (RH124) — Ver. 9.0",
    issuer: "Red Hat",
    issued: "Issued via Credly",
    icon: "🎩",
    color: "#EE0000",
    bg: "rgba(238,0,0,0.08)",
    border: "rgba(238,0,0,0.25)",
    description: "Foundational Red Hat Enterprise Linux administration — file systems, process management, and network configuration",
    verifyUrl: "https://www.credly.com/badges/686bb41b-d3d9-4857-8995-2005e1a751e6/public_url",
  },
];

const inProgress = [
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "CNCF / Linux Foundation",
    icon: "☸️",
    color: "#326CE5",
    bg: "rgba(50,108,229,0.08)",
    border: "rgba(50,108,229,0.25)",
    description: "Administering Kubernetes clusters in production environments",
  },
  {
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    icon: "🌍",
    color: "#7B42BC",
    bg: "rgba(123,66,188,0.08)",
    border: "rgba(123,66,188,0.25)",
    description: "Infrastructure as Code with Terraform for multi-cloud deployments",
  },
];

const roadmap = [
  { step: "✅", label: "AWS Cloud Practitioner", status: "done" },
  { step: "✅", label: "AWS Solutions Architect – Associate", status: "done" },
  { step: "✅", label: "Red Hat System Administration I (RH124) v9.0", status: "done" },
  { step: "✅", label: "Red Hat System Administration I (RH124) v9.3", status: "done" },
  { step: "🔄", label: "Certified Kubernetes Administrator (CKA)", status: "active" },
  { step: "🔄", label: "HashiCorp Terraform Associate", status: "active" },
  { step: "⬜", label: "Azure Administrator (AZ-104)", status: "next" },
  { step: "⬜", label: "Google Professional Cloud DevOps Engineer", status: "next" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag">
            <span>04</span>
            Certifications
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Credentials & <span className="text-gradient">Learning Path</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            AWS & Red Hat certified — actively building toward Kubernetes and Terraform credentials
          </p>
        </div>

        {/* Completed certs */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <ShieldCheck className="w-5 h-5 text-green-400" />
            <h3 className="font-display font-bold text-white text-lg">Completed</h3>
            <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-green-400/10 text-green-400 border border-green-400/25">
              4 certifications
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {completed.map((cert) => (
              <div
                key={cert.name}
                className="glass glass-hover rounded-2xl p-6 flex flex-col"
                style={{ border: `1px solid ${cert.border}` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: cert.bg }}
                  >
                    {cert.icon}
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full font-medium bg-green-400/10 text-green-400 border border-green-400/25">
                    ✅ Completed
                  </span>
                </div>
                <h3 className="font-display font-bold text-white text-base leading-snug mb-1">
                  {cert.name}
                </h3>
                <p className="text-white/40 text-xs mb-1 font-mono">{cert.issuer}</p>
                <p className="text-green-400/70 text-xs font-mono mb-3">{cert.issued}</p>
                <p className="text-white/50 text-sm leading-relaxed flex-1 mb-5">
                  {cert.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-green-400" />
                    <span className="text-white/30 text-xs">Verified</span>
                  </div>
                  <a
                    href={cert.verifyUrl}
                    className="flex items-center gap-1 text-xs font-mono hover:text-neon-teal text-white/30 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* In Progress */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <Clock className="w-5 h-5 text-neon-teal" />
            <h3 className="font-display font-bold text-white text-lg">In Progress</h3>
            <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-neon-teal/10 text-neon-teal border border-neon-teal/25">
              Actively studying
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {inProgress.map((cert) => (
              <div
                key={cert.name}
                className="glass glass-hover rounded-2xl p-6 flex flex-col"
                style={{ border: `1px solid ${cert.border}` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: cert.bg }}
                  >
                    {cert.icon}
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full font-medium bg-neon-teal/10 text-neon-teal border border-neon-teal/25">
                    🔄 In Progress
                  </span>
                </div>
                <h3 className="font-display font-bold text-white text-base leading-snug mb-1">
                  {cert.name}
                </h3>
                <p className="text-white/40 text-xs mb-3 font-mono">{cert.issuer}</p>
                <p className="text-white/50 text-sm leading-relaxed flex-1 mb-4">
                  {cert.description}
                </p>
                <div className="flex items-center gap-1.5 pt-4 border-t border-white/5">
                  <Award className="w-4 h-4" style={{ color: cert.color }} />
                  <span className="text-white/30 text-xs">Studying now</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Roadmap Timeline */}
        <div className="glass rounded-2xl p-6 sm:p-8" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
          <h3 className="font-display font-bold text-white text-lg mb-2">
            🗺️ Certification Roadmap
          </h3>
          <p className="text-white/35 text-xs font-mono mb-6">
            Structured learning path toward cloud-native and SRE mastery
          </p>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-4 pl-12">
              {roadmap.map((item, i) => (
                <div key={i} className="relative flex items-center gap-4">
                  <div
                    className="absolute -left-12 w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0"
                    style={{
                      background:
                        item.status === "done"
                          ? "rgba(74,222,128,0.15)"
                          : item.status === "active"
                          ? "rgba(0,255,209,0.12)"
                          : "rgba(255,255,255,0.04)",
                      border:
                        item.status === "done"
                          ? "1px solid rgba(74,222,128,0.3)"
                          : item.status === "active"
                          ? "1px solid rgba(0,255,209,0.3)"
                          : "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {item.step}
                  </div>
                  <p
                    className={`text-sm font-medium ${
                      item.status === "done"
                        ? "text-green-400"
                        : item.status === "active"
                        ? "text-neon-teal"
                        : "text-white/30"
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
