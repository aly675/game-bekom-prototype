/**
 * Modul Antarmuka (UI Renderer & Screen Router)
 */

import { Sprites } from "./sprites.js";
import { sound } from "./audio.js";

export class UIManager {
  constructor() {
    // Screens
    this.screenMenu = document.getElementById("screen-menu");
    this.screenLevels = document.getElementById("screen-levels");
    this.screenGame = document.getElementById("screen-game");

    // Modals
    this.modalGameOver = document.getElementById("modal-gameover");
    this.modalVictory = document.getElementById("modal-victory");
    this.modalExplanation = document.getElementById("modal-explanation");

    // Game Elements
    this.playerHeartsContainer = document.getElementById("player-hearts");
    this.playerSpriteContainer = document.getElementById("player-sprite-box");
    this.enemySpriteContainer = document.getElementById("enemy-sprite-box");
    this.enemyNameEl = document.getElementById("enemy-name");
    this.enemyHpBar = document.getElementById("enemy-hp-bar");
    this.stageBadgeEl = document.getElementById("stage-badge");
    this.pilarBadgeEl = document.getElementById("pilar-badge");

    this.timerBar = document.getElementById("timer-bar");
    this.timerText = document.getElementById("timer-text");

    this.scenarioTextEl = document.getElementById("scenario-text");
    this.codeSnippetEl = document.getElementById("code-snippet");
    this.optionsContainer = document.getElementById("options-container");

    this.soundToggleBtn = document.getElementById("btn-sound-toggle");

    this.setupSoundButton();
  }

  setupSoundButton() {
    if (this.soundToggleBtn) {
      this.soundToggleBtn.addEventListener("click", () => {
        const isMuted = sound.toggleMute();
        this.soundToggleBtn.innerHTML = isMuted 
          ? "🔇 Suara: Mati" 
          : "🔊 Suara: Nyala";
      });
    }
  }

  showScreen(targetId) {
    const screens = [this.screenMenu, this.screenLevels, this.screenGame];
    screens.forEach(screen => {
      if (screen) {
        if (screen.id === targetId) {
          screen.classList.remove("hidden");
          screen.classList.add("active");
        } else {
          screen.classList.add("hidden");
          screen.classList.remove("active");
        }
      }
    });

    // Close any open modals when navigating
    this.closeModals();
  }

  closeModals() {
    if (this.modalGameOver) this.modalGameOver.classList.add("hidden");
    if (this.modalVictory) this.modalVictory.classList.add("hidden");
    if (this.modalExplanation) this.modalExplanation.classList.add("hidden");
  }

  renderPlayerHearts(currentHp, maxHp = 3) {
    if (!this.playerHeartsContainer) return;
    this.playerHeartsContainer.innerHTML = "";
    for (let i = 0; i < maxHp; i++) {
      const heart = document.createElement("span");
      heart.className = `heart ${i < currentHp ? "heart-full" : "heart-empty"}`;
      heart.innerHTML = i < currentHp ? "❤️" : "🖤";
      this.playerHeartsContainer.appendChild(heart);
    }
  }

  renderEnemy(enemy) {
    if (this.enemyNameEl) this.enemyNameEl.textContent = enemy.name;
    if (this.enemySpriteContainer) {
      this.enemySpriteContainer.innerHTML = Sprites[enemy.svgType] || Sprites.slime;
    }
    this.updateEnemyHp(enemy.hp, enemy.maxHp);
  }

  renderPlayer() {
    if (this.playerSpriteContainer) {
      this.playerSpriteContainer.innerHTML = Sprites.hero;
    }
  }

  updateEnemyHp(currentHp, maxHp) {
    if (!this.enemyHpBar) return;
    const pct = Math.max(0, (currentHp / maxHp) * 100);
    this.enemyHpBar.style.width = `${pct}%`;
  }

  updateTimer(secondsLeft, percent) {
    if (this.timerBar) {
      this.timerBar.style.width = `${percent}%`;
      // Warna berubah dari hijau ke kuning ke merah
      if (percent < 30) {
        this.timerBar.style.backgroundColor = "#ef4444";
      } else if (percent < 60) {
        this.timerBar.style.backgroundColor = "#f59e0b";
      } else {
        this.timerBar.style.backgroundColor = "#10b981";
      }
    }
    if (this.timerText) {
      this.timerText.textContent = `${secondsLeft}s`;
    }
  }

