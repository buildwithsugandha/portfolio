"use client";

import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const GITHUB_USERNAME = "buildwithsugandha";

const pinnedRepos = [
  {
    name: "aws-three-tier-arch",
    description: "Production-grade three-tier architecture on AWS with Terraform — VPC, EC2, RDS Multi-AZ, ALB, CloudWatch",
    language: "HCL",
    langColor: "#844FBA",
    url: `https://github.com/${GITHUB_USERNAME}/aws-three-tier-arch`,
  },
  {
    name: "k8s-monitoring-stack",
    description: "Prometheus + Grafana + Alertmanager observability stack for Kubernetes clusters with SLO tracking",
    language: "YAML",
    langColor: "#CB171E",
    url: `https://github.com/${GITHUB_USERNAME}/k8s-monitoring-stack`,
  },
  {
    name: "terraform-infra-automation",
    description: "Modular Terraform codebase for multi-environment AWS infrastructure with remote state and GitHub Actions CI/CD",
    language: "HCL",
    langColor: "#844FBA",
    url: `https://github.com/${GITHUB_USERNAME}/terraform-infra-automation`,
  },
  {
    name: "devops-cicd-pipeline",
    description: "End-to-end CI/CD pipeline with GitHub Actions, Docker, Trivy security scanning, and EKS deployment with rollback",
    language: "YAML",
    langColor: "#CB171E",
    url: `https://github.com/${GITHUB_USERNAME}/devops-cicd-pipeline`,
  },
];

export default function GitHub() {
  return (
    <section id="github" className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag">
            <span>06</span>
            GitHub
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Activity &amp; <span className="text-gradient">Contributions</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            Building in public — infrastructure code, automation scripts, and DevOps tooling
          </p>
        </div>

        {/* Stats row: Stats + Streak + Top Languages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="glass rounded-2xl p-1 overflow-hidden">
            <Image
              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=00FFD1&text_color=94a3b8&icon_color=00B4FF&bg_color=00000000&hide=stars`}
              alt="GitHub Stats"
              width={400}
              height={200}
              className="w-full rounded-xl"
              unoptimized
            />
          </div>
          <div className="glass rounded-2xl p-1 overflow-hidden">
            <Image
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=dark&hide_border=true&background=00000000&stroke=00FFD1&ring=00B4FF&fire=9D4EDD&currStreakLabel=00FFD1&sideLabels=94a3b8&dates=475569`}
              alt="GitHub Streak"
              width={400}
              height={200}
              className="w-full rounded-xl"
              unoptimized
            />
          </div>
          <div className="glass rounded-2xl p-1 overflow-hidden">
            <Image
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=00FFD1&text_color=94a3b8&bg_color=00000000`}
              alt="Top Languages"
              width={400}
              height={200}
              className="w-full rounded-xl"
              unoptimized
            />
          </div>
        </div>

        {/* Activity Graph */}
        <div className="glass rounded-2xl p-1 overflow-hidden mb-8">
          <Image
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&theme=react-dark&hide_border=true&bg_color=0d1526&color=00FFD1&line=00B4FF&point=9D4EDD&area=true&area_color=00FFD1`}
            alt="GitHub Activity Graph"
            width={1200}
            height={300}
            className="w-full rounded-xl"
            unoptimized
          />
        </div>

        {/* Pinned Repos — no stars/forks, focus on engineering value */}
        <h3 className="font-display font-bold text-xl text-white mb-5">
          📌 Featured Repositories
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {pinnedRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover rounded-xl p-5 flex flex-col gap-3 group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-white/40 group-hover:text-neon-teal transition-colors" />
                  <span className="font-mono text-sm text-neon-teal font-medium group-hover:underline">
                    {repo.name}
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-white/20 group-hover:text-neon-teal transition-colors" />
              </div>

              <p className="text-white/50 text-sm leading-relaxed flex-1">
                {repo.description}
              </p>

              <div className="flex items-center gap-2 text-xs text-white/30">
                <span className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: repo.langColor }}
                  />
                  {repo.language}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
