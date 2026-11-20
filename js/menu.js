(function () {
  'use strict';

  var progress = PQProgress.loadProgress();
  var btnPlay = document.getElementById('btn-play');
  var progressText = document.getElementById('menu-progress');

  var hasProgress = progress.prologue || progress[1] || progress[2] || progress[3] || progress.epilogue;

  if (btnPlay && hasProgress) {
    btnPlay.textContent = 'LANJUTKAN PETUALANGAN';
  }

  if (progressText) {
    if (progress.epilogue) {
      progressText.textContent = 'Progress tersimpan: Epilog sudah terbuka.';
    } else if (progress[3]) {
      progressText.textContent = 'Progress tersimpan: Level 3 terbuka.';
    } else if (progress[2]) {
      progressText.textContent = 'Progress tersimpan: Level 2 terbuka.';
    } else if (progress[1]) {
      progressText.textContent = 'Progress tersimpan: Level 1 terbuka.';
    } else {
      progressText.textContent = 'Belum ada progress. Mulai dari Prolog dulu, ya!';
    }
  }

  if (btnPlay) {
    btnPlay.addEventListener('click', function () {
      if (progress.prologue) {
        window.location.href = 'levels.html';
      } else {
        window.location.href = 'game.html?mode=prologue';
      }
    });
  }

  var modalHowto = document.getElementById('modal-howto');
  var btnHowto = document.getElementById('btn-howto');
  var btnCloseHowto = document.getElementById('btn-close-howto');
  if (btnHowto && modalHowto) {
    btnHowto.addEventListener('click', function () { modalHowto.classList.add('active'); });
  }
  if (btnCloseHowto && modalHowto) {
    btnCloseHowto.addEventListener('click', function () { modalHowto.classList.remove('active'); });
  }

  var soundBtn = document.getElementById('btn-sound');
  function syncSound() {
    if (!soundBtn) return;
    var on = PQProgress.getSound();
    soundBtn.textContent = on ? 'SFX ON' : 'SFX OFF';
    soundBtn.classList.toggle('sound-off', !on);
  }
  syncSound();
  if (soundBtn) {
    soundBtn.addEventListener('click', function () {
      PQProgress.setSound(!PQProgress.getSound());
      syncSound();
    });
  }
})();
