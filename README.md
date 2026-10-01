# My Portfolio

A personal portfolio for **Tegar Haris DD**, a Junior Software & AI Engineer. Built with React, Vite, and Tailwind CSS with an editorial, ledger-inspired visual identity and a blue/white palette.

## Live Demo

🔗 [View Portfolio](https://tegarharisdd.github.io/MyPortofolio/)

## Features

- 🧭 Single-page layout: About, Skills, Experience, Education, Certificates, and Contact
- 🌗 Light/dark theme with an inverted "blueprint" dark mode
- 📱 Fully responsive, with a sticky section index in the navbar
- ✍️ Editorial typography (Fraunces, Space Grotesk, IBM Plex Mono)
- 🎞️ One orchestrated hero load and a single restrained scroll reveal
- ♿ Respects `prefers-reduced-motion` and keyboard focus states

## Tech Stack

- **React** — UI library
- **Vite** — Build tool and dev server
- **Tailwind CSS** — Utility-first styling with CSS-variable color tokens
- **React Icons** — Icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/TegarHarisDD/MyPortofolio.git
cd MyPortofolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to the URL printed by Vite (the site is served under `/MyPortofolio/`).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # React components
│   ├── About.jsx
│   ├── Certificates.jsx
│   ├── Contact.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Section.jsx        # Shared section shell (margin label + hairline reveal)
│   └── Skills.jsx
├── data/
│   └── profile.json       # All portfolio content
├── hooks/
│   ├── useScrollAnimation.jsx
│   └── useTheme.jsx
├── App.jsx
├── main.jsx
└── index.css              # Design tokens, reveal/load animations, utilities
```

## Contact

- **Email:** tegarharisdd@gmail.com
- **LinkedIn:** [tegarharisdd](https://linkedin.com/in/tegarharisdd)
- **GitHub:** [TegarHarisDD](https://github.com/TegarHarisDD)
