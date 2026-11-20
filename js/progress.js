/**
 * Penyimpanan progress, posisi game, dan posisi cerita.
 * Dipakai oleh halaman menu, pilih level, dan game.
 *
 * Catatan: kalau localStorage/sessionStorage diblokir (mis. dibuka via file://),
 * data disimpan di window.name supaya tetap kebawa saat pindah halaman/refresh.
 */
(function () {
  'use strict';

  var PROGRESS_KEY = 'pythonquest_progress';
  var RUN_KEY = 'pythonquest_run';
  var STORY_KEY = 'pythonquest_story';
  var SOUND_KEY = 'pythonquest_sound';

  function winData() {
    try {
      var data = JSON.parse(window.name || '{}');
      return data && typeof data === 'object' ? data : {};
    } catch (e) {
      return {};
    }
  }

  function saveWin(patch) {
    try {
      var data = winData();
      Object.keys(patch).forEach(function (key) { data[key] = patch[key]; });
      window.name = JSON.stringify(data);
    } catch (e) {}
  }

  function readLS(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function writeLS(key, value) {
    try { localStorage.setItem(key, value); return true; } catch (e) { return false; }
  }

  function readSS(key) {
    try { return sessionStorage.getItem(key); } catch (e) { return null; }
  }
  function writeSS(key, value) {
    try { sessionStorage.setItem(key, value); return true; } catch (e) { return false; }
  }
  function removeSS(key) {
    try { sessionStorage.removeItem(key); } catch (e) {}
  }

  function defaultProgress() {
    return { prologue: false, 1: false, 2: false, 3: false, epilogue: false };
  }

  function loadProgress() {
    var saved = null;
    var raw = readLS(PROGRESS_KEY);
    if (raw) {
      try { saved = JSON.parse(raw); } catch (e) {}
    }
    if (!saved) saved = winData().progress || null;
    if (!saved) return defaultProgress();

    var hasPrologue = !!saved.prologue || !!saved[1] || !!saved['1'];
    return {
      prologue: hasPrologue,
      1: hasPrologue,
      2: !!saved[2] || !!saved['2'],
      3: !!saved[3] || !!saved['3'],
      epilogue: !!saved.epilogue
    };
  }

  function saveProgress(progress) {
    var data = {
      prologue: !!progress.prologue,
      1: !!progress[1],
      2: !!progress[2],
      3: !!progress[3],
      epilogue: !!progress.epilogue
    };
    writeLS(PROGRESS_KEY, JSON.stringify(data));
    // Selalu simpan juga di window.name supaya tetap kebawa antar halaman
    // walaupun localStorage file:// dipisah per file oleh browser.
    saveWin({ progress: data });
  }

  function loadRun() {
    var raw = readSS(RUN_KEY);
    if (raw) {
      try { return JSON.parse(raw); } catch (e) {}
    }
    return winData().run || null;
  }

  function saveRun(run) {
    writeSS(RUN_KEY, JSON.stringify(run));
    saveWin({ run: run });
  }

  function clearRun() {
    removeSS(RUN_KEY);
    var data = winData();
    if (data.run) {
      delete data.run;
      try { window.name = JSON.stringify(data); } catch (e) {}
    }
  }

  function loadStory() {
    var raw = readSS(STORY_KEY);
    if (raw) {
      try { return JSON.parse(raw); } catch (e) {}
    }
    return winData().story || null;
  }

  function saveStory(story) {
    writeSS(STORY_KEY, JSON.stringify(story));
    saveWin({ story: story });
  }

  function clearStory() {
    removeSS(STORY_KEY);
    var data = winData();
    if (data.story) {
      delete data.story;
      try { window.name = JSON.stringify(data); } catch (e) {}
    }
  }

  function getSound() {
    var raw = readLS(SOUND_KEY);
    if (raw !== null) return raw !== '0';
    var data = winData();
    if (typeof data.sound === 'boolean') return data.sound;
    return true;
  }

  function setSound(on) {
    writeLS(SOUND_KEY, on ? '1' : '0');
    saveWin({ sound: !!on });
  }

  window.PQProgress = {
    defaultProgress: defaultProgress,
    loadProgress: loadProgress,
    saveProgress: saveProgress,
    loadRun: loadRun,
    saveRun: saveRun,
    clearRun: clearRun,
    loadStory: loadStory,
    saveStory: saveStory,
    clearStory: clearStory,
    getSound: getSound,
    setSound: setSound
  };
})();
