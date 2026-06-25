"use client";

import { Mail, AlertCircle, Lightbulb, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "AWS Three-Tier Architecture",
    emoji: "🏗️",
    color: "#FF9900",
    bg: "rgba(255,153,0,0.05)",
    border: "rgba(255,153,0,0.2)",
    problem: "Need a scalable, fault-tolerant web application infrastructure that handles traffic spikes without manual intervention.",
    solution: "Production-grade three-tier architecture on AWS using EC2, RDS Multi-AZ, and ALB. Infrastructure provisioned entirely via Terraform with VPC segmentation, security groups, NAT Gateways, and CloudWatch monitoring.",
    outcome: "Auto-scaling group handles traffic spikes automatically. Multi-AZ RDS ensures database high availability with automatic failover under 60 seconds.",
    tags: ["AWS", "Terraform", "VPC", "EC2", "RDS", "ALB", "CloudWatch"],
    github: "https://github.com/buildwithsugandha/aws-three-tier-arch",
    highlights: ["Multi-AZ", "Auto-scaling", "IaC"],
  },
  {
    title: "Kubernetes Monitoring Stack",
    emoji: "📊",
    color: "#326CE5",
    bg: "rgba(50,108,229,0.05)",
    border: "rgba(50,108,229,0.2)",
    problem: "Kubernetes clusters running without visibility into pod health, node resource usage, or SLO breach alerting.",
    solution: "Full observability stack with Prometheus, Grafana, and Alertmanager. Pre-built dashboards for cluster health, pod metrics, and custom SLO tracking. Deployed via Helm charts with GitOps-ready configuration.",
    outcome: "Real-time visibility into cluster health. SLO alerting fires before end-users notice degradation, reducing mean time to detect (MTTD).",
    tags: ["Kubernetes", "Prometheus", "Grafana", "Helm", "Alertmanager"],
    github: "https://github.com/buildwithsugandha/k8s-monitoring-stack",
    highlights: ["SLO Tracking", "Helm", "GitOps"],
  },
  {
    title: "Terraform Infrastructure Automation",
    emoji: "🌍",
    color: "#7B42BC",
    bg: "rgba(123,66,188,0.05)",
    border: "rgba(123,66,188,0.2)",
    problem: "Manual infrastructure provisioning across dev/staging/prod environments leads to configuration drift and inconsistent deployments.",
    solution: "Modular Terraform codebase for multi-environment AWS infrastructure using remote state management with S3/DynamoDB locking, workspaces, and reusable modules for VPC, EKS, RDS, and IAM. Integrated with GitHub Actions.",
    outcome: "Infrastructure changes reviewed and applied automatically via CI/CD. Environment parity enforced across dev, staging, and production.",
    tags: ["Terraform", "AWS", "GitHub Actions", "S3", "EKS", "IAM"],
    github: "https://github.com/buildwithsugandha/terraform-infra-automation",
    highlights: ["Multi-env", "Remote State", "CI/CD"],
  },
  {
    title: "Azure Hybrid Connectivity",
    emoji: "🔗",
    color: "#0078D4",
    bg: "rgba(0,120,212,0.05)",
    border: "rgba(0,120,212,0.2)",
    problem: "On-premises workloads need secure, reliable connectivity to Azure virtual networks without exposing public endpoints.",
    solution: "Site-to-site VPN between on-premises network and Azure VNet using Azure VPN Gateway, local network gateway configuration, BGP routing, and NSG rules. Documented with step-by-step runbooks and tested failover procedures.",
    outcome: "Secure hybrid connectivity established. BGP dynamic routing ensures automatic failover. Runbooks reduced incident resolution time during connectivity issues.",
    tags: ["Azure", "VPN Gateway", "BGP", "NSG", "Hybrid Cloud"],
    github: "https://github.com/buildwithsugandha/azure-hybrid-connectivity",
    highlights: ["BGP Routing", "Failover", "Hybrid"],
  },
  {
    title: "DevOps CI/CD Pipeline",
    emoji: "⚡",
    color: "#00FFD1",
    bg: "rgba(0,255,209,0.05)",
    border: "rgba(0,255,209,0.2)",
    problem: "Containerized Node.js app deployed manually — no automated testing, no security scanning, and no rollback capability.",
    solution: "End-to-end CI/CD pipeline using GitHub Actions, Docker, and Kubernetes. Stages: linting → unit tests → Docker build/push to ECR → Trivy security scanning → automated deployment to EKS with rollback capability.",
    outcome: "Deployment frequency increased. Security vulnerabilities caught pre-production via Trivy scan. Automated rollback prevents bad deployments from reaching users.",
    tags: ["GitHub Actions", "Docker", "Kubernetes", "ECR", "Trivy", "EKS"],
    github: "https://github.com/buildwithsugandha/devops-cicd-pipeline",
    highlights: ["Security Scan", "Auto-rollback", "EKS"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag">
            <span>05</span>
            Projects
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Things I&apos;ve <span className="text-gradient">Built</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            Hands-on projects demonstrating cloud architecture, DevOps practices, and infrastructure automation
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass glass-hover rounded-2xl p-6 flex flex-col"
              style={{ border: `1px solid ${project.border}` }}
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: project.bg }}
                >
                  {project.emoji}
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="mailto:Sugandh1212@gmail.com?subject=Project Repository Request"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-white/40 hover:text-neon-teal transition-colors text-xs font-mono"
                    title="Repository available upon request"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Request Repository
                  </a>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-white text-lg mb-4">
                {project.title}
              </h3>

              {/* Problem / Solution / Outcome */}
              <div className="space-y-3 flex-1 mb-4">
                <div className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-orange-400 text-xs font-mono uppercase tracking-wide mb-0.5">Problem</p>
                    <p className="text-white/50 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Lightbulb className="w-4 h-4 text-neon-teal mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-neon-teal text-xs font-mono uppercase tracking-wide mb-0.5">Solution</p>
                    <p className="text-white/50 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-green-400 text-xs font-mono uppercase tracking-wide mb-0.5">Outcome</p>
                    <p className="text-white/50 text-sm leading-relaxed">{project.outcome}</p>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.highlights.map((h) => (
                  <span
                    key={h}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-bold"
                    style={{
                      color: project.color,
                      background: project.bg,
                      border: `1px solid ${project.border}`,
                    }}
                  >
                    ★ {h}
                  </span>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                {project.tags.map((tag) => (
                  <span key={tag} className="skill-badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note about repos */}
        <p className="text-center text-white/25 text-xs font-mono mt-6">
          Repository code & architecture documentation available upon request and consultation
        </p>

        {/* CTA */}
        <div className="text-center mt-4">
          <a
            href="mailto:Sugandh1212@gmail.com?subject=Project Repository & Consultation Request"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Request Project Details
          </a>
        </div>
      </div>
    </section>
  );
}
