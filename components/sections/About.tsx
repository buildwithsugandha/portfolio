"use client";

import { Network, Cloud, Code2, Shield, GraduationCap, Target } from "lucide-react";

const highlights = [
  {
    icon: Network,
    label: "IT Infrastructure & Network Ops",
    color: "rgba(0,255,209,0.8)",
    bg: "rgba(0,255,209,0.08)",
  },
  {
    icon: Cloud,
    label: "Azure & AWS Cloud Administration",
    color: "rgba(0,180,255,0.8)",
    bg: "rgba(0,180,255,0.08)",
  },
  {
    icon: Shield,
    label: "Incident Management & SRE",
    color: "rgba(157,78,221,0.8)",
    bg: "rgba(157,78,221,0.08)",
  },
  {
    icon: Code2,
    label: "Automation & Scripting",
    color: "rgba(0,255,209,0.8)",
    bg: "rgba(0,255,209,0.08)",
  },
];

const stats = [
  { value: "3+", label: "Years in IT Infra" },
  { value: "2", label: "Cloud Platforms" },
  { value: "10+", label: "Technologies" },
  { value: "∞", label: "Curiosity" },
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
              Where <span className="text-gradient">Networks</span> meet{" "}
              <span className="text-gradient">the Cloud</span>
            </h2>

            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                I&apos;m a Network Engineer with hands-on experience in IT infrastructure
                operations, cloud administration, and incident management. My foundation in
                TCP/IP, routing protocols, VPNs, and firewall management gives me a deep
                understanding of the systems that power modern cloud environments.
              </p>
              <p>
                Currently, I&apos;m channeling that operational expertise into a deliberate
                transition toward <span className="text-neon-teal font-medium">Cloud Engineering</span>,{" "}
                <span className="text-neon-teal font-medium">DevOps</span>, and{" "}
                <span className="text-neon-teal font-medium">Site Reliability Engineering</span>.
                I believe the best SREs come from ops — because they&apos;ve felt the 3 AM pages,
                traced the packet drops, and learned that reliability is a feature, not an afterthought.
              </p>
              <p>
                I&apos;m actively building on{" "}
                <span className="text-white/80">AWS and Azure</span>, learning Kubernetes
                orchestration, writing Terraform for infrastructure as code, and automating
                everything I can with Python and Bash. My goal is to work on systems at scale —
                ones where the architecture decisions I make today determine uptime tomorrow.
              </p>
            </div>

            {/* Education */}
            <div className="mt-8 flex items-start gap-3 glass rounded-xl p-4">
              <GraduationCap className="w-5 h-5 text-neon-teal mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white font-medium text-sm">
                  Master of Computer Applications (MCA)
                </p>
                <p className="text-white/40 text-xs mt-0.5">
                  Manipal University Jaipur, India
                </p>
              </div>
            </div>

            {/* Career goal */}
            <div className="mt-4 flex items-start gap-3 glass rounded-xl p-4">
              <Target className="w-5 h-5 text-neon-blue mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white font-medium text-sm">Career Goal</p>
                <p className="text-white/40 text-xs mt-0.5">
                  Transitioning to Cloud, DevOps, and SRE roles — building the reliability
                  layer of modern infrastructure
                </p>
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
            <div className="grid grid-cols-4 gap-4">
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
                <span className="ml-2 text-white/20 text-xs">sugandh@cloud:~$</span>
              </div>
              <div className="space-y-1 text-white/50">
                <p>
                  <span className="text-neon-teal">$</span> whoami
                </p>
                <p className="text-white/70">sugandh-sharma</p>
                <p className="mt-2">
                  <span className="text-neon-teal">$</span> cat /etc/current-focus
                </p>
                <p className="text-white/70">
                  Cloud ▸ DevOps ▸ SRE ▸ Kubernetes ▸ IaC
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
