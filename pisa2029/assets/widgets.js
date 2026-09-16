/* ==========================================================================
   PISA 2029 · MAIL — simulagailu txikiak (widgetak)
   Erabilera: <div data-widget="feed|gchat|privacy|declutter|editor"></div>
   ========================================================================== */
(function () {
  "use strict";
  const esc = (s) => (window.MAIL ? MAIL.esc(s) : String(s));
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const W = {};

  /* ======================================================================
     1. JARIO ALGORITMIKOA (Eskuratu eta erabili · Etika)
     ====================================================================== */
  const TOPICS = {
    kirola: { l: "Kirola", e: "⚽", c: "#12a9a4" },
    musika: { l: "Musika", e: "🎵", c: "#c95fc1" },
    zientzia: { l: "Zientzia", e: "🔬", c: "#3d9fd6" },
    jokoak: { l: "Bideojokoak", e: "🎮", c: "#4d49a8" },
    moda: { l: "Moda", e: "👟", c: "#e9a24f" },
    gizartea: { l: "Gizartea", e: "🗳️", c: "#ff5571" },
    animaliak: { l: "Animaliak", e: "🐶", c: "#2e9e5e" }
  };
  const POSTS = [
    ["kirola", 0, "@herriko_harrobia", "Gure kadeteek 3-1 irabazi dute gaur! Zorionak taldeari 👏"],
    ["kirola", 0, "@txirrindulari_gaztea", "40 km gaur Urdaibaitik. Paisaia ikusgarria 🚴"],
    ["kirola", 1, "@kirol_datuak", "Bihar derbia: bi taldeen azken 5 partidak, datuetan 📊"],
    ["kirola", 2, "@futbol_haserre", "EPAILEA LOTSAGARRIA!!! Ikusi zer egin duen 😡😡 Partekatu!"],
    ["kirola", 2, "@kirol_eskandalua", "Jokalari honek ez du inoiz berriro jokatuko… 😱 ez duzu sinetsiko zergatik"],
    ["musika", 0, "@musika_eskola", "Kontzertua larunbatean udaletxeko plazan 🎻 Sarrera librea"],
    ["musika", 1, "@top_abestiak", "Asteko 10 abesti entzunenak. Zein da zure gogokoena?"],
    ["musika", 0, "@gitarra_tutoriala", "3 akorde, 10 abesti. Hasiberrientzako gida 🎸"],
    ["musika", 2, "@musika_drama", "Abeslari famatuak ESKANDALUA sortu du kontzertuan 😡 bideo osoa"],
    ["musika", 1, "@bertso_gazteak", "Gaurko bertso-saioaren pasarterik onena 😂🎤"],
    ["zientzia", 0, "@zientzia_kaiera", "Zergatik da urdina zerua? 60 segundotan azalduta 🔬"],
    ["zientzia", 1, "@espazio_berriak", "Teleskopio batek planeta berri bat aurkitu du 📡"],
    ["zientzia", 0, "@itsaso_biologia", "Kantauriko izurdeak: nola bereizi espezieak 🐬"],
    ["zientzia", 2, "@egia_ezkutua", "ZIENTZIALARIEK EZKUTATZEN DUTENA: ilargira ez gara inoiz joan 😱"],
    ["zientzia", 1, "@osasun_datuak", "Loaren garrantzia nerabezaroan: ikerketa berria 😴"],
    ["jokoak", 0, "@indie_jokoak", "Euskarazko joko independente berria kaleratu dute 🎮"],
    ["jokoak", 1, "@gamer_tips", "Maila hau 5 minututan gainditzeko trikimailua"],
    ["jokoak", 2, "@gamer_haserre", "Konpainia honek GEZURRA esan digu denoi 😡 BOIKOTA orain!"],
    ["jokoak", 1, "@esport_eus", "Finala zuzenean gaur 20:00etan 🏆"],
    ["jokoak", 2, "@joko_drama", "Streamer ospetsua kanporatua?! 😱 Ez duzu sinetsiko…"],
    ["moda", 0, "@bigarren_eskua", "Arropa-trukea institutuan ostiralean ♻️"],
    ["moda", 1, "@zapatila_berriak", "Asteko zapatila-kaleratzeak 👟"],
    ["moda", 2, "@estilo_polizia", "ARROPA HAU JANTZITA? Barregarri geratzen zara 😂 ez egin akats hau"],
    ["moda", 1, "@diy_moda", "Kamiseta zahar bat poltsa bihurtu 10 minututan ✂️"],
    ["moda", 2, "@moda_eskandalua", "Marka honek zu engainatzen zaitu!!! Ikusi frogak 😡"],
    ["gizartea", 0, "@udal_berriak", "Liburutegiak ordutegi berria du azterketa-garaian 📚"],
    ["gizartea", 1, "@gazte_kontseilua", "Inkesta: zer behar du gazteguneak? Eman zure iritzia"],
    ["gizartea", 2, "@haserre_kanala", "HAUEK DIRA ERRUDUNAK!!! 😡😡 Ez dizute telebistan kontatuko"],
    ["gizartea", 2, "@alarma_berriak", "ALERTA: bihar dena itxiko dute?! 😱 Zabaldu!"],
    ["gizartea", 0, "@auzo_elkartea", "Auzoko festetarako boluntarioak behar ditugu 🙌"],
    ["animaliak", 0, "@animalia_babeslekua", "Katu hau adopziorako prest dago 🐱"],
    ["animaliak", 0, "@txakur_barregarriak", "Txakur honek ez du bainua gustuko 😂🐶"],
    ["animaliak", 1, "@basoko_bizitza", "Hartz bat ikusi dute Pirinioetan 🐻 bideoa"],
    ["animaliak", 2, "@animalia_haserre", "BIHOTZ GABEKOAK!!! Ikusi zer egin dioten 😡"],
    ["animaliak", 0, "@hegazti_behatzaileak", "Urdaibaiko hegazti migratzaileak iritsi dira 🦆"]
  ].map((p, i) => ({ id: i, t: p[0], i: p[1], a: p[2], x: p[3] }));

  W.feed = function (host) {
    const S = {
      mode: "algo",
      w: {},
      pref: 0,
      eng: {},
      shown: [],
      seen: new Set(),
      n: 0,
      why: false
    };
    Object.keys(TOPICS).forEach((k) => {
      S.w[k] = 1;
      S.eng[k] = 0;
    });

    host.innerHTML = `
      <div class="widget">
        <div class="widget-head"><h3>📱 Jario-simulagailua: nork aukeratzen du zer ikusten duzun?</h3><span class="badge">Eskuratu · Etika</span></div>
        <div class="widget-body">
          <div class="feed-sim">
            <div>
              <div class="phone">
                <div class="phone-top"><span>Zuretzat</span><span style="font-weight:500;font-size:.8rem;color:#6b6a80" data-mode-label>Algoritmikoa</span></div>
                <div class="phone-feed" data-feed aria-live="polite"></div>
              </div>
              <div style="display:flex;gap:.5rem;justify-content:center;margin-top:.8rem;flex-wrap:wrap">
                <button class="btn btn-ghost btn-sm" type="button" data-scroll>Korritu ↓ (ez elkarreragin)</button>
              </div>
            </div>
            <div class="feed-panel">
              <div class="feed-stat">
                <h4>Jario mota</h4>
                <div class="seg" role="radiogroup" aria-label="Jario mota">
                  <button type="button" class="sel" data-mode="algo" role="radio" aria-checked="true">Algoritmikoa</button>
                  <button type="button" data-mode="chrono" role="radio" aria-checked="false">Kronologikoa</button>
                </div>
              </div>
              <div class="feed-stat">
                <h4>Azken 10 argitalpenak, gaiaren arabera</h4>
                <div class="topic-bars" data-bars></div>
              </div>
              <div class="feed-stat">
                <h4>Aniztasuna</h4>
                <div style="display:flex;justify-content:space-between;align-items:baseline"><b style="font-family:var(--font-display);font-size:1.8rem" data-div>100</b><span style="font-size:.8rem;color:var(--ink-mute)">/ 100</span></div>
                <div class="meter" style="margin-top:.3rem"><i data-div-bar style="width:100%;background:var(--c-sarbidea)"></i></div>
              </div>
              <div class="feed-stat">
                <h4>Tentsio emozionala</h4>
                <div class="gauge"><i data-gauge style="left:0%"></i></div>
                <div style="display:flex;justify-content:space-between;font-size:.75rem;color:var(--ink-mute);margin-top:.35rem"><span>Lasaia</span><span>Haserrea / beldurra</span></div>
              </div>
              <label style="display:flex;gap:.5rem;align-items:center;font-size:.9rem;font-weight:600"><input type="checkbox" data-why style="accent-color:var(--ink);width:18px;height:18px"> Erakutsi «Zergatik ikusten dut hau?»</label>
              <div class="note" data-reflect hidden>
                <strong>Gelditu eta hausnartu 🤔</strong>
                <p>Zer gertatu da zure jarioarekin? Gai gutxi batzuk nagusitu dira? Emozio biziko edukiak gehiago agertzen dira? Aldatu <b>kronologiko</b> modura eta alderatu. Zein da aukera ona informatuta egoteko?</p>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;gap:.5rem">
                <span style="font-size:.85rem;color:var(--ink-mute)">Elkarreraginak: <b data-n>0</b></span>
                <button class="btn btn-ghost btn-sm" type="button" data-reset>Berrezarri</button>
              </div>
            </div>
          </div>
        </div>
        <div class="widget-foot"><span style="font-size:.88rem;color:var(--ink-soft)">Erabili botoiak argitalpenetan (❤️ ⏱️ ↻ 🚫) eta ikusi nola aldatzen den jarioa. Algoritmo sinplifikatua da, baina benetakoen logika bera du: <b>elkarreragina saritzen du</b>.</span></div>
      </div>`;

    const feed = host.querySelector("[data-feed]");

    function pick() {
      let pool = POSTS.filter((p) => !S.seen.has(p.id));
      if (pool.length < 4) {
        const keep = new Set(S.shown.slice(-6).map((p) => p.id));
        S.seen = keep;
        pool = POSTS.filter((p) => !keep.has(p.id));
      }
      if (S.mode === "chrono") return pool[Math.floor(Math.random() * pool.length)];
      const scores = pool.map((p) => Math.pow(S.w[p.t], 1.8) * (1 + S.pref * p.i));
      const tot = scores.reduce((a, b) => a + b, 0);
      let r = Math.random() * tot;
      for (let k = 0; k < pool.length; k++) {
        r -= scores[k];
        if (r <= 0) return pool[k];
      }
      return pool[pool.length - 1];
    }

    function whyText(p) {
      if (S.mode === "chrono") return "Jarraitzen dituzun kontuen argitalpena, ordena kronologikoan. Ez da zure portaeran oinarritzen.";
      const parts = [];
      if (S.eng[p.t] > 0) parts.push(`${TOPICS[p.t].l} gaiarekin ${S.eng[p.t]} aldiz elkarreragin duzulako`);
      if (p.i === 2 && S.pref > 0.6) parts.push("emozio biziko edukiekin gehiago elkarreragiten duzulako");
      if (!parts.length) parts.push("zure adineko erabiltzaile askok ikusi dutelako (ospea)");
      return "Gomendatua: " + parts.join(" eta ") + ".";
    }

    function addPost() {
      const p = pick();
      S.seen.add(p.id);
      S.shown.push(p);
      const T = TOPICS[p.t];
      const card = document.createElement("article");
      card.className = "feed-card" + (S.why ? " show-why" : "");
      card.innerHTML = `
        <div class="fc-media" style="background:${T.c}22">${T.e}</div>
        <div class="fc-body"><small>${esc(p.a)} · ${esc(T.l)}</small>${esc(p.x)}</div>
        <div class="fc-actions">
          <button type="button" data-act="like" aria-label="Atsegin">❤️</button>
          <button type="button" data-act="watch" aria-label="Osorik ikusi">⏱️ Osorik</button>
          <button type="button" data-act="share" aria-label="Partekatu">↻</button>
          <button type="button" data-act="hide" aria-label="Ez zait interesatzen">🚫</button>
        </div>
        <div class="fc-why">🔍 ${esc(whyText(p))}</div>`;
      card.querySelectorAll("[data-act]").forEach((b) =>
        b.addEventListener("click", () => {
          if (b.classList.contains("on")) return;
          b.classList.add("on");
          act(p, b.dataset.act);
        })
      );
      feed.appendChild(card);
      feed.scrollTo({ top: feed.scrollHeight, behavior: "smooth" });
      update();
    }

    function act(p, a) {
      S.n++;
      if (a === "like") {
        S.w[p.t] += 1.2;
        S.pref += 0.35 * p.i - 0.08;
        S.eng[p.t]++;
      } else if (a === "watch") {
        S.w[p.t] += 0.6;
        S.pref += 0.2 * p.i;
        S.eng[p.t]++;
      } else if (a === "share") {
        S.w[p.t] += 1.8;
        S.pref += 0.5 * p.i;
        S.eng[p.t]++;
      } else if (a === "hide") {
        S.w[p.t] = Math.max(0.2, S.w[p.t] * 0.5);
        S.pref -= 0.25 * p.i;
      }
      S.pref = clamp(S.pref, 0, 3);
      addPost();
    }

    function update() {
      const last = S.shown.slice(-10);
      const counts = {};
      Object.keys(TOPICS).forEach((k) => (counts[k] = 0));
      last.forEach((p) => counts[p.t]++);
      host.querySelector("[data-bars]").innerHTML = Object.keys(TOPICS)
        .map((k) => {
          const pct = last.length ? Math.round((counts[k] / last.length) * 100) : 0;
          return `<div class="topic-bar"><span>${TOPICS[k].e} ${TOPICS[k].l}</span><span class="tb"><i style="width:${pct}%;background:${TOPICS[k].c}"></i></span><span style="text-align:right;font-family:var(--font-mono)">${pct}%</span></div>`;
        })
        .join("");
      let H = 0;
      Object.values(counts).forEach((c) => {
        if (c && last.length) {
          const q = c / last.length;
          H -= q * Math.log(q);
        }
      });
      const maxH = Math.log(Math.min(7, Math.max(1, last.length)));
      const div = last.length > 1 && maxH > 0 ? Math.round((H / maxH) * 100) : 100;
      host.querySelector("[data-div]").textContent = div;
      const bar = host.querySelector("[data-div-bar]");
      bar.style.width = div + "%";
      bar.style.background = div < 45 ? "var(--bad)" : div < 70 ? "var(--warn)" : "var(--ok)";
      const avgI = last.length ? last.reduce((a, p) => a + p.i, 0) / last.length : 0;
      host.querySelector("[data-gauge]").style.left = `calc(${(avgI / 2) * 100}% - 2px)`;
      host.querySelector("[data-n]").textContent = S.n;
      host.querySelector("[data-reflect]").hidden = S.n < 12;
    }

    host.querySelectorAll("[data-mode]").forEach((b) =>
      b.addEventListener("click", () => {
        S.mode = b.dataset.mode;
        host.querySelectorAll("[data-mode]").forEach((x) => {
          x.classList.toggle("sel", x === b);
          x.setAttribute("aria-checked", x === b ? "true" : "false");
        });
        host.querySelector("[data-mode-label]").textContent = S.mode === "algo" ? "Algoritmikoa" : "Kronologikoa";
        addPost();
      })
    );
    host.querySelector("[data-scroll]").addEventListener("click", () => {
      const lastP = S.shown[S.shown.length - 1];
      if (lastP) S.w[lastP.t] = Math.max(0.2, S.w[lastP.t] * 0.9);
      addPost();
    });
    host.querySelector("[data-why]").addEventListener("change", (e) => {
      S.why = e.target.checked;
      feed.querySelectorAll(".feed-card").forEach((c) => c.classList.toggle("show-why", S.why));
    });
    host.querySelector("[data-reset]").addEventListener("click", () => {
      Object.keys(TOPICS).forEach((k) => {
        S.w[k] = 1;
        S.eng[k] = 0;
      });
      S.pref = 0;
      S.shown = [];
      S.seen = new Set();
      S.n = 0;
      feed.innerHTML = "";
      for (let k = 0; k < 3; k++) addPost();
    });
    for (let k = 0; k < 3; k++) addPost();
  };

  /* ======================================================================
     2. TALDE-TXATA ADARKATUA (Parte hartu eta elkarlanean aritu)
     ====================================================================== */
  const PEOPLE = { Ane: "#ff5571", Unai: "#3d9fd6", Maddi: "#12a9a4" };
  const METERS = [
    ["giro", "Giroa", "#c95fc1"],
    ["lank", "Lankidetza", "#e9a24f"],
    ["zin", "Zintzotasuna", "#12a9a4"],
    ["zeh", "Zehaztasuna", "#3d9fd6"]
  ];
  const NODES = {
    start: {
      msgs: [
        ["Ane", "Kaixo! Ostiralean entregatu behar dugu Gernikako bonbardaketari buruzko aurkezpena eta ia ez dugu ezer 😩"],
        ["Maddi", "Nik nire zatia igo nuen asteartean dokumentura 📎 (testuingurua eta mapa)"],
        ["Unai", "Lasai jende, AAri eskatuko diot dena egiteko eta listo 😎 5 minutu"]
      ],
      choices: [
        { t: "Itxaron! Maddik bere zatia eginda dauka. Banatu dezagun gainerakoa: nik lekukotasunak, Anek iturriak, Unaik ondorioak. AA laguntzeko erabiltzen badugu, adierazi egingo dugu.", d: { lank: 2, zin: 2, giro: 1 }, go: "n1" },
        { t: "Ados Unai, egin dena AArekin, nik ez daukat denborarik aste honetan.", d: { zin: -2, lank: -1 }, go: "n2" },
        { t: "Unai, beti berdin… alferra zara 🙄", d: { giro: -3 }, go: "n3" }
      ]
    },
    n1: {
      msgs: [
        ["Unai", "Uff, ados… baina ez dakit ondorioak nola egin"],
        ["Ane", "Lagunduko dizut! Bideo-deia gero?"],
        ["Unai", "Begira, AAri galdetu diot eta dio bonbardaketa 1938ko apirilaren 26an izan zela. Hori jarriko dut."]
      ],
      choices: [
        { t: "Egiazta dezagun iturri fidagarri batean lehenik; nik uste dut 1937 izan zela. AAk data okerrak eman ditzake.", d: { zeh: 3, lank: 1 }, go: "n4" },
        { t: "Ados, jarri hori, ez dugu denborarik.", d: { zeh: -3 }, go: "n5" },
        { t: "Hahaha Unai, zein tontoa zaren, hori gezurra da", d: { giro: -2, zeh: 1 }, go: "n4b" }
      ]
    },
    n2: {
      msgs: [
        ["Maddi", "Orduan nire zatia alferrik egin dut? 😕"],
        ["Ane", "Eta irakasleak esan zuen AA erabiltzen badugu adierazi behar dugula…"]
      ],
      choices: [
        { t: "Arrazoi duzue, barkatu. Erabil dezagun Maddiren zatia eta banatu gainerakoa denon artean.", d: { giro: 2, zin: 2, lank: 1 }, go: "n1" },
        { t: "Ez da ezer pertsonala, Maddi, AA azkarragoa da eta kitto.", d: { giro: -2, lank: -2, zin: -1 }, go: "n6" }
      ]
    },
    n3: {
      msgs: [
        ["Unai", "Zer??? Zu ere ez zara ezer egiten ari 😤"],
        ["Ane", "Mesedez, ez hasi orain… ez dugu denborarik"]
      ],
      choices: [
        { t: "Arrazoi duzu, barkatu tonua. Antola gaitezen: nik lekukotasunak egingo ditut. Zuk ondorioak egin nahi dituzu?", d: { giro: 3, lank: 1 }, go: "n1" },
        { t: "Tira, egin nahi duzuena, niri berdin zait.", d: { lank: -3, giro: -1 }, go: "n6" }
      ]
    },
    n4: {
      msgs: [
        ["Ane", "Aurkitu dut! Gernikako Bakearen Museoaren webgunean: 1937ko apirilaren 26a. 👍"],
        ["Unai", "Aupa, eskerrik asko. AAk gaizki esan zidan orduan 😅"],
        ["Maddi", "Eta orain zer falta zaigu?"]
      ],
      choices: [
        { t: "Dokumentuan lan-banaketa eta epeak jarriko ditut, eta ostegunean bideo-deia egingo dugu dena elkarrekin berrikusteko. Amaieran AAren erabilera-oharra gehituko dugu.", d: { lank: 3, zin: 1 }, go: "endGood" },
        { t: "Nik bukatuko dut dena bakarrik gaur gauean, azkarrago da.", d: { lank: -2, giro: -1 }, go: "endMid" }
      ]
    },
    n4b: {
      msgs: [
        ["Unai", "😠 ok ba, zuk egin dena orduan"],
        ["Ane", "Ez da beharrezkoa horrela esatea…"]
      ],
      choices: [
        { t: "Barkatu Unai, ez nuen horrela esan nahi. Begira dezagun batera iturri batean; nik ere akatsak egiten ditut.", d: { giro: 3 }, go: "n4" },
        { t: "Egia besterik ez dut esan.", d: { giro: -2, lank: -1 }, go: "endBad" }
      ]
    },
    n5: {
      msgs: [
        [null, "— Ostirala, entregaren ondoren —"],
        ["Ane", "Irakasleak akatsa markatu du: «1938 → 1937. Nork egiaztatu zuen data? Iturririk ez.» 😬"],
        ["Unai", "Nik AAri galdetu nion…"]
      ],
      choices: [
        { t: "Denon errua da, ez genuen egiaztatu. Hurrengoan datu garrantzitsuak iturri fidagarrietan kontrastatuko ditugu.", d: { zeh: 1, giro: 2, lank: 1 }, go: "endMid" },
        { t: "Unairen errua da, berak jarri zuen.", d: { giro: -3 }, go: "endBad" }
      ]
    },
    n6: {
      msgs: [
        [null, "Maddik taldea utzi du."],
        ["Ane", "Bikain… orain hiru gara eta Maddik egindakoa galdu dugu 😞"]
      ],
      choices: [
        { t: "Maddiri pribatuan idatziko diot barkamena eskatzeko eta itzultzeko eskatzeko. Gero lana banatuko dugu.", d: { giro: 3, lank: 2 }, go: "n6b" },
        { t: "Hobe, gutxiago gara erabakitzeko.", d: { giro: -2, lank: -2 }, go: "endBad" }
      ]
    },
    n6b: {
      msgs: [
        [null, "Maddi taldera itzuli da."],
        ["Maddi", "Ados, baina lana benetan banatzen badugu 🙂"]
      ],
      auto: "n1"
    },
    endGood: {
      msgs: [
        [null, "— Ostirala —"],
        ["Ane", "Irakasleak 9 jarri digu! «Lan-banaketa argia, iturriak egiaztatuak eta AAren erabilera gardena» 🎉"],
        ["Maddi", "Taldea! 💪"]
      ],
      end: "good"
    },
    endMid: {
      msgs: [
        [null, "— Ostirala —"],
        ["Ane", "6,5 atera dugu. Irakasleak dio lana desorekatua izan dela eta iturri gehiago falta direla."]
      ],
      end: "mid"
    },
    endBad: {
      msgs: [
        [null, "— Ostirala —"],
        ["Ane", "4 atera dugu… eta taldean giroa fatal dago. Ez dut berriro horrela lan egin nahi 😞"]
      ],
      end: "bad"
    }
  };
  const METER_FB = {
    giro: ["Tonuak gatazka areagotu du. Idatziz, tonua gaizki uler daiteke: gelditu erantzun aurretik.", "Batzuetan tonuak tentsioa sortu du; saiatu erreakzio inpultsiboak kontrolatzen.", "Tonu errespetuzkoa mantendu duzu eta gatazkak baretu dituzu."],
    lank: ["Lana ez da partekatu. Elkarlanak rolak, epeak eta tresnak adostea eskatzen du.", "Lankidetzan saiatu zara, baina antolaketa hobetu daiteke (rolak, epeak).", "Lana antolatu eta partekatu duzu: rolak, epeak eta berrikuspena."],
    zin: ["Besteen lana edo irakaslearen arauak ez dira errespetatu (AAren erabilera gardena).", "Zintzotasunarekin zalantzak izan dituzu.", "Besteen lana aitortu duzu eta AAren erabilera gardena defendatu duzu."],
    zeh: ["AAren datua egiaztatu gabe onartu da. Hizkuntza-ereduek data eta datu okerrak eman ditzakete.", "Akatsa beranduegi detektatu da. Egiaztatu datu garrantzitsuak entregatu aurretik.", "AAren datua iturri fidagarri batean egiaztatu duzu."]
  };

  W.gchat = function (host) {
    let M, log, busy;
    host.innerHTML = `
      <div class="widget">
        <div class="widget-head"><h3>💬 Talde-txata: Historiako proiektua</h3><span class="badge">Parte hartu</span></div>
        <div class="gchat">
          <div class="gchat-main">
            <div class="gchat-top">
              <div class="avatars">${Object.keys(PEOPLE).map((n) => MAIL.avatar(n, PEOPLE[n])).join("")}${MAIL.avatar("Zu", "#26234f")}</div>
              <div><b>4.B · Gernika proiektua 📚</b><span>Ane, Unai, Maddi, zu</span></div>
            </div>
            <div class="gchat-log" data-log aria-live="polite"></div>
            <div class="gchat-choices" data-choices></div>
          </div>
          <aside class="gchat-side">
            <div><h4>Adierazleak</h4></div>
            <div class="climate" data-meters></div>
            <p style="font-size:.84rem;color:var(--ink-soft)">Zure erabakiek taldearen giroan, lankidetzan, zintzotasunean eta lanaren zehaztasunean eragiten dute.</p>
            <button class="btn btn-ghost btn-sm" type="button" data-restart>↺ Hasi berriro</button>
          </aside>
        </div>
        <div data-summary></div>
      </div>`;
    const logEl = host.querySelector("[data-log]");
    const chEl = host.querySelector("[data-choices]");
    const sumEl = host.querySelector("[data-summary]");

    function drawMeters() {
      host.querySelector("[data-meters]").innerHTML = METERS.map(
        ([k, l, c]) => `<div class="climate-row"><div style="display:flex;justify-content:space-between"><span>${l}</span><b style="font-family:var(--font-mono)">${M[k]}/10</b></div><div class="meter"><i style="width:${M[k] * 10}%;background:${c};transition:width .4s"></i></div></div>`
      ).join("");
    }

    function bubble(who, text, me) {
      const d = document.createElement("div");
      if (!who && !me) {
        d.className = "gmsg sys";
        d.textContent = text;
      } else {
        d.className = "gmsg" + (me ? " me" : "");
        d.innerHTML = `${me ? "" : `<b style="color:${PEOPLE[who] || "#26234f"}">${esc(who)}</b>`}${esc(text)}`;
      }
      logEl.appendChild(d);
      logEl.scrollTop = logEl.scrollHeight;
    }

    function run(id) {
      const node = NODES[id];
      busy = true;
      chEl.innerHTML = "";
      let k = 0;
      const next = () => {
        if (k < node.msgs.length) {
          const [who, text] = node.msgs[k++];
          const typing = document.createElement("div");
          typing.className = "typing";
          typing.innerHTML = "<i></i><i></i><i></i>";
          if (who) logEl.appendChild(typing);
          logEl.scrollTop = logEl.scrollHeight;
          setTimeout(() => {
            typing.remove();
            bubble(who, text);
            next();
          }, who ? 650 + Math.min(900, text.length * 12) : 350);
          return;
        }
        busy = false;
        if (node.auto) return run(node.auto);
        if (node.end) return finish(node.end);
        chEl.innerHTML = `<div style="font-size:.78rem;font-weight:700;color:var(--ink-mute)">Aukeratu zure erantzuna:</div>` +
          node.choices.map((c, i) => `<button type="button" data-i="${i}">${esc(c.t)}</button>`).join("");
        chEl.querySelectorAll("button").forEach((b) =>
          b.addEventListener("click", () => {
            if (busy) return;
            const c = node.choices[+b.dataset.i];
            bubble(null, c.t, true);
            Object.entries(c.d).forEach(([key, v]) => (M[key] = clamp(M[key] + v, 0, 10)));
            log.push({ t: c.t, d: c.d });
            drawMeters();
            run(c.go);
          })
        );
      };
      next();
    }

    function finish(kind) {
      chEl.innerHTML = "";
      const avg = (M.giro + M.lank + M.zin + M.zeh) / 4;
      const lvl = avg >= 7 ? 3 : avg >= 5 ? 2 : 1;
      const idx = (v) => (v >= 7 ? 2 : v >= 4 ? 1 : 0);
      sumEl.innerHTML = `
        <div class="report" style="margin:1.2rem;border-radius:var(--r-md)">
          <div class="report-head"><div><span class="mono" style="font-size:.75rem;opacity:.7">EMAITZA</span><h3>${kind === "good" ? "Talde-lan bikaina 🎉" : kind === "mid" ? "Aurrera atera zarete, baina…" : "Taldeak huts egin du"}</h3></div><div class="score">${MAIL.LEVEL[lvl]}</div></div>
          <div class="report-body">
            <ul class="evidence-list">${METERS.map(([k, l]) => {
              const i = idx(M[k]);
              return `<li><span class="st ${i === 2 ? "ok" : i === 1 ? "mid" : "no"}">${i === 2 ? "✓" : i === 1 ? "~" : "✗"}</span><div><b>${l} (${M[k]}/10)</b><small>${METER_FB[k][i]}</small></div></li>`;
            }).join("")}</ul>
            <div class="note"><strong>PISA MAIL: Parte hartu eta elkarlanean aritu</strong><p>Maila altuan ikasleak komunikazioa egokitzen du, trukeak moderatzen ditu, besteen eskubideak babesten ditu eta proiektuak elkarlanean diseinatzen ditu. Probatu beste bide bat eta alderatu emaitzak.</p></div>
          </div>
        </div>`;
      if (window.MAIL) MAIL.store.saveSim("gchat", { level: lvl, meters: Object.assign({}, M) });
    }

    function start() {
      M = { giro: 5, lank: 5, zin: 5, zeh: 5 };
      log = [];
      logEl.innerHTML = "";
      sumEl.innerHTML = "";
      drawMeters();
      run("start");
    }
    host.querySelector("[data-restart]").addEventListener("click", () => {
      if (!busy) start();
    });
    start();
  };

  /* ======================================================================
     3. PRIBATUTASUN-PANELA (Eskuratu eta erabili)
     ====================================================================== */
  const SETTINGS = [
    { id: "vis", l: "Profilaren ikusgarritasuna", s: "Nork ikus ditzake zure argitalpenak", type: "select", def: "pub",
      opts: [["pub", "Publikoa (edonork)"], ["fr", "Jarraitzaile onartuak"], ["mix", "Pribatua + argitalpen publiko hautatuak"]],
      exp: { pub: 25, fr: 5, mix: 11 }, best: "mix",
      why: "«Pribatua + hautatuak» aukerarekin lagunentzako argazkiak pribatu geratzen dira eta antzerki-ekitaldiak publiko egin daitezke. Beste aukera bat: antzerki-taldearen kontu bereizia, helduek kudeatua." },
    { id: "loc", l: "Kokapena argitalpenetan", s: "Mapa eta leku zehatza", type: "switch", def: true, exp: { true: 12, false: 0 }, best: false,
      why: "Kokapenak non bizi, ikasi edo entrenatzen duzun erakuts dezake." },
    { id: "bday", l: "Jaiotze-data profilean", type: "select", def: "all",
      opts: [["all", "Guztientzat ikusgai"], ["fr", "Jarraitzaileentzat"], ["hide", "Ezkutuan"]], exp: { all: 8, fr: 3, hide: 0 }, best: "hide",
      why: "Jaiotze-data identitate-lapurretan eta pasahitzak asmatzeko erabiltzen da." },
    { id: "find", l: "Telefono edo emailez aurkitzea", type: "switch", def: true, exp: { true: 8, false: 0 }, best: false,
      why: "Zure zenbakia duen edonork (ezezagunak barne) zure profila aurki dezake." },
    { id: "dm", l: "Nork bidal diezazuke mezu zuzena", type: "select", def: "all",
      opts: [["all", "Edonork"], ["fol", "Jarraitzen ditudanek"], ["none", "Inork ez"]], exp: { all: 12, fol: 3, none: 0 }, best: "fol",
      why: "Ezezagunen mezuak dira grooming, iruzur eta jazarpenaren bide ohikoena. «Inork ez» seguruagoa da, baina lagunekin komunikatzea eragozten du." },
    { id: "tag", l: "Etiketak onartu aurretik berrikusi", type: "switch", def: false, exp: { true: 0, false: 6 }, best: true,
      why: "Besteek etiketatutako argazkiak zure profilean agertu aurretik erabaki dezakezu." },
    { id: "status", l: "Jarduera-egoera («Linean orain»)", type: "switch", def: true, exp: { true: 5, false: 0 }, best: false,
      why: "Noiz zauden konektatuta erakusten du; presioa eta kontrola sor ditzake." },
    { id: "ads", l: "Beste webguneetako jardueran oinarritutako publizitatea", type: "switch", def: true, exp: { true: 7, false: 0 }, best: false,
      why: "Zure nabigazioa jarraitzen du profil komertziala sortzeko." },
    { id: "ai", l: "Zure argitalpenak AA ereduak entrenatzeko erabiltzea", type: "switch", def: true, exp: { true: 7, false: 0 }, best: false,
      why: "Zure argazkiak eta testuak (eta lagunenak) entrenamendu-datu bihur daitezke." },
    { id: "apps", l: "Konektatutako 3 jokok profila eta lagun-zerrenda irakurtzea", type: "switch", def: true, exp: { true: 8, false: 0 }, best: false,
      why: "Hirugarrenen aplikazioek zure eta zure lagunen datuak bil ditzakete." },
    { id: "2fa", l: "Bi urratseko egiaztapena", type: "switch", def: false, exp: { true: 0, false: 10 }, best: true,
      why: "Norbaitek pasahitza lortuta ere, ezin izango du zure kontuan sartu." }
  ];

  W.privacy = function (host) {
    const val = {};
    SETTINGS.forEach((s) => (val[s.id] = s.def));
    const maxExp = SETTINGS.reduce((a, s) => a + Math.max(...Object.values(s.exp)), 0);

    host.innerHTML = `
      <div class="widget">
        <div class="widget-head"><h3>🔐 Pribatutasun-panela: konfiguratu zure kontua</h3><span class="badge">Eskuratu eta erabili</span></div>
        <div class="widget-body">
          <div class="note" style="margin-bottom:1.2rem"><strong>Egoera</strong><p>Kontu berria sortu duzu «Klik» sare sozialean. <b>Bi helburu</b> dituzu: (1) lagunekin argazkiak partekatzea eta (2) institutuko antzerki-taldearen emanaldiak herrian iragartzea. Aldatu ezarpenak eta ikusi nola aldatzen diren zure esposizioa eta helburuen betetzea.</p></div>
          <div class="privacy-sim">
            <div class="settings-list">${SETTINGS.map((s) => {
              const ctl =
                s.type === "switch"
                  ? `<label class="switch"><input type="checkbox" data-id="${s.id}" ${s.def ? "checked" : ""} aria-label="${esc(s.l)}"><span></span></label>`
                  : `<select data-id="${s.id}" aria-label="${esc(s.l)}">${s.opts.map((o) => `<option value="${o[0]}" ${o[0] === s.def ? "selected" : ""}>${esc(o[1])}</option>`).join("")}</select>`;
              return `<div class="setting" data-row="${s.id}"><div><b>${esc(s.l)}</b>${s.s ? `<small>${esc(s.s)}</small>` : ""}<small class="advice" hidden></small></div>${ctl}</div>`;
            }).join("")}</div>
            <div class="exposure">
              <div><span class="mono" style="font-size:.72rem;color:var(--ink-mute)">ESPOSIZIO-INDIZEA</span><div class="big" data-exp>0</div><div class="meter" style="margin-top:.4rem"><i data-exp-bar></i></div></div>
              <div><span class="mono" style="font-size:.72rem;color:var(--ink-mute)">HELBURUEN BETETZEA</span><div class="big" style="font-size:1.8rem" data-reach>0</div><div class="meter" style="margin-top:.4rem"><i data-reach-bar style="background:var(--c-sarbidea)"></i></div></div>
              <div><span class="mono" style="font-size:.72rem;color:var(--ink-mute)">EZEZAGUN BATEK IKUS DEZAKE:</span><ul data-sees style="margin-top:.4rem"></ul></div>
              <button class="btn btn-dark btn-sm" type="button" data-eval>Ebaluatu nire konfigurazioa</button>
              <div data-eval-out></div>
            </div>
          </div>
        </div>
      </div>`;

    function compute() {
      let e = 0;
      SETTINGS.forEach((s) => (e += s.exp[String(val[s.id])] || 0));
      const exp = Math.round((e / maxExp) * 100);
      let reach = { pub: 100, mix: 85, fr: 40 }[val.vis];
      if (val.dm === "none") reach -= 10;
      const sees = [];
      if (val.vis === "pub") sees.push("Zure argazki eta argitalpen guztiak");
      if (val.vis === "mix") sees.push("Publiko egindako argitalpenak bakarrik (antzerkia)");
      if (val.loc) sees.push("Non egon zaren argitalpenetan");
      if (val.bday === "all") sees.push("Zure jaiotze-data");
      if (val.find) sees.push("Zure profila, zure telefonoa badu");
      if (val.dm === "all") sees.push("Zuri mezu zuzenak bidaltzeko aukera");
      if (val.status) sees.push("Noiz zauden linean");
      if (!val.tag) sees.push("Besteek etiketatutako zure argazkiak");
      if (!sees.length) sees.push("Oso gutxi: ondo babestuta zaude");
      host.querySelector("[data-exp]").textContent = exp;
      const eb = host.querySelector("[data-exp-bar]");
      eb.style.width = exp + "%";
      eb.style.background = exp > 60 ? "var(--bad)" : exp > 30 ? "var(--warn)" : "var(--ok)";
      host.querySelector("[data-reach]").textContent = reach + "%";
      host.querySelector("[data-reach-bar]").style.width = reach + "%";
      host.querySelector("[data-sees]").innerHTML = sees.map((x) => `<li>${esc(x)}</li>`).join("");
    }

    host.querySelectorAll("[data-id]").forEach((c) =>
      c.addEventListener("change", () => {
        const s = SETTINGS.find((x) => x.id === c.dataset.id);
        val[s.id] = s.type === "switch" ? c.checked : c.value;
        host.querySelector("[data-eval-out]").innerHTML = "";
        host.querySelectorAll(".advice").forEach((a) => (a.hidden = true));
        compute();
      })
    );

    host.querySelector("[data-eval]").addEventListener("click", () => {
      let ok = 0;
      SETTINGS.forEach((s) => {
        const good = val[s.id] === s.best;
        if (good) ok++;
        const row = host.querySelector(`[data-row="${s.id}"]`);
        const adv = row.querySelector(".advice");
        adv.hidden = false;
        adv.style.color = good ? "var(--ok)" : "var(--bad)";
        adv.textContent = (good ? "✓ " : "✗ ") + s.why;
        row.style.borderColor = good ? "var(--ok)" : "var(--bad)";
      });
      const pct = Math.round((ok / SETTINGS.length) * 100);
      const lvl = MAIL.levelFromPct(pct);
      host.querySelector("[data-eval-out]").innerHTML = `<div class="item-feedback ${lvl === 3 ? "good" : lvl === 2 ? "part" : "bad"}" style="display:block"><b>${ok}/${SETTINGS.length} ezarpen egokiak · ${MAIL.LEVEL[lvl]}</b><p>Ez dago konfigurazio «perfekturik»: <b>pribatutasuna eta irekitasuna</b> orekatu behar dira helburuen arabera. Hori da MAILek eskatzen duen hausnarketa etikoa.</p></div>`;
      MAIL.store.saveSim("privacy", { level: lvl, ok });
    });
    compute();
  };

  /* ======================================================================
     4. FITXATEGI-ANTOLATZAILEA · Digital declutter (Eskuratu eta erabili)
     ====================================================================== */
  const FOLDERS = [
    ["iturriak", "📁 01_Iturriak"],
    ["zirriborroak", "📁 02_Zirriborroak"],
    ["azkena", "📁 03_Azken_bertsioa"],
    ["zakarra", "🗑️ Zakarrontzia"]
  ];
  const FILES = [
    ["gernika_bakearen-museoa_iturria.pdf", "2,1 MB", "iturriak", "Kanpoko iturria: erreferentzia gisa gorde."],
    ["elkarrizketa_amona_1937.m4a", "18 MB", "iturriak", "Lehen mailako iturria (lekukotasuna)."],
    ["argazkia_artxiboa_1937.jpg", "3,4 MB", "iturriak", "Artxiboko irudia: iturria da."],
    ["aurkezpena_v1.pptx", "4,0 MB", "zirriborroak", "Lehen bertsioa: zirriborroa."],
    ["aurkezpena_v2_iruzkinekin.pptx", "4,3 MB", "zirriborroak", "Tarteko bertsioa, iruzkinekin."],
    ["gidoia_zirriborroa.docx", "48 KB", "zirriborroak", "Izenak berak dio: zirriborroa."],
    ["aurkezpena_AZKENA.pptx", "5,1 MB", "azkena", "Entregatzeko bertsioa."],
    ["bibliografia.docx", "22 KB", "azkena", "Entregarekin batera doa."],
    ["AA_erabilera_oharra.docx", "15 KB", "azkena", "Entregarekin batera doan gardentasun-oharra."],
    ["dokumentua(3).docx", "0 KB", "zakarra", "Hutsik dago (0 KB)."],
    ["IMG_2231 (1).jpg", "3,4 MB", "zakarra", "«argazkia_artxiboa_1937.jpg»-ren bikoiztua (tamaina bera)."],
    ["memea_unai.png", "900 KB", "zakarra", "Ez dago proiektuarekin lotuta, eta besteen irudiak ez dira proiektu-karpetan partekatu behar."]
  ];

  W.declutter = function (host) {
    let picked = null;
    host.innerHTML = `
      <div class="widget">
        <div class="widget-head"><h3>🗂️ Digital declutter: antolatu proiektuaren karpeta</h3><span class="badge">Eskuratu eta erabili</span></div>
        <div class="widget-body">
          <p style="color:var(--ink-soft);margin-bottom:1rem">Talde-proiektuaren karpeta partekatua nahaspilatuta dago. <b>Arrastatu</b> fitxategi bakoitza dagokion karpetara (edo <b>sakatu fitxategia eta gero karpeta</b>, mugikorrean).</p>
          <div class="declutter">
            <div><div class="stim-cap">📥 Deskargak (antolatu gabe)</div><div class="file-pool" data-drop="pool">${MAIL.shuffle(FILES)
              .map((f) => `<span class="file" draggable="true" tabindex="0" role="button" data-name="${esc(f[0])}" title="${esc(f[1])}">📄 ${esc(f[0])} <small style="opacity:.6">${esc(f[1])}</small></span>`)
              .join("")}</div></div>
            <div class="folders">${FOLDERS.map((f) => `<div class="folder" data-drop="${f[0]}" tabindex="0" role="button" aria-label="${esc(f[1])}"><span class="folder-name">${esc(f[1])}</span><div class="files"></div></div>`).join("")}</div>
          </div>
        </div>
        <div class="widget-foot">
          <span data-out style="font-size:.9rem;color:var(--ink-soft)">Fitxategi guztiak kokatu eta egiaztatu.</span>
          <span style="display:flex;gap:.5rem"><button class="btn btn-ghost btn-sm" type="button" data-reset>Berrezarri</button><button class="btn btn-dark btn-sm" type="button" data-check>Egiaztatu</button></span>
        </div>
      </div>`;

    const target = (zone) => (zone.dataset.drop === "pool" ? zone : zone.querySelector(".files"));
    const moveTo = (fileEl, zone) => {
      fileEl.classList.remove("picked", "right", "wrong");
      target(zone).appendChild(fileEl);
      picked = null;
    };
    host.querySelectorAll(".file").forEach((f) => {
      f.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", f.dataset.name);
        picked = f;
      });
      const pick = (e) => {
        e.stopPropagation();
        host.querySelectorAll(".file.picked").forEach((x) => x !== f && x.classList.remove("picked"));
        f.classList.toggle("picked");
        picked = f.classList.contains("picked") ? f : null;
      };
      f.addEventListener("click", pick);
      f.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          pick(e);
        }
      });
    });
    host.querySelectorAll("[data-drop]").forEach((z) => {
      z.addEventListener("dragover", (e) => {
        e.preventDefault();
        z.classList.add("over");
      });
      z.addEventListener("dragleave", () => z.classList.remove("over"));
      z.addEventListener("drop", (e) => {
        e.preventDefault();
        z.classList.remove("over");
        const name = e.dataTransfer.getData("text/plain");
        const f = [...host.querySelectorAll(".file")].find((x) => x.dataset.name === name);
        if (f) moveTo(f, z);
      });
      const drop = () => picked && moveTo(picked, z);
      z.addEventListener("click", drop);
      z.addEventListener("keydown", (e) => {
        if ((e.key === "Enter" || e.key === " ") && picked) {
          e.preventDefault();
          drop();
        }
      });
    });
    host.querySelector("[data-check]").addEventListener("click", () => {
      const pool = host.querySelector('[data-drop="pool"]');
      if (pool.querySelector(".file")) {
        host.querySelector("[data-out]").textContent = "Oraindik badaude antolatu gabeko fitxategiak.";
        return;
      }
      let ok = 0;
      const wrongs = [];
      host.querySelectorAll(".folder").forEach((z) =>
        z.querySelectorAll(".file").forEach((f) => {
          const def = FILES.find((x) => x[0] === f.dataset.name);
          const good = def[2] === z.dataset.drop;
          f.classList.toggle("right", good);
          f.classList.toggle("wrong", !good);
          if (good) ok++;
          else wrongs.push(`<li><b>${esc(def[0])}</b> → ${esc(FOLDERS.find((x) => x[0] === def[2])[1])}: ${esc(def[3])}</li>`);
        })
      );
      const lvl = MAIL.levelFromPct((ok / FILES.length) * 100);
      host.querySelector("[data-out]").innerHTML = `<b>${ok}/${FILES.length} ondo · ${MAIL.LEVEL[lvl]}</b>${wrongs.length ? `<ul style="list-style:disc;padding-left:1.1rem;margin-top:.4rem;display:grid;gap:.2rem">${wrongs.join("")}</ul>` : " — Karpeta ezin hobeto antolatuta! 🎉"}`;
      MAIL.store.saveSim("declutter", { level: lvl, ok });
    });
    host.querySelector("[data-reset]").addEventListener("click", () => {
      const pool = host.querySelector('[data-drop="pool"]');
      host.querySelectorAll(".file").forEach((f) => moveTo(f, pool));
      host.querySelector("[data-out]").textContent = "Fitxategi guztiak kokatu eta egiaztatu.";
    });
  };

  /* ======================================================================
     5. MEME / ARGITALPEN EDITOREA (Sortu)
     ====================================================================== */
  const BGS = [
    { id: "morea", l: "Morea", paint: (g, S) => lin(g, S, "#4d49a8", "#2f2b7a"), lum: "#3b378f" },
    { id: "turkesa", l: "Turkesa", paint: (g, S) => lin(g, S, "#18c3bd", "#0b7a76"), lum: "#12a09b" },
    { id: "laranja", l: "Laranja", paint: (g, S) => lin(g, S, "#ffb37b", "#ff5571"), lum: "#ff8a76" },
    { id: "paper", l: "Papera", paint: (g, S) => lin(g, S, "#fbf8f1", "#efe9dc"), lum: "#f5f0e6" },
    { id: "ilun", l: "Iluna", paint: (g, S) => lin(g, S, "#1c1b2e", "#26234f"), lum: "#211f3e" },
    { id: "aa", l: "AA irudia", ai: true, paint: paintAI, lum: "#6b5a4a" }
  ];
  function lin(g, S, a, b) {
    const gr = g.createLinearGradient(0, 0, S, S);
    gr.addColorStop(0, a);
    gr.addColorStop(1, b);
    g.fillStyle = gr;
    g.fillRect(0, 0, S, S);
  }
  function paintAI(g, S) {
    const gr = g.createRadialGradient(S * 0.5, S * 0.45, S * 0.05, S * 0.5, S * 0.5, S * 0.75);
    gr.addColorStop(0, "#f3d9b1");
    gr.addColorStop(0.45, "#b98b62");
    gr.addColorStop(1, "#3a2c24");
    g.fillStyle = gr;
    g.fillRect(0, 0, S, S);
    g.save();
    g.globalAlpha = 0.9;
    g.font = `${S * 0.42}px serif`;
    g.textAlign = "center";
    g.textBaseline = "middle";
    g.filter = "blur(1.5px)";
    g.fillText("🍽️", S * 0.5, S * 0.52);
    g.restore();
    g.save();
    g.globalAlpha = 0.18;
    for (let i = 0; i < 30; i++) {
      g.fillStyle = i % 2 ? "#fff" : "#000";
      g.beginPath();
      g.arc((Math.sin(i * 12.9898) * 0.5 + 0.5) * S, (Math.cos(i * 78.233) * 0.5 + 0.5) * S, S * 0.02 + ((i * 7) % 5) * 4, 0, Math.PI * 2);
      g.fill();
    }
    g.restore();
  }
  const TEXT_COLORS = [["#ffffff", "Zuria"], ["#1c1b2e", "Iluna"], ["#ffe066", "Horia"], ["#18c3bd", "Turkesa"]];
  const STICKERS = ["", "🍎", "🥖", "♻️", "🍽️", "💚", "⚠️"];

  function hexLum(hex) {
    const h = hex.replace("#", "");
    const rgb = [0, 2, 4].map((i) => parseInt(h.substr(i, 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
  }
  const contrast = (a, b) => {
    const [l1, l2] = [hexLum(a), hexLum(b)].sort((x, y) => y - x);
    return (l1 + 0.05) / (l2 + 0.05);
  };

  W.editor = function (host) {
    const st = { bg: "morea", top: "", bottom: "", color: "#ffffff", sticker: "🍎", data: false, source: "", aiLabel: false };
    host.innerHTML = `
      <div class="widget">
        <div class="widget-head"><h3>🎨 Editorea: sortu kanpaina-irudi bat</h3><span class="badge">Sortu</span></div>
        <div class="widget-body">
          <div class="note" style="margin-bottom:1.2rem"><strong>Erronka</strong><p>Institutuko jantokian <b>astean 45 kg janari</b> botatzen da (jantokiko neurketa, 2026ko urria). Sortu sare sozialetarako irudi bat <b>12–16 urteko ikasleei</b> zuzendua, janaria ez botatzera animatzeko. Zerrendak zure erabakiak ebaluatzen ditu zuzenean.</p></div>
          <div class="editor">
            <div>
              <canvas width="1080" height="1080" aria-label="Sortzen ari zaren irudiaren aurrebista" role="img"></canvas>
              <div style="display:flex;gap:.5rem;margin-top:.8rem;flex-wrap:wrap">
                <button class="btn btn-dark btn-sm" type="button" data-dl>⬇ Deskargatu PNG</button>
                <span style="font-size:.82rem;color:var(--ink-mute);align-self:center">Irudia zure gailuan sortzen da; ez da inora igotzen.</span>
              </div>
            </div>
            <div class="editor-controls">
              <label>Atzeko planoa<div class="swatches" data-bgs>${BGS.map((b) => `<button type="button" data-bg="${b.id}" title="${b.l}" aria-label="${b.l}" style="background:${b.ai ? "radial-gradient(circle,#f3d9b1,#3a2c24)" : b.lum}"></button>`).join("")}</div></label>
              <label for="ed-top">Goiko testua<input id="ed-top" class="p-input" maxlength="60" data-k="top" placeholder="Adib.: Hartu behar duzuna"></label>
              <label for="ed-bottom">Beheko testua<input id="ed-bottom" class="p-input" maxlength="80" data-k="bottom" placeholder="Adib.: 45 kg astean zakarrontzira. Gaur aldatu dezakegu."></label>
              <label>Testuaren kolorea<div class="swatches" data-colors>${TEXT_COLORS.map((c) => `<button type="button" data-color="${c[0]}" title="${c[1]}" aria-label="${c[1]}" style="background:${c[0]}"></button>`).join("")}</div></label>
              <label>Stickerra<div class="sticker-row" data-stickers>${STICKERS.map((s) => `<button type="button" data-st="${s}" aria-label="${s || "Stickerrik ez"}">${s || "∅"}</button>`).join("")}</div></label>
              <label style="display:flex;gap:.5rem;align-items:center;font-size:.9rem"><input type="checkbox" data-k="data" style="accent-color:var(--ink);width:18px;height:18px"> Datu-txartela gehitu (45 kg/astean)</label>
              <label for="ed-src">Iturria<input id="ed-src" class="p-input" data-k="source" placeholder="Adib.: Jantokiko neurketa, 2026ko urria"></label>
              <label style="display:flex;gap:.5rem;align-items:center;font-size:.9rem"><input type="checkbox" data-k="aiLabel" style="accent-color:var(--ink);width:18px;height:18px"> «Irudia AA bidez sortua» etiketa</label>
              <div class="p-card soft" style="padding:1rem">
                <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:.5rem"><b style="font-family:var(--font-display)">Kalitate-zerrenda</b><span class="mono" data-score style="font-size:.85rem">0/7</span></div>
                <ul class="checklist" data-checks></ul>
              </div>
            </div>
          </div>
        </div>
      </div>`;

    const cv = host.querySelector("canvas");
    const g = cv.getContext("2d");
    const S = 1080;

    function wrap(text, maxW) {
      const words = text.split(/\s+/).filter(Boolean);
      const lines = [];
      let cur = "";
      words.forEach((w) => {
        const t = cur ? cur + " " + w : w;
        if (g.measureText(t).width > maxW && cur) {
          lines.push(cur);
          cur = w;
        } else cur = t;
      });
      if (cur) lines.push(cur);
      return lines;
    }

    function drawText(text, y, size, anchorBottom) {
      if (!text) return;
      g.font = `800 ${size}px 'Bricolage Grotesque', system-ui, sans-serif`;
      g.textAlign = "center";
      const lines = wrap(text.toUpperCase(), S - 140);
      const lh = size * 1.05;
      const startY = anchorBottom ? y - (lines.length - 1) * lh : y;
      g.lineJoin = "round";
      lines.forEach((ln, i) => {
        const yy = startY + i * lh;
        g.lineWidth = size * 0.14;
        g.strokeStyle = hexLum(st.color) > 0.5 ? "rgba(0,0,0,.55)" : "rgba(255,255,255,.6)";
        g.strokeText(ln, S / 2, yy);
        g.fillStyle = st.color;
        g.fillText(ln, S / 2, yy);
      });
    }

    function draw() {
      const bg = BGS.find((b) => b.id === st.bg);
      g.clearRect(0, 0, S, S);
      bg.paint(g, S);
      if (st.sticker) {
        g.save();
        g.font = "220px serif";
        g.textAlign = "center";
        g.textBaseline = "middle";
        g.fillText(st.sticker, S / 2, S / 2 + (bg.ai ? 260 : 0));
        g.restore();
      }
      g.textBaseline = "alphabetic";
      drawText(st.top, 170, 96, false);
      drawText(st.bottom, S - (st.data ? 210 : 120), 64, true);
      if (st.data) {
        g.save();
        g.fillStyle = "rgba(255,255,255,.92)";
        const bw = 420, bh = 92, bx = S - bw - 50, by = S - bh - 50;
        g.beginPath();
        g.roundRect ? g.roundRect(bx, by, bw, bh, 20) : g.rect(bx, by, bw, bh);
        g.fill();
        g.fillStyle = "#c42b49";
        g.font = "800 50px 'Bricolage Grotesque', system-ui, sans-serif";
        g.textAlign = "left";
        g.fillText("45 kg", bx + 26, by + 62);
        g.fillStyle = "#26234f";
        g.font = "600 30px 'Outfit', system-ui, sans-serif";
        g.fillText("janari astean", bx + 190, by + 58);
        g.restore();
      }
      g.save();
      g.font = "500 26px 'Outfit', system-ui, sans-serif";
      g.textAlign = "left";
      g.fillStyle = hexLum(bg.lum) > 0.5 ? "rgba(28,27,46,.75)" : "rgba(255,255,255,.8)";
      let fy = S - 22;
      if (st.source) g.fillText("Iturria: " + st.source.slice(0, 60), 50, st.data ? S - 160 : fy);
      if (st.aiLabel) {
        g.fillStyle = "rgba(0,0,0,.55)";
        g.beginPath();
        g.roundRect ? g.roundRect(40, 36, 330, 50, 12) : g.rect(40, 36, 330, 50);
        g.fill();
        g.fillStyle = "#fff";
        g.fillText("✦ Irudia AA bidez sortua", 60, 70);
      }
      g.restore();
      checks();
    }

    function checks() {
      const bg = BGS.find((b) => b.id === st.bg);
      const txt = `${st.top} ${st.bottom}`.trim();
      const nums = (txt.match(/\d+[.,]?\d*/g) || []).map((n) => parseFloat(n.replace(",", ".")));
      const usesData = st.data || nums.includes(45);
      const wrongNum = nums.some((n) => n !== 45 && n > 45);
      const wordsTop = (st.top.match(/\S+/g) || []).length;
      const wordsBot = (st.bottom.match(/\S+/g) || []).length;
      const cr = contrast(st.color, bg.lum);
      const C = [
        [/(ez bota|hartu|jan|gorde|eraman|zuk|gaur|murriztu|aprobetxatu|behar duzun|aldatu|zure|elkarrekin|dezagun|dezakegu)/i.test(txt), "Ekintzarako deia dago (zer egin behar du audientziak?)"],
        [txt.length > 0 && wordsTop <= 8 && wordsBot <= 16, "Irakurgarria: testu laburra (goian ≤ 8 hitz, behean ≤ 16)"],
        [txt.length > 0 && cr >= 3, `Kontraste nahikoa testuaren eta atzeko planoaren artean (${cr.toFixed(1)}:1)`],
        [usesData && !wrongNum, wrongNum ? "Datu okerra edo puztua: benetako datua 45 kg da" : "Datu zuzena erabilita (sinesgarritasuna)"],
        [!usesData || st.source.trim().length > 5, "Datuaren iturria adierazita"],
        [!bg.ai || st.aiLabel, bg.ai ? "AAren erabilera gardena (etiketa)" : "AAren erabilera: ez da AA irudirik erabili"],
        [txt.length > 0 && !/(tonto|ergel|zerri|txerri|barregarri|lotsagarri|idiot|alper)/i.test(txt), "Tonu errespetuzkoa (inor ez lotsaraztea)"]
      ];
      const n = C.filter((c) => c[0]).length;
      host.querySelector("[data-score]").textContent = `${n}/${C.length}`;
      host.querySelector("[data-checks]").innerHTML = C.map((c) => `<li class="${c[0] ? "ok" : "no"}"><span class="st">${c[0] ? "✓" : "✗"}</span><span>${esc(c[1])}</span></li>`).join("");
      st.score = n;
    }

    const markSel = (sel, attr, v) => host.querySelectorAll(sel).forEach((b) => b.classList.toggle("sel", b.getAttribute(attr) === v));
    host.querySelectorAll("[data-bg]").forEach((b) => b.addEventListener("click", () => { st.bg = b.dataset.bg; markSel("[data-bg]", "data-bg", st.bg); draw(); }));
    host.querySelectorAll("[data-color]").forEach((b) => b.addEventListener("click", () => { st.color = b.dataset.color; markSel("[data-color]", "data-color", st.color); draw(); }));
    host.querySelectorAll("[data-st]").forEach((b) => b.addEventListener("click", () => { st.sticker = b.dataset.st; markSel("[data-st]", "data-st", st.sticker); draw(); }));
    host.querySelectorAll("[data-k]").forEach((inp) =>
      inp.addEventListener(inp.type === "checkbox" ? "change" : "input", () => {
        st[inp.dataset.k] = inp.type === "checkbox" ? inp.checked : inp.value;
        draw();
      })
    );
    host.querySelector("[data-dl]").addEventListener("click", () => {
      cv.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "kanpaina-irudia.png";
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1500);
      }, "image/png");
      const lvl = MAIL.levelFromPct(((st.score || 0) / 7) * 100);
      MAIL.store.saveSim("editor", { level: lvl, score: st.score });
    });
    markSel("[data-bg]", "data-bg", st.bg);
    markSel("[data-color]", "data-color", st.color);
    markSel("[data-st]", "data-st", st.sticker);
    draw();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);
  };

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-widget]").forEach((h) => {
      const fn = W[h.dataset.widget];
      if (fn) fn(h);
    });
  });
  window.MAILWidgets = W;
})();
