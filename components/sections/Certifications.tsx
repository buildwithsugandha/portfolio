"use client";

import { Award, ExternalLink, ShieldCheck } from "lucide-react";

const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    status: "In Progress",
    icon: "🟠",
    color: "#FF9900",
    bg: "rgba(255,153,0,0.08)",
    border: "rgba(255,153,0,0.2)",
    description: "Designing resilient, cost-optimized architectures on AWS",
    verifyUrl: "#",
  },
  {
    name: "Microsoft Azure Administrator (AZ-104)",
    issuer: "Microsoft",
    status: "Planned",
    icon: "🔵",
    color: "#0078D4",
    bg: "rgba(0,120,212,0.08)",
    border: "rgba(0,120,212,0.2)",
    description: "Managing Azure subscriptions, identities, storage, and networking",
    verifyUrl: "#",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "CNCF / Linux Foundation",
    status: "Planned",
    icon: "☸️",
    color: "#326CE5",
    bg: "rgba(50,108,229,0.08)",
    border: "rgba(50,108,229,0.2)",
    description: "Administering Kubernetes clusters in production environments",
    verifyUrl: "#",
  },
  {
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    status: "Planned",
    icon: "🌍",
    color: "#7B42BC",
    bg: "rgba(123,66,188,0.08)",
    border: "rgba(123,66,188,0.2)",
    description: "Infrastructure as Code with Terraform for multi-cloud deployments",
    verifyUrl: "#",
  },
  {
    name: "CCNA – Cisco Certified Network Associate",
    issuer: "Cisco",
    status: "Completed",
    icon: "🌐",
    color: "#00BCF2",
    bg: "rgba(0,188,242,0.08)",
    border: "rgba(0,188,242,0.2)",
    description: "Routing, switching, network fundamentals, and troubleshooting",
    verifyUrl: "#",
  },
  {
    name: "Google Professional Cloud DevOps Engineer",
    issuer: "Google Cloud",
    status: "Planned",
    icon: "🔴",
    color: "#4285F4",
    bg: "rgba(66,133,244,0.08)",
    border: "rgba(66,133,244,0.2)",
    description: "Balancing service reliability and delivery speed on GCP",
    verifyUrl: "#",
  },
];

const statusStyles: Record<string, { text: string; bg: string; border: string }> = {
  Completed: {
    text: "#4ade80",
    bg: "rgba(74,222,128,0.1)",
    border: "rgba(74,222,128,0.3)",
  },
  "In Progress": {
    text: "#00FFD1",
    bg: "rgba(0,255,209,0.1)",
    border: "rgba(0,255,209,0.3)",
  },
  Planned: {
    text: "#94a3b8",
    bg: "rgba(148,163,184,0.08)",
    border: "rgba(148,163,184,0.2)",
  },
};

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
            Structured learning to validate skills across cloud, DevOps, and infrastructure engineering
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => {
            const st = statusStyles[cert.status];
            return (
              <div
                key={cert.name}
                className="glass glass-hover rounded-2xl p-6 flex flex-col"
                style={{ border: `1px solid ${cert.border}` }}
              >
                {/* Top */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: cert.bg }}
                  >
                    {cert.icon}
                  </div>
                  <span
                    className="text-xs font-mono px-2.5 py-1 rounded-full font-medium"
                    style={{
                      color: st.text,
                      background: st.bg,
                      border: `1px solid ${st.border}`,
                    }}
                  >
                    {cert.status}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-display font-bold text-white text-base leading-snug mb-1">
                  {cert.name}
                </h3>
                <p className="text-white/40 text-xs mb-3 font-mono">{cert.issuer}</p>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed flex-1 mb-5">
                  {cert.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-1.5">
                    {cert.status === "Completed" ? (
                      <ShieldCheck className="w-4 h-4 text-green-400" />
                    ) : (
                      <Award className="w-4 h-4 text-white/30" />
                    )}
                    <span className="text-white/30 text-xs">
                      {cert.status === "Completed"
                        ? "Verified"
                        : cert.status === "In Progress"
                        ? "Studying now"
                        : "Coming soon"}
                    </span>
                  </div>
                  {cert.status === "Completed" && (
                    <a
                      href={cert.verifyUrl}
                      className="flex items-center gap-1 text-xs font-mono hover:text-neon-teal text-white/30 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Verify
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
