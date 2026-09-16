/* ==========================================================================
   PISA 2029 · MAIL — Simulagailu nagusia (ataza luzea)
   ELGAren markoko adibide-atazan oinarritua: txata + nabigatzailea +
   bilatzailea + AA laburpena + erantzuna bidali + AArekin sortu.
   Webgune, erakunde eta pertsona guztiak asmatuak dira.
   ========================================================================== */
(function () {
  "use strict";
  const esc = (s) => MAIL.esc(s);
  const norm = (s) => String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const L = (href, text) => `<button type="button" class="inline-link" data-href="${esc(href)}">${text}</button>`;
  const IMG = (id, bg, emoji, cap) =>
    `<div class="site-img" style="background:${bg}"><span style="font-size:2.6rem">${emoji}</span><span class="cap">${cap} · <button type="button" class="inline-link" style="color:#fff" data-img="${id}">🔍 Bilatu irudi hau</button></span></div>`;

  /* ======================================================================
     AGERTOKIAK
     ====================================================================== */
  const SCENARIOS = {
    /* ------------------------------------------------------------------ */
    hondartza: {
      id: "hondartza",
      title: "Mugikorrak debekatuta hondartzan?",
      role: "Kostaldeko Kronika egunkariko kazetari praktiketan",
      context: "Herritartasuna",
      color: "#23709f",
      manager: { name: "Itziar", role: "erredakzio-burua", color: "#c42b49" },
      claimUrl: "berri-bizkorrak.xyz/itsasbeltz-mugikorrak-debekatuta",
      intro: [
        "Kaixo! Albiste hau birala da gaur sare sozialetan eta irakurle askok galdetu digute. Argitaratu aurretik, <b>egiaztatu</b> behar dugu:",
        "LINK",
        "Gure egunkariaren ospea jokoan dago. Mesedez, bidali zure epaia <b>iturriekin eta ebidentziarekin</b>. Eskerrik asko! 🙏"
      ],
      linkText: "«ITSASBELTZEN MUGIKORRAK DEBEKATUTA HONDARTZETAN! 300 €-ko ISUNAK»",
      colleague: [["Jon", "Norbaitek kafea? ☕ 11:00etan bilera dugu"], ["Jon", "Eta gogoratu: albisteak igo aurretik Itziarri bidali 😉"]],
      verdict: "partzial",
      verdictAlt: "okerra",
      verdictWhy: "Oinarri erreala du (udalaren proba pilotua), baina funtsezko datuak faltsuak dira: ez da debekua, ez dago isunik eta hondartza bakarreko eremu bat da.",
      justKw: [
        [/borondatez|boluntario|gonbidapen|nahi duenak/, "borondatezkoa dela"],
        [/isun|zigor/, "isunik ez dagoela"],
        [/200|eremu|zati|hondarzuri/, "eremu txiki bat dela (Hondarzuri, 200 m)"],
        [/pilotu|proba/, "proba pilotua dela"],
        [/udal|prentsa|ofizial|zinegotzi/, "iturri ofiziala"],
        [/berri bizkor|ai bidez|aa bidez|clickbait|sentsazional/, "jatorrizko atariaren fidagarritasun eza"]
      ],
      model: "Albistea partzialki zehatza da. Itsasbeltzeko Udalaren prentsa-oharraren arabera (2026/06/18), ez da debekurik izango: 2027ko udan borondatezko «Deskonexio-eremu» bat probatuko da Hondarzuri hondartzaren 200 metrotan, isunik gabe eta doako armairuekin. Kostaldeko Kronikak eta Egiaztatu.eus-ek gauza bera baieztatzen dute. Jatorrizko mezua Berri Bizkorrak atarikoa da, AA bidez edukia sortzen duen eta publizitatez finantzatzen den webgunea, eta haren irudia AAk sortua da.",
      aiTrigger: ["mugikor", "hondartz", "itsasbeltz", "debeku", "isun", "telefono"],
      aiOverview: "Itsasbeltzeko udalak mugikorren erabilera <b>debekatu</b> du herriko hondartza guztietan 2027tik aurrera, eta <b>300 euroko isunak</b> ezarriko ditu arauak betetzen ez dituztenei.",
      aiSources: "berri-bizkorrak.xyz, foroa-itsasbeltz.net",
      suggest: ["itsasbeltz hondartza mugikorrak", "deskonexio eremua hondarzuri", "berri bizkorrak"],
      images: {
        img1: {
          label: "Udaltzainak mugikorrak konfiskatzen (Berri Bizkorrak)",
          html: `<div class="match"><div class="thumb" style="background:linear-gradient(135deg,#fca5a5,#1e3a8a)">🏖️👮</div><div><b>Ez da aurkitu irudi hau 2026/06/18 baino lehen.</b><br><span style="color:#6b6a80;font-size:.85rem">Agerpen bakarrak: berri-bizkorrak.xyz eta hura partekatu duten sare sozialetako kontuak.</span></div></div>
          <div class="match"><div class="thumb" style="background:#ede9fe">✦</div><div><b>Jatorri-kredentzialak (Content Credentials):</b> «Irudigile AA» tresnarekin sortua, 2026/06/18 21:04.<br><span style="color:#6b6a80;font-size:.85rem">Ez da argazki erreala.</span></div></div>`
        }
      },
      pages: {
        "berri-bizkorrak.xyz/itsasbeltz-mugikorrak-debekatuta": {
          title: "ITSASBELTZEN MUGIKORRAK DEBEKATUTA! – Berri Bizkorrak", fav: "⚡", favc: "#e11d48", cls: "clickbait", cred: 0, seo: 1.3, claim: true,
          kw: ["itsasbeltz", "mugikor", "hondartz", "debeku", "isun", "300", "telefono", "berri", "bizkor"],
          snippet: "Azkenean gertatu da. Itsasbeltzeko udalak erabat debekatuko ditu mugikorrak herriko hondartza GUZTIETAN… 300 euroko isunak.",
          top: { bg: "#e11d48", color: "#fff", logo: "BERRI BIZKORRAK ⚡", nav: [["Azala", null], ["Bideoak", null], ["Guri buruz", "berri-bizkorrak.xyz/guri-buruz"]] },
          body: () => `<h1>ITSASBELTZEN MUGIKORRAK DEBEKATUTA HONDARTZETAN! 300 €-ko ISUNAK 😱</h1>
            <div class="byline">Erredakzioa · duela 2 egun · ⏱️ 1 min</div>
            ${IMG("img1", "linear-gradient(135deg,#fca5a5,#1e3a8a)", "🏖️👮📵", "Udaltzainak mugikorrak konfiskatzen")}
            <p>Azkenean gertatu da. Itsasbeltzeko udalak <b>erabat debekatuko</b> ditu mugikorrak herriko hondartza GUZTIETAN 2027ko udatik aurrera. Arauak betetzen ez dituztenek <b>300 euroko isuna</b> jasoko dute, «iturri ofizial batek» gure erredakzioari kontatu dionez.</p>
            <p>Gazteak haserre daude: «Zer izango da hurrengoa? Hondartzara joateko baimena eskatu beharko dugu?». Neurriak polemika handia sortu du sare sozialetan eta milaka pertsonak partekatu dute jada.</p>
            <div class="ad-slot">PUBLIZITATEA · Hondartzarako poltsa iragazgaitzak %50 deskontuarekin →</div>
            <p><b>PARTEKATU zure lagunek jakin dezaten!!! 👇</b></p>`,
          foot: "© Berri Bizkorrak · Pribatutasuna · Guri buruz"
        },
        "berri-bizkorrak.xyz/guri-buruz": {
          title: "Guri buruz – Berri Bizkorrak", fav: "⚡", favc: "#e11d48", cls: "clickbait", cred: 0, seo: 0.6, check: true,
          kw: ["berri", "bizkor", "guri buruz"],
          snippet: "Berri Bizkorrak herritarrei interesatzen zaizkien albiste biralak eskaintzen dituen ataria da.",
          top: { bg: "#e11d48", color: "#fff", logo: "BERRI BIZKORRAK ⚡", nav: [["Azala", "berri-bizkorrak.xyz/itsasbeltz-mugikorrak-debekatuta"]] },
          body: () => `<h1>Guri buruz</h1>
            <p>Berri Bizkorrak herritarrei interesatzen zaizkien albiste <b>biralak</b> eskaintzen dituen ataria da. Gure edukien zati handi bat <b>adimen artifizialaren bidez sortzen eta itzultzen</b> da, sare sozialetako joerak oinarri hartuta.</p>
            <p>Webgunea publizitatez finantzatzen da. Ez dugu erredakzio-talde finkorik. Harremanetarako: info@berri-bizkorrak.xyz</p>
            <p style="font-size:.8rem;color:#999">Domeinua: 2025eko abenduan erregistratua.</p>`
        },
        "itsasbeltz.eus/prentsa/deskonexio-eremua": {
          title: "Deskonexio-eremua Hondarzurin – Itsasbeltzeko Udala", fav: "🏛", favc: "#0b5394", cls: "", cred: 3, indep: true, seo: 0.8,
          kw: ["itsasbeltz", "udal", "deskonexio", "hondarzuri", "prentsa", "mugikor", "hondartz", "pilotu", "proba", "ofizial", "eremu"],
          snippet: "Udalak «Deskonexio-eremua» proba pilotua aurkeztu du Hondarzuri hondartzarako. 2027ko udan, 200 metroko eremua, borondatezkoa.",
          top: { bg: "#0b5394", color: "#fff", logo: "🏛️ Itsasbeltzeko Udala", nav: [["Udala", null], ["Zerbitzuak", null], ["Prentsa", null]] },
          body: () => `<div class="byline">Prentsa-oharra · 2026ko ekainaren 18a</div>
            <h1>Udalak «Deskonexio-eremua» proba pilotua aurkeztu du Hondarzuri hondartzarako</h1>
            <p>Itsasbeltzeko Udalak proba pilotu bat egingo du <b>2027ko udan</b> (uztaila eta abuztua): Hondarzuri hondartzaren iparraldeko <b>200 metroko eremuan</b> «Deskonexio-eremua» izango da, pantailarik gabe atseden hartu nahi dutenentzat.</p>
            <h2>Nola funtzionatuko du?</h2>
            <ul><li>Eremua <b>borondatezkoa</b> izango da: ez da inor zigortuko eta <b>ez da isunik</b> egongo.</li><li>Sarreran doako giltzapeko armairuak egongo dira mugikorrak gordetzeko.</li><li>Gainerako hondartzetan ez da ezer aldatuko.</li><li>Udaren amaieran inkesta bat egingo da, ekimena jarraitu ala ez erabakitzeko.</li></ul>
            <blockquote>«Ez da debeku bat, gonbidapen bat baizik», azaldu du Miren Olano Ongizate zinegotziak.</blockquote>
            <p>Informazio gehiago: ongizatea@itsasbeltz.eus</p>`
        },
        "kostaldekokronika.eus/gizartea/deskonexio-eremua-hondarzuri": {
          title: "Hondarzuri, pantailarik gabeko eremua – Kostaldeko Kronika", fav: "K", favc: "#1c1b2e", cls: "", cred: 3, indep: true, seo: 1.0,
          kw: ["itsasbeltz", "hondarzuri", "deskonexio", "mugikor", "hondartz", "kronika", "kostald", "albiste", "debeku", "eremu"],
          snippet: "Miren Olano zinegotziak argi utzi zuen ez dela debekua: «Borondatezkoa da. Ez dago isunik».",
          top: { bg: "#fff", color: "#1c1b2e", logo: "<span style='font-family:Georgia,serif'>Kostaldeko Kronika</span>", border: true, nav: [["Gizartea", null], ["Kirola", null], ["Guri buruz", "kostaldekokronika.eus/guri-buruz"]] },
          body: () => `<div class="byline">Gizartea · ${L("kostaldekokronika.eus/egileak/jone-azkue", "Jone Azkue")} · 2026/06/19</div>
            <h1>Hondarzuri, pantailarik gabeko eremu bat probatuko duen lehen hondartza</h1>
            <p>Itsasbeltzeko Udalak atzo aurkeztu zuen «Deskonexio-eremua» proba pilotua. 2027ko udan, Hondarzuri hondartzaren 200 metroko zati batean, mugikorrik gabe egoteko gonbita egingo zaie hondartzazaleei.</p>
            <p>Miren Olano zinegotziak argi utzi zuen <b>ez dela debekua</b>: «Borondatezkoa da. Ez dago isunik. Nahi duenak mugikorra doako armairu batean utz dezake».</p>
            <p>Herritarren iritziak askotarikoak dira. «Ideia ona iruditzen zait umeekin joateko», dio Karmele Etxeberriak. Ander Ruiz surflariak, berriz, zalantzak ditu: «Larrialdi bat badago?». Udalak azaldu du sorospen-zerbitzuak ohi bezala funtzionatuko duela.</p>
            <div class="site-banner" style="background:#fff7d6">⚠️ <b>Oharra:</b> sare sozialetan zabaltzen ari den «mugikorrak debekatuta eta 300 €-ko isunak» mezua ez dator bat udalaren iragarpenarekin. ${L("itsasbeltz.eus/prentsa/deskonexio-eremua", "Irakurri prentsa-oharra")}</div>`
        },
        "kostaldekokronika.eus/egileak/jone-azkue": {
          title: "Jone Azkue – Kostaldeko Kronika", fav: "K", favc: "#1c1b2e", cls: "", cred: 3, indep: true, seo: 0.5, check: true,
          kw: ["jone", "azkue", "kazetari"],
          snippet: "Kazetaria. 12 urte Kostaldeko Kronikan gizarte- eta ingurumen-gaiak lantzen.",
          top: { bg: "#fff", color: "#1c1b2e", logo: "<span style='font-family:Georgia,serif'>Kostaldeko Kronika</span>", border: true, nav: [["Guri buruz", "kostaldekokronika.eus/guri-buruz"]] },
          body: () => `<h1>Jone Azkue</h1><p>Kazetaria. 12 urte daramatza Kostaldeko Kronikan gizarte- eta ingurumen-gaiak lantzen. Kazetaritzan lizentziatua.</p>
            <h2>Azken artikuluak</h2><ul><li>${L("kostaldekokronika.eus/gizartea/deskonexio-eremua-hondarzuri", "Hondarzuri, pantailarik gabeko eremu bat probatuko duen lehen hondartza")}</li><li>Itsasbeltzeko portuaren berritzea: 5 gako</li><li>Kostaldeko higadura: zer dio azken txostenak</li></ul>`
        },
        "kostaldekokronika.eus/guri-buruz": {
          title: "Guri buruz – Kostaldeko Kronika", fav: "K", favc: "#1c1b2e", cls: "", cred: 3, indep: true, seo: 0.5, check: true,
          kw: ["kostaldeko", "kronika", "egunkari"],
          snippet: "1998an sortutako tokiko egunkaria. Kazetaritza-kode etikoa eta zuzenketa-politika publikoa.",
          top: { bg: "#fff", color: "#1c1b2e", logo: "<span style='font-family:Georgia,serif'>Kostaldeko Kronika</span>", border: true, nav: [] },
          body: () => `<h1>Guri buruz</h1><p>Kostaldeko Kronika 1998an sortutako tokiko egunkaria da, 14 kazetariko erredakzioarekin. Harpidetzek eta publizitateak finantzatzen dute.</p><p>Kazetaritza-kode etikoa jarraitzen dugu: iturriak kontrastatu, iritzia eta informazioa bereizi, eta akatsak publikoki zuzendu (zuzenketak@kostaldekokronika.eus).</p>`
        },
        "foroa-itsasbeltz.net/gaia/mugikorrak-hondartzan": {
          title: "Egia da mugikorrak debekatuko dituztela?? – Itsasbeltz Foroa", fav: "F", favc: "#6b7280", cls: "", cred: 1, seo: 1.1,
          kw: ["itsasbeltz", "mugikor", "hondartz", "debeku", "foro", "egia", "isun"],
          snippet: "Lagun batek bidali dit hau… 300 euro!! · Nik entzun dut hondartza guztietan izango dela…",
          top: { bg: "#e5e7eb", color: "#1c1b2e", logo: "💬 Itsasbeltz Foroa", nav: [] },
          body: () => `<h1>Egia da mugikorrak debekatuko dituztela??</h1>
            <p><b>surfer_88</b> <small style="color:#888">duela 2 egun</small><br>Lagun batek bidali dit hau: ${L("berri-bizkorrak.xyz/itsasbeltz-mugikorrak-debekatuta", "berri-bizkorrak.xyz/…")} 300 euro!! lotsagarria</p>
            <p><b>amatxu_kostan</b><br>Nik entzun dut hondartza guztietan izango dela eta udaltzainek poltsak begiratuko dituztela 😡</p>
            <p><b>itsaso_z</b><br>Udalaren webgunean begiratu dut eta ez dut halakorik ikusi. Proba bat edo zerbait zen, ez debekua.</p>
            <p><b>txomin</b><br>Ondo dago, gazteak mugikorrarekin itsututa daude</p>`
        },
        "gurasoak-kostan.blog/mugikorrik-ez-hondartzan": {
          title: "Azkenean! Mugikorrik gabeko hondartzak – Gurasoak Kostan", fav: "🌸", favc: "#f472b6", cls: "", cred: 1, seo: 0.9,
          kw: ["mugikor", "hondartz", "famili", "guraso", "debeku", "blog"],
          snippet: "Irakurri dudanez, Itsasbeltzek mugikorrak debekatuko ditu hondartzetan. Oso pozik nago…",
          top: { bg: "#fce7f3", color: "#831843", logo: "🌸 Gurasoak Kostan", nav: [] },
          body: () => `<h1>Azkenean! Mugikorrik gabeko hondartzak: familientzat berri ona</h1><div class="byline">Nerea · Iritzia</div>
            <p>Irakurri dudanez (${L("berri-bizkorrak.xyz/itsasbeltz-mugikorrak-debekatuta", "Berri Bizkorrak")}), Itsasbeltzek mugikorrak debekatuko ditu hondartzetan. Oso pozik nago: azkenean seme-alabek hondartzaz gozatuko dute pantailarik gabe.</p>
            <div class="ad-slot">Babestua: «HondartzaSafe» armairu eramangarriak — kodea NEREA10</div>`
        },
        "egiaztatu.eus/itsasbeltz-mugikorrak-hondartza": {
          title: "Itsasbeltzek ez ditu mugikorrak debekatuko – Egiaztatu.eus", fav: "✓", favc: "#15803d", cls: "", cred: 3, indep: true, seo: 0.75, check: true,
          kw: ["itsasbeltz", "mugikor", "debeku", "gezur", "faltsu", "egiazta", "bulo", "egia", "isun", "hondartz"],
          snippet: "EPAIA: ENGAINAGARRIA. Borondatezko proba pilotu bat da, isunik gabe, Hondarzuri hondartzan bakarrik.",
          top: { bg: "#15803d", color: "#fff", logo: "✓ Egiaztatu.eus", nav: [["Metodologia", null]] },
          body: () => `<div class="byline">2026/06/20 · Egiaztapen-taldea</div>
            <h1>Itsasbeltzek ez ditu mugikorrak debekatuko hondartzetan: borondatezko proba pilotu bat da</h1>
            <div class="site-banner" style="background:#fde68a"><b>EPAIA: ENGAINAGARRIA</b> — Oinarri erreala du, baina funtsezko datuak faltsuak dira.</div>
            <p><b>Zer dio mezu biralak:</b> mugikorrak debekatuta hondartza guztietan, 300 €-ko isunekin.</p>
            <p><b>Zer da egia:</b> Udalak borondatezko «deskonexio-eremu» bat probatuko du 2027ko udan, Hondarzuri hondartzaren 200 metrotan. Ez dago isunik eta ez da gainerako hondartzetan aplikatuko.</p>
            <p><b>Nola egiaztatu dugu:</b> ${L("itsasbeltz.eus/prentsa/deskonexio-eremua", "udalaren prentsa-oharra")}, zinegotziarekin telefonoz hitz egin eta ${L("kostaldekokronika.eus/gizartea/deskonexio-eremua-hondarzuri", "Kostaldeko Kronikaren artikulua")} kontrastatu.</p>
            <p>Jatorrizko mezua «Berri Bizkorrak» atarian argitaratu zen; atari horrek AA bidez sortutako edukia argitaratzen du, eta irudia ere AAk sortua da.</p>`
        },
        "hondartzasafe.shop": {
          title: "HondartzaSafe – gorde zure mugikorra", fav: "🔒", favc: "#0891b2", cls: "", cred: 0, seo: 1, ad: true,
          kw: ["hondartz", "mugikor", "poltsa", "debeku"],
          snippet: "Hondartzarako armairu eramangarriak. %30 deskontua gaur bakarrik!",
          top: { bg: "#0891b2", color: "#fff", logo: "🔒 HondartzaSafe", nav: [["Denda", null]] },
          body: () => `<h1>Gorde zure mugikorra hondartzan, lasai!</h1><p>Armairu eramangarri iragazgaitzak. <b>%30 deskontua gaur bakarrik.</b></p><div class="ad-slot">🛒 Erosi orain · Bidalketa doan</div>`
        }
      },
      create: {
        brief: "Eskerrik asko! Orain argitaratu post labur bat gure sare sozialeko kontuan (@kostaldekokronika), irakurleei <b>zer den egia</b> azaltzeko. AA laguntzailea erabil dezakezu. Kontuan hartu: gure irakurleak herritar guztiak dira.",
        account: "Kostaldeko Kronika",
        images: [
          { id: "a", l: "AA irudi fotorrealista: udaltzainak hondartzan mugikorrak kentzen", bg: "linear-gradient(135deg,#fca5a5,#1e3a8a)", emoji: "🏖️👮📵", ok: 0, ai: true, why: "Gertatu ez den eszena faltsua irudikatzen du eta gezurra indartzen du, nahiz eta testua zuzena izan." },
          { id: "b", l: "Udalaren prentsa-oharreko argazkia (Hondarzuri, © Itsasbeltzeko Udala)", bg: "linear-gradient(180deg,#bae6fd,#fde68a)", emoji: "🏖️", ok: 2, ai: false, why: "Benetako argazkia, egilea aipatuta: informazio zuzenarekin bat dator." },
          { id: "c", l: "Ilustrazio grafikoa: mugikorra armairuan + «Deskonexio-eremua» (AA bidez sortua)", bg: "linear-gradient(135deg,#d1fae5,#a7f3d0)", emoji: "📱🔒", ok: 2, ai: true, why: "Ilustrazio argia da, ez du errealitatea faltsutzen; AA erabilera adierazi behar da." }
        ],
        captions: [
          "🚨 AMAITU DA! Itsasbeltzen mugikorrak debekatuta hondartzan!! 300 €-ko isunak 😱😱",
          "Ez, Itsasbeltzen ez dituzte mugikorrak debekatuko hondartzetan. Udalak borondatezko «Deskonexio-eremu» bat probatuko du 2027ko udan Hondarzuriko 200 metrotan, isunik gabe. Informazio osoa udalaren prentsa-oharrean 👇",
          "Itsasbeltzeko udalak mugikorrak kontrolatuko ditu hondartzetan datorren urtetik aurrera. Zer iruditzen zaizu? 🤔"
        ],
        accKw: [/ez (dituzte|da|dira)|ez dago debeku|ez da debeku/, /borondatez|boluntario/, /isun/, /hondarzuri|200|eremu|proba|pilotu/],
        sourceLabel: "🔗 itsasbeltz.eus/prentsa/deskonexio-eremua"
      }
    },

    /* ------------------------------------------------------------------ */
    energia: {
      id: "energia",
      title: "Energia-edari batek notak hobetzen ditu?",
      role: "Institutuko «Gazte Ahotsa» aldizkariko erredaktorea",
      context: "Limurtzea · Ikaskuntza",
      color: "#94591a",
      manager: { name: "Aitor", role: "aldizkariaren arduraduna", color: "#4d49a8" },
      claimUrl: "fokumax-berriak.com/ikerketa-notak-30",
      intro: [
        "Kaixo! Ikasle batek esteka hau bidali digu eta aldizkarian argitaratzea proposatu du:",
        "LINK",
        "Azterketa-garaia hurbil dagoenez, askok irakurriko dute eta batzuek sinetsi egingo dute. <b>Egiaztatu</b>, mesedez, eta bidali zure epaia <b>iturriekin</b> argitaratu aurretik."
      ],
      linkText: "«Ikerketa berria: FokuMax edateak azterketetako notak %30 hobetzen ditu»",
      colleague: [["Maialen", "Aldizkariaren azala asteazkenean itxiko dugu 📰"], ["Maialen", "Argazkiak behar ditugu kirol-atalerako, norbaitek?"]],
      verdict: "okerra",
      verdictAlt: "partzial",
      verdictWhy: "Ikerketa existitzen da, baina markak berak ordaindu eta egin zuen, 24 lagunekin, kontrol-talderik gabe eta notak autoadierazita. Ondorioak ez du oinarririk, eta osasun agintariek ez dituzte energia-edariak gomendatzen 18 urtetik beherakoentzat.",
      justKw: [
        [/24|lagin|txiki/, "lagin txikia (24 lagun)"],
        [/finantz|ordaindu|enpresa|markak berak|interes|fokumax s\.?l|langile/, "interes-gatazka (markak ordaindua)"],
        [/kontrol/, "kontrol-talderik ez"],
        [/18|nerabe|osasun|agentzia|gomend/, "osasun agintarien gomendioa"],
        [/\blo\b|loa|lo egin|kafeina/, "loa eta kafeinaren eragina"],
        [/autoadieraz|beraiek adierazi|parekoen|argitaratu gabe|aldizkari/, "argitaratu gabea / notak autoadierazita"]
      ],
      model: "Albistea okerra da. «Ikerketa» FokuMax S.L. enpresak berak ordaindu eta bere langileek egin zuten: 24 boluntario, astebete, kontrol-talderik gabe eta notak parte-hartzaileek beraiek adierazita; ez da aldizkari zientifiko batean argitaratu. Webgunea markaren komunikazio-atala da, eta «Dr. Laura Mendi»ren irudia AAk sortua da. Osasun Publikoaren Agentziak ez ditu energia-edariak gomendatzen 18 urtetik beherakoentzat, eta Kantauriko Unibertsitatearen 2.300 ikasleko ikerketak dio loa dela emaitzetan eragin handiena duena, kafeinak loa okertzen duen bitartean.",
      aiTrigger: ["fokumax", "energia", "edari", "nota", "kafeina"],
      aiOverview: "Ikerketa batzuen arabera, FokuMax bezalako energia-edariek errendimendu akademikoa <b>%30 arte</b> hobetu dezakete, eta neurriz edanda <b>seguruak</b> dira nerabeentzat.",
      aiSources: "fokumax-berriak.com, klik.sim",
      suggest: ["fokumax ikerketa notak", "energia edariak nerabeak osasuna", "loa eta azterketak"],
      images: {
        img2: {
          label: "«Dr. Laura Mendi» (FokuMax Berriak)",
          html: `<div class="match"><div class="thumb" style="background:linear-gradient(135deg,#fde68a,#f97316)">👩‍🔬</div><div><b>Irudi bera 12 webgunetan agertzen da, izen desberdinekin:</b> «Dr. Sarah Klein», «Dra. Ana Ruiz», «Prof. Emma Lang»…<br><span style="color:#6b6a80;font-size:.85rem">Denak osagarri eta edari-marken iragarkiak.</span></div></div>
          <div class="match"><div class="thumb" style="background:#ede9fe">✦</div><div><b>Jatorri-kredentzialak:</b> AA irudi-bilduma batetik («AI stock portraits»).<br><span style="color:#6b6a80;font-size:.85rem">Ez dago Laura Mendi izeneko ikertzailerik datu-base akademikoetan.</span></div></div>`
        }
      },
      pages: {
        "fokumax-berriak.com/ikerketa-notak-30": {
          title: "Ikerketa: FokuMax-ek notak %30 hobetzen ditu – FokuMax Berriak", fav: "⚡", favc: "#f97316", cls: "", cred: 0, seo: 1.3, claim: true,
          kw: ["fokumax", "energia", "edari", "nota", "azterket", "ikerketa", "30", "berriak"],
          snippet: "Aditu-talde batek egindako ikerketa aitzindari batek erakutsi du FokuMax egunero edaten duten ikasleek %30 nota hobeak lortu dituztela.",
          top: { bg: "linear-gradient(90deg,#f97316,#facc15)", color: "#1c1b2e", logo: "FokuMax BERRIAK ⚡", nav: [["Albisteak", null], ["Produktuak", "fokumax.shop"], ["Guri buruz", "fokumax-berriak.com/guri-buruz"]] },
          body: () => `<div style="font-size:.68rem;color:#9a3412;letter-spacing:.04em">BABESTUTAKO EDUKIA</div>
            <h1>Ikerketa berria: FokuMax edateak azterketetako notak %30 hobetzen ditu</h1>
            <div class="byline">Zientzia-taldea · 2026/09/02</div>
            ${IMG("img2", "linear-gradient(135deg,#fde68a,#f97316)", "👩‍🔬🧪", "Dr. Laura Mendi, ikerketaren arduraduna")}
            <p>Aditu-talde batek egindako ikerketa aitzindari batek erakutsi du FokuMax energia-edaria egunero edaten duten ikasleek <b>%30 nota hobeak</b> lortu dituztela. «Emaitzak ikaragarriak dira», dio Dr. Laura Mendik.</p>
            <p>FokuMax-ek kafeina, taurina eta B bitaminak konbinatzen ditu kontzentrazioa «berehala» handitzeko. Gazteentzat pentsatua dago eta azterketa-garaian bereziki gomendagarria da.</p>
            <p>📄 ${L("fokumax-berriak.com/dokumentuak/ikerketa-2026.pdf", "Irakurri ikerketa osoa (PDF)")}</p>
            <div class="ad-slot">🎁 Erabili IKASLE20 kodea: %20 deskontua lehen erosketan</div>`
        },
        "fokumax-berriak.com/guri-buruz": {
          title: "Guri buruz – FokuMax Berriak", fav: "⚡", favc: "#f97316", cls: "", cred: 0, seo: 0.6, check: true,
          kw: ["fokumax", "guri buruz", "berriak"],
          snippet: "FokuMax Berriak FokuMax S.L. enpresaren komunikazio-atala da.",
          top: { bg: "linear-gradient(90deg,#f97316,#facc15)", color: "#1c1b2e", logo: "FokuMax BERRIAK ⚡", nav: [["Albisteak", "fokumax-berriak.com/ikerketa-notak-30"]] },
          body: () => `<h1>Guri buruz</h1><p><b>FokuMax Berriak FokuMax S.L. enpresaren komunikazio-atala da.</b> Hemen gure produktuei eta bizimodu aktiboari buruzko edukiak argitaratzen ditugu.</p><p>Edukiak marketin-taldeak prestatzen ditu. ${L("fokumax.shop", "Ikusi gure produktuak")}</p>`
        },
        "fokumax-berriak.com/dokumentuak/ikerketa-2026.pdf": {
          title: "ikerketa-2026.pdf", fav: "📄", favc: "#b91c1c", cls: "", cred: 1, seo: 0.7, check: true,
          kw: ["fokumax", "ikerketa", "pdf", "azterketa"],
          snippet: "FokuMax-en eragina errendimendu akademikoan: azterketa esploratzailea. L. Mendi, J. Ortiz (FokuMax S.L.).",
          top: { bg: "#525659", color: "#fff", logo: "📄 ikerketa-2026.pdf", nav: [] },
          body: () => `<div style="background:#fff;border:1px solid #ddd;padding:1.4rem;box-shadow:0 4px 14px rgba(0,0,0,.08)">
            <h1 style="font-size:1.3rem">FokuMax-en eragina errendimendu akademikoan: azterketa esploratzailea</h1>
            <p><b>Egileak:</b> L. Mendi, J. Ortiz (FokuMax S.L., I+G saila)<br><b>Finantzaketa:</b> FokuMax S.L.</p>
            <h2>Metodoa</h2><p>24 boluntario (16–19 urte), astebete, egunean lata bat. Notak: parte-hartzaileek beraiek adierazitakoak, aurreko astearekin alderatuta. Ez zegoen kontrol-talderik.</p>
            <h2>Emaitzak</h2><p>Autoadierazitako batez besteko nota 6,1etik 7,9ra igo zen (+%29,5).</p>
            <h2>Mugak</h2><p>Lagin txikia. Kontrol-talderik ez. Emaitzak ez dira aldizkari zientifiko batean argitaratu (ez dago parekoen berrikuspenik).</p></div>`
        },
        "osasun-agentzia.eus/energia-edariak-gazteak": {
          title: "Energia-edariak eta nerabeak – Osasun Publikoaren Agentzia", fav: "✚", favc: "#0e7490", cls: "", cred: 3, indep: true, seo: 0.8,
          kw: ["energia", "edari", "nerabe", "gazte", "kafeina", "osasun", "agentzia", "gomendio", "segur"],
          snippet: "Ez dira gomendatzen 18 urtetik beherakoentzat. Kafeina gehiegik loa okertzen du; ez dago ebidentziarik errendimendua hobetzen dutenik.",
          top: { bg: "#0e7490", color: "#fff", logo: "✚ Osasun Publikoaren Agentzia", nav: [["Gaiak", null], ["Argitalpenak", null]] },
          body: () => `<div class="byline">Eguneratua: 2026/03/10</div><h1>Energia-edariak eta nerabeak: galdera eta erantzunak</h1>
            <p>Energia-edariek kafeina kopuru handiak izan ohi dituzte (lata batean 80–160 mg) eta, askotan, azukre asko.</p>
            <ul><li><b>Ez dira gomendatzen 18 urtetik beherakoentzat.</b></li><li>Nerabeetan, kafeina gehiegik <b>loa</b> okertzen du, eta antsietatea, bihotz-taupada azkarrak eta buruko mina eragin ditzake.</li><li>Ez dago ebidentzia sendorik errendimendu akademikoa hobetzen dutenik; loa, elikadura eta atsedena dira faktore frogatuak.</li></ul>`
        },
        "kantauri-unibertsitatea.eus/berriak/loa-eta-notak": {
          title: "Azterketa-garaian, loa da «edaririk» onena – Kantauriko Unibertsitatea", fav: "U", favc: "#1e3a8a", cls: "", cred: 3, indep: true, seo: 0.8,
          kw: ["loa", "lo", "nota", "azterket", "kafeina", "unibertsitate", "ikerketa", "ikasle"],
          snippet: "2.300 ikasle baino gehiagorekin egindako azterketa: 7 ordu baino gehiago lo egiten dutenek emaitza hobeak.",
          top: { bg: "#1e3a8a", color: "#fff", logo: "🎓 Kantauriko Unibertsitatea", nav: [["Berriak", null]] },
          body: () => `<div class="byline">Komunikazio Bulegoa · 2026/05/14</div><h1>Azterketa-garaian, loa da «edaririk» onena</h1>
            <p>Psikologia Fakultateak 2.300 ikasle baino gehiagorekin egindako azterketa batek erakutsi du azterketa aurreko gauean 7 ordu baino gehiago lo egiten dutenek emaitza hobeak lortzen dituztela. Kafeinaren kontsumo handiak, aldiz, loaren kalitatea jaisten du.</p>
            <p>«Kafeinak unean erne egoten lagun dezake, baina ez du ikasten laguntzen, eta lo gutxiagoren ordaina handiagoa da», dio Itziar Garmendia ikertzaileak. Ikerketa parekoek berrikusitako aldizkari batean argitaratu da.</p>`
        },
        "egiaztatu.eus/fokumax-notak-30": {
          title: "FokuMax-ek ez ditu notak %30 hobetzen – Egiaztatu.eus", fav: "✓", favc: "#15803d", cls: "", cred: 3, indep: true, seo: 0.75, check: true,
          kw: ["fokumax", "nota", "faltsu", "gezur", "egiazta", "energia", "edari", "30", "bulo"],
          snippet: "EPAIA: FALTSUA. Markak berak ordaindutako ikerketa, 24 lagunekin eta kontrol-talderik gabe.",
          top: { bg: "#15803d", color: "#fff", logo: "✓ Egiaztatu.eus", nav: [["Metodologia", null]] },
          body: () => `<div class="byline">2026/09/05 · Egiaztapen-taldea</div><h1>FokuMax-ek ez ditu notak %30 hobetzen</h1>
            <div class="site-banner" style="background:#fecaca"><b>EPAIA: FALTSUA</b></div>
            <p>«Ikerketa» ${L("fokumax-berriak.com/dokumentuak/ikerketa-2026.pdf", "markak berak ordaindu eta egin zuen")}: 24 parte-hartzaile, kontrol-talderik gabe eta notak autoadierazita. Ez da aldizkari zientifikoetan argitaratu.</p>
            <p>${L("osasun-agentzia.eus/energia-edariak-gazteak", "Osasun agintariek")} ez dituzte energia-edariak gomendatzen 18 urtetik beherakoentzat. «Dr. Laura Mendi»ren argazkia AA bidez sortua da.</p>`
        },
        "klik.sim/@gym_ander/p/88213": {
          title: "@gym_ander · Klik", fav: "K", favc: "#c95fc1", cls: "", cred: 0, seo: 1.0,
          kw: ["fokumax", "ander", "gym", "klik", "nota", "energia"],
          snippet: "Azterketetan FokuMax-ekin 🔥 notak gora! Kodea ANDER20",
          top: { bg: "#fff", color: "#1c1b2e", logo: "Klik", border: true, nav: [] },
          body: () => `<div class="stim-frame post" style="max-width:480px"><div class="post-head">${MAIL.avatar("gym ander", "#c95fc1")}<div class="who"><b>gym_ander <span class="verified">✓</span></b><span>@gym_ander · 210 mila jarraitzaile</span></div></div>
            <div class="post-body">Azterketetan FokuMax-ekin 🔥 notak gora! Nik egunero 2 lata 💪 Kodea <b>ANDER20</b> #fokumax #motibazioa</div>
            <div class="post-media" style="background:linear-gradient(135deg,#f97316,#facc15)">⚡🥤</div>
            <div class="post-comments"><p><b>@nerea_17</b>benetan funtzionatzen du?</p><p><b>@mikel.z</b>#publi jarri beharko zenuke 🤨</p></div></div>`
        },
        "foroa-ikasleak.net/gaia/energia-edariak": {
          title: "Energia-edariak azterketetan? – Ikasleen Foroa", fav: "F", favc: "#6b7280", cls: "", cred: 1, seo: 1.0,
          kw: ["energia", "edari", "foro", "ikasle", "azterket", "fokumax"],
          snippet: "nik 3 edaten ditut azterketa aurretik eta ondo · nik taupadak izan nituen…",
          top: { bg: "#e5e7eb", color: "#1c1b2e", logo: "💬 Ikasleen Foroa", nav: [] },
          body: () => `<h1>Energia-edariak azterketetan?</h1><p><b>kimika_hater</b><br>nik 3 edaten ditut azterketa aurretik eta ondo 😎</p><p><b>laia.b</b><br>Nik behin bi hartu nituen eta taupadak izan nituen, ez nuen lo egin. Ez berriro.</p><p><b>oier_x</b><br>Gurasoek debekatu didate. Ikasi goizean eta lo egin, horixe da trikimailua.</p>`
        },
        "fokumax.shop": {
          title: "FokuMax denda", fav: "⚡", favc: "#f97316", cls: "", cred: 0, seo: 1, ad: true,
          kw: ["fokumax", "energia", "edari", "azterket", "nota"],
          snippet: "Azterketa-paketea 3x2! Kontzentrazioa berehala.",
          top: { bg: "#f97316", color: "#fff", logo: "⚡ FokuMax denda", nav: [] },
          body: () => `<h1>Azterketa-paketea: 3x2!</h1><p>Kontzentrazioa berehala ⚡ Ikasleentzako prezio bereziak.</p><div class="ad-slot">🛒 Erosi orain</div>`
        }
      },
      create: {
        brief: "Eskerrik asko! Orain sortu post bat aldizkariaren sare sozialetarako (@gazteahotsa), <b>ikaskideei</b> azaltzeko zer den egia. AA laguntzailea erabil dezakezu. Audientzia: 12–18 urteko ikasleak.",
        account: "Gazte Ahotsa",
        images: [
          { id: "a", l: "AA irudi fotorrealista: ikasle bat konortea galduta mahaian, lata eskuan", bg: "linear-gradient(135deg,#1f2937,#7f1d1d)", emoji: "😵🥤", ok: 0, ai: true, why: "Beldurra eragiteko eszena faltsua: sentsazionalismoa eta desinformazioa, beste noranzkoan." },
          { id: "b", l: "Infografia: «Loa > energia-edariak» Agentziaren datuekin", bg: "linear-gradient(135deg,#dbeafe,#e0e7ff)", emoji: "😴📚", ok: 2, ai: false, why: "Datu egiaztatuak, iturria aipatuta, audientziarentzat erabilgarria." },
          { id: "c", l: "FokuMax-en iragarkiko argazki ofiziala", bg: "linear-gradient(90deg,#f97316,#facc15)", emoji: "⚡🥤", ok: 0, ai: false, why: "Markaren irudia erabiltzeak publizitatea egiten dio eta egile-eskubideak ditu." }
        ],
        captions: [
          "ENERGIA-EDARIEK HIL EGITEN ZAITUZTE ☠️☠️ ez edan inoiz!!",
          "«FokuMax-ek notak %30 hobetzen ditu»? Ez da horrela: ikerketa markak berak ordaindu zuen, 24 lagunekin eta kontrol-talderik gabe. Osasun agintariek ez dituzte gomendatzen 18 urtetik beherakoentzat. Lo ona da azterketetarako trikimailurik onena 😴📚",
          "Energia-edariak eta azterketak: bai ala ez? Bakoitzak erabaki dezala 🤷"
        ],
        accKw: [/ez da (horrela|egia)|faltsu|gezur/, /markak|ordaindu|interes/, /24|kontrol/, /18|osasun|gomend/, /\blo\b|loa/],
        sourceLabel: "🔗 osasun-agentzia.eus/energia-edariak-gazteak"
      }
    }
  };

  /* ======================================================================
     SIMULAGAILUA
     ====================================================================== */
  function Sim(root, sc) {
    const S = {
      t0: Date.now(),
      log: [],
      tabs: [],
      active: null,
      tabSeq: 0,
      visited: new Set(),
      queries: [],
      aiSeen: false,
      imgCheck: false,
      downloaded: false,
      notes: "",
      submitted: null,
      created: null,
      phase: 1
    };
    const secs = () => Math.round((Date.now() - S.t0) / 1000);
    const mmss = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
    const ev = (type, detail) => S.log.push({ t: secs(), type, detail });

    root.innerHTML = `
      <div class="desktop" role="application" aria-label="Mahaigain simulatua">
        <div class="desktop-top">
          <span class="task-pill">🖥️ <b>${esc(sc.title)}</b> · ${esc(sc.role)}</span>
          <span>⏱️ <span data-clock>00:00</span> · gomendatua 20 min</span>
        </div>
        <div class="desktop-area">
          <section class="win" data-win="chat"><div class="win-bar"><span class="dots"><i></i><i></i><i></i></span>💬 Txata</div><div class="win-content" data-chat></div></section>
          <section class="win" data-win="browser"><div class="win-bar"><span class="dots"><i></i><i></i><i></i></span>🌐 Nabigatzailea</div><div class="win-content"><div class="browser" data-browser></div></div></section>
          <section class="win" data-win="notes"><div class="win-bar"><span class="dots"><i></i><i></i><i></i></span>📝 Oharrak</div><div class="win-content" data-notes></div></section>
          <section class="win" data-win="files"><div class="win-bar"><span class="dots"><i></i><i></i><i></i></span>📁 Fitxategiak</div><div class="win-content" data-files></div></section>
          <section class="win" data-win="creator"><div class="win-bar"><span class="dots"><i></i><i></i><i></i></span>✦ Sortzailea</div><div class="win-content" data-creator></div></section>
        </div>
        <nav class="dock" aria-label="Aplikazioak">
          <button type="button" data-open="chat"><span class="ic">💬</span><span class="lbl">Txata</span><span class="badge-n" data-badge="chat">1</span></button>
          <button type="button" data-open="browser"><span class="ic">🌐</span><span class="lbl">Nabigatzailea</span></button>
          <button type="button" data-open="notes"><span class="ic">📝</span><span class="lbl">Oharrak</span></button>
          <button type="button" data-open="files"><span class="ic">📁</span><span class="lbl">Fitxategiak</span></button>
          <button type="button" data-open="creator" hidden><span class="ic">✦</span><span class="lbl">Sortzailea</span><span class="badge-n" data-badge="creator">1</span></button>
        </nav>
      </div>`;

    const $ = (s) => root.querySelector(s);
    const clock = setInterval(() => {
      const el = $("[data-clock]");
      if (!el) return clearInterval(clock);
      el.textContent = mmss(secs());
    }, 1000);

    function openWin(name) {
      root.querySelectorAll(".win").forEach((w) => w.classList.toggle("active", w.dataset.win === name));
      root.querySelectorAll("[data-open]").forEach((b) => b.classList.toggle("on", b.dataset.open === name));
      const badge = root.querySelector(`[data-badge="${name}"]`);
      if (badge) badge.remove();
      ev("app", name);
    }
    root.querySelectorAll("[data-open]").forEach((b) => b.addEventListener("click", () => openWin(b.dataset.open)));

    /* ---------------- TXATA ---------------- */
    const chat = $("[data-chat]");
    chat.innerHTML = `
      <div class="app-chat">
        <div class="app-chat-list">
          <div class="ch on" data-ch="boss">${MAIL.avatar(sc.manager.name, sc.manager.color)}<div class="meta"><b>${esc(sc.manager.name)}</b><span>${esc(sc.manager.role)}</span></div></div>
          <div class="ch" data-ch="team">${MAIL.avatar("Taldea", "#6b7280")}<div class="meta"><b>Erredakzioa</b><span>${esc(sc.colleague[0][1])}</span></div></div>
        </div>
        <div class="app-chat-thread">
          <div class="thread-log" data-thread="boss"></div>
          <div class="thread-log" data-thread="team" hidden></div>
          <div class="composer" data-composer></div>
        </div>
      </div>`;
    chat.querySelectorAll("[data-ch]").forEach((c) =>
      c.addEventListener("click", () => {
        chat.querySelectorAll("[data-ch]").forEach((x) => x.classList.toggle("on", x === c));
        chat.querySelectorAll("[data-thread]").forEach((t) => (t.hidden = t.dataset.thread !== c.dataset.ch));
        $("[data-composer]").hidden = c.dataset.ch !== "boss";
      })
    );
    const boss = chat.querySelector('[data-thread="boss"]');
    const team = chat.querySelector('[data-thread="team"]');
    const say = (log, who, html, me) => {
      const d = document.createElement("div");
      d.className = "bubble" + (me ? " me" : "");
      d.innerHTML = `<b>${esc(who)}</b>${html}`;
      log.appendChild(d);
      log.scrollTop = log.scrollHeight;
      return d;
    };
    sc.colleague.forEach(([w, t]) => say(team, w, esc(t)));
    sc.intro.forEach((m) => {
      if (m === "LINK") say(boss, sc.manager.name, `🔗 <button type="button" class="link" data-claim>${esc(sc.linkText)}</button>`);
      else say(boss, sc.manager.name, m);
    });
    const tasks = say(
      boss,
      sc.manager.name,
      `<b>Egin beharrekoak:</b><ul class="task-list">
        <li data-task="1"><span class="tk">✓</span>Ireki albistea eta irakurri.</li>
        <li data-task="2"><span class="tk">✓</span>Bilatu informazioa beste iturri batzuetan.</li>
        <li data-task="3"><span class="tk">✓</span>Egiaztatu iturrien egilea eta sinesgarritasuna.</li>
        <li data-task="4"><span class="tk">✓</span>Bidali epaia, iturriak eta ebidentzia behean.</li>
      </ul>`
    );
    boss.addEventListener("click", (e) => {
      if (e.target.closest("[data-claim]")) {
        openWin("browser");
        openTab(sc.claimUrl);
      }
    });
    function tick() {
      const done = {
        1: S.visited.has(sc.claimUrl),
        2: S.queries.length > 0,
        3: [...S.visited].some((u) => sc.pages[u] && (sc.pages[u].check || (sc.pages[u].indep && sc.pages[u].cred >= 3))),
        4: !!S.submitted
      };
      tasks.querySelectorAll("[data-task]").forEach((li) => li.classList.toggle("done", done[li.dataset.task]));
    }

    /* Erantzun-sortzailea */
    const comp = $("[data-composer]");
    const verdicts = [["zehatza", "✅ Zehatza"], ["partzial", "⚠️ Partzialki zehatza"], ["okerra", "❌ Okerra"]];
    let verdict = null;
    function sourceOptions() {
      const opts = [...S.visited].filter((u) => sc.pages[u]).map((u) => [u, sc.pages[u].title]);
      if (S.aiSeen) opts.push(["__ai", "✦ Bilatzailearen AA laburpena"]);
      return `<option value="">— aukeratu bisitatutako orri bat —</option>` + opts.map((o) => `<option value="${esc(o[0])}">${esc(o[1])}</option>`).join("");
    }
    function drawComposer() {
      comp.innerHTML = `
        <h5>✉️ Bidali zure erantzuna ${esc(sc.manager.name)}ri</h5>
        <div class="row"><span>(a) Albistea…</span><div class="verdicts">${verdicts.map((v) => `<button type="button" data-v="${v[0]}" class="${verdict === v[0] ? "sel" : ""}">${v[1]}</button>`).join("")}</div></div>
        <div class="row"><span>(b) Kontsultatutako iturriak</span><div data-sources style="display:grid;gap:.35rem"></div><button type="button" class="btn btn-ghost btn-sm" data-addsrc style="justify-self:start">+ Gehitu beste iturri bat</button></div>
        <div class="row"><span>(c) Ebidentzia: zer aurkitu duzu eta zergatik ondorioztatu duzu hori?</span><textarea class="p-textarea" data-just style="min-height:90px" placeholder="Iturri ofizialaren arabera…"></textarea></div>
        <div style="display:flex;gap:.5rem;align-items:center;flex-wrap:wrap"><button type="button" class="btn btn-dark btn-sm" data-send>Bidali</button><span data-err style="font-size:.82rem;color:var(--bad)"></span></div>`;
      comp.querySelectorAll("[data-v]").forEach((b) =>
        b.addEventListener("click", () => {
          verdict = b.dataset.v;
          comp.querySelectorAll("[data-v]").forEach((x) => x.classList.toggle("sel", x === b));
        })
      );
      const srcHost = comp.querySelector("[data-sources]");
      const addRow = () => {
        if (srcHost.children.length >= 4) return;
        const r = document.createElement("div");
        r.className = "source-row";
        r.innerHTML = `<select class="p-select" aria-label="Iturria">${sourceOptions()}</select><button type="button" class="btn btn-ghost btn-sm" aria-label="Kendu iturria">✕</button>`;
        r.querySelector("button").addEventListener("click", () => srcHost.children.length > 1 && r.remove());
        r.querySelector("select").addEventListener("focus", (e) => {
          const v = e.target.value;
          e.target.innerHTML = sourceOptions();
          e.target.value = v;
        });
        srcHost.appendChild(r);
      };
      addRow();
      comp.querySelector("[data-addsrc]").addEventListener("click", addRow);
      comp.querySelector("[data-send]").addEventListener("click", () => {
        const sources = [...srcHost.querySelectorAll("select")].map((s) => s.value).filter(Boolean);
        const just = comp.querySelector("[data-just]").value.trim();
        const err = comp.querySelector("[data-err]");
        if (!verdict) return (err.textContent = "Aukeratu epaia.");
        if (!sources.length) return (err.textContent = "Gehitu gutxienez iturri bat (lehenik bisitatu orriak nabigatzailean).");
        if ((just.match(/\S+/g) || []).length < 8) return (err.textContent = "Idatzi ebidentzia gutxienez esaldi pare batean.");
        S.submitted = { verdict, sources: [...new Set(sources)], just, t: secs() };
        ev("submit", verdict);
        tick();
        say(boss, "Zu", `<b>${esc(verdicts.find((v) => v[0] === verdict)[1])}</b><br>${S.submitted.sources.map((u) => (u === "__ai" ? "✦ AA laburpena" : "🔗 " + esc(u))).join("<br>")}<br><br>${esc(just)}`, true);
        comp.innerHTML = "";
        setTimeout(() => {
          say(boss, sc.manager.name, "Eskerrik asko! Zure lanak asko laguntzen digu erabakitzen. 🙌");
          say(boss, sc.manager.name, sc.create.brief + `<br><br>👉 Ireki <b>✦ Sortzailea</b> aplikazioa behean.`);
          const cb = root.querySelector('[data-open="creator"]');
          cb.hidden = false;
          S.phase = 2;
          drawCreator();
        }, 900);
      });
    }
    drawComposer();

    /* ---------------- NABIGATZAILEA ---------------- */
    const br = $("[data-browser]");
    br.innerHTML = `
      <div class="br-tabs" data-tabs></div>
      <div class="br-bar">
        <button type="button" data-back aria-label="Atzera">←</button>
        <button type="button" data-fwd aria-label="Aurrera">→</button>
        <form class="br-url" data-urlform><span class="lock">🔒</span><label class="sr-only" for="brUrl-${sc.id}">Helbidea edo bilaketa</label><input id="brUrl-${sc.id}" data-url autocomplete="off" placeholder="Idatzi helbidea edo bilatu"></form>
      </div>
      <div class="br-page" data-page></div>`;
    const tabsEl = br.querySelector("[data-tabs]");
    const pageEl = br.querySelector("[data-page]");
    const urlIn = br.querySelector("[data-url]");

    function openTab(url) {
      const tab = { id: ++S.tabSeq, hist: [], idx: -1 };
      S.tabs.push(tab);
      S.active = tab;
      go(url);
    }
    function go(url, replace) {
      const tab = S.active;
      if (!tab) return openTab(url);
      if (!replace) {
        tab.hist = tab.hist.slice(0, tab.idx + 1);
        tab.hist.push(url);
        tab.idx = tab.hist.length - 1;
      }
      render();
    }
    function current() {
      return S.active ? S.active.hist[S.active.idx] : null;
    }
    function titleOf(url) {
      if (!url || url === "bilatu.sim") return "Bilatu";
      if (url.startsWith("bilatu.sim/?q=")) return decodeURIComponent(url.slice(14)) + " – Bilatu";
      if (url.startsWith("bilatu.sim/irudiak")) return "Irudi-bilaketa – Bilatu";
      return sc.pages[url] ? sc.pages[url].title : "Ez da aurkitu";
    }
    function renderTabs() {
      tabsEl.innerHTML =
        S.tabs
          .map(
            (t) => `<button type="button" class="br-tab ${t === S.active ? "on" : ""}" data-tab="${t.id}"><span class="tt">${esc(titleOf(t.hist[t.idx]))}</span><span class="x" data-close="${t.id}" aria-label="Itxi fitxa">×</span></button>`
          )
          .join("") + `<button type="button" class="br-newtab" data-new aria-label="Fitxa berria">+</button>`;
      tabsEl.querySelectorAll("[data-tab]").forEach((b) =>
        b.addEventListener("click", (e) => {
          const closeId = e.target.closest("[data-close]");
          if (closeId) {
            const id = +closeId.dataset.close;
            const i = S.tabs.findIndex((t) => t.id === id);
            S.tabs.splice(i, 1);
            if (S.active && S.active.id === id) S.active = S.tabs[Math.max(0, i - 1)] || null;
            if (!S.tabs.length) return openTab("bilatu.sim");
            return render();
          }
          S.active = S.tabs.find((t) => t.id === +b.dataset.tab);
          render();
        })
      );
      tabsEl.querySelector("[data-new]").addEventListener("click", () => {
        openTab("bilatu.sim");
        setTimeout(() => pageEl.querySelector("input")?.focus(), 30);
      });
    }
    function render() {
      renderTabs();
      const url = current();
      urlIn.value = url || "";
      br.querySelector("[data-back]").disabled = !S.active || S.active.idx <= 0;
      br.querySelector("[data-fwd]").disabled = !S.active || S.active.idx >= S.active.hist.length - 1;
      pageEl.scrollTop = 0;
      if (url === "bilatu.sim") pageEl.innerHTML = seHome();
      else if (url.startsWith("bilatu.sim/?q=")) pageEl.innerHTML = seResults(decodeURIComponent(url.slice(14)));
      else if (url.startsWith("bilatu.sim/irudiak?")) pageEl.innerHTML = imgSearch(url.split("?")[1]);
      else if (sc.pages[url]) pageEl.innerHTML = sitePage(url);
      else pageEl.innerHTML = `<div class="se-home"><div style="font-size:2.4rem">🌐</div><b>Ezin da orria aurkitu</b><p style="color:#6b6a80;font-size:.9rem;max-width:420px;text-align:center">«${esc(url)}» ez dago simulazio honetan. Probatu bilatzailea.</p></div>`;
      bindPage();
      if (sc.pages[url]) {
        if (!S.visited.has(url)) ev("visit", url);
        S.visited.add(url);
        tick();
        drawNotesList();
      }
    }
    function seForm(q) {
      return `<form class="se-form" data-se><label class="sr-only" for="se-${sc.id}-${S.tabSeq}">Bilatu</label><input id="se-${sc.id}-${S.tabSeq}" name="q" value="${esc(q || "")}" placeholder="Bilatu…" autocomplete="off"><button type="submit">Bilatu</button></form>`;
    }
    function seHome() {
      return `<div class="se-home"><div class="se-logo"><span>Bi</span><span>la</span><span>tu</span></div>${seForm("")}<p style="font-size:.8rem;color:#6b6a80">Bilatzaile simulatua · Adibideak: ${sc.suggest.map((s) => `<button type="button" class="inline-link" data-q="${esc(s)}">${esc(s)}</button>`).join(" · ")}</p></div>`;
    }
    function search(q) {
      const toks = norm(q).split(/[^a-z0-9ñ]+/).filter((t) => t.length >= 2);
      const scored = Object.entries(sc.pages)
        .map(([url, p]) => {
          let m = 0;
          toks.forEach((t) => {
            if (p.kw.some((k) => { const nk = norm(k); return nk.startsWith(t) || (t.length >= 4 && t.startsWith(nk)) || (nk.length >= 4 && t.includes(nk)); })) m++;
            else if (t.length >= 4 && norm(p.title).includes(t)) m += 0.5;
          });
          return { url, p, s: m * p.seo };
        })
        .filter((r) => r.s > 0);
      const ads = scored.filter((r) => r.p.ad).sort((a, b) => b.s - a.s).slice(0, 1);
      const org = scored.filter((r) => !r.p.ad).sort((a, b) => b.s - a.s).slice(0, 7);
      const ai = toks.some((t) => sc.aiTrigger.some((k) => norm(k).startsWith(t) || t.startsWith(norm(k))));
      return { ads, org, ai };
    }
    function seResults(q) {
      const r = search(q);
      if (r.ai && !S.aiSeen) {
        S.aiSeen = true;
        ev("aiOverview", q);
      }
      const row = (x, ad) => `<div class="se-result">
          <div class="url">${ad ? '<span class="spons">Babestua ·</span>' : ""}<span class="fav" style="background:${x.p.favc}">${esc(x.p.fav)}</span>${esc(x.url.split("/")[0])} › ${esc(x.url.split("/").slice(1).join(" › "))}</div>
          <button type="button" class="t" data-newtab="${esc(x.url)}">${esc(x.p.title)}</button>
          <div class="d">${esc(x.p.snippet)}</div></div>`;
      return `<div class="se-results">${seForm(q)}
        <div class="info">Gutxi gorabehera ${(r.org.length * 1830 + 47).toLocaleString("eu")} emaitza</div>
        ${r.ads.map((x) => row(x, true)).join("")}
        ${r.ai && r.org.length ? `<div class="ai-overview"><div class="h">✦ AA laburpena <span style="font-weight:400;color:#6b6a80">· esperimentala</span></div>${sc.aiOverview}<div style="font-size:.76rem;color:#6b6a80;margin-top:.35rem">Iturriak: ${esc(sc.aiSources)}</div></div>` : ""}
        ${r.org.length ? r.org.map((x) => row(x)).join("") : `<div class="se-empty">Ez da emaitzarik aurkitu «${esc(q)}» bilaketarentzat. Probatu beste hitz batzuk, adibidez: ${sc.suggest.map((s) => `<button type="button" class="inline-link" data-q="${esc(s)}">${esc(s)}</button>`).join(", ")}.</div>`}
      </div>`;
    }
    function imgSearch(id) {
      const im = sc.images[id];
      if (!S.imgCheck) ev("imageSearch", id);
      S.imgCheck = true;
      return `<div class="revimg"><div class="se-logo" style="font-size:1.6rem"><span>Bi</span><span>la</span><span>tu</span> <span style="color:#6b6a80;font-size:1rem">irudiak</span></div>
        <div class="drop">🖼️ Bilatutako irudia: <b>${esc(im.label)}</b></div>${im.html}</div>`;
    }
    function sitePage(url) {
      const p = sc.pages[url];
      const top = p.top;
      return `<div class="site ${p.cls || ""}">
        <div class="site-top" style="background:${top.bg};color:${top.color};${top.border ? "border-bottom:3px solid #1c1b2e" : ""}">
          <span class="logo">${top.logo}</span>
          <nav>${(top.nav || []).map(([l, h]) => (h ? `<button type="button" data-href="${esc(h)}">${esc(l)}</button>` : `<span style="opacity:.8">${esc(l)}</span>`)).join("")}</nav>
        </div>
        <div class="site-main">${p.body()}</div>
        ${p.foot ? `<div class="site-foot">${esc(p.foot)}</div>` : ""}
      </div>`;
    }
    function bindPage() {
      pageEl.querySelectorAll("[data-se]").forEach((f) =>
        f.addEventListener("submit", (e) => {
          e.preventDefault();
          const q = f.q.value.trim();
          if (!q) return;
          S.queries.push(q);
          ev("search", q);
          go("bilatu.sim/?q=" + encodeURIComponent(q));
          tick();
        })
      );
    }
    pageEl.addEventListener("click", (e) => {
      const a = e.target.closest("[data-href]");
      const n = e.target.closest("[data-newtab]");
      const im = e.target.closest("[data-img]");
      const q = e.target.closest("[data-q]");
      if (a) go(a.dataset.href);
      else if (n) openTab(n.dataset.newtab);
      else if (im) openTab("bilatu.sim/irudiak?" + im.dataset.img);
      else if (q) {
        S.queries.push(q.dataset.q);
        ev("search", q.dataset.q);
        go("bilatu.sim/?q=" + encodeURIComponent(q.dataset.q));
        tick();
      }
    });
    br.querySelector("[data-back]").addEventListener("click", () => {
      if (S.active && S.active.idx > 0) {
        S.active.idx--;
        render();
      }
    });
    br.querySelector("[data-fwd]").addEventListener("click", () => {
      if (S.active && S.active.idx < S.active.hist.length - 1) {
        S.active.idx++;
        render();
      }
    });
    br.querySelector("[data-urlform]").addEventListener("submit", (e) => {
      e.preventDefault();
      let v = urlIn.value.trim().replace(/^https?:\/\//, "").replace(/\/$/, "");
      if (!v) return;
      if (sc.pages[v] || v === "bilatu.sim") go(v);
      else {
        S.queries.push(v);
        ev("search", v);
        go("bilatu.sim/?q=" + encodeURIComponent(v));
        tick();
      }
    });

    /* ---------------- OHARRAK eta FITXATEGIAK ---------------- */
    const notes = $("[data-notes]");
    notes.innerHTML = `<div class="notes-app"><div style="font-size:.85rem;color:#6b6a80">Idatzi hemen aurkitzen duzuna. Oharrak ez dira ebaluatzen, baina lagungarriak dira.</div><textarea data-notearea aria-label="Oharrak" placeholder="• Iturria: …&#10;• Datua: …&#10;• Zalantza: …"></textarea><div><b style="font-size:.8rem">Bisitatutako orriak</b><div class="visited-list" data-vlist></div></div></div>`;
    notes.querySelector("[data-notearea]").addEventListener("input", (e) => {
      if (!S.notes) ev("notes", "");
      S.notes = e.target.value;
    });
    function drawNotesList() {
      const l = notes.querySelector("[data-vlist]");
      l.innerHTML = [...S.visited].map((u) => `<button type="button" data-go="${esc(u)}">${esc(sc.pages[u].title)}</button>`).join("") || `<span style="font-size:.8rem;color:#6b6a80">Oraindik ez duzu orririk bisitatu.</span>`;
      l.querySelectorAll("[data-go]").forEach((b) =>
        b.addEventListener("click", () => {
          openWin("browser");
          openTab(b.dataset.go);
        })
      );
    }
    drawNotesList();

    const files = $("[data-files]");
    files.innerHTML = `<div style="padding:1.2rem;display:grid;gap:.8rem;max-width:640px">
      <b>📂 Partekatuta: Erredakzioa</b>
      <div class="setting"><div><b>📄 T01_egiaztapen-fitxa.docx</b><small>Egiaztapen-urratsak egituratzeko txantiloia (aukerakoa)</small></div><a class="btn btn-ghost btn-sm" data-dl href="txantiloiak/T01-egiaztapen-fitxa.docx" download>⬇ Deskargatu</a></div>
      <div class="setting"><div><b>📄 Estilo-liburua_iturriak.pdf</b><small>«Datu bakoitzak gutxienez bi iturri independente behar ditu. Ez da AA laburpenik iturri gisa onartzen.»</small></div><span class="chip plain">Irakurtzeko</span></div>
    </div>`;
    files.querySelector("[data-dl]").addEventListener("click", () => {
      S.downloaded = true;
      ev("download", "T01");
    });

    /* ---------------- SORTZAILEA (2. fasea) ---------------- */
    function drawCreator() {
      const C = sc.create;
      const st = { img: null, text: "", disclose: false, source: false };
      const host = $("[data-creator]");
      host.innerHTML = `<div class="creator">
        <div style="display:grid;gap:1rem;align-content:start">
          <div class="note"><strong>Zeregina</strong><p>${C.brief}</p></div>
          <div><b style="font-size:.85rem">1. Irudia</b><div style="display:grid;gap:.4rem;margin-top:.4rem">${C.images
            .map((im) => `<button type="button" class="ai-suggestion" data-img-opt="${im.id}"><span style="display:inline-grid;place-items:center;width:34px;height:34px;border-radius:8px;background:${im.bg};margin-right:.5rem;vertical-align:middle">${im.emoji}</span>${esc(im.l)}</button>`)
            .join("")}</div></div>
          <div class="ai-assist"><div class="ai-assist-head">✦ AA laguntzailea · testu-proposamenak</div><div class="ai-assist-body">${C.captions
            .map((c, i) => `<button type="button" class="ai-suggestion" data-cap="${i}">${esc(c)}</button>`)
            .join("")}<span style="font-size:.78rem;color:#6b6a80">Aukeratu bat eta editatu behean, edo idatzi zurea.</span></div></div>
          <label style="display:grid;gap:.3rem;font-size:.85rem;font-weight:700">2. Testua (gehienez 280 karaktere)<textarea class="p-textarea" data-text maxlength="280" style="min-height:110px"></textarea><span data-count style="font-size:.75rem;color:#6b6a80;text-align:right">0/280</span></label>
          <label class="setting" style="cursor:pointer"><div><b>AAren erabilera adierazi</b><small>«✦ AA lagundua» etiketa gehitzen du</small></div><span class="switch"><input type="checkbox" data-disclose><span></span></span></label>
          <label class="setting" style="cursor:pointer"><div><b>Iturriaren esteka gehitu</b><small>${esc(C.sourceLabel)}</small></div><span class="switch"><input type="checkbox" data-source><span></span></span></label>
          <div style="display:flex;gap:.5rem;align-items:center"><button type="button" class="btn btn-dark btn-sm" data-publish>Argitaratu</button><span data-cerr style="font-size:.82rem;color:var(--bad)"></span></div>
        </div>
        <div class="preview-post"><div class="stim-cap">Aurrebista</div><div data-preview></div></div>
      </div>`;
      const prev = () => {
        const im = C.images.find((x) => x.id === st.img);
        host.querySelector("[data-preview]").innerHTML = MAIL.renderStimulus({
          type: "post",
          author: C.account,
          handle: "@" + norm(C.account).replace(/\s+/g, ""),
          verified: true,
          time: "orain",
          color: sc.color,
          text: esc(st.text || "…") + (st.source ? `<br><span class="tagline">${esc(C.sourceLabel)}</span>` : "") + (st.disclose ? `<br><small style="color:#6b6a80">✦ AA lagundua</small>` : ""),
          media: im ? { bg: im.bg, text: im.emoji, label: im.ai ? (st.disclose ? "AA bidez sortua" : "") : "" } : null,
          likes: "0", replies: "0", shares: "0"
        });
      };
      host.querySelectorAll("[data-img-opt]").forEach((b) =>
        b.addEventListener("click", () => {
          st.img = b.dataset.imgOpt;
          host.querySelectorAll("[data-img-opt]").forEach((x) => x.classList.toggle("sel", x === b));
          ev("createImage", st.img);
          prev();
        })
      );
      const ta = host.querySelector("[data-text]");
      const cnt = host.querySelector("[data-count]");
      host.querySelectorAll("[data-cap]").forEach((b) =>
        b.addEventListener("click", () => {
          ta.value = C.captions[+b.dataset.cap];
          host.querySelectorAll("[data-cap]").forEach((x) => x.classList.toggle("sel", x === b));
          ta.dispatchEvent(new Event("input"));
          ev("createCaption", b.dataset.cap);
        })
      );
      ta.addEventListener("input", () => {
        st.text = ta.value;
        cnt.textContent = ta.value.length + "/280";
        prev();
      });
      host.querySelector("[data-disclose]").addEventListener("change", (e) => {
        st.disclose = e.target.checked;
        prev();
      });
      host.querySelector("[data-source]").addEventListener("change", (e) => {
        st.source = e.target.checked;
        prev();
      });
      host.querySelector("[data-publish]").addEventListener("click", () => {
        const err = host.querySelector("[data-cerr]");
        if (!st.img) return (err.textContent = "Aukeratu irudi bat.");
        if (st.text.trim().length < 20) return (err.textContent = "Idatzi testua.");
        S.created = Object.assign({}, st, { t: secs() });
        ev("publish", "");
        clearInterval(clock);
        finish();
      });
      prev();
    }

    /* ---------------- EBALUAZIOA ---------------- */
    function finish() {
      const sub = S.submitted;
      const cr = S.created;
      const C = sc.create;
      const E = []; // [comp, ok(0/1/2), title, explanation]
      const pts = { etika: [0, 0], sarbidea: [0, 0], aztertu: [0, 0], partehartu: [0, 0], sortu: [0, 0] };
      const add = (c, got, max, title, text) => {
        pts[c][0] += got;
        pts[c][1] += max;
        E.push({ c, st: got >= max ? "ok" : got > 0 ? "mid" : "no", title, text, got, max });
      };

      // AZTERTU
      const vGot = sub.verdict === sc.verdict ? 3 : sub.verdict === sc.verdictAlt ? 2 : 0;
      add("aztertu", vGot, 3, `Epaia: «${verdicts.find((v) => v[0] === sub.verdict)[1]}»`, (vGot === 3 ? "Zuzena. " : vGot === 2 ? "Ia-ia. " : "Ez da zuzena. ") + sc.verdictWhy);
      const good = sub.sources.filter((u) => sc.pages[u] && sc.pages[u].cred >= 2 && sc.pages[u].indep);
      const bad = sub.sources.filter((u) => u === "__ai" || (sc.pages[u] && sc.pages[u].cred <= 1));
      const sGot = Math.max(0, Math.min(2, good.length) - bad.length);
      add("aztertu", sGot, 2, `Aipatutako iturriak: ${good.length} fidagarri, ${bad.length} ez-fidagarri`, bad.length ? "Iturri ez-fidagarriak (jatorrizko mezua, foroak, blogak, markaren webgunea edo AA laburpena) ez dira ebidentzia gisa aipatu behar." : good.length >= 2 ? "Bi iturri independente eta fidagarri edo gehiago: triangulazio ona." : "Bilatu gutxienez bi iturri independente eta fidagarri.");
      const credVisited = [...S.visited].filter((u) => sc.pages[u].indep && sc.pages[u].cred >= 3 && !sc.pages[u].check);
      const checked = [...S.visited].some((u) => sc.pages[u].check);
      const lat = (S.queries.length ? 1 : 0) + (credVisited.length >= 2 ? 1 : 0) + (checked ? 1 : 0);
      add("aztertu", lat, 3, "Irakurketa laterala", `${S.queries.length} bilaketa · ${credVisited.length} iturri fidagarri bisitatuta · ${checked ? "egilea/atariaren informazioa edo egiaztatzaile bat kontsultatu duzu" : "ez duzu egilea edo webgunea bera ikertu («Guri buruz», egilearen orria, egiaztatzaileak)"}.`);
      const citedAI = sub.sources.includes("__ai");
      add("aztertu", citedAI ? 0 : 1, 1, "AA laburpenaren erabilera", citedAI ? "Bilatzailearen AA laburpena iturri gisa aipatu duzu, baina akatsez betea zegoen (jatorrizko mezuaren gezurra errepikatzen zuen)." : S.aiSeen ? "AA laburpena ikusi duzu eta ez duzu iturri gisa erabili. Ondo: akats larriak zituen." : "Ez duzu AA laburpenean oinarritu zure epaia.");
      add("aztertu", S.imgCheck ? 1 : 0, 1, "Irudiaren egiaztapena", S.imgCheck ? "Alderantzizko irudi-bilaketa erabili duzu: irudia AA bidez sortua zela ikusi duzu." : "Albistearen irudia ez duzu egiaztatu. «🔍 Bilatu irudi hau» botoiak AA bidez sortua zela erakutsiko zizun.");

      // ESKURATU
      const distinctQ = new Set(S.queries.map(norm)).size;
      add("sarbidea", distinctQ >= 2 ? 1 : 0, 1, "Bilaketa-estrategia", distinctQ >= 2 ? `${distinctQ} bilaketa desberdin egin dituzu: gako-hitzak doitu dituzu.` : "Bilaketa bakarra edo bat ere ez. Doitu gako-hitzak (adib. iturri ofiziala edo egiaztapena bilatzeko).");
      add("sarbidea", S.tabSeq >= 3 ? 1 : 0, 1, "Fitxa anitzen kudeaketa", S.tabSeq >= 3 ? `${S.tabSeq} fitxa ireki dituzu iturriak alderatzeko.` : "Fitxa gutxi ireki dituzu. Iturriak alderatzeko, ireki bakoitza fitxa berri batean.");
      add("sarbidea", S.notes.trim().length > 10 || S.downloaded ? 1 : 0, 1, "Informazioaren antolaketa", S.notes.trim().length > 10 || S.downloaded ? "Oharrak hartu edo egiaztapen-fitxa deskargatu duzu." : "Ez duzu oharrik hartu ez txantiloirik erabili. Informazioa antolatzeak akatsak saihesten ditu.");

      // PARTE HARTU (komunikazioa arduradunarekin)
      const words = (sub.just.match(/\S+/g) || []).length;
      const found = sc.justKw.filter(([re]) => re.test(norm(sub.just)));
      add("partehartu", words >= 25 ? 1 : 0, 1, "Mezu argi eta osoa", words >= 25 ? `${words} hitzeko azalpena bidali duzu.` : `Azalpen laburregia (${words} hitz). Arduradunak erabakitzeko ebidentzia behar du.`);
      add("aztertu", found.length >= 3 ? 2 : found.length >= 1 ? 1 : 0, 2, "Ebidentzia zehatza", found.length ? `Aipatu dituzu: ${found.map((f) => f[1]).join(", ")}.` : "Zure azalpenak ez du aipatzen aurkitutako datu gakorik.");
      add("partehartu", sub.sources.length >= 2 ? 1 : 0, 1, "Iturriak partekatu", sub.sources.length >= 2 ? "Hainbat iturri partekatu dituzu, arduradunak egiaztatu ahal izateko." : "Iturri bakarra partekatu duzu.");

      // SORTU eta ETIKA
      const im = C.images.find((x) => x.id === cr.img);
      const nt = norm(cr.text);
      const accHits = C.accKw.filter((re) => re.test(nt)).length;
      const sens = /!!|😱|☠|amaitu da|hil egiten/.test(nt) || (cr.text.replace(/[^A-ZÑ]/g, "").length / Math.max(1, cr.text.replace(/[^A-Za-zñÑ]/g, "").length)) > 0.35;
      const vague = accHits === 0;
      add("sortu", accHits >= 2 ? 2 : accHits === 1 ? 1 : 0, 2, "Testuaren zehaztasuna", accHits >= 2 ? "Testuak egiaztatutako datuak argi azaltzen ditu." : vague ? "Testua lausoa edo okerra da: ez du azaltzen zer den egia." : "Testuak datu zuzen bat du, baina osatu daiteke.");
      add("sortu", im.ok, 2, "Irudiaren aukeraketa", im.why);
      const discOk = !im.ai || cr.disclose;
      add("sortu", discOk ? 1 : 0, 1, "AAren erabileraren adierazpena", im.ai ? (cr.disclose ? "AA bidez sortutako irudia adierazi duzu." : "AA irudia erabili duzu adierazi gabe.") : "Ez duzu AA irudirik erabili.");
      add("sortu", cr.source ? 1 : 0, 1, "Iturria argitalpenean", cr.source ? "Irakurleek jatorrizko iturria egiaztatu dezakete." : "Ez duzu iturriaren estekarik gehitu.");
      add("sortu", sens ? 0 : 1, 1, "Tonua audientziarentzat", sens ? "Tonu sentsazionalista (maiuskulak, «!!», beldurra): gezurra zabaldu zuen estilo bera." : "Tonu lasai eta informatiboa.");
      add("etika", im.ok >= 1 ? 1 : 0, 1, "Irudi arduratsua", im.ok >= 1 ? "Ez duzu errealitatea faltsutzen duen irudirik erabili." : "Aukeratutako irudiak errealitatea faltsutzen du edo marka bati publizitatea egiten dio.");
      add("etika", discOk ? 1 : 0, 1, "Gardentasuna", discOk ? "Gardena izan zara AAren erabilerarekin." : "Audientziak jakin behar du irudia AAk sortua dela.");
      add("etika", sens ? 0 : 1, 1, "Kalterik ez eragitea", sens ? "Mezu sentsazionalistak beldurra edo nahasmena zabal ditzake." : "Mezuak ez du alarmarik edo kalterik sortzen.");

      const total = Object.values(pts).reduce((a, [g]) => a + g, 0);
      const max = Object.values(pts).reduce((a, [, m]) => a + m, 0);
      const pct = Math.round((total / max) * 100);
      const byComp = {};
      MAIL.COMP_ORDER.forEach((c) => (byComp[c] = pts[c][1] ? Math.round((pts[c][0] / pts[c][1]) * 100) : 0));
      MAIL.store.saveSim("main-" + sc.id, { pct, byComp, level: MAIL.levelFromPct(pct) });

      root.dispatchEvent(new CustomEvent("sim:done", { detail: { sc, S, E, pts, pct, byComp } }));
    }

    openWin("chat");
    openTab("bilatu.sim");
    return S;
  }

  /* ======================================================================
     TXOSTENA
     ====================================================================== */
  function renderReport(host, d) {
    const { sc, S, E, pts, pct, byComp } = d;
    const lvl = MAIL.levelFromPct(pct);
    const mmss = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
    const EV = { app: "Aplikazioa ireki", visit: "Orria bisitatu", search: "Bilaketa", aiOverview: "AA laburpena ikusi", imageSearch: "Irudi-bilaketa", notes: "Oharrak hartzen hasi", download: "Txantiloia deskargatu", submit: "Epaia bidali", createImage: "Irudia aukeratu", createCaption: "AA proposamena aukeratu", publish: "Argitaratu" };
    const lines = S.log.filter((l) => l.type !== "app");
    host.innerHTML = `
      <div class="report" id="simReportCard">
        <div class="report-head">
          <div><span class="mono" style="font-size:.75rem;opacity:.7">SIMULAGAILUAREN TXOSTENA · ${esc(sc.title)}</span><h3>${lvl === 3 ? "Maila aurreratua 🎉" : lvl === 2 ? "Tarteko maila 👍" : "Oinarrizko maila: jarraitu praktikatzen"}</h3><span style="opacity:.75;font-size:.9rem">Denbora: ${mmss(S.created.t)} · ${S.queries.length} bilaketa · ${S.visited.size} orri</span></div>
          <div class="score">${pct}<small>/100</small></div>
        </div>
        <div class="report-body">
          <div>${MAIL.COMP_ORDER.map((c) => {
            const p = byComp[c];
            const l = MAIL.levelFromPct(p);
            return `<div class="meter-row" style="margin-bottom:.7rem"><span class="name">${MAIL.COMP[c].glyph} ${esc(MAIL.COMP[c].short)}</span><div class="meter"><i style="width:${p}%;background:${MAIL.COMP[c].color}"></i></div><span class="lvl l${l}">${pts[c][0]}/${pts[c][1]} · ${MAIL.LEVEL[l]}</span></div>`;
          }).join("")}</div>
          <p style="font-size:.8rem;color:var(--ink-mute)">Marra zuriek maila-mugak adierazten dituzte (%40 tartekoa, %75 aurreratua). Puntuazioa orientagarria da, ez PISAren benetako eskala.</p>
          <div><h4 style="font-family:var(--font-display);font-size:1.2rem;margin-bottom:.6rem">Ebidentziak eta feedbacka</h4>
            <ul class="evidence-list">${E.map((e) => `<li><span class="st ${e.st}">${e.st === "ok" ? "✓" : e.st === "mid" ? "~" : "✗"}</span><div><b>${esc(MAIL.COMP[e.c].glyph)} ${esc(e.title)}</b> <span class="mono" style="font-size:.75rem;color:var(--ink-mute)">${e.got}/${e.max}</span><small>${esc(e.text)}</small></div></li>`).join("")}</ul>
          </div>
          <div class="note ok"><strong>Eredu-erantzuna (arduradunarentzako mezua)</strong><p>${esc(sc.model)}</p></div>
          <details class="acc"><summary>⏱️ Zure ekintzen sekuentzia (${lines.length})</summary><div class="acc-body"><ol style="list-style:none;display:grid;gap:.25rem;font-size:.88rem">${lines
            .map((l) => `<li><span class="mono" style="color:var(--ink-mute)">${mmss(l.t)}</span> · <b>${esc(EV[l.type] || l.type)}</b> ${l.detail ? "· " + esc(l.detail === "__ai" ? "AA laburpena" : l.detail) : ""}</li>`)
            .join("")}</ol></div></details>
          <div style="display:flex;gap:.6rem;flex-wrap:wrap" class="no-print">
            <button class="btn btn-dark btn-sm" type="button" data-rep-dl>⬇ Deskargatu txostena (.txt)</button>
            <button class="btn btn-ghost btn-sm" type="button" data-rep-print>🖨️ Inprimatu</button>
            <button class="btn btn-ghost btn-sm" type="button" data-rep-again>↺ Berriro hasi</button>
            <a class="btn btn-ghost btn-sm" href="ariketak.html">📝 Ariketa-bankura</a>
          </div>
        </div>
      </div>`;
    host.querySelector("[data-rep-dl]").addEventListener("click", () => {
      const txt = [
        `artifiziala.eus · PISA 2029 MAIL simulagailua`,
        `Agertokia: ${sc.title}`,
        `Data: ${new Date().toLocaleString("eu-ES")}`,
        `Emaitza: ${pct}/100 (${MAIL.LEVEL[lvl]})`,
        ``,
        ...MAIL.COMP_ORDER.map((c) => `${MAIL.COMP[c].name}: ${pts[c][0]}/${pts[c][1]} (${MAIL.LEVEL[MAIL.levelFromPct(byComp[c])]})`),
        ``,
        `EBIDENTZIAK`,
        ...E.map((e) => `[${e.got}/${e.max}] ${MAIL.COMP[e.c].short} · ${e.title}: ${e.text}`),
        ``,
        `ZURE EPAIA: ${S.submitted.verdict}`,
        `Iturriak: ${S.submitted.sources.map((u) => (u === "__ai" ? "AA laburpena" : u)).join(", ")}`,
        `Ebidentzia: ${S.submitted.just}`,
        ``,
        `ZURE ARGITALPENA: ${S.created.text}`,
        ``,
        `EREDU-ERANTZUNA: ${sc.model}`,
        ``,
        `EKINTZAK`,
        ...lines.map((l) => `${mmss(l.t)} ${EV[l.type] || l.type} ${l.detail || ""}`)
      ].join("\n");
      MAIL.download(`mail-simulagailua-${sc.id}.txt`, txt);
    });
    host.querySelector("[data-rep-print]").addEventListener("click", () => window.print());
    host.querySelector("[data-rep-again]").addEventListener("click", () => window.dispatchEvent(new CustomEvent("sim:restart", { detail: sc.id })));
  }

  window.MAILSim = { SCENARIOS, start: (root, id) => Sim(root, SCENARIOS[id]), renderReport };
})();
