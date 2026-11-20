(function () {
  'use strict';

  // ============================================================
  //  GAME DATA — 3 Levels, 15 Stages, 15 Questions
  // ============================================================
  const GAME_DATA = {
    levels: [
      {
        id: 1,
        name: 'Level 1: Hutan Sintaks',
        bgTheme: 'forest',
        stages: [
          {
            stageNum: 1,
            enemy: { name: 'Orc Perusak', type: 'orc', hp: 1, isBoss: false },
            question: {
              scenario: 'Orc Perusak menghalangi jalan! Inisialisasi variabel nama dan cetak pesan sapaan ke layar!',
              code: 'nama = {0}\n{1}("Halo, " + nama)',
              blanks: [
                { id: 0, answer: '"Budi"' },
                { id: 1, answer: 'print' }
              ],
              pool: ['"Budi"', 'print', '123', 'True', 'input', 'def', 'nama', 'None'],
              explanation: 'String dalam Python ditulis dalam tanda kutip ("Budi"), dan print() adalah fungsi bawaan untuk menampilkan output ke layar.'
            }
          },
          {
            stageNum: 2,
            enemy: { name: 'Goblin Sintaks', type: 'goblin', hp: 1, isBoss: false },
            question: {
              scenario: 'Goblin Sintaks menyerang! Hitung total biaya 3 ramuan menggunakan operasi perkalian!',
              code: 'harga = 20\njumlah = 3\ntotal = harga {0} {1}\nprint("Total:", total)',
              blanks: [
                { id: 0, answer: '*' },
                { id: 1, answer: 'jumlah' }
              ],
              pool: ['*', 'jumlah', '+', '/', 'harga', '"3"', '%', 'total'],
              explanation: 'Operator * digunakan untuk perkalian angka (harga * jumlah). Hasilnya adalah 60.'
            }
          },
          {
            stageNum: 3,
            enemy: { name: 'Orc Pengintai', type: 'orc', hp: 1, isBoss: false },
            question: {
              scenario: 'Orc Pengintai muncul! Ambil masukan usia dan ubah teks string menjadi tipe integer!',
              code: 'teks = input("Usia: ")\nusia = {0}({1})\nprint("Tipe:", type(usia))',
              blanks: [
                { id: 0, answer: 'int' },
                { id: 1, answer: 'teks' }
              ],
              pool: ['int', 'teks', 'str', 'float', '"usia"', 'input', 'type', 'print'],
              explanation: 'int(teks) mengonversi input bertipe string menjadi bilangan bulat (integer) agar dapat dihitung secara numerik.'
            }
          },
          {
            stageNum: 4,
            enemy: { name: 'Goblin Bayangan', type: 'goblin', hp: 1, isBoss: false },
            question: {
              scenario: 'Goblin Bayangan menghadang! Tentukan apakah skor pemain mencukupi batas KKM (minimal 75)!',
              code: 'skor = 85\nkkm = 75\nlulus = {0} {1} {2}\nprint("Lulus:", lulus)',
              blanks: [
                { id: 0, answer: 'skor' },
                { id: 1, answer: '>=' },
                { id: 2, answer: 'kkm' }
              ],
              pool: ['skor', '>=', 'kkm', '==', '<=', '85', '75', 'is'],
              explanation: 'Operator >= (lebih besar atau sama dengan) memeriksa apakah skor memenuhi batas minimal kkm.'
            }
          },
          {
            stageNum: 5,
            enemy: { name: 'BOSS: Raja Iblis Hutan', type: 'orc_boss', hp: 3, isBoss: true },
            bossQuestions: [
              {
                scenario: '🔥 [BOSS FASE 1/3] Raja Iblis Hutan muncul! Siapkan status kesiapan bertarung pahlawan!',
                code: 'hero_hp = 100\nstatus = {0}\n{1}("Hero siap bertarung!")',
                blanks: [
                  { id: 0, answer: '"Siap"' },
                  { id: 1, answer: 'print' }
                ],
                pool: ['"Siap"', 'print', 'hero_hp', '100', 'def', 'input', 'False', 'status'],
                explanation: 'Variabel status diisi string "Siap" dan fungsi print() menampilkan status ke layar.'
              },
              {
                scenario: '⚡ [BOSS FASE 2/3] Raja Iblis Hutan mengamuk! Hitung kekuatan pukulan kombo pahlawan!',
                code: 'pukulan = 30\ncombo = 2\ntotal_damage = {0} {1} {2}',
                blanks: [
                  { id: 0, answer: 'pukulan' },
                  { id: 1, answer: '*' },
                  { id: 2, answer: 'combo' }
                ],
                pool: ['pukulan', '*', 'combo', '+', '/', 'total_damage', '60', 'hero_hp'],
                explanation: 'total_damage dihitung dari hasil perkalian pukulan * combo menggunakan operator *.'
              },
              {
                scenario: '💥 [BOSS FASE FINAL] Pukulan Terakhir! Konversi sisa HP boss ke string untuk dicetak!',
                code: 'sisa_hp = 0\n{0}("Boss K.O.! Sisa HP: " + {1}(sisa_hp))',
                blanks: [
                  { id: 0, answer: 'print' },
                  { id: 1, answer: 'str' }
                ],
                pool: ['print', 'str', 'int', 'sisa_hp', 'type', 'input', 'None', '"0"'],
                explanation: 'str(sisa_hp) mengonversi angka 0 menjadi string agar dapat digabungkan dengan operator +.'
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: 'Level 2: Lembah Magma',
        bgTheme: 'volcano',
        stages: [
          {
            stageNum: 1,
            enemy: { name: 'Anjing Api', type: 'volcano_dog', hp: 1, isBoss: false },
            question: {
              scenario: 'Anjing Api menyerang! Susun algoritma kelulusan siswa dengan batas nilai 70!',
              code: 'nilai = 50\n{0} {1}:\n    {2}(\'Selamat, anda lulus!\')\n{3}:\n    print(\'Maaf, anda tidak lulus.\')',
              blanks: [
                { id: 0, answer: 'if' },
                { id: 1, answer: 'nilai >= 70' },
                { id: 2, answer: 'print' },
                { id: 3, answer: 'else' }
              ],
              pool: ['if', 'nilai >= 70', 'print', 'else', 'elif', 'nilai == 50', 'input', 'while'],
              explanation: "Gunakan 'if' untuk memeriksa 'nilai >= 70', 'print' untuk mencetak output, dan 'else' untuk kondisi tidak lulus."
            }
          },
          {
            stageNum: 2,
            enemy: { name: 'Spirit Api', type: 'volcano_spirit', hp: 1, isBoss: false },
            question: {
              scenario: 'Spirit Api muncul! Periksa apakah nilai bilangan merupakan angka positif!',
              code: 'angka = 15\n{0} angka {1} 0:\n    print("Positif")\n{2}:\n    print("Bukan Positif")',
              blanks: [
                { id: 0, answer: 'if' },
                { id: 1, answer: '>' },
                { id: 2, answer: 'else' }
              ],
              pool: ['if', '>', 'else', '<', 'elif', '==', 'then', 'angka'],
              explanation: 'if angka > 0 memeriksa apakah angka lebih besar dari 0, dan else menangani alternatif kondisi.'
            }
          },
          {
            stageNum: 3,
            enemy: { name: 'Anjing Lava', type: 'volcano_dog', hp: 1, isBoss: false },
            question: {
              scenario: 'Anjing Lava menghalangi! Lengkapi percabangan bertingkat elif untuk menentukan Grade B!',
              code: 'skor = 78\nif skor >= 85:\n    grade = "A"\n{0} skor {1} 70:\n    grade = "B"\n{2}:\n    grade = "C"',
              blanks: [
                { id: 0, answer: 'elif' },
                { id: 1, answer: '>=' },
                { id: 2, answer: 'else' }
              ],
              pool: ['elif', '>=', 'else', 'if', '<=', 'grade', 'skor', 'then'],
              explanation: 'elif (else if) digunakan untuk mengecek kondisi alternatif jika if pertama bernilai False.'
            }
          },
          {
            stageNum: 4,
            enemy: { name: 'Spirit Magma', type: 'volcano_spirit', hp: 1, isBoss: false },
            question: {
              scenario: 'Spirit Magma menjaga gerbang! Akses hanya dibuka jika punya tiket DAN punya password!',
              code: 'tiket = True\npassword_benar = True\nif tiket {0} {1}:\n    {2}("Pintu Terbuka!")\nelse:\n    print("Akses Ditolak!")',
              blanks: [
                { id: 0, answer: 'and' },
                { id: 1, answer: 'password_benar' },
                { id: 2, answer: 'print' }
              ],
              pool: ['and', 'password_benar', 'print', 'or', 'not', 'tiket', 'elif', 'False'],
              explanation: 'Operator and memastikan kedua kondisi bernilai True agar blok pernyataan if dapat dieksekusi.'
            }
          },
          {
            stageNum: 5,
            enemy: { name: 'BOSS: Raksasa Lava', type: 'volcano_boss', hp: 3, isBoss: true },
            bossQuestions: [
              {
                scenario: '🔥 [BOSS FASE 1/3] Raksasa Lava menyerang! Berikan diskon jika belanja mencapai 100 ribu!',
                code: 'belanja = 120000\n{0} belanja {1} 100000:\n    diskon = {2}\nelse:\n    diskon = 0',
                blanks: [
                  { id: 0, answer: 'if' },
                  { id: 1, answer: '>=' },
                  { id: 2, answer: '20000' }
                ],
                pool: ['if', '>=', '20000', '<=', 'elif', 'belanja', 'diskon', 'else'],
                explanation: 'if belanja >= 100000 memeriksa total belanja memenuhi syarat diskon 20000.'
              },
              {
                scenario: '⚡ [BOSS FASE 2/3] Raksasa Lava mengerahkan perisai! Gunakan operator OR untuk memeriksa kelemahan sihir!',
                code: 'kelemahan_es = True\nkelemahan_petir = False\nif kelemahan_es {0} {1}:\n    {2}("Serangan Berhasil!")',
                blanks: [
                  { id: 0, answer: 'or' },
                  { id: 1, answer: 'kelemahan_petir' },
                  { id: 2, answer: 'print' }
                ],
                pool: ['or', 'kelemahan_petir', 'print', 'and', 'not', 'kelemahan_es', 'return', 'else'],
                explanation: 'Operator or bernilai True jika salah satu kondisi bernilai True (kelemahan_es bernilai True).'
              },
              {
                scenario: '💥 [BOSS FASE FINAL] Pukulan Terakhir! Buat keputusan serangan pamungkas pahlawan!',
                code: 'mana = 50\n{0} mana >= 30:\n    jurus = {1}\n{2}:\n    jurus = "Pukulan Biasa"',
                blanks: [
                  { id: 0, answer: 'if' },
                  { id: 1, answer: '"Meteor"' },
                  { id: 2, answer: 'else' }
                ],
                pool: ['if', '"Meteor"', 'else', 'elif', 'mana', '30', 'while', 'print'],
                explanation: 'if mana >= 30 memilih jurus "Meteor", dan else menangani jika mana tidak mencukupi.'
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: 'Level 3: Kerajaan Gelap',
        bgTheme: 'dark-castle',
        stages: [
          {
            stageNum: 1,
            enemy: { name: 'Ksatria Hitam', type: 'castle_knight', hp: 1, isBoss: false },
            question: {
              scenario: 'Ksatria Hitam menyerang! Buat perulangan for dengan range untuk memukul 5 kali!',
              code: '{0} i in {1}(5):\n    {2}("Pukulan ke-", i)',
              blanks: [
                { id: 0, answer: 'for' },
                { id: 1, answer: 'range' },
                { id: 2, answer: 'print' }
              ],
              pool: ['for', 'range', 'print', 'while', 'in', 'len', '5', 'loop'],
              explanation: 'for i in range(5) mengulang perintah print sebanyak 5 kali berurutan dari 0 sampai 4.'
            }
          },
          {
            stageNum: 2,
            enemy: { name: 'Ksatria Palu', type: 'castle_hammer', hp: 1, isBoss: false },
            question: {
              scenario: 'Ksatria Palu mengurung ruangan! Jalankan hitung mundur dengan perulangan while!',
              code: 'hitung = 3\n{0} hitung > 0:\n    print(hitung)\n    hitung {1} {2}',
              blanks: [
                { id: 0, answer: 'while' },
                { id: 1, answer: '-=' },
                { id: 2, answer: '1' }
              ],
              pool: ['while', '-=', '1', 'for', '+=', '==', 'hitung', '0'],
              explanation: 'while hitung > 0 berulang selama syarat bernilai True. hitung -= 1 mengurangi nilai agar tidak loop selamanya.'
            }
          },
          {
            stageNum: 3,
            enemy: { name: 'Ksatria Bayangan', type: 'castle_knight', hp: 1, isBoss: false },
            question: {
              scenario: 'Ksatria Bayangan datang! Definisikan fungsi dan kembalikan nilai hasil perkalian kuadrat!',
              code: '{0} kuadrat(x):\n    {1} x * x\n\nhasil = kuadrat(5)',
              blanks: [
                { id: 0, answer: 'def' },
                { id: 1, answer: 'return' }
              ],
              pool: ['def', 'return', 'function', 'print', 'kuadrat', 'x', '5', 'import'],
              explanation: 'Kata kunci def digunakan untuk mendefinisikan fungsi, dan return mengembalikan hasil ke pemanggil.'
            }
          },
          {
            stageNum: 4,
            enemy: { name: 'Ksatria Palu Hitam', type: 'castle_hammer', hp: 1, isBoss: false },
            question: {
              scenario: 'Ksatria Palu Hitam menyerang! Tambahkan item ke list tas dan ambil item indeks pertama!',
              code: 'tas = ["Kunci", "Perisai"]\ntas.{0}("Excalibur")\npertama = tas[{1}]',
              blanks: [
                { id: 0, answer: 'append' },
                { id: 1, answer: '0' }
              ],
              pool: ['append', '0', 'add', 'push', '1', 'insert', 'tas', 'len'],
              explanation: 'Metode append() menambah elemen ke akhir list, dan indeks [0] mengakses elemen pertama.'
            }
          },
          {
            stageNum: 5,
            enemy: { name: 'BOSS FINAL: Raja Ksatria Bayangan (Penjaga Hibat)', type: 'castle_boss', hp: 3, isBoss: true },
            bossQuestions: [
              {
                scenario: '🔥 [FINAL BOSS FASE 1/3] Raja Ksatria Bayangan menyerang! Definisikan fungsi serangan ksatria!',
                code: '{0} serang(daya):\n    {1} daya * 3\n\ntotal = serang(20)',
                blanks: [
                  { id: 0, answer: 'def' },
                  { id: 1, answer: 'return' }
                ],
                pool: ['def', 'return', 'print', 'serang', 'daya', 'function', 'total', 'while'],
                explanation: 'def serang(daya) mendefinisikan fungsi dan return mengembalikan hasil perkalian.'
              },
              {
                scenario: '⚡ [FINAL BOSS FASE 2/3] Kuda perang menerjang! Ulangi penjumlahan damage dari daftar serangan!',
                code: 'combo = [15, 25, 40]\ntotal = 0\n{0} dmg {1} combo:\n    total += dmg',
                blanks: [
                  { id: 0, answer: 'for' },
                  { id: 1, answer: 'in' }
                ],
                pool: ['for', 'in', 'while', 'range', 'combo', 'total', 'len', 'dmg'],
                explanation: 'for dmg in combo mengiterasi setiap elemen nilai di dalam list combo.'
              },
              {
                scenario: '💥 [FINAL BOSS FASE FINAL] Tebasan Pamungkas! Lengkapi Base Case fungsi rekursif!',
                code: 'def hitung_mundur(detik):\n    if detik {0} 0:\n        return "Ksatria Kalah!"\n    {1} hitung_mundur(detik - 1)',
                blanks: [
                  { id: 0, answer: '<=' },
                  { id: 1, answer: 'return' }
                ],
                pool: ['<=', 'return', '>=', '==', 'def', 'print', 'detik', 'break'],
                explanation: 'if detik <= 0 adalah Base Case agar fungsi rekursi berhenti saat mencapai target.'
              }
            ]
          }
        ]
      }
    ]
  };

  // ============================================================
  //  STORY DATA: PROLOGUE & STAGE INTROS
  // ============================================================
  const PROLOGUE_DATA = [
    {
      id: 'prologue_part_1',
      title: 'Prolog 1/3: Pagi di Desa Lembah Python',
      backgroundTheme: 'village-peaceful',
      actors: { left: 'hero', right: 'danova' },
      lines: [
        {
          speaker: 'narrator',
          name: 'Narator',
          avatar: 'narrator_avatar',
          text: 'Desa Lembah Python... Sebuah pemukiman damai di mana logika dan alam hidup berdampingan.'
        },
        {
          speaker: 'danova',
          name: 'Danova',
          avatar: 'danova_avatar',
          text: 'Wah, seger banget udara pagi ini! Lu masih ngutak-ngatik baris kode semalam ya, Li?'
        },
        {
          speaker: 'ali',
          name: 'Ali',
          avatar: 'ali_avatar',
          text: 'Haha, iya nih Dan. Gua ngerasa ada yang janggal sama energi di sekitar desa kita belakangan ini.'
        },
        {
          speaker: 'danova',
          name: 'Danova',
          avatar: 'danova_avatar',
          text: 'Ah, lu kebanyakan mikir kali! Selama kita bareng, gak bakal ada hal buruk yang kejadian!'
        }
      ]
    },
    {
      id: 'prologue_part_2',
      title: 'Prolog 2/3: Invasi Entitas Kegelapan',
      backgroundTheme: 'village-attack',
      actors: { left: 'hero', right: 'hibat' },
      lines: [
        {
          speaker: 'narrator',
          name: 'Narator',
          avatar: 'narrator_avatar',
          action: 'shake',
          sfx: 'thunder',
          text: 'Tiba-tiba, langit pagi yang biru berubah pekat. Tanah bergetar hebat membelah kedamaian desa!'
        },
        {
          speaker: 'danova',
          name: 'Danova',
          avatar: 'danova_avatar',
          action: 'shake',
          text: 'A-apaan itu?! Langitnya... mendadak berubah jadi merah darah!'
        },
        {
          speaker: 'hibat',
          name: 'Hibat',
          avatar: 'hibat_avatar',
          action: 'spawn_hibat',
          sfx: 'portal',
          text: 'Kekeke... Sungguh desa yang rapuh! Manusia bodoh hanya mengandalkan logika semu!'
        },
        {
          speaker: 'ali',
          name: 'Ali',
          avatar: 'ali_avatar',
          text: 'Siapa lu?! Mau apa lu datang dan mengacau di desa kami?!'
        },
        {
          speaker: 'hibat',
          name: 'Hibat',
          avatar: 'hibat_avatar',
          action: 'vanish_danova',
          sfx: 'thunder',
          text: 'Aku Hibat, penguasa kekacauan! Gadis ini ikut denganku ke Puncak Rekursif. Coba kejar kalau kalian mampu!'
        },
        {
          speaker: 'danova',
          name: 'Danova',
          avatar: 'danova_avatar',
          action: 'shake',
          text: 'ALIII! TOLOOONG...!!'
        }
      ]
    },
    {
      id: 'prologue_part_3',
      title: 'Prolog 3/3: Reruntuhan & Sumpah Pahlawan',
      backgroundTheme: 'village-destroyed',
      actors: { left: 'hero' },
      lines: [
        {
          speaker: 'narrator',
          name: 'Narator',
          avatar: 'narrator_avatar',
          text: 'Hibat lenyap dalam pusaran asap hitam bersama Danova. Desa yang damai kini menyisakan kobaran api dan puing reruntuhan.'
        },
        {
          speaker: 'ali',
          name: 'Ali',
          avatar: 'ali_avatar',
          action: 'shake',
          text: 'DANOVA...! Sialan lu, Hibat!!'
        },
        {
          speaker: 'ali',
          name: 'Ali',
          avatar: 'ali_avatar',
          text: 'Gua gak boleh putus asa. Selama gua masih punya ilmu logika dan berpikir komputasi, gua bakal tembus semua sarang monster!'
        },
        {
          speaker: 'ali',
          name: 'Ali',
          avatar: 'ali_avatar',
          text: 'Tunggu gua, Danova. Gua bersumpah bakal bawa lu pulang dengan selamat!'
        }
      ]
    }
  ];

  const INTER_LEVEL_DATA = {
    // Selesai Level 1 (Hutan Sintaks) -> Menuju Level 2 (Lembah Magma)
    1: [
      {
        id: 'inter_1_to_2',
        title: 'Perjalanan: Menuju Lembah Magma',
        backgroundTheme: 'volcano',
        actors: { left: 'hero', right: null },
        lines: [
          {
            speaker: 'narrator',
            name: 'Narator',
            avatar: 'narrator_avatar',
            text: 'Ali berhasil menembus lebatnya Hutan Sintaks dan menaklukkan Raja Iblis Hutan dengan penguasaan dasar Python.'
          },
          {
            speaker: 'ali',
            name: 'Ali',
            avatar: 'ali_avatar',
            text: 'Fiuh... akhirnya lolos dari monster hutan! Tapi tunggu... kenapa hawanya mendadak panas membara?!'
          },
          {
            speaker: 'narrator',
            name: 'Narator',
            avatar: 'narrator_avatar',
            text: 'Di hadapan Ali membentang Lembah Magma yang dipenuhi aliran lava mendidih dan jurang terjal bercabang.'
          },
          {
            speaker: 'ali',
            name: 'Ali',
            avatar: 'ali_avatar',
            text: 'Jalan setapaknya bercabang di atas lahar mendidih. Salah melangkah sedikit saja bisa fatal tercebur!'
          },
          {
            speaker: 'ali',
            name: 'Ali',
            avatar: 'ali_avatar',
            text: 'Gua harus menguasai logika kondisi dan percabangan (if, elif, else) untuk memilih rute yang selamat!'
          },
          {
            speaker: 'ali',
            name: 'Ali',
            avatar: 'ali_avatar',
            text: 'Tunggu gua, Danova! Gua udah semakin dekat ke sarang Hibat!'
          }
        ]
      }
    ],

    // Selesai Level 2 (Lembah Magma) -> Menuju Level 3 (Kerajaan Gelap)
    2: [
      {
        id: 'inter_2_to_3',
        title: 'Perjalanan: Menembus Gerbang Kerajaan Gelap',
        backgroundTheme: 'dark-castle',
        actors: { left: 'hero', right: null },
        lines: [
          {
            speaker: 'narrator',
            name: 'Narator',
            avatar: 'narrator_avatar',
            text: 'Setelah berjuang melintasi lahar membara di Lembah Magma, Ali tiba di dataran tinggi yang gelap gulita.'
          },
          {
            speaker: 'ali',
            name: 'Ali',
            avatar: 'ali_avatar',
            text: 'Akhirnya berhasil menyeberangi lahar panas itu... Tapi tempat ini... atmosfernya dingin menusuk dan mencekam.'
          },
          {
            speaker: 'narrator',
            name: 'Narator',
            avatar: 'narrator_avatar',
            text: 'Sebuah benteng Kerajaan Gelap raksasa berdiri menjulang ke langit hitam. Kilatan petir ungu menyambar tiada henti.',
            action: 'shake',
            sfx: 'thunder'
          },
          {
            speaker: 'ali',
            name: 'Ali',
            avatar: 'ali_avatar',
            text: 'Itu dia! Sarang utama Hibat! Danova pasti disekap di ruang tahta tertinggi benteng itu.'
          },
          {
            speaker: 'ali',
            name: 'Ali',
            avatar: 'ali_avatar',
            text: 'Penjaga istana kegelapan ini diperkuat oleh sihir perulangan tanpa henti dan fungsi-fungsi modular yang rumit.'
          },
          {
            speaker: 'ali',
            name: 'Ali',
            avatar: 'ali_avatar',
            text: 'Gua gak boleh gentar! Kekuatan Loops (for, while) dan Fungsi sakti (def) akan gua kerahkan untuk meruntuhkan pertahanan Hibat!'
          },
          {
            speaker: 'ali',
            name: 'Ali',
            avatar: 'ali_avatar',
            text: 'Ini pertarungan pamungkas. Danova, tunggu gua datang menjemputmu!'
          }
        ]
      }
    ]
  };

  const EPILOGUE_DATA = [
    {
      id: 'epilogue_part_1',
      title: 'Epilog 1/3: Runtuhnya Tahta & Reuni Janggal',
      backgroundTheme: 'dark-castle',
      actors: { left: 'hero', right: 'hibat' },
      lines: [
        {
          speaker: 'narrator',
          name: 'Narator',
          avatar: 'narrator_avatar',
          text: 'Dengan eksekusi algoritma rekursif dan fungsi pamungkas, pertahanan tahta Kerajaan Gelap runtuh berserakan.',
          action: 'shake',
          sfx: 'thunder'
        },
        {
          speaker: 'hibat',
          name: 'Hibat',
          avatar: 'hibat_avatar',
          text: 'ARGHHH...! Tak kusangka... logika komputasi manusia biasa mampu menembus selubung kegelapan abadiku...!',
          action: 'shake',
          sfx: 'thunder'
        },
        {
          speaker: 'ali',
          name: 'Ali',
          avatar: 'ali_avatar',
          text: 'Selesai sudah, Hibat! Lepaskan Danova sekarang juga! Gua udah bersumpah bakal bawa dia pulang dengan selamat!'
        },
        {
          speaker: 'narrator',
          name: 'Narator',
          avatar: 'narrator_avatar',
          text: 'Namun... dari balik kabut kegelapan di samping singgasana tahta, langkah kaki pelan terdengar mendekat...',
          sfx: 'portal'
        },
        {
          speaker: 'narrator',
          name: 'Narator',
          avatar: 'narrator_avatar',
          text: 'Ali membelalakkan mata. Danova melangkah maju... bukan berlari meminta tolong, melainkan berdiri tegak dan tenang di sisi Hibat!',
          action: 'show_danova'
        },
        {
          speaker: 'ali',
          name: 'Ali',
          avatar: 'ali_avatar',
          text: 'Danova...?! Syukurlah lu gak apa-apa! Ayo cepat ke sini Dan, kita pulang ke desa!'
        },
        {
          speaker: 'danova',
          name: 'Danova',
          avatar: 'danova_avatar',
          text: 'Pulang, Li...? Ke mana? Ke peradaban manusia yang penuh kebohongan dan ketamakan itu?'
        },
        {
          speaker: 'ali',
          name: 'Ali',
          avatar: 'ali_avatar',
          text: 'Danova... apa maksud lu?! Lu... lu pasti di bawah pengaruh sihir cuci otak Hibat, kan?!',
          action: 'shake'
        }
      ]
    },
    {
      id: 'epilogue_part_2',
      title: 'Epilog 2/3: Kebusukan Manusia & Pilihan Danova',
      backgroundTheme: 'dark-castle',
      actors: { left: 'hero', right: null, right2: 'danova' },
      lines: [
        {
          speaker: 'danova',
          name: 'Danova',
          avatar: 'danova_avatar',
          text: 'Gua sadar sepenuhnya, Li! Hibat gak pernah menyihir pikiran gua. Justru Hibat membuka tabir kebenaran yang selama ini ditutupi manusia!'
        },
        {
          speaker: 'danova',
          name: 'Danova',
          avatar: 'danova_avatar',
          text: 'Lihat dunia luar dengan mata kepala lu sendiri, Ali! Hutan-hutan belantara dibakar habis tanpa ampun demi keuntungan segelintir penguasa!'
        },
        {
          speaker: 'danova',
          name: 'Danova',
          avatar: 'danova_avatar',
          text: 'Satwa liar dan hewan tak berdosa diusir, dipindahkan ke habitat tak semestinya hingga punah dan mati kelaparan!'
        },
        {
          speaker: 'danova',
          name: 'Danova',
          avatar: 'danova_avatar',
          text: 'Gunung-gunung dibelah untuk tambang liar dan jutaan hektar kebun kelapa sawit ditanam di mana-mana membunuh keanekaragaman hayati bumi!',
          action: 'shake',
          sfx: 'thunder'
        },
        {
          speaker: 'ali',
          name: 'Ali',
          avatar: 'ali_avatar',
          text: 'Danova... gua tahu kerusakan itu nyata... tapi manusia punya potensi untuk belajar dan memperbaiki diri!'
        },
        {
          speaker: 'danova',
          name: 'Danova',
          avatar: 'danova_avatar',
          text: 'Manusia tidak pernah berubah, Li! Manusia jauh lebih jahat, kejam, dan merusak dibanding iblis mana pun di dunia ini!'
        },
        {
          speaker: 'danova',
          name: 'Danova',
          avatar: 'danova_avatar',
          text: 'Hibat bukan monster perusak... Mereka adalah antibodi alam yang bangkit karena bumi tak lagi sanggup menahan keserakahan manusia!'
        },
        {
          speaker: 'danova',
          name: 'Danova',
          avatar: 'danova_avatar',
          text: 'Walaupun gua sendiri manusia... gua rela menanggung dosa ini. Gua memilih jalan bersama Hibat: memusnahkan manusia demi kelangsungan bumi!'
        },
        {
          speaker: 'hibat',
          name: 'Hibat',
          avatar: 'hibat_avatar',
          text: 'Kekeke... Dengarkanlah ratapan bumi, Pahlawan Logika! Sahabatmu sendiri telah melihat borok peradabanmu!',
          action: 'show_hibat',
          sfx: 'portal'
        }
      ]
    },
    {
      id: 'epilogue_part_3',
      title: 'Epilog 3/3: Persimpangan Takdir & Pilihan Ali',
      backgroundTheme: 'dark-castle',
      actors: { left: 'hero', right: 'hibat', right2: 'danova' },
      lines: [
        {
          speaker: 'danova',
          name: 'Danova',
          avatar: 'danova_avatar',
          text: 'Gua gak mau bermusuhan sama lu, Ali. Lu punya kecerdasan dan kekuatan logika berpikir komputasi terhebat yang pernah gua kenal.'
        },
        {
          speaker: 'danova',
          name: 'Danova',
          avatar: 'danova_avatar',
          text: 'Bergabunglah dengan gua dan Hibat... Kita gunakan logika kita untuk merestrukturisasi dunia dan memformat ulang parasit manusia!'
        },
        {
          speaker: 'narrator',
          name: 'Narator',
          avatar: 'narrator_avatar',
          text: 'Ruang tahta sunyi senyap. Di hadapan Ali berdiri Danova, sahabatnya, menatap dengan perih namun penuh tekad membara.'
        },
        {
          speaker: 'ali',
          name: 'Ali',
          avatar: 'ali_avatar',
          text: 'Dua jalan terbentang di hadapanku... Apa yang harus gua pilih...?',
          choices: [
            {
              id: 'join_danova',
              icon: '🤝',
              title: 'Ikuti Jalan Danova',
              desc: 'Bersama Danova & Hibat memformat ulang dunia dan menghukum ketamakan manusia',
              variant: 'danova'
            },
            {
              id: 'protect_humans',
              icon: '🛡️',
              title: 'Lindungi Umat Manusia',
              desc: 'Menolak Danova & bersumpah menjadi benteng pelindung manusia walau harus menjadi rival',
              variant: 'ali'
            }
          ]
        }
      ]
    }
  ];

  const EPILOGUE_BRANCH_JOIN = [
    {
      speaker: 'ali',
      name: 'Ali',
      avatar: 'ali_avatar',
      text: 'Lu benar, Danova... Gua udah muak melihat manusia membakar hutan, memindahkan hewan, dan mengeruk tambang tanpa rasa bersalah.'
    },
    {
      speaker: 'ali',
      name: 'Ali',
      avatar: 'ali_avatar',
      text: 'Jika kode peradaban manusia dipenuhi bug ketamakan yang merusak bumi... dekomposisi total adalah solusinya. Gua jalan bareng lu, Dan!'
    },
    {
      speaker: 'danova',
      name: 'Danova',
      avatar: 'danova_avatar',
      text: 'Terima kasih, Li... Gua tahu di balik kepala dingin lu, lu bisa melihat kebenaran ini. Bersama kita dan Hibat, tatanan baru akan ditegakkan!',
      action: 'show_danova'
    },
    {
      speaker: 'hibat',
      name: 'Hibat',
      avatar: 'hibat_avatar',
      text: 'Kekeke... Kombinasi yang luar biasa mengerikan! Hari penghakiman bagi umat manusia resmi dimulai!',
      action: 'show_hibat',
      sfx: 'thunder'
    },
    {
      speaker: 'narrator',
      name: 'Narator',
      avatar: 'narrator_avatar',
      text: 'Ali melangkah ke sisi Danova dan Hibat. Pahlawan logika yang dulu membela desa, kini memilih jalan kegelapan demi memurnikan bumi...'
    },
    {
      speaker: 'narrator',
      name: 'Narator',
      avatar: 'narrator_avatar',
      text: 'Masa depan peradaban manusia kini berada di ujung tanduk kepunahan mutlak...'
    }
  ];

  const EPILOGUE_BRANCH_PROTECT = [
    {
      speaker: 'ali',
      name: 'Ali',
      avatar: 'ali_avatar',
      text: 'Gua paham sakit hati lu, Dan. Lu benar soal hutan dibakar, hewan terusir, tambang liar, dan sawit di mana-mana... Tapi memusnahkan semua manusia bukan jawaban!'
    },
    {
      speaker: 'ali',
      name: 'Ali',
      avatar: 'ali_avatar',
      text: 'Manusia memang penuh salah dan cacat logika, tapi masih banyak orang baik yang berjuang memperbaiki bumi! Gua gak akan biarkan kalian memusnahkan mereka!'
    },
    {
      speaker: 'ali',
      name: 'Ali',
      avatar: 'ali_avatar',
      text: 'Gua bersumpah bakal tetap berdiri melindungi umat manusia... walau harus berhadapan langsung dengan lu, Danova!',
      action: 'shake'
    },
    {
      speaker: 'danova',
      name: 'Danova',
      avatar: 'danova_avatar',
      text: 'Kalau itu pilihan lu, Ali... Sungguh mengecewakan. Sahabat yang paling gua percaya memilih membela parasit peradaban.',
      action: 'show_danova'
    },
    {
      speaker: 'danova',
      name: 'Danova',
      avatar: 'danova_avatar',
      text: 'Persahabatan kita selesai di sini. Di medan perang berikutnya, gua gak akan menahan diri sedikit pun!'
    },
    {
      speaker: 'hibat',
      name: 'Hibat',
      avatar: 'hibat_avatar',
      text: 'Kekeke... Sungguh ironi yang indah! Dua sahabat masa kecil kini menjadi musuh bebuyutan! Saksikanlah kehancuran rasmu, Ali!',
      action: 'show_hibat',
      sfx: 'thunder'
    },
    {
      speaker: 'narrator',
      name: 'Narator',
      avatar: 'narrator_avatar',
      text: 'Ali berdiri kokoh menggenggam mantra kodenya. Di hadapannya, sahabat terbaiknya kini telah menjadi rival abadi pembawa petaka...'
    }
  ];

  const STAGE_INTROS = {
    '1-1': { speaker: 'Ali', avatar: 'ali_avatar', text: 'Hutan Sintaks di depan penuh dengan orc dan goblin. Gua harus ingat konsep variabel dan print untuk membuka jalan!' },
    '1-2': { speaker: 'Ali', avatar: 'ali_avatar', text: 'Ada Goblin Sintaks menghadang jalan setapak. Operasi perkalian aritmatika bakal menghabisi pentungnya!' },
    '1-3': { speaker: 'Ali', avatar: 'ali_avatar', text: 'Hawa mistis semakin tebal... Orc Pengintai menjaga gerbang hutan. Konversi tipe data integer adalah kuncinya!' },
    '1-4': { speaker: 'Ali', avatar: 'ali_avatar', text: 'Goblin Bayangan melompat dari balik pepohonan. Operator perbandingan >= harus tepat sasaran!' },
    '1-5': { speaker: 'Ali', avatar: 'ali_avatar', text: 'AURANYA MENGERIKAN! Raja Iblis Hutan menjaga gerbang keluar hutan! Gua harus selesaikan 3 fase logika untuk lolos!' },
    '2-1': { speaker: 'Ali', avatar: 'ali_avatar', text: 'Lembah Magma... Hawanya membara dan jalurnya bercabang di atas lahar panas. Gua harus teliti menyusun logika percabangan if-else!' },
    '2-2': { speaker: 'Ali', avatar: 'ali_avatar', text: 'Spirit Api melompat dari celah batu magma! Periksa nilai positif menggunakan operator lebih besar dari (>).' },
    '2-3': { speaker: 'Ali', avatar: 'ali_avatar', text: 'Anjing Lava mencoba mencuri perbekalanku di tepi kawah lahar! Gunakan prompt input bertingkat elif untuk mengusirnya!' },
    '2-4': { speaker: 'Ali', avatar: 'ali_avatar', text: 'Jembatan batu lahar dijaga Spirit Magma. Kombinasikan dua kondisi dengan operator logika AND!' },
    '2-5': { speaker: 'Ali', avatar: 'ali_avatar', text: 'PINTU GERBANG LAHAR TERKUNCI! Raksasa Lava menghadang! Gua harus tuntaskan 3 fase perhitungan diskon dan sihir!' },
    '3-1': { speaker: 'Ali', avatar: 'ali_avatar', text: 'Kerajaan Gelap Hibat... Benteng ini dijaga Ksatria Hitam dengan perisai baja. Kalahkan mereka dengan perulangan for in range!' },
    '3-2': { speaker: 'Ali', avatar: 'ali_avatar', text: 'Ksatria Palu mengurung koridor istana dengan palu raksasa. Buat perulangan while dengan syarat berhenti yang tepat!' },
    '3-3': { speaker: 'Ali', avatar: 'ali_avatar', text: 'Ksatria Bayangan menghadang di aula benteng! Susun fungsi def dan return nilai untuk meruntuhkan pertahanannya!' },
    '3-4': { speaker: 'Ali', avatar: 'ali_avatar', text: 'Hampir sampai di ruang tahta tertinggi tempat Danova dikurung! Ksatria Palu Hitam menjaga gerbang terakhir, susun item di list tas!' },
    '3-5': { speaker: 'Ali', avatar: 'ali_avatar', text: 'DANOVA ADA DI DALAM SANA! Raja Ksatria Bayangan menghadang di tahta kegelapan! Kerahkan seluruh logika fungsi dan rekursif untuk mengalahkannya dan membawa Danova pulang!' }
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

    danova: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 64" width="48" height="64">
      <rect x="12" y="20" width="24" height="22" rx="4" fill="#20B2AA"/>
      <circle cx="24" cy="14" r="12" fill="#FFE0BD"/>
      <path d="M12 14 Q24 2 36 14 Q38 24 35 28 Q24 20 13 28 Z" fill="#F4D03F"/>
      <rect x="11" y="8" width="26" height="4" rx="2" fill="#E67E22"/>
      <circle cx="19" cy="14" r="2.2" fill="#2C3E50"/>
      <circle cx="29" cy="14" r="2.2" fill="#2C3E50"/>
      <circle cx="20" cy="13" r="0.8" fill="#FFF"/>
      <circle cx="30" cy="13" r="0.8" fill="#FFF"/>
      <path d="M20 18 Q24 22 28 18" stroke="#E74C3C" stroke-width="1.5" fill="none"/>
      <rect x="12" y="34" width="24" height="3" fill="#D35400"/>
      <circle cx="24" cy="35" r="3" fill="#F1C40F"/>
      <rect x="13" y="42" width="9" height="14" rx="3" fill="#16A085"/>
      <rect x="26" y="42" width="9" height="14" rx="3" fill="#16A085"/>
      <rect x="11" y="52" width="12" height="6" rx="3" fill="#784212"/>
      <rect x="25" y="52" width="12" height="6" rx="3" fill="#784212"/>
      <rect x="2" y="22" width="10" height="6" rx="3" fill="#20B2AA"/>
      <rect x="36" y="22" width="10" height="6" rx="3" fill="#20B2AA"/>
      <text x="24" y="31" text-anchor="middle" font-size="8" fill="white" font-family="monospace">Da</text>
    </svg>`,

    hibat: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 74" width="64" height="74">
      <path d="M18 20 Q10 4 4 10 Q14 18 22 24" fill="#C0392B"/>
      <path d="M46 20 Q54 4 60 10 Q50 18 42 24" fill="#C0392B"/>
      <path d="M14 26 Q32 10 50 26 Q58 54 52 70 Q32 64 12 70 Q6 54 14 26" fill="#1B0028"/>
      <ellipse cx="32" cy="38" rx="18" ry="20" fill="#2E0854"/>
      <ellipse cx="25" cy="30" rx="4" ry="2.5" fill="#FF1744" transform="rotate(-10 25 30)"/>
      <ellipse cx="39" cy="30" rx="4" ry="2.5" fill="#FF1744" transform="rotate(10 39 30)"/>
      <circle cx="25" cy="30" r="1.5" fill="#FFF"/>
      <circle cx="39" cy="30" r="1.5" fill="#FFF"/>
      <path d="M22 42 Q32 48 42 42 Q38 46 32 46 Q26 46 22 42" fill="#FF5252"/>
      <circle cx="16" cy="58" r="3" fill="#FF1744" opacity="0.8"/>
      <circle cx="48" cy="56" r="3.5" fill="#D50000" opacity="0.8"/>
      <circle cx="32" cy="66" r="2.5" fill="#FF5252" opacity="0.9"/>
    </svg>`,

    ali_avatar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
      <circle cx="24" cy="24" r="22" fill="#1D3557"/>
      <circle cx="24" cy="22" r="14" fill="#FFDAB9"/>
      <rect x="10" y="10" width="28" height="6" rx="3" fill="#E63946"/>
      <circle cx="19" cy="21" r="2.5" fill="#333"/>
      <circle cx="29" cy="21" r="2.5" fill="#333"/>
      <path d="M19 28 Q24 32 29 28" stroke="#333" stroke-width="2" fill="none"/>
    </svg>`,

    danova_avatar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
      <circle cx="24" cy="24" r="22" fill="#0E4439"/>
      <circle cx="24" cy="23" r="14" fill="#FFE0BD"/>
      <path d="M12 21 Q24 9 36 21 Q38 30 35 34 Q24 26 13 34 Z" fill="#F4D03F"/>
      <circle cx="19" cy="22" r="2.2" fill="#2C3E50"/>
      <circle cx="29" cy="22" r="2.2" fill="#2C3E50"/>
      <circle cx="20" cy="21" r="0.8" fill="#FFF"/>
      <circle cx="30" cy="21" r="0.8" fill="#FFF"/>
      <path d="M20 28 Q24 32 28 28" stroke="#E74C3C" stroke-width="1.8" fill="none"/>
    </svg>`,

    hibat_avatar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
      <circle cx="24" cy="24" r="22" fill="#2A0845"/>
      <path d="M14 16 Q8 4 3 8 Q10 14 17 19" fill="#C0392B"/>
      <path d="M34 16 Q40 4 45 8 Q38 14 31 19" fill="#C0392B"/>
      <ellipse cx="24" cy="26" rx="14" ry="14" fill="#1A0022"/>
      <ellipse cx="19" cy="23" rx="3.5" ry="2" fill="#FF1744" transform="rotate(-10 19 23)"/>
      <ellipse cx="29" cy="23" rx="3.5" ry="2" fill="#FF1744" transform="rotate(10 29 23)"/>
      <circle cx="19" cy="23" r="1" fill="#FFF"/>
      <circle cx="29" cy="23" r="1" fill="#FFF"/>
      <path d="M17 31 Q24 36 31 31 Q28 35 24 35 Q20 35 17 31" fill="#FF5252"/>
    </svg>`,

    narrator_avatar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
      <circle cx="24" cy="24" r="22" fill="#3D2B1F"/>
      <rect x="12" y="12" width="24" height="24" rx="4" fill="#D4AF37"/>
      <rect x="14" y="14" width="20" height="20" rx="3" fill="#FFFDD0"/>
      <line x1="24" y1="14" x2="24" y2="34" stroke="#8B6508" stroke-width="1.5"/>
      <line x1="17" y1="18" x2="22" y2="18" stroke="#333" stroke-width="1.5"/>
      <line x1="17" y1="22" x2="22" y2="22" stroke="#333" stroke-width="1.5"/>
      <line x1="17" y1="26" x2="21" y2="26" stroke="#333" stroke-width="1.5"/>
      <line x1="26" y1="18" x2="31" y2="18" stroke="#333" stroke-width="1.5"/>
      <line x1="26" y1="22" x2="31" y2="22" stroke="#333" stroke-width="1.5"/>
      <line x1="26" y1="26" x2="30" y2="26" stroke="#333" stroke-width="1.5"/>
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
  //  PNG SPRITE ENGINE — frame animations from js/data/sprite-manifest.js
  // ============================================================
  const SPRITE_LIB = window.SPRITE_ASSETS || {};
  const SPRITE_PORTRAITS = window.SPRITE_PORTRAITS || {};
  const SPRITE_STORY_SCALES = {
    ali: 2.8,
    ali_armored: 4.0,
    danova: 5.2,
    hibat: 2.0
  };

  const _preloadedSpriteFrames = new Set();

  function _preloadSpriteFrames(def) {
    if (!def || def._preloaded) return;
    def._preloaded = true;
    Object.keys(def.anims).forEach(animName => {
      def.anims[animName].frames.forEach(frameData => {
        const src = def.dir + frameData[0];
        if (_preloadedSpriteFrames.has(src)) return;
        _preloadedSpriteFrames.add(src);
        const preload = new Image();
        preload.decoding = 'async';
        preload.src = src;
      });
    });
  }

  function _portraitMarkup(key) {
    const src = SPRITE_PORTRAITS[key];
    if (src) {
      return '<img class="portrait-img" src="' + src + '" alt="" draggable="false">';
    }
    return SVG_SPRITES[key] || SVG_SPRITES.hero;
  }

  class SpriteRig {
    constructor(host, key, options) {
      options = options || {};
      const def = SPRITE_LIB[key];
      if (!def) throw new Error('Sprite asset tidak ditemukan: ' + key);
      this.host = host;
      this.key = key;
      this.def = def;
      this.scale = options.scale || def.scale || 1;
      this.smooth = options.smooth !== undefined ? options.smooth : !!def.smooth;
      this.animName = null;
      this.frames = [];
      this.frameIndex = 0;
      this.loop = true;
      this.fps = 8;
      this.timer = null;
      this.onEnd = null;
      this.destroyed = false;

      this.root = document.createElement('div');
      this.root.className = 'sprite-rig';
      if (this.smooth) this.root.classList.add('sprite-smooth');
      if (options.className) this.root.classList.add(options.className);

      this.img = document.createElement('img');
      this.img.className = 'sprite-img';
      this.img.alt = '';
      this.img.draggable = false;
      this.img.decoding = 'async';
      this.root.appendChild(this.img);

      if (options.flip) this.root.classList.add('sprite-flip');
      host.appendChild(this.root);

      _preloadSpriteFrames(def);
      this.play(options.animation || 'idle', { restart: true, loop: !options.static });
      if (options.static) this.stop();
    }

    hasAnimation(name) {
      return !!(this.def.anims && this.def.anims[name]);
    }

    stop() {
      this._clearTimer();
      this.onEnd = null;
      return this;
    }

    getAnimationDuration(name) {
      const anim = this.def.anims && this.def.anims[name];
      if (!anim || !anim.frames.length) return 0;
      return (anim.frames.length / (anim.fps || 8)) * 1000;
    }

    play(name, options) {
      options = options || {};
      if (this.destroyed) return this;
      if (!this.hasAnimation(name)) name = 'idle';
      if (this.animName === name && !options.restart) {
        if (options.onEnd) this.onEnd = options.onEnd;
        return this;
      }

      const anim = this.def.anims[name];
      this._clearTimer();
      this.animName = name;
      this.frames = anim.frames;
      this.frameIndex = 0;
      this.loop = options.loop !== undefined ? options.loop : (anim.loop !== false);
      this.fps = options.fps || anim.fps || 8;
      this.onEnd = options.onEnd || null;
      this.root.setAttribute('data-anim', name);
      this._renderFrame();
      this._startTimer();
      return this;
    }

    _renderFrame() {
      const frameData = this.frames[this.frameIndex];
      if (!frameData) return;
      const src = this.def.dir + frameData[0];
      if (this.img.getAttribute('src') !== src) this.img.src = src;
      const w = Math.max(1, Math.round(frameData[1] * this.scale));
      const h = Math.max(1, Math.round(frameData[2] * this.scale));
      this.root.style.width = w + 'px';
      this.root.style.height = h + 'px';
    }

    _startTimer() {
      const delay = Math.max(30, Math.round(1000 / this.fps));
      this.timer = setInterval(() => this._tick(), delay);
    }

    _clearTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    }

    _tick() {
      if (this.destroyed) {
        this._clearTimer();
        return;
      }
      if (this.frameIndex < this.frames.length - 1) {
        this.frameIndex++;
        this._renderFrame();
      } else if (this.loop) {
        this.frameIndex = 0;
        this._renderFrame();
      } else {
        this._clearTimer();
        const cb = this.onEnd;
        this.onEnd = null;
        if (cb) cb();
      }
    }

    setFlip(flip) {
      if (this.root) this.root.classList.toggle('sprite-flip', !!flip);
    }

    addClass(className) {
      if (this.root) this.root.classList.add(className);
    }

    removeClass(className) {
      if (this.root) this.root.classList.remove(className);
    }

    destroy() {
      this._clearTimer();
      this.destroyed = true;
      if (this.root && this.root.parentNode) this.root.parentNode.removeChild(this.root);
    }

    static create(host, key, options) {
      if (!host || !SPRITE_LIB[key]) return null;
      return new SpriteRig(host, key, options);
    }
  }

  // ============================================================
  //  SOUND FX (Web Audio API — works offline)
  // ============================================================
  class SoundFX {
    constructor() {
      this.ctx = null;
      this.enabled = window.PQProgress ? PQProgress.getSound() : true;
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
    place() {
      this._play(520, 'triangle', 0.08, 0.18, 0);
    }
    remove() {
      this._play(320, 'triangle', 0.08, 0.15, 0);
    }
    thunder() {
      this._play(85, 'sawtooth', 0.45, 0.35, 0);
      this._play(60, 'sawtooth', 0.65, 0.4, 0.1);
    }
    portal() {
      this._play(440, 'sine', 0.15, 0.2, 0);
      this._play(220, 'sine', 0.3, 0.25, 0.08);
      this._play(110, 'sine', 0.45, 0.3, 0.16);
    }
    blip() {
      this._play(600, 'triangle', 0.035, 0.08, 0);
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
    PROLOGUE: 'prologue',
    LEVEL_SELECT: 'level_select',
    STAGE_INTRO: 'stage_intro',
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

      // PNG sprite animators (gameplay + story)
      this.playerAnim = null;
      this.enemyAnim = null;
      this.storyAnims = { left: null, right: null };

      // Story & Dialogue state
      this.currentStory = 'prologue';
      this.currentStoryScenes = PROLOGUE_DATA;
      this.onStoryFinishCallback = null;
      this.currentSceneIdx = 0;
      this.currentLineIdx = 0;
      this.isTyping = false;
      this.isWaitingChoice = false;
      this.lastEndingChoice = 'protect_humans';
      this.typewriterTimer = null;
      this.currentStageIntroCallback = null;

      this._cacheDOM();
      this._bindEvents();
      this._bootGamePage();
    }

    // ----------------------------------------------------------
    //  BOOT HALAMAN GAME
    // ----------------------------------------------------------
    _bootGamePage() {
      const params = new URLSearchParams(window.location.search);
      const mode = params.get('mode');
      const savedStory = PQProgress.loadStory();

      if (mode === 'prologue') {
        this._startPrologue(savedStory && savedStory.story === 'prologue' ? savedStory : null);
        return;
      }
      if (mode === 'epilogue') {
        this._startEpilogue(savedStory && savedStory.story === 'epilogue' ? savedStory : null);
        return;
      }
      if (mode === 'inter') {
        const interLevel = parseInt(params.get('level'), 10);
        if (interLevel === 1 || interLevel === 2) {
          this._startLevelFromStory(interLevel);
          return;
        }
      }

      // Fallback: refresh saat cerita berjalan tapi URL belum sempat berubah.
      if (!mode && !params.has('level') && savedStory && savedStory.story) {
        if (savedStory.story === 'prologue') {
          this._startPrologue(savedStory);
          return;
        }
        if (savedStory.story === 'epilogue') {
          this._startEpilogue(savedStory);
          return;
        }
        if (savedStory.story === 'inter_1' || savedStory.story === 'inter_2') {
          this._startLevelFromStory(savedStory.story === 'inter_1' ? 1 : 2);
          return;
        }
      }

      const levelParam = parseInt(params.get('level'), 10);
      if (levelParam >= 1 && levelParam <= GAME_DATA.levels.length) {
        const run = PQProgress.loadRun();
        let stageIdx = 0;
        let playerHP = this.maxHP;

        if (params.has('stage')) {
          stageIdx = Math.max(0, (parseInt(params.get('stage'), 10) || 1) - 1);
        } else if (run && run.level === levelParam && run.stage) {
          stageIdx = Math.max(0, run.stage - 1);
        }

        if (run && run.level === levelParam && run.stage === stageIdx + 1 && typeof run.playerHP === 'number') {
          playerHP = Math.max(1, Math.min(this.maxHP, run.playerHP));
        }

        this._startLevel(levelParam - 1, { stage: stageIdx, playerHP: playerHP });
        return;
      }

      const run = PQProgress.loadRun();
      if (run && run.level >= 1 && run.level <= GAME_DATA.levels.length) {
        this._startLevel(run.level - 1, {
          stage: Math.max(0, (run.stage || 1) - 1),
          playerHP: typeof run.playerHP === 'number' ? Math.max(1, Math.min(this.maxHP, run.playerHP)) : this.maxHP
        });
        return;
      }

      this._gotoLevelSelect();
    }

    _startLevelFromStory(levelNum) {
      const scenes = INTER_LEVEL_DATA[levelNum];
      if (!scenes || scenes.length === 0) {
        this._startLevel(levelNum);
        return;
      }
      this._playInterLevelScene(levelNum, () => this._startLevel(levelNum));
    }

    // ----------------------------------------------------------
    //  DOM CACHE
    // ----------------------------------------------------------
    _cacheDOM() {
      this.$ = {
        screenMenu:   document.getElementById('screen-menu'),
        screenStory:  document.getElementById('screen-story'),
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
        chipsPool:    document.getElementById('code-chips-pool'),
        btnRunCode:   document.getElementById('btn-run-code'),
        btnResetCode: document.getElementById('btn-reset-code'),
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

        // Story & Dialogue DOM
        storyChapterTitle: document.getElementById('story-chapter-title'),
        btnSkipStory:      document.getElementById('btn-skip-story'),
        storyWorld:        document.getElementById('story-world'),
        storyScenery:      document.getElementById('story-scenery'),
        storyActorLeft:    document.getElementById('story-actor-left'),
        storyActorRight:   document.getElementById('story-actor-right'),
        storyActorRight2:  document.getElementById('story-actor-right2'),
        storyFxLayer:      document.getElementById('story-fx-layer'),
        dialoguePanel:     document.getElementById('story-dialogue-panel'),
        dialogueAvatar:    document.getElementById('dialogue-avatar'),
        dialogueSpeaker:   document.getElementById('dialogue-speaker'),
        dialogueText:      document.getElementById('dialogue-text'),
        btnNextDialogue:   document.getElementById('btn-next-dialogue'),
        dialogueChoices:   document.getElementById('dialogue-choices'),
        dialogueFooter:    document.getElementById('dialogue-footer'),
        dialogueHint:      document.getElementById('dialogue-hint'),
        storyTbcOverlay:   document.getElementById('story-tbc-overlay'),
        tbcSubtitle:       document.getElementById('tbc-subtitle'),
        tbcDecisionBadge:  document.getElementById('tbc-decision-badge'),
        btnTbcReplay:      document.getElementById('btn-tbc-replay'),
        btnTbcMenu:        document.getElementById('btn-tbc-menu'),
        stageIntroOverlay: document.getElementById('stage-intro-overlay'),
        stageIntroAvatar:  document.getElementById('stage-intro-avatar'),
        stageIntroSpeaker: document.getElementById('stage-intro-speaker'),
        stageIntroText:    document.getElementById('stage-intro-text'),
        btnDismissIntro:   document.getElementById('btn-dismiss-intro'),
      };
    }

    // ----------------------------------------------------------
    //  BIND EVENTS
    // ----------------------------------------------------------
    _bindEvents() {
      if (this.$.btnPlay) {
        this.$.btnPlay.addEventListener('click', () => {
          if (!this.unlockedLevels.prologue) {
            this._startPrologue();
          } else {
            this._gotoLevelSelect();
          }
        });
      }
      if (this.$.btnHowto) {
        this.$.btnHowto.addEventListener('click', () => this._showModal(this.$.modalHowto));
      }
      if (this.$.btnBackMenu) {
        this.$.btnBackMenu.addEventListener('click', () => this._gotoMenu());
      }
      if (this.$.btnCloseHowto) {
        this.$.btnCloseHowto.addEventListener('click', () => this._hideModal(this.$.modalHowto));
      }
      if (this.$.btnRestart) {
        this.$.btnRestart.addEventListener('click', () => this._restartCurrentLevel());
      }
      if (this.$.btnReturnMenu) {
        this.$.btnReturnMenu.addEventListener('click', () => {
          this._hideModal(this.$.modalGameover);
          this._gotoMenu();
        });
      }
      if (this.$.btnNextLevel) {
        this.$.btnNextLevel.addEventListener('click', () => this._onNextLevel());
      }
      const btnReturnMenu2 = document.getElementById('btn-return-menu2');
      if (btnReturnMenu2) {
        btnReturnMenu2.addEventListener('click', () => {
          this._hideModal(this.$.modalVictory);
          this._gotoLevelSelect();
        });
      }
      if (this.$.btnSound) {
        this.$.btnSound.textContent = this.sound.enabled ? '🔊' : '🔇';
        this.$.btnSound.addEventListener('click', () => {
          const on = this.sound.toggle();
          PQProgress.setSound(on);
          this.$.btnSound.textContent = on ? '🔊' : '🔇';
        });
      }
      if (this.$.btnRunCode) {
        this.$.btnRunCode.addEventListener('click', () => {
          if (this.state === GameState.BATTLE) this._checkAnswer();
        });
      }
      if (this.$.btnResetCode) {
        this.$.btnResetCode.addEventListener('click', () => {
          if (this.state === GameState.BATTLE) this._resetSlots();
        });
      }

      // Story Events
      if (this.$.btnSkipStory) {
        this.$.btnSkipStory.addEventListener('click', (e) => {
          e.stopPropagation();
          this._skipStory();
        });
      }
      if (this.$.btnNextDialogue) {
        this.$.btnNextDialogue.addEventListener('click', (e) => {
          e.stopPropagation();
          this._advanceDialogue();
        });
      }
      if (this.$.dialoguePanel) {
        this.$.dialoguePanel.addEventListener('click', (e) => {
          // Jangan lanjut jika mengklik tombol pilihan
          if (e.target.closest('.btn-story-choice')) return;
          this._advanceDialogue();
        });
      }
      if (this.$.btnDismissIntro) {
        this.$.btnDismissIntro.addEventListener('click', () => {
          this._dismissStageIntro();
        });
      }

      // TBC Overlay buttons
      if (this.$.btnTbcReplay) {
        this.$.btnTbcReplay.addEventListener('click', () => {
          if (this.$.storyTbcOverlay) this.$.storyTbcOverlay.style.display = 'none';
          this._startEpilogue();
        });
      }
      if (this.$.btnTbcMenu) {
        this.$.btnTbcMenu.addEventListener('click', () => {
          if (this.$.storyTbcOverlay) this.$.storyTbcOverlay.style.display = 'none';
          this._gotoLevelSelect();
        });
      }

      window.addEventListener('keydown', (e) => {
        if (e.code === 'Space' || e.code === 'Enter') {
          if (this.state === GameState.PROLOGUE) {
            e.preventDefault();
            this._advanceDialogue();
          } else if (this.state === GameState.STAGE_INTRO) {
            e.preventDefault();
            this._dismissStageIntro();
          }
        }
      });
    }

    // ----------------------------------------------------------
    //  PROGRESS
    // ----------------------------------------------------------
    _loadProgress() {
      return PQProgress.loadProgress();
    }

    _saveProgress() {
      PQProgress.saveProgress(this.unlockedLevels);
    }

    // ----------------------------------------------------------
    //  SCREENS
    // ----------------------------------------------------------
    _showScreen(screenEl) {
      [this.$.screenMenu, this.$.screenStory, this.$.screenLevels, this.$.screenGame].forEach(s => {
        if (s) s.classList.remove('active');
      });
      if (screenEl) screenEl.classList.add('active');
    }
    _showModal(modal) { modal.classList.add('active'); }
    _hideModal(modal) { modal.classList.remove('active'); }

    _gotoMenu() {
      this._stopAll();
      PQProgress.clearRun();
      PQProgress.clearStory();
      window.location.href = 'index.html';
    }

    _gotoLevelSelect() {
      this._stopAll();
      PQProgress.clearRun();
      PQProgress.clearStory();
      window.location.href = 'levels.html';
    }

    // ----------------------------------------------------------
    //  LEVEL & STAGE START
    // ----------------------------------------------------------
    _startLevel(levelIdx, options) {
      options = options || {};
      const levelData = GAME_DATA.levels[levelIdx];
      if (!levelData) {
        this._gotoLevelSelect();
        return;
      }

      PQProgress.clearStory();
      this.currentLevel = levelIdx;
      const maxStage = levelData.stages.length - 1;
      this.currentStage = Math.max(0, Math.min(options.stage || 0, maxStage));
      this.playerHP = typeof options.playerHP === 'number'
        ? Math.max(1, Math.min(this.maxHP, options.playerHP))
        : this.maxHP;

      this._showScreen(this.$.screenGame);
      this._setTheme(levelData.bgTheme);
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

      // Player (Armored Ali dari Level 1 sampai ending)
      this._playerX = 8;
      this._createPlayer();
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

      // Simpan posisi level/stage supaya refresh tidak mulai dari awal.
      this._syncGameUrl();

      // Start with Stage Intro Dialogue if available
      this._showStageIntro(() => {
        this.state = GameState.WALKING;
        this._beginWalking();
      });
    }

    _syncGameUrl() {
      const params = new URLSearchParams();
      params.set('level', String(this.currentLevel + 1));
      params.set('stage', String(this.currentStage + 1));
      this._replaceUrl(params);
      this._persistRun();
    }

    _persistRun() {
      if (typeof this.currentLevel !== 'number') return;
      if (!this.$.screenGame || !this.$.screenGame.classList.contains('active')) return;
      PQProgress.saveRun({
        level: this.currentLevel + 1,
        stage: this.currentStage + 1,
        playerHP: this.playerHP
      });
    }

    _replaceUrl(params) {
      const base = window.location.href.split('?')[0].split('#')[0];
      const query = params.toString();
      try {
        history.replaceState(null, '', base + (query ? '?' + query : ''));
      } catch (e) {}
    }

    _setStoryMode(mode, extra) {
      PQProgress.clearRun();
      const params = new URLSearchParams();
      params.set('mode', mode);
      if (extra) {
        Object.keys(extra).forEach(key => params.set(key, extra[key]));
      }
      this._replaceUrl(params);
    }

    _createPlayer() {
      this.$.playerEl.innerHTML = '';
      this.$.playerEl.className = 'player hero-idle';
      this.playerAnim = SpriteRig.create(this.$.playerEl, 'ali_armored', {
        scale: 2.4,
        smooth: false,
        className: 'player-rig'
      });
      if (!this.playerAnim) this.$.playerEl.innerHTML = SVG_SPRITES.hero;
    }

    _spawnEnemy(stageData) {
      const rawType = stageData.enemy.type;
      const isBoss = stageData.enemy.isBoss;
      const isSvgFallback = rawType.indexOf('svg_') === 0;
      const assetType = isSvgFallback ? rawType.slice(4) : rawType;
      const asset = isSvgFallback ? null : SPRITE_LIB[assetType];

      if (this.enemyAnim) {
        this.enemyAnim.destroy();
        this.enemyAnim = null;
      }
      this.$.enemyContainer.innerHTML = '';
      this.$.enemyContainer.classList.remove('enemy-attacking');

      const enemyEl = document.createElement('div');
      enemyEl.className = 'enemy enemy-walk' + (isBoss ? ' enemy-boss' : '');
      enemyEl.id = 'current-enemy';

      if (asset) {
        enemyEl.classList.add('has-rig');
        this.$.enemyContainer.appendChild(enemyEl);
        this.enemyAnim = SpriteRig.create(enemyEl, assetType, {
          scale: asset.scale || 1,
          smooth: true,
          className: 'enemy-rig',
          flip: false
        });
      } else {
        const svgKey = SVG_SPRITES[assetType]
          ? assetType
          : (isBoss ? (this.currentLevel === 2 ? 'dragon' : (this.currentLevel === 1 ? 'boss_logic' : 'boss_specter')) : 'goomba');
        enemyEl.classList.add('enemy-svg');
        enemyEl.innerHTML = SVG_SPRITES[svgKey];
        this.$.enemyContainer.appendChild(enemyEl);
      }
    }

    // ----------------------------------------------------------
    //  WALKING
    // ----------------------------------------------------------
    _beginWalking() {
      if (this.state !== GameState.WALKING) return;
      this._walkStartTime = Date.now();
      this.$.playerEl.className = 'player hero-walk';
      if (this.playerAnim) this.playerAnim.play('run');
      if (this.enemyAnim) this.enemyAnim.play('idle');
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
      if (this.playerAnim) this.playerAnim.play('idle');
      if (this.enemyAnim) this.enemyAnim.play('idle');
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
    //  BATTLE (DRAG & DROP / CLICK-TO-PLACE FILL-IN-THE-BLANK)
    // ----------------------------------------------------------
    _beginBattle() {
      this.state = GameState.BATTLE;
      const q = this._getCurrentQuestion();

      this.$.battleScenario.textContent = q.scenario;
      this.currentSlots = {};
      this.draggedValue = null;

      if (q.blanks) {
        q.blanks.forEach(b => {
          this.currentSlots[b.id] = null;
        });
      }

      this._renderCode(q);
      this._renderOptions(q);
      this.$.battlePanel.classList.add('active');
      this.$.feedbackEl.className = 'battle-feedback';
      this.$.feedbackEl.textContent = '';
      this.$.explanationEl.style.display = 'none';

      if (this.$.btnRunCode) this.$.btnRunCode.disabled = false;
      if (this.$.btnResetCode) this.$.btnResetCode.disabled = false;

      // Timer 60 detik (1 Menit)
      if (this.timer) this.timer.stop();
      this.timer = new GameTimer(60,
        (rem, total) => this._updateTimerBar(rem, total),
        () => this._handleTimeout()
      );
      this.timer.start();
    }

    _escapeHTML(str) {
      if (typeof str !== 'string') return str;
      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    _renderCode(q) {
      const container = this.$.codeDisplay;
      container.innerHTML = '';
      const lines = q.code.split('\n');

      lines.forEach(lineText => {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'code-line';

        // Token match regex: {0}, {1}, {2}, etc.
        const tokenRegex = /\{(\d+)\}/g;
        let lastIndex = 0;
        let match;

        while ((match = tokenRegex.exec(lineText)) !== null) {
          const before = lineText.slice(lastIndex, match.index);
          if (before) {
            lineDiv.appendChild(document.createTextNode(before));
          }

          const slotId = parseInt(match[1], 10);
          const slotEl = document.createElement('span');
          slotEl.className = 'code-slot';
          slotEl.id = 'slot-' + slotId;
          slotEl.dataset.slotId = slotId;

          this._updateSlotDOM(slotEl, slotId);

          // Drag & Drop events for slot
          slotEl.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            slotEl.classList.add('slot-hover');
          });

          slotEl.addEventListener('dragleave', () => {
            slotEl.classList.remove('slot-hover');
          });

          slotEl.addEventListener('drop', (e) => {
            e.preventDefault();
            slotEl.classList.remove('slot-hover');
            const val = e.dataTransfer.getData('text/plain') || this.draggedValue;
            if (val) {
              this._placeChip(val, slotId);
            }
          });

          // Click on slot: if filled, clicking removes it
          slotEl.addEventListener('click', () => {
            if (this.currentSlots[slotId] !== null) {
              this._removeChip(slotId);
            }
          });

          lineDiv.appendChild(slotEl);
          lastIndex = tokenRegex.lastIndex;
        }

        const remaining = lineText.slice(lastIndex);
        if (remaining) {
          lineDiv.appendChild(document.createTextNode(remaining));
        }

        container.appendChild(lineDiv);
      });
    }

    _updateSlotDOM(slotEl, slotId) {
      const val = this.currentSlots[slotId];
      slotEl.innerHTML = '';
      if (val !== null && val !== undefined) {
        slotEl.className = 'code-slot filled';
        const textSpan = document.createElement('span');
        textSpan.className = 'slot-text';
        textSpan.textContent = val;
        slotEl.appendChild(textSpan);

        const rmBtn = document.createElement('button');
        rmBtn.type = 'button';
        rmBtn.className = 'slot-remove-btn';
        rmBtn.innerHTML = '&times;';
        rmBtn.title = 'Hapus balok';
        rmBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this._removeChip(slotId);
        });
        slotEl.appendChild(rmBtn);
      } else {
        slotEl.className = 'code-slot';
        const placeholder = document.createElement('span');
        placeholder.className = 'slot-placeholder';
        placeholder.textContent = '[ ? ]';
        slotEl.appendChild(placeholder);
      }
    }

    _renderOptions(q) {
      if (!this.$.chipsPool) return;
      const poolEl = this.$.chipsPool;
      poolEl.innerHTML = '';

      // Shuffle pool choices
      const pool = [...q.pool].sort(() => Math.random() - 0.5);

      pool.forEach((val, idx) => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'code-chip';
        chip.draggable = true;
        chip.dataset.value = val;
        chip.dataset.chipIdx = idx;

        chip.innerHTML = '<span class="chip-handle">⠿</span><span class="chip-text">' + this._escapeHTML(val) + '</span>';

        // Drag events
        chip.addEventListener('dragstart', (e) => {
          if (chip.classList.contains('placed')) {
            e.preventDefault();
            return;
          }
          this.draggedValue = val;
          e.dataTransfer.setData('text/plain', val);
          e.dataTransfer.effectAllowed = 'move';
          chip.classList.add('dragging');
        });

        chip.addEventListener('dragend', () => {
          chip.classList.remove('dragging');
          this.draggedValue = null;
        });

        // Click to place in first empty slot
        chip.addEventListener('click', () => {
          if (chip.classList.contains('placed')) return;
          const emptySlotId = Object.keys(this.currentSlots).find(id => this.currentSlots[id] === null);
          if (emptySlotId !== undefined) {
            this._placeChip(val, parseInt(emptySlotId, 10));
          }
        });

        poolEl.appendChild(chip);
      });
    }

    _placeChip(val, slotId) {
      if (this.currentSlots[slotId] !== null) {
        this._removeChip(slotId, false);
      }
      this.currentSlots[slotId] = val;
      this.sound.place();

      const slotEl = document.getElementById('slot-' + slotId);
      if (slotEl) {
        this._updateSlotDOM(slotEl, slotId);
      }
      this._syncChipsState();
    }

    _removeChip(slotId, playSound = true) {
      if (this.currentSlots[slotId] !== null) {
        this.currentSlots[slotId] = null;
        if (playSound) this.sound.remove();

        const slotEl = document.getElementById('slot-' + slotId);
        if (slotEl) {
          this._updateSlotDOM(slotEl, slotId);
        }
        this._syncChipsState();
      }
    }

    _resetSlots() {
      Object.keys(this.currentSlots).forEach(id => {
        this.currentSlots[id] = null;
        const slotEl = document.getElementById('slot-' + id);
        if (slotEl) {
          this._updateSlotDOM(slotEl, parseInt(id, 10));
        }
      });
      this.sound.remove();
      this._syncChipsState();
      this.$.feedbackEl.textContent = '';
      this.$.feedbackEl.className = 'battle-feedback';
    }

    _syncChipsState() {
      if (!this.$.chipsPool) return;
      const usedValues = Object.values(this.currentSlots).filter(v => v !== null);
      const usedCount = {};
      usedValues.forEach(v => {
        usedCount[v] = (usedCount[v] || 0) + 1;
      });

      const matchedCount = {};
      const chips = this.$.chipsPool.querySelectorAll('.code-chip');
      chips.forEach(chip => {
        const val = chip.dataset.value;
        matchedCount[val] = (matchedCount[val] || 0);
        if (matchedCount[val] < (usedCount[val] || 0)) {
          chip.classList.add('placed');
          chip.draggable = false;
          matchedCount[val]++;
        } else {
          chip.classList.remove('placed');
          chip.draggable = true;
        }
      });
    }

    _updateTimerBar(remaining, total) {
      const pct = (remaining / total) * 100;
      this.$.timerBar.style.width = pct + '%';
      this.$.timerNum.textContent = remaining;
      if (pct <= 25) this.$.timerBar.style.background = '#E74C3C';
      else if (pct <= 50) this.$.timerBar.style.background = '#F39C12';
      else this.$.timerBar.style.background = '#27AE60';
    }

    _checkAnswer() {
      if (this.state !== GameState.BATTLE) return;
      const q = this._getCurrentQuestion();

      // Check if all slots are filled
      const emptySlotIds = Object.keys(this.currentSlots).filter(id => this.currentSlots[id] === null);
      if (emptySlotIds.length > 0) {
        this.$.feedbackEl.className = 'battle-feedback feedback-warn';
        this.$.feedbackEl.textContent = '⚠️ Tarik balok ke semua kotak [ ? ] terlebih dahulu!';
        this.sound.wrong();

        emptySlotIds.forEach(id => {
          const slotEl = document.getElementById('slot-' + id);
          if (slotEl) {
            slotEl.classList.remove('slot-shake');
            void slotEl.offsetWidth;
            slotEl.classList.add('slot-shake');
          }
        });
        return;
      }

      // Check correctness
      let isAllCorrect = true;
      q.blanks.forEach(b => {
        const slotEl = document.getElementById('slot-' + b.id);
        const userVal = (this.currentSlots[b.id] || '').trim();
        const expectedVal = b.answer.trim();

        if (userVal === expectedVal) {
          if (slotEl) {
            slotEl.classList.remove('slot-wrong');
            slotEl.classList.add('slot-correct');
          }
        } else {
          isAllCorrect = false;
          if (slotEl) {
            slotEl.classList.remove('slot-correct');
            slotEl.classList.add('slot-wrong');
          }
        }
      });

      this._handleAnswer(isAllCorrect);
    }

    // ----------------------------------------------------------
    //  ANSWER HANDLING
    // ----------------------------------------------------------
    _handleAnswer(isCorrect) {
      if (this.state !== GameState.BATTLE) return;
      if (this.timer) this.timer.stop();

      const stageData = GAME_DATA.levels[this.currentLevel].stages[this.currentStage];
      const q = this._getCurrentQuestion();

      if (this.$.btnRunCode) this.$.btnRunCode.disabled = true;
      if (this.$.btnResetCode) this.$.btnResetCode.disabled = true;

      if (isCorrect) {
        this.sound.correct();
        this.correctAnswers++;
        this.$.feedbackEl.className = 'battle-feedback feedback-correct';
        this.$.feedbackEl.textContent = '✅ Benar! Kode berhasil dieksekusi! Serang!';
        this.$.explanationEl.style.display = 'none';

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
        this.$.feedbackEl.textContent = '❌ Kode masih belum tepat! Coba periksa kembali!';
        this.$.explanationEl.style.display = 'block';
        this.$.explanationEl.textContent = '💡 ' + q.explanation;

        this._enemyAttack(() => this._playerHurt(() => {
          this.playerHP--;
          this._updateHUD();

          if (this.playerHP <= 0) {
            this._playerDie(() => this._gameOver());
          } else {
            if (this.$.btnRunCode) this.$.btnRunCode.disabled = false;
            if (this.$.btnResetCode) this.$.btnResetCode.disabled = false;
            // Restart 60s timer so player can fix the code
            if (this.timer) this.timer.stop();
            this.timer = new GameTimer(60,
              (rem, total) => this._updateTimerBar(rem, total),
              () => this._handleTimeout()
            );
            this.timer.start();
          }
        }));
      }
    }

    _handleTimeout() {
      if (this.state !== GameState.BATTLE) return;
      if (this.timer) this.timer.stop();

      const q = this._getCurrentQuestion();
      if (this.$.btnRunCode) this.$.btnRunCode.disabled = true;
      if (this.$.btnResetCode) this.$.btnResetCode.disabled = true;

      this.sound.wrong();
      this.$.feedbackEl.className = 'battle-feedback feedback-wrong';
      this.$.feedbackEl.textContent = '⏰ Waktu Habis (60 Detik)! Musuh menyerang!';
      this.$.explanationEl.style.display = 'block';
      this.$.explanationEl.textContent = '💡 ' + q.explanation;

      this._enemyAttack(() => this._playerHurt(() => {
        this.playerHP--;
        this._updateHUD();

        if (this.playerHP <= 0) {
          this._playerDie(() => this._gameOver());
        } else {
          setTimeout(() => this._beginBattle(), 1500);
        }
      }));
    }

    // ----------------------------------------------------------
    //  ANIMATIONS
    // ----------------------------------------------------------
    _heroAttack(cb) {
      this.sound.jump();
      if (this.playerAnim) {
        this.playerAnim.play('attack', { loop: false, restart: true });
      }
      this.$.playerEl.className = 'player hero-jump-attack';
      setTimeout(() => {
        this.$.playerEl.className = 'player hero-idle';
        if (this.playerAnim) this.playerAnim.play('idle');
        if (cb) cb();
      }, 650);
    }

    _enemyAttack(cb) {
      const enemy = document.getElementById('current-enemy');
      if (!enemy) {
        if (cb) cb();
        return;
      }

      enemy.classList.remove('enemy-walk');
      this.$.enemyContainer.classList.add('enemy-attacking');

      if (this.enemyAnim) {
        this.enemyAnim.play('attack', { loop: false, restart: true });
        const duration = Math.max(520, this.enemyAnim.getAnimationDuration('attack') + 120);
        setTimeout(() => {
          this.$.enemyContainer.classList.remove('enemy-attacking');
          enemy.classList.add('enemy-walk');
          if (this.enemyAnim) this.enemyAnim.play('idle');
          if (cb) cb();
        }, duration);
      } else {
        enemy.classList.add('enemy-svg-attack');
        setTimeout(() => {
          enemy.classList.remove('enemy-svg-attack');
          this.$.enemyContainer.classList.remove('enemy-attacking');
          enemy.classList.add('enemy-walk');
          if (cb) cb();
        }, 550);
      }
    }

    _bossHit(cb) {
      const enemy = document.getElementById('current-enemy');
      if (!enemy) {
        if (cb) cb();
        return;
      }

      enemy.classList.add('enemy-hit');
      if (this.enemyAnim) {
        this.enemyAnim.play('hurt', {
          loop: false,
          restart: true,
          onEnd: () => { if (this.enemyAnim) this.enemyAnim.play('idle'); }
        });
      }
      setTimeout(() => {
        enemy.classList.remove('enemy-hit');
        if (cb) cb();
      }, 480);
    }

    _playerHurt(cb) {
      this.sound.hit();
      if (this.playerAnim) {
        this.playerAnim.play('hit', { loop: false, restart: true });
      }
      this.$.playerEl.className = 'player hero-hurt';
      setTimeout(() => {
        this.$.playerEl.className = 'player hero-idle';
        if (this.playerAnim) this.playerAnim.play('idle');
        if (cb) cb();
      }, 520);
    }

    _playerDie(cb) {
      this.sound.hit();
      if (this.playerAnim) {
        this.playerAnim.play('death', { loop: false, restart: true });
      }
      this.$.playerEl.className = 'player hero-death';
      setTimeout(() => { if (cb) cb(); }, 950);
    }

    _enemyDie() {
      this.state = GameState.ENEMY_DEAD;
      this.sound.enemyDie();
      const enemy = document.getElementById('current-enemy');
      if (!enemy) {
        this._stageClear();
        return;
      }

      enemy.classList.remove('enemy-walk', 'enemy-boss');
      let finished = false;
      const finish = () => {
        if (finished) return;
        finished = true;
        enemy.style.display = 'none';
        if (this.enemyAnim) this.enemyAnim.root.style.display = 'none';
        this._stageClear();
      };

      if (this.enemyAnim && this.enemyAnim.hasAnimation('death')) {
        this.enemyAnim.play('death', { loop: false, restart: true, onEnd: finish });
        setTimeout(finish, Math.max(1000, this.enemyAnim.getAnimationDuration('death') + 350));
      } else if (this.enemyAnim) {
        if (this.enemyAnim.hasAnimation('hurt')) {
          this.enemyAnim.play('hurt', { loop: false, restart: true });
        }
        this.enemyAnim.addClass('sprite-fall');
        setTimeout(finish, 850);
      } else {
        enemy.classList.add('enemy-dying');
        setTimeout(finish, 700);
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
      this.$.bossHpBar.style.display = 'none';
      this.$.stageFlag.style.display = 'block';

      // Player runs to flag
      this.$.playerEl.className = 'player hero-walk';
      if (this.playerAnim) this.playerAnim.play('run');
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

      if (!isLast) {
        this.unlockedLevels[this.currentLevel + 1] = true;
        this.unlockedLevels[this.currentLevel + 2] = true;
        this._saveProgress();
        this.$.btnNextLevel.style.display = 'inline-block';
        this.$.btnNextLevel.innerHTML = '<span>🎬</span> Cerita & Level Berikutnya →';
      } else {
        this.unlockedLevels[this.currentLevel + 1] = true;
        this.unlockedLevels.epilogue = true;
        this._saveProgress();
        this.$.btnNextLevel.style.display = 'inline-block';
        this.$.btnNextLevel.innerHTML = '<span>⚡</span> Tonton Epilog Ending →';
      }

      this._showModal(this.$.modalVictory);
    }

    _gameOver() {
      this.state = GameState.GAME_OVER;
      PQProgress.clearRun();
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
      if (this.currentLevel === 0) {
        // Dari Level 1 menuju Level 2: putar Inter-Level Cutscene 1
        this._playInterLevelScene(1, () => {
          this._startLevel(1);
        });
      } else if (this.currentLevel === 1) {
        // Dari Level 2 menuju Level 3: putar Inter-Level Cutscene 2
        this._playInterLevelScene(2, () => {
          this._startLevel(2);
        });
      } else if (this.currentLevel === 2) {
        // Tamat Level 3: Putar Epilog Ending
        this._startEpilogue();
      } else {
        this._gotoLevelSelect();
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
      if (this.timer && this.timer.remaining !== undefined) {
        this._updateTimerBar(this.timer.remaining, this.timer.total);
      } else {
        this._updateTimerBar(60, 60);
      }
      this._persistRun();
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
        // Latar JPG hutan sudah berisi pepohonan, jadi tidak perlu objek statis lagi.
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
        // Latar JPG lava sudah penuh; sisakan partikel bara supaya tetap hidup.
        [60, 280, 620, 960].forEach((x, i) => {
          const el = document.createElement('div');
          el.className = 'scenery-obj';
          el.style.left = x + 'px';
          el.style.bottom = (75 + (i % 3) * 30) + 'px';
          el.innerHTML = '<svg viewBox="0 0 20 20" width="20" height="20">' +
            '<circle cx="10" cy="10" r="3.5" fill="#FF5722" opacity="0.85"/>' +
            '<circle cx="10" cy="10" r="1.5" fill="#FFEB3B"/>' +
            '</svg>';
          sc.appendChild(el);
        });
      } else if (theme === 'dark-castle') {
        // Latar JPG kastil sudah berisi pilar dan bendera; sisakan percikan sihir.
        [200, 520, 840].forEach((x, i) => {
          const el = document.createElement('div');
          el.className = 'scenery-obj';
          el.style.left = x + 'px';
          el.style.bottom = (75 + (i % 2) * 35) + 'px';
          el.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24">' +
            '<circle cx="12" cy="12" r="4" fill="#9D4EDD" opacity="0.8"/>' +
            '<circle cx="12" cy="12" r="1.5" fill="#FFF"/>' +
            '</svg>';
          sc.appendChild(el);
        });
      }
    }

    // ----------------------------------------------------------
    //  STORY & PROLOGUE & EPILOGUE CONTROLLER
    // ----------------------------------------------------------
    _playStory(scenes, storyKey, onFinish, startAt) {
      this._stopAll();
      this.state = GameState.PROLOGUE;
      this.currentStory = storyKey;
      this.currentStoryScenes = scenes;
      this.onStoryFinishCallback = onFinish;

      const startScene = startAt && Number.isInteger(startAt.scene) ? startAt.scene : 0;
      this.currentSceneIdx = Math.max(0, Math.min(startScene, scenes.length - 1));
      this.currentLineIdx = 0;
      this.isTyping = false;
      this.isWaitingChoice = false;

      if (this.$.dialogueChoices) {
        this.$.dialogueChoices.style.display = 'none';
        this.$.dialogueChoices.innerHTML = '';
      }
      if (this.$.storyTbcOverlay) this.$.storyTbcOverlay.style.display = 'none';
      if (this.$.btnNextDialogue) this.$.btnNextDialogue.style.display = 'inline-block';
      if (this.$.dialogueHint) this.$.dialogueHint.style.display = 'inline-block';

      this._showScreen(this.$.screenStory);
      this._loadStoryScene(this.currentSceneIdx);
    }

    _startPrologue(startAt) {
      this._setStoryMode('prologue');
      this._playStory(PROLOGUE_DATA, 'prologue', () => {
        this._finishPrologue();
      }, startAt);
    }

    _playInterLevelScene(levelNum, callback) {
      const scenes = INTER_LEVEL_DATA[levelNum];
      if (!scenes || scenes.length === 0) {
        if (callback) callback();
        return;
      }

      this._setStoryMode('inter', { level: String(levelNum) });
      const savedStory = PQProgress.loadStory();
      const startAt = savedStory && savedStory.story === 'inter_' + levelNum ? savedStory : null;

      this._playStory(scenes, 'inter_' + levelNum, () => {
        PQProgress.clearStory();
        if (callback) callback();
      }, startAt);
    }

    _startEpilogue(startAt) {
      this._setStoryMode('epilogue');
      // Deep clone EPILOGUE_DATA so user can make different choices on replays
      const scenes = JSON.parse(JSON.stringify(EPILOGUE_DATA));
      this._playStory(scenes, 'epilogue', () => {
        this._finishEpilogue();
      }, startAt);
    }

    _loadStoryScene(sceneIdx) {
      if (!this.currentStoryScenes || sceneIdx >= this.currentStoryScenes.length) {
        if (this.currentStory === 'prologue') {
          this._finishPrologue();
        } else if (this.currentStory === 'epilogue') {
          this._finishEpilogue();
        } else {
          if (this.onStoryFinishCallback) {
            const cb = this.onStoryFinishCallback;
            this.onStoryFinishCallback = null;
            cb();
          }
        }
        return;
      }

      // Simpan scene cerita supaya refresh tidak mengulang dari scene pertama.
      PQProgress.saveStory({ story: this.currentStory, scene: sceneIdx });

      const scene = this.currentStoryScenes[sceneIdx];
      this.$.storyChapterTitle.textContent = scene.title;
      this.$.storyWorld.className = 'story-world theme-' + scene.backgroundTheme;
      this._buildStoryScenery(scene.backgroundTheme);

      // Reset actors (animated PNG sprites)
      this.$.storyActorRight.className = 'story-actor actor-right';
      this.$.storyActorRight2.className = 'story-actor actor-right2';
      this.$.storyActorLeft.className = 'story-actor actor-left';
      this.$.storyActorRight.removeAttribute('data-actor-key');
      this.$.storyActorRight2.removeAttribute('data-actor-key');
      this.$.storyActorLeft.removeAttribute('data-actor-key');
      this._setStoryActor('left', scene.actors.left);
      this._setStoryActor('right', scene.actors.right);
      this._setStoryActor('right2', scene.actors.right2);

      this.currentLineIdx = 0;
      this._renderDialogueLine();
    }

    _storyActorHost(side) {
      if (side === 'left') return this.$.storyActorLeft;
      if (side === 'right2') return this.$.storyActorRight2;
      return this.$.storyActorRight;
    }

    _resolveActorKey(key) {
      if (!key) return null;
      if (key === 'hero') return this.currentStory === 'prologue' ? 'ali' : 'ali_armored';
      return key;
    }

    _resolveAvatarKey(key) {
      if (key === 'ali_avatar' && this.currentStory !== 'prologue') {
        return 'ali_armored_avatar';
      }
      return key;
    }

    // Prolog = orang sedang ngobrol, jadi diam. Hibat hanya bergerak di prolog;
    // di ending Hibat diam saja.
    _isStoryActorStatic(key) {
      if (key === 'danova') return true;
      if (key === 'hibat') return this.currentStory !== 'prologue';
      if (key === 'ali') return this.currentStory === 'prologue';
      return false;
    }

    _setStoryActor(side, key, options) {
      options = options || {};
      const host = this._storyActorHost(side);
      if (!host) return;

      const resolved = this._resolveActorKey(key);
      const previous = host.getAttribute('data-actor-key') || '';

      if (!resolved || !SPRITE_LIB[resolved]) {
        if (host._spriteRig) {
          host._spriteRig.destroy();
          host._spriteRig = null;
        }
        host.innerHTML = '';
        host.removeAttribute('data-actor-key');
        return;
      }

      if (previous === resolved && host._spriteRig) {
        if (options.animation && !this._isStoryActorStatic(resolved)) {
          host._spriteRig.play(options.animation, { restart: true });
        }
        return;
      }

      if (host._spriteRig) {
        host._spriteRig.destroy();
        host._spriteRig = null;
      }
      host.innerHTML = '';

      const scale = SPRITE_STORY_SCALES[resolved] || SPRITE_LIB[resolved].scale || 1;
      const isStatic = options.static !== undefined
        ? options.static
        : this._isStoryActorStatic(resolved);
      // Hibat yang sedang diam memakai pose santai sprite-1-8.
      const animationName = options.animation
        || (isStatic && resolved === 'hibat' ? 'relaxed' : 'idle');
      host._spriteRig = SpriteRig.create(host, resolved, {
        scale: scale,
        smooth: false,
        className: 'story-rig',
        flip: false,
        animation: animationName,
        static: isStatic
      });
      host.setAttribute('data-actor-key', resolved);
    }

    _spawnStoryActor(side) {
      const host = this._storyActorHost(side);
      if (!host) return;
      host.classList.remove('actor-spawn');
      void host.offsetWidth;
      host.classList.add('actor-spawn');
    }

    _vanishStoryActor(side) {
      const host = this._storyActorHost(side);
      if (host) host.classList.add('actor-vanish');
    }

    _buildStoryScenery(theme) {
      const sc = this.$.storyScenery;
      sc.innerHTML = '';
      if (theme === 'village-peaceful') {
        [120, 680].forEach(x => {
          const house = document.createElement('div');
          house.className = 'scenery-obj';
          house.style.left = x + 'px';
          house.style.bottom = '58px';
          house.innerHTML = '<svg viewBox="0 0 110 90" width="110" height="90">' +
            '<rect x="75" y="10" width="12" height="25" fill="#8B4513"/>' +
            '<circle cx="81" cy="5" r="4" fill="#DDD" opacity="0.7"/>' +
            '<polygon points="55,8 105,45 5,45" fill="#C0392B"/>' +
            '<rect x="15" y="45" width="80" height="45" fill="#D35400"/>' +
            '<rect x="45" y="55" width="20" height="35" rx="3" fill="#5D4037"/>' +
            '<circle cx="60" cy="72" r="2" fill="#F1C40F"/>' +
            '<rect x="22" y="55" width="16" height="16" rx="2" fill="#87CEEB"/>' +
            '<line x1="30" y1="55" x2="30" y2="71" stroke="#333" stroke-width="1.5"/>' +
            '<line x1="22" y1="63" x2="38" y2="63" stroke="#333" stroke-width="1.5"/>' +
            '</svg>';
          sc.appendChild(house);
        });
        [40, 360, 520, 950].forEach((x, i) => {
          const tree = document.createElement('div');
          tree.className = 'scenery-obj';
          tree.style.left = x + 'px';
          tree.style.bottom = '60px';
          tree.innerHTML = '<svg viewBox="0 0 50 80" width="50" height="80">' +
            '<rect x="20" y="45" width="10" height="35" fill="#5D4037"/>' +
            '<circle cx="25" cy="35" r="22" fill="#2E7D32"/>' +
            '<circle cx="18" cy="25" r="16" fill="#388E3C"/>' +
            '<circle cx="32" cy="25" r="16" fill="#43A047"/>' +
            '</svg>';
          sc.appendChild(tree);
        });
      } else if (theme === 'village-attack' || theme === 'village-destroyed') {
        [120, 680].forEach(x => {
          const ruin = document.createElement('div');
          ruin.className = 'scenery-obj';
          ruin.style.left = x + 'px';
          ruin.style.bottom = '58px';
          ruin.innerHTML = '<svg viewBox="0 0 110 90" width="110" height="90">' +
            '<polygon points="35,25 75,45 5,45" fill="#4A1515"/>' +
            '<rect x="15" y="45" width="70" height="40" fill="#221111"/>' +
            '<polygon points="65,45 85,85 85,45" fill="#0A0505"/>' +
            '<path d="M40 70 Q45 40 50 55 Q55 35 60 65 Z" fill="#E65100"/>' +
            '<path d="M45 70 Q48 50 52 60 Q55 45 58 68 Z" fill="#FFD54F"/>' +
            '</svg>';
          sc.appendChild(ruin);
        });
        [50, 220, 420, 600, 850, 1020].forEach((x, i) => {
          const ember = document.createElement('div');
          ember.className = 'scenery-obj';
          ember.style.left = x + 'px';
          ember.style.bottom = (70 + (i % 3) * 25) + 'px';
          ember.innerHTML = '<svg viewBox="0 0 20 20" width="20" height="20">' +
            '<circle cx="10" cy="10" r="3" fill="#FF5722" opacity="0.8"/>' +
            '<circle cx="10" cy="10" r="1.5" fill="#FFEB3B"/>' +
            '</svg>';
          sc.appendChild(ember);
        });
      } else if (theme === 'volcano') {
        // Latar JPG sudah berisi bebatuan dan lahar; sisakan bara.
        [60, 280, 620, 960].forEach((x, i) => {
          const ember = document.createElement('div');
          ember.className = 'scenery-obj';
          ember.style.left = x + 'px';
          ember.style.bottom = (65 + (i % 3) * 30) + 'px';
          ember.innerHTML = '<svg viewBox="0 0 20 20" width="20" height="20">' +
            '<circle cx="10" cy="10" r="3.5" fill="#FF5722" opacity="0.85"/>' +
            '<circle cx="10" cy="10" r="1.5" fill="#FFEB3B"/>' +
            '</svg>';
          sc.appendChild(ember);
        });
      } else if (theme === 'dark-castle') {
        // Latar JPG sudah berisi pilar dan bendera; sisakan percikan sihir.
        [200, 520, 840].forEach((x, i) => {
          const spark = document.createElement('div');
          spark.className = 'scenery-obj';
          spark.style.left = x + 'px';
          spark.style.bottom = (75 + (i % 2) * 35) + 'px';
          spark.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24">' +
            '<circle cx="12" cy="12" r="4" fill="#9D4EDD" opacity="0.8"/>' +
            '<circle cx="12" cy="12" r="1.5" fill="#FFF"/>' +
            '</svg>';
          sc.appendChild(spark);
        });
      }
    }

    _renderDialogueLine() {
      const scene = this.currentStoryScenes[this.currentSceneIdx];
      const line = scene.lines[this.currentLineIdx];

      // Update speaker badge and avatar
      this.$.dialogueSpeaker.textContent = line.name;
      this.$.dialogueSpeaker.className = 'dialogue-speaker speaker-' + line.speaker;
      this.$.dialogueAvatar.innerHTML = _portraitMarkup(this._resolveAvatarKey(line.avatar));

      // Handle SFX
      if (line.sfx === 'thunder') this.sound.thunder();
      else if (line.sfx === 'portal') this.sound.portal();
      else this.sound.blip();

      // Handle Actions
      if (line.action === 'shake') {
        this.$.storyWorld.classList.remove('screen-shake');
        void this.$.storyWorld.offsetWidth;
        this.$.storyWorld.classList.add('screen-shake');
      }
      if (line.action === 'spawn_hibat') {
        this._setStoryActor('right', 'hibat');
        this._spawnStoryActor('right');
      }
      if (line.action === 'vanish_danova' || line.action === 'vanish_right') {
        this._vanishStoryActor('right');
      }
      if (line.action === 'show_danova') {
        this._setStoryActor('right2', 'danova');
        this.$.storyActorRight2.classList.remove('actor-vanish');
        this._spawnStoryActor('right2');
      }
      if (line.action === 'show_hibat') {
        this._setStoryActor('right', 'hibat');
        this.$.storyActorRight.classList.remove('actor-vanish');
        this._spawnStoryActor('right');
      }

      // Check choices
      if (line.choices && line.choices.length > 0) {
        this.isWaitingChoice = true;
        if (this.$.dialogueChoices) {
          this.$.dialogueChoices.innerHTML = '';
          line.choices.forEach(ch => {
            const btn = document.createElement('button');
            btn.className = 'btn-story-choice choice-' + (ch.variant || 'ali');
            btn.innerHTML = `
              <span class="choice-icon">${ch.icon || '⚔️'}</span>
              <div class="choice-text-col">
                <div class="choice-title">${ch.title}</div>
                <div class="choice-desc">${ch.desc}</div>
              </div>
            `;
            btn.addEventListener('click', (e) => {
              e.stopPropagation();
              this._chooseEnding(ch.id);
            });
            this.$.dialogueChoices.appendChild(btn);
          });
          this.$.dialogueChoices.style.display = 'flex';
        }
        if (this.$.btnNextDialogue) this.$.btnNextDialogue.style.display = 'none';
        if (this.$.dialogueHint) this.$.dialogueHint.style.display = 'none';
      } else {
        this.isWaitingChoice = false;
        if (this.$.dialogueChoices) {
          this.$.dialogueChoices.style.display = 'none';
          this.$.dialogueChoices.innerHTML = '';
        }
        if (this.$.btnNextDialogue) this.$.btnNextDialogue.style.display = 'inline-block';
        if (this.$.dialogueHint) this.$.dialogueHint.style.display = 'inline-block';
      }

      // Typewriter effect
      if (this.typewriterTimer) clearInterval(this.typewriterTimer);
      this.isTyping = true;
      this.$.dialogueText.textContent = '';
      let charIdx = 0;
      const fullText = line.text;

      this.typewriterTimer = setInterval(() => {
        if (charIdx < fullText.length) {
          this.$.dialogueText.textContent += fullText.charAt(charIdx);
          charIdx++;
        } else {
          clearInterval(this.typewriterTimer);
          this.typewriterTimer = null;
          this.isTyping = false;
        }
      }, 25);
    }

    _advanceDialogue() {
      if (this.state !== GameState.PROLOGUE) return;
      if (this.isWaitingChoice) return;

      const scene = this.currentStoryScenes[this.currentSceneIdx];
      const line = scene.lines[this.currentLineIdx];

      // If still typing, complete line instantly
      if (this.isTyping) {
        if (this.typewriterTimer) {
          clearInterval(this.typewriterTimer);
          this.typewriterTimer = null;
        }
        this.$.dialogueText.textContent = line.text;
        this.isTyping = false;
        return;
      }

      this.currentLineIdx++;
      if (this.currentLineIdx < scene.lines.length) {
        this._renderDialogueLine();
      } else {
        this.currentSceneIdx++;
        this._loadStoryScene(this.currentSceneIdx);
      }
    }

    _chooseEnding(choiceId) {
      this.lastEndingChoice = choiceId;
      this.sound.thunder();
      this.isWaitingChoice = false;
      if (this.$.dialogueChoices) this.$.dialogueChoices.style.display = 'none';
      if (this.$.btnNextDialogue) this.$.btnNextDialogue.style.display = 'inline-block';
      if (this.$.dialogueHint) this.$.dialogueHint.style.display = 'inline-block';

      // Load branching lines
      const branchLines = choiceId === 'join_danova' 
        ? EPILOGUE_BRANCH_JOIN 
        : EPILOGUE_BRANCH_PROTECT;
      
      const currentScene = this.currentStoryScenes[this.currentSceneIdx];
      currentScene.lines = currentScene.lines.slice(0, this.currentLineIdx + 1).concat(branchLines);

      this.currentLineIdx++;
      this._renderDialogueLine();
    }

    _skipStory() {
      if (this.typewriterTimer) {
        clearInterval(this.typewriterTimer);
        this.typewriterTimer = null;
      }
      if (this.currentStory === 'epilogue') {
        if (!this.lastEndingChoice) this.lastEndingChoice = 'protect_humans';
        this._finishEpilogue();
      } else if (this.currentStory === 'prologue') {
        this._finishPrologue();
      } else {
        if (this.onStoryFinishCallback) {
          const cb = this.onStoryFinishCallback;
          this.onStoryFinishCallback = null;
          cb();
        }
      }
    }

    _finishPrologue() {
      if (this.typewriterTimer) {
        clearInterval(this.typewriterTimer);
        this.typewriterTimer = null;
      }
      this.sound.stageClear();
      this.unlockedLevels.prologue = true;
      this.unlockedLevels[1] = true;
      this._saveProgress();
      PQProgress.clearStory();
      PQProgress.clearRun();
      this._gotoLevelSelect();
    }

    _finishEpilogue() {
      if (this.typewriterTimer) {
        clearInterval(this.typewriterTimer);
        this.typewriterTimer = null;
      }
      this.sound.stageClear();
      this.unlockedLevels.epilogue = true;
      this._saveProgress();
      PQProgress.clearStory();
      PQProgress.clearRun();
      this._stopAll();
      this.$.storyWorld.className = 'story-world theme-dark-castle';
      this._showTBCOverlay();
    }

    _showTBCOverlay() {
      if (!this.$.storyTbcOverlay) return;
      const isJoin = this.lastEndingChoice === 'join_danova';
      if (this.$.tbcSubtitle) {
        this.$.tbcSubtitle.textContent = isJoin
          ? 'Ali & Danova — Memilih Memformat Ulang Peradaban Bersama Hibat'
          : 'Ali & Danova — Sahabat Masa Kecil yang Kini Menjadi Rival Abadi';
      }
      if (this.$.tbcDecisionBadge) {
        this.$.tbcDecisionBadge.textContent = isJoin
          ? 'Keputusanmu: Ikuti Jalan Danova (Bersama Hibat)'
          : 'Keputusanmu: Tetap Lindungi Umat Manusia';
        this.$.tbcDecisionBadge.style.borderColor = isJoin ? '#2ECC71' : '#4A90D9';
        this.$.tbcDecisionBadge.style.color = isJoin ? '#2ECC71' : '#58A6FF';
      }
      this.$.storyTbcOverlay.style.display = 'flex';
      this.sound.thunder();
    }

    _showStageIntro(cb) {
      const key = (this.currentLevel + 1) + '-' + (this.currentStage + 1);
      const intro = STAGE_INTROS[key];
      if (!intro || !this.$.stageIntroOverlay) {
        if (cb) cb();
        return;
      }

      this.state = GameState.STAGE_INTRO;
      this.currentStageIntroCallback = cb;
      this.$.stageIntroSpeaker.textContent = intro.speaker;
      this.$.stageIntroText.textContent = intro.text;
      this.$.stageIntroAvatar.innerHTML = _portraitMarkup('ali_armored_avatar');
      this.$.stageIntroOverlay.style.display = 'flex';
      this.sound.blip();
    }

    _dismissStageIntro() {
      if (this.$.stageIntroOverlay) {
        this.$.stageIntroOverlay.style.display = 'none';
      }
      if (this.currentStageIntroCallback) {
        const cb = this.currentStageIntroCallback;
        this.currentStageIntroCallback = null;
        cb();
      }
    }

    // ----------------------------------------------------------
    //  CLEANUP
    // ----------------------------------------------------------
    _stopAll() {
      if (this._walkInterval) { clearInterval(this._walkInterval); this._walkInterval = null; }
      if (this.timer) { this.timer.stop(); this.timer = null; }
      if (this.typewriterTimer) { clearInterval(this.typewriterTimer); this.typewriterTimer = null; }
      if (this.playerAnim) { this.playerAnim.destroy(); this.playerAnim = null; }
      if (this.enemyAnim) { this.enemyAnim.destroy(); this.enemyAnim = null; }

      ['left', 'right', 'right2'].forEach(side => {
        const host = this._storyActorHost(side);
        if (!host) return;
        if (host._spriteRig) { host._spriteRig.destroy(); host._spriteRig = null; }
        host.innerHTML = '';
        host.removeAttribute('data-actor-key');
      });

      this.$.enemyContainer.classList.remove('enemy-attacking');
      this.$.enemyContainer.innerHTML = '';
      this.$.battlePanel.classList.remove('active');
      if (this.$.stageIntroOverlay) this.$.stageIntroOverlay.style.display = 'none';
      if (this.$.storyTbcOverlay) this.$.storyTbcOverlay.style.display = 'none';
      if (this.$.dialogueChoices) this.$.dialogueChoices.style.display = 'none';
    }
  }

  // ============================================================
  //  BOOT
  // ============================================================
  window.addEventListener('DOMContentLoaded', () => {
    window.__pythonQuest = new PythonQuestGame();
  });

})();
