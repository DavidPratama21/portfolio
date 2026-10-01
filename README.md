# Daun Portfolio — React + TypeScript

Portfolio + CV single-page, bold & playful style. Dark mode + bilingual (ID/EN).
Zero dependency runtime selain React — styling pakai CSS murni, tanpa framework.

## Cara jalanin

```bash
npm install
npm run dev      # development
npm run build    # typecheck + production build -> dist/
npm run preview  # preview hasil build
```

## Edit konten

Semua teks, project, skills, dan link ada di **`src/data/content.ts`** — satu file,
tinggal edit. Tipe datanya strict TypeScript, jadi kalau ada yang kurang bakal
langsung ke-flag editor.

> 📌 Ada beberapa field yang masih placeholder (email, social link, dll).
> Daftar lengkapnya di **[TODO.md](TODO.md)**.

## Struktur

```
src/
  App.tsx              komposisi section, kontrol intro loader
  data/content.ts      SEMUA konten & copy ada di sini
  hooks/useSettings.ts theme + bahasa (disimpan ke localStorage)
  components/
    ui.tsx             <Reveal> (animasi scroll) & <RichText> (**bold**/*italic*)
    Nav Hero Marquee About Skills Projects Cv Contact
    Loader ScrollProgress Cursor
  styles.css           seluruh styling + design token
public/                aset statis (foto, CV, screenshot project)
```

## Aset

File di folder `public/` otomatis ikut ke-deploy tanpa setting apa-apa,
dan diakses dari root — mis. `public/logo.png` → `/logo.png`.

- **Foto profil** — atur path-nya di `profile.photo` (`content.ts`).
  Rasio persegi paling aman, min 600×600px. Kalau file-nya nggak ketemu,
  hero otomatis nampilin placeholder inisial.
- **Screenshot project** — isi field `image` per project. Kalau dikosongin,
  banner-nya jatuh balik ke emoji + gradien garis-garis.

## Dark mode & bahasa

- Preferensi theme & bahasa disimpan di `localStorage`, jadi keinget pas balik lagi.
- Default theme ngikutin `prefers-color-scheme` OS; default bahasa Indonesia.
- Semua animasi hormat ke `prefers-reduced-motion`.

## Deploy

Sudah termasuk `vercel.json`:

**Via Dashboard:**
1. Push project ini ke GitHub
2. Buka [vercel.com/new](https://vercel.com/new) → Import repo
3. Vercel auto-detect Vite, langsung klik **Deploy**

**Via CLI:**
```bash
npm i -g vercel
vercel          # deploy preview
vercel --prod   # deploy production
```

Setiap push ke branch utama = auto redeploy. Custom domain diatur di
Project Settings → Domains.

> ⚠️ Setelah domain final ketahuan, update URL absolut di tag `og:*` /
> `twitter:*` pada `index.html` — sekarang masih nunjuk domain lama.
