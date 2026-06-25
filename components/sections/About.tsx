"use client";

import { Cloud, Shield, GraduationCap, Target, Server, Eye } from "lucide-react";

const highlights = [
  {
    icon: Cloud,
    label: "AWS & Azure Cloud Operations",
    color: "rgba(0,180,255,0.8)",
    bg: "rgba(0,180,255,0.08)",
  },
  {
    icon: Shield,
    label: "SRE · Incident Management · DRI",
    color: "rgba(157,78,221,0.8)",
    bg: "rgba(157,78,221,0.08)",
  },
  {
    icon: Eye,
    label: "Dynatrace, Jarvis & Hawkeye Observability",
    color: "rgba(0,255,209,0.8)",
    bg: "rgba(0,255,209,0.08)",
  },
  {
    icon: Server,
    label: "On-Prem · Hybrid Cloud · Azure Bastion",
    color: "rgba(0,255,209,0.8)",
    bg: "rgba(0,255,209,0.08)",
  },
];

const stats = [
  { value: "9+", label: "Years in IT" },
  { value: "4+", label: "Years in Cloud & SRE" },
  { value: "3", label: "Cloud Platforms" },
  { value: "4", label: "Certifications" },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <span className="section-tag">
              <span>01</span>
              About Me
            </span>

            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Where <span className="text-gradient">Operations</span> meet{" "}
              <span className="text-gradient">Reliability</span>
            </h2>

            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                I&apos;m <span className="text-white font-medium">Sugandha Vashishtha</span>, a
                Cloud and Site Reliability Engineer with 9+ years of experience in IT,
                including 4+ years specializing in cloud operations and SRE across
                Amazon Web Services, Microsoft Azure, and Microsoft Nebula on-premises
                environments.
              </p>
              <p>
                At <span className="text-neon-teal font-medium">Tech Mahindra</span>, I&apos;ve served
                as a <span className="text-white/80">Designated Response Individual (DRI)</span> on
                agile SRE teams — owning service availability, incident response, and
                SLA/SLO accountability for production workloads at Microsoft scale. I&apos;ve
                monitored and triaged alerts using Dynatrace, Jarvis, Hawkeye, and
                Microsoft ICM, and led root cause analyses for production incidents.
              </p>
              <p>
                I believe the best SREs come from ops — because they&apos;ve felt the 3 AM pages,
                traced the packet drops, and learned that reliability is a feature, not an afterthought.
              </p>
            </div>

            {/* Education */}
            <div className="mt-8 space-y-3">
              <div className="flex items-start gap-3 glass rounded-xl p-4">
                <GraduationCap className="w-5 h-5 text-neon-teal mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm">
                    Master of Computer Applications (MCA) — Pursuing
                  </p>
                  <p className="text-white/40 text-xs mt-0.5">
                    Manipal University Jaipur · 2026 – 2028 · Distance Learning
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 glass rounded-xl p-4">
                <GraduationCap className="w-5 h-5 text-neon-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm">
                    Bachelor of Computer Applications (BCA)
                  </p>
                  <p className="text-white/40 text-xs mt-0.5">
                    Manipal University Jaipur · 2022 – 2025 · Distance Learning
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 glass rounded-xl p-4">
                <Target className="w-5 h-5 text-neon-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm">Current Focus</p>
                  <p className="text-white/40 text-xs mt-0.5">
                    Cloud infrastructure engineering, Azure Bastion architecture, hybrid cloud
                    security, and expanding toward CKA and Terraform certification
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Cards + Stats */}
          <div className="space-y-6">
            {/* Highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="glass glass-hover rounded-xl p-5 flex items-start gap-3"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: item.bg }}
                    >
                      <Icon className="w-4 h-4" style={{ color: item.color }} />
                    </div>
                    <p className="text-white/70 text-sm leading-snug font-medium">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold font-display text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/40 text-xs leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal block */}
            <div className="glass rounded-xl p-5 font-mono text-xs">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-white/20 text-xs">sugandha@cloud:~$</span>
              </div>
              <div className="space-y-1 text-white/50">
                <p>
                  <span className="text-neon-teal">$</span> whoami
                </p>
                <p className="text-white/70">sugandha-vashishtha</p>
                <p className="mt-2">
                  <span className="text-neon-teal">$</span> cat /etc/current-role
                </p>
                <p className="text-white/70">
                  Cloud Infrastructure Engineer @ Tech Mahindra
                </p>
                <p className="mt-2">
                  <span className="text-neon-teal">$</span> cat /etc/current-focus
                </p>
                <p className="text-white/70">
                  Azure Bastion ▸ AWS ▸ SRE ▸ Observability ▸ CKA
                </p>
                <p className="mt-2">
                  <span className="text-neon-teal">$</span> echo $AVAILABILITY
                </p>
                <p className="text-green-400">open_to_opportunities=true</p>
                <p className="text-neon-teal animate-pulse">▌</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
