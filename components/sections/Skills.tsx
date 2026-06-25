"use client";

const skillTiers = [
  {
    id: "expertise",
    label: "Expertise",
    subtitle: "Core competencies — used daily in production",
    color: "#00FFD1",
    bg: "rgba(0,255,209,0.08)",
    border: "rgba(0,255,209,0.25)",
    dotColor: "bg-neon-teal",
    skills: [
      { name: "Microsoft Azure", icon: "🔵" },
      { name: "AWS", icon: "🟠" },
      { name: "Incident Management", icon: "🚨" },
      { name: "SRE / DRI", icon: "🛡️" },
      { name: "Dynatrace", icon: "📊" },
      { name: "Microsoft ICM", icon: "🔔" },
      { name: "Azure Bastion", icon: "🔐" },
      { name: "Linux Administration", icon: "🐧" },
      { name: "Windows Server", icon: "🪟" },
      { name: "KQL (Kusto)", icon: "🔍" },
      { name: "SQL", icon: "🗄️" },
      { name: "SLA / SLO Management", icon: "📈" },
    ],
  },
  {
    id: "proficient",
    label: "Proficient",
    subtitle: "Hands-on project & work experience",
    color: "#00B4FF",
    bg: "rgba(0,180,255,0.08)",
    border: "rgba(0,180,255,0.25)",
    dotColor: "bg-neon-blue",
    skills: [
      { name: "SAST / DAST", icon: "🔒" },
      { name: "Vulnerability Remediation", icon: "🩹" },
      { name: "AWS EC2 & IAM", icon: "☁️" },
      { name: "AWS Session Manager", icon: "🔑" },
      { name: "Hawkeye & Jarvis", icon: "👁️" },
      { name: "Shell Scripting", icon: "📜" },
      { name: "Python (Fundamentals)", icon: "🐍" },
      { name: "Docker", icon: "🐳" },
      { name: "CI/CD Pipelines", icon: "⚡" },
      { name: "Git & GitHub", icon: "🐙" },
      { name: "GitHub Copilot", icon: "🤖" },
      { name: "TCP/IP & Networking", icon: "🌐" },
    ],
  },
  {
    id: "learning",
    label: "Learning & Building",
    subtitle: "Actively studying and expanding",
    color: "#9D4EDD",
    bg: "rgba(157,78,221,0.08)",
    border: "rgba(157,78,221,0.25)",
    dotColor: "bg-purple-400",
    skills: [
      { name: "Kubernetes", icon: "☸️" },
      { name: "Terraform", icon: "🌍" },
      { name: "Prometheus & Grafana", icon: "📉" },
      { name: "GitHub Actions", icon: "⚙️" },
      { name: "Ansible", icon: "🅰️" },
      { name: "Snowflake", icon: "❄️" },
    ],
  },
];

export default function Skills() {
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
            Skills organized by depth of hands-on experience — from daily production use to active learning
          </p>
        </div>

        {/* Tier cards */}
        <div className="space-y-8">
          {skillTiers.map((tier) => (
            <div
              key={tier.id}
              className="glass rounded-2xl p-6 sm:p-8"
              style={{ border: `1px solid ${tier.border}` }}
            >
              {/* Tier header */}
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ background: tier.color, boxShadow: `0 0 8px ${tier.color}` }}
                />
                <h3
                  className="font-display font-bold text-lg"
                  style={{ color: tier.color }}
                >
                  {tier.label}
                </h3>
              </div>
              <p className="text-white/35 text-xs font-mono mb-5 ml-6">
                {tier.subtitle}
              </p>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2.5">
                {tier.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
                    style={{
                      background: tier.bg,
                      border: `1px solid ${tier.border}`,
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    <span className="text-base leading-none">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* On-Premises specialty row */}
        <div className="mt-8 glass rounded-2xl p-6" style={{ border: "1px solid rgba(255,153,0,0.2)" }}>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: "#FF9900", boxShadow: "0 0 8px #FF9900" }} />
            <h3 className="font-display font-bold text-lg" style={{ color: "#FF9900" }}>
              On-Premises Infrastructure
            </h3>
          </div>
          <p className="text-white/35 text-xs font-mono mb-5 ml-6">
            Enterprise datacenter & bare-metal operations — Microsoft Nebula environments
          </p>
          <div className="flex flex-wrap gap-2.5">
            {[
              { name: "Microsoft Nebula", icon: "⚡" },
              { name: "Cloudman", icon: "☁️" },
              { name: "Fabric Manager", icon: "🔧" },
              { name: "RAID Configuration", icon: "💾" },
              { name: "Bare Metal Ops", icon: "🖥️" },
              { name: "WDS", icon: "📦" },
              { name: "DHCP Scoping", icon: "🌐" },
              { name: "Hardware Management", icon: "🔩" },
            ].map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium hover:scale-105 transition-all duration-200"
                style={{
                  background: "rgba(255,153,0,0.06)",
                  border: "1px solid rgba(255,153,0,0.2)",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                <span className="text-base leading-none">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
