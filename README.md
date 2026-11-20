# 🐍 PYTHON QUEST: Petualangan Berpikir Komputasi 

> **Tugas Akhir Mata Kuliah**: Berpikir Komputasi (Semester 1)  
> **Teknologi**: Native HTML5, CSS3, Modern Vanilla JavaScript — *100% Murni Tanpa Framework/Library Eksternal*.  
> **Gaya Permainan**: Side-Scrolling Platformer dengan Pertarungan Kode Python.

---

## 🌟 Konsep & Mekanik Baru

Game ini telah disempurnakan dengan sistem **Drag & Drop Code Puzzle (Fill-in-the-Blank)** ala Mario Bros Platformer:
1. **Pahlawan Berjalan ke Kanan**: Karakter pahlawan berjalan otomatis melintasi daratan platform.
2. **Musuh Berjalan Menghampiri dari Kanan**: Monster bergerak mendekat ke arah pahlawan.
3. **Puzzle Kode Python Drag & Drop (*Fill-in-the-blank*)**:
   - Saat berpapasan dengan musuh, panel kode Python muncul dengan bagian rumpang `[ ? ]` (misal bagian `if`, `else`, `print`, perbandingan kondisi, dll).
   - Pemain menyusun potongan kode dari **Bank Balok Kode (5 s/d 10 pilihan balok)** menggunakan sistem **Drag & Drop** atau **Klik untuk menempatkan**.
   - Waktu berpikir: **1 Menit (60 Detik)** per tantangan.
   - Pemain menekan tombol **▶ JALANKAN KODE!** untuk mengeksekusi kode dan menyerang musuh.
4. **Animasi Lompat & Serang (*Jump Attack*)**:
   - Jika kode **BENAR**: Pahlawan melompat dan menghancurkan musuh, lalu melanjutkan perjalanan ke kanan!
   - Jika kode **SALAH** atau waktu **HABIS**: Pahlawan terkena serangan musuh (**-1 HP**), muncul penjelasan konsep, dan pemain dapat memperbaiki kodenya.
5. **Boss Spesial (3 HP & 3 Fase Kode)**:
   - Di Stage 5 setiap level terdapat Monster Boss berkekuatan **3 HP** dengan bar nyawa khusus.
   - Mengalahkan Boss membutuhkan **3 jawaban benar berturut-turut**, masing-masing dengan puzzle kode Python fase baru!
6. **Transisi Area (*Pindah Tempat ala Mario Bros*)**:
   - Setelah semua musuh di stage dikalahkan, muncul **Tiang Bendera Finish (🏁)**.
   - Pahlawan berlari ke arah bendera dan layar bertransisi dengan efek kilatan (*flash transition*) menuju area/stage berikutnya dengan pergantian latar belakang (*background theme*).

---

## 🗺️ Tema Lingkungan & Materi Python

### 🌲 Level 1: Hutan Sintaks (Tema Hutan / Forest)
- **Background**: `assets/background_gameplay/forest/forest.jpg` — hutan pinus dan perbukitan.
- **Stage 1**: Orc Perusak — *Variabel & String `nama = "Budi"`*
- **Stage 2**: Goblin Sintaks — *Fungsi Output `print()`*
- **Stage 3**: Orc Pengintai — *Pemeriksaan Tipe Data `type(42)`*
- **Stage 4**: Goblin Bayangan — *Operator Perkalian `10 * 3`*
- **Stage 5 (BOSS)**: Raja Iblis Hutan (3 HP) — *Kondisi Percabangan If & Else KKM*
- **Pola Musuh**: Orc dan Goblin tampil bergantian di Stage 1–4, lalu boss hutan menjadi musuh terakhir.

### 🌋 Level 2: Kondisi & Percabangan (Tema Lembah Magma)
- **Background**: `assets/background_gameplay/volcano/volcano.jpg` — gunung berapi, lahar, dan bara.
- **Stage 1**: Anjing Api — *Percabangan If-Else Kelulusan Nilai Siswa (`if`, `nilai >= 70`, `print`, `else`)*
- **Stage 2**: Spirit Api — *Operator Pembanding Numerik Positif (`if angka > 0: ... else:`)*
- **Stage 3**: Anjing Lava — *Percabangan Bertingkat Elif Grade Nilai (`elif skor >= 70:`)*
- **Stage 4**: Spirit Magma — *Operator Logika Gabungan AND (`if tiket and password_benar:`)*
- **Stage 5 (BOSS)**: Raksasa Lava (3 HP) — *Diskon Belanja, Logika OR Kelemahan Sihir, & Percabangan Mana Jurus Pamungkas*
- **Pola Musuh**: Anjing Api dan Spirit Api tampil bergantian di Stage 1–4.

