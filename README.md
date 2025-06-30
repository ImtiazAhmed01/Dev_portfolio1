This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Developer Portfolio – Frontend Developer Technical Assessment

Welcome to my submission for the Frontend Developer role at **Raintor Ltd.** This project is built as part of the technical assessment, focusing on UI design implementation, responsiveness, component architecture, accessibility, and code quality using the **Next.js** framework and modern frontend best practices.

## 🌐 Live Demo

**Hosted on Vercel**: [https://your-portfolio.vercel.app](https://your-portfolio.vercel.app)  
**GitHub Repository**: [https://github.com/yourusername/raintor-portfolio](https://github.com/yourusername/raintor-portfolio)

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Testing](#-testing)
- [Accessibility](#-accessibility)
- [Limitations & Tradeoffs](#-limitations--tradeoffs)
- [Screenshots](#-screenshots)
- [License](#-license)

---

## 📌 Overview

This is a developer portfolio homepage recreated from a Figma design, implemented using **Next.js**, **TypeScript**, and **Tailwind CSS**. The implementation ensures:

- Pixel-perfect UI fidelity
- Responsive design for mobile and desktop
- Accessible and user-friendly UX
- Scalable and modular codebase

---

## 🧰 Tech Stack

- **Framework**: Next.js (App Router or Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State & Data**: LocalStorage, Context API
- **Testing**: Jest + React Testing Library
- **Tooling**: ESLint, Prettier, Husky (optional)

---

## 🎯 Features

- ✨ Pixel-perfect responsive layout based on Figma design
- 🌗 Light/Dark theme toggle with persistence (localStorage)
- ♿ Keyboard navigation and basic ARIA roles
- 📦 Modular component structure (`components/`, `hooks/`, `contexts/`)
- 🌀 Skeleton loader or spinner while data is loading
- 🪟 Virtualized list rendering using `react-window` (if applicable)
- 🚨 Error boundary fallback UI
- 🧪 Unit tested with Jest and React Testing Library
- 🧹 Code formatted with ESLint & Prettier

---

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/ImtiazAhmed01/raintor-portfolio.git
cd raintor-portfolio

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev


# 4. Build for production
npm run build
npm run start
