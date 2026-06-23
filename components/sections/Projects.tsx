"use client";

import { Github, ExternalLink, Star } from "lucide-react";

const projects = [
  {
    title: "AWS Three-Tier Architecture",
    description:
      "Production-grade three-tier web application architecture on AWS using EC2, RDS (Multi-AZ), and Application Load Balancer. Implements auto-scaling, VPC segmentation, security groups, NAT Gateways, and CloudWatch monitoring. Infrastructure provisioned entirely via Terraform.",
    tags: ["AWS", "Terraform", "VPC", "EC2", "RDS", "ALB", "CloudWatch"],
    color: "#FF9900",
    bg: "rgba(255,153,0,0.05)",
    border: "rgba(255,153,0,0.15)",
    emoji: "🏗️",
    github: "https://github.com/sugandhsharma/aws-three-tier-arch",
    demo: "#",
    highlights: ["Multi-AZ", "Auto-scaling", "IaC"],
  },
  {
    title: "Kubernetes Monitoring Stack",
    description:
      "Full observability stack for Kubernetes clusters using Prometheus, Grafana, and Alertmanager. Includes pre-built dashboards for cluster health, pod metrics, node resource usage, and custom SLO tracking. Deployed via Helm charts with GitOps-ready configuration.",
    tags: ["Kubernetes", "Prometheus", "Grafana", "Helm", "Alertmanager"],
    color: "#326CE5",
    bg: "rgba(50,108,229,0.05)",
    border: "rgba(50,108,229,0.15)",
    emoji: "📊",
    github: "https://github.com/sugandhsharma/k8s-monitoring-stack",
    demo: "#",
    highlights: ["SLO Tracking", "Helm", "GitOps"],
  },
  {
    title: "Terraform Infrastructure Automation",
    description:
      "Modular Terraform codebase for multi-environment AWS infrastructure (dev/staging/prod). Uses remote state management with S3 and DynamoDB locking, workspaces, and reusable modules for VPC, EKS, RDS, and IAM. Integrated with GitHub Actions for automated plan/apply.",
    tags: ["Terraform", "AWS", "GitHub Actions", "S3", "EKS", "IAM"],
    color: "#7B42BC",
    bg: "rgba(123,66,188,0.05)",
    border: "rgba(123,66,188,0.15)",
    emoji: "🌍",
    github: "https://github.com/sugandhsharma/terraform-infra-automation",
    demo: "#",
    highlights: ["Multi-env", "Remote State", "CI/CD"],
  },
  {
    title: "Azure Hybrid Connectivity Project",
    description:
      "Site-to-site VPN connectivity between on-premises network and Azure Virtual Network. Includes Azure VPN Gateway setup, local network gateway configuration, BGP routing, and NSG rules. Documented with step-by-step runbooks and tested failover procedures.",
    tags: ["Azure", "VPN Gateway", "BGP", "NSG", "Hybrid Cloud"],
    color: "#0078D4",
    bg: "rgba(0,120,212,0.05)",
    border: "rgba(0,120,212,0.15)",
    emoji: "🔗",
    github: "https://github.com/sugandhsharma/azure-hybrid-connectivity",
    demo: "#",
    highlights: ["BGP Routing", "Failover", "Hybrid"],
  },
  {
    title: "DevOps CI/CD Pipeline",
    description:
      "End-to-end CI/CD pipeline for a containerized Node.js app using GitHub Actions, Docker, and Kubernetes. Pipeline stages include linting, unit tests, Docker image build/push to ECR, security scanning with Trivy, and automated deployment to EKS with rollback capability.",
    tags: ["GitHub Actions", "Docker", "Kubernetes", "ECR", "Trivy", "EKS"],
    color: "#00FFD1",
    bg: "rgba(0,255,209,0.05)",
    border: "rgba(0,255,209,0.15)",
    emoji: "⚡",
    github: "https://github.com/sugandhsharma/devops-cicd-pipeline",
    demo: "#",
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
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass text-white/40 hover:text-neon-teal transition-colors"
                    aria-label="GitHub repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass text-white/40 hover:text-neon-teal transition-colors"
                    aria-label="Live demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-white text-lg mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-4">
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
                    <Star className="w-2.5 h-2.5" />
                    {h}
                  </span>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="skill-badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/sugandhsharma"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