### 🏰 Level 3: Perulangan & Fungsi (Tema Kerajaan Gelap)
- **Background**: `assets/background_gameplay/castle/castle.jpg` — aula kastil, bendera, dan obor.
- **Stage 1**: Ksatria Hitam — *Perulangan `for i in range(5):`*
- **Stage 2**: Ksatria Palu — *Perulangan Bersyarat `while hitung > 0:`*
- **Stage 3**: Ksatria Bayangan — *Penggabungan Parameter String Fungsi `sapa(nama)`*
- **Stage 4**: Ksatria Palu Hitam — *Metode Penambahan Elemen List `buah.append("jeruk")`*
- **Stage 5 (FINAL BOSS)**: Raja Ksatria Bayangan (3 HP) — *Fungsi Rekursif Faktorial `n * faktorial(n-1)`, Base Case `<= 0`, & Akses Indeks Terakhir List*
- **Pola Musuh**: Ksatria Hitam dan Ksatria Palu tampil bergantian di Stage 1–4.

---

## 🧭 Alur Halaman (Multi-Page)

Game sekarang dipisah menjadi tiga halaman supaya refresh tidak mengulang dari awal:

1. **`index.html` — Halaman Awal**
   - Desain pixel sederhana dengan latar **desa yang di-blur** (`village.jpg`) dan panel menu bergaya block/pixel.
   - Menampilkan menu utama dan tombol **MULAI / LANJUTKAN PETUALANGAN**.
   - Kalau prolog belum ditonton, tombol membuka `game.html?mode=prologue`.
   - Kalau sudah ada progress, tombol membuka `levels.html`.

2. **`levels.html` — Pilih Level**
   - Tema pixel sama seperti halaman awal, dengan latar desa blur.
   - Setiap kartu memakai latar map-nya sendiri (Hutan / Lembah Magma / Kerajaan Gelap) yang sedikit di-blur, dan nomor level di tengah kartu.
   - Refresh di halaman ini tetap di daftar level.
   - Level terkunci/terbuka dibaca dari progress tersimpan.
   - Memilih level membuka `game.html?level=N` (mulai dari Stage 1 level itu).
   - Kartu Prolog/Epilog membuka `game.html?mode=prologue` / `?mode=epilogue`.

3. **`game.html` — Game & Cerita**
   - Berisi layar cerita (prolog, antar-level, epilog) dan layar pertarungan.
   - **Refresh tidak mengulang dari Level 1**: level, stage, dan HP terakhir disimpan, lalu URL diperbarui menjadi `game.html?level=1&stage=3`.
   - Refresh saat cerita juga melanjutkan dari **scene** cerita terakhir.
   - Tombol **Pilih Level** di header kembali ke `levels.html`.

Progress level disimpan permanen (`localStorage`), sedangkan posisi game/cerita disimpan per sesi (`sessionStorage`). Kalau browser memblokir storage (mis. dibuka lewat `file://`), game memakai `window.name` sebagai cadangan supaya progress tetap terbawa antar halaman.

---

## 🕹️ Cara Menjalankan

Game ini 100% **kompatibel offline** dan dapat langsung dimainkan:

### Cara 1: Langsung Double-Click (Rekomendasi)
Buka folder `project_akhir` di File Explorer Windows Anda, lalu **klik dua kali berkas `index.html`**. Halaman awal langsung terbuka di browser tanpa perlu server apa pun. Navigasi ke pilih level dan game berjalan otomatis lewat tombol di halaman.

### Cara 2: Live Server / Localhost
Jika menggunakan VS Code:
1. Klik kanan pada `index.html` -> **Open with Live Server**.
Atau jalankan melalui terminal:
```bash
python -m http.server 3000
```
Lalu buka `http://localhost:3000`.

---

## 📁 Struktur Berkas

```
project_akhir/
├── index.html                    # Halaman awal / menu utama
├── levels.html                   # Halaman pilih level
├── game.html                     # Halaman game + cutscene (prolog/inter/epilog)
├── README.md                     # Dokumentasi proyek & penjelasan akademik
├── package.json                  # Metadata proyek
├── assets/
│   ├── karakter_utama/
│   │   ├── ali/                  # Ali biasa: idle (baris 1), walk (2), attack (3)
│   │   ├── ali_armored/          # Ali berzirah: idle, run, attack, hit, death
│   │   ├── danova/               # Danova: idle & walk (tampak depan + belakang)
│   │   └── hibat/                # Hibat: idle melayang 8 frame
│   ├── enemy_karakter/
│   │   ├── enemy_forest/
│   │   │   ├── sprites/          # Orc: idle, attack, hurt, death
│   │   │   ├── goblin/           # Goblin: idle, attack
│   │   │   └── boss/             # Raja Iblis Hutan: idle, attack, hurt, death
│   │   ├── enemy_volcano/
│   │   │   ├── anjing/           # Anjing Api: idle, attack, death
│   │   │   ├── spirit_api/       # Spirit Api: idle, attack, death
│   │   │   └── boss/             # Raksasa Lava: idle, attack, hurt, death
│   │   └── enemy_castle/
│   │       ├── black-knight/     # Ksatria Hitam: idle, attack, death
│   │       ├── hammer/           # Ksatria Palu: idle, attack, death
│   │       └── boss/             # Raja Ksatria Bayangan: idle, attack, hurt, death
│   ├── background_gameplay/
│   │   ├── forest/forest.jpg     # Latar gameplay Hutan Sintaks
│   │   ├── volcano/volcano.jpg   # Latar gameplay Lembah Magma
│   │   ├── castle/castle.jpg     # Latar gameplay Kerajaan Gelap
│   │   └── village/              # Latar desa: village.jpg & village-destroy.jpg
│   └── portraits/                # Potret wajah Ali, Ali Armored, Danova untuk dialog
├── css/
│   ├── style.css                 # Styling global: header, menu, level select, modal
│   └── game.css                  # Dunia game, HUD, sprite rig, animasi attack/hit/death, dialog
└── js/
    ├── progress.js               # Simpan/baca progress, posisi level/stage, dan scene cerita
    ├── menu.js                   # Logika halaman awal
    ├── levels.js                 # Logika halaman pilih level
    ├── data/
    │   └── sprite-manifest.js    # Daftar frame + ukuran + fps + skala tiap karakter
    └── game.js                   # Engine game (State Machine, Audio Synth, Sprite Rig, Soal Python, Boss 3 Fase)
```

