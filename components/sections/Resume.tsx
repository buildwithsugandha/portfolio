"use client";

import { useState } from "react";
import { Download, Printer, FileText, Eye } from "lucide-react";

const resumeHighlights = [
  "Cloud & Site Reliability Engineering (SRE)",
  "AWS & Azure Cloud Operations",
  "Incident Management · DRI · SLA/SLO",
  "Azure Bastion & Hybrid Cloud",
  "SAST / DAST Vulnerability Remediation",
  "Dynatrace · Jarvis · Hawkeye · ICM",
  "Linux & Windows Server Administration",
  "Shell Scripting · Python · KQL",
];

export default function Resume() {
  const [imgError, setImgError] = useState(false);
  const handleView = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section id="resume" className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag">
            <span>08</span>
            Resume
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            My <span className="text-gradient">Resume</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            A full picture of my experience, skills, and education
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Resume Preview Card */}
          <div className="glass rounded-2xl p-8 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ background: "linear-gradient(90deg, #00FFD1, #00B4FF, #9D4EDD)" }}
            />

            <div className="space-y-6">
              {/* Name block */}
              <div className="border-b border-white/10 pb-5">
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center text-xl font-bold font-display text-gradient"
                    style={{ background: "rgba(0,255,209,0.1)", border: "1px solid rgba(0,255,209,0.2)" }}
                  >
                    {!imgError ? (
                      <img
                        src="/profile.jpg"
                        alt="Sugandha Vashishtha"
                        onError={() => setImgError(true)}
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                      />
                    ) : (
                      "SV"
                    )}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">Sugandha Vashishtha</h3>
                    <p className="text-neon-teal text-sm font-mono">Cloud & Site Reliability Engineer</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-white/30 text-xs font-mono">
                  <span>📍 Noida, India</span>
                  <span>📧 buildwithsugandha@gmail.com</span>
                  <span>🔗 linkedin.com/in/sugandha-vashishtha</span>
                </div>
              </div>

              {/* Skills preview */}
              <div>
                <p className="text-white/20 text-xs font-mono uppercase tracking-widest mb-3">
                  Key Skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {resumeHighlights.map((skill) => (
                    <span key={skill} className="skill-badge text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Preview sections */}
              <div className="space-y-3">
                {["Experience", "Education", "Certifications", "Projects"].map((section) => (
                  <div key={section} className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-neon-teal" />
                    <div className="h-px flex-1 bg-white/5" />
                    <span className="text-white/20 text-xs font-mono">{section}</span>
                    <div className="h-px flex-1 bg-white/5" />
                  </div>
                ))}
              </div>

              <div
                className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                style={{ background: "linear-gradient(transparent, rgba(13,21,38,0.8))" }}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Ready to download
              </h3>
              <p className="text-white/50 leading-relaxed">
                9+ years of experience across cloud operations, SRE, AWS, Azure, incident
                management, and enterprise infrastructure. Available as a PDF for immediate
                download.
              </p>
            </div>

            {/* Action buttons */}
            <div className="space-y-3">
              <a
                href="/resume.pdf"
                download="Sugandha_Vashishtha_Resume.pdf"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume (PDF)
              </a>
              <button
                onClick={handleView}
                className="btn-outline w-full flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4" />
                View Full Resume
              </button>
              <button
                onClick={() => window.print()}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white/40 hover:text-white/70 transition-all border border-white/10 hover:border-white/20"
              >
                <Printer className="w-4 h-4" />
                Print
              </button>
            </div>

            {/* File info */}
            <div className="glass rounded-xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(0,255,209,0.1)" }}>
                <FileText className="w-5 h-5 text-neon-teal" />
              </div>
              <div>
                <p className="text-white font-medium text-sm">Sugandha_Vashishtha_Resume.pdf</p>
                <p className="text-white/30 text-xs mt-0.5">Last updated · June 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
