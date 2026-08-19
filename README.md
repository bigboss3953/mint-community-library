# Mint Community Library Website

A modern, welcoming website for the Mint Community Library built with Next.js, React, and Tailwind CSS.

## Features

- **Home Page**: Hero section with search and call-to-action
- **Programs & Classes**: Showcase library programs and educational classes
- **Resources**: Educational materials and community resources
- **About Us**: Library mission, history, and values
- **Contact**: Contact information and location details
- **Responsive Design**: Mobile-first design that works on all devices

## Design

- **Color Scheme**: Deep green (#006B3C), fresh lime green (#7ED321), with light mint backgrounds
- **Typography**: Poppins for headings, Inter for body text
- **Style**: Modern, minimal, warm, and community-focused

## Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/bigboss3953/mint-community-library.git
cd mint-community-library

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel at https://vercel.com
3. Vercel will automatically deploy on each push to main

### GitHub Pages
Configure your repository settings to deploy from the gh-pages branch.

## Project Structure

```
mint-community-library/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── (pages)/
│       ├── programs/page.tsx
│       ├── resources/page.tsx
│       ├── about/page.tsx
│       └── contact/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Hero.tsx
├── public/
│   └── images/
├── tailwind.config.ts
└── package.json
```

## License

MIT License - feel free to use this project for your community library.
