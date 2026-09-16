/* ==========================================================================
   PISA 2029 · MAIL — ariketa-bankua
   Egitura: { id, code, comp, context, level(1-3), type, scenario?, stimulus?, q, ... }
   Mota bakoitzeko eremuak: ikus assets/pisa.js (TYPES)
   Oharra: izen, erakunde eta webgune guztiak asmatuak dira, adibide gisa.
   ========================================================================== */
window.MAIL = window.MAIL || {};
MAIL.items = [

/* ------------------------------------------------------------------------
   1. HAUSNARTU ETA JARDUN ETIKOKI ETA ARDURAZ
   ------------------------------------------------------------------------ */
{
  id: "et01", code: "MAIL-ET-01", comp: "etika", context: "harremanak", level: 1, type: "classify",
  scenario: `Egun osoan zehar hainbat eduki iristen zaizkizu. <b>Partekatu ala ez?</b>`,
  q: `Erabaki eduki bakoitza zure sare sozialean edo talde-txatean partekatuko zenukeen.`,
  cats: ["Partekatu", "Ez partekatu"],
  rows: [
    { t: `Lagun baten argazki barregarria festan; argazkian lotsatuta ageri da.`, c: 1,
      why: `Beste pertsona baten irudia baimenik gabe zabaltzeak bere ospea eta ongizatea kaltetu ditzake. Lehenik, galdetu.` },
    { t: `Udalaren ohar ofiziala, esteka ofizialarekin: bihar ur-mozketa auzoan, 9:00–12:00.`, c: 0,
      why: `Iturri ofiziala, informazio erabilgarria eta egiaztagarria da. Partekatzeak auzokideei laguntzen die.` },
    { t: `Kate-mezua: «Bidali 10 lagunei edo zure kontua ezabatuko dute gaur gauean».`, c: 1,
      why: `Kate-mezuek presa eta beldurra erabiltzen dituzte zabaltzeko. Ez dago oinarririk; ez zabaldu.` },
    { t: `Zure saskibaloi-taldeak irabazitako txapelketaren argazkia; taldekide guztiek onartu dute.`, c: 0,
      why: `Pertsona guztien baimena dago eta edukia positiboa da.` },
    { t: `Irakasle baten ahotsarekin AAk sortutako audioa, gauza lotsagarriak esaten.`, c: 1,
      why: `Deepfake bat da: pertsona erreal bati kalte egiten dio eta legez kanpokoa izan daiteke. Ez zabaldu; jakinarazi heldu bati.` }
  ],
  explain: `Partekatu aurretik, galdetu: <b>egia da?</b>, <b>baimena dago?</b>, <b>norbaiti kalte egin diezaioke?</b>, <b>erabilgarria da besteentzat?</b>`,
  tip: `PISA MAILen «Partekatu ala ez?» motako atazak agertuko dira: ez da arauak buruz jakitea, baizik eta ondorioak aurreikustea.`
},
{
  id: "et02", code: "MAIL-ET-02", comp: "etika", context: "ikaskuntza", level: 2, type: "classify",
  scenario: `<b>AA erabili ala ez?</b> Egoera batzuetan AA txatbot bat ikasteko laguntza ona da; beste batzuetan, ez.`,
  q: `Sailkatu egoera bakoitza: egokia ala ez egokia da AA txatbot bat erabiltzea?`,
  cats: ["Egokia", "Ez egokia"],
  rows: [
    { t: `Azterketa aurretik, txatbotari galdera-sorta bat eskatzea zeure burua probatzeko.`, c: 0,
      why: `Ikasten laguntzen dizu: zuk pentsatzen duzu erantzuna, AAk praktika antolatzen du.` },
    { t: `«Nire aitona» idazlan pertsonala osorik AAri idaztea eta zure izenean entregatzea.`, c: 1,
      why: `Iruzur akademikoa da eta idazlanaren helburua (zure esperientzia eta ahotsa) galtzen da.` },
    { t: `Ingelesezko ahozko aurkezpena prestatzeko AArekin elkarrizketa praktikatzea.`, c: 0,
      why: `Komunikazio-praktika seguru eta erabilgarria da.` },
    { t: `Matematikako ariketen emaitzak kopiatzea, urratsak ulertu gabe.`, c: 1,
      why: `Ez duzu ikasten, eta AAk kalkulu-akatsak egin ditzake: ezin dituzu detektatu.` },
    { t: `Zure testuaren ortografia berrikusteko AA erabiltzea eta irakasleari adieraztea.`, c: 0,
      why: `Erabilera mugatua eta gardena da; edukia zurea da.` },
    { t: `Lagun baten osasun-arazoei buruzko aholkua eskatzea, bere izen-abizenak eta xehetasunak emanez.`, c: 1,
      why: `Beste pertsona baten datu sentikorrak partekatzen ari zara bere baimenik gabe.` }
  ],
  explain: `Irizpide nagusiak: ataza horren <b>ikaskuntza-helburua</b> mantentzen da? <b>Gardena</b> zara? <b>Datu pertsonalak</b> babesten dituzu?`
},
{
  id: "et03", code: "MAIL-ET-03", comp: "etika", context: "aisialdia", level: 1, type: "single",
  stimulus: {
    type: "dialog", caption: "Jolas-webgune batean sartzean",
    title: "🍪 Zure pribatutasuna garrantzitsua zaigu",
    body: `<p>Guk eta gure 214 bazkidek cookieak erabiltzen ditugu edukia pertsonalizatzeko, publizitatea neurtzeko eta zure jarduera beste webguneetan jarraitzeko.</p>`,
    buttons: ["ONARTU GUZTIAK", "Ezarpenak", "Ukatu"], primary: 0
  },
  q: `Partida bat jolastu nahi duzu. Zer da arduratsuena?`,
  options: [
    { t: `«Onartu guztiak» sakatu, azkarrena delako.`, why: `Botoi nabarmena zu horretara bultzatzeko diseinatuta dago (patroi iluna).` },
    { t: `«Ezarpenak» ireki eta beharrezkoak ez diren cookieak (publizitatea, jarraipena) ukatu.`, ok: true, why: `Jolastu dezakezu zure datuak behar baino gehiago eman gabe.` },
    { t: `Webgunea betiko itxi: cookieak dituen orri guztiak arriskutsuak dira.`, why: `Cookie tekniko batzuk beharrezkoak dira; ez da neurri proportzionala.` },
    { t: `Berdin dio: cookieek ez dute informazio pertsonalik jasotzen.`, why: `Jarraipen-cookieek zure nabigazio-ohiturak bildu eta partekatu ditzakete.` }
  ],
  explain: `Botoi baten tamainak, koloreak edo kokapenak zure erabakia bideratu dezakete. Horri <b>patroi iluna</b> (dark pattern) deitzen zaio.`
},
{
  id: "et04", code: "MAIL-ET-04", comp: "etika", context: "aisialdia", level: 2, type: "multi",
  stimulus: {
    type: "post", caption: "Zuretzat gomendatua",
    author: "Osasuna Egunero", handle: "@osasuna.egunero", time: "3 h", color: "#e11d48",
    text: `ZIENTZIALARIEK EZKUTATZEN DUTENA 😱 Mugikorra gauean kargatzeak loaren kalitatea <b>%80</b> jaisten du. Partekatu ZURE FAMILIA babesteko!! 👇`,
    media: { bg: "linear-gradient(135deg,#1c1b2e,#e11d48)", text: "📱💤⚠️", label: "Bideoa · 0:42" },
    likes: "45.200", replies: "3.100", shares: "18.900"
  },
  q: `Zein arrazoik justifikatzen dute informazio hau zalantzan jartzea? Aukeratu egokiak diren guztiak.`,
  options: [
    { t: `Ez du iturri edo ikerketa zehatzik aipatzen.`, ok: true },
    { t: `Emozio biziak eta presa erabiltzen ditu («😱», «Partekatu!!», maiuskulak).`, ok: true },
    { t: `Zenbaki oso zehatza ematen du (%80) nondik datorren esan gabe.`, ok: true },
    { t: `45.000 atsegite baino gehiago ditu.`, why: `Ospeak ez du ezer frogatzen, ez alde ez kontra. Algoritmoek eduki emozionalak zabaltzen dituzte.` },
    { t: `Gaia teknologiari buruzkoa da.`, why: `Gaiak berak ez du fidagarritasuna zehazten.` }
  ],
  explain: `Algoritmoek <b>emozio biziak</b> sortzen dituzten edukiak lehenesten dituzte, jendea pantailan mantentzen dutelako. Iturririk ez, presa eta zenbaki zehatz «magikoak»: hiru alarma-seinale.`
},
{
  id: "et05", code: "MAIL-ET-05", comp: "etika", context: "ikaskuntza", level: 2, type: "single",
  scenario: `Leirek bi azterketa ditu astean eta Literaturako eleberriari buruzko iruzkina entregatu behar du ostiralean. Liburua irakurri beharrean, AA bati eleberriaren laburpena eta iruzkin-eredua eskatzea pentsatu du.`,
  q: `Zein da Leireren erabakiaren <b>truke-balantzearen</b> (trade-off) hausnarketarik osoena?`,
  options: [
    { t: `Denbora aurrezten du, eta horixe da garrantzitsuena azterketa-garaian.` },
    { t: `Denbora aurrezten du, baina liburua ulertzeko eta iritzi propioa lantzeko aukera galtzen du; gainera, laburpenak akatsak izan ditzake eta irakurri gabe ezin ditu detektatu.`, ok: true },
    { t: `Ez dago arazorik, irakasleak ez baitu jakingo.` },
    { t: `AA debekatuta dago beti eskolako lanetan, beraz ez du horretan pentsatu behar.` }
  ],
  explain: `Tarteko mailan, PISAk espero du ikasleek <b>truke sinpleak</b> kontuan hartzea (adib. denbora aurreztea vs. ikasteari uko egitea). Hausnarketa ona onurak eta kostuak batera aztertzen ditu.`
},
{
  id: "et06", code: "MAIL-ET-06", comp: "etika", context: "aisialdia", level: 2, type: "classify",
  stimulus: {
    type: "dialog", caption: "Argazkiak editatzeko aplikazio berria",
    title: "«FiltroMagia»k baimen hauek eskatzen ditu:",
    perms: [["📷 Kamera", "?"], ["🖼️ Argazki-galeria", "?"], ["👥 Kontaktuak", "?"], ["📍 Kokapen zehatza (beti)", "?"], ["🎙️ Mikrofonoa", "?"], ["🤖 Zure argazkiak AA ereduak entrenatzeko", "?"]]
  },
  q: `Zein baimen onartuko zenituzke eta zein ukatu, aplikazioak argazkiak editatzeko bakarrik balio badu?`,
  cats: ["Onartu", "Ukatu"],
  keepOrder: true,
  rows: [
    { t: `Kamera`, c: 0, why: `Argazkiak ateratzeko beharrezkoa da.` },
    { t: `Argazki-galeria (aukeratutako argazkiak)`, c: 0, why: `Editatzeko beharrezkoa; ahal bada, «aukeratutako argazkiak soilik» aukeratu.` },
    { t: `Kontaktuak`, c: 1, why: `Ez du zerikusirik editatzearekin: zure lagunen datuak dira.` },
    { t: `Kokapen zehatza (beti)`, c: 1, why: `Ez da beharrezkoa eta zure mugimenduak jarraitzeko balio du.` },
    { t: `Mikrofonoa`, c: 1, why: `Argazki-editore batek ez du behar.` },
    { t: `Zure argazkiak AA ereduak entrenatzeko`, c: 1, why: `Zure irudiak (eta zure lagunenak) beste helburu baterako erabiliko lituzke.` }
  ],
  explain: `Printzipio sinplea: <b>datu-minimizazioa</b>. Aplikazioak bere funtziorako behar duena bakarrik eman.`
},
{
  id: "et07", code: "MAIL-ET-07", comp: "etika", context: "ikaskuntza", level: 1, type: "single",
  scenario: `Aurkezpen baterako irudi bat behar duzu. AA irudi-sortzaile batekin 50 irudi sortzen dituzu, bat aukeratzeko.`,
  q: `Zein baieztapen da zuzena ingurumen-inpaktuari dagokionez?`,
  options: [
    { t: `Hodeian dagoenez, ez du inpaktu fisikorik.` },
    { t: `AA eskaera bakoitzak datu-zentroetan energia eta ura kontsumitzen ditu; beharrezkoak ez diren sorkuntzak saihesteak inpaktua murrizten du.`, ok: true },
    { t: `Testuek bakarrik kontsumitzen dute energia; irudiek ez.` },
    { t: `Inpaktu bakarra zure mugikorraren bateria da.` }
  ],
  explain: `PISA MAILek <b>jasangarritasuna</b> ere hartzen du kontuan erabilera arduratsuaren barruan. «Hodeia» benetako zerbitzariak dira, elektrizitatea eta hozteko ura behar dutenak.`
},
{
  id: "et08", code: "MAIL-ET-08", comp: "etika", context: "herritartasuna", level: 3, type: "open",
  stimulus: {
    type: "chat", caption: "Kuadrillaren taldea", title: "Kuadrilla 🔥", members: "8 kide",
    messages: [
      { who: "Unai", text: `IKUSI HAU 😂😂 alkatea mozkortuta auzokideei irainka` },
      { who: "Unai", text: `<span style="display:block;margin-top:.3rem;padding:.6rem;background:#eee;border-radius:8px;font-size:.8rem">🎬 alkatea_bideoa.mp4 · 0:24</span>` },
      { who: "Jon", text: `hauteskundeak hilabete barru dira eh... amaitu da 🤣` },
      { who: "Maialen", text: `bideo hori 12.000 aldiz partekatu dute jada` }
    ]
  },
  q: `Bideoak AA bidez manipulatua dirudi (ahotsa ez dator bat ezpainekin, argia arraroa da). Zer egingo zenuke eta zergatik? Azaldu gutxienez <b>bi ekintza</b> eta horien ondorioak.`,
  placeholder: "Nik lehenik… Gainera… Hau garrantzitsua da… delako.",
  model: `Ez nuke bideoa partekatuko, ezta erreakzionatuko ere, hedapena ez handitzeko. Egiaztatzen saiatuko nintzateke: hedabide fidagarriek edo udalak zerbait esan duten begiratu, eta bideoaren jatorria bilatu. Taldean lasai idatziko nuke bideoa AA bidez manipulatua izan daitekeela eta zabaltzeak pertsona bati eta hauteskundeei kalte egin diezaiekeela. Azkenik, plataforman salatuko nuke eduki faltsu gisa.`,
  criteria: [
    `Bideoa ez partekatzea edo ez zabaltzea aipatzen du.`,
    `Egiaztapen-estrategia zehatz bat aipatzen du (iturri ofizialak, hedabideak, jatorria bilatu…).`,
    `Pertsonari edo gizarteari (hauteskundeak) eragindako kaltea kontuan hartzen du.`,
    `Ekintza eraikitzaile bat proposatzen du (taldean ohartarazi, salatu…).`
  ],
  explain: `Maila altuan, ikasleak bere ekintzek <b>besteengan eta gizartean</b> dituzten ondorioak aztertzen ditu, ez bakarrik bere buruarengan.`
},
{
  id: "et09", code: "MAIL-ET-09", comp: "etika", context: "aisialdia", level: 2, type: "single",
  stimulus: {
    type: "dialog", caption: "Jakinarazpena · 23:41",
    title: "🔥 Zure 87 eguneko segida galtzear!",
    body: `<p>Oierrek eta beste 3 lagunek jada bidali dute gaurko argazkia. Ez utzi segida hiltzen! ⏳ 19 minutu geratzen dira.</p>`,
    buttons: ["Ireki orain", "Geroago"], primary: 0
  },
  q: `Zein da jakinarazpen honen deskribapen eta erantzun egokiena?`,
  options: [
    { t: `Laguntza-mezu bat da, lagunekin harremana ez galtzeko.` },
    { t: `Diseinu-teknika bat da (galera-beldurra eta presa) aplikazioa gehiago erabil dezazun; jakinarazpenak mugatu edo gaueko «ez molestatu» modua aktibatu daiteke.`, ok: true },
    { t: `Aplikazioaren akats tekniko bat da; ez dago zer eginik.` },
    { t: `Segida mantentzea beharrezkoa da; bestela lagunek ez zaituzte kontuan hartuko.` }
  ],
  explain: `Plataformak arreta harrapatzeko diseinatuta daude: jakinarazpenak, segidak, sariak. Hori ezagutzeak <b>distantzia hartzen</b> eta zure denbora kudeatzen laguntzen du.`
},

/* ------------------------------------------------------------------------
   2. ESKURATU ETA ERABILI
   ------------------------------------------------------------------------ */
{
  id: "es01", code: "MAIL-ES-01", comp: "sarbidea", context: "ikaskuntza", level: 1, type: "single",
  scenario: `Geografiako lan baterako, uholde-arriskuari buruzko informazioa bilatu nahi duzu, <b>Eusko Jaurlaritzaren webgunean bakarrik</b> (euskadi.eus).`,
  q: `Zein bilaketa da egokiena?`,
  keepOrder: true,
  options: [
    { t: `<code>uholdeak</code>`, why: `Orokorregia: mota guztietako webguneak agertuko dira.` },
    { t: `<code>"uholde-arriskua" site:euskadi.eus</code>`, ok: true, why: `Esaldi zehatza + domeinu jakin bat.` },
    { t: `<code>uholdeak OR euskadi OR ofiziala</code>`, why: `OR-ek emaitzak zabaltzen ditu, ez mugatu.` },
    { t: `<code>uholdeak -euskadi</code>`, why: `«-» ikurrak hitza baztertzen du: kontrakoa lortuko zenuke.` }
  ],
  explain: `Bilaketa-operadoreek emaitzak <b>zehazten</b> laguntzen dute: komatxoek esaldi zehatza bilatzen dute eta <code>site:</code> operadoreak webgune batera mugatzen du.`
},
{
  id: "es02", code: "MAIL-ES-02", comp: "sarbidea", context: "ikaskuntza", level: 1, type: "match",
  q: `Lotu bilaketa-operadore bakoitza bere funtzioarekin.`,
  pairs: [
    { a: `<code>"energia berriztagarriak"</code>`, b: "Esaldi zehatza bilatu" },
    { a: `<code>jaguarra -autoa</code>`, b: "Hitz bat baztertu" },
    { a: `<code>site:ehu.eus</code>`, b: "Webgune jakin batean bilatu" },
    { a: `<code>filetype:pdf</code>`, b: "Fitxategi mota zehaztu" },
    { a: `<code>eguzki-panelak OR plaka fotovoltaikoak</code>`, b: "Termino bat edo bestea" }
  ],
  explain: `Operadoreak ez dira bilatzaile guztietan berdin portatzen, baina hauek oso hedatuak dira eta denbora asko aurrezten dute.`
},
{
  id: "es03", code: "MAIL-ES-03", comp: "sarbidea", context: "ikaskuntza", level: 2, type: "multi",
  scenario: `Anek eta Ikerrek hitz berdinak idatzi dituzte bilatzaile berean, une berean: <code>kirol-zapatila onenak</code>. Emaitzak desberdinak dira.`,
  q: `Zergatik gerta daiteke hori? Aukeratu arrazoi egokiak.`,
  options: [
    { t: `Bakoitzaren bilaketa-historia eta aurreko klikak kontuan hartzen direlako.`, ok: true },
    { t: `Kokapena (herria, herrialdea) kontuan hartzen delako.`, ok: true },
    { t: `Hizkuntza-ezarpenak eta saioa hasita duten kontua desberdinak direlako.`, ok: true },
    { t: `Bilatzaileak emaitzak ausaz ordenatzen dituelako.`, why: `Ordena ez da ausazkoa: algoritmoek irizpide askoren arabera sailkatzen dute.` },
    { t: `Emaitzarik zuzenenak beti lehenak direlako.`, why: `Lehen postuak ospeari, iragarkiei edo pertsonalizazioari lotuta egon daitezke, ez zehaztasunari.` }
  ],
  explain: `Bilaketa-emaitzak <b>pertsonalizatuta</b> daude. PISA MAILek espero du ikasleek ulertzea sailkapena ez dela «neutroa».`
},
{
  id: "es04", code: "MAIL-ES-04", comp: "sarbidea", context: "ikaskuntza", level: 1, type: "single",
  stimulus: {
    type: "search", caption: "Bilaketa-emaitzak",
    query: "institutuan mugikorra erabiltzeko araudia",
    results: [
      { letter: "A", ad: true, url: "promo-app.store › mugikorrak", title: "Mugikorren debekua eskoletan: dena jakin 2 minututan!", desc: "Deskargatu gure aplikazioa eta jaso %20ko deskontua mugikor berrietan." },
      { letter: "B", url: "urdaibai-institutua.eus › bizikidetza › gailuak", title: "Bizikidetza-plana: gailu mugikorren erabilera (2025-26 ikasturtea)", desc: "Ordezkaritza-kontseiluak onartutako arauak. Azken eguneraketa: 2025eko irailaren 8a." },
      { letter: "C", url: "foroa-gazteak.net › gaia › 45122", title: "Norbaitek badaki mugikorrak debekatuta dauden?", desc: "2019ko martxoa · 37 erantzun · «nire lehengusuak dio baietz baina...»" },
      { letter: "D", url: "trikimailuak.blog", title: "10 trikimailu irakasleak mugikorrarekin ez harrapatzeko", desc: "Ezkutatu mugikorra modu sinplean! 7.a ez duzu sinetsiko." }
    ]
  },
  q: `Zure institutuan zein den araudia jakin nahi duzu. Zein emaitzak eskaintzen du informazio ofizial eta eguneratuena?`,
  keepOrder: true,
  options: [
    { t: "A", why: "«Babestua» etiketak iragarkia dela adierazten du." },
    { t: "B", ok: true, why: "Institutuaren webgune ofiziala, onarpen-organoa eta data eguneratua." },
    { t: "C", why: "Foro zaharra (2019) eta zurrumurruetan oinarritua." },
    { t: "D", why: "Blog bat, beste helburu batekin (klikak lortzea)." }
  ],
  explain: `Begiratu <b>nork</b> argitaratzen duen (URLa), <b>noiz</b> eguneratu zen eta <b>zertarako</b> (informatzeko, saltzeko, klikak lortzeko).`
},
{
  id: "es05", code: "MAIL-ES-05", comp: "sarbidea", context: "harremanak", level: 2, type: "classify",
  scenario: `Maialenek (15 urte) sare sozial berri batean kontua sortu du. Lagunekin argazkiak partekatu nahi ditu, baina ezezagunek ez ikustea nahi du.`,
  q: `Ezarpen bakoitzerako, zer da gomendagarriena?`,
  cats: ["Aktibatuta", "Desaktibatuta"],
  keepOrder: true,
  rows: [
    { t: `Kontu pribatua (onartutako jarraitzaileek bakarrik ikusten dute edukia)`, c: 0, why: `Bere helburuarekin bat dator: lagunek bai, ezezagunek ez.` },
    { t: `Kokapen zehatza argitalpenetan`, c: 1, why: `Non bizi edo ikasten duen agerian utz dezake.` },
    { t: `Telefono-zenbakiaren bidez aurkitzea`, c: 1, why: `Ezezagunek bere kontua aurki dezakete.` },
    { t: `Bi urratseko egiaztapena`, c: 0, why: `Kontua lapurtzea askoz zailagoa da.` },
    { t: `Zure edukiak AA sistemak hobetzeko erabiltzea`, c: 1, why: `Bere argazkiak (eta lagunenak) entrenamendu-datu bihur daitezke.` },
    { t: `Ezezagunen mezu zuzenak jasotzea`, c: 1, why: `Arrisku-bide ohikoa da (grooming, iruzurrak).` }
  ],
  explain: `Pribatutasun-ezarpenak ez dira «dena itxi» edo «dena ireki»: <b>helburuaren arabera</b> konfiguratzen dira.`
},
{
  id: "es06", code: "MAIL-ES-06", comp: "sarbidea", context: "ikaskuntza", level: 1, type: "order",
  scenario: `Bideo-dei batean zaudete talde-lana antolatzeko, eta zure ahotsa ez da entzuten.`,
  q: `Ordenatu arazoa konpontzeko urratsak, errazenetik konplexuenera.`,
  steps: [
    `Aplikazioan mikrofonoa isilarazita dagoen begiratu.`,
    `Aplikazioaren audio-ezarpenetan sarrera-gailu zuzena aukeratuta dagoen egiaztatu.`,
    `Nabigatzaileak edo sistemak mikrofonorako baimena emana duen egiaztatu.`,
    `Aplikazioa berrabiarazi edo beste gailu bat probatu.`
  ],
  explain: `Arazoak konpontzeko estrategia on batek <b>kausa errazenetatik</b> hasten da eta pausoz pauso aurrera egiten du.`
},
{
  id: "es07", code: "MAIL-ES-07", comp: "sarbidea", context: "ikaskuntza", level: 2, type: "single",
  stimulus: {
    type: "ai", caption: "AA txatbota",
    turns: [
      { user: "klima-aldaketa" },
      { ai: `Klima-aldaketa Lurraren klimaren epe luzeko aldaketa da, batez ere giza jarduerek eragindakoa. Berotegi-efektuko gasen isuriak… (erantzun orokorra, 600 hitz)` }
    ]
  },
  q: `Geografiako lan baterako erantzun orokorregia jaso duzu. Zein da hurrengo prompt egokiena?`,
  options: [
    { t: `«Gehiago»` },
    { t: `«Idatzi nire lana klima-aldaketari buruz»` },
    { t: `«Azaldu klima-aldaketak Kantauri itsasertzean dituen 3 eragin nagusi, 15 urteko ikasle batentzat, eta adierazi erantzun bakoitza zein iturri motatan oinarritzen den, nik egiaztatu ahal izateko.»`, ok: true },
    { t: `«Klima-aldaketa benetakoa al da? Bai edo ez»` }
  ],
  explain: `Prompt on batek <b>zehaztasuna</b> (gaia, eremua), <b>audientzia</b>, <b>formatua</b> eta <b>egiaztagarritasuna</b> eskatzen ditu. AAk iturriak asma ditzakeenez, zuk egiaztatu behar dituzu.`
},
{
  id: "es08", code: "MAIL-ES-08", comp: "sarbidea", context: "aisialdia", level: 3, type: "multi",
  stimulus: {
    type: "post", caption: "Bideo-plataforma · «Zuretzat»",
    author: "Gamer Pro Tips", handle: "@gamerprotips", time: "Gomendatua", color: "#12a9a4",
    text: `«Inork esaten ez dizun trikimailua ranked partidak irabazteko» 🎮`,
    media: { bg: "linear-gradient(135deg,#0f172a,#12a9a4)", text: "▶", label: "12:08 · 2,1 M ikustaldi" },
    likes: "88.000", replies: "4.300", shares: "9.100"
  },
  q: `Zergatik gomendatu dizu plataformak bideo hau? Aukeratu arrazoi <b>litekeenak</b>.`,
  options: [
    { t: `Antzeko bideoak ikusi dituzulako aurretik.`, ok: true },
    { t: `Zure adineko eta inguruko erabiltzaile askok ikusi dutelako.`, ok: true },
    { t: `Bideo honek ikusle asko mantentzen dituelako amaierara arte (engagement handia).`, ok: true },
    { t: `Plataformak egiaztatu duelako bideoko informazioa zuzena dela.`, why: `Gomendio-sistemek ez dute edukiaren zehaztasuna egiaztatzen.` },
    { t: `Gomendioak beti neutralak eta ausazkoak direlako.`, why: `Ez: helburu komertziala dute (zu plataforman mantentzea).` }
  ],
  explain: `Gomendio-sistemek zure <b>portaera</b>, <b>antzeko erabiltzaileen</b> portaera eta edukiaren <b>engagement</b>-a erabiltzen dituzte. Horrek zure ikuspegia zabaldu edo mugatu dezake.`
},
{
  id: "es09", code: "MAIL-ES-09", comp: "sarbidea", context: "ikaskuntza", level: 2, type: "order",
  scenario: `Lau lagunek Historiako proiektu bat egingo duzue lainoko biltegi partekatu batean. Orain fitxategiak nahaspilatuta daude: «dokumentua(3).docx», «azkena_BENETAN.pptx», «IMG_2231.jpg»…`,
  q: `Ordenatu antolaketa-urratsak modurik logikoenean.`,
  steps: [
    `Karpeta nagusia sortu izen argiarekin: «2026_Historia_Industrializazioa».`,
    `Azpikarpetak sortu: «01_Iturriak», «02_Zirriborroak», «03_Azken_bertsioa».`,
    `Fitxategiei izen koherenteak eman (data_gaia_bertsioa) eta dagokien karpetan kokatu.`,
    `Bikoiztuak eta beharrezkoak ez direnak ezabatu.`,
    `Taldekideekin partekatu, bakoitzari baimen egokia emanez (editatu / ikusi).`
  ],
  explain: `PISAk «Digital Declutter» motako atazak aipatzen ditu: fitxategiak modu eraginkorrean antolatzea eta partekatzea ere gaitasun digitala da.`
},

/* ------------------------------------------------------------------------
   3. AZTERTU ETA EBALUATU
   ------------------------------------------------------------------------ */
{
  id: "az01", code: "MAIL-AZ-01", comp: "aztertu", context: "limurtzea", level: 1, type: "classify",
  scenario: `<b>Iragarkia ala ez?</b> Zure sare sozialean eduki hauek agertu zaizkizu.`,
  q: `Sailkatu eduki bakoitza.`,
  cats: ["Iragarkia / babestua", "Ez da iragarkia"],
  rows: [
    { t: `@nahia.style: «Krema honek aurpegia aldatu dit 😍 Kodea: NAHIA15 %15eko deskontua» <small>#kolaborazioa</small>`, c: 0,
      why: `Deskontu-kodea eta #kolaborazioa: markarekin akordio komertziala dago.` },
    { t: `@bidaiazalea: «Hotel honetan 3 gau igaro ditut. Mila esker @HotelUrdina gonbidapenagatik!»`, c: 0,
      why: `Doako egonaldia ordain-modu bat da: ezkutuko publizitatea, nahiz eta etiketarik ez izan.` },
    { t: `Unibertsitate baten kontua: ikerketa berriaren laburpena eta artikulu osorako esteka.`, c: 1,
      why: `Zabalkunde zientifikoa da; hala ere, erakundeak bere irudia ere zaintzen du.` },
    { t: `Albiste-itxurako orria, «Babestutako edukia» etiketa txiki batekin goiko ertzean.`, c: 0,
      why: `«Native advertising» da: albiste itxura duen iragarkia.` },
    { t: `Udalaren abisua: igandean maratoia dela eta kale batzuk itxita egongo dira.`, c: 1,
      why: `Zerbitzu publikoko informazioa.` }
  ],
  explain: `Publizitatea ez da beti «IRAGARKIA» hitzarekin agertzen. Bilatu <b>deskontu-kodeak</b>, <b>#publi / #kolaborazioa</b>, <b>opariak</b> eta <b>«babestua»</b> etiketak.`
},
{
  id: "az02", code: "MAIL-AZ-02", comp: "aztertu", context: "limurtzea", level: 2, type: "highlight",
  scenario: `Mezu hau bizi-bizi zabaltzen ari da ikasleen artean.`,
  q: `Egin klik <b>manipulazio-teknikak</b> dituzten esaldietan. (4 dira)`,
  segments: [
    { t: "EZ DUTE NAHI HAU JAKITEA! 😡", k: true },
    { t: "«FokuMax» energia-edari berriak ikasleen oroimena hobetzen du." },
    { t: "Medikuek gorroto dute, baina Dr. Zientzia ospetsuak dio mirakulua dela.", k: true },
    { t: "Institutu batean 12 ikaslek probatu dute." },
    { t: "Edo edaten duzu, edo azterketak suspendituko dituzu.", k: true },
    { t: "Eskaintza gaur gauerdian amaitzen da!", k: true },
    { t: "Informazio gehiago produktuaren webgunean." }
  ],
  explain: `Lau teknika: <b>konspirazioa eta haserrea</b> («ez dute nahi jakitea»), <b>aditu faltsua</b> (izenik gabeko «doktorea»), <b>dikotomia faltsua</b> (bi aukera bakarrik) eta <b>presa artifiziala</b>. Gainera, 12 ikasleko lagina oso txikia da ezer frogatzeko.`,
  tip: `Ikerketek diote manipulazio-teknikak aldez aurretik ezagutzeak «txertoa» bezala funtzionatzen duela (inokulazioa).`
},
{
  id: "az03", code: "MAIL-AZ-03", comp: "aztertu", context: "ikaskuntza", level: 2, type: "single",
  stimulus: {
    type: "article", caption: "osasun-naturala-gaur.com",
    outlet: "OSASUN NATURALA GAUR", section: "Elikadura",
    headline: "Esnea edateak hezurrak ahultzen ditu, ikerketa berri baten arabera",
    byline: "Erredakzioa · 2026/04/02",
    body: `<p>Gero eta aditu gehiagok ohartarazten dute esneak kaltea egiten duela… Gure <b>Kaltzio Naturala Plus</b> osagarriak irtenbide osasuntsua eskaintzen du.</p>`
  },
  q: `Webgune honen fidagarritasuna ebaluatzeko, zer da lehenik egin beharrekoa <b>irakurketa laterala</b> erabiliz?`,
  options: [
    { t: `Webgunearen «Guri buruz» atala irakurri.`, why: `Hori irakurketa bertikala da: webguneak berak bere buruaz dioena. Ez da nahikoa.` },
    { t: `Fitxa berri bat ireki eta webgunearen izena bilatu, beste iturri batzuek hari buruz zer dioten jakiteko.`, ok: true, why: `Horixe da irakurketa laterala: webgunetik irten eta kanpotik egiaztatu.` },
    { t: `Diseinua profesionala den begiratu.`, why: `Diseinu ona edonork lor dezake; ez da fidagarritasun-froga.` },
    { t: `Artikulua amaieraraino arretaz irakurri.`, why: `Arretaz irakurtzea ona da, baina ez du iturria bera ebaluatzen.` }
  ],
  explain: `Aditu-egiaztatzaileek <b>laterala</b> irakurtzen dute: orrialdea utzi eta beste iturri batzuetan bilatzen dute nor dagoen atzean. Hemen, gainera, artikuluak berak saltzen duen produktua iragartzen du: interes-gatazka.`
},
{
  id: "az04", code: "MAIL-AZ-04", comp: "aztertu", context: "ikaskuntza", level: 2, type: "single",
  stimulus: {
    type: "ai", caption: "AA txatbota",
    turns: [
      { user: "Eman itsasoko mikroplastikoei buruzko 3 erreferentzia akademiko, Bizkaiko kostaldeari buruzkoak" },
      { ai: `Hona hemen hiru erreferentzia:<ul><li>Etxeberria, M. eta Lasa, J. (2019). «Mikroplastikoen banaketa Bizkaiko hondartzetan». <i>Euskal Itsas Zientzia Aldizkaria</i>, 12(3), 45–67. doi:10.1234/eiza.2019.123</li><li>Arrieta, A. (2021). <i>Plastikoak Kantaurian: ikuspegi integrala</i>. Bilbo: Itsaso Argitaletxea.</li><li>Goikoetxea, L. et al. (2022). «Microplastics in Basque estuaries». <i>Marine Pollution Studies</i>, 8, 101–118.</li></ul>` }
    ]
  },
  q: `Erreferentzia horiek zure lanean erabili nahi dituzu. Zein da jarrerarik egokiena?`,
  options: [
    { t: `DOI zenbakia dutenez, benetakoak dira.`, why: `AAk DOI itxurako kodeak ere asma ditzake.` },
    { t: `Erreferentzia bakoitza liburutegi-katalogo edo datu-base akademiko batean bilatu, existitzen den eta dioena dioen egiaztatzeko.`, ok: true },
    { t: `AAri galdetu ea benetakoak diren; baietz esaten badu, erabili.`, why: `AAk bere akatsa berretsi dezake: ez da egiaztapen independentea.` },
    { t: `Formatu akademiko zuzena dutenez, lasai erabil daitezke.`, why: `Formatu zuzenak sinesgarritasuna ematen du, baina ez du existentzia bermatzen.` }
  ],
  explain: `Hizkuntza-ereduek ez dute «egia» bilatzen: probabilitatez hitzik litekeenak sortzen dituzte. Horregatik <b>asmatu</b> (haluzinatu) ditzakete erreferentzia sinesgarriak. Beti egiaztatu jatorrizko iturrian.`
},
{
  id: "az05", code: "MAIL-AZ-05", comp: "aztertu", context: "herritartasuna", level: 2, type: "single",
  stimulus: {
    type: "chart", caption: "Egunkari digital bateko grafikoa",
    title: "Gazteen sare sozialen erabilera IKARAGARRI igo da!",
    unit: " h", yMin: 3, yMax: 3.5,
    bars: [{ l: "2024", v: 3.1, c: "#9b98c9" }, { l: "2025", v: 3.4, c: "#e11d48" }],
    source: "Inkesta, eguneko batez besteko orduak"
  },
  q: `Zer da zuzena grafiko honi buruz?`,
  options: [
    { t: `Erabilera hirukoiztu egin da urtebetean.`, why: `Barren altuera ikusita hala dirudi, baina zenbakiek ez dute hori esaten.` },
    { t: `Ardatz bertikala 3 ordutan hasten da; igoera benetan %10 ingurukoa da (3,1etik 3,4 ordura), baina grafikoak askoz handiagoa dirudi.`, ok: true },
    { t: `Grafikoa zuzena da, datuak benetakoak direlako.`, why: `Datu zuzenak modu engainagarrian aurkez daitezke.` },
    { t: `Ezin da ezer esan grafikoari buruz.`, why: `Ardatzak eta zenbakiak irakurriz, distortsioa detekta daiteke.` }
  ],
  explain: `Informazio <b>zuzena</b> ere engainagarria izan daiteke. PISAren tarteko mailak hori detektatzea eskatzen du: «identifies when accurate information is presented in misleading ways».`
},
{
  id: "az06", code: "MAIL-AZ-06", comp: "aztertu", context: "herritartasuna", level: 3, type: "multi",
  stimulus: {
    type: "post", caption: "Sare sozialetan birala",
    author: "Donostia Live", handle: "@donostia_live_24", time: "1 h", color: "#3d9fd6",
    text: `Gaur goizean Kontxa hondartza ELURREZ estalita!! ❄️🏖️ Inoiz ikusi gabea!`,
    media: { bg: "linear-gradient(180deg,#dbeafe,#ffffff 60%,#bfdbfe)", text: "<span style='color:#1c1b2e'>🏖️❄️🌨️</span>", label: "Irudia" },
    likes: "31.400", replies: "2.200", shares: "12.700",
    comments: [{ who: "@amaia_z", text: "Zer ederra!!" }, { who: "@txema88", text: "AA da hori, argiak ez du zentzurik" }]
  },
  q: `Zein egiaztapen-urrats dira baliagarriak irudia benetakoa den jakiteko? Aukeratu guztiak.`,
  options: [
    { t: `Alderantzizko irudi-bilaketa egin, irudia lehenago agertu den edo jatorria zein den ikusteko.`, ok: true },
    { t: `Egun horretako eguraldi-datu ofizialak eta tokiko hedabideak kontsultatu.`, ok: true },
    { t: `Kontuaren profila aztertu: noiz sortu zen, zer argitaratu ohi duen, nor dagoen atzean.`, ok: true },
    { t: `Irudiaren jatorri-informazioa (metadatuak, «Content Credentials» etiketak) begiratu, eskuragarri badago.`, ok: true },
    { t: `Irudian akats bisualik ikusten ez baduzu, benetakoa dela ondorioztatu.`, why: `AA irudiak gero eta errealistagoak dira: akatsik ez egoteak ez du ezer frogatzen.` },
    { t: `Partekatze kopurua begiratu: 12.000 baino gehiago badira, benetakoa da.`, why: `Ospeak ez du egiazkotasuna frogatzen.` }
  ],
  explain: `Maila altuan, ikasleak <b>hainbat estrategia konbinatzen</b> ditu: jatorria, iturri independenteak, egilea eta metadatuak. Begiz detektatzea gero eta ez-fidagarriagoa da.`
},
{
  id: "az07", code: "MAIL-AZ-07", comp: "aztertu", context: "herritartasuna", level: 1, type: "match",
  q: `MAILen hiru kontzeptu gakoak daude. Lotu galdera bakoitza dagokion kontzeptuarekin.`,
  pairs: [
    { a: `Nork sortu du mezu hau, eta AA erabili al da? Norentzat egin da?`, b: "Egileak eta audientziak" },
    { a: `Zergatik ikusten dut mezu hau? Algoritmo batek aukeratu al du niretzat?`, b: "Mezuak eta esanahiak" },
    { a: `Nola irudikatzen dira pertsona edo talde jakin batzuk? Zer geratu da kanpoan?`, b: "Irudikapenak eta errealitateak" }
  ],
  explain: `Hiru kontzeptuak MAIL markoaren «betaurrekoak» dira: edozein mezu aztertzeko erabil daitezke, testua, irudia, bideoa edo AA baten erantzuna izan.`
},
{
  id: "az08", code: "MAIL-AZ-08", comp: "aztertu", context: "ikaskuntza", level: 3, type: "open",
  stimulus: [
    { type: "article", caption: "Titularra (sare sozialetan)", outlet: "GAURKO FLASH", section: "Gizartea",
      headline: "Zientzialariek frogatu dute: bideo-jokoek gazteak biolentoago bihurtzen dituzte",
      byline: "", body: `<p>Partekatu 25.000 aldiz.</p>` },
    { type: "text", caption: "Jatorrizko ikerketaren laburpena",
      html: `<p><b>Lagina:</b> 300 ikasle (14–16 urte), inkesta bakarra.</p><p><b>Emaitza:</b> bideo-joko biolentoetan denbora gehiago ematen dutela <i>diotenek</i> haserre-sentimendu apur bat altuagoak adierazi dituzte.</p><p><b>Egileen oharra:</b> «Korrelazio ahula da. Diseinuak ez du kausalitatea ondorioztatzea ahalbidetzen, eta beste faktore batzuk (loa, familia-giroa) ez dira kontrolatu.»</p>` }
  ],
  q: `Zer desberdintasun dago titularraren eta ikerketaren artean? Zergatik da garrantzitsua? Idatzi 3–5 esaldi.`,
  model: `Titularrak dio bideo-jokoek biolentzia <i>eragiten</i> dutela eta hori «frogatu» dela, baina ikerketak korrelazio ahula baino ez du aurkitu, eta egileek esplizituki diote ezin dela kausalitatea ondorioztatu. Gainera, «biolentoago» ez da neurtu: haserre-sentimendu autodeklaratuak baizik. Lagina txikia da eta beste faktore batzuk ez dira kontrolatu. Garrantzitsua da, titular horrek jendearen iritzia eta erabakiak (adib. debekuak) baldintza ditzakeelako ebidentzia sendorik gabe.`,
  criteria: [
    `Korrelazioa eta kausalitatea bereizten ditu.`,
    `Titularraren gehiegikeria bat identifikatzen du («frogatu», «biolentoago»…).`,
    `Ikerketaren muga bat aipatzen du (lagina, inkesta, faktore kontrolatu gabeak).`,
    `Zergatik den garrantzitsua azaltzen du (iritzi publikoa, erabakiak…).`
  ],
  explain: `PISAk «Reality and Modelling» motako atazak aipatzen ditu: titular baten eta benetako edukiaren arteko tartea detektatzea.`
},
{
  id: "az09", code: "MAIL-AZ-09", comp: "aztertu", context: "herritartasuna", level: 2, type: "classify",
  scenario: `AA txatbot batek patinete elektrikoei buruzko testu hau sortu du. Esaldi bakoitza aztertu behar duzu zure iritzi-artikulurako.`,
  q: `Sailkatu esaldi bakoitza.`,
  cats: ["Gertaera egiaztagarria", "Iritzia", "Egiaztatu behar da"],
  rows: [
    { t: `«Patinete elektrikoak hiriko garraiobiderik dibertigarrienak dira.»`, c: 1, why: `Balorazio subjektiboa da.` },
    { t: `«Patinete elektrikoen istripuak %340 igo dira azken urtean.»`, c: 2, why: `Datu zehatza, iturririk eta eremurik gabe: AAk asmatua izan daiteke.` },
    { t: `«Patinete elektriko batek elektrizitatea behar du bateria kargatzeko.»`, c: 0, why: `Gertaera orokor eta erraz egiaztagarria.` },
    { t: `«Udal guztiek laster debekatuko dituzte.»`, c: 2, why: `Iragarpen orokorra, oinarririk gabe.` },
    { t: `«Ez nuke inoiz patinete bat erosiko.»`, c: 1, why: `Iritzi pertsonala (eta AA batek ez du «iritzirik»: estiloa imitatzen du).` }
  ],
  explain: `AA testuek gertaerak, iritziak eta asmakizunak <b>tonu berdinarekin</b> nahasten dituzte. Esaldiz esaldi bereizteak zure testuaren kalitatea babesten du.`
},
{
  id: "az10", code: "MAIL-AZ-10", comp: "aztertu", context: "herritartasuna", level: 2, type: "single",
  scenario: `Irudi-sortzaile bati «zientzialari bat bere laborategian» eskatu diozu 20 aldiz. 18 irudietan gizon zuri helduak agertu dira, bata txanoarekin eta betaurrekoekin.`,
  q: `Zein da azalpenik onena?`,
  options: [
    { t: `Zientzialari gehienak gizonak direlako gaur egun.`, why: `Ez da zehatza, eta errealitatea baino are desorekatuagoa da irudia.` },
    { t: `Ereduak entrenamendu-datuetako desorekak eta estereotipoak islatu eta areagotzen dituelako.`, ok: true },
    { t: `Irudi-sortzaileak nahita diskriminatzeko programatuta daudelako.`, why: `Normalean ez da nahita; datuen eta diseinu-erabakien ondorioa da.` },
    { t: `Ausazko kasualitatea delako.`, why: `20tik 18 ez da kasualitatea: patroi sistematikoa da.` }
  ],
  explain: `MAIL markoaren ideia gakoa: <b>AA sistemek entrenamendu-datuetako alborapenak kodetu eta areagotzen dituzte</b>. Horregatik irudikapenak zalantzan jarri behar dira.`
},
{
  id: "az11", code: "MAIL-AZ-11", comp: "aztertu", context: "herritartasuna", level: 2, type: "multi",
  stimulus: {
    type: "search", caption: "Bilaketa-emaitzak",
    query: "medusa arriskutsuak Bizkaiko hondartzak",
    ai: `Bizkaiko hondartza guztiak itxita daude medusa hiltzaileengatik, eta dagoeneko 3 pertsona ospitaleratu dituzte. <i>(iturririk gabe)</i>`,
    results: [
      { letter: "A", ad: true, url: "eguzkikrema-outlet.com", title: "Babes-krema 2x1 — hondartzarako dena!", desc: "Eskaintza mugatua. Doako bidalketa." },
      { letter: "B", url: "osasun-abisuak.eus › abisuak › hondartzak", title: "Hondartzetako osasun-abisuak: gaurko egoera", desc: "Egunero eguneratua. Bandera-egoera hondartzaz hondartza eta jarraibideak." },
      { letter: "C", url: "bizkaiko-kronika.eus › gizartea", title: "Hondartzazainek bi medusa-mota ikusi dituzte Sopelan", desc: "Itsas biologo bati elkarrizketa: «Ez dira hilgarriak, baina ziztadak mina ematen du»." },
      { letter: "D", url: "berri-bizkorrak.xyz", title: "MEDUSA HILTZAILEAK!!! Ikusi bideoa ⚠️", desc: "2 ordu · Partekatu ahal duzun guztia!" }
    ]
  },
  q: `Zein iturri erabiliko zenituzke informazioa egiaztatzeko? Aukeratu guztiak.`,
  options: [
    { t: `A emaitza`, why: `Iragarkia da; ez du informaziorik ematen gaiari buruz.` },
    { t: `B emaitza`, ok: true, why: `Erakunde ofiziala eta egunero eguneratua.` },
    { t: `C emaitza`, ok: true, why: `Tokiko hedabidea, aditu izendun batekin; B-rekin kontrasta daiteke.` },
    { t: `D emaitza`, why: `Sentsazionalismoa, iturri ezezaguna eta presa.` },
    { t: `Goiko AA laburpena`, why: `Iturririk ez du, eta ez dator bat C emaitzarekin: haluzinazio edo nahasketa izan daiteke.` }
  ],
  explain: `Bilatzaileen <b>AA laburpenak</b> lagungarriak izan daitezke, baina akatsak egin ditzakete. Egiaztatu beti lotutako iturrietan, eta bilatu iturri <b>independenteen arteko adostasuna</b>.`
},

/* ------------------------------------------------------------------------
   4. PARTE HARTU ETA ELKARLANEAN ARITU
   ------------------------------------------------------------------------ */
{
  id: "ph01", code: "MAIL-PH-01", comp: "partehartu", context: "ikaskuntza", level: 1, type: "single",
  scenario: `Iker taldekideak kartel baten zirriborroa partekatu du dokumentu partekatuan. Diseinua polita da, baina izenburuko datuak ez du iturririk eta letra txikiegia da.`,
  q: `Zein iruzkin da eraikitzaileena?`,
  options: [
    { t: `«Oso ondo 👍»`, why: `Atsegina, baina ez du hobetzen laguntzen.` },
    { t: `«Hau ez da ulertzen, egin berriro.»`, why: `Zakarra eta zehaztugabea.` },
    { t: `«Diseinua oso argia da eta koloreek erakartzen dute! Bi gauza hobetuko nituzke: izenburuko datuaren iturria falta da, eta letra handiagoa behar da urrunetik irakurtzeko. Laguntzen dizut iturria bilatzen?»`, ok: true },
    { t: `«Irakasleak suspendituko gaitu honekin 😂»`, why: `Barre egiteak mindu dezake eta ez du konponbiderik ematen.` }
  ],
  explain: `Feedback eraikitzaileak: <b>alde onak</b> aitortu + <b>hobekuntza zehatzak</b> + <b>laguntza</b> eskaini. Tonua ere garrantzitsua da testuz idaztean.`
},
{
  id: "ph02", code: "MAIL-PH-02", comp: "partehartu", context: "harremanak", level: 2, type: "single",
  stimulus: {
    type: "chat", caption: "Klaseko talde-txata", title: "4.B 📚", members: "27 kide",
    messages: [
      { who: "Oier", text: `😂😂😂 begira Nerearen argazkia filtroarekin` },
      { who: "Oier", text: `<span style="display:block;margin-top:.3rem;padding:.6rem;background:#eee;border-radius:8px;font-size:.8rem">🖼️ nerea_meme.jpg</span>` },
      { who: "Ander", text: `hahahaha hilda nago` },
      { who: "Lur", text: `🤣🤣` },
      { sys: true, text: "Nerea txatean dago · idazten ez" }
    ]
  },
  q: `Zer da lehen urrats egokiena?`,
  options: [
    { t: `Ezer ez esan; ez da zure arazoa.`, why: `Ikusle pasiboak jazarpena normalizatzen du.` },
    { t: `Oierri iraina bat bidali taldean.`, why: `Gatazka areagotzen du eta ez du Nerea babesten.` },
    { t: `Taldean argi eta errespetuz esan meme hori ez dela dibertigarria eta ezabatzeko eskatu; Nereari pribatuan idatzi nola dagoen galdetzeko.`, ok: true },
    { t: `Memea zure beste taldeetara bidali, frogak gordetzeko.`, why: `Irudia gehiago zabaltzen duzu. Frogak behar badira, pantaila-argazkia heldu bati eman, ez zabaldu.` }
  ],
  explain: `Maila altuan, ikasleak <b>gatazka baretzen</b>, <b>biktima babesten</b> eta bere erreakzio inpultsiboak kontrolatzen ditu. Egoerak jarraitzen badu, heldu bati jakinarazi.`
},
{
  id: "ph03", code: "MAIL-PH-03", comp: "partehartu", context: "ikaskuntza", level: 1, type: "classify",
  scenario: `Lau ikasle dokumentu partekatu batean idazten ari zarete.`,
  q: `Sailkatu jokabide bakoitza.`,
  cats: ["Egokia", "Ez egokia"],
  rows: [
    { t: `Taldekide baten paragrafoa ezabatzea, abisatu gabe, «hobeto» dagoelako zurea.`, c: 1, why: `Bestearen lana errespetatu: iruzkin bidez proposatu.` },
    { t: `Iruzkin bat gehitzea aldaketa bat proposatzeko.`, c: 0, why: `Elkarlanerako tresna egokia.` },
    { t: `Bertsio-historia erabiltzea nahi gabe ezabatutakoa berreskuratzeko.`, c: 0, why: `Tresnen funtzioak ondo erabiltzea.` },
    { t: `Dokumentuaren esteka publikoa («edonork editatu dezake») talde ireki batean partekatzea.`, c: 1, why: `Edonork alda edo ezaba dezake lana, eta datuak ager daitezke.` },
    { t: `Nork zer egingo duen eta noizko, lehen orrian adostea.`, c: 0, why: `Antolaketa argiak gatazkak saihesten ditu.` }
  ],
  explain: `Online elkarlanak <b>tresnen ezagutza</b> eta <b>arau sozialak</b> uztartzen ditu.`
},
{
  id: "ph04", code: "MAIL-PH-04", comp: "partehartu", context: "herritartasuna", level: 3, type: "multi",
  stimulus: {
    type: "post", caption: "Auzoko foroa · «Iruzkin garrantzitsuenak lehenik»",
    author: "Auzo Plataforma", handle: "Eztabaida: parke berriko skate-gunea", time: "412 iruzkin", color: "#e9a24f",
    text: `Algoritmoak erantzun eta erreakzio gehien jasotzen dituzten iruzkinak jartzen ditu goian.`,
    comments: [
      { who: "Mikel_R", text: "GAZTE ZARATATSU HORIEK ETXEAN GERATU BEHAR DUTE 😡 (1.203 erreakzio)" },
      { who: "skate_lover", text: "Zuk ez duzu ezer ulertzen, zaharkitua!!! (987 erreakzio)" },
      { who: "Itziar_G", text: "Ordutegi bat eta zarata-hesi bat proposatzen dut, denok ados egoteko. (14 erreakzio)" }
    ]
  },
  q: `Sailkapen-sistema honek zein ondorio izan ditzake eztabaidan? Aukeratu guztiak.`,
  options: [
    { t: `Ahots moderatu eta proposamen eraikitzaileak ikusezin geratzea.`, ok: true },
    { t: `Polarizazioa handitzea: posizioak muturrera eramatea.`, ok: true },
    { t: `Jende batek parte hartzeari uztea, giroa erasokorra delako.`, ok: true },
    { t: `Eztabaida orekatuagoa izatea, denek ikusten dutelako zer den ezaguna.`, why: `Ezaguna izatea ez da orekatua izatea.` },
    { t: `Algoritmoak iruzkinik zuzenenak saritzea.`, why: `Erreakzioak saritzen ditu, ez zuzentasuna.` }
  ],
  explain: `MAIL markoak dioenez, AA sistemek <b>zeinen ahotsak anplifikatzen diren eta zeinenak ez</b> erabakitzen dute. Herritar gisa parte hartzeko, hori ulertzea funtsezkoa da.`
},
{
  id: "ph05", code: "MAIL-PH-05", comp: "partehartu", context: "harremanak", level: 2, type: "single",
  scenario: `<b>AA aholkularia.</b> Zure 12 urteko lehengusuak «lagun» motako txatbot batekin orduak ematen ditu gauero, eta esan dizu: «Bera da ni ulertzen nauen bakarra».`,
  q: `Zein aholku da egokiena?`,
  options: [
    { t: `Mugikorra kentzea gurasoei eskatu, berehala, berarekin hitz egin gabe.`, why: `Epaitzeak eta debekatzeak konfiantza hautsi dezake.` },
    { t: `Txatbotak atseginak izateko diseinatuta daudela eta benetako enpatiarik ez dutela azaldu, epaitu gabe; erabilera-denbora mugatzea eta pertsona batekin (lagun, familia, tutorea) hitz egitea proposatu.`, ok: true },
    { t: `Ondo dagoela esan: txatbotak psikologoak baino hobeak dira, beti daudelako eskuragarri.`, why: `Ez dute ordezkatzen giza laguntza, eta haien diseinuak dependentzia sor dezake.` },
    { t: `Ezer ez esan, bere bizitza pribatua delako.`, why: `Hurbilekoa zara eta laguntza eskain dezakezu errespetuz.` }
  ],
  explain: `PISA MAILek «Media & AI Advisor» motako atazak aipatzen ditu: besteei aholkatzea zein erabilera diren arriskutsuagoak <b>ongizaterako</b>.`
},
{
  id: "ph06", code: "MAIL-PH-06", comp: "partehartu", context: "harremanak", level: 1, type: "single",
  stimulus: {
    type: "email", caption: "Posta elektronikoa",
    subject: "⚠️ Zure ikastetxeko kontua 24 orduan blokeatuko da",
    fromName: "Ikastetxeko Laguntza Teknikoa", from: "laguntza@ikastetxe-segurua-login.com",
    to: "zu@ikaslea.eus", time: "gaur, 07:12",
    body: `<p>Kaixo ikaslea,</p><p>Zure kontuan jarduera susmagarria detektatu dugu. Zure pasahitza <b>berehala</b> berretsi ezean, kontua eta zure lan guztiak ezabatuko dira.</p><p><span class="email-btn">Egiaztatu kontua orain</span></p><p>Laguntza Taldea</p>`
  },
  q: `Zer egin behar duzu?`,
  options: [
    { t: `Estekan klik egin eta pasahitza sartu, lanak ez galtzeko.`, why: `Phishing klasikoa da: zure kredentzialak lapurtuko lituzkete.` },
    { t: `Ez klik egin; bidaltzailearen helbidea susmagarria dela ohartu; ikastetxeko IKT arduradunari edo tutoreari jakinarazi eta mezua ezabatu.`, ok: true },
    { t: `Erantzun eta galdetu ea benetakoa den.`, why: `Erantzuteak zure helbidea aktibo dagoela berresten du.` },
    { t: `Klaseko taldera bidali, denek klik egin dezaten eta kontuak salbatu.`, why: `Arriskua zabaltzen duzu.` }
  ],
  explain: `Seinaleak: <b>presa</b> («24 orduan»), <b>mehatxua</b>, <b>domeinu arrotza</b> (ikastetxe-segurua-login.com) eta <b>pasahitza eskatzea</b>. Jakinarazteak besteak ere babesten ditu.`
},
{
  id: "ph07", code: "MAIL-PH-07", comp: "partehartu", context: "herritartasuna", level: 2, type: "classify",
  scenario: `Institutuko ikasle talde batek kanpaina bat antolatu nahi du, auzora bidegorri bat eskatzeko.`,
  q: `Sailkatu ekintza bakoitza.`,
  cats: ["Egokia", "Ez egokia"],
  rows: [
    { t: `Online sinadura-bilketa, datu minimoekin eta helburu argiarekin.`, c: 0, why: `Parte-hartze gardena eta datuak babestuta.` },
    { t: `Alkatearen argazki manipulatuak memeetan zabaltzea.`, c: 1, why: `Pertsona bati kalte egiten dio eta kanpainaren sinesgarritasuna suntsitzen du.` },
    { t: `Istripu-arriskuko bideguneen argazki errealak eta datuak biltzea udalari aurkezteko.`, c: 0, why: `Ebidentzian oinarritutako parte-hartzea.` },
    { t: `Sinadura faltsuak gehitzea bot baten bidez, «indar gehiago» izateko.`, c: 1, why: `Iruzurra da; kanpaina osoa deslegitimatzen du.` },
    { t: `Kanpainaren kontuan argi adieraztea nor dagoen atzean eta nola parte hartu.`, c: 0, why: `Gardentasunak konfiantza sortzen du.` }
  ],
  explain: `Herritartasun digitalak <b>eragiteko ahalmena</b> eta <b>ardura</b> uztartzen ditu: online ekintzaren indarra eta mugak ulertzea.`
},
{
  id: "ph08", code: "MAIL-PH-08", comp: "partehartu", context: "ikaskuntza", level: 2, type: "open",
  scenario: `Nahiak, zure taldekideak, talde-lanaren atal bat entregatu du. Testua oso ona da, baina AA txatbot batek idatzitakoa dirudi (estilo generikoa, «Laburbilduz, esan daiteke…») eta lana zuen izenean entregatuko duzue. Irakasleak AAren erabilera adierazteko eskatu du.`,
  q: `Idatzi Nahiari bidaliko zeniokeen mezua (3–5 esaldi).`,
  placeholder: "Kaixo Nahia…",
  model: `Kaixo Nahia! Eskerrik asko zure atala hain azkar egiteagatik, ideiak oso argiak dira. Galdera bat: AA erabili duzu idazteko? Ez dago txarto, baina irakasleak adierazteko eskatu digu eta denok batera entregatzen dugunez, gardenak izan behar dugu. Nahi baduzu, bihar elkarrekin berrikusi dezakegu, gure hitzekin moldatu eta AAren erabilera-oharra gehitzeko.`,
  criteria: [
    `Tonu errespetuzkoa eta epaitzen ez duena erabiltzen du.`,
    `Egindako lana edo ekarpena aitortzen du.`,
    `Arazoa argi azaltzen du (gardentasuna, irakaslearen araua, talde-ardura).`,
    `Konponbide edo laguntza zehatz bat proposatzen du.`
  ],
  explain: `PISAk «Give Feedback» atazak aipatzen ditu. Mezu on batek harremana zaintzen du eta arazoa konpontzen du.`
},

/* ------------------------------------------------------------------------
   5. SORTU
   ------------------------------------------------------------------------ */
{
  id: "so01", code: "MAIL-SO-01", comp: "sortu", context: "harremanak", level: 1, type: "single",
  scenario: `Zure institutuak 10–12 urteko ikasleei ziberjazarpenaren aurkako mezu bat helarazi nahi die, eta zuei eskatu dizue sortzea.`,
  q: `Zein formatu da egokiena helburu eta audientzia horretarako?`,
  options: [
    { t: `30 orriko txostena PDFan, estatistika guztiekin.`, why: `Luzeegia eta formalegia adin horretarako.` },
    { t: `Bideo labur bat (60 s), egoera hurbilekin, azpitituluekin eta laguntza non eskatu adierazita.`, ok: true },
    { t: `Datu teknikoz betetako infografia, letra txikiarekin.`, why: `Konplexuegia; ez du ekintzarako bidea ematen.` },
    { t: `Iritzi-artikulu luze bat tokiko egunkarian.`, why: `Audientzia horrek ez du egunkaririk irakurtzen normalean.` }
  ],
  explain: `Sortzeko galdera nagusiak: <b>zergatik</b> (helburua), <b>norentzat</b> (audientzia), <b>zer</b> (edukia) eta <b>nola</b> (formatua).`
},
{
  id: "so02", code: "MAIL-SO-02", comp: "sortu", context: "limurtzea", level: 2, type: "match",
  q: `Kanpaina-bideo bat sortzen ari zarete. Lotu sortze-erabaki bakoitza lortu nahi den efektuarekin.`,
  pairs: [
    { a: `Musika alaia eta kolore beroak`, b: "Emozio positiboa sortzea" },
    { a: `Grafiko sinplea, iturria azpian aipatuta`, b: "Sinesgarritasuna ematea" },
    { a: `Gazteen hizkera eta meme ezagunak`, b: "Audientzia jakin batera hurbiltzea" },
    { a: `Amaieran: «Sinatu gaur, esteka biografian»`, b: "Ekintza bultzatzea" }
  ],
  explain: `Sortzaileek erabaki <b>estrategikoak</b> hartzen dituzte. Horiek ezagutzeak zure mezuak hobetzen ditu eta besteenak aztertzen laguntzen dizu.`
},
{
  id: "so03", code: "MAIL-SO-03", comp: "sortu", context: "ikaskuntza", level: 1, type: "single",
  scenario: `Eskolako jaialdirako kartela egin duzue. Atzeko irudia AA irudi-sortzaile batekin sortu duzue, eta testua eta diseinua zuek egin dituzue.`,
  q: `Nola adierazi AAren erabilera?`,
  options: [
    { t: `Ez da beharrezkoa, kartela zuek egin duzuelako.`, why: `Irudia ez duzue zuek sortu: gardentasuna falta da.` },
    { t: `Ohar txiki bat kartelean: «Atzeko irudia AA bidez sortua; testua eta diseinua: 4.B taldea».`, ok: true },
    { t: `«Dena AAk egina» jarri, badaezpada.`, why: `Ez da zehatza: zuen lana ere badago.` },
    { t: `Irakasleari soilik esan, ahoz.`, why: `Kartelaren audientziak ere jakiteko eskubidea du.` }
  ],
  explain: `Adierazpen onak <b>zer</b> egin duen AAk eta <b>zer</b> egin duten pertsonek bereizten du.`
},
{
  id: "so04", code: "MAIL-SO-04", comp: "sortu", context: "aisialdia", level: 2, type: "classify",
  scenario: `Zure bideo-kanalerako edukiak prestatzen ari zara.`,
  q: `Sailkatu erabilera bakoitza jabetza intelektualari dagokionez.`,
  cats: ["Egokia", "Ez egokia"],
  rows: [
    { t: `Creative Commons BY lizentziadun argazkia erabiltzea, egilea aipatuta.`, c: 0, why: `Lizentziak baimentzen du, aitortza eginez.` },
    { t: `Beste sortzaile baten bideoa deskargatu eta zure kontuan igotzea zure izenarekin.`, c: 1, why: `Egile-eskubideen urraketa eta iruzurra.` },
    { t: `Abesti ezagun oso bat bideoaren atzealdean, baimenik edo lizentziarik gabe.`, c: 1, why: `Egile-eskubideak ditu; erabili lizentzia libreko musika.` },
    { t: `Film baten 5 segundoko zatia kritika-bideo batean, zure iruzkinarekin eta iturria aipatuta.`, c: 0, why: `Aipamen- eta kritika-helburuak orokorrean onartzen dira, zati laburra eta iturria aipatuta.` },
    { t: `AAri artista bizi baten estiloa kopiatzeko eskatu eta irudiak saltzea, «nire obra» bezala.`, c: 1, why: `Etikoki arazoduna da (egilearen lana eta ospea) eta legez zalantzazkoa.` }
  ],
  explain: `Remix kultura aukera handia da, baina <b>lizentziak</b>, <b>aitortza</b> eta <b>jatorrizko egileen errespetua</b> eskatzen ditu.`
},
{
  id: "so05", code: "MAIL-SO-05", comp: "sortu", context: "ikaskuntza", level: 1, type: "order",
  q: `Ordenatu sortze-prozesu iteratibo baten urratsak.`,
  steps: [
    `Helburua eta audientzia zehaztu.`,
    `Ideiak bildu (zirriborroak, erreferentziak, AArekin ideia-jasa).`,
    `Lehen bertsioa sortu.`,
    `Feedbacka jaso (ikaskideak, audientziaren adibide bat).`,
    `Berrikusi eta hobetu.`,
    `Argitaratu, AAren erabilera eta iturriak adierazita.`
  ],
  explain: `MAILen arabera, ikasle gaituek sorkuntza <b>prozesu iteratibo</b> gisa lantzen dute, AArekin edo gabe.`
},
{
  id: "so06", code: "MAIL-SO-06", comp: "sortu", context: "herritartasuna", level: 2, type: "single",
  scenario: `Ikastetxeko aldizkarirako artikulu bat idatzi duzu herriko arrantzaleen egoerari buruz. Irudi bat behar duzu eta AA irudi-sortzailea erabiliko duzu.`,
  q: `Zein prompt da arduratsuena?`,
  options: [
    { t: `«Herriko arrantzale-kofradiako lehendakariaren argazki errealista, negarrez, portuan.»`, why: `Pertsona erreal baten irudi faltsu fotorrealista: engainagarria eta kaltegarria.` },
    { t: `«Arrantza-ontzi baten ilustrazio estilizatua kostaldeko portu batean, egunsentian; marrazki-estiloa, ez argazki errealista.»`, ok: true },
    { t: `«Albisteen argazki errealista: portua sutan eta arrantzaleak protestan.»`, why: `Gertatu ez den gertaera baten irudia, albiste-itxurarekin: desinformazioa.` },
    { t: `«Arrantzale tipiko bat, txapelarekin eta ardo-botila eskuan.»`, why: `Estereotipoak indartzen ditu.` }
  ],
  explain: `Irudi informatiboetan, AA irudiak <b>argi eta garbi ilustrazio</b> gisa aurkeztea eta <b>pertsona errealak edo gertaera faltsuak</b> ez irudikatzea da jokabide arduratsua.`
},
{
  id: "so07", code: "MAIL-SO-07", comp: "sortu", context: "herritartasuna", level: 2, type: "open",
  scenario: `Zure institutua «Zero plastiko» kanpaina abiarazten ari da. <b>Datuak:</b> jantokian 1.200 plastikozko botila erabiltzen dira hilean. <b>Helburua:</b> familiek ur-botila berrerabilgarriak ematea seme-alabei. <b>Audientzia:</b> familiak, WhatsApp bidez.`,
  q: `Idatzi mezua (gehienez 50 hitz).`,
  placeholder: "Idatzi familientzako mezua…",
  model: `Kaixo familiak! 👋 Gure jantokian hilean 1.200 plastikozko botila erabiltzen dira. «Zero plastiko» kanpainarekin hori aldatu nahi dugu: urritik aurrera, eman zuen seme-alabei ur-botila berrerabilgarria. Keinu txikia, aldaketa handia! 💧 Galderarik? Idatzi tutoreari. — 4.B ikasleak`,
  criteria: [
    `Helburua argi adierazten du (botila berrerabilgarriak ekartzea).`,
    `Audientziara egokitzen da (familiak: tonu hurbila, laburra, ulergarria).`,
    `Datua zuzen erabiltzen du, gehiegikeriarik gabe.`,
    `Ekintzarako dei zehatza dauka (zer, noiztik).`
  ],
  explain: `PISAk sortzeko ataza irekiak ere izango ditu: <b>helburua</b>, <b>audientzia</b> eta <b>zehaztasuna</b> dira balorazio-irizpide nagusiak.`
},
{
  id: "so08", code: "MAIL-SO-08", comp: "sortu", context: "ikaskuntza", level: 2, type: "multi",
  scenario: `Udako praktika bat eskatzeko profil profesional bat sortzen ari zara (lan-sare sozial batean).`,
  q: `Zein eduki aukeratuko zenituzke? Aukeratu guztiak.`,
  options: [
    { t: `Boluntario gisa egindako jarduera (adib. auzoko liburutegia).`, ok: true },
    { t: `Hizkuntzak eta maila (euskara, gaztelania, ingelesa…).`, ok: true },
    { t: `Institutuko proiektu baten deskribapen laburra eta zure eginkizuna.`, ok: true },
    { t: `Aurpegia argi ikusten den argazki neutroa.`, ok: true },
    { t: `Jaietako argazkiak lagunekin.`, why: `Profil pertsonalerako egokiagoa.` },
    { t: `Zure telefono-zenbaki pertsonala, publikoki ikusgai.`, why: `Pribatutasun-arriskua; plataformaren mezularitza erabili.` }
  ],
  explain: `PISAk «Personal/Professional Profile» atazak aipatzen ditu: edukia <b>helburuaren eta audientziaren arabera</b> hautatzea.`
},
{
  id: "so09", code: "MAIL-SO-09", comp: "sortu", context: "herritartasuna", level: 3, type: "highlight",
  scenario: `<b>Benetako datuak:</b> 42 ikaslek 312 kg plastiko bildu dituzte gaur Laga hondartzan. Argitalpeneko azaleko irudia AA bidez sortu duzue. AAri argitalpenerako testua eskatu diozu, eta hau proposatu dizu:`,
  q: `Egin klik <b>zuzendu edo kendu beharko zenituzkeen</b> esaldietan argitaratu aurretik.`,
  segments: [
    { t: "Gaur 42 ikaslek 312 kg plastiko bildu dituzte Laga hondartzan! 💪" },
    { t: "Euskal Herrian inoiz egin den ekimenik handiena da!", k: true },
    { t: "Mila esker parte hartu duzuen guztioi." },
    { t: "Zientzialariek diote 2030ean itsasoan arrainak baino plastiko gehiago egongo dela.", k: true },
    { t: "Argazki guztiak gaur ateratakoak dira. 📸", k: true },
    { t: "#ZeroPlastiko #Laga" }
  ],
  explain: `Hiru arazo: <b>gehiegikeria egiaztatu gabea</b> («inoiz egin den handiena»), <b>iturririk gabeko datu dramatikoa</b> eta <b>AAren erabilera ezkutatzen duen gezurra</b>. AAk proposatutakoa zure ardura da argitaratzen duzunean.`
}
];
