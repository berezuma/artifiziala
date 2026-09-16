/* ==========================================================================
   artifiziala.eus · PISA 2029 · MAIL — motor komuna
   - Nabigazioa, animazioak, aurrerapena (localStorage)
   - Ariketa-motorra: single, multi, classify, match, order, highlight, open
   - Estimuluen errendatzailea (argitalpenak, emailak, txatak, bilaketak...)
   ========================================================================== */
(function () {
  "use strict";

  const MAIL = (window.MAIL = window.MAIL || {});
  document.documentElement.classList.add("js");

  /* ---------- Metadatuak ---------- */
  MAIL.COMP = {
    etika: {
      name: "Hausnartu eta jardun etikoki eta arduraz",
      short: "Etika eta ardura",
      en: "Reflect and Act Ethically and Responsibly",
      color: "#1d4e6e",
      glyph: "",
      page: "etika.html",
      weight: "Zeharkakoa"
    },
    sarbidea: {
      name: "Eskuratu eta erabili",
      short: "Eskuratu eta erabili",
      en: "Access and Use",
      color: "#2a6f97",
      glyph: "",
      page: "sarbidea.html",
      weight: "~%17"
    },
    aztertu: {
      name: "Aztertu eta ebaluatu",
      short: "Aztertu eta ebaluatu",
      en: "Analyse and Evaluate",
      color: "#0e7a86",
      glyph: "",
      page: "aztertu.html",
      weight: "%25"
    },
    partehartu: {
      name: "Parte hartu eta elkarlanean aritu",
      short: "Parte hartu",
      en: "Participate and Collaborate",
      color: "#3a8a78",
      glyph: "",
      page: "parte-hartu.html",
      weight: "~%17"
    },
    sortu: {
      name: "Sortu",
      short: "Sortu",
      en: "Create",
      color: "#5b8c4e",
      glyph: "",
      page: "sortu.html",
      weight: "%25"
    }
  };
  MAIL.COMP_ORDER = ["etika", "sarbidea", "aztertu", "partehartu", "sortu"];

  MAIL.CONTEXT = {
    harremanak: "Harremanak",
    ikaskuntza: "Ikaskuntza",
    aisialdia: "Aisialdia",
    limurtzea: "Limurtzea",
    herritartasuna: "Herritartasuna"
  };

  MAIL.LEVEL = { 1: "Oinarrizkoa", 2: "Tartekoa", 3: "Aurreratua" };

  MAIL.TYPE_LABEL = {
    single: "Aukera bakarra",
    multi: "Aukera anitza",
    classify: "Sailkatu",
    match: "Lotu",
    order: "Ordenatu",
    highlight: "Nabarmendu",
    open: "Erantzun irekia"
  };

  /* ---------- Laguntzaileak ---------- */
  const esc = (s) =>
    String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  MAIL.esc = esc;

  MAIL.shuffle = function (arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  MAIL.h = function (html) {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  };

  MAIL.download = function (filename, content, mime) {
    const blob = new Blob([content], { type: mime || "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  };

  let toastTimer;
  MAIL.toast = function (msg) {
    let t = document.querySelector(".toast");
    if (!t) {
      t = document.createElement("div");
      t.className = "toast";
      t.setAttribute("role", "status");
      t.setAttribute("aria-live", "polite");
      document.body.appendChild(t);
    }
    t.textContent = msg;
    requestAnimationFrame(() => t.classList.add("show"));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
  };

  MAIL.levelFromPct = function (pct) {
    if (pct >= 75) return 3;
    if (pct >= 40) return 2;
    return 1;
  };

  /* ---------- Biltegia ---------- */
  const KEY = "aaeus-pisa2029-v1";
  const blank = () => ({ items: {}, sims: {}, exams: [] });

  MAIL.store = {
    get() {
      try {
        const raw = localStorage.getItem(KEY);
        if (!raw) return blank();
        const s = JSON.parse(raw);
        return { items: s.items || {}, sims: s.sims || {}, exams: Array.isArray(s.exams) ? s.exams : [] };
      } catch (e) {
        return blank();
      }
    },
    set(s) {
      try {
        localStorage.setItem(KEY, JSON.stringify(s));
      } catch (e) {
        /* nabigatzaile pribatua: ez da ezer gordetzen */
      }
      window.dispatchEvent(new CustomEvent("mail:progress"));
    },
    saveItem(id, score, max, comp) {
      const s = this.get();
      s.items[id] = { score, max, comp, ts: Date.now() };
      this.set(s);
    },
    saveSim(id, data) {
      const s = this.get();
      s.sims[id] = Object.assign({ ts: Date.now() }, data);
      this.set(s);
    },
    saveExam(data) {
      const s = this.get();
      s.exams.unshift(Object.assign({ ts: Date.now() }, data));
      s.exams = s.exams.slice(0, 10);
      this.set(s);
    },
    reset() {
      try {
        localStorage.removeItem(KEY);
      } catch (e) {}
      window.dispatchEvent(new CustomEvent("mail:progress"));
    }
  };

  MAIL.progressByComp = function () {
    const s = MAIL.store.get();
    const out = {};
    MAIL.COMP_ORDER.forEach((c) => (out[c] = { score: 0, max: 0, done: 0, total: 0 }));
    const bank = MAIL.items || [];
    bank.forEach((it) => out[it.comp] && out[it.comp].total++);
    Object.keys(s.items).forEach((id) => {
      const r = s.items[id];
      if (r && out[r.comp]) {
        out[r.comp].score += r.score;
        out[r.comp].max += r.max;
        out[r.comp].done++;
      }
    });
    return out;
  };

  MAIL.renderProgress = function (host) {
    if (!host) return;
    const p = MAIL.progressByComp();
    host.innerHTML = MAIL.COMP_ORDER.map((c) => {
      const r = p[c];
      const pct = r.max ? Math.round((r.score / r.max) * 100) : 0;
      const info = MAIL.COMP[c];
      return `<div class="progress-cell">
        <span class="nm">${esc(info.short)}</span>
        <div class="meter" role="img" aria-label="${esc(info.short)}: %${pct}"><i style="width:${pct}%;background:${info.color}"></i></div>
        <span class="val">${r.done}/${r.total || "–"} ariketa · %${pct}</span>
      </div>`;
    }).join("");
  };

  /* ---------- Estimuluak ---------- */
  const AV_COLORS = ["#4d49a8", "#ff5571", "#12a9a4", "#e9a24f", "#c95fc1", "#3d9fd6", "#2e9e5e"];
  const avatar = (name, color) => {
    const initials = String(name || "?")
      .replace(/^@/, "")
      .split(/[\s_.]+/)
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
    const c = color || AV_COLORS[(name || "").length % AV_COLORS.length];
    return `<span class="avatar" style="background:${c}" aria-hidden="true">${esc(initials)}</span>`;
  };
  MAIL.avatar = avatar;

  const R = {
    post(s) {
      const media = s.media
        ? `<div class="post-media" style="background:${s.media.bg || "linear-gradient(135deg,#4d49a8,#18c3bd)"}">${s.media.text || ""}${
            s.media.label ? `<span class="media-label">${esc(s.media.label)}</span>` : ""
          }</div>`
        : "";
      const comments = (s.comments || []).length
        ? `<div class="post-comments">${s.comments.map((c) => `<p><b>${esc(c.who)}</b>${c.text}</p>`).join("")}</div>`
        : "";
      return `<div class="stim-frame post">
        <div class="post-head">${avatar(s.author, s.color)}<div class="who"><b>${esc(s.author)}${
        s.verified ? '<span class="verified" title="Egiaztatua">✓</span>' : ""
      }</b><span>${esc(s.handle || "")}${s.time ? " · " + esc(s.time) : ""}</span></div></div>
        ${s.sponsored ? `<div class="post-sponsored">${esc(s.sponsored)}</div>` : ""}
        <div class="post-body">${s.text || ""}</div>
        ${media}
        <div class="post-foot"><span>♥ ${esc(s.likes || "0")}</span><span>💬 ${esc(s.replies || "0")}</span><span>↻ ${esc(s.shares || "0")}</span></div>
        ${comments}
      </div>`;
    },
    email(s) {
      return `<div class="stim-frame">
        <div class="email-head">
          <div class="subj">${esc(s.subject)}</div>
          <div><b>${esc(s.fromName)}</b> <code>${esc(s.from)}</code></div>
          <span>Nori: ${esc(s.to || "zu")} · ${esc(s.time || "")}</span>
        </div>
        <div class="email-body">${s.body}</div>
      </div>`;
    },
    chat(s) {
      return `<div class="stim-frame chat">
        <div class="chat-title">${esc(s.title || "Txata")}<span>${esc(s.members || "")}</span></div>
        ${(s.messages || [])
          .map((m) => `<div class="bubble ${m.me ? "me" : ""} ${m.sys ? "sys" : ""}">${m.who && !m.sys ? `<b>${esc(m.who)}</b>` : ""}${m.text}</div>`)
          .join("")}
      </div>`;
    },
    search(s) {
      return `<div class="stim-frame serp">
        <div class="serp-q">🔍 <span>${esc(s.query)}</span></div>
        ${s.ai ? `<div class="ai-overview"><div class="h">✦ AA laburpena</div>${s.ai}</div>` : ""}
        ${(s.results || [])
          .map(
            (r, i) => `<div class="serp-r">
            <div class="url">${r.ad ? '<span class="ad">Babestua ·</span>' : ""}${esc(r.url)}</div>
            <div class="t">${r.letter ? `<b>${esc(r.letter)}.</b> ` : ""}${esc(r.title)}</div>
            <div class="d">${esc(r.desc)}</div>
          </div>`
          )
          .join("")}
      </div>`;
    },
    ai(s) {
      return `<div class="stim-frame ai-chat">
        ${(s.turns || [])
          .map((t) =>
            t.user
              ? `<div class="u">${t.user}</div>`
              : `<div class="a"><span class="logo">✦</span><div>${t.ai}</div></div>`
          )
          .join("")}
        <div class="disclaimer">${esc(s.disclaimer || "AAk akatsak egin ditzake. Egiaztatu informazio garrantzitsua.")}</div>
      </div>`;
    },
    article(s) {
      return `<div class="stim-frame article">
        <div class="outlet">${esc(s.outlet)}<small>${esc(s.section || "")}</small></div>
        <h4>${esc(s.headline)}</h4>
        <div class="byline">${esc(s.byline || "")}</div>
        ${s.body}
      </div>`;
    },
    dialog(s) {
      return `<div class="stim-frame dialog-stim">
        <h5>${esc(s.title)}</h5>
        ${s.body || ""}
        ${(s.perms || []).map((p) => `<div class="perm"><span>${esc(p[0])}</span><b>${esc(p[1])}</b></div>`).join("")}
        ${s.buttons ? `<div class="row">${s.buttons.map((b, i) => `<span class="fake-btn ${i === s.primary ? "primary" : ""}">${esc(b)}</span>`).join("")}</div>` : ""}
      </div>`;
    },
    chart(s) {
      return `<div class="stim-frame chart-stim">
        <h5>${esc(s.title)}</h5>
        ${MAIL.barChart(s)}
        ${s.source ? `<div class="src">Iturria: ${esc(s.source)}</div>` : ""}
      </div>`;
    },
    text(s) {
      return `<div class="stim-frame text-stim">${s.html}</div>`;
    }
  };

  MAIL.barChart = function (s) {
    const W = 460,
      H = 240,
      padL = 44,
      padB = 40,
      padT = 14;
    const min = s.yMin != null ? s.yMin : 0;
    const max = s.yMax != null ? s.yMax : Math.max(...s.bars.map((b) => b.v)) * 1.1;
    const n = s.bars.length;
    const bw = ((W - padL - 10) / n) * 0.62;
    const step = (W - padL - 10) / n;
    const y = (v) => padT + (H - padT - padB) * (1 - (v - min) / (max - min));
    const ticks = [];
    for (let k = 0; k <= 4; k++) ticks.push(min + ((max - min) * k) / 4);
    return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(s.title)}">
      ${ticks
        .map(
          (t) =>
            `<line x1="${padL}" x2="${W - 6}" y1="${y(t)}" y2="${y(t)}" stroke="#e6e3ef" stroke-width="1"/><text x="${padL - 6}" y="${
              y(t) + 4
            }" text-anchor="end" font-size="11" fill="#6b6a80">${Math.round(t * 10) / 10}${esc(s.unit || "")}</text>`
        )
        .join("")}
      ${s.bars
        .map((b, i) => {
          const x = padL + step * i + (step - bw) / 2;
          const top = y(b.v);
          return `<rect x="${x}" y="${top}" width="${bw}" height="${H - padB - top}" rx="4" fill="${b.c || "#123f50"}"/>
            <text x="${x + bw / 2}" y="${top - 5}" text-anchor="middle" font-size="12" font-weight="700" fill="#1c1b2e">${esc(b.v)}${esc(s.unit || "")}</text>
            <text x="${x + bw / 2}" y="${H - padB + 16}" text-anchor="middle" font-size="11" fill="#4b4a60">${esc(b.l)}</text>`;
        })
        .join("")}
      <line x1="${padL}" x2="${W - 6}" y1="${H - padB}" y2="${H - padB}" stroke="#1c1b2e" stroke-width="1.2"/>
    </svg>`;
  };

  MAIL.renderStimulus = function (s) {
    if (!s) return "";
    const list = Array.isArray(s) ? s : [s];
    return list
      .map((one) => {
        const fn = R[one.type];
        const cap = one.caption ? `<div class="stim-cap">${esc(one.caption)}</div>` : "";
        return `<div class="stim">${cap}${fn ? fn(one) : ""}</div>`;
      })
      .join("");
  };

  /* ---------- Ariketa-motorra ---------- */
  function levelBars(n) {
    return `<span class="item-level" title="Maila: ${MAIL.LEVEL[n]}" aria-label="Maila: ${MAIL.LEVEL[n]}"><i class="${n >= 1 ? "on" : ""}"></i><i class="${
      n >= 2 ? "on" : ""
    }"></i><i class="${n >= 3 ? "on" : ""}"></i></span>`;
  }

  MAIL.renderItem = function (host, item, opts) {
    opts = opts || {};
    const comp = MAIL.COMP[item.comp];
    const hasStim = !!item.stimulus;
    const el = document.createElement("article");
    el.className = "item";
    el.id = "item-" + item.id;
    el.dataset.comp = item.comp;
    el.innerHTML = `
      <header class="item-head">
        <div class="left">
          <span class="chip" data-c="${item.comp}">${esc(comp.short)}</span>
          ${item.context ? `<span class="chip plain">${esc(MAIL.CONTEXT[item.context] || item.context)}</span>` : ""}
          <span class="chip plain">${esc(MAIL.TYPE_LABEL[item.type])}</span>
        </div>
        <div class="left">${levelBars(item.level || 1)}<span class="item-code">${esc(item.code || item.id)}</span></div>
      </header>
      <div class="item-body ${hasStim ? "" : "single-col"}">
        ${hasStim ? `<div class="item-stim">${MAIL.renderStimulus(item.stimulus)}</div>` : ""}
        <div class="item-task">
          ${item.scenario ? `<p class="item-scenario">${item.scenario}</p>` : ""}
          <h3 class="item-q">${item.q}</h3>
          ${item.hint ? `<p class="item-hint">${item.hint}</p>` : ""}
          <div class="item-answer"></div>
          <div class="item-feedback" role="status" aria-live="polite"></div>
          <div class="item-actions">
            <button type="button" class="btn btn-dark btn-sm js-check">Egiaztatu</button>
            <button type="button" class="btn btn-ghost btn-sm js-retry" hidden>Berriro saiatu</button>
          </div>
        </div>
      </div>`;
    host.appendChild(el);

    const ans = el.querySelector(".item-answer");
    const fb = el.querySelector(".item-feedback");
    const btnCheck = el.querySelector(".js-check");
    const btnRetry = el.querySelector(".js-retry");
    const T = TYPES[item.type];
    const state = T.mount(ans, item, el);

    function finish(result) {
      el.classList.add("done");
      const pct = result.max ? result.score / result.max : 0;
      const cls = pct >= 0.99 ? "good" : pct >= 0.5 ? "part" : "bad";
      const title = pct >= 0.99 ? "Bikain!" : pct >= 0.5 ? "Ia-ia" : "Ez oraingoan";
      fb.className = "item-feedback " + cls;
      fb.innerHTML = `<b>${title} · ${result.score}/${result.max}</b>${item.explain ? `<p>${item.explain}</p>` : ""}${
        item.tip ? `<p class="tip">${item.tip}</p>` : ""
      }`;
      btnCheck.hidden = true;
      if (!opts.exam) btnRetry.hidden = false;
      MAIL.store.saveItem(item.id, result.score, result.max, item.comp);
      if (opts.onDone) opts.onDone(result, item);
    }

    btnCheck.addEventListener("click", () => {
      const r = T.check(state, item, el);
      if (r === null) {
        MAIL.toast("Erantzun lehenik ariketa");
        return;
      }
      if (r && r.pending) return; // erantzun irekia: bi urrats
      finish(r);
    });

    btnRetry.addEventListener("click", () => {
      const fresh = document.createElement("div");
      host.replaceChild(fresh, el);
      MAIL.renderItem(host, item, opts);
      host.replaceChild(host.lastElementChild, fresh);
    });

    if (item.type === "open") state.finish = finish;
    el._api = { check: () => btnCheck.click(), state };
    return el;
  };

  const TYPES = {
    single: {
      mount(host, item) {
        const order = item.keepOrder ? item.options.map((_, i) => i) : MAIL.shuffle(item.options.map((_, i) => i));
        host.innerHTML = `<div class="opts" role="radiogroup">${order
          .map(
            (i, k) => `<button type="button" class="opt" role="radio" aria-checked="false" data-i="${i}"><span class="mark">${"ABCDEFG"[k]}</span><span>${
              item.options[i].t
            }</span></button>${item.options[i].why ? `<p class="opt-why" data-for="${i}">${item.options[i].why}</p>` : ""}`
          )
          .join("")}</div>`;
        const st = { sel: null };
        host.querySelectorAll(".opt").forEach((b) =>
          b.addEventListener("click", () => {
            if (b.disabled) return;
            host.querySelectorAll(".opt").forEach((x) => {
              x.classList.remove("sel");
              x.setAttribute("aria-checked", "false");
            });
            b.classList.add("sel");
            b.setAttribute("aria-checked", "true");
            st.sel = +b.dataset.i;
          })
        );
        st.host = host;
        return st;
      },
      check(st, item) {
        if (st.sel === null) return null;
        const ok = !!item.options[st.sel].ok;
        st.host.querySelectorAll(".opt").forEach((b) => {
          b.disabled = true;
          const i = +b.dataset.i;
          b.classList.remove("sel");
          if (item.options[i].ok) b.classList.add("right");
          else if (i === st.sel) b.classList.add("wrong");
        });
        return { score: ok ? item.points || 1 : 0, max: item.points || 1 };
      }
    },

    multi: {
      mount(host, item) {
        const order = MAIL.shuffle(item.options.map((_, i) => i));
        host.innerHTML = `<div class="opts">${order
          .map(
            (i) => `<button type="button" class="opt multi" role="checkbox" aria-checked="false" data-i="${i}"><span class="mark">✓</span><span>${
              item.options[i].t
            }</span></button>${item.options[i].why ? `<p class="opt-why">${item.options[i].why}</p>` : ""}`
          )
          .join("")}</div>`;
        const st = { sel: new Set(), host };
        host.querySelectorAll(".opt").forEach((b) =>
          b.addEventListener("click", () => {
            if (b.disabled) return;
            const i = +b.dataset.i;
            if (st.sel.has(i)) st.sel.delete(i);
            else st.sel.add(i);
            b.classList.toggle("sel", st.sel.has(i));
            b.setAttribute("aria-checked", st.sel.has(i) ? "true" : "false");
          })
        );
        return st;
      },
      check(st, item) {
        if (!st.sel.size) return null;
        let hits = 0,
          falses = 0;
        const nOk = item.options.filter((o) => o.ok).length;
        st.host.querySelectorAll(".opt").forEach((b) => {
          b.disabled = true;
          const i = +b.dataset.i;
          const o = item.options[i];
          b.classList.remove("sel");
          if (st.sel.has(i) && o.ok) {
            b.classList.add("right");
            hits++;
          } else if (st.sel.has(i) && !o.ok) {
            b.classList.add("wrong");
            falses++;
          } else if (!st.sel.has(i) && o.ok) b.classList.add("missed");
        });
        const max = 2;
        const raw = (hits - falses) / nOk;
        const score = raw >= 0.999 ? 2 : raw >= 0.5 ? 1 : 0;
        return { score, max };
      }
    },

    classify: {
      mount(host, item) {
        const rows = item.keepOrder ? item.rows : MAIL.shuffle(item.rows);
        host.innerHTML = `<div class="classify">${rows
          .map(
            (r, k) => `<div class="classify-row" data-k="${item.rows.indexOf(r)}">
            <div class="txt">${r.t}${r.sub ? `<small>${r.sub}</small>` : ""}</div>
            <div class="seg" role="radiogroup" aria-label="Sailkapena">${item.cats
              .map((c, ci) => `<button type="button" role="radio" aria-checked="false" data-ci="${ci}">${esc(c)}</button>`)
              .join("")}</div>
            ${r.why ? `<div class="why">${r.why}</div>` : ""}
          </div>`
          )
          .join("")}</div>`;
        const st = { sel: {}, host };
        host.querySelectorAll(".classify-row").forEach((row) => {
          const k = +row.dataset.k;
          row.querySelectorAll("button").forEach((b) =>
            b.addEventListener("click", () => {
              if (b.disabled) return;
              row.querySelectorAll("button").forEach((x) => {
                x.classList.remove("sel");
                x.setAttribute("aria-checked", "false");
              });
              b.classList.add("sel");
              b.setAttribute("aria-checked", "true");
              st.sel[k] = +b.dataset.ci;
            })
          );
        });
        return st;
      },
      check(st, item) {
        if (Object.keys(st.sel).length < item.rows.length) return null;
        let hits = 0;
        st.host.querySelectorAll(".classify-row").forEach((row) => {
          const k = +row.dataset.k;
          const right = item.rows[k].c;
          row.querySelectorAll("button").forEach((b) => {
            b.disabled = true;
            const ci = +b.dataset.ci;
            b.classList.remove("sel");
            if (ci === st.sel[k] && ci === right) b.classList.add("right");
            else if (ci === st.sel[k]) b.classList.add("wrong");
            else if (ci === right) b.classList.add("missed");
          });
          if (st.sel[k] === right) hits++;
        });
        const n = item.rows.length;
        const score = hits === n ? 2 : hits >= Math.ceil(n * 0.6) ? 1 : 0;
        return { score, max: 2 };
      }
    },

    match: {
      mount(host, item) {
        const choices = MAIL.shuffle([...new Set(item.pairs.map((p) => p.b))]);
        host.innerHTML = item.pairs
          .map(
            (p, i) => `<div class="match-row" data-i="${i}" style="margin-bottom:.45rem">
            <div>${p.a}</div>
            <select aria-label="Aukeratu lotura"><option value="">— aukeratu —</option>${choices
              .map((c) => `<option value="${esc(c)}">${esc(c)}</option>`)
              .join("")}</select>
            <div class="fix">✓ ${esc(p.b)}</div>
          </div>`
          )
          .join("");
        return { host };
      },
      check(st, item) {
        const rows = st.host.querySelectorAll(".match-row");
        const vals = [...rows].map((r) => r.querySelector("select").value);
        if (vals.some((v) => !v)) return null;
        let hits = 0;
        rows.forEach((r, i) => {
          const ok = vals[i] === item.pairs[i].b;
          r.classList.add(ok ? "right" : "wrong");
          r.querySelector("select").disabled = true;
          if (ok) hits++;
        });
        const n = item.pairs.length;
        return { score: hits === n ? 2 : hits >= Math.ceil(n * 0.6) ? 1 : 0, max: 2 };
      }
    },

    order: {
      mount(host, item) {
        let cur = MAIL.shuffle(item.steps.map((_, i) => i));
        if (cur.every((v, i) => v === i)) cur = cur.reverse();
        const st = { cur, host };
        const draw = () => {
          host.innerHTML = `<ol class="order-list">${st.cur
            .map(
              (i, pos) => `<li class="order-item" data-i="${i}"><span class="pos">${pos + 1}</span><span>${item.steps[i]}</span>
              <span class="mv"><button type="button" aria-label="Gora" data-d="-1" ${pos === 0 ? "disabled" : ""}>↑</button><button type="button" aria-label="Behera" data-d="1" ${
                pos === st.cur.length - 1 ? "disabled" : ""
              }>↓</button></span></li>`
            )
            .join("")}</ol>`;
          host.querySelectorAll(".mv button").forEach((b) =>
            b.addEventListener("click", () => {
              if (st.locked) return;
              const li = b.closest(".order-item");
              const pos = [...host.querySelectorAll(".order-item")].indexOf(li);
              const np = pos + +b.dataset.d;
              [st.cur[pos], st.cur[np]] = [st.cur[np], st.cur[pos]];
              draw();
              const moved = host.querySelectorAll(".order-item")[np];
              if (moved) moved.querySelector(`button[data-d="${b.dataset.d}"]`)?.focus();
            })
          );
        };
        st.draw = draw;
        draw();
        return st;
      },
      check(st, item) {
        st.locked = true;
        let hits = 0;
        st.host.querySelectorAll(".order-item").forEach((li, pos) => {
          const ok = +li.dataset.i === pos;
          li.classList.add(ok ? "right" : "wrong");
          li.querySelectorAll("button").forEach((b) => (b.disabled = true));
          if (ok) hits++;
        });
        const n = item.steps.length;
        return { score: hits === n ? 2 : hits >= Math.ceil(n * 0.5) ? 1 : 0, max: 2 };
      }
    },

    highlight: {
      mount(host, item) {
        // item.segments: [{t:"testua", k:true|false}]
        host.innerHTML = `<div class="hl-text">${item.segments
          .map((s, i) => `<span class="hl-seg ${s.k ? "target" : "plain"}" data-i="${i}" role="button" tabindex="0" aria-pressed="false">${s.t}</span>`)
          .join(" ")}</div>`;
        const st = { sel: new Set(), host };
        host.querySelectorAll(".hl-seg").forEach((sp) => {
          const toggle = () => {
            if (st.locked) return;
            const i = +sp.dataset.i;
            if (st.sel.has(i)) st.sel.delete(i);
            else st.sel.add(i);
            sp.classList.toggle("sel", st.sel.has(i));
            sp.setAttribute("aria-pressed", st.sel.has(i) ? "true" : "false");
          };
          sp.addEventListener("click", toggle);
          sp.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggle();
            }
          });
        });
        return st;
      },
      check(st, item) {
        if (!st.sel.size) return null;
        st.locked = true;
        let hits = 0,
          falses = 0;
        const nT = item.segments.filter((s) => s.k).length;
        st.host.querySelectorAll(".hl-seg").forEach((sp) => {
          const i = +sp.dataset.i;
          const k = item.segments[i].k;
          sp.classList.remove("sel");
          if (st.sel.has(i) && k) {
            sp.classList.add("right");
            hits++;
          } else if (st.sel.has(i) && !k) {
            sp.classList.add("wrong");
            falses++;
          } else if (k) sp.classList.add("missed");
          sp.removeAttribute("tabindex");
        });
        const raw = (hits - falses) / nT;
        return { score: raw >= 0.999 ? 2 : raw >= 0.5 ? 1 : 0, max: 2 };
      }
    },

    open: {
      mount(host, item, el) {
        host.innerHTML = `<div class="open-area">
          <label class="sr-only" for="ta-${item.id}">Zure erantzuna</label>
          <textarea id="ta-${item.id}" placeholder="${esc(item.placeholder || "Idatzi zure erantzuna hemen…")}"></textarea>
          <div class="counter">0 hitz</div>
        </div>
        <div class="rubric">
          <div class="model"><b>Eredu-erantzuna</b>${item.model}</div>
          <p style="font-size:.88rem;color:var(--ink-soft);margin:.3rem 0 0">Autoebaluazioa: markatu zure erantzunak betetzen dituen irizpideak.</p>
          ${item.criteria.map((c, i) => `<label><input type="checkbox" data-i="${i}"> <span>${c}</span></label>`).join("")}
        </div>`;
        const ta = host.querySelector("textarea");
        const ctr = host.querySelector(".counter");
        ta.addEventListener("input", () => {
          const n = (ta.value.trim().match(/\S+/g) || []).length;
          ctr.textContent = n + " hitz";
        });
        return { host, el, phase: 0, ta };
      },
      check(st, item, el) {
        if (st.phase === 0) {
          if (st.ta.value.trim().length < 15) return null;
          st.phase = 1;
          st.ta.readOnly = true;
          el.classList.add("revealed");
          const btn = el.querySelector(".js-check");
          btn.textContent = "Gorde autoebaluazioa";
          return { pending: true };
        }
        const checked = st.host.querySelectorAll(".rubric input:checked").length;
        const n = item.criteria.length;
        st.host.querySelectorAll(".rubric input").forEach((i) => (i.disabled = true));
        const score = checked === n ? 2 : checked >= Math.ceil(n / 2) ? 1 : 0;
        return { score, max: 2 };
      }
    }
  };

  MAIL.renderItems = function (host, items, opts) {
    if (!host) return;
    host.innerHTML = "";
    items.forEach((it) => MAIL.renderItem(host, it, opts));
  };

  /* ---------- Orriaren oinarrizko portaera ---------- */
  function setupNav() {
    const toggle = document.getElementById("navToggle");
    const nav = document.getElementById("siteNav");
    if (toggle && nav) {
      toggle.setAttribute("aria-expanded", "false");
      toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
    const sub = document.querySelector(".pisa-subnav nav");
    if (sub) {
      const here = location.pathname.split("/").pop() || "index.html";
      sub.querySelectorAll("a").forEach((a) => {
        const href = a.getAttribute("href");
        if (href === here || (here === "" && href === "index.html")) {
          a.classList.add("active");
          a.setAttribute("aria-current", "page");
          requestAnimationFrame(() => a.scrollIntoView({ inline: "center", block: "nearest" }));
        }
      });
    }
  }

  function setupReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("active"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("active");
            io.unobserve(en.target);
          }
        }),
      { rootMargin: "0px 0px -40px 0px", threshold: 0.08 }
    );
    els.forEach((e) => io.observe(e));
  }

  function setupTabs() {
    document.querySelectorAll("[data-tabs]").forEach((wrap) => {
      const tabs = wrap.querySelectorAll(".p-tab");
      tabs.forEach((t) =>
        t.addEventListener("click", () => {
          tabs.forEach((x) => {
            x.classList.toggle("active", x === t);
            x.setAttribute("aria-selected", x === t ? "true" : "false");
          });
          const scope = wrap.closest("[data-tabs-scope]") || document;
          scope.querySelectorAll(".p-panel").forEach((p) => p.classList.toggle("active", p.id === t.dataset.panel));
        })
      );
    });
  }

  function setupToc() {
    const toc = document.querySelector(".comp-toc ol");
    if (!toc || !("IntersectionObserver" in window)) return;
    const links = [...toc.querySelectorAll("a")];
    const map = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            links.forEach((l) => l.classList.remove("on"));
            const a = map.get(en.target.id);
            if (a) a.classList.add("on");
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    map.forEach((_, id) => {
      const s = document.getElementById(id);
      if (s) io.observe(s);
    });
  }

  function setupCountdown() {
    document.querySelectorAll("[data-countdown]").forEach((el) => {
      const target = new Date(el.dataset.countdown);
      const days = Math.max(0, Math.ceil((target - new Date()) / 86400000));
      el.textContent = days.toLocaleString("eu-ES");
    });
  }

  MAIL.initItemHosts = function () {
    document.querySelectorAll("[data-items]").forEach((host) => {
      if (!MAIL.items) return;
      const ids = host.dataset.items.split(",").map((s) => s.trim());
      const list = ids.map((id) => MAIL.items.find((i) => i.id === id)).filter(Boolean);
      MAIL.renderItems(host, list);
    });
    document.querySelectorAll("[data-items-comp]").forEach((host) => {
      if (!MAIL.items) return;
      const c = host.dataset.itemsComp;
      const exclude = (host.dataset.exclude || "").split(",");
      const list = MAIL.items.filter((i) => i.comp === c && !exclude.includes(i.id)).sort((a, b) => a.level - b.level);
      MAIL.renderItems(host, list);
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    setupNav();
    setupReveal();
    setupTabs();
    setupToc();
    setupCountdown();
    MAIL.initItemHosts();
    document.querySelectorAll("[data-progress]").forEach((h) => MAIL.renderProgress(h));
    window.addEventListener("mail:progress", () => document.querySelectorAll("[data-progress]").forEach((h) => MAIL.renderProgress(h)));
    document.querySelectorAll("[data-reset-progress]").forEach((b) =>
      b.addEventListener("click", () => {
        MAIL.store.reset();
        MAIL.toast("Aurrerapena ezabatu da");
      })
    );
    const y = document.querySelector("[data-year]");
    if (y) y.textContent = new Date().getFullYear();
  });
})();
