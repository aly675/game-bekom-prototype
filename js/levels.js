(function () {
  'use strict';

  // Masuk ke halaman pilih level = selesai dengan sesi game/cerita sebelumnya.
  PQProgress.clearRun();
  PQProgress.clearStory();

  var progress = PQProgress.loadProgress();

  var cards = document.querySelectorAll('.level-card');
  cards.forEach(function (card) {
    var story = card.dataset.story;
    var levelId = parseInt(card.dataset.level, 10);

    if (story === 'prologue') {
      card.classList.remove('locked');
      card.addEventListener('click', function () {
        window.location.href = 'game.html?mode=prologue';
      });
      return;
    }

    if (story === 'epilogue') {
      card.classList.toggle('locked', !progress.epilogue);
      card.addEventListener('click', function () {
        if (!progress.epilogue) {
          alert('Selesaikan Level 3 terlebih dahulu untuk membuka Epilog cerita penutup!');
          return;
        }
        window.location.href = 'game.html?mode=epilogue';
      });
      return;
    }

    if (!levelId) return;

    card.classList.toggle('locked', !progress[levelId]);
    card.addEventListener('click', function () {
      if (!progress[levelId]) {
        alert(levelId === 1
          ? 'Tonton Prolog terlebih dahulu untuk membuka Level 1!'
          : 'Selesaikan Level ' + (levelId - 1) + ' terlebih dahulu untuk membuka level ini!');
        return;
      }
      window.location.href = 'game.html?level=' + levelId;
    });
  });

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
