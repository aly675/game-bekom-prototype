/**
 * Koleksi Sprite SVG Vektor untuk Player dan Musuh
 * Menghasilkan visual RPG retro tanpa perlu file gambar eksternal.
 */

export const Sprites = {
  hero: `
    <svg viewBox="0 0 100 100" class="sprite-svg hero-svg" width="100%" height="100%">
      <!-- Pahlawan Pemrograman -->
      <circle cx="50" cy="50" r="42" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
      <!-- Helm / Rambut -->
      <path d="M 30 42 Q 50 15 70 42 Z" fill="#3b82f6"/>
      <path d="M 36 34 L 50 20 L 64 34 Z" fill="#60a5fa"/>
      <!-- Wajah -->
      <circle cx="50" cy="48" r="18" fill="#fed7aa"/>
      <!-- Mata Pahlawan Bertekad -->
      <ellipse cx="44" cy="46" rx="2.5" ry="3.5" fill="#0f172a"/>
      <ellipse cx="56" cy="46" rx="2.5" ry="3.5" fill="#0f172a"/>
      <circle cx="45" cy="45" r="1" fill="#fff"/>
      <circle cx="57" cy="45" r="1" fill="#fff"/>
      <!-- Senyum Percaya Diri -->
      <path d="M 45 54 Q 50 58 55 54" stroke="#0f172a" stroke-width="2" fill="none" stroke-linecap="round"/>
      <!-- Baju Zirah Badan -->
      <path d="M 32 66 L 68 66 L 62 88 L 38 88 Z" fill="#475569" stroke="#38bdf8" stroke-width="2"/>
      <!-- Pedang Logika -->
      <path d="M 72 35 L 82 25 L 86 29 L 76 39 Z" fill="#38bdf8"/>
      <line x1="70" y1="37" x2="84" y2="23" stroke="#f8fafc" stroke-width="2"/>
      <circle cx="70" cy="42" r="3" fill="#eab308"/>
      <!-- Perisai -->
      <path d="M 20 50 Q 15 70 28 80 Q 32 60 28 50 Z" fill="#0284c7" stroke="#e0f2fe" stroke-width="1.5"/>
    </svg>
  `,

  slime: `
    <svg viewBox="0 0 100 100" class="sprite-svg enemy-svg" width="100%" height="100%">
      <!-- Bug Slime -->
      <ellipse cx="50" cy="84" rx="35" ry="8" fill="#14532d" opacity="0.4"/>
      <!-- Tubuh Slime Kenyal -->
      <path d="M 20 75 Q 15 45 42 35 Q 50 15 62 35 Q 85 45 80 75 Q 75 85 50 85 Q 25 85 20 75 Z" 
            fill="#22c55e" stroke="#15803d" stroke-width="3"/>
      <!-- Efek Cahaya / Gel -->
      <path d="M 35 45 Q 45 35 55 42 Q 40 45 35 55 Z" fill="#86efac" opacity="0.7"/>
      <!-- Mata Serangga / Bug -->
      <circle cx="38" cy="55" r="6" fill="#052e16"/>
      <circle cx="62" cy="55" r="6" fill="#052e16"/>
      <circle cx="40" cy="53" r="2.5" fill="#facc15"/>
      <circle cx="64" cy="53" r="2.5" fill="#facc15"/>
      <!-- Antena Bug -->
      <path d="M 45 32 Q 40 18 32 20" stroke="#15803d" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <circle cx="31" cy="20" r="3" fill="#ef4444"/>
      <path d="M 58 32 Q 65 18 72 20" stroke="#15803d" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <circle cx="73" cy="20" r="3" fill="#ef4444"/>
      <!-- Mulut Nyengir -->
      <path d="M 42 68 Q 50 74 58 68" stroke="#052e16" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    </svg>
  `,

  goblin: `
    <svg viewBox="0 0 100 100" class="sprite-svg enemy-svg" width="100%" height="100%">
      <!-- Syntax Goblin -->
      <ellipse cx="50" cy="86" rx="32" ry="7" fill="#451a03" opacity="0.4"/>
      <!-- Telinga Runcing Panjang -->
      <polygon points="12,45 35,48 28,30" fill="#d97706" stroke="#78350f" stroke-width="2"/>
      <polygon points="88,45 65,48 72,30" fill="#d97706" stroke="#78350f" stroke-width="2"/>
      <!-- Kepala Goblin -->
      <ellipse cx="50" cy="50" rx="28" ry="24" fill="#f59e0b" stroke="#78350f" stroke-width="3"/>
      <!-- Mata Licik -->
      <polygon points="35,42 45,46 38,48" fill="#ef4444"/>
      <polygon points="65,42 55,46 62,48" fill="#ef4444"/>
      <circle cx="40" cy="45" r="1.5" fill="#fef08a"/>
      <circle cx="60" cy="45" r="1.5" fill="#fef08a"/>
      <!-- Hidung Bengkok -->
      <polygon points="50,47 46,57 53,55" fill="#d97706"/>
      <!-- Mulut Penuh Taring Syntax -->
      <path d="M 36 64 Q 50 72 64 64 Z" fill="#78350f"/>
      <polygon points="42,64 45,60 48,64" fill="#ffffff"/>
      <polygon points="52,64 55,60 58,64" fill="#ffffff"/>
      <polygon points="47,68 50,64 53,68" fill="#ffffff"/>
    </svg>
  `,

  skeleton: `
    <svg viewBox="0 0 100 100" class="sprite-svg enemy-svg" width="100%" height="100%">
      <!-- Shadow Skeleton -->
      <ellipse cx="50" cy="88" rx="28" ry="6" fill="#0f172a" opacity="0.5"/>
      <!-- Aura Bayangan -->
      <circle cx="50" cy="45" r="36" fill="#475569" opacity="0.25"/>
      <!-- Tengkorak -->
      <path d="M 30 45 C 30 25 70 25 70 45 C 70 56 64 62 60 62 L 40 62 C 36 62 30 56 30 45 Z" 
            fill="#e2e8f0" stroke="#334155" stroke-width="3"/>
      <!-- Rahang Bawah -->
      <path d="M 40 63 L 60 63 L 56 74 L 44 74 Z" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
      <!-- Lubang Mata Gelap Menyala -->
      <ellipse cx="42" cy="42" rx="6" ry="7" fill="#090d16"/>
      <ellipse cx="58" cy="42" rx="6" ry="7" fill="#090d16"/>
      <circle cx="42" cy="42" r="2.5" fill="#c084fc"/>
      <circle cx="58" cy="42" r="2.5" fill="#c084fc"/>
      <!-- Hidung Segitiga Terbalik -->
      <polygon points="50,50 47,55 53,55" fill="#090d16"/>
      <!-- Gigi Kerangka -->
      <line x1="45" y1="63" x2="45" y2="72" stroke="#334155" stroke-width="1.5"/>
      <line x1="50" y1="63" x2="50" y2="72" stroke="#334155" stroke-width="1.5"/>
      <line x1="55" y1="63" x2="55" y2="72" stroke="#334155" stroke-width="1.5"/>
    </svg>
  `,

  golem: `
    <svg viewBox="0 0 100 100" class="sprite-svg enemy-svg" width="100%" height="100%">
      <!-- Loop Golem -->
      <ellipse cx="50" cy="88" rx="34" ry="7" fill="#0c4a6e" opacity="0.4"/>
      <!-- Tubuh Batu Raksasa -->
      <rect x="25" y="24" width="50" height="52" rx="14" fill="#0284c7" stroke="#082f49" stroke-width="3"/>
      <!-- Bahu Batu Mengambang -->
      <circle cx="16" cy="40" r="10" fill="#0369a1" stroke="#082f49" stroke-width="2"/>
      <circle cx="84" cy="40" r="10" fill="#0369a1" stroke="#082f49" stroke-width="2"/>
      <!-- Inti Energi Berputar (Simbol Loop) -->
      <circle cx="50" cy="50" r="15" fill="#082f49"/>
      <!-- Panah Loop Melingkar -->
      <path d="M 42 42 A 10 10 0 1 1 58 58" fill="none" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
      <polygon points="40,38 46,42 40,46" fill="#38bdf8"/>
      <!-- Mata Sensor Neon -->
      <rect x="36" y="30" width="10" height="4" rx="2" fill="#7dd3fc"/>
      <rect x="54" y="30" width="10" height="4" rx="2" fill="#7dd3fc"/>
      <!-- Retakan Kristal -->
      <line x1="30" y1="65" x2="40" y2="70" stroke="#7dd3fc" stroke-width="1.5"/>
      <line x1="68" y1="60" x2="60" y2="68" stroke="#7dd3fc" stroke-width="1.5"/>
    </svg>
  `,

  dragon: `
    <svg viewBox="0 0 100 100" class="sprite-svg enemy-svg boss-svg" width="100%" height="100%">
      <!-- Cyber Wyrm Boss -->
      <ellipse cx="50" cy="90" rx="38" ry="8" fill="#4c0519" opacity="0.5"/>
      <!-- Sayap Naga Mengembang -->
      <polygon points="10,25 35,45 20,65" fill="#e11d48" stroke="#881337" stroke-width="2"/>
      <polygon points="90,25 65,45 80,65" fill="#e11d48" stroke="#881337" stroke-width="2"/>
      <!-- Tanduk Naga Hitam Berduri -->
      <path d="M 32 30 Q 18 10 12 14 Q 24 24 28 36 Z" fill="#1e1b4b"/>
      <path d="M 68 30 Q 82 10 88 14 Q 76 24 72 36 Z" fill="#1e1b4b"/>
      <!-- Kepala Naga Gahar -->
      <path d="M 28 35 L 72 35 L 66 75 L 50 84 L 34 75 Z" fill="#f43f5e" stroke="#881337" stroke-width="3"/>
      <!-- Sisik Pelindung -->
      <polygon points="50,42 42,50 58,50" fill="#fb7185"/>
      <polygon points="50,54 44,62 56,62" fill="#fb7185"/>
      <!-- Mata Api Membara -->
      <polygon points="34,44 45,46 38,50" fill="#facc15"/>
      <polygon points="66,44 55,46 62,50" fill="#facc15"/>
      <circle cx="40" cy="47" r="1.5" fill="#000"/>
      <circle cx="60" cy="47" r="1.5" fill="#000"/>
      <!-- Semburan Api / Hawa Panas -->
      <path d="M 46 76 L 50 82 L 54 76 Z" fill="#facc15"/>
    </svg>
  `
};
