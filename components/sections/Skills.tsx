"use client";

import { useState } from "react";

const skillCategories = [
  {
    id: "cloud",
    label: "Cloud",
    emoji: "☁️",
    color: "#00B4FF",
    bg: "rgba(0,180,255,0.08)",
    border: "rgba(0,180,255,0.2)",
    skills: [
      { name: "AWS", level: 75, icon: "🟠" },
      { name: "Azure", level: 80, icon: "🔵" },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    emoji: "⚙️",
    color: "#00FFD1",
    bg: "rgba(0,255,209,0.08)",
    border: "rgba(0,255,209,0.2)",
    skills: [
      { name: "Docker", level: 80, icon: "🐳" },
      { name: "Kubernetes", level: 70, icon: "☸️" },
      { name: "Terraform", level: 70, icon: "🌍" },
      { name: "Jenkins", level: 65, icon: "🔧" },
      { name: "GitHub Actions", level: 75, icon: "⚡" },
      { name: "Ansible", level: 65, icon: "🅰️" },
    ],
  },
  {
    id: "monitoring",
    label: "Monitoring",
    emoji: "📊",
    color: "#9D4EDD",
    bg: "rgba(157,78,221,0.08)",
    border: "rgba(157,78,221,0.2)",
    skills: [
      { name: "Grafana", level: 75, icon: "📈" },
      { name: "Prometheus", level: 70, icon: "🔥" },
      { name: "Datadog", level: 65, icon: "🐶" },
      { name: "Splunk", level: 60, icon: "🔍" },
    ],
  },
  {
    id: "networking",
    label: "Networking",
    emoji: "🌐",
    color: "#00FFD1",
    bg: "rgba(0,255,209,0.08)",
    border: "rgba(0,255,209,0.2)",
    skills: [
      { name: "TCP/IP", level: 92, icon: "🔗" },
      { name: "DNS", level: 88, icon: "📡" },
      { name: "Routing", level: 85, icon: "🛣️" },
      { name: "VPN", level: 82, icon: "🔒" },
      { name: "Firewalls", level: 80, icon: "🛡️" },
      { name: "Load Balancers", level: 78, icon: "⚖️" },
    ],
  },
  {
    id: "os",
    label: "OS",
    emoji: "💻",
    color: "#00B4FF",
    bg: "rgba(0,180,255,0.08)",
    border: "rgba(0,180,255,0.2)",
    skills: [
      { name: "Linux", level: 88, icon: "🐧" },
      { name: "Windows Server", level: 82, icon: "🪟" },
    ],
  },
  {
    id: "programming",
    label: "Scripting",
    emoji: "💻",
    color: "#9D4EDD",
    bg: "rgba(157,78,221,0.08)",
    border: "rgba(157,78,221,0.2)",
    skills: [
      { name: "Python", level: 72, icon: "🐍" },
      { name: "Bash", level: 80, icon: "📜" },
      { name: "PowerShell", level: 75, icon: "💙" },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState("cloud");
  const currentCat = skillCategories.find((c) => c.id === active)!;

  return (
    <section id="skills" className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag">
            <span>02</span>
            Skills
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            Tools and technologies I use to build, monitor, and scale reliable infrastructure
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium font-mono transition-all duration-200 ${
                active === cat.id
                  ? "text-dark-950 font-bold"
                  : "glass text-white/50 hover:text-white"
              }`}
              style={
                active === cat.id
                  ? {
                      background: `linear-gradient(135deg, ${cat.color}, ${cat.color}99)`,
                      boxShadow: `0 0 20px ${cat.color}40`,
                    }
                  : {}
              }
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div
          key={active}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {currentCat.skills.map((skill, i) => (
            <div
              key={skill.name}
              className="glass glass-hover rounded-xl p-5"
              style={{
                animationDelay: `${i * 60}ms`,
                border: `1px solid ${currentCat.border}`,
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="font-medium text-white text-sm">{skill.name}</span>
                </div>
                <span
                  className="text-xs font-mono font-bold"
                  style={{ color: currentCat.color }}
                >
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${skill.level}%`,
                    background: `linear-gradient(90deg, ${currentCat.color}99, ${currentCat.color})`,
                    boxShadow: `0 0 10px ${currentCat.color}50`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* All skills quick view */}
        <div className="mt-12 glass rounded-2xl p-6">
          <p className="text-white/30 text-xs font-mono mb-4 uppercase tracking-widest">
            All Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {skillCategories.flatMap((cat) =>
              cat.skills.map((skill) => (
                <span key={`${cat.id}-${skill.name}`} className="skill-badge">
                  {skill.name}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
