(function () {
  const STORAGE_KEY = "aaeus-progress-v2";

  const defaultState = {
    completedLessons: [],
    lessonQuizScores: {},
    labStats: {
      labelingDone: false,
      promptBestScore: 0,
      biasTried: false,
      truthScore: 0,
      truthDone: false
    },
    lastChallengeScore: 0,
    lastChallengeTotal: 0
  };

  function normalizeState(raw) {
    const state = raw && typeof raw === "object" ? raw : {};

    return {
      completedLessons: Array.isArray(state.completedLessons)
        ? [...new Set(state.completedLessons.map(Number).filter(Boolean))].sort((a, b) => a - b)
        : [],
      lessonQuizScores:
        state.lessonQuizScores && typeof state.lessonQuizScores === "object"
          ? state.lessonQuizScores
          : {},
      labStats:
        state.labStats && typeof state.labStats === "object"
          ? {
              labelingDone: !!state.labStats.labelingDone,
              promptBestScore: Number(state.labStats.promptBestScore || 0),
              biasTried: !!state.labStats.biasTried,
              truthScore: Number(state.labStats.truthScore || 0),
              truthDone: !!state.labStats.truthDone
            }
          : { ...defaultState.labStats },
      lastChallengeScore: Number(state.lastChallengeScore || 0),
      lastChallengeTotal: Number(state.lastChallengeTotal || 0)
    };
  }

  const Store = {
    get() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return { ...defaultState, labStats: { ...defaultState.labStats } };
        return normalizeState(JSON.parse(raw));
      } catch (err) {
        return { ...defaultState, labStats: { ...defaultState.labStats } };
      }
    },

    set(nextState) {
      const normalized = normalizeState(nextState);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
      window.dispatchEvent(new CustomEvent("aaeus:store-updated", { detail: normalized }));
      return normalized;
    },

    reset() {
      localStorage.removeItem(STORAGE_KEY);
      const clean = { ...defaultState, labStats: { ...defaultState.labStats } };
      window.dispatchEvent(new CustomEvent("aaeus:store-updated", { detail: clean }));
      return clean;
    },

    toggleLesson(id) {
      const state = this.get();
      const num = Number(id);
      const exists = state.completedLessons.includes(num);

      const updated = {
        ...state,
        completedLessons: exists
          ? state.completedLessons.filter(x => x !== num)
          : [...state.completedLessons, num].sort((a, b) => a - b)
      };

      return this.set(updated);
    },

    markLessonDone(id, done = true) {
      const state = this.get();
      const num = Number(id);
      const set = new Set(state.completedLessons);

      if (done) set.add(num);
      else set.delete(num);

      return this.set({
        ...state,
        completedLessons: [...set].sort((a, b) => a - b)
      });
    },

    saveLessonQuizScore(lessonId, score, total) {
      const state = this.get();
      return this.set({
        ...state,
        lessonQuizScores: {
          ...state.lessonQuizScores,
          [lessonId]: {
            score: Number(score || 0),
            total: Number(total || 0)
          }
        }
      });
    },

    updateLabStats(patch = {}) {
      const state = this.get();
      return this.set({
        ...state,
        labStats: {
          ...state.labStats,
          ...patch
        }
      });
    }
  };

  window.Store = Store;

  function setActiveNavLink() {
    const page = document.body.dataset.page;
    const nav = document.getElementById("siteNav");
    if (!nav) return;

    const pageMap = {
      home: "index.html",
      lessons: "ikasgaiak.html",
      lab: "laborategia.html",
      challenges: "erronkak.html",
      teachers: "irakasleak.html",
      parents: "gurasoak.html"
    };

    const targetHref = pageMap[page];
    if (!targetHref) return;

    nav.querySelectorAll("a").forEach(link => {
      const isActive = link.getAttribute("href") === targetHref;
      link.classList.toggle("active", isActive);
      if (isActive) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }

  function setupMobileNav() {
    const toggle = document.getElementById("navToggle");
    const nav = document.getElementById("siteNav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", e => {
      if (!nav.classList.contains("open")) return;
      if (nav.contains(e.target) || toggle.contains(e.target)) return;
      nav.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function animateOnScroll() {
    const els = document.querySelectorAll(".fade-in");
    if (!("IntersectionObserver" in window) || !els.length) return;

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach(el => io.observe(el));
  }

  function injectProgressBadge() {
    const page = document.body.dataset.page;
    if (page !== "home" && page !== "lessons") return;

    const state = Store.get();
    const totalLessons =
      window.AA && Array.isArray(window.AA.lessons) ? window.AA.lessons.length : 0;

    if (!totalLessons) return;

    const done = state.completedLessons.length;
    const pct = Math.round((done / totalLessons) * 100);

    const host =
      document.querySelector(".hero-trust") ||
      document.querySelector(".page-head");

    if (!host || document.getElementById("globalProgressMini")) return;

    const div = document.createElement("div");
    div.id = "globalProgressMini";
    div.className = "progress-banner";
    div.style.marginTop = "1rem";
    div.innerHTML = `
      <div class="progress-text">${done}/${totalLessons} modulu osatuta</div>
      <div class="progress-bar-wrap">
        <div class="progress-bar-fill" style="width:${pct}%"></div>
      </div>
      <div class="progress-text">${pct}%</div>
    `;

    if (host.classList.contains("hero-trust")) {
      host.parentNode.insertBefore(div, host.nextSibling);
    } else {
      host.appendChild(div);
    }
  }

  function refreshGlobalBits() {
    const el = document.getElementById("globalProgressMini");
    if (el) el.remove();
    injectProgressBadge();
  }

  /* ── Interactive mini-quiz ── */
  function initMiniQuizzes() {
    var quizContainers = document.querySelectorAll(".mini-quiz");
    if (!quizContainers.length) return;

    quizContainers.forEach(function (container) {
      var lessonId = container.dataset.lesson;
      var questions = container.querySelectorAll(".mini-quiz-q");
      var totalQ = questions.length;
      var answered = 0;
      var score = 0;

      questions.forEach(function (qEl) {
        var correctIdx = parseInt(qEl.dataset.correct, 10);
        var buttons = qEl.querySelectorAll(".mini-quiz-opt");
        var expEl = qEl.querySelector(".mini-quiz-exp");

        buttons.forEach(function (btn, idx) {
          btn.addEventListener("click", function () {
            if (btn.disabled) return;

            buttons.forEach(function (b) { b.disabled = true; });

            if (idx === correctIdx) {
              btn.classList.add("correct");
              score++;
            } else {
              btn.classList.add("incorrect");
              buttons[correctIdx].classList.add("correct");
            }

            if (expEl) expEl.classList.add("visible");

            answered++;
            if (answered === totalQ) {
              var scoreEl = document.createElement("div");
              scoreEl.className = "mini-quiz-score";
              scoreEl.textContent = "Emaitza: " + score + "/" + totalQ + " zuzen";
              container.appendChild(scoreEl);

              if (lessonId && window.Store) {
                Store.saveLessonQuizScore(lessonId, score, totalQ);
              }
            }
          });
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupMobileNav();
    setActiveNavLink();
    animateOnScroll();
    injectProgressBadge();
    initMiniQuizzes();
  });

  window.addEventListener("aaeus:store-updated", refreshGlobalBits);
})();
