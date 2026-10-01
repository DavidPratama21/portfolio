# TODO — yang perlu kamu isi sendiri

Catatan untuk lanjutan branch `v2`. Semua yang bisa dikerjakan tanpa data pribadi
sudah beres (lihat bagian paling bawah). Sisanya butuh keputusan/data dari kamu.

---

## 1. Data pribadi — `src/data/content.ts`

Semua ada di objek `profile` paling atas, sudah ditandai `// TODO`:

- [ ] `email` — masih `emailkamu@example.com`
- [ ] `socials` — 3 URL masih `github.com/username` dsb
- [ ] **Putuskan nama panggilan.** Situs pakai `"Daun"`, tapi file CV & akun git
      pakai "David Pratama". Nama ini muncul di logo nav, badge foto hero, layar
      loading, dan `<title>` — jadi konsisten satu saja.

Sudah aku sambungkan (tinggal cek):
- `photo` → `/assets/images/profile.webp` ✅
- `cvUrl` → `/CV_David%20Pratama.pdf` ✅

---

## 2. Isi ulang daftar project — `src/data/content.ts`

Komponen-nya sudah aku siapkan untuk screenshot + tombol link. Tinggal isi 3 field
opsional ini per project, sisanya jalan otomatis:

```ts
image?: string;  // screenshot; kalau kosong → jatuh balik ke banner emoji
url?: string;    // link situs live  → muncul tombol "Lihat Live ↗"
repo?: string;   // link source code → muncul tombol "Kode ↗"
```

**Data project dari versi lama (v1) — tinggal copy:**

| Project | image | url | repo |
|---|---|---|---|
| Shiba Hidrolik Pratama | `/assets/images/shibahidrolikpratama.com.webp` | `https://shibahidrolikpratama.com/` | — |
| Video Belajar | `/assets/images/videobelajar.webp` | `https://video-belajar-portfolio.netlify.app/` | `https://github.com/DavidPratama21/videobelajar` |
| Sarana Gema Rekayasa | `/assets/images/saranagemarekayasa.webp` | `https://saranagemareka.netlify.app/` | `https://github.com/Daun2121/sarana-gr` |

> ⚠️ 4 project yang ada di `content.ts` sekarang **beda** dari 3 project v1 di atas.
> v2 nulisnya generik ("Company Website — Hydraulic Systems"), v1 pakai nama asli
> klien. Perlu diputuskan mau digabung atau dipilih salah satu gaya.
> Saran: pakai nama asli + screenshot — lebih meyakinkan buat recruiter.

- [ ] Gabungkan project lama + project baru yang kamu bilang mau ditambah
- [ ] Isi `image` / `url` / `repo` per project

---

## 3. Domain & preview link — `index.html`

Tag OG sudah aku kembalikan, tapi **URL-nya masih nunjuk domain v1**
(`portfoliodapid.netlify.app`). Ada 4 tempat yang perlu diganti serempak:
`og:url`, `og:image`, `twitter:image`.

- [ ] Putuskan deploy ke mana. Sekarang ada `vercel.json`, tapi domain lama Netlify.
      Kalau tetap Netlify, `vercel.json` bisa dihapus (dan sebaliknya perlu
      `netlify.toml` / setting redirect SPA).
- [ ] Ganti semua URL absolut ke domain final
- [ ] Bikin gambar preview khusus ukuran **1200×630** (sekarang masih pakai
      `logo.png` yang kotak — di WhatsApp/LinkedIn bakal ke-crop jelek)

---

## 4. Optimasi gambar

File-nya kegedean buat web (idealnya < 150KB):

- [ ] `public/assets/images/profile.webp` — **798 KB** ← paling parah, ini foto hero
- [ ] `public/assets/images/videobelajar.webp` — **611 KB**
- [ ] `public/assets/images/saranagemarekayasa.webp` — 322 KB

Bisa pakai [squoosh.app](https://squoosh.app) — WebP quality 75 biasanya sudah
turun drastis tanpa keliatan beda.

Opsional: rename `CV_David Pratama.pdf` jadi `cv-david-pratama.pdf` (tanpa spasi
& huruf besar) biar URL-nya bersih. Kalau di-rename, update `cvUrl` di `content.ts`.

---

## 5. Nice-to-have (belum mendesak)

- [ ] `public/robots.txt` + `sitemap.xml`
- [ ] `<title>` & `<meta description>` belum ikut ganti waktu tombol bahasa ditekan
      (perlu di-update via JS di `useSettings`)
- [ ] Form kontak. v1 punya form EmailJS, v2 cuma tombol `mailto:`. Kalau mau
      form lagi, EmailJS bisa dipasang balik — tapi `mailto:` juga sah kok.

---

## ✅ Sudah dikerjakan

- **Nav mobile** — dulu link nav hilang total di bawah 900px. Sekarang ada tombol
  hamburger + panel dropdown, bisa ditutup pakai Escape / klik luar / klik link.
- **Favicon + OG/Twitter tags** dikembalikan ke `index.html`, plus `theme-color`
  yang ikut light/dark.
- **Projects** — komponen sekarang dukung screenshot (`image`) dengan fallback ke
  banner emoji kalau gambar gagal load, plus tombol "Lihat Live" & "Kode".
- **Foto profil & CV** disambungkan ke file yang memang sudah ada di `public/`
  (sebelumnya nunjuk `/profile.jpg` yang nggak ada → hero selalu tampil inisial,
  dan tombol CV nunjuk `#` alias mati).
- **Bilingual** — `alt` foto hero & teks layar loading tadinya hardcoded Indonesia,
  sekarang ikut tombol bahasa. Nama di loader ambil dari `profile.name`, nggak
  ditulis "DAUN" lagi.
- **Loader** — dulu nahan user 1.1 detik dengan timer tetap. Sekarang nunggu
  halaman beneran siap (min 600ms biar animasi kelihatan, cap 2.5s biar nggak
  nyandera kalau koneksi lambat).
- **Performa** — semua `<Reveal>` (~20 elemen) tadinya bikin `IntersectionObserver`
  sendiri-sendiri, sekarang berbagi satu observer.
- **Bug** — `setTimeout` di animasi kata muter (hero) nggak di-clear pas unmount.
- **CSS** — warna footer yang hardcoded (`#8f90ab`) diganti token biar ikut tema.
- **`.gitignore`** — tambah `*.tsbuildinfo`, `.vercel`, `.netlify`, `.DS_Store`.
  (`tsconfig.tsbuildinfo` tadinya bakal ikut ke-commit.)
