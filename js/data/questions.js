/**
 * Data Lengkap 3 Level (Masing-masing 5 Stage = Total 15 Stage)
 * Mata Kuliah: Berpikir Komputasi (Bekom)
 */

export const gameLevels = [
  // ==========================================
  // LEVEL 1: DASAR LOGIKA & ALGORITMA
  // ==========================================
  {
    id: 1,
    name: "Level 1: Dasar Logika & Algoritma",
    badge: "DASAR",
    description: "Kuasai variabel, komparasi, if-else, perulangan, dan logika Boolean untuk mengalahkan monster gerbang!",
    stages: [
      {
        stageNumber: 1,
        title: "Stage 1: Variabel & Tipe Data",
        pilarBekom: "Dekomposisi & Abstraksi",
        enemy: {
          name: "Bug Slime",
          hp: 1,
          maxHp: 1,
          color: "#4ade80",
          svgType: "slime"
        },
        scenario: "Bug Slime menghadang di gerbang! Inisialisasi variabel nyawa pahlawan dengan nilai angka (Number) yang valid.",
        codePre: "let hero_hp = ",
        codePost: ";",
        options: ["100", "\"penuh\"", "false", "undefined"],
        correctAnswer: "100",
        explanation: "Nilai nyawa harus berupa tipe data Number (angka 100) agar nilai HP bisa dihitung, ditambah, atau dikurangi saat terkena serangan."
      },
      {
        stageNumber: 2,
        title: "Stage 2: Operator Perbandingan",
        pilarBekom: "Pengenalan Pola",
        enemy: {
          name: "Syntax Goblin",
          hp: 1,
          maxHp: 1,
          color: "#f59e0b",
          svgType: "goblin"
        },
        scenario: "Syntax Goblin mengunci pintu ruang harta. Pintu hanya terbuka jika kamu memiliki kunci tepat sejumlah 3 buah.",
        codePre: "if (jumlah_kunci ",
        codePost: " 3) {\n    bukaPintu();\n}",
        options: ["===", "=", "> <", "!="],
        correctAnswer: "===",
        explanation: "Operator perbandingan ketat (=== atau ==) digunakan untuk memeriksa kesamaan nilai. Operator tunggal '=' hanya untuk penugasan (assignment) nilai."
      },
      {
        stageNumber: 3,
        title: "Stage 3: Percabangan Logika (If-Else)",
        pilarBekom: "Algoritma & Alur Keputusan",
        enemy: {
          name: "Shadow Skeleton",
          hp: 1,
          maxHp: 1,
          color: "#94a3b8",
          svgType: "skeleton"
        },
        scenario: "Shadow Skeleton bersiap menyerang dari bayangan! Lengkapi struktur percabangan untuk menentukan respon hero.",
        codePre: "if (musuhMenyerang) {\n    tangkis();\n} ",
        codePost: " {\n    langkahMaju();\n}",
        options: ["else", "then", "loop", "otherwise"],
        correctAnswer: "else",
        explanation: "Blok 'else' dieksekusi ketika kondisi utama dalam 'if' bernilai false (musuh tidak sedang menyerang)."
      },
      {
        stageNumber: 4,
        title: "Stage 4: Perulangan (Looping Pattern)",
        pilarBekom: "Pengenalan Pola & Algoritma",
        enemy: {
          name: "Loop Golem",
          hp: 1,
          maxHp: 1,
          color: "#38bdf8",
          svgType: "golem"
        },
        scenario: "Loop Golem memiliki pelindung batu 5 lapis. Buat perulangan agar pahlawan menyerang sebanyak 5 kali berurutan dari i = 0 hingga 4.",
        codePre: "for (let i = 0; i < 5; i",
        codePost: ") {\n    pukulPelindung();\n}",
        options: ["++", "--", "**", "=="],
        correctAnswer: "++",
        explanation: "Operator inkremen '++' menambah nilai variabel 'i' sebanyak 1 di setiap putaran, sehingga perulangan berjalan tepat 5 kali (0, 1, 2, 3, 4)."
      },
      {
        stageNumber: 5,
        title: "Stage 5 (BOSS): Logika Kombinasi (AND / OR)",
        pilarBekom: "Abstraksi & Penalaran Logika",
        enemy: {
          name: "Cyber Wyrm (BOSS)",
          hp: 1,
          maxHp: 1,
          color: "#f43f5e",
          svgType: "dragon"
        },
        scenario: "Naga terakhir hanya bisa dikalahkan jika pahlawan membawa Pedang Cahaya DAN Perisai Kristal sekaligus. Gunakan operator logika yang tepat!",
        codePre: "if (punyaPedang ",
        codePost: " punyaPerisai) {\n    serangTitikLemah();\n}",
        options: ["&&", "||", "!", "+="],
        correctAnswer: "&&",
        explanation: "Operator '&&' (Logical AND) memastikan kedua kondisi harus bernilai TRUE agar blok serangan fatal naga dapat dieksekusi!"
      }
    ]
  },

  // ==========================================
  // LEVEL 2: FUNGSI, MODULARITAS & REKURSI
  // ==========================================
  {
    id: 2,
    name: "Level 2: Fungsi & Modularitas Kode",
    badge: "MENENGAH",
    description: "Pelajari dekomposisi masalah besar menjadi fungsi-fungsi kecil, parameter, nilai kembalian, dan rekursi!",
    stages: [
      {
        stageNumber: 1,
        title: "Stage 1: Deklarasi Fungsi Prosedural",
        pilarBekom: "Dekomposisi",
        enemy: {
          name: "Syntax Bat",
          hp: 1,
          maxHp: 1,
          color: "#c084fc",
          svgType: "bat"
        },
        scenario: "Syntax Bat bergerak cepat di udara! Pecah aksi serangan menjadi fungsi yang dapat dipanggil berkali-kali.",
        codePre: "",
        codePost: " serangKilat() {\n    lemparBumerang();\n}",
        options: ["function", "procedure", "def", "method"],
        correctAnswer: "function",
        explanation: "Dalam JavaScript standar, kata kunci 'function' digunakan untuk mendeklarasikan blok kode fungsi yang dapat dipanggil berulang kali."
      },
      {
        stageNumber: 2,
        title: "Stage 2: Parameter & Argumen",
        pilarBekom: "Abstraksi",
        enemy: {
          name: "Parameter Mage",
          hp: 1,
          maxHp: 1,
          color: "#a855f7",
          svgType: "mage"
        },
        scenario: "Parameter Mage melemparkan perisai sihir. Lengkapi parameter agar fungsi menerima besaran kekuatan serangan pahlawan.",
        codePre: "function tembakMantra(",
        codePost: ") {\n    return targetHp - kekuatan;\n}",
        options: ["kekuatan", "100", "\"api\"", "null"],
        correctAnswer: "kekuatan",
        explanation: "Parameter dalam deklarasi fungsi berfungsi sebagai variabel penampung (placeholder abstraksi) nilai argumen yang dikirim saat pemanggilan."
      },
      {
        stageNumber: 3,
        title: "Stage 3: Nilai Kembalian (Return Value)",
        pilarBekom: "Algoritma",
        enemy: {
          name: "Return Specter",
          hp: 1,
          maxHp: 1,
          color: "#2dd4bf",
          svgType: "specter"
        },
        scenario: "Hantu Specter hanya bisa disentuh jika pahlawan mengecek status sihir suci dan mengembalikan nilai kebenaran.",
        codePre: "function cekPedangSuci() {\n    ",
        codePost: " true;\n}",
        options: ["return", "send", "give", "output"],
        correctAnswer: "return",
        explanation: "Kata kunci 'return' menghentikan eksekusi fungsi dan mengirimkan suatu nilai kembali ke pemanggil fungsi tersebut."
      },
      {
        stageNumber: 4,
        title: "Stage 4: Scope Variabel (Lokal vs Global)",
        pilarBekom: "Dekomposisi & Abstraksi",
        enemy: {
          name: "Scope Mimic",
          hp: 1,
          maxHp: 1,
          color: "#fbbf24",
          svgType: "mimic"
        },
        scenario: "Scope Mimic menyamarkan peti harta karun! Gunakan kata kunci deklarasi variabel modern dengan block scope yang aman.",
        codePre: "function bukaPeti() {\n    ",
        codePost: " harta = 'Mahkota Emas';\n}",
        options: ["let", "global", "all", "goto"],
        correctAnswer: "let",
        explanation: "Kata kunci 'let' (atau 'const') mendeklarasikan variabel yang memiliki cakupan blok (block-scoped), mencegah kebocoran variabel ke lingkup global."
      },
      {
        stageNumber: 5,
        title: "Stage 5 (BOSS): Rekursi Logika",
        pilarBekom: "Pengenalan Pola & Algoritma",
        enemy: {
          name: "Recursive Hydra (BOSS)",
          hp: 1,
          maxHp: 1,
          color: "#ec4899",
          svgType: "hydra"
        },
        scenario: "Kepala Hydra beregenerasi terus! Panggil fungsi itu sendiri dengan argumen yang berkurang hingga mencapai Base Case (kondisi henti).",
        codePre: "function tebasKepala(n) {\n    if (n <= 0) return;\n    ",
        codePost: "(n - 1);\n}",
        options: ["tebasKepala", "ulangLagi", "loop", "function"],
        correctAnswer: "tebasKepala",
        explanation: "Rekursi adalah teknik di mana suatu fungsi memanggil dirinya sendiri dengan input yang mendekati 'Base Case' agar tidak terjadi infinite recursion."
      }
    ]
  },

  // ==========================================
  // LEVEL 3: STRUKTUR DATA & ALGORITMA PENELUSURAN
  // ==========================================
  {
    id: 3,
    name: "Level 3: Struktur Data & Algoritma Pencarian",
    badge: "LANJUTAN",
    description: "Terapkan konsep Array, penelusuran (traversal), operasi Stack, dan Linear Search untuk mengalahkan Penguasa Digital!",
    stages: [
      {
        stageNumber: 1,
        title: "Stage 1: Indeks Array Dasar (0-Indexed)",
        pilarBekom: "Pengenalan Pola",
        enemy: {
          name: "Array Hound",
          hp: 1,
          maxHp: 1,
          color: "#f97316",
          svgType: "hound"
        },
        scenario: "Array Hound menjaga tas inventori. Ambil senjata pertama yang tersimpan di dalam array!",
        codePre: "const senjata = ['Pedang', 'Busur', 'Tongkat'];\nlet senjataPertama = senjata[",
        codePost: "];",
        options: ["0", "1", "pertama", "-1"],
        correctAnswer: "0",
        explanation: "Dalam JavaScript dan sebagian besar bahasa pemrograman, indeks array selalu dimulai dari angka 0 (Zero-indexed)."
      },
      {
        stageNumber: 2,
        title: "Stage 2: Operasi Penambahan Elemen Array",
        pilarBekom: "Algoritma",
        enemy: {
          name: "Stack Crab",
          hp: 1,
          maxHp: 1,
          color: "#06b6d4",
          svgType: "crab"
        },
        scenario: "Stack Crab menjatuhkan kristal energi. Masukkan kristal baru ke bagian paling belakang array inventori.",
        codePre: "const tas = ['Ramuan'];\ntas.",
        codePost: "('Kristal');",
        options: ["push", "insert", "append", "add"],
        correctAnswer: "push",
        explanation: "Metode array.push() menambahkan satu atau lebih elemen baru ke bagian akhir (paling belakang) suatu array."
      },
      {
        stageNumber: 3,
        title: "Stage 3: Panjang Koleksi Data (Array Length)",
        pilarBekom: "Abstraksi",
        enemy: {
          name: "Traverse Spider",
          hp: 1,
          maxHp: 1,
          color: "#64748b",
          svgType: "spider"
        },
        scenario: "Laba-laba raksasa memiliki banyak kaki! Dapatkan total jumlah elemen yang ada di dalam array kaki.",
        codePre: "let totalKaki = daftarKaki.",
        codePost: ";",
        options: ["length", "size", "count", "total"],
        correctAnswer: "length",
        explanation: "Properti '.length' pada array JavaScript mengembalikan jumlah total elemen yang ada di dalam array tersebut."
      },
      {
        stageNumber: 4,
        title: "Stage 4: Algoritma Pencarian Linier (Linear Search)",
        pilarBekom: "Algoritma & Pengenalan Pola",
        enemy: {
          name: "Search Phantom",
          hp: 1,
          maxHp: 1,
          color: "#6366f1",
          svgType: "phantom"
        },
        scenario: "Search Phantom bersembunyi di salah satu ruangan. Periksa satu per satu apakah ruangan saat ini berisi monster target.",
        codePre: "for (let r of daftarRuangan) {\n    if (r === ",
        codePost: ") { temukanMusuh(); }\n}",
        options: ["targetMusuh", "true", "null", "for"],
        correctAnswer: "targetMusuh",
        explanation: "Algoritma Linear Search membandingkan setiap elemen dalam koleksi dengan nilai target ('targetMusuh') hingga kecocokan ditemukan."
      },
      {
        stageNumber: 5,
        title: "Stage 5 (FINAL BOSS): Binary Overlord",
        pilarBekom: "Puncak 4 Pilar Berpikir Komputasi",
        enemy: {
          name: "Binary Overlord (FINAL BOSS)",
          hp: 1,
          maxHp: 1,
          color: "#dc2626",
          svgType: "overlord"
        },
        scenario: "FINAL BOSS! Overlord memanipulasi kode inti. Temukan indeks titik tengah (Mid Point) untuk mengeksekusi serangan Binary Split!",
        codePre: "let mid = Math.floor((kiri + kanan) ",
        codePost: " 2);",
        options: ["/", "*", "%", "-"],
        correctAnswer: "/",
        explanation: "Untuk mencari titik tengah (midpoint) pada algoritma pencarian biner (Binary Search), kita menjumlahkan batas kiri dan kanan lalu membaginya dengan 2 (/ 2)!"
      }
    ]
  }
];
