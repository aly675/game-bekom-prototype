# 🐍 PYTHON QUEST: Petualangan Berpikir Komputasi (Mario Bros Style)

> **Tugas Akhir Mata Kuliah**: Berpikir Komputasi (Semester 1)  
> **Teknologi**: Native HTML5, CSS3, Modern Vanilla JavaScript — *100% Murni Tanpa Framework/Library Eksternal*.  
> **Gaya Permainan**: Side-Scrolling Platformer (Mario Bros Style) dengan Pertarungan Kode Python.

---

## 🌟 Konsep & Mekanik Baru

Game ini telah dirombak total menjadi **Side-Scrolling Platformer** bergaya Mario Bros:
1. **Pahlawan Berjalan ke Kanan**: Karakter pahlawan berjalan otomatis melintasi daratan platform.
2. **Musuh Berjalan Menghampiri dari Kanan**: Monster bergerak mendekat ke arah pahlawan.
3. **Pertarungan Kode Python (*Fill-in-the-blank*)**:
   - Saat berpapasan dengan musuh, panel pertarungan muncul dengan kode Python berlubang (`___`).
   - Pemain memilih jawaban yang tepat dari 4 tombol pilihan dalam waktu **10 detik**.
4. **Animasi Lompat & Serang (*Jump Attack*)**:
   - Jika jawaban **BENAR**: Pahlawan melompat dan menghancurkan musuh, lalu melanjutkan perjalanan ke kanan!
   - Jika jawaban **SALAH** atau waktu **HABIS**: Musuh menyerang pahlawan (**-1 HP**) dan layar bergetar merah.
5. **Boss Spesial (3 HP & 3 Fase Pertanyaan)**:
   - Di Stage 5 setiap level terdapat Monster Boss berkekuatan **3 HP** dengan bar nyawa khusus.
   - Mengalahkan Boss membutuhkan **3 jawaban benar berturut-turut**, masing-masing dengan tantangan kode Python fase baru!
6. **Transisi Area (*Pindah Tempat ala Mario Bros*)**:
   - Setelah semua musuh di stage dikalahkan, muncul **Tiang Bendera Finish (🏁)**.
   - Pahlawan berlari ke arah bendera dan layar bertransisi dengan efek kilatan (*flash transition*) menuju area/stage berikutnya dengan pergantian latar belakang (*background theme*).

---

## 🗺️ Tema Lingkungan & Materi Python

### 🌲 Level 1: Python Dasar (Tema Hutan / Forest)
- **Background**: Langit biru cerah, pegunungan hijau, pepohonan rindang.
- **Stage 1**: Bug Goomba — *Variabel & String `nama = "Budi"`*
- **Stage 2**: Error Slug — *Fungsi Output `print()`*
- **Stage 3**: Type Ghost — *Pemeriksaan Tipe Data `type(42)`*
- **Stage 4**: Syntax Bat — *Operator Perkalian `10 * 3`*
- **Stage 5 (BOSS)**: Def Specter (3 HP) — *Kondisi Percabangan If & Else KKM*

### 🕌 Level 2: Kondisi & Percabangan (Tema Gua / Cave)
- **Background**: Langit gua gelap berbintang, stalaktit batu, kristal ungu bercahaya.
- **Stage 1**: Condition Bat — *Percabangan `else:`*
- **Stage 2**: Elif Goblin — *Operator Pembanding Numerik `>`*
- **Stage 3**: Input Imp — *Input Pengguna & Konversi Integer `int(input(...))`*
- **Stage 4**: Elif Troll — *Operator Lebih Besar atau Sama Dengan `>=`*
- **Stage 5 (BOSS)**: Logic Demon (3 HP) — *Deklarasi Fungsi `def`, Parameter Serangan, & Return Value*

### 🌋 Level 3: Perulangan & Fungsi (Tema Gunung Berapi / Volcano)
- **Background**: Langit merah membara, gunung berapi aktif, batu magma pijar.
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
├── index.html            # Halaman utama game (HUD, Game-World side-scrolling, Battle Panel, Modals)
├── README.md             # Dokumentasi proyek & penjelasan akademik
├── package.json          # Metadata proyek
├── css/
│   ├── style.css         # Styling global: UI menu, level select cards, typography arcade, modal
│   └── game.css          # Styling dunia game side-scrolling: langit, gunung, platform tanah, pohon, animasi hero & enemy
└── js/
    └── game.js           # Engine game lengkap Mario-style (State Machine, Audio Synth, Soal Python, 3 Fase Boss, Parallax Scenery)
```
