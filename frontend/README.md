<div align="center">
  <br />
  <img src="public/demo.webp" alt="MebingLocal Demo" width="800" style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);"/>
  <br /><br />
  
  <h1>📍 MebingLocal</h1>
  <p><b>Your Next Adventure Starts Here. Find verified local companions, discover hidden gems, and experience cities authentically.</b></p>
  
  <p>
    <img src="https://img.shields.io/badge/Next.js%2015-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 15" />
    <img src="https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  </p>
</div>

<hr />

## 🌟 Overview

MebingLocal is a modern, full-stack application that connects travelers with verified local companions. Skip the tourist traps and discover hidden gems through the eyes of a local. Whether you're a solo traveler, looking for a women-only companion, or just wanting authentic recommendations—MebingLocal provides a secure and beautiful platform for your next journey.

## ✨ Features

- **🛡️ Trust & Safety Center**: Every companion goes through ID & background verification. In-app features include live location sharing and an SOS button.
- **🙋‍♀️ Women-Only Option**: Female travelers can exclusively choose women-only companions for extra comfort and security.
- **🤖 AI Recommendations**: Smart suggestions based on your interests, pace, and travel style.
- **⚡ Modern Architecture**: Built with Next.js 15 App Router, delivering blistering fast Server & Client components.
- **🎨 Pixel-Perfect UI**: Stunning visual aesthetics powered by Tailwind CSS v4, Lucide Icons, and Framer Motion micro-interactions.

## 🛠️ Tech Stack

### Frontend
- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/) & [TanStack Query](https://tanstack.com/query/v5/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)

### Backend (NestJS API)
- **Framework:** [NestJS](https://nestjs.com/)
- **Database:** [PostgreSQL](https://www.postgresql.org/) + [Prisma ORM](https://www.prisma.io/)
- **Engine:** Fastify

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (v18+) and npm installed on your machine.

### Installation

1. **Clone the repository** (or navigate to the frontend folder):
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```
   *(Note: `--legacy-peer-deps` is used to ensure compatibility with React 19 ecosystem libraries).*

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```text
src/
├── app/               # Next.js 15 App Router (Pages & Layouts)
├── components/        # Reusable UI components & Layouts
├── features/          # Domain-driven feature modules (Landing, Discover, Profile)
├── lib/               # Utility functions and API configuration (Axios)
├── store/             # Zustand global state stores
└── styles/            # Global CSS and Tailwind directives
```

<hr />
<div align="center">
  <p>Built with ❤️ for modern travelers.</p>
</div>