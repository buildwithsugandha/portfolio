"use client";

import { Building2, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    company: "Current Organization",
    role: "Network & IT Infrastructure Engineer",
    duration: "2022 – Present",
    type: "Full-time",
    color: "#00FFD1",
    responsibilities: [
      "Administered and maintained enterprise network infrastructure including routers, switches, firewalls, and load balancers across multi-site deployments",
      "Managed Azure cloud resources including VMs, virtual networks, NSGs, and Azure Active Directory for hybrid connectivity",
      "Led incident response for P1/P2 network outages — triaged issues, coordinated with vendors, and restored services within defined SLA windows",
      "Implemented network monitoring using Nagios and PRTG; reduced mean time to detect (MTTD) by 35% through improved alerting thresholds",
      "Automated repetitive network audit tasks with Python and Bash scripts, saving ~8 hours per week of manual work",
      "Configured and maintained site-to-site VPNs and remote access VPN solutions for distributed workforce",
      "Documented runbooks and incident postmortems, contributing to a growing internal knowledge base",
    ],
    achievements: [
      "Reduced network incidents by 40% through proactive monitoring and capacity planning",
      "Zero unplanned downtime for critical services over 6 consecutive months",
      "Automated monthly compliance reporting, cutting report generation time from 4 hours to 15 minutes",
    ],
    tags: ["Azure", "Cisco", "Linux", "Python", "Bash", "VPN", "Monitoring"],
  },
  {
    company: "Previous Organization",
    role: "Junior Network Engineer",
    duration: "2021 – 2022",
    type: "Full-time",
    color: "#00B4FF",
    responsibilities: [
      "Assisted in deploying and configuring network equipment (switches, routers, access points) in a 500+ node environment",
      "Performed Level 1 and Level 2 troubleshooting for connectivity, DNS, DHCP, and firewall-related tickets",
      "Supported Windows Server administration including Active Directory, Group Policy, and user provisioning",
      "Contributed to migration of on-premises services to cloud infrastructure (Azure IaaS)",
      "Monitored network performance using SNMP-based tools and escalated anomalies to senior engineers",
    ],
    achievements: [
      "Successfully participated in data center migration with zero data loss",
      "Reduced average ticket resolution time by 20% through improved diagnostic procedures",
    ],
    tags: ["Windows Server", "Active Directory", "DHCP", "DNS", "Azure", "SNMP"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag">
            <span>03</span>
            Experience
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Work <span className="text-gradient">History</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            Building reliability from the ground up — from physical networks to cloud infrastructure
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px timeline-line hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full items-center justify-center z-10 top-6"
                  style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}` }}
                >
                  <div className="w-2 h-2 rounded-full bg-dark-950" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="md:w-1/2">
                  <div className="glass glass-hover rounded-2xl p-6 ml-10 sm:ml-0">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="font-display font-bold text-lg text-white">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Building2 className="w-3.5 h-3.5 text-white/40" />
                          <span className="text-white/50 text-sm">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <Calendar className="w-3.5 h-3.5 text-white/30" />
                        <span
                          className="text-xs font-mono px-3 py-1 rounded-full"
                          style={{
                            background: `${exp.color}15`,
                            border: `1px solid ${exp.color}30`,
                            color: exp.color,
                          }}
                        >
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-5">
                      <p className="text-white/30 text-xs font-mono uppercase tracking-wider mb-3">
                        Responsibilities
                      </p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((r, i) => (
                          <li key={i} className="flex items-start gap-2 text-white/55 text-sm">
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                              style={{ background: exp.color }}
                            />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div className="mb-5">
                      <p className="text-white/30 text-xs font-mono uppercase tracking-wider mb-3">
                        Key Achievements
                      </p>
                      <ul className="space-y-2">
                        {exp.achievements.map((a, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle2
                              className="w-4 h-4 mt-0.5 flex-shrink-0"
                              style={{ color: exp.color }}
                            />
                            <span className="text-white/70">{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="skill-badge">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
