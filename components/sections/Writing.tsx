"use client";

import { ExternalLink, BookOpen, Linkedin } from "lucide-react";

const articles = [
  {
    title: "GitHub vs GitLab: What Most Developers Get Wrong!!",
    platform: "LinkedIn",
    date: "Jun 2026",
    tag: "DevOps",
    tagColor: "#00B4FF",
    href: "https://www.linkedin.com/pulse/github-vs-gitlab-what-most-developers-get-wrong-sugandhaa-vashishthaa-gfg7c/",
  },
  {
    title: "DevOps vs DevSecOps: Why Speed Alone Is No Longer Enough",
    platform: "LinkedIn",
    date: "Jan 2026",
    tag: "DevSecOps",
    tagColor: "#9D4EDD",
    href: "https://www.linkedin.com/pulse/devops-vs-devsecops-why-speed-alone-longer-enough-vashishthaa-sfp4c/",
  },
  {
    title: "Streamlining Server Regression Analysis with Windows Deployment Kit",
    platform: "Medium",
    date: "Jun 2023",
    tag: "Infrastructure",
    tagColor: "#00FFD1",
    href: "https://medium.com/@sugandh1212/streamlining-server-regression-analysis-with-windows-deployment-kit-e21dd33bb3c2",
  },
  {
    title: "Speech to Text using AWS Transcribe, S3, and Lambda",
    platform: "LinkedIn",
    date: "Apr 2023",
    tag: "AWS",
    tagColor: "#FF9900",
    href: "https://www.linkedin.com/pulse/speech-text-using-aws-transcribe-s3-lambda-sugandha-vashishtha/",
  },
  {
    title: "Mastering API Fundamentals with POSTMAN and GraphQL",
    platform: "LinkedIn",
    date: "Jul 2023",
    tag: "API",
    tagColor: "#00B4FF",
    href: "https://www.linkedin.com/pulse/mastering-api-fundamentals-postman-graphql-sugandha-vashishtha/",
  },
  {
    title: "Understanding Web Servers: The Heart of the Internet",
    platform: "LinkedIn",
    date: "Aug 2024",
    tag: "Infrastructure",
    tagColor: "#00FFD1",
    href: "https://www.linkedin.com/pulse/understanding-web-servers-heart-internet-sugandha-vashishtha-uzsmc/",
  },
  {
    title: "AWS Global Accelerator — Improving Latency and Design for Failure",
    platform: "LinkedIn",
    date: "Feb 2023",
    tag: "AWS",
    tagColor: "#FF9900",
    href: "https://www.linkedin.com/pulse/aws-global-accelerator-improving-latency-design-sugandha-vashishtha/",
  },
  {
    title: "The Benefits of AWS Global Accelerator — Case Study: EC2 Linux GUI",
    platform: "LinkedIn",
    date: "Feb 2023",
    tag: "AWS",
    tagColor: "#FF9900",
    href: "https://www.linkedin.com/pulse/benefits-aws-global-accelerator-customers-followed-case-vashishtha/",
  },
  {
    title: "Empowering AI: Unleashing the Potential of ChatGPT Prompt Engineering",
    platform: "LinkedIn",
    date: "2023",
    tag: "AI",
    tagColor: "#9D4EDD",
    href: "https://www.linkedin.com/pulse/empowering-ai-unleashing-potential-chat-gpt-prompt-vashishtha/",
  },
  {
    title: "How AWS Is Helping Big Companies",
    platform: "LinkedIn",
    date: "Apr 2023",
    tag: "AWS",
    tagColor: "#FF9900",
    href: "https://www.linkedin.com/pulse/how-aws-helping-big-companies-sugandha-vashishtha/",
  },
  {
    title: "Companies That Use AWS",
    platform: "LinkedIn",
    date: "Feb 2023",
    tag: "AWS",
    tagColor: "#FF9900",
    href: "https://www.linkedin.com/pulse/companies-use-aws-sugandha-vashishtha/",
  },
];

const platformIcon = (platform: string) =>
  platform === "Medium" ? (
    <span className="font-bold text-white/60 text-xs">M</span>
  ) : (
    <Linkedin className="w-3 h-3 text-[#0077B5]" />
  );

export default function Writing() {
  return (
    <section id="writing" className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag">
            <span>07</span>
            Writing
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Technical <span className="text-gradient">Writing</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            Articles on Cloud, DevOps, AWS, and infrastructure — published on LinkedIn and Medium
          </p>
        </div>

        {/* Featured article — most recent */}
        <a
          href={articles[0].href}
          target="_blank"
          rel="noopener noreferrer"
          className="glass glass-hover rounded-2xl p-6 mb-6 flex flex-col sm:flex-row items-start gap-4 group"
          style={{ border: "1px solid rgba(0,180,255,0.2)" }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(0,180,255,0.1)" }}
          >
            <BookOpen className="w-5 h-5 text-neon-blue" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className="px-2 py-0.5 rounded-full text-xs font-mono font-bold"
                style={{ background: "rgba(0,180,255,0.12)", color: "#00B4FF", border: "1px solid rgba(0,180,255,0.25)" }}
              >
                Latest
              </span>
              <span className="flex items-center gap-1 text-white/30 text-xs font-mono">
                {platformIcon(articles[0].platform)} {articles[0].platform}
              </span>
              <span className="text-white/20 text-xs">{articles[0].date}</span>
            </div>
            <h3 className="font-display font-bold text-white text-lg leading-snug group-hover:text-neon-blue transition-colors mb-1">
              {articles[0].title}
            </h3>
            <p className="text-white/40 text-sm">Click to read on {articles[0].platform} →</p>
          </div>
          <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-neon-blue transition-colors flex-shrink-0 mt-1" />
        </a>

        {/* Articles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.slice(1).map((article) => (
            <a
              key={article.href}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover rounded-xl p-5 flex flex-col gap-3 group"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {/* Meta row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="px-2 py-0.5 rounded-full text-xs font-mono font-semibold"
                    style={{
                      background: `${article.tagColor}12`,
                      color: article.tagColor,
                      border: `1px solid ${article.tagColor}25`,
                    }}
                  >
                    {article.tag}
                  </span>
                  <span className="flex items-center gap-1 text-white/25 text-xs font-mono">
                    {platformIcon(article.platform)}
                  </span>
                </div>
                <span className="text-white/20 text-xs font-mono">{article.date}</span>
              </div>

              {/* Title */}
              <h3 className="font-medium text-white/80 text-sm leading-snug group-hover:text-white transition-colors flex-1">
                {article.title}
              </h3>

              {/* Read link */}
              <div className="flex items-center gap-1 text-white/25 text-xs font-mono group-hover:text-neon-teal transition-colors">
                Read on {article.platform}
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.linkedin.com/in/sugandha-vashishtha/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Linkedin className="w-4 h-4" />
            View All Articles on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
