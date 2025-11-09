# 🚛 TTM Fleet — Fleet Management Landing Page

A modern, responsive, and animated **Fleet Management Landing Page** built for  
**TTM (Total Transport Management)** as part of an internship assignment.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**  
for smooth animations, clean structure, and professional design quality.

---

## 🌟 Live Demo

🔗 **Hosted URL:** [https://ttm-fleet.vercel.app/](https://ttm-fleet.vercel.app/)  
🔗 **GitHub Repo:** [https://github.com/Ayush-3012/ttm-fleet](https://github.com/Ayush-3012/ttm-fleet)

---

## 🧩 Project Overview

TTM is a U.S.-based transport technology company offering tools for **Fleet Management**,  
**ELD compliance**, **Telematics**, and **Safety analytics**.

This landing page showcases TTM’s platform with:

- Engaging visuals and smooth animations
- Responsive UI across all screen sizes
- Accessible and SEO-friendly content
- Contact form integration for demo requests

---

## ⚙️ Tech Stack

| Category    | Tools Used                  |
| ----------- | --------------------------- |
| Framework   | **Next.js 14 (App Router)** |
| Language    | **TypeScript**              |
| Styling     | **Tailwind CSS**            |
| Animations  | **Framer Motion**           |
| HTTP Client | **Axios**                   |
| Hosting     | **Vercel**                  |
| Icons       | **Lucide React**            |

---

## 🧱 Folder Structure

ttm-fleet/
┣ app/
┃ ┣ layout.tsx
┃ ┣ page.tsx
┃ ┣ api/contact/route.ts
┣ components/
┃ ┣ Navbar.tsx
┃ ┣ Hero.tsx
┃ ┣ Features.tsx
┃ ┣ Benefits.tsx
┃ ┣ ContactSection.tsx
┃ ┣ ContactForm.tsx
┃ ┣ Footer.tsx
┃ ┗ MotionWrapper.tsx
┣ public/
┃ ┣ logo.png
┃ ┗ hero-dashboard.png
┣ README.md
┗ package.json

---

## 🎨 UI Sections

| Section      | Description                                 |
| ------------ | ------------------------------------------- |
| **Navbar**   | Responsive navigation with mobile menu      |
| **Hero**     | Animated intro with CTAs & hero image       |
| **Features** | Grid cards with icons and hover effects     |
| **Benefits** | Key metrics and measurable outcomes         |
| **Contact**  | Functional form with Framer Motion fade-ups |
| **Footer**   | Minimal, clean, responsive footer           |

---

## 🧠 Core Features

✅ Responsive design (Mobile → Desktop)  
✅ Smooth scroll & scroll-based animations  
✅ Contact form with success/error states  
✅ Accessibility-friendly (`aria-labels`, focus rings)  
✅ Lightweight SEO setup (title, meta, sitemap, robots)  
✅ Code structured by feature & section

---

## 🎥 UI Enhancements (Framer Motion)

- **fadeUp**: Staggered entry for form fields & sections
- **slideIn**: Hero + contact side transitions
- **hover scale**: Buttons & cards lift slightly on hover
- **delayed reveal**: Text & imagery animate smoothly

---

## 🔍 SEO Setup (Light Version)

- Basic meta info via Next.js `Metadata` API
- Title, description, and keywords included

---

## 🚀 Getting Started

### 1️⃣ Clone Repo

```bash
git clone https://github.com/Ayush-3012/ttm-fleet
cd ttm-fleet
```

### 2️⃣ Install Dependencies

Run code
`npm install`

### 3️⃣ Run Locally

Run code
`npm run dev`
Visit: `http://localhost:3000`

📈 Lighthouse Goals
Metric Target
Performance ≥ 95
Accessibility ≥ 95
SEO ≥ 95
Best Practices ≥ 95

These insights guided layout spacing, typography, and motion decisions.

💬 Contact Form API (Local Test)
📁 app/api/contact/route.ts

ts
code

```
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.formData();
  console.log("Lead:", Object.fromEntries(data));
  return NextResponse.json({ ok: true });
}

```

👨‍💻 Author
Ayush Kumar
📍 Delhi
💼 Frontend Developer | UI/UX Enthusiast
📧 diveshsrivastava31@gmail.com

```

```
