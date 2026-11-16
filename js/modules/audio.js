/**
 * Retro Arcade Sound Synthesizer via Native Web Audio API
 * Menghasilkan efek suara 8-bit secara instan tanpa membutuhkan file MP3/WAV.
 */

class SoundFX {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  playTone(freq, type = "sine", duration = 0.15, gainVal = 0.1) {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy
    }
  }

  playSlash() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.18);

      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.18);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.18);
    } catch (e) {}
  }

  playHurt() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(160, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.25);

      gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.25);
    } catch (e) {}
  }

  playCorrect() {
    this.playTone(523.25, "triangle", 0.1, 0.15); // C5
    setTimeout(() => this.playTone(659.25, "triangle", 0.12, 0.15), 100); // E5
    setTimeout(() => this.playTone(783.99, "triangle", 0.2, 0.18), 200); // G5
  }

  playWrong() {
    this.playTone(220, "sawtooth", 0.15, 0.2);
    setTimeout(() => this.playTone(180, "sawtooth", 0.25, 0.2), 140);
  }

  playVictory() {
    const notes = [440, 554, 659, 880];
    notes.forEach((f, idx) => {
      setTimeout(() => this.playTone(f, "triangle", 0.25, 0.2), idx * 140);
    });
  }

  playGameOver() {
    const notes = [380, 320, 260, 200];
    notes.forEach((f, idx) => {
      setTimeout(() => this.playTone(f, "sawtooth", 0.3, 0.2), idx * 160);
    });
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }
}

export const sound = new SoundFX();
