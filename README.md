<div align="center">

# Sugandha Vashishtha — Portfolio

**Cloud & Site Reliability Engineer · Tech Mahindra · Noida, India**

[![Live Site](https://img.shields.io/badge/Live_Site-View_Portfolio-00FFD1?style=for-the-badge&logo=vercel&logoColor=black)](https://portfolio-sigma-three-ja7phcdxpl.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)

</div>

---

## Overview

Production-ready personal portfolio built with **Next.js 15 App Router**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Dark glassmorphism design with neon accents — built to showcase Cloud Infrastructure, SRE, and DevOps experience to enterprise recruiters.

**Live at:** [portfolio-sigma-three-ja7phcdxpl.vercel.app](https://portfolio-sigma-three-ja7phcdxpl.vercel.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Space Grotesk · Inter · JetBrains Mono |
| Contact Form | Formspree (`xqevppzo`) |
| Analytics | Vercel Analytics |
| Deployment | Vercel (auto-deploy on push to `main`) |
| Scheduling | Cal.com (`buildwithsugandha-hhcowh`) |

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Typewriter title animation, profile photo, Tech Mahindra badge, social links |
| **About** | Bio, terminal block, education, key metrics |
| **Skills** | 4 tiers — Expertise / Proficient / Learning / On-Premises |
| **Experience** | 5 real roles across Tech Mahindra and Xavient Digital (2019–present) |
| **Certifications** | 4 completed certs with Credly verify links + learning roadmap |
| **Projects** | 5 projects with Problem / Solution / Outcome structure + live GitHub links |
| **GitHub** | Stats cards, activity graph, top languages, featured repos |
| **Resume** | PDF preview + download (`Sugandha_Vashishtha_Resume.pdf`) |
| **Contact** | Formspree-wired form + Cal.com scheduling + availability status |

---

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, SEO metadata, JSON-LD, fonts
│   ├── page.tsx            # Page composition — all sections
│   ├── globals.css         # Design tokens, utility classes
│   ├── icon.svg            # Browser tab favicon (SV monogram)
│   ├── not-found.tsx       # Branded 404 page
│   ├── sitemap.ts          # XML sitemap
│   └── robots.ts           # robots.txt
├── components/
│   ├── Background.tsx      # Animated grid + glow orbs
│   ├── Navbar.tsx          # Fixed navbar with scroll-spy
│   ├── Footer.tsx          # Footer with branding + social links
│   ├── ui/
│   │   └── BackToTop.tsx   # Scroll-to-top button
│   └── sections/
│       ├── Hero.tsx        # Typewriter animation + profile photo
│       ├── About.tsx       # Bio + terminal block + education
│       ├── Skills.tsx      # Badge-based skill tiers (no % bars)
│       ├── Experience.tsx  # Timeline with 5 real roles
│       ├── Certifications.tsx  # Credly-linked certs + roadmap
│       ├── Projects.tsx    # Problem/Solution/Outcome cards
│       ├── GitHub.tsx      # GitHub stats + pinned repos
│       ├── Resume.tsx      # Resume preview + PDF download
│       └── Contact.tsx     # Formspree form + Cal.com + contact cards
├── public/
│   ├── profile.jpg         # Professional headshot
│   ├── resume.pdf          # Sugandha_Vashishtha_Resume.pdf
│   └── og-image.svg        # Open Graph image (1200×630)
├── .npmrc                  # legacy-peer-deps=true (ESLint compat fix)
├── vercel.json             # Vercel build config
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Running Locally

```bash
# Clone
git clone https://github.com/buildwithsugandha/portfolio.git
cd portfolio

# Install (legacy flag required for ESLint peer dep)
npm install --legacy-peer-deps

# Dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

```bash
# Production build
npm run build
npm start
```

---

## Design System

| Token | Value | Usage |
|---|---|---|
| Neon Teal | `#00FFD1` | Primary accents, CTAs |
| Neon Blue | `#00B4FF` | Secondary accents, badges |
| Neon Purple | `#9D4EDD` | Tertiary accents |
| Dark Base | `#0d1526` | Background |
| Display Font | Space Grotesk | Headings |
| Body Font | Inter | Body text |
| Mono Font | JetBrains Mono | Code, labels, tags |

---

## Key Features

- **Dark glassmorphism** — frosted glass cards with neon border accents
- **Typewriter animation** — 3 rotating professional titles in hero
- **Real contact form** — wired to Formspree, no fake submissions
- **Cal.com scheduling** — "Schedule a Call" button linked throughout
- **Credly-verified certs** — all 4 badge verify links are live
- **Live GitHub repos** — all 5 project cards link to real repos
- **SEO-ready** — Open Graph, Twitter card, JSON-LD Person schema, sitemap, robots.txt
- **Custom 404** — branded not-found page matching site design
- **Vercel Analytics** — traffic tracking enabled
- **Responsive** — tested on mobile, tablet, and desktop

---

## Deployment

Auto-deploys to Vercel on every push to `main`.

**Vercel settings:**
- Framework preset: Next.js (auto-detected)
- Root directory: *(leave blank)*
- Install command: `npm install --legacy-peer-deps`
- Build command: `npm run build`

---

## Contact

**Sugandha Vashishtha** — Cloud & Site Reliability Engineer

[Portfolio](https://portfolio-sigma-three-ja7phcdxpl.vercel.app) · [LinkedIn](https://linkedin.com/in/sugandha-vashishtha) · [GitHub](https://github.com/buildwithsugandha) · [Email](mailto:Sugandh1212@gmail.com) · [Schedule a Call](https://cal.com/buildwithsugandha-hhcowh)

---

<div align="center">

Built with ⚡ by **Sugandha Vashishtha**

</div>
