/**
 * Modul Timer Countdown 60 Detik (1 Menit)
 */

export class GameTimer {
  constructor(totalSeconds = 60) {
    this.totalSeconds = totalSeconds;
    this.remainingMs = totalSeconds * 1000;
    this.intervalId = null;
    this.isRunning = false;
    this.tickInterval = 50; // Update setiap 50ms untuk animasi bar yang halus
  }

  start(onTick, onTimeout) {
    this.stop();
    this.remainingMs = this.totalSeconds * 1000;
    this.isRunning = true;

    // Trigger initial tick
    if (onTick) {
      onTick(this.totalSeconds, 100);
    }

    this.intervalId = setInterval(() => {
      this.remainingMs -= this.tickInterval;

      if (this.remainingMs <= 0) {
        this.remainingMs = 0;
        this.stop();
        if (onTick) onTick(0, 0);
        if (onTimeout) onTimeout();
      } else {
        const secondsLeft = (this.remainingMs / 1000).toFixed(1);
        const percentLeft = (this.remainingMs / (this.totalSeconds * 1000)) * 100;
        if (onTick) onTick(secondsLeft, percentLeft);
      }
    }, this.tickInterval);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.isRunning = false;
  }

  reset() {
    this.stop();
    this.remainingMs = this.totalSeconds * 1000;
  }
}
