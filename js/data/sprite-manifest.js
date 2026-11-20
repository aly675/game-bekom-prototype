/* ============================================================
 *  SPRITE MANIFEST - PNG frame animations from /assets
 *  Generated from the folders in assets/karakter_utama and
 *  assets/enemy_karakter/enemy_forest.
 *  Each frame entry is [file, width, height] in source pixels.
 * ============================================================ */
window.SPRITE_ASSETS = {
  ali: {
    label: "Ali (Prolog)",
    dir: "assets/karakter_utama/ali/",
    scale: 2.8,
    smooth: false,
    anims: {
      idle: { fps: 6, loop: true, frames: [
        ["sprite-1-1.png", 29, 60],
        ["sprite-1-2.png", 29, 59],
        ["sprite-1-3.png", 28, 62],
        ["sprite-1-4.png", 29, 62],
        ["sprite-1-5.png", 30, 61],
        ["sprite-1-6.png", 32, 61],
        ["sprite-1-7.png", 32, 62],
        ["sprite-1-8.png", 31, 63],
      ] },
      walk: { fps: 10, loop: true, frames: [
        ["sprite-2-1.png", 25, 59],
        ["sprite-2-2.png", 26, 58],
        ["sprite-2-3.png", 24, 58],
        ["sprite-2-4.png", 24, 58],
        ["sprite-2-5.png", 26, 59],
        ["sprite-2-6.png", 27, 57],
        ["sprite-2-7.png", 27, 57],
        ["sprite-2-8.png", 27, 57],
      ] },
      attack: { fps: 12, loop: false, frames: [
        ["sprite-3-1.png", 27, 61],
        ["sprite-3-2.png", 31, 60],
        ["sprite-3-3.png", 28, 58],
        ["sprite-3-4.png", 32, 59],
        ["sprite-3-5.png", 32, 59],
        ["sprite-3-6.png", 32, 57],
        ["sprite-3-7.png", 33, 58],
        ["sprite-3-8.png", 33, 60],
      ] },
    }
  },
  ali_armored: {
    label: "Ali (Armored)",
    dir: "assets/karakter_utama/ali_armored/",
    scale: 2.4,
    smooth: false,
    anims: {
      idle: { fps: 6, loop: true, frames: [
        ["sprite-idle-1.png", 31, 43],
        ["sprite-idle-2.png", 32, 42],
        ["sprite-idle-3.png", 32, 41],
        ["sprite-idle-4.png", 31, 41],
        ["sprite-idle-5.png", 31, 42],
      ] },
      run: { fps: 12, loop: true, frames: [
        ["sprite-run-1.png", 42, 40],
        ["sprite-run-2.png", 42, 41],
        ["sprite-run-3.png", 41, 40],
        ["sprite-run-4.png", 40, 39],
        ["sprite-run-5.png", 40, 40],
        ["sprite-run-6.png", 38, 39],
        ["sprite-run-7.png", 41, 38],
        ["sprite-run-8.png", 41, 40],
      ] },
      attack: { fps: 14, loop: false, frames: [
        ["sprite-attack-1.png", 34, 32],
        ["sprite-attack-2.png", 35, 33],
        ["sprite-attack-3.png", 30, 33],
        ["sprite-attack-4.png", 54, 46],
        ["sprite-attack-5.png", 37, 45],
        ["sprite-attack-6.png", 42, 37],
        ["sprite-attack-7.png", 48, 40],
      ] },
      hit: { fps: 12, loop: false, frames: [
        ["sprite-hit-1.png", 34, 42],
        ["sprite-hit-2.png", 32, 39],
        ["sprite-hit-3.png", 34, 35],
        ["sprite-hit-4.png", 35, 33],
        ["sprite-hit-5.png", 39, 30],
      ] },
      death: { fps: 3, loop: false, frames: [
        ["sprite-death-2-1.png", 50, 17],
        ["sprite-death-2-2.png", 50, 14],
      ] },
    }
  },
  danova: {
    label: "Danova",
    dir: "assets/karakter_utama/danova/",
    scale: 5.2,
    smooth: false,
    anims: {
      idle: { fps: 5, loop: true, frames: [
        ["sprite-1-1.png", 14, 32],
        ["sprite-1-2.png", 13, 32],
        ["sprite-1-3.png", 14, 32],
        ["sprite-1-4.png", 13, 31],
      ] },
      idle_back: { fps: 5, loop: true, frames: [
        ["sprite-2-1.png", 14, 32],
        ["sprite-2-2.png", 13, 32],
        ["sprite-2-3.png", 14, 32],
        ["sprite-2-4.png", 14, 32],
      ] },
      walk: { fps: 8, loop: true, frames: [
        ["sprite-3-1.png", 11, 32],
        ["sprite-3-2.png", 15, 32],
        ["sprite-3-3.png", 11, 32],
        ["sprite-3-4.png", 14, 32],
      ] },
      walk_back: { fps: 8, loop: true, frames: [
        ["sprite-4-1.png", 11, 32],
        ["sprite-4-2.png", 15, 32],
        ["sprite-4-3.png", 11, 32],
        ["sprite-4-4.png", 14, 32],
      ] },
    }
  },
  hibat: {
    label: "Hibat",
    dir: "assets/karakter_utama/hibat/",
    scale: 2.0,
    smooth: false,
    anims: {
      idle: { fps: 8, loop: true, frames: [
        ["sprite-1-1.png", 105, 99],
        ["sprite-1-2.png", 108, 99],
        ["sprite-1-3.png", 118, 100],
        ["sprite-1-4.png", 127, 98],
        ["sprite-1-5.png", 126, 100],
        ["sprite-1-6.png", 114, 91],
        ["sprite-1-7.png", 111, 99],
        ["sprite-1-8.png", 109, 100],
      ] },
      // Pose santai Hibat untuk keadaan diam (mis. di ending)
      relaxed: { fps: 1, loop: true, frames: [
        ["sprite-1-8.png", 109, 100],
      ] },
    }
  },
  orc: {
    label: "Orc Hutan",
    dir: "assets/enemy_karakter/enemy_forest/sprites/",
    scale: 0.3,
    smooth: true,
    anims: {
      idle: { fps: 5, loop: true, frames: [
        ["sprite-1-1.png", 366, 438],
        ["sprite-1-2.png", 366, 436],
        ["sprite-1-3.png", 367, 435],
        ["sprite-1-4.png", 366, 436],
      ] },
      attack: { fps: 10, loop: false, frames: [
        ["sprite-2-1.png", 428, 380],
        ["sprite-2-2.png", 363, 481],
        ["sprite-2-3.png", 391, 466],
        ["sprite-2-4.png", 482, 478],
        ["sprite-2-5.png", 422, 340],
        ["sprite-2-6.png", 401, 349],
      ] },
      hurt: { fps: 10, loop: false, frames: [
        ["sprite-3-1.png", 368, 401],
        ["sprite-3-2.png", 395, 451],
        ["sprite-3-3.png", 427, 267],
        ["sprite-3-4.png", 380, 265],
      ] },
      death: { fps: 5, loop: false, frames: [
        ["sprite-4-1.png", 443, 230],
        ["sprite-4-2.png", 467, 223],
      ] },
    }
  },
  goblin: {
    label: "Goblin Hutan",
    dir: "assets/enemy_karakter/enemy_forest/goblin/",
    scale: 0.3,
    smooth: true,
    anims: {
      idle: { fps: 3, loop: true, frames: [
        ["sprite-1-1.png", 472, 378],
        ["sprite-1-2.png", 443, 379],
      ] },
      attack: { fps: 10, loop: false, frames: [
        ["sprite-2-1.png", 626, 364],
        ["sprite-2-2.png", 484, 364],
        ["sprite-2-3.png", 363, 484],
        ["sprite-2-4.png", 478, 364],
      ] },
    }
  },
  orc_boss: {
    label: "Raja Iblis Hutan",
    dir: "assets/enemy_karakter/enemy_forest/boss/",
    scale: 0.35,
    smooth: true,
    anims: {
      idle: { fps: 5, loop: true, frames: [
        ["sprite-1-1.png", 406, 433],
        ["sprite-1-2.png", 401, 434],
        ["sprite-1-3.png", 328, 439],
        ["sprite-1-4.png", 406, 433],
        ["sprite-1-5.png", 405, 433],
      ] },
      attack: { fps: 10, loop: false, frames: [
        ["sprite-4-1.png", 368, 429],
        ["sprite-4-2.png", 336, 449],
        ["sprite-4-3.png", 364, 439],
        ["sprite-4-4.png", 398, 450],
        ["sprite-4-5.png", 346, 385],
        ["sprite-4-6.png", 350, 372],
        ["sprite-4-7.png", 395, 402],
      ] },
      hurt: { fps: 8, loop: false, frames: [
        ["sprite-2-1.png", 329, 451],
        ["sprite-2-2.png", 351, 421],
      ] },
      death: { fps: 5, loop: false, frames: [
        ["sprite-2-1.png", 329, 451],
        ["sprite-2-2.png", 351, 421],
        ["sprite-2-3.png", 403, 417],
        ["sprite-2-4.png", 351, 344],
        ["sprite-2-5.png", 352, 279],
        ["sprite-2-6.png", 351, 275],
        ["sprite-3-1.png", 423, 206],
      ] },
    }
  },
};

window.SPRITE_PORTRAITS = {
  ali_avatar: 'assets/portraits/ali.png',
  ali_armored_avatar: 'assets/portraits/ali_armored.png',
  danova_avatar: 'assets/portraits/danova.png',
};
