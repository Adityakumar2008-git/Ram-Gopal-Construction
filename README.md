# 🏗️ Ram Gopal Constructions

> **Premier Construction, Building Demolition, Interior Designing & Property Consultation Company in Delhi NCR.**

Official web platform for **Ram Gopal Constructions** (Founder & Director: **Ankit Pal**), based in Faridabad, Haryana, serving clients across Delhi NCR (Faridabad, Gurugram, Noida, Delhi, Greater Noida, and Ghaziabad).

---

## 🌟 Key Features

- **End-to-End Construction & Demolition**: Residential construction, commercial builds, and safe building demolition/dismantling services.
- **Turnkey Modern Interiors**: Modular kitchens, false ceiling gypsum fit-outs, wall paneling, and ambient lighting.
- **Marble & Tile Craftsmanship**: Italian marble diamond polishing, vitrified tile installation, and waterproofing.
- **Property Catalogue & Consultation**: Representative catalogue for buying, selling, and renting properties in Delhi NCR.
- **Direct Formspree Integration**: Contact and quotation forms configured with automatic Formspree API routing.
- **Rate-Limiting & Anti-Spam Protection**: Client-side submission throttling, 60s cooldown, session caps, and hidden `_gotcha` honeypot traps for bot/DDoS protection.
- **Mobile-First App Experience**: Native swipe scroll snapping on mobile viewports, sticky mobile bottom action bar, and smooth Framer Motion micro-animations.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 6
- **Routing**: React Router DOM (v7)
- **Styling**: Tailwind CSS v4 + Vanilla CSS Design Tokens
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Form Submissions**: Formspree API Integration
- **Deployment & Hosting**: Netlify (Single Page App with `_redirects`)

---

## 📁 Project Structure

```text
Ram Gopal Construction/
├── public/                  # Favicon, logo, high-resolution visual assets & _redirects
│   ├── logo.jpg             # Official Ram Gopal Constructions badge logo
│   ├── ankit-pal.png        # Founder & Director profile photo
│   └── _redirects           # Netlify SPA routing rules
├── src/
│   ├── components/          # Reusable UI & section components
│   │   ├── layout/          # Navbar, Footer, PageHeader, FloatingCTA
│   │   ├── sections/        # Hero, AboutPreview, ServicesGrid, ProjectsGrid, etc.
│   │   └── ui/              # Button, Card, Modal, SectionHeading
│   ├── constants/           # Centralized company info & contact details
│   ├── data/                # Service, project, property, FAQ & process datasets
│   ├── pages/               # Home, About, Services, Projects, Catalogue, Gallery, Contact
│   ├── index.css            # Base Tailwind setup & luxury design tokens
│   ├── mobile.css           # Dedicated mobile responsiveness & swipe animation stylesheet
│   └── main.jsx             # React entrypoint
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18+) installed.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Adityakumar2008-git/Ram-Gopal-Construction.git
   cd Ram-Gopal-Construction
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` (or `http://localhost:3001`) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📞 Contact Information

- **Founder & Director**: Ankit Pal
- **Phone / WhatsApp**: [+91 76784 11181](tel:7678411181)
- **Email**: [Ankitpal1311@gamil.com](mailto:Ankitpal1311@gamil.com)
- **Headquarters**: D-5/132, Shiv Durga Vihar, Lakkadpur, Faridabad, Haryana - 121009
- **Working Hours**: Monday - Sunday: 9:00 AM - 7:00 PM

---

## 📄 License

Copyright © 2026 **Ram Gopal Constructions**. All Rights Reserved.