  renderQuestion(stageData, onAnswerSelected) {
    if (this.stageBadgeEl) this.stageBadgeEl.textContent = `Stage ${stageData.stageNumber} / 5`;
    if (this.pilarBadgeEl) this.pilarBadgeEl.textContent = `Pilar: ${stageData.pilarBekom}`;
    if (this.scenarioTextEl) this.scenarioTextEl.textContent = stageData.scenario;

    // Render Code Snippet with Fill-the-blank Target
    if (this.codeSnippetEl) {
      this.codeSnippetEl.innerHTML = `
        <span class="code-pre">${this.escapeHtml(stageData.codePre)}</span><span id="blank-slot" class="blank-slot">___</span><span class="code-post">${this.escapeHtml(stageData.codePost)}</span>
      `;
    }

    // Render Options
    if (this.optionsContainer) {
      this.optionsContainer.innerHTML = "";
      stageData.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "btn-option";
        btn.textContent = opt;
        btn.addEventListener("click", () => {
          // Disable options to prevent double-click
          const allBtns = this.optionsContainer.querySelectorAll(".btn-option");
          allBtns.forEach(b => b.disabled = true);
          
          // Preview jawaban di slot blank
          const blankSlot = document.getElementById("blank-slot");
          if (blankSlot) {
            blankSlot.textContent = opt;
            blankSlot.classList.add("filled");
          }

          onAnswerSelected(opt, btn);
        });
        this.optionsContainer.appendChild(btn);
      });
    }
  }

  triggerPlayerAttack(callback) {
    sound.playSlash();
    if (this.playerSpriteContainer) {
      this.playerSpriteContainer.classList.add("anim-hero-attack");
      setTimeout(() => {
        this.playerSpriteContainer.classList.remove("anim-hero-attack");
      }, 350);
    }

    setTimeout(() => {
      if (this.enemySpriteContainer) {
        this.enemySpriteContainer.classList.add("anim-enemy-hit");
        this.showFloatingDamage("-1 HIT!", "#38bdf8", this.enemySpriteContainer);
        setTimeout(() => {
          this.enemySpriteContainer.classList.remove("anim-enemy-hit");
          if (callback) callback();
        }, 350);
      }
    }, 200);
  }

  triggerEnemyAttack(callback) {
    sound.playHurt();
    const gameArena = document.getElementById("battle-arena");
    if (gameArena) {
      gameArena.classList.add("screen-shake-red");
      setTimeout(() => gameArena.classList.remove("screen-shake-red"), 400);
    }

    if (this.enemySpriteContainer) {
      this.enemySpriteContainer.classList.add("anim-enemy-lunge");
      setTimeout(() => {
        this.enemySpriteContainer.classList.remove("anim-enemy-lunge");
      }, 300);
    }

    if (this.playerSpriteContainer) {
      this.playerSpriteContainer.classList.add("anim-player-hurt");
      this.showFloatingDamage("-1 HP!", "#ef4444", this.playerSpriteContainer);
      setTimeout(() => {
        this.playerSpriteContainer.classList.remove("anim-player-hurt");
        if (callback) callback();
      }, 400);
    }
  }

  showFloatingDamage(text, color, targetEl) {
    if (!targetEl) return;
    const popup = document.createElement("div");
    popup.className = "floating-damage";
    popup.textContent = text;
    popup.style.color = color;
    targetEl.appendChild(popup);
    setTimeout(() => popup.remove(), 700);
  }

  showExplanationModal(isCorrect, explanation, onNext) {
    if (!this.modalExplanation) {
      if (onNext) onNext();
      return;
    }

    const titleEl = document.getElementById("explanation-title");
    const descEl = document.getElementById("explanation-text");
    const nextBtn = document.getElementById("btn-explanation-next");

    if (titleEl) {
      titleEl.textContent = isCorrect ? "🎉 Logika Benar!" : "⚠️ Logika Belum Tepat!";
      titleEl.style.color = isCorrect ? "#22c55e" : "#ef4444";
    }

    if (descEl) {
      descEl.textContent = explanation;
    }

    this.modalExplanation.classList.remove("hidden");

    // One-time listener for next button
    if (nextBtn) {
      nextBtn.onclick = () => {
        this.modalExplanation.classList.add("hidden");
        if (onNext) onNext();
      };
    }
  }

  showGameOverModal(onRetry, onMenu) {
    sound.playGameOver();
    if (!this.modalGameOver) return;
    this.modalGameOver.classList.remove("hidden");

    const btnRetry = document.getElementById("btn-retry");
    const btnMenu = document.getElementById("btn-gameover-menu");

    if (btnRetry) {
      btnRetry.onclick = () => {
        this.modalGameOver.classList.add("hidden");
        if (onRetry) onRetry();
      };
    }

    if (btnMenu) {
      btnMenu.onclick = () => {
        this.modalGameOver.classList.add("hidden");
        if (onMenu) onMenu();
      };
    }
  }

  showVictoryModal(onPlayAgain, onMenu) {
    sound.playVictory();
    if (!this.modalVictory) return;
    this.modalVictory.classList.remove("hidden");

    const btnReplay = document.getElementById("btn-victory-replay");
    const btnMenu = document.getElementById("btn-victory-menu");

    if (btnReplay) {
      btnReplay.onclick = () => {
        this.modalVictory.classList.add("hidden");
        if (onPlayAgain) onPlayAgain();
      };
    }

    if (btnMenu) {
      btnMenu.onclick = () => {
        this.modalVictory.classList.add("hidden");
        if (onMenu) onMenu();
      };
    }
  }

  escapeHtml(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}
