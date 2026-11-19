---
name: story-planner
description: Panduan penulisan naskah naratif, format data dialog, aturan transisi latar desa/cutscene, dan integrasi alur cerita ke dalam game Python Quest.
---

# 📖 Story Planner Skill — Python Quest

Dokumen ini adalah acuan standar (single source of truth) untuk seluruh konten naratif, cutscene dialog, karakterisasi, dan transisi visual dalam game **Python Quest: Petualangan Berpikir Komputasi**.

---

## 1. Visi Naratif & Sinopsis Cerita

### Sinopsis Utama
Di sebuah desa terpencil yang damai bernama **Desa Lembah Python**, hiduplah dua sahabat karib: **Ali** dan **Danova**. Ali adalah pemuda yang tekun mendalami ilmu logika pemrograman dan berpikir komputasi, sementara Danova adalah sahabat ceria yang selalu menyemangati Ali.

Kedamaian tersebut hancur seketika ketika entitas iblis bug kegelapan bernama **Hibat** menyerang desa, memporak-porandakan bangunan, dan menculik Danova ke dalam sarangnya di puncak Gunung Rekursif. Berbekal tekad pantang menyerah dan mantra kode Python, Ali memulai petualangan berbahaya menembus 3 wilayah monster untuk mengalahkan Hibat dan menyelamatkan Danova.

---

## 2. Profil Karakter & Tone Suara (Character Profiles)

| Karakter | Peran | Kepribadian & Tone Bahasa | Ciri Visual / Avatar | Warna Aksen Nama |
| :--- | :--- | :--- | :--- | :--- |
| **Ali** | Protagonis Utama | Pemikir logis, hangat, santai (gaya bicara santai "lu-gua" antar-sahabat), penuh tekad saat situasi genting. | Jubah petualang biru dengan inisial 'Py', ikat kepala merah, rambut cokelat. | `#4A90D9` (Biru Langit) |
| **Danova** | Sahabat Ali | Ceria, suportif, berani, suka melempar candaan ringan ("Li, lu jangan kebanyakan ngelamun di depan kode!"). | Pakaian hangat desa warna hijau toska/teal, senyum ramah, rambut pirang/terang. | `#2ECC71` (Hijau Zamrud) |
| **Hibat** | Antagonis Utama | Iblis bug misterius, congkak, suara berwibawa menakutkan, memandang remeh logika manusia. | Siluet bertanduk gelap dengan mata merah menyala, hawa aura ungu/merah kegelapan. | `#E74C3C` (Merah Darah) |
| **Narator** | Pencerita Suasana | Netral, atmosferik, ringkas, membimbing imajinasi pemain tentang apa yang sedang terjadi. | Ikon buku mantra/pena emas. | `#FFD700` (Emas) |

---

## 3. Format Data Story (JSON / Array of Objects Schema)

Seluruh naskah cutscene disimpan dalam struktur data objek JavaScript murni yang modular, terpisah dari logika gameplay inti.

### Struktur Data TypeScript / JSDoc:
```typescript
interface DialogueLine {
  id: string;
  speaker: 'ali' | 'danova' | 'hibat' | 'narrator';
  name: string;
  avatar: string; // Identifier sprite wajah/ikon
  text: string;   // Kalimat dialog (maksimal 2-3 baris per frame)
  sfx?: string;   // Sound effect: 'thunder' | 'rumble' | 'portal' | 'shout' | 'text'
  action?: 'shake' | 'flash' | 'spawn_hibat' | 'vanish_danova'; // Efek visual khusus
}

interface CutsceneScene {
  id: string;
  title: string;
  backgroundTheme: 'village-peaceful' | 'village-attack' | 'village-destroyed' | 'forest-path' | 'cave-mouth' | 'volcano-peak';
  actors: {
    left?: string;   // Karakter di sisi kiri layar (misal: Ali)
    right?: string;  // Karakter di sisi kanan layar (misal: Danova / Hibat)
  };
  lines: DialogueLine[];
}
```

