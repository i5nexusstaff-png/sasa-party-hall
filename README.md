# SASA Party Hall 🎉

A modern, responsive, premium website for the luxury event venue **SASA Party Hall** —
_"Creating Memories for Every Celebration"_.

Built with **React (Vite)**, **Tailwind CSS**, **Framer Motion**, **Swiper**, **React Router**,
**React Icons**, **AOS** and **EmailJS**.

## ✨ Features

- Premium gold + dark + glassmorphism design
- Fully responsive (320px → 1920px)
- Light / Dark mode toggle
- 12 routes: Home, About, Services, Gallery, Booking, Contact, Testimonials, FAQ,
  Privacy, Terms, Cancellation, 404
- Framer Motion page & scroll animations, parallax CTA, animated counters
- Filterable gallery with lightbox
- Booking & contact forms with validation that send enquiries straight to WhatsApp
- Sticky navbar, scroll progress bar, back-to-top, floating WhatsApp & Call buttons
- Lazy-loaded routes (code splitting) + SEO meta tags

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default http://localhost:5173).

### Build for production

```bash
npm run build
npm run preview
```

## ⚙️ Configuration

- **Brand / contact / WhatsApp number:** `src/data/siteData.js` — the `phone`, `phoneRaw`,
  `whatsapp` and `address` fields drive the call button, floating buttons and both forms.
  Booking & contact enquiries open WhatsApp pre-filled to the `whatsapp` number.
- **Logo:** place your logo image at `public/logo.png` (falls back to `public/logo.svg`).
- **Google Map:** replace `mapEmbed` in `src/data/siteData.js` with your venue's embed URL.
- **Content:** all data lives under `src/data/` (features, events, services, gallery,
  testimonials, faqs, stats).

## 📁 Project Structure

```
src/
  components/   reusable UI (Navbar, Footer, Hero, cards, forms, ...)
  pages/        route pages
  data/         placeholder content & config
  hooks/        custom hooks (scroll, count-up)
  context/      theme provider
  utils/        Framer Motion variants
  App.jsx       routes + layout
  main.jsx      entry
```

> All images are royalty-free placeholders from Unsplash — replace with your own for production.
