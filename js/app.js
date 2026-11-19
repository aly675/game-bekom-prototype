/**
 * Controller Utama & Game Engine "Logic Defender"
 * Mata Kuliah: Berpikir Komputasi
 */

import { gameLevels } from "./data/questions.js";
import { GameTimer } from "./modules/timer.js";
import { UIManager } from "./modules/ui.js";

class GameApp {
  constructor() {
    this.ui = new UIManager();
    this.timer = new GameTimer(60); // 60 detik per giliran

    this.currentLevel = gameLevels[0];
    this.currentStageIndex = 0;
    this.maxHp = 3;
    this.playerHp = this.maxHp;
    this.isActionLocked = false;

    this.bindEvents();
  }

  bindEvents() {
    // Navigasi Main Menu
    const btnStart = document.getElementById("btn-start-game");
    if (btnStart) {
      btnStart.addEventListener("click", () => {
        this.ui.showScreen("screen-levels");
      });
    }

    const btnHowTo = document.getElementById("btn-how-to-play");
    const modalHowTo = document.getElementById("modal-howto");
    const btnCloseHowTo = document.getElementById("btn-close-howto");

    if (btnHowTo && modalHowTo) {
      btnHowTo.addEventListener("click", () => {
        modalHowTo.classList.remove("hidden");
      });
    }
    if (btnCloseHowTo && modalHowTo) {
      btnCloseHowTo.addEventListener("click", () => {
        modalHowTo.classList.add("hidden");
      });
    }

    // Navigasi Level Select
    const btnBackToMenu = document.getElementById("btn-back-to-menu");
    if (btnBackToMenu) {
      btnBackToMenu.addEventListener("click", () => {
        this.ui.showScreen("screen-menu");
      });
    }

    // Pilih Level 1
    const btnSelectLevel1 = document.getElementById("btn-select-level-1");
    if (btnSelectLevel1) {
      btnSelectLevel1.addEventListener("click", () => {
        this.startLevel(1);
      });
    }

    // Tombol Keluar dari Game
    const btnQuitGame = document.getElementById("btn-quit-game");
    if (btnQuitGame) {
      btnQuitGame.addEventListener("click", () => {
        this.timer.stop();
        this.ui.showScreen("screen-levels");
      });
    }
  }

  startLevel(levelId) {
    this.currentLevel = gameLevels.find(l => l.id === levelId) || gameLevels[0];
    this.currentStageIndex = 0;
    this.playerHp = this.maxHp;
    this.isActionLocked = false;

    this.ui.showScreen("screen-game");
    this.loadCurrentStage();
  }

  loadCurrentStage() {
    this.timer.stop();
    this.isActionLocked = false;

    const stageData = this.currentLevel.stages[this.currentStageIndex];
    if (!stageData) {
      this.handleVictory();
      return;
    }

    // Setup Tampilan
    this.ui.renderPlayer();
    this.ui.renderPlayerHearts(this.playerHp, this.maxHp);
    this.ui.renderEnemy(stageData.enemy);
    this.ui.renderQuestion(stageData, (selectedOption, btnEl) => {
      this.handleAnswer(selectedOption, btnEl);
    });

    // Mulai Timer 10 Detik
    this.startStageTimer();
  }

  startStageTimer() {
    this.timer.start(
      (secondsLeft, percent) => {
        this.ui.updateTimer(secondsLeft, percent);
      },
      () => {
        // Callback saat waktu habis (10 detik tercapai)
        this.handleTimeout();
      }
    );
  }

  handleTimeout() {
    if (this.isActionLocked) return;
    this.isActionLocked = true;

    // Musuh menyerang karena waktu habis
    this.ui.triggerEnemyAttack(() => {
      this.playerHp -= 1;
      this.ui.renderPlayerHearts(this.playerHp, this.maxHp);

      if (this.playerHp <= 0) {
        this.handleGameOver();
      } else {
        // Player masih hidup, berikan kesempatan lagi untuk menjawab soal yang sama
        this.isActionLocked = false;
        // Reset tombol opsi agar bisa diklik lagi
        const allBtns = document.querySelectorAll(".btn-option");
        allBtns.forEach(b => b.disabled = false);
        const blankSlot = document.getElementById("blank-slot");
        if (blankSlot) {
          blankSlot.textContent = "___";
          blankSlot.classList.remove("filled");
        }
        this.startStageTimer();
      }
    });
  }

  handleAnswer(selectedOption, btnEl) {
    if (this.isActionLocked) return;
    this.isActionLocked = true;
    this.timer.stop();

    const stageData = this.currentLevel.stages[this.currentStageIndex];
    const isCorrect = selectedOption === stageData.correctAnswer;

    if (isCorrect) {
      btnEl.classList.add("btn-correct");
      
      // Pahlawan menyerang musuh
      this.ui.triggerPlayerAttack(() => {
        this.ui.updateEnemyHp(0, stageData.enemy.maxHp);

        // Tampilkan modal penjelasan konsep Berpikir Komputasi
        setTimeout(() => {
          this.ui.showExplanationModal(true, stageData.explanation, () => {
            this.currentStageIndex++;
            if (this.currentStageIndex < this.currentLevel.stages.length) {
              this.loadCurrentStage();
            } else {
              this.handleVictory();
            }
          });
        }, 500);
      });
    } else {
      btnEl.classList.add("btn-wrong");
      
      // Jawaban salah: Musuh menyerang pemain (-1 HP)
      this.ui.triggerEnemyAttack(() => {
        this.playerHp -= 1;
        this.ui.renderPlayerHearts(this.playerHp, this.maxHp);

        if (this.playerHp <= 0) {
          this.handleGameOver();
        } else {
          // Masih ada sisa nyawa, beri kesempatan coba pilihan lain
          setTimeout(() => {
            btnEl.classList.remove("btn-wrong");
            btnEl.disabled = true; // Nonaktifkan jawaban yang terbukti salah
            
            const remainingBtns = document.querySelectorAll(".btn-option:not(.btn-wrong)");
            remainingBtns.forEach(b => {
              if (b !== btnEl) b.disabled = false;
            });

            const blankSlot = document.getElementById("blank-slot");
            if (blankSlot) {
              blankSlot.textContent = "___";
              blankSlot.classList.remove("filled");
            }

            this.isActionLocked = false;
            this.startStageTimer(); // Restart timer 10 detik lagi
          }, 600);
        }
      });
    }
  }

  handleGameOver() {
    this.timer.stop();
    this.ui.showGameOverModal(
      // Retry
      () => {
        this.startLevel(this.currentLevel.id);
      },
      // Back to Menu
      () => {
        this.ui.showScreen("screen-levels");
      }
    );
  }

  handleVictory() {
    this.timer.stop();
    this.ui.showVictoryModal(
      // Play Again
      () => {
        this.startLevel(this.currentLevel.id);
      },
      // Back to Menu
      () => {
        this.ui.showScreen("screen-levels");
      }
    );
  }
}

// Inisialisasi Game saat dokumen siap
window.addEventListener("DOMContentLoaded", () => {
  new GameApp();
});
