(function () {
  'use strict';

  // ============================================================
  //  GAME DATA — 3 Levels, 15 Stages, 15 Questions
  // ============================================================
  const GAME_DATA = {
    levels: [
      {
        id: 1,
        name: 'Level 1: Python Dasar',
        bgTheme: 'forest',
        stages: [
          {
            stageNum: 1,
            enemy: { name: 'Bug Goomba', type: 'goomba', hp: 1, isBoss: false },
            question: {
              scenario: 'Bug Goomba menghalangi jalan! Simpan nama pengguna dalam variabel!',
              codePre: 'nama = ',
              codeBlank: '___',
              codePost: '',
              options: ['"Budi"', '123', 'True', 'None'],
              answer: '"Budi"',
              explanation: 'String dalam Python ditulis dalam tanda kutip. nama = "Budi" menyimpan teks "Budi" ke variabel nama.'
            }
          },
          {
            stageNum: 2,
            enemy: { name: 'Error Slug', type: 'goomba', hp: 1, isBoss: false },
            question: {
              scenario: 'Error Slug menyerang! Tampilkan teks ke layar!',
              codePre: '',
              codeBlank: '___',
              codePost: '("Halo Python!")',
              options: ['print', 'input', 'return', 'def'],
              answer: 'print',
              explanation: 'print() adalah fungsi bawaan Python untuk menampilkan output ke layar.'
            }
          },
          {
            stageNum: 3,
            enemy: { name: 'Type Ghost', type: 'goomba', hp: 1, isBoss: false },
            question: {
              scenario: 'Type Ghost muncul! Cari tipe data dari angka 42!',
              codePre: 'tipe = type(',
              codeBlank: '___',
              codePost: ')',
              options: ['42', '"42"', 'True', '[]'],
              answer: '42',
              explanation: "type(42) mengembalikan <class 'int'> karena 42 adalah bilangan bulat (integer)."
            }
          },
          {
            stageNum: 4,
            enemy: { name: 'Syntax Bat', type: 'bat', hp: 1, isBoss: false },
            question: {
              scenario: 'Syntax Bat menghalangi! Hitung hasil operasi perkalian!',
              codePre: 'hasil = 10 ',
              codeBlank: '___',
              codePost: ' 3  # hasilnya 30',
              options: ['*', '+', '-', '/'],
              answer: '*',
              explanation: '10 * 3 = 30. Operator * digunakan untuk perkalian dalam Python.'
            }
          },
          {
            stageNum: 5,
            enemy: { name: 'BOSS: Def Specter', type: 'boss_specter', hp: 3, isBoss: true },
            question: {
              scenario: 'BOSS MUNCUL! Def Specter menantang! Cetak pesan kelulusan!',
              codePre: 'if nilai >= 60:\n    print(',
              codeBlank: '___',
              codePost: ')',
              options: ['"Lulus"', '"Gagal"', 'nilai', 'True'],
              answer: '"Lulus"',
              explanation: 'Jika nilai >= 60, cetak "Lulus". String harus dalam tanda kutip.'
            },
            bossQuestions: [
              {
                scenario: '🔥 [BOSS FASE 1/3] Def Specter menyerang! Cetak pesan kelulusan jika nilai >= 60!',
                codePre: 'if nilai >= 60:\n    print(',
                codeBlank: '___',
                codePost: ')',
                options: ['"Lulus"', '"Gagal"', 'nilai', 'True'],
                answer: '"Lulus"',
                explanation: 'Jika nilai >= 60, cetak "Lulus". String harus dalam tanda kutip.'
              },
              {
                scenario: '⚡ [BOSS FASE 2/3] Def Specter melemah! Lengkapi blok else jika nilai kurang dari 60!',
                codePre: 'if nilai >= 60:\n    status = "Lulus"\n',
                codeBlank: '___',
                codePost: ':\n    status = "Remedial"',
                options: ['else', 'elif', 'then', 'loop'],
                answer: 'else',
                explanation: 'else menangani semua kondisi alternatif ketika if bernilai False.'
              },
              {
                scenario: '💥 [BOSS FASE FINAL] Pukulan Terakhir! Inisialisasi batas nilai KKM bertipe integer!',
                codePre: 'kkm = ',
                codeBlank: '___',
                codePost: '\nif nilai >= kkm:\n    print("Menang!")',
                options: ['75', '"75"', 'False', 'None'],
                answer: '75',
                explanation: 'Nilai angka murni 75 bertipe integer (tanpa kutip) agar dapat dibandingkan secara numerik.'
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: 'Level 2: Kondisi & Percabangan',
        bgTheme: 'cave',
        stages: [
          {
            stageNum: 1,
            enemy: { name: 'Condition Bat', type: 'bat', hp: 1, isBoss: false },
            question: {
              scenario: 'Condition Bat menyerang! Lengkapi kondisi else!',
              codePre: 'if skor > 100:\n    print("Menang")\n',
              codeBlank: '___',
              codePost: ':\n    print("Kalah")',
              options: ['else', 'elif', 'if', 'and'],
              answer: 'else',
              explanation: 'else digunakan untuk menangani kondisi yang tidak memenuhi syarat if.'
            }
          },
          {
            stageNum: 2,
            enemy: { name: 'Elif Goblin', type: 'goblin', hp: 1, isBoss: false },
            question: {
              scenario: 'Elif Goblin muncul! Periksa bilangan positif!',
              codePre: 'if x ',
              codeBlank: '___',
              codePost: ' 0:\n    print("Positif")',
              options: ['>', '<', '==', '!='],
              answer: '>',
              explanation: 'Operator > (lebih besar dari) digunakan untuk memeriksa apakah x lebih besar dari 0.'
            }
          },
          {
            stageNum: 3,
            enemy: { name: 'Input Imp', type: 'goblin', hp: 1, isBoss: false },
            question: {
              scenario: 'Input Imp menghalangi! Ambil input angka dari pengguna!',
              codePre: 'nilai = int(input(',
              codeBlank: '___',
              codePost: '))',
              options: ['"Masukkan nilai: "', 'nilai', '100', 'int'],
              answer: '"Masukkan nilai: "',
              explanation: 'input() menerima string sebagai prompt. int() mengubah input menjadi bilangan bulat.'
            }
          },
          {
            stageNum: 4,
            enemy: { name: 'Elif Troll', type: 'goblin', hp: 1, isBoss: false },
            question: {
              scenario: 'Elif Troll datang! Lengkapi kondisi elif untuk skor cukup!',
              codePre: 'elif skor ',
              codeBlank: '___',
              codePost: ' 50:\n    print("Cukup")',
              options: ['>=', '<=', '==', '>'],
              answer: '>=',
              explanation: '>= berarti "lebih besar atau sama dengan". elif skor >= 50 memeriksa skor minimal 50.'
            }
          },
          {
            stageNum: 5,
            enemy: { name: 'BOSS: Logic Demon', type: 'boss_logic', hp: 3, isBoss: true },
            question: {
              scenario: 'BOSS MUNCUL! Logic Demon menantang! Kembalikan nilai kelulusan!',
              codePre: 'def cek_lulus(nilai):\n    if nilai >= 60:\n        return ',
              codeBlank: '___',
              codePost: '',
              options: ['"Lulus"', '"Gagal"', 'nilai', 'True'],
              answer: '"Lulus"',
              explanation: 'return "Lulus" mengembalikan string "Lulus" ketika nilai >= 60.'
            },
            bossQuestions: [
              {
                scenario: '🔥 [BOSS FASE 1/3] Logic Demon mengunci fungsi! Kembalikan string "Lulus"!',
                codePre: 'def cek_lulus(nilai):\n    if nilai >= 60:\n        return ',
                codeBlank: '___',
                codePost: '',
                options: ['"Lulus"', '"Gagal"', 'nilai', 'True'],
                answer: '"Lulus"',
                explanation: 'return "Lulus" mengembalikan nilai "Lulus" saat kondisi terpenuhi.'
              },
              {
                scenario: '⚡ [BOSS FASE 2/3] Demon mengerahkan perisai! Deklarasikan parameter fungsi serang!',
                codePre: 'def serang_demon(',
                codeBlank: '___',
                codePost: '):\n    return hp_demon - damage',
                options: ['damage', '100', '"pedang"', 'True'],
                answer: 'damage',
                explanation: 'damage adalah nama parameter penampung nilai kekuatan serangan.'
              },
              {
                scenario: '💥 [BOSS FASE FINAL] Pukulan Terakhir! Panggil fungsi serangan pamungkas!',
                codePre: 'darah_akhir = serang_demon(',
                codeBlank: '___',
                codePost: ')',
                options: ['99', 'def', 'return', 'import'],
                answer: '99',
                explanation: 'Memanggil fungsi dengan argumen integer 99 untuk menghabisi Logic Demon!'
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: 'Level 3: Perulangan & Fungsi',
        bgTheme: 'volcano',
        stages: [
          {
            stageNum: 1,
            enemy: { name: 'Loop Spider', type: 'spider', hp: 1, isBoss: false },
            question: {
              scenario: 'Loop Spider menyerang! Buat perulangan 5 kali!',
              codePre: 'for i in range(',
              codeBlank: '___',
              codePost: '):\n    print(i)',
              options: ['5', '0', '10', '4'],
              answer: '5',
              explanation: 'range(5) menghasilkan angka 0,1,2,3,4 — tepat 5 iterasi.'
            }
          },
          {
            stageNum: 2,
            enemy: { name: 'While Ghost', type: 'ghost', hp: 1, isBoss: false },
            question: {
              scenario: 'While Ghost menghalangi! Lengkapi kondisi perulangan while!',
              codePre: 'while ',
              codeBlank: '___',
              codePost: ' > 0:\n    hitung -= 1',
              options: ['hitung', 'i', 'n', 'x'],
              answer: 'hitung',
              explanation: 'while hitung > 0 akan terus berulang selama variabel hitung lebih besar dari 0.'
            }
          },
          {
            stageNum: 3,
            enemy: { name: 'Function Wraith', type: 'ghost', hp: 1, isBoss: false },
            question: {
              scenario: 'Function Wraith datang! Kembalikan sapaan dari fungsi!',
              codePre: 'def sapa(nama):\n    return "Halo, " + ',
              codeBlank: '___',
              codePost: '',
              options: ['nama', '"nama"', 'sapa', '"Halo"'],
              answer: 'nama',
              explanation: 'nama (tanpa kutip) merujuk pada parameter fungsi. "Halo, " + nama menggabungkan string dengan nilai parameter.'
            }
          },
          {
            stageNum: 4,
            enemy: { name: 'List Demon', type: 'spider', hp: 1, isBoss: false },
            question: {
              scenario: 'List Demon menyerang! Tambahkan elemen ke list!',
              codePre: 'buah = ["apel", "mangga"]\nbuah.',
              codeBlank: '___',
              codePost: '("jeruk")',
              options: ['append', 'add', 'push', 'insert'],
              answer: 'append',
              explanation: 'append() adalah metode list Python untuk menambahkan elemen di akhir list.'
            }
          },
          {
            stageNum: 5,
            enemy: { name: 'BOSS FINAL: Dragon Rekursif', type: 'dragon', hp: 3, isBoss: true },
            question: {
              scenario: 'BOSS FINAL! Dragon Rekursif! Lengkapi fungsi faktorial rekursif!',
              codePre: 'def faktorial(n):\n    if n == 0:\n        return 1\n    return n * faktorial(',
              codeBlank: '___',
              codePost: ')',
              options: ['n-1', 'n', 'n+1', '0'],
              answer: 'n-1',
              explanation: 'faktorial(n) = n * faktorial(n-1). Rekursi memanggil dirinya sendiri dengan n-1 sampai n==0.'
            },
            bossQuestions: [
              {
                scenario: '🔥 [FINAL BOSS FASE 1/3] Naga Rekursif menyembur api! Lengkapi pemanggilan fungsi rekursif!',
                codePre: 'def faktorial(n):\n    if n == 0:\n        return 1\n    return n * faktorial(',
                codeBlank: '___',
                codePost: ')',
                options: ['n-1', 'n', 'n+1', '0'],
                answer: 'n-1',
                explanation: 'faktorial(n) = n * faktorial(n-1). Memanggil diri sendiri dengan n-1 menuju base case.'
              },
              {
                scenario: '⚡ [FINAL BOSS FASE 2/3] Naga meregenerasi sayap! Buat Base Case agar fungsi berhenti di nol!',
                codePre: 'def mundur(detik):\n    if detik ',
                codeBlank: '___',
                codePost: ' 0:\n        return "Maju!"\n    return mundur(detik - 1)',
                options: ['<=', '>=', '!=', '+='],
                answer: '<=',
                explanation: '<= 0 memastikan rekursi berhenti saat detik mencapai atau di bawah nol (Base Case).'
              },
              {
                scenario: '💥 [FINAL BOSS FASE 3/3] Tebasan Terakhir! Akses senjata pamungkas dari indeks terakhir list!',
                codePre: 'senjata = ["Kayu", "Besi", "Excalibur"]\nserang = senjata[',
                codeBlank: '___',
                codePost: ']',
                options: ['2', '3', '"terakhir"', '-0'],
                answer: '2',
                explanation: 'Elemen ke-3 dalam list berindeks 2 (karena indeks list dimulai dari 0: 0, 1, 2).'
              }
            ]
          }
        ]
      }
    ]
  };

  // ============================================================
  //  SVG SPRITES
  // ============================================================
  const SVG_SPRITES = {
    hero: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 64" width="48" height="64">
      <rect x="12" y="20" width="24" height="22" rx="4" fill="#4A90D9"/>
      <circle cx="24" cy="14" r="12" fill="#FFDAB9"/>
      <rect x="10" y="4" width="28" height="6" rx="3" fill="#E63946"/>
      <rect x="14" y="1" width="20" height="5" rx="2" fill="#E63946"/>
      <circle cx="20" cy="13" r="2" fill="#333"/>
      <circle cx="28" cy="13" r="2" fill="#333"/>
      <path d="M20 18 Q24 21 28 18" stroke="#333" stroke-width="1.5" fill="none"/>
      <rect x="12" y="34" width="24" height="3" fill="#8B4513"/>
      <rect x="21" y="33" width="6" height="5" rx="1" fill="#FFD700"/>
      <rect x="13" y="42" width="9" height="14" rx="3" fill="#2C3E50"/>
      <rect x="26" y="42" width="9" height="14" rx="3" fill="#2C3E50"/>
      <rect x="11" y="52" width="12" height="6" rx="3" fill="#8B4513"/>
      <rect x="25" y="52" width="12" height="6" rx="3" fill="#8B4513"/>
      <rect x="2" y="22" width="10" height="6" rx="3" fill="#4A90D9"/>
      <rect x="36" y="22" width="10" height="6" rx="3" fill="#4A90D9"/>
      <text x="24" y="31" text-anchor="middle" font-size="8" fill="white" font-family="monospace">Py</text>
    </svg>`,

    goomba: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 56" width="48" height="56">
      <ellipse cx="24" cy="34" rx="20" ry="16" fill="#8B4513"/>
      <circle cx="24" cy="22" r="18" fill="#A0522D"/>
      <ellipse cx="24" cy="34" rx="14" ry="10" fill="#6B8E23" opacity="0.7"/>
      <line x1="24" y1="24" x2="24" y2="44" stroke="#556B2F" stroke-width="1.5"/>
      <line x1="10" y1="34" x2="38" y2="34" stroke="#556B2F" stroke-width="1.5"/>
      <circle cx="18" cy="20" r="4" fill="white"/>
      <circle cx="30" cy="20" r="4" fill="white"/>
      <circle cx="17" cy="19" r="2.5" fill="#FF4444"/>
      <circle cx="29" cy="19" r="2.5" fill="#FF4444"/>
      <path d="M18 28 Q24 25 30 28" stroke="#333" stroke-width="2" fill="none"/>
      <ellipse cx="14" cy="50" rx="8" ry="4" fill="#8B4513"/>
      <ellipse cx="34" cy="50" rx="8" ry="4" fill="#8B4513"/>
    </svg>`,

    bat: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 56" width="72" height="56">
      <path d="M36 28 Q12 10 0 24 Q10 36 24 32 Q32 38 36 28" fill="#4A235A"/>
      <path d="M36 28 Q60 10 72 24 Q62 36 48 32 Q40 38 36 28" fill="#4A235A"/>
      <ellipse cx="36" cy="32" rx="13" ry="16" fill="#6C3483"/>
      <circle cx="36" cy="20" r="12" fill="#7D3C98"/>
      <polygon points="27,13 22,2 31,11" fill="#4A235A"/>
      <polygon points="45,13 50,2 41,11" fill="#4A235A"/>
      <circle cx="30" cy="19" r="3.5" fill="#FFD700"/>
      <circle cx="42" cy="19" r="3.5" fill="#FFD700"/>
      <circle cx="30" cy="19" r="1.8" fill="#000"/>
      <circle cx="42" cy="19" r="1.8" fill="#000"/>
      <rect x="32" y="26" width="3" height="6" rx="1" fill="white"/>
      <rect x="37" y="26" width="3" height="6" rx="1" fill="white"/>
      <text x="36" y="40" text-anchor="middle" font-size="8" fill="#FFD700" font-family="monospace">if</text>
    </svg>`,

    goblin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 64" width="48" height="64">
      <rect x="10" y="28" width="28" height="20" rx="4" fill="#2ECC71"/>
      <ellipse cx="24" cy="22" rx="15" ry="14" fill="#27AE60"/>
      <polygon points="10,16 4,6 16,13" fill="#27AE60"/>
      <polygon points="38,16 44,6 32,13" fill="#27AE60"/>
      <circle cx="19" cy="20" r="3.5" fill="#FFD700"/>
      <circle cx="29" cy="20" r="3.5" fill="#FFD700"/>
      <circle cx="19" cy="20" r="2" fill="#E74C3C"/>
      <circle cx="29" cy="20" r="2" fill="#E74C3C"/>
      <line x1="15" y1="13" x2="23" y2="16" stroke="#1A5E20" stroke-width="2.5"/>
      <line x1="25" y1="16" x2="33" y2="13" stroke="#1A5E20" stroke-width="2.5"/>
      <path d="M17 28 Q24 32 31 28" stroke="#1A5E20" stroke-width="2" fill="#1A5E20" fill-opacity="0.3"/>
      <rect x="20" y="27" width="3" height="5" rx="1" fill="white"/>
      <rect x="25" y="27" width="3" height="5" rx="1" fill="white"/>
      <rect x="12" y="48" width="10" height="14" rx="3" fill="#1A5E20"/>
      <rect x="26" y="48" width="10" height="14" rx="3" fill="#1A5E20"/>
    </svg>`,

    ghost: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 64" width="48" height="64">
      <path d="M6 64 Q6 24 24 10 Q42 24 42 64 Q36 58 30 64 Q24 58 18 64 Q12 58 6 64" fill="#D5D8DC" opacity="0.9"/>
      <circle cx="18" cy="32" r="5.5" fill="#2C3E50"/>
      <circle cx="30" cy="32" r="5.5" fill="#2C3E50"/>
      <circle cx="17" cy="31" r="2" fill="white"/>
      <circle cx="29" cy="31" r="2" fill="white"/>
      <circle cx="18" cy="43" r="2.5" fill="#2C3E50"/>
      <circle cx="24" cy="44" r="2.5" fill="#2C3E50"/>
      <circle cx="30" cy="43" r="2.5" fill="#2C3E50"/>
      <text x="24" y="24" text-anchor="middle" font-size="7" fill="#8E44AD" font-family="monospace">def</text>
    </svg>`,

    spider: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 64" width="80" height="64">
      <line x1="24" y1="32" x2="2" y2="18" stroke="#1A1A2E" stroke-width="3" stroke-linecap="round"/>
      <line x1="24" y1="32" x2="0" y2="32" stroke="#1A1A2E" stroke-width="3" stroke-linecap="round"/>
      <line x1="24" y1="32" x2="2" y2="46" stroke="#1A1A2E" stroke-width="3" stroke-linecap="round"/>
      <line x1="56" y1="32" x2="78" y2="18" stroke="#1A1A2E" stroke-width="3" stroke-linecap="round"/>
      <line x1="56" y1="32" x2="80" y2="32" stroke="#1A1A2E" stroke-width="3" stroke-linecap="round"/>
      <line x1="56" y1="32" x2="78" y2="46" stroke="#1A1A2E" stroke-width="3" stroke-linecap="round"/>
      <ellipse cx="40" cy="40" rx="17" ry="13" fill="#1A1A2E"/>
      <circle cx="40" cy="24" r="14" fill="#2C2C54"/>
      <circle cx="33" cy="22" r="3.5" fill="#E74C3C"/>
      <circle cx="40" cy="20" r="3.5" fill="#E74C3C"/>
      <circle cx="47" cy="22" r="3.5" fill="#E74C3C"/>
      <circle cx="36" cy="27" r="2" fill="#FF7675"/>
      <circle cx="44" cy="27" r="2" fill="#FF7675"/>
      <rect x="37" y="33" width="3" height="6" rx="1" fill="#C0392B"/>
      <rect x="42" y="33" width="3" height="6" rx="1" fill="#C0392B"/>
      <text x="40" y="48" text-anchor="middle" font-size="7" fill="#E74C3C" font-family="monospace">for</text>
    </svg>`,

    dragon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 88" width="96" height="88">
      <path d="M48 36 Q12 14 0 36 Q12 58 34 46 Q42 56 48 36" fill="#922B21" opacity="0.85"/>
      <path d="M48 36 Q84 14 96 36 Q84 58 62 46 Q54 56 48 36" fill="#922B21" opacity="0.85"/>
      <path d="M62 66 Q82 72 92 60 Q97 55 94 50" stroke="#C0392B" stroke-width="6" fill="none" stroke-linecap="round"/>
      <ellipse cx="48" cy="58" rx="22" ry="18" fill="#C0392B"/>
      <rect x="38" y="36" width="20" height="20" rx="8" fill="#C0392B"/>
      <ellipse cx="48" cy="28" rx="20" ry="16" fill="#E74C3C"/>
      <ellipse cx="48" cy="38" rx="10" ry="6" fill="#E74C3C"/>
      <circle cx="40" cy="24" r="5" fill="#FFD700"/>
      <circle cx="56" cy="24" r="5" fill="#FFD700"/>
      <ellipse cx="40" cy="24" rx="2.5" ry="4" fill="#000"/>
      <ellipse cx="56" cy="24" rx="2.5" ry="4" fill="#000"/>
      <circle cx="44" cy="38" r="2" fill="#B03A2E"/>
      <circle cx="52" cy="38" r="2" fill="#B03A2E"/>
      <path d="M38 42 Q30 50 26 56" stroke="#FF8C00" stroke-width="4" fill="none" opacity="0.7"/>
      <path d="M42 42 Q36 50 30 58" stroke="#FFD700" stroke-width="3" fill="none" opacity="0.6"/>
      <polygon points="40,12 36,2 44,12" fill="#922B21"/>
      <polygon points="56,12 60,2 52,12" fill="#922B21"/>
      <text x="48" y="66" text-anchor="middle" font-size="9" fill="#FFD700" font-family="monospace">n!</text>
    </svg>`,

    boss_specter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 96" width="80" height="96">
      <path d="M14 40 Q5 60 7 96 L73 96 Q75 60 66 40 Z" fill="#1A0033"/>
      <ellipse cx="40" cy="44" rx="26" ry="22" fill="#2C0066"/>
      <circle cx="40" cy="24" r="20" fill="#3D0088"/>
      <polygon points="22,10 17,0 27,11" fill="#FFD700"/>
      <polygon points="40,6 40,0 45,9" fill="#FFD700"/>
      <polygon points="58,10 63,0 53,11" fill="#FFD700"/>
      <circle cx="30" cy="22" r="7" fill="#8E44AD"/>
      <circle cx="50" cy="22" r="7" fill="#8E44AD"/>
      <circle cx="30" cy="22" r="3.5" fill="#E74C3C"/>
      <circle cx="50" cy="22" r="3.5" fill="#E74C3C"/>
      <circle cx="29" cy="21" r="1.5" fill="#FF0000"/>
      <circle cx="49" cy="21" r="1.5" fill="#FF0000"/>
      <path d="M26 34 Q40 42 54 34" stroke="#FFD700" stroke-width="2.5" fill="none"/>
      <circle cx="40" cy="24" r="24" fill="none" stroke="#8E44AD" stroke-width="2" opacity="0.4"/>
      <text x="40" y="62" text-anchor="middle" font-size="11" fill="#FFD700" font-family="monospace">def</text>
    </svg>`,

    boss_logic: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 96" width="80" height="96">
      <path d="M14 44 Q5 64 7 96 L73 96 Q75 64 66 44 Z" fill="#0D0033"/>
      <ellipse cx="40" cy="48" rx="26" ry="22" fill="#1A004D"/>
      <ellipse cx="40" cy="26" rx="22" ry="20" fill="#2D006B"/>
      <polygon points="22,12 15,0 29,10" fill="#C0392B"/>
      <polygon points="58,12 65,0 51,10" fill="#C0392B"/>
      <circle cx="30" cy="24" r="7" fill="#FF8C00"/>
      <circle cx="50" cy="24" r="7" fill="#FF8C00"/>
      <circle cx="30" cy="24" r="3.5" fill="#FFD700"/>
      <circle cx="50" cy="24" r="3.5" fill="#FFD700"/>
      <path d="M26 36 Q40 32 54 36" stroke="#E74C3C" stroke-width="2.5" fill="none"/>
      <text x="40" y="62" text-anchor="middle" font-size="9" fill="#FF8C00" font-family="monospace">if/else</text>
    </svg>`
  };

  // ============================================================
  //  SOUND FX (Web Audio API — works offline)
  // ============================================================
  class SoundFX {
    constructor() {
      this.ctx = null;
      this.enabled = true;
    }
    _getCtx() {
      if (!this.ctx) {
        try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return null; }
      }
      return this.ctx;
    }
    _play(freq, type, duration, vol, delay) {
      if (!this.enabled) return;
      const ctx = this._getCtx();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = type || 'square';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + (delay || 0));
      gain.gain.setValueAtTime(vol || 0.15, ctx.currentTime + (delay || 0));
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (delay || 0) + duration);
      osc.start(ctx.currentTime + (delay || 0));
      osc.stop(ctx.currentTime + (delay || 0) + duration);
    }
    correct() {
      this._play(523, 'square', 0.1, 0.15, 0);
      this._play(659, 'square', 0.1, 0.15, 0.1);
      this._play(784, 'square', 0.2, 0.15, 0.2);
    }
    wrong() {
      this._play(220, 'sawtooth', 0.15, 0.2, 0);
      this._play(180, 'sawtooth', 0.2, 0.2, 0.15);
    }
    jump() {
      const ctx = this._getCtx(); if (!ctx || !this.enabled) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'square';
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(600, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
      osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.2);
    }
    enemyDie() {
      this._play(400, 'square', 0.05, 0.12, 0);
      this._play(300, 'square', 0.05, 0.12, 0.05);
      this._play(200, 'square', 0.1, 0.12, 0.1);
    }
    stageClear() {
      [523, 659, 784, 1046].forEach((f, i) => this._play(f, 'square', 0.15, 0.15, i * 0.12));
    }
    hit() {
      this._play(150, 'sawtooth', 0.3, 0.25, 0);
    }
    toggle() {
      this.enabled = !this.enabled;
      return this.enabled;
    }
  }

  // ============================================================
  //  GAME TIMER
  // ============================================================
  class GameTimer {
    constructor(seconds, onTick, onExpire) {
      this.total = seconds;
      this.remaining = seconds;
      this.onTick = onTick;
      this.onExpire = onExpire;
      this._id = null;
    }
    start() {
      this.remaining = this.total;
      this.onTick(this.remaining, this.total);
      this._id = setInterval(() => {
        this.remaining--;
        this.onTick(this.remaining, this.total);
        if (this.remaining <= 0) {
          this.stop();
          this.onExpire();
        }
      }, 1000);
    }
    stop() {
      if (this._id) { clearInterval(this._id); this._id = null; }
    }
  }

  // ============================================================
  //  GAME STATE ENUM
  // ============================================================
  const GameState = {
    MENU: 'menu',
    LEVEL_SELECT: 'level_select',
    WALKING: 'walking',
    BATTLE: 'battle',
    ENEMY_DEAD: 'enemy_dead',
    STAGE_CLEAR: 'stage_clear',
    TRANSITIONING: 'transitioning',
    GAME_OVER: 'game_over',
    VICTORY: 'victory'
  };

  // ============================================================
  //  MAIN GAME CLASS
  // ============================================================
  class PythonQuestGame {
    constructor() {
      this.state = GameState.MENU;
      this.currentLevel = 0;
      this.currentStage = 0;
      this.playerHP = 3;
      this.maxHP = 3;
      this.enemyHP = 1;
      this.enemyMaxHP = 1;
      this.correctAnswers = 0;
      this.unlockedLevels = this._loadProgress();
      this.sound = new SoundFX();
      this.timer = null;
      this._walkInterval = null;
      this._sceneryPos = 0;

      this._cacheDOM();
      this._bindEvents();
      this._gotoMenu();
    }

    // ----------------------------------------------------------
    //  DOM CACHE
    // ----------------------------------------------------------
    _cacheDOM() {
      this.$ = {
        screenMenu:   document.getElementById('screen-menu'),
        screenLevels: document.getElementById('screen-levels'),
        screenGame:   document.getElementById('screen-game'),
        btnSound:     document.getElementById('btn-sound'),
        btnPlay:      document.getElementById('btn-play'),
        btnHowto:     document.getElementById('btn-howto'),
        levelCards:   document.querySelectorAll('.level-card'),
        btnBackMenu:  document.getElementById('btn-back-menu'),
        stageBadge:   document.getElementById('stage-badge'),
        heartsEl:     document.getElementById('hud-hearts'),
        timerBarWrap: document.getElementById('timer-bar-wrap'),
        timerBar:     document.getElementById('timer-bar'),
        timerNum:     document.getElementById('timer-num'),
        gameWorld:    document.getElementById('game-world'),
        playerEl:     document.getElementById('player'),
        enemyContainer: document.getElementById('enemy-container'),
        scenery:      document.getElementById('scenery'),
        stageFlag:    document.getElementById('stage-flag'),
        bossHpBar:    document.getElementById('boss-hp-bar'),
        bossHpInner:  document.getElementById('boss-hp-inner'),
        bossHpName:   document.getElementById('boss-hp-name'),
        battlePanel:  document.getElementById('battle-panel'),
        battleScenario: document.getElementById('battle-scenario'),
        codeDisplay:  document.getElementById('code-display'),
        answerBtns:   document.querySelectorAll('.answer-btn'),
        feedbackEl:   document.getElementById('battle-feedback'),
        explanationEl: document.getElementById('battle-explanation'),
        transitionOverlay: document.getElementById('transition-overlay'),
        modalHowto:   document.getElementById('modal-howto'),
        modalGameover: document.getElementById('modal-gameover'),
        modalVictory: document.getElementById('modal-victory'),
        btnCloseHowto: document.getElementById('btn-close-howto'),
        btnRestart:   document.getElementById('btn-restart'),
        btnReturnMenu: document.getElementById('btn-return-menu'),
        btnNextLevel: document.getElementById('btn-next-level'),
        victoryLevel: document.getElementById('victory-level'),
        gameoverMsg:  document.getElementById('gameover-msg'),
        groundLayer:  document.getElementById('ground-layer'),
      };
    }

    // ----------------------------------------------------------
    //  BIND EVENTS
    // ----------------------------------------------------------
    _bindEvents() {
      this.$.btnPlay.addEventListener('click', () => this._gotoLevelSelect());
      this.$.btnHowto.addEventListener('click', () => this._showModal(this.$.modalHowto));
      this.$.btnBackMenu.addEventListener('click', () => this._gotoMenu());
      this.$.btnCloseHowto.addEventListener('click', () => this._hideModal(this.$.modalHowto));
      this.$.btnRestart.addEventListener('click', () => this._restartCurrentLevel());
      this.$.btnReturnMenu.addEventListener('click', () => { this._hideModal(this.$.modalGameover); this._gotoMenu(); });
      this.$.btnNextLevel.addEventListener('click', () => this._onNextLevel());
      const btnReturnMenu2 = document.getElementById('btn-return-menu2');
      if (btnReturnMenu2) {
        btnReturnMenu2.addEventListener('click', () => {
          this._hideModal(this.$.modalVictory);
          this._gotoMenu();
        });
      }
      this.$.btnSound.addEventListener('click', () => {
        const on = this.sound.toggle();
        this.$.btnSound.textContent = on ? '🔊' : '🔇';
      });
      this.$.levelCards.forEach(card => {
        card.addEventListener('click', () => {
          const lid = parseInt(card.dataset.level, 10);
          if (!card.classList.contains('locked')) {
            this._startLevel(lid - 1);
          }
        });
      });
      this.$.answerBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          if (this.state !== GameState.BATTLE) return;
          this._handleAnswer(btn.dataset.answer);
        });
      });
    }

    // ----------------------------------------------------------
    //  PROGRESS
    // ----------------------------------------------------------
    _loadProgress() {
      try {
        const saved = JSON.parse(localStorage.getItem('pythonquest_progress') || '{}');
        return { 1: true, 2: !!saved[2], 3: !!saved[3] };
      } catch (e) { return { 1: true, 2: false, 3: false }; }
    }
    _saveProgress() {
      try { localStorage.setItem('pythonquest_progress', JSON.stringify(this.unlockedLevels)); } catch (e) {}
    }

    // ----------------------------------------------------------
    //  SCREENS
    // ----------------------------------------------------------
    _showScreen(screenEl) {
      [this.$.screenMenu, this.$.screenLevels, this.$.screenGame].forEach(s => s.classList.remove('active'));
      screenEl.classList.add('active');
    }
    _showModal(modal) { modal.classList.add('active'); }
    _hideModal(modal) { modal.classList.remove('active'); }

    _gotoMenu() {
      this._stopAll();
      this.$.gameWorld.className = 'game-world';
      this._showScreen(this.$.screenMenu);
      this.state = GameState.MENU;
    }

    _gotoLevelSelect() {
      this._showScreen(this.$.screenLevels);
      this.state = GameState.LEVEL_SELECT;
      this.$.levelCards.forEach(card => {
        const lid = parseInt(card.dataset.level, 10);
        if (this.unlockedLevels[lid]) {
          card.classList.remove('locked');
        } else {
          card.classList.add('locked');
        }
      });
    }

    // ----------------------------------------------------------
    //  LEVEL & STAGE START
    // ----------------------------------------------------------
    _startLevel(levelIdx) {
      this.currentLevel = levelIdx;
      this.currentStage = 0;
      this.playerHP = this.maxHP;
      this._showScreen(this.$.screenGame);
      this._setTheme(GAME_DATA.levels[levelIdx].bgTheme);
      this._startStage();
    }

    _startStage() {
      this._stopAll();
      const levelData = GAME_DATA.levels[this.currentLevel];
      const stageData = levelData.stages[this.currentStage];

      this._sceneryPos = 0;
      this.correctAnswers = 0;
      this.enemyHP = stageData.enemy.hp;
      this.enemyMaxHP = stageData.enemy.hp;

      // HUD
      this._updateHUD();
      this.$.stageBadge.textContent = 'L' + levelData.id + '-S' + stageData.stageNum;
      this.$.battlePanel.classList.remove('active');
      this.$.feedbackEl.className = 'battle-feedback';
      this.$.feedbackEl.textContent = '';
      this.$.explanationEl.style.display = 'none';
      this.$.stageFlag.style.display = 'none';

      // Boss HP bar
      if (stageData.enemy.isBoss) {
        this.$.bossHpBar.style.display = 'flex';
        this.$.bossHpName.textContent = stageData.enemy.name;
        this._updateBossHP();
      } else {
        this.$.bossHpBar.style.display = 'none';
      }

      // Scenery
      this._buildScenery();

      // Player
      this._playerX = 8;
      this.$.playerEl.innerHTML = SVG_SPRITES.hero;
      this.$.playerEl.className = 'player hero-idle';
      this.$.playerEl.style.transition = 'none';
      this.$.playerEl.style.left = this._playerX + '%';
      this.$.playerEl.style.bottom = '65px';

      // Enemy
      this._enemyX = 85;
      this.$.enemyContainer.style.transition = 'none';
      this.$.enemyContainer.style.left = this._enemyX + '%';
      this.$.enemyContainer.style.right = 'auto';
      this.$.enemyContainer.style.display = 'block';
      this._spawnEnemy(stageData);

      // Start
      this.state = GameState.WALKING;
      setTimeout(() => this._beginWalking(), 300);
    }

    _spawnEnemy(stageData) {
      const type = stageData.enemy.type;
      const isBoss = stageData.enemy.isBoss;
      this.$.enemyContainer.innerHTML = '';
      const enemyEl = document.createElement('div');
      enemyEl.className = 'enemy enemy-walk' + (isBoss ? ' enemy-boss' : '');
      enemyEl.id = 'current-enemy';
      const svgKey = SVG_SPRITES[type] ? type : (isBoss ? (this.currentLevel === 2 ? 'dragon' : (this.currentLevel === 1 ? 'boss_logic' : 'boss_specter')) : 'goomba');
      enemyEl.innerHTML = SVG_SPRITES[svgKey];
      this.$.enemyContainer.appendChild(enemyEl);
    }

    // ----------------------------------------------------------
    //  WALKING
    // ----------------------------------------------------------
    _beginWalking() {
      if (this.state !== GameState.WALKING) return;
      this._walkStartTime = Date.now();
      this.$.playerEl.className = 'player hero-walk';
      this._walkInterval = setInterval(() => this._walkTick(), 40);
    }

    _walkTick() {
      if (this.state !== GameState.WALKING) return;

      // Hero maju ke kanan, musuh maju ke kiri
      this._playerX += 0.35;
      this._enemyX -= 0.65;
      this._sceneryPos -= 2.5;

      this.$.playerEl.style.left = this._playerX + '%';
      this.$.enemyContainer.style.left = this._enemyX + '%';
      if (this.$.scenery) this.$.scenery.style.transform = 'translateX(' + this._sceneryPos + 'px)';

      const distPercent = this._enemyX - this._playerX;
      const elapsed = Date.now() - (this._walkStartTime || 0);

      // Pertemuan tercapai jika jarak sudah dekat atau maksimal 2.4 detik
      if (distPercent <= 14 || elapsed >= 2400) {
        this._stopWalking();
        this._beginBattle();
      }
    }

    _stopWalking() {
      if (this._walkInterval) { clearInterval(this._walkInterval); this._walkInterval = null; }
      this.$.playerEl.className = 'player hero-idle';
    }

    _getCurrentQuestion() {
      const stageData = GAME_DATA.levels[this.currentLevel].stages[this.currentStage];
      if (stageData.enemy.isBoss && stageData.bossQuestions && stageData.bossQuestions.length > 0) {
        const qIdx = Math.max(0, stageData.enemy.hp - this.enemyHP);
        return stageData.bossQuestions[Math.min(qIdx, stageData.bossQuestions.length - 1)];
      }
      return stageData.question;
    }

    // ----------------------------------------------------------
    //  BATTLE
    // ----------------------------------------------------------
    _beginBattle() {
      this.state = GameState.BATTLE;
      const q = this._getCurrentQuestion();

      this.$.battleScenario.textContent = q.scenario;
      this._renderCode(q);
      this._renderOptions(q);
      this.$.battlePanel.classList.add('active');
      this.$.feedbackEl.className = 'battle-feedback';
      this.$.feedbackEl.textContent = '';
      this.$.explanationEl.style.display = 'none';

      if (this.timer) this.timer.stop();
      this.timer = new GameTimer(10,
        (rem, total) => this._updateTimerBar(rem, total),
        () => this._handleAnswer(null)
      );
      this.timer.start();
    }

    _renderCode(q) {
      const pre = this.$.codeDisplay;
      pre.innerHTML = '';
      const full = (q.codePre || '') + '___' + (q.codePost || '');
      const lines = full.split('\n');
      lines.forEach(line => {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'code-line';
        const blankIdx = line.indexOf('___');
        if (blankIdx !== -1) {
          lineDiv.appendChild(document.createTextNode(line.slice(0, blankIdx)));
          const blank = document.createElement('span');
          blank.className = 'code-blank blink-blank';
          blank.id = 'code-blank-slot';
          blank.textContent = '___';
          lineDiv.appendChild(blank);
          lineDiv.appendChild(document.createTextNode(line.slice(blankIdx + 3)));
        } else {
          lineDiv.textContent = line;
        }
        pre.appendChild(lineDiv);
      });
    }

    _renderOptions(q) {
      const opts = [...q.options].sort(() => Math.random() - 0.5);
      this.$.answerBtns.forEach((btn, i) => {
        btn.textContent = opts[i] || '';
        btn.dataset.answer = opts[i] || '';
        btn.disabled = false;
        btn.className = 'answer-btn';
      });
    }

    _updateTimerBar(remaining, total) {
      const pct = (remaining / total) * 100;
      this.$.timerBar.style.width = pct + '%';
      this.$.timerNum.textContent = remaining;
      if (pct <= 30) this.$.timerBar.style.background = '#E74C3C';
      else if (pct <= 60) this.$.timerBar.style.background = '#F39C12';
      else this.$.timerBar.style.background = '#27AE60';
    }

    // ----------------------------------------------------------
    //  ANSWER
    // ----------------------------------------------------------
    _handleAnswer(answer) {
      if (this.state !== GameState.BATTLE) return;
      if (this.timer) this.timer.stop();
      this.$.answerBtns.forEach(btn => { btn.disabled = true; });

      const stageData = GAME_DATA.levels[this.currentLevel].stages[this.currentStage];
      const q = this._getCurrentQuestion();
      const isCorrect = answer !== null && answer === q.answer;

      const slot = document.getElementById('code-blank-slot');
      if (slot) {
        slot.textContent = isCorrect ? q.answer : (answer || '(waktu habis)');
        slot.className = 'code-blank ' + (isCorrect ? 'blank-correct' : 'blank-wrong');
      }

      if (isCorrect) {
        this.sound.correct();
        this.correctAnswers++;
        this.$.feedbackEl.className = 'battle-feedback feedback-correct';
        this.$.feedbackEl.textContent = '✅ Benar! Serang!';

        if (stageData.enemy.isBoss) {
          this.enemyHP--;
          this._updateBossHP();
          if (this.enemyHP > 0) {
            this._heroAttack(() => this._bossHit(() => {
              setTimeout(() => this._beginBattle(), 1000);
            }));
            return;
          }
        }
        this._heroAttack(() => this._enemyDie());
      } else {
        this.sound.wrong();
        this.$.feedbackEl.className = 'battle-feedback feedback-wrong';
        this.$.feedbackEl.textContent = answer === null ? '⏰ Waktu Habis!' : '❌ Salah!';
        this.$.explanationEl.style.display = 'block';
        this.$.explanationEl.textContent = '💡 ' + q.explanation;

        this._playerHurt(() => {
          this.playerHP--;
          this._updateHUD();
          if (this.playerHP <= 0) {
            setTimeout(() => this._gameOver(), 900);
          } else {
            setTimeout(() => this._beginBattle(), 1800);
          }
        });
      }
    }

    // ----------------------------------------------------------
    //  ANIMATIONS
    // ----------------------------------------------------------
    _heroAttack(cb) {
      this.sound.jump();
      this.$.playerEl.className = 'player hero-jump-attack';
      setTimeout(() => {
        this.$.playerEl.className = 'player hero-idle';
        if (cb) cb();
      }, 650);
    }

    _bossHit(cb) {
      const enemy = document.getElementById('current-enemy');
      if (enemy) {
        enemy.classList.add('enemy-hit');
        setTimeout(() => { enemy.classList.remove('enemy-hit'); if (cb) cb(); }, 400);
      } else if (cb) cb();
    }

    _playerHurt(cb) {
      this.sound.hit();
      this.$.playerEl.className = 'player hero-hurt';
      setTimeout(() => {
        this.$.playerEl.className = 'player hero-idle';
        if (cb) cb();
      }, 500);
    }

    _enemyDie() {
      this.state = GameState.ENEMY_DEAD;
      this.sound.enemyDie();
      const enemy = document.getElementById('current-enemy');
      if (enemy) {
        enemy.classList.add('enemy-dying');
        setTimeout(() => {
          enemy.style.display = 'none';
          this._stageClear();
        }, 700);
      } else {
        this._stageClear();
      }
    }

    _updateBossHP() {
      const pct = (this.enemyHP / this.enemyMaxHP) * 100;
      this.$.bossHpInner.style.width = pct + '%';
    }

    // ----------------------------------------------------------
    //  STAGE CLEAR & TRANSITION
    // ----------------------------------------------------------
    _stageClear() {
      this.state = GameState.STAGE_CLEAR;
      this.sound.stageClear();
      this.$.battlePanel.classList.remove('active');
      this.$.stageFlag.style.display = 'block';

      // Player runs to flag
      this.$.playerEl.className = 'player hero-walk';
      this.$.playerEl.style.transition = 'left 1.3s linear';
      this.$.playerEl.style.left = '88%';

      setTimeout(() => {
        this.$.playerEl.style.transition = '';
        this._transitionToNext();
      }, 1500);
    }

    _transitionToNext() {
      this.state = GameState.TRANSITIONING;
      const levelData = GAME_DATA.levels[this.currentLevel];

      if (this.currentStage < levelData.stages.length - 1) {
        this.currentStage++;
        this._flashTransition(() => this._startStage());
      } else {
        this._levelVictory();
      }
    }

    _flashTransition(cb) {
      const ov = this.$.transitionOverlay;
      ov.style.opacity = '1';
      ov.style.pointerEvents = 'all';
      setTimeout(() => {
        if (cb) cb();
        setTimeout(() => {
          ov.style.opacity = '0';
          ov.style.pointerEvents = 'none';
        }, 300);
      }, 450);
    }

    // ----------------------------------------------------------
    //  LEVEL VICTORY / GAME OVER
    // ----------------------------------------------------------
    _levelVictory() {
      this.state = GameState.VICTORY;
      const levelData = GAME_DATA.levels[this.currentLevel];
      this.$.victoryLevel.textContent = levelData.name;
      const isLast = this.currentLevel >= GAME_DATA.levels.length - 1;
      this.$.btnNextLevel.style.display = isLast ? 'none' : 'inline-block';

      if (!isLast) {
        this.unlockedLevels[this.currentLevel + 2] = true;
        this._saveProgress();
      }

      this._showModal(this.$.modalVictory);
    }

    _gameOver() {
      this.state = GameState.GAME_OVER;
      const levelData = GAME_DATA.levels[this.currentLevel];
      const stageData = levelData.stages[this.currentStage];
      this.$.gameoverMsg.textContent =
        'Kamu dikalahkan di ' + levelData.name + ' Stage ' + stageData.stageNum + '. Jangan menyerah, Python Warrior!';
      this._showModal(this.$.modalGameover);
    }

    _restartCurrentLevel() {
      this._hideModal(this.$.modalGameover);
      this._startLevel(this.currentLevel);
    }

    _onNextLevel() {
      this._hideModal(this.$.modalVictory);
      if (this.currentLevel < GAME_DATA.levels.length - 1) {
        this._startLevel(this.currentLevel + 1);
      } else {
        this._gotoMenu();
      }
    }

    // ----------------------------------------------------------
    //  HUD
    // ----------------------------------------------------------
    _updateHUD() {
      let hearts = '';
      for (let i = 0; i < this.maxHP; i++) {
        hearts += i < this.playerHP ? '❤️' : '🖤';
      }
      this.$.heartsEl.textContent = hearts;
      this._updateTimerBar(10, 10);
    }

    // ----------------------------------------------------------
    //  THEME
    // ----------------------------------------------------------
    _setTheme(theme) {
      this.$.gameWorld.className = 'game-world theme-' + theme;
    }

    // ----------------------------------------------------------
    //  SCENERY BUILDER
    // ----------------------------------------------------------
    _buildScenery() {
      const theme = GAME_DATA.levels[this.currentLevel].bgTheme;
      const sc = this.$.scenery;
      sc.innerHTML = '';
      sc.style.transform = 'translateX(0)';

      if (theme === 'forest') {
        [80, 220, 380, 540, 720, 920, 1100].forEach((x, i) => {
          const h = 55 + (i % 3) * 15;
          const el = document.createElement('div');
          el.className = 'scenery-obj';
          el.style.left = x + 'px';
          el.style.bottom = '60px';
          el.innerHTML = '<svg width="44" height="' + h + '" viewBox="0 0 44 ' + h + '">' +
            '<rect x="18" y="' + (h - 22) + '" width="8" height="22" fill="#8B4513"/>' +
            '<polygon points="22,0 44,' + (h - 10) + ' 0,' + (h - 10) + '" fill="#2D7D2D"/>' +
            '<polygon points="22,8 40,' + (h - 6) + ' 4,' + (h - 6) + '" fill="#228B22"/>' +
            '</svg>';
          sc.appendChild(el);
        });
      } else if (theme === 'cave') {
        [60, 180, 320, 470, 640, 820, 1000].forEach((x, i) => {
          const h = 40 + (i % 4) * 10;
          const el = document.createElement('div');
          el.className = 'scenery-obj';
          el.style.left = x + 'px';
          el.style.top = '0';
          el.innerHTML = '<svg width="32" height="' + h + '" viewBox="0 0 32 ' + h + '">' +
            '<polygon points="16,0 32,' + h + ' 0,' + h + '" fill="#607D8B"/>' +
            '<polygon points="16,5 28,' + h + ' 4,' + h + '" fill="#78909C"/>' +
            '</svg>';
          sc.appendChild(el);
        });
        [150, 440, 740].forEach(x => {
          const el = document.createElement('div');
          el.className = 'scenery-obj crystal-anim';
          el.style.left = x + 'px';
          el.style.bottom = '64px';
          el.innerHTML = '<svg width="22" height="44" viewBox="0 0 22 44">' +
            '<polygon points="11,0 22,32 11,44 0,32" fill="#9C27B0" opacity="0.82"/>' +
            '<polygon points="11,4 18,30 11,38 4,30" fill="#CE93D8" opacity="0.5"/>' +
            '</svg>';
          sc.appendChild(el);
        });
      } else if (theme === 'volcano') {
        [90, 280, 480, 700, 920].forEach((x, i) => {
          const el = document.createElement('div');
          el.className = 'scenery-obj';
          el.style.left = x + 'px';
          el.style.bottom = '60px';
          el.innerHTML = '<svg width="54" height="38" viewBox="0 0 54 38">' +
            '<ellipse cx="27" cy="30" rx="27" ry="12" fill="#37474F"/>' +
            '<ellipse cx="27" cy="30" rx="20" ry="8" fill="#FF5722" opacity="0.65"/>' +
            (i % 2 === 0 ? '<path d="M22 10 Q27 0 32 10" stroke="#FF8C00" stroke-width="3" fill="none" opacity="0.7"/>' : '') +
            '</svg>';
          sc.appendChild(el);
        });
      }
    }

    // ----------------------------------------------------------
    //  CLEANUP
    // ----------------------------------------------------------
    _stopAll() {
      if (this._walkInterval) { clearInterval(this._walkInterval); this._walkInterval = null; }
      if (this.timer) { this.timer.stop(); this.timer = null; }
      this.$.battlePanel.classList.remove('active');
    }
  }

  // ============================================================
  //  BOOT
  // ============================================================
  window.addEventListener('DOMContentLoaded', () => { new PythonQuestGame(); });

})();
