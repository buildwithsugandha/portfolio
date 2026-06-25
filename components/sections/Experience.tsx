"use client";

import { Building2, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    company: "Tech Mahindra",
    project: "AT&T Bastion — Microsoft Azure & AWS",
    role: "Cloud Infrastructure Engineer",
    duration: "Jul 2025 – Present",
    type: "Full-time",
    color: "#00FFD1",
    responsibilities: [
      "Designed and managed secure Microsoft Azure infrastructure for enterprise workloads; administered Azure Bastion architecture for secure remote access across hybrid cloud environments",
      "Managed Azure subscriptions, resource groups, virtual networks, IAM, and shared image galleries across Windows and Linux platforms",
      "Configured HTTP proxy solutions for traffic and security management; troubleshot Azure-to-on-premises connectivity issues spanning Bastion, Load Balancers, VMs, and proxy configurations",
      "Monitored infrastructure and application health through metrics, logs, and operational health checks to maintain high availability and SLA compliance",
      "Used GitHub Copilot to accelerate code-related fixes and infrastructure automation tasks",
    ],
    achievements: [],
    tags: ["Azure Bastion", "AWS", "IAM", "Load Balancers", "Virtual Networks", "Linux", "GitHub Copilot"],
  },
  {
    company: "Tech Mahindra",
    project: "Tracfone–Verizon — AWS Security & Vulnerability Remediation",
    role: "DevSecOps Engineer — Application OS Remediation",
    duration: "Aug 2024 – Jun 2025",
    type: "Full-time",
    color: "#00B4FF",
    responsibilities: [
      "Performed SAST and DAST scans across 126 AWS-hosted applications to identify security vulnerabilities; tracked 300+ findings through full remediation lifecycle in alignment with compliance requirements",
      "Conducted systematic vulnerability assessment and remediation of OS-level risks across AWS EC2 instances; prioritised HIGH and CRITICAL CVEs for immediate patching",
      "Executed OS patching across 40+ EC2 instances aligned with Change Management protocols; ran pre- and post-patching validation checkpoints achieving zero downtime across all change windows",
      "Accessed AWS EC2 instances via AWS Session Manager for patching and upgrades; managed server snapshots and rollback strategy for risk mitigation and business continuity",
    ],
    achievements: [
      "Assessed 126 applications through SAST/DAST in a single engagement cycle — identified and tracked 300+ HIGH/CRITICAL vulnerabilities to remediation closure",
      "Achieved zero-downtime patching across 40+ EC2 instances through structured pre/post-validation checkpoints",
    ],
    tags: ["SAST", "DAST", "AWS EC2", "Session Manager", "OS Patching", "Vulnerability Remediation", "Change Management", "DevSecOps"],
  },
  {
    company: "Tech Mahindra",
    project: "Microsoft Nebula Score Cloud",
    role: "Site Reliability Engineer (DRI)",
    duration: "Jul 2022 – Jul 2024",
    type: "Full-time",
    color: "#9D4EDD",
    responsibilities: [
      "Served as Designated Response Individual (DRI) on an agile SRE team — owned service availability, service health, incident response, and SLA/SLO accountability",
      "Monitored services using Dynatrace and Microsoft ICM; participated in daily spike-management calls, triaged alerts, and led/contributed to root cause analyses (RCA) for production incidents",
      "Monitored and supported production applications using Hawkeye and Jarvis; improved alert detection time through proactive monitoring and alert tuning",
      "Managed Cloudman billing, OS patching, OS upgrades, infrastructure monitoring, and Fabric Manager operations; used KQL extensively to query telemetry and investigate production issues",
      "Oversaw Microsoft Nebula architecture: offline nodes, storage tier services, hardware failures, host upgrades, reimaging, RAID configuration, WDS, fabric creation, and DHCP scoping",
    ],
    achievements: [
      "Maintained 99.9% SLA accountability as DRI across 8+ production services running on Microsoft Nebula infrastructure",
      "Reduced mean time to detect (MTTD) by ~30% through proactive Dynatrace alert tuning and ICM incident triage optimisation",
      "Coordinated with SETO, Private Lab Networks, and Microsoft Lab Services for hardware and network operations — supporting 2,000+ bare-metal nodes",
    ],
    tags: ["SRE", "DRI", "Dynatrace", "Microsoft ICM", "Hawkeye", "Jarvis", "KQL", "Nebula", "Cloudman"],
  },
  {
    company: "Career Break",
    project: "Self-Study & AWS Certification Preparation",
    role: "Independent Learning — Cloud & AWS",
    duration: "Mar 2021 – Nov 2021",
    type: "Career Break",
    color: "#ffffff",
    responsibilities: [
      "Dedicated period of structured self-study focused on AWS cloud fundamentals, infrastructure-as-code, and cloud architecture patterns",
      "Completed hands-on labs across AWS core services — EC2, S3, VPC, IAM, RDS, and CloudFormation — in preparation for AWS certification track",
    ],
    achievements: [],
    tags: ["AWS", "Self-Study", "Cloud Fundamentals", "Career Development"],
  },
  {
    company: "Tech Mahindra",
    project: "Netgear — US, UK, Australia, Canada",
    role: "Network Support Engineer",
    duration: "Dec 2021 – May 2022",
    type: "Full-time",
    color: "#00FFD1",
    responsibilities: [
      "Resolved router, modem, and network connectivity issues for end customers via voice support across four countries",
      "Configured and installed wireless controllers, routers, and switches; performed routing/switching platform troubleshooting",
    ],
    achievements: [],
    tags: ["Networking", "Routing", "Switching", "Wireless", "TCP/IP", "Customer Support"],
  },
  {
    company: "Xavient Digital Software Solutions",
    project: "TELUS Communications, Canada",
    role: "Technical Support Associate",
    duration: "Aug 2019 – Mar 2021",
    type: "Full-time",
    color: "#00B4FF",
    responsibilities: [
      "Provided technical support through root cause analysis, support documentation, and resolution; ensured compliance with company policies and data security standards",
    ],
    achievements: [],
    tags: ["Root Cause Analysis", "Technical Support", "Data Security", "Documentation"],
  },
  {
    company: "HI3 Technologies Pvt. Ltd.",
    project: "Hewlett Packard — India",
    role: "Technical Support Executive",
    duration: "Jan 2018 – Jun 2019",
    type: "Full-time",
    color: "#00FFD1",
    responsibilities: [
      "Troubleshot Windows 8, 8.1, and 10 issues for end users via email and phone; supported a high-volume rollout queue to meet deadlines",
      "Conducted desktop and laptop troubleshooting for HP enterprise clients; managed escalation workflows and ensured timely issue resolution",
    ],
    achievements: [],
    tags: ["Windows Support", "Desktop Troubleshooting", "HP", "Technical Support", "Escalation Management"],
  },
  {
    company: "Convergys India Pvt. Ltd.",
    project: "AT&T — Dallas, Texas, United States",
    role: "Customer Service Representative",
    duration: "May 2016 – Oct 2017",
    type: "Full-time",
    color: "#9D4EDD",
    responsibilities: [
      "Delivered customer support across phone, email, and chat for AT&T; resolved billing and service issues with a focus on first-call resolution",
      "Strengthened client relationships and drove customer satisfaction in a high-volume enterprise contact centre environment",
    ],
    achievements: [],
    tags: ["Customer Support", "AT&T", "Billing & Services", "Communication", "CRM"],
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
            9+ years building reliability — from network operations to cloud infrastructure and SRE at scale
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-8 pl-12 sm:pl-16">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative">
                {/* Timeline dot */}
                <div
                  className="absolute -left-12 sm:-left-16 top-6 w-5 h-5 rounded-full flex items-center justify-center z-10"
                  style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}` }}
                >
                  <div className="w-2 h-2 rounded-full bg-dark-950" />
                </div>

                {/* Card */}
                <div className="glass glass-hover rounded-2xl p-6">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-1">
                    <div>
                      <h3 className="font-display font-bold text-base text-white leading-snug">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Building2 className="w-3.5 h-3.5 text-white/40" />
                        <span className="text-white/60 text-sm font-medium">{exp.company}</span>
                      </div>
                      <p className="text-white/30 text-xs font-mono mt-0.5">
                        📁 {exp.project}
                      </p>
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
                  {exp.responsibilities.length > 0 && (
                    <div className="mt-4 mb-4">
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
                  )}

                  {/* Achievements */}
                  {exp.achievements.length > 0 && (
                    <div className="mb-4">
                      <p className="text-white/30 text-xs font-mono uppercase tracking-wider mb-3">
                        Key Outcomes
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
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="skill-badge">
                        {tag}
                      </span>
                    ))}
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