---

## 🎞️ Integrasi Aset & Animasi

Semua sprite PNG dimuat lewat `js/data/sprite-manifest.js`, lalu dianimasikan oleh `SpriteRig` di `js/game.js` (frame swapping + ukuran per frame, jadi karakter tidak berubah ukuran saat animasi berganti).

| Folder aset | Dipakai untuk | Animasi |
|---|---|---|
| `assets/karakter_utama/ali` | Ali biasa di **Prolog** (adegan desa) | `idle`, `walk`, `attack` |
| `assets/karakter_utama/ali_armored` | Ali berzirah dari **Level 1 sampai Epilog** (gameplay & cutscene) | `idle`, `run`, `attack`, `hit`, `death` |
| `assets/karakter_utama/danova` | Danova di Prolog & Epilog | `idle`, `idle_back`, `walk`, `walk_back` |
| `assets/karakter_utama/hibat` | Hibat sebagai antagonis di cutscene | `idle` (loop, prolog) + `relaxed` (pose diam `sprite-1-8` di ending) |
| `enemy_forest/sprites` | Orc hutan (Stage 1 & 3) | `idle`, `attack`, `hurt`, `death` |
| `enemy_forest/goblin` | Goblin hutan (Stage 2 & 4) | `idle`, `attack` + jatuh (fallback) |
| `enemy_forest/boss` | **Boss terakhir Hutan Sintaks** (Stage 5, 3 HP) | `idle`, `attack`, `hurt`, `death` |
| `enemy_volcano/anjing` | Anjing Api (Level 2 Stage 1 & 3) | `idle`, `attack`, `death` |
| `enemy_volcano/spirit_api` | Spirit Api (Level 2 Stage 2 & 4) | `idle`, `attack`, `death` |
| `enemy_volcano/boss` | **Raksasa Lava** (Level 2 Stage 5, 3 HP) | `idle`, `attack`, `hurt`, `death` |
| `enemy_castle/black-knight` | Ksatria Hitam (Level 3 Stage 1 & 3) | `idle`, `attack`, `death` |
| `enemy_castle/hammer` | Ksatria Palu (Level 3 Stage 2 & 4) | `idle`, `attack`, `death` |
| `enemy_castle/boss` | **Raja Ksatria Bayangan** (Level 3 Stage 5, 3 HP) | `idle`, `attack`, `hurt`, `death` |

- **Latar** memakai JPG dari `assets/background_gameplay/`: hutan, lembah magma, kerajaan gelap, serta desa (damai dan hancur) untuk prolog dan background menu yang di-blur.
- **Wajah Ali di dialog** memakai potret dari `assets/portraits/` — Ali biasa saat prolog, Ali berzirah setelahnya.
- **Goblin** saat berjalan/idle hanya memakai frame `sprite-1-1` dan `sprite-1-2` (posisi siap, belum menyerang); frame 3–4 yang berpose memukul tidak dipakai di animasi jalan.
- **Prolog**: Ali dan Danova diam di tempat karena sedang berbicara. Hibat tetap beranimasi di prolog sampai ia menghilang.
- **Ending**: Danova tampil di samping Hibat (slot aktor ketiga) dan Hibat tetap ada; Hibat diam memakai pose santai `sprite-1-8.png`.
- **Musuh menyerang** memutar frame `attack` sambil maju (lunge) saat jawaban salah / waktu habis.
- **Musuh mati** memutar frame `death` (Goblin memakai animasi jatuh karena foldernya belum punya frame death).
- **Ali mati** memutar frame `death` sebelum modal Game Over muncul.
- Menambah aset baru cukup taruh frame di folder yang sesuai lalu tambahkan entrinya di `sprite-manifest.js`.