### Contoh Implementasi Data Prolog:
```javascript
export const PROLOGUE_DATA = [
  // ==========================================
  // BAGIAN 1: DESA PAGI DAMAI
  // ==========================================
  {
    id: 'prologue_part_1',
    title: 'Bagian 1: Pagi di Desa Lembah Python',
    backgroundTheme: 'village-peaceful',
    actors: { left: 'ali', right: 'danova' },
    lines: [
      {
        speaker: 'narrator',
        name: 'Narator',
        avatar: 'book',
        text: 'Desa Lembah Python... Sebuah pemukiman damai di mana logika dan alam hidup berdampingan.'
      },
      {
        speaker: 'danova',
        name: 'Danova',
        avatar: 'danova',
        text: 'Wah, seger banget udara pagi ini! Lu masih ngutak-ngatik baris kode semalam ya, Li?'
      },
      {
        speaker: 'ali',
        name: 'Ali',
        avatar: 'ali',
        text: 'Haha, iya nih Dan. Gua ngerasa ada yang janggal sama energi di sekitar desa kita belakangan ini.'
      },
      {
        speaker: 'danova',
        name: 'Danova',
        avatar: 'danova',
        text: 'Ah, lu kebanyakan mikir kali! Selama kita bareng, gak bakal ada hal buruk yang kejadian!'
      }
    ]
  },

  // ==========================================
  // BAGIAN 2: SERANGAN HIBAT
  // ==========================================
  {
    id: 'prologue_part_2',
    title: 'Bagian 2: Invasi Entitas Kegelapan',
    backgroundTheme: 'village-attack',
    actors: { left: 'ali', right: 'hibat' },
    lines: [
      {
        speaker: 'narrator',
        name: 'Narator',
        avatar: 'book',
        action: 'shake',
        sfx: 'thunder',
        text: 'Tiba-tiba, langit pagi yang biru berubah pekat. Tanah bergetar hebat membelah kedamaian!'
      },
      {
        speaker: 'danova',
        name: 'Danova',
        avatar: 'danova',
        action: 'shake',
        text: 'A-apaan itu?! Langitnya... berubah jadi merah darah!'
      },
      {
        speaker: 'hibat',
        name: 'Hibat',
        avatar: 'hibat',
        action: 'spawn_hibat',
        sfx: 'portal',
        text: 'Kekeke... Sungguh desa yang rapuh. Manusia bodoh hanya mengandalkan logika semu!'
      },
      {
        speaker: 'ali',
        name: 'Ali',
        avatar: 'ali',
        text: 'Siapa lu?! Mau apa lu datang ke desa kami?!'
      },
      {
        speaker: 'hibat',
        name: 'Hibat',
        avatar: 'hibat',
        action: 'vanish_danova',
        text: 'Aku Hibat, penguasa kekacauan! Gadis ini ikut denganku ke Puncak Rekursif. Coba kejar kalau kalian mampu!'
      },
      {
        speaker: 'danova',
        name: 'Danova',
        avatar: 'danova',
        action: 'shake',
        text: 'ALIII! TOLOOONG...!!'
      }
    ]
  },

  // ==========================================
  // BAGIAN 3: DESA HANCUR & TEKAD ALI
  // ==========================================
  {
    id: 'prologue_part_3',
    title: 'Bagian 3: Reruntuhan & Sumpah Pahlawan',
    backgroundTheme: 'village-destroyed',
    actors: { left: 'ali' },
    lines: [
      {
        speaker: 'narrator',
        name: 'Narator',
        avatar: 'book',
        text: 'Hibat lenyap dalam pusaran asap hitam bersama Danova. Desa yang damai kini menyisakan kobaran api dan puing.'
      },
      {
        speaker: 'ali',
        name: 'Ali',
        avatar: 'ali',
        action: 'shake',
        text: 'DANOVA...! Sialan lu, Hibat!!'
      },
      {
        speaker: 'ali',
        name: 'Ali',
        avatar: 'ali',
        text: 'Gua gak boleh putus asa. Selama gua masih punya ilmu logika dan berpikir komputasi, gua bakal tembus semua sarang monster!'
      },
      {
        speaker: 'ali',
        name: 'Ali',
        avatar: 'ali',
        text: 'Tunggu gua, Danova. Gua bersumpah bakal bawa lu pulang dengan selamat!'
      }
    ]
  }
];
```

---

## 4. Dialog Pengantar Masuk Stage (Stage Intros)

Setiap pemain hendak memulai Stage di Gameplay, ditampilkan mini-dialog naratif 1-2 baris sebelum musuh menghadang:

1. **Level 1 (Hutan Python Dasar)**:
   - *Ali*: *"Hutan Sintaks di depan penuh dengan bug dasar. Gua harus ingat konsep variabel dan print untuk membuka jalan!"*
2. **Level 2 (Gua Kondisi & Percabangan)**:
   - *Ali*: *"Jalanan gua ini bercabang. Gua harus teliti menyusun logika 'if' dan 'else', salah melangkah bisa tersesat di kegelapan!"*
3. **Level 3 (Gunung Berapi & Sarang Hibat)**:
   - *Ali*: *"Hawanya membara... Hibat ada di puncak sana menjaga Danova. Perulangan 'while' dan fungsi sakti adalah satu-satunya cara mengalahkannya!"*

---

## 5. Aturan Pergantian State Background Visual Desa

Latar kanvas 2D (`.game-world`) memiliki 3 state visual bertema desa:

1. `.theme-village-peaceful`:
   - Langit: Gradasi biru muda fajar ke kuning hangat pagi (`#87CEEB` ➔ `#FFF8DC`).
   - Gunung: Siluet perbukitan hijau cerah.
   - Pemandangan Desa: Pondok kayu rapi, pohon rindang hijau, pagar kebun, bunga.
2. `.theme-village-attack`:
   - Langit: Merah keunguan pekat dengan petir dan kabut gelap.
   - Efek: Layar bergetar (*camera shake*) dan kilatan cahaya merah.
3. `.theme-village-destroyed`:
   - Langit: Abu-abu gelap berasap dengan gradasi jingga api menyala (`#1F0F1A` ➔ `#8B0000`).
   - Pemandangan: Pondok retak/terbakar, asap membubung, tanah berbatu retak.

---

## 6. Kaidah Bahasa & Tone Penulisan

- **Alami & Berkarakter**: Gunakan bahasa Indonesia santai ("lu-gua", "nih", "banget", "nggak") dalam percakapan sesama sahabat (Ali & Danova) agar tidak kaku seperti buku pelajaran resmi, namun tetap pantas dan sopan untuk tugas akhir kuliah.
- **Dinamika Emosi**:
  - Bagian 1: Santai, riang, penuh kehangatan.
  - Bagian 2: Tegang, syok, panik, suara gemuruh.
  - Bagian 3: Haru, tekad membara, berani.
- **Keterbacaan Cepat**:
  - Setiap baris teks maksimal 120-150 karakter agar nyaman dibaca dalam box dialog 2D tanpa menutupi area kanvas visual.
  - Sediakan tombol **[ LEWATI / SKIP ]** untuk pemain yang ingin langsung terjun ke pertempuran kode.
