# Momint Landing Page

A modern, production-ready Next.js 15 landing page for Momint - a marketplace for creators to mint, sell, and preserve their legacy moments as digital assets.

## Features

- ⚡ **Next.js 15** - Latest Next.js with App Router
- 🎨 **Tailwind CSS v3** - Modern utility-first CSS framework
- 🔍 **SEO Optimized** - Comprehensive meta tags and Open Graph support
- 🎯 **Lucide Icons** - Beautiful, consistent iconography
- 📱 **Fully Responsive** - Mobile-first design
- ✨ **Smooth Animations** - Scroll-triggered animations and interactive elements
- 🎭 **Dynamic Navbar** - Transforms from static to dynamic island on scroll

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
momint-landing/
├── app/
│   ├── layout.tsx      # Root layout with metadata and fonts
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles and Tailwind directives
├── components/
│   ├── Navbar.tsx      # Navigation bar with dynamic island effect
│   ├── Hero.tsx        # Hero section with 3D card effects
│   ├── ProblemGrid.tsx # Problem statement cards
│   ├── HowItWorks.tsx  # Process steps
│   ├── Gallery.tsx     # Trending moments gallery
│   ├── Testimonial.tsx # Customer testimonial
│   └── Footer.tsx      # Footer with links and newsletter
├── public/
│   └── favicon.svg     # Lucide icon favicon
└── package.json
```

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **Fonts**: Inter & Outfit (Google Fonts)
- **Language**: TypeScript

## Build for Production

```bash
npm run build
npm start
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:
- `deepViolet`: #2E1065
- `electricPurple`: #8B5CF6
- `softLavender`: #F8F7FF
- `premiumDark`: #0F0F14
- `surface`: #FAFAFA

### SEO

Update metadata in `app/layout.tsx` to customize SEO tags, Open Graph, and Twitter cards.

## License

All rights reserved © 2023 Momint Inc.


