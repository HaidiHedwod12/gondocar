# Gondo Car Landing Page

Landing page elegan untuk mobil keluarga Gondo dengan 3 varian (SUV, Sport, dan Sedan).

## Fitur

- Single Page Application (SPA) dengan berbagai section
- Tampilan responsif untuk desktop dan mobile
- Pemilihan varian mobil (SUV, Sport, Sedan)
- Efek visual menarik dengan Three.js
- Background dengan efek gradasi dan cinematic
- Formulir pemesanan mobil
- Animasi halus dan interaktif

## Teknologi yang Digunakan

- React.js
- Tailwind CSS
- Three.js untuk efek 3D
- Vite sebagai build tool

## Struktur Folder

```
gondo-car-landing/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── cars/
│   │   │   │   ├── gondo-suv.jpg
│   │   │   │   ├── gondo-sport.jpg
│   │   │   │   ├── gondo-sedan.jpg
│   │   │   ├── logos/
│   │   │   │   ├── gondo-logo.png
│   │   │   ├── backgrounds/
│   │   │   │   ├── hero-bg.jpg
│   │   │   │   ├── section-bg.jpg
│   ├── index.html
│   ├── favicon.ico
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Features.jsx
│   │   ├── CarSelector.jsx
│   │   ├── CarDetails.jsx
│   │   ├── Gallery.jsx
│   │   ├── OrderForm.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── UI/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Loading.jsx
│   ├── effects/
│   │   ├── ThreeBackground.jsx
│   │   ├── GradientEffect.jsx
│   │   ├── CinematicEffects.jsx
│   │   ├── ParticleEffect.jsx
│   ├── hooks/
│   │   ├── useAnimations.js
│   │   ├── useThreeScene.js
│   ├── context/
│   │   ├── CarContext.jsx
│   │   ├── OrderContext.jsx
│   ├── utils/
│   │   ├── animations.js
│   │   ├── helpers.js
│   ├── pages/
│   │   ├── LandingPage.jsx
│   ├── App.jsx
│   ├── index.jsx
│   ├── styles/
│   │   ├── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
├── README.md
├── .gitignore
```

## Instalasi dan Penggunaan

1. Clone repositori:
   ```bash
   git clone https://github.com/username/gondo-car-landing.git
   cd gondo-car-landing
   ```

2. Install dependensi:
   ```bash
   npm install
   ```

3. Jalankan di mode development:
   ```bash
   npm run dev
   ```

4. Build untuk production:
   ```bash
   npm run build
   ```

## Persiapan Gambar

Siapkan gambar mobil untuk setiap varian (SUV, Sport, Sedan) dalam format JPG dan simpan di folder `/public/assets/images/cars/`. Pastikan gambar memiliki latar belakang yang baik agar terlihat seamless dengan latar belakang website.

## Penyesuaian

Untuk menyesuaikan warna dan tema, Anda dapat mengedit file berikut:
- `src/styles/index.css` untuk styling global
- `tailwind.config.js` untuk konfigurasi Tailwind
- `src/context/CarContext.jsx` untuk mengubah data mobil

## Lisensi

Hak Cipta © 2023 Gondo Motors
