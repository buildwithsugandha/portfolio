# Sugandha Vashishtha – Portfolio Website

A modern, production-ready portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed for DevOps and SRE professionals with a cybersecurity-inspired dark aesthetic, glassmorphism UI, and full Vercel deployment support.

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** – animations
- **Lucide React** – icons
- **Vercel Analytics**
- **Next/Font** – Google Fonts (Inter, Space Grotesk, JetBrains Mono)

## ✨ Features

- 🌑 Dark glassmorphism design with neon teal/blue/purple accents
- 📱 Fully responsive (mobile, tablet, desktop)
- ⌨️ Typewriter title animation in Hero
- 📊 GitHub stats integration (activity graph, streak, top languages)
- 🗂️ Sections: Hero, About, Skills, Experience, Certifications, Projects, GitHub, Resume, Contact, Footer
- 🔍 SEO metadata, Open Graph, sitemap, robots.txt
- ♿ Accessible (keyboard navigation, ARIA labels, reduced motion support)
- ⚡ Lighthouse score 95+ target
- 🌐 Scroll spy active nav highlighting
- 🔝 Back-to-top button

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── page.tsx            # Main page composition
│   ├── globals.css         # Global styles & custom CSS classes
│   ├── sitemap.ts          # XML sitemap
│   └── robots.ts           # robots.txt
├── components/
│   ├── Background.tsx      # Animated grid + orb background
│   ├── Navbar.tsx          # Fixed navbar with scroll spy
│   ├── Footer.tsx          # Footer with branding
│   ├── ui/
│   │   └── BackToTop.tsx   # Scroll-to-top button
│   └── sections/
│       ├── Hero.tsx         # Hero with typewriter + floating badges
│       ├── About.tsx        # About + terminal block
│       ├── Skills.tsx       # Tabbed skills with progress bars
│       ├── Experience.tsx   # Timeline with responsibilities
│       ├── Certifications.tsx
│       ├── Projects.tsx     # Project cards with GitHub links
│       ├── GitHub.tsx       # GitHub stats images + pinned repos
│       ├── Resume.tsx       # Resume preview + download
│       └── Contact.tsx      # Contact form + info
├── public/
│   └── resume.pdf          # ← ADD YOUR RESUME HERE
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Install & Run

```bash
# Clone the repository
git clone https://github.com/sugandhsharma/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Update your details

1. **Resume**: Replace `public/resume.pdf` with your actual resume
2. **GitHub username**: Search for `sugandhsharma` and replace with your GitHub username
3. **Email**: Update `hello@sugandhsharma.dev` in Contact and Footer
4. **LinkedIn**: Update the LinkedIn URL
5. **Domain**: Update `sugandhsharma.dev` in `app/layout.tsx` for Open Graph and canonical URLs
6. **OG Image**: Add `public/og-image.png` (1200×630px) for social sharing previews

### Add a profile photo

In `components/sections/Hero.tsx`, replace the `SS` initials block with:

```tsx
<Image
  src="/images/profile.jpg"
  alt="Sugandh Sharma"
  fill
  className="object-cover"
/>
```

Then place your photo at `public/images/profile.jpg`.

### Connect the contact form

The contact form currently simulates submission. To connect it:

**Option 1 – Formspree (easiest):**
```bash
# Sign up at formspree.io, create a form, get your endpoint
```
Then in `Contact.tsx`, replace the simulated fetch with:
```ts
const res = await fetch("https://formspree.io/f/YOUR_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
```

**Option 2 – Resend + Next.js API Route:**
Create `app/api/contact/route.ts` with Resend SDK.

## 🚀 Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option 2: GitHub Integration (recommended)

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Add your custom domain in Project Settings → Domains

### Environment Variables

No environment variables required for the base setup. If you add Formspree, Resend, or other services, add keys in Vercel → Project → Settings → Environment Variables.

## 🎨 Design System

| Token | Value |
|-------|-------|
| Neon Teal | `#00FFD1` |
| Neon Blue | `#00B4FF` |
| Neon Purple | `#9D4EDD` |
| Dark Base | `#020817` |
| Display Font | Space Grotesk |
| Body Font | Inter |
| Mono Font | JetBrains Mono |

## 📄 License

MIT — free to use and customize for your own portfolio.

---

Built with ⚡ by Sugandh Sharma · [sugandhsharma.dev](https://sugandhsharma.dev)
