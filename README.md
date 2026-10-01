# Moch Rafi Adnan Setiadipura - Personal Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-purple?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

Personal portfolio website for **Moch Rafi Adnan Setiadipura**, Software & Frontend Engineer based in Bandung, Indonesia. Built with modern web standards, high-performance animations, WCAG 2.2 AA accessibility, and a dual-theme visual system.

---

## ✨ Fitur Utama

- **Section Routing & Transisi Fluida:** Transisi halaman berbasis komponen dinamis tanpa reload menggunakan Framer Motion.
- **Dual-Theme Support:**
  - _Light Mode:_ Estetika hangat _Sand Beige_ (`#EEE9DA`) dengan kontras teks teruji WCAG AA.
  - _Dark Mode:_ Estetika _OLED Developer Dark_ (`#0B1120`, `#151F32`, aksen `#38BDF8`) dengan penyimpanan preferensi di `localStorage` dan deteksi sistem operasi.
- **Pintasan Navigasi Keyboard:** Menekan tombol `Escape` (`Esc`) kapan saja saat berada di dalam section detail akan langsung mengembalikan Anda ke Hero overview secara instan.
- **Micro-Interactions & Live Status:**
  - Kartu menu dengan sudut `rounded-2xl` glassmorphic, hover radial glow, dan indikator panah dinamis.
  - Badge status ketersediaan kerja (_"Available for work"_) dengan animasi radar hijau berkedip (_pulsing beacon_).
- **Form Kontak Tervalidasi & Aksesibel:** Validasi schema menggunakan Zod & React Hook Form dengan atribut aksesibilitas ARIA (`aria-invalid`, `aria-describedby`) untuk screen reader.
- **Dukungan Multi-Bahasa:** Terintegrasi bilingual Bahasa Indonesia (ID) dan English (EN).
- **Aksesibilitas Reduced-Motion:** Mematikan animasi berat secara otomatis jika pengguna mengaktifkan pengaturan `prefers-reduced-motion`.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16.3 (App Router & Turbopack)
- **UI Library:** React 19
- **Bahasa:** TypeScript 5.9
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`, tw-animate-css)
- **Animasi:** Framer Motion 12
- **Ikon:** Lucide React
- **Validasi Form:** React Hook Form + Zod (`@hookform/resolvers`)
- **Email Service:** Resend API

---

## 🚀 Memulai (Getting Started)

### Prasyarat

- Node.js >= 18.x
- npm / pnpm / yarn

### Instalasi Dependensi

```bash
npm install
```

### Menjalankan Server Pengembangan

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

### Build untuk Produksi

```bash
npm run build
npm run start
```

### Linting & Format

```bash
npm run lint
npm run format
```

---

## 📂 Struktur Direktori

```
src/
├── app/
│   ├── api/contact/route.ts   # Endpoint API pengiriman pesan kontak via Resend
│   ├── globals.css            # Token desain, CSS custom properties, & aturan aksesibilitas
│   ├── layout.tsx             # Root layout dengan ThemeProvider & LanguageProvider
│   └── page.tsx               # Entry point PortfolioLayout
├── components/
│   ├── hero-minimal.tsx       # Hero section dengan kartu navigasi interaktif
│   ├── portfolio-layout.tsx   # Shell navigasi & listener keyboard shortcut (Esc)
│   ├── theme-provider.tsx     # Context & hook pengatur tema (Light & Dark)
│   ├── language-provider.tsx  # Context pengatur bahasa (ID & EN)
│   ├── projects.tsx           # Showcase proyek dengan highlight metrik
│   ├── experience.tsx         # Riwayat pengalaman kerja
│   ├── skills.tsx             # Pengelompokan keahlian teknis
│   ├── contact.tsx            # Form kontak tervalidasi
│   ├── about.tsx              # Profil diri & nilai engineering
│   ├── certifications.tsx     # Sertifikasi profesional
│   └── source.tsx             # Informasi repositori & lisensi
└── lib/
    ├── data.ts                # Data konten personal
    ├── translations.ts        # Kamus terjemahan bilingual (ID & EN)
    └── utils.ts               # Helper utilities (clsx, tailwind-merge)
```

---

## 📜 Lisensi & Atribusi

- Desain visual terinspirasi dari kreasi [Prince Chijioke](https://dribbble.com/shots/18413288-Frontend-Developer-Portfolio) di Dribbble.
- Kode dan konten dikembangkan oleh **Moch Rafi Adnan Setiadipura**.
