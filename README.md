# 🐍 PYTHON QUEST: Petualangan Berpikir Komputasi (Mario Bros Style)

> **Tugas Akhir Mata Kuliah**: Berpikir Komputasi (Semester 1)  
> **Teknologi**: Native HTML5, CSS3, Modern Vanilla JavaScript — *100% Murni Tanpa Framework/Library Eksternal*.  
> **Gaya Permainan**: Side-Scrolling Platformer (Mario Bros Style) dengan Pertarungan Kode Python.

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

### 🌲 Level 1: Python Dasar (Tema Hutan / Forest)
- **Background**: Langit biru cerah, pegunungan hijau, pepohonan rindang.
- **Stage 1**: Orc Perusak — *Variabel & String `nama = "Budi"`*
- **Stage 2**: Goblin Sintaks — *Fungsi Output `print()`*
- **Stage 3**: Orc Pengintai — *Pemeriksaan Tipe Data `type(42)`*
- **Stage 4**: Goblin Bayangan — *Operator Perkalian `10 * 3`*
- **Stage 5 (BOSS)**: Raja Iblis Hutan (3 HP) — *Kondisi Percabangan If & Else KKM*
- **Pola Musuh**: Orc dan Goblin tampil bergantian di Stage 1–4, lalu boss hutan menjadi musuh terakhir.

### 🌋 Level 2: Kondisi & Percabangan (Tema Lembah Magma)
- **Background**: Langit magma membara, aliran lahar, dan batu pijar.
- **Stage 1**: Condition Bat — *Percabangan If-Else Kelulusan Nilai Siswa (`if`, `nilai >= 70`, `print`, `else`)*
- **Stage 2**: Elif Goblin — *Operator Pembanding Numerik Positif (`if angka > 0: ... else:`)*
- **Stage 3**: Input Imp — *Percabangan Bertingkat Elif Grade Nilai (`elif skor >= 70:`)*
- **Stage 4**: Elif Troll — *Operator Logika Gabungan AND (`if tiket and password_benar:`)*
- **Stage 5 (BOSS)**: Logic Demon (3 HP) — *Diskon Belanja, Logika OR Kelemahan Sihir, & Percabangan Mana Jurus Pamungkas*

### 🏰 Level 3: Perulangan & Fungsi (Tema Kerajaan Gelap)
- **Background**: Benteng hitam, petir ungu, dan pilar sihir.
- **Stage 1**: Loop Spider — *Perulangan `for i in range(5):`*
- **Stage 2**: While Ghost — *Perulangan Bersyarat `while hitung > 0:`*
- **Stage 3**: Function Wraith — *Penggabungan Parameter String Fungsi `sapa(nama)`*
- **Stage 4**: List Demon — *Metode Penambahan Elemen List `buah.append("jeruk")`*
- **Stage 5 (FINAL BOSS)**: Dragon Rekursif (3 HP) — *Fungsi Rekursif Faktorial `n * faktorial(n-1)`, Base Case `<= 0`, & Akses Indeks Terakhir List*

---

## 🕹️ Cara Menjalankan

Game ini 100% **kompatibel offline** dan dapat langsung dimainkan:

### Cara 1: Langsung Double-Click (Rekomendasi)
Buka folder `project_akhir` di File Explorer Windows Anda, lalu **klik dua kali berkas `index.html`**. Game langsung terbuka di browser tanpa perlu server apa pun!

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
├── index.html                    # Halaman utama game (HUD, Game-World side-scrolling, Battle Panel, Modals)
├── README.md                     # Dokumentasi proyek & penjelasan akademik
├── package.json                  # Metadata proyek
├── assets/
│   ├── karakter_utama/
│   │   ├── ali/                  # Ali biasa: idle (baris 1), walk (2), attack (3)
│   │   ├── ali_armored/          # Ali berzirah: idle, run, attack, hit, death
│   │   ├── danova/               # Danova: idle & walk (tampak depan + belakang)
│   │   └── hibat/                # Hibat: idle melayang 8 frame
│   ├── enemy_karakter/enemy_forest/
│   │   ├── sprites/              # Orc: idle, attack, hurt, death
│   │   ├── goblin/               # Goblin: idle, attack
│   │   └── boss/                 # Raja Iblis Hutan: idle, attack, hurt, death
│   └── portraits/                # Potret wajah Ali, Ali Armored, Danova untuk dialog
├── css/
│   ├── style.css                 # Styling global: UI menu, level select cards, typography arcade, modal
│   └── game.css                  # Dunia game, HUD, sprite rig, animasi attack/hit/death, dialog
└── js/
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

- **Wajah Ali di dialog** memakai potret dari `assets/portraits/` — Ali biasa saat prolog, Ali berzirah setelahnya.
- **Goblin** saat berjalan/idle hanya memakai frame `sprite-1-1` dan `sprite-1-2` (posisi siap, belum menyerang); frame 3–4 yang berpose memukul tidak dipakai di animasi jalan.
- **Prolog**: Ali dan Danova diam di tempat karena sedang berbicara. Hibat tetap beranimasi di prolog sampai ia menghilang.
- **Ending**: Danova tampil di samping Hibat (slot aktor ketiga) dan Hibat tetap ada; Hibat diam memakai pose santai `sprite-1-8.png`.
- **Musuh menyerang** memutar frame `attack` sambil maju (lunge) saat jawaban salah / waktu habis.
- **Musuh mati** memutar frame `death` (Goblin memakai animasi jatuh karena foldernya belum punya frame death).
- **Ali mati** memutar frame `death` sebelum modal Game Over muncul.
- Menambah aset baru cukup taruh frame di folder yang sesuai lalu tambahkan entrinya di `sprite-manifest.js`.
