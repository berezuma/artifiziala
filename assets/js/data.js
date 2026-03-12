/* ═══════════════════════════════════════════
   aa-eus · Datu-basea (V2 — eduki aberatsa)
   ═══════════════════════════════════════════ */

window.AA = {

  lessons: [
    {
      id: 1,
      title: "Zer da adimen artifiziala?",
      level: "Oinarrizkoa",
      color: "coral",
      emoji: "🤖",
      duration: "15 min",
      summary: "AI zer den eta zer ez den ulertzeko lehen urratsa: makinek zeregin jakin batzuk egiten ikasten dute, baina ez dute benetan pentsatzen.",
      keyConcepts: [
        { term: "Adimen artifiziala", icon: "🧠", desc: "Ordenagailuek datuetatik patroiak antzemanez erabakiak hartzeko duten gaitasuna." },
        { term: "AI zabala vs estua", icon: "📏", desc: "AI estua: zeregin jakin batean aritzea. AI zabala: edozein gauza egitea (gaur egun existitzen ez dena)." },
        { term: "Automatizazioa", icon: "⚙️", desc: "Lanak automatikoki egitea arau finkoekin. AI ez da automatizazio soila." },
        { term: "Patroien ezagutza", icon: "🔎", desc: "AAren oinarria: adibideetan erregulartasunak aurkitzea eta horietatik ikastea." }
      ],
      sections: [
        {
          type: "text",
          heading: "Zer da benetan AA?",
          content: "Adimen artifiziala (AA) ordenagailuek datuetatik patroiak antzemateko eta horren arabera erabaki edo iragarpen batzuk egiteko duten gaitasuna da. Gizakiok naturalki egiten dugu hori — aurpegi bat ezagutu, hizkuntza bat ulertu, irudi batean zer dagoen identifikatu — baina makinek milioika adibide behar dituzte gauza bera egiten ikasteko.\n\nFuntsean, AAk ez du pentsatzen pertsona batek bezala. Ez du kontzientziarik, ez du sentimendurik, ez du helburuak aukeratzen, eta ez daki zer egiten ari den benetan. Baina zeregin jakin batzuetan oso ondo aritu daiteke: hizkuntzak itzuli, irudiak ezagutu, jokuetan irabazi, edo testuak sortu."
        },
        {
          type: "didyouknow",
          heading: "Badakizu?",
          content: "\"Adimen artifiziala\" terminoa 1956an sortu zuen John McCarthy-k, Dartmouth-eko konferentzia batean. Orduan uste zuten 20 urtean makinek gizakien mailan pentsatuko zutela. 70 urte geroago, oraindik ez dugu lortu!"
        },
        {
          type: "text",
          heading: "AI mota desberdinak",
          content: "Bi mota nagusi bereizten dira:\n\n• <strong>AI estua (Narrow AI):</strong> zeregin jakin batean aritzeko diseinatuta dago. Adibidez, xake jolasten duen programa bat oso ona da xakean, baina ez daki zer den txakur bat. Gaur egungo AI guztia da mota honetakoa.\n\n• <strong>AI zabala (General AI):</strong> edozein zereginetan gizakien mailan aritzeko gai izango litzatekeen sistema bat. Hau momentuz ez da existitzen, eta ez dakigu noiz edo ea existituko den."
        },
        {
          type: "examples",
          heading: "Non aurkitzen duzu AA egunerokoan?",
          items: [
            { icon: "🎵", title: "Musika gomendatzea", desc: "Spotify, YouTube Music eta Apple Music-ek zure entzuteko ohiturak aztertzen dituzte eta antzeko kantak gomendatzen dizkizute." },
            { icon: "📱", title: "Teklatu prediktiboa", desc: "Mugikorrean idazten duzunean, hurrengo hitza iradokitzen dizun sistema AAn oinarritua dago." },
            { icon: "📸", title: "Aurpegi ezagutza", desc: "Telefonoaren kamerak automatikoki ezagutzen ditu aurpegiak argazkietan, eta baita desblokeatzeko ere erabiltzen da." },
            { icon: "🗺️", title: "GPS nabigazioa", desc: "Google Maps-ek bide alternatiboa proposatzen dizunean trafikoa kontuan hartuz, AAk laguntzen du." },
            { icon: "🎮", title: "Bideojoko arerioek", desc: "Joko askotan arerioek zure estrategiari egokitzen diote berea — hori AA sinplea da." },
            { icon: "🛒", title: "Erosketa gomendioak", desc: "Amazon edo beste dendetan 'hau ere gustatu dakizuke' esaten dutenean, AA dago atzean." }
          ]
        },
        {
          type: "warning",
          heading: "Kontuz: zer EZ da AA?",
          content: "AA ez da pentsatzen duen izaki bat. Ez du nahi, desio edo helbururik. Ez daki zer esan duen edo zergatik. Filmek eta telesailek askotan erakusten digute AA gizakien mailan pentsatzen duena — baina hori fikzioa da. Ondo funtzionatzen duenean, datuetatik ikasitako patroiak eraginkortasunez aplikatzen dituelako da, ez ulertu duelako.\n\nAAk EZ du:\n• Kontzientziarik\n• Nahirik edo helbururik\n• Sentimendurik\n• Gizakien mailako ulermenik"
        },
        {
          type: "comparison",
          heading: "AA vs gizakia",
          items: [
            { label: "Kalkuluaren abiadura", ai: "Milioika eragiketa segundoko", human: "Motel baina malgua" },
            { label: "Esperientzia berria", ai: "Ez daki zer egin datu berririk gabe", human: "Egoera berrietara egokitzen da" },
            { label: "Sormena", ai: "Patroiak konbinatu, ez benetan sortu", human: "Benetako ideia berriak sor ditzake" },
            { label: "Emozio eta enpatia", ai: "Ez du sentitzen", human: "Funtsezko parte bat da" },
            { label: "Akatsak", ai: "Ziurtasunez erantzun dezake gaizki", human: "Normalean bere akatsez jabetzen da" }
          ]
        },
        {
          type: "reflect",
          heading: "Hausnartu",
          content: "Pentsatu zure egunerokoan: zein momentutan erabili duzu gaur AAk bultzatutako tresna bat, konturatu gabe ere? Zerrendatu gutxienez 3 adibide eta pentsatu: sistema horiek AArik gabe funtzionatuko al lukete?"
        }
      ],
      miniQuiz: [
        {
          question: "Zein da adimen artifizialaren oinarrizko ideia?",
          options: ["Ordenagailuek sentitzen dutela", "Datuetatik patroiak antzemanez erabakiak hartzea", "Ordenagailuek gizakiak baino hobeto pentsatzea", "Makinek kontzientzia izatea"],
          answer: 1,
          explanation: "AAren oinarria datuetatik patroiak aurkitzea eta horiek erabakiak hartzeko erabiltzea da, ez pentsatzea edo sentitzea."
        },
        {
          question: "Gaur egun existitzen al da gizakien mailan pentsatzen duen AA sistema bat?",
          options: ["Bai, ChatGPT", "Bai, Google", "Ez, AI zabala oraindik ez da existitzen", "Bai, baina isilean gordetzen dute"],
          answer: 2,
          explanation: "Gaur egungo AI guztia 'estua' da: zeregin jakin batzuetan ondo aritu daiteke, baina ez du gizakien mailako ulermen orokorrik."
        }
      ],
      glossary: [
        { term: "AI estua", def: "Zeregin jakin baterako prestatutako AA sistema." },
        { term: "AI zabala", def: "Edozein zereginetan gizakien mailan aritzeko gai izango litzatekeen sistema (oraindik ez da existitzen)." },
        { term: "Patroia", def: "Datuetan errepikatzen den erregulartasun bat." },
        { term: "Automatizazioa", def: "Lanak arau finkoekin automatikoki egitea, nahitaez AArik gabe." }
      ]
    },

    {
      id: 2,
      title: "Nola ikasten dute makinek?",
      level: "Oinarrizkoa",
      color: "blue",
      emoji: "📊",
      duration: "18 min",
      summary: "Makinek adibideetatik ikasten dute: datu asko ikusita patroiak antzematen dituzte, baina datuen kalitateak emaitza guztia baldintzatzen du.",
      keyConcepts: [
        { term: "Machine learning", icon: "🔄", desc: "Makinek datuetatik ikasten duten prozesua, programatzaile batek arau zehatzak eman gabe." },
        { term: "Entrenamendu datuak", icon: "📦", desc: "Sistema bati erakusten zaizkion adibideak, patroiak aurkitu ditzan." },
        { term: "Etiketak", icon: "🏷️", desc: "Datu bakoitzari atxikitako informazioa: 'hau katu bat da', 'hau spam da'." },
        { term: "Entrenamendua vs inferentzia", icon: "⚡", desc: "Entrenamendua: sistema ikasten ari da. Inferentzia: ikasitakoa aplikatzen du datu berriekin." }
      ],
      sections: [
        {
          type: "text",
          heading: "Zer da machine learning?",
          content: "Machine learning (ML) edo ikasketa automatikoa da AAren oinarri nagusia. Ideia sinplea da: programatzaile batek arau zehatz guztiak idatzi beharrean, sistemari adibide asko ematen zaizkio eta berak aurkitzen ditu patroiak.\n\nImaginatu txakur eta katuen argazkiak bereizten ikasi behar duen sistema bat. Programatzaile batek ez du idazten 'txakurrek muturra luzeagoa dute eta katuek belarri zorrotzak'. Horren ordez, milaka argazki erakusten dizkio sistemarik, bakoitza 'txakurra' edo 'katua' etiketarekin, eta sistema berak aurkitzen ditu bereizgarriak."
        },
        {
          type: "didyouknow",
          heading: "Badakizu?",
          content: "GPT-4 bezalako eredu handiak internet osoko testu guztiekin entrenatzen dira: liburuak, Wikipedia, foruak, blogak... baina terabyte horiek guztiak ez dira nahikoa gizaki baten mailako ulermena lortzeko."
        },
        {
          type: "text",
          heading: "Datuen garrantzia kritikoa",
          content: "Datuak ML sistemen 'elikagaia' dira, eta datuen kalitateak zuzenean eragiten du emaitzetan:\n\n• <strong>Datu gutxi:</strong> Sistemak ez du behar adina patroi aurkituko.\n• <strong>Datu kalitate txarreko:</strong> Argazki lausoak, etiketak okerrak, informazio zaharkitua → emaitza txarrak.\n• <strong>Datu desorekatuak:</strong> Talde baten adibide gehiago badira, sistemak talde horri buruz gehiago ikasiko du eta bestean okerrago aritu.\n\nIkusi laborategian nola funtzionatzen duen etiketatze jarduera batean!"
        },
        {
          type: "process",
          heading: "Nola entrenatzen da sistema bat?",
          steps: [
            { title: "1. Datuak bildu", desc: "Milaka edo milioika adibide bildu behar dira, ahalik eta askotarikoenak." },
            { title: "2. Datuak etiketatu", desc: "Adibide bakoitzari esaten zaio zer den: 'hau katua da', 'hau spam mezua da'." },
            { title: "3. Entrenamendua", desc: "Sistemak asmatu egiten du, akatsa neurtzen da, eta parametroak doitzen ditu gutxiago oker egiteko. Milioika aldiz." },
            { title: "4. Balioztapena", desc: "Inoiz ikusi ez dituen datuekin probatzen da ea benetan ikasi duen." },
            { title: "5. Inferentzia", desc: "Sistema prest dago datu berrien aurrean erabakiak hartzeko." }
          ]
        },
        {
          type: "examples",
          heading: "Eguneroko adibide errealak",
          items: [
            { icon: "📧", title: "Spam detekzioa", desc: "Zure email-ak spam-a sailkatzen du: milioika mezu ikusi ondoren, emailen patroiak ezagutzen ditu." },
            { icon: "🏥", title: "Irudi medikoak", desc: "Erradiografia batean tumore bat dagoela detektatzeko, sistemek milaka irudi medikotatik ikasten dute." },
            { icon: "🚗", title: "Kotxe autonomoak", desc: "Milioika kilometroko bideo datuetatik ikasten dute errepideko egoerak interpretatzen." },
            { icon: "💬", title: "Itzultzaileak", desc: "Google Translate-k milioika testu eleanitzen patroiak erabiltzen ditu itzulpenak egiteko." }
          ]
        },
        {
          type: "warning",
          heading: "Datuen arazo ohikoenak",
          content: "Sistemek ikasten dutena datuen menpekoa da guztiz:\n\n• Soilik eguzki argiko argazkiekin entrenatzen bada, ilunpean ez du funtzionatuko.\n• Pertsona talde bat gutxi-ordezkatuta badago datuetan, sistema horrekin okerrago arituko da.\n• Datu zaharrak erabiltzen badira, egungo errealitatea ez du islatuko.\n\n<strong>Gogoratu:</strong> 'Zaborra sartu, zaborra atera' (Garbage in, garbage out) — hau da ML-ren lege nagusietako bat."
        },
        {
          type: "reflect",
          heading: "Hausnartu",
          content: "Imajinatu katu baten argazkiak soilik argi betean, gela barruan eta zuritik erakusten dizkiozula sistema bati. Zer gertatuko litzateke kaleko katu beltz bat erakustean? Zergatik? Zer erakutsiko zenioke hobeto ikasteko?"
        }
      ],
      miniQuiz: [
        {
          question: "Zer behar du ML sistema batek ongi ikasteko?",
          options: ["Arau zehatzak programatzaile batek idatzita", "Adibide anitz, kalitate onekoak eta orekatuak", "Konexio oso azkarra internetera", "Sistema oso garestia"],
          answer: 1,
          explanation: "ML sistemek adibide asko, kalitate onekoak eta orekatuak behar dituzte patroiak ondo ikasteko. Datuen kalitatea eta aniztasuna funtsezkoak dira."
        },
        {
          question: "Zer da inferentzia?",
          options: ["Datuak biltzeko prozesua", "Sistemak entrenamenduan akatsak egitea", "Ikasitako patroiak datu berriekin aplikatzea", "Etiketak kentzeko teknika"],
          answer: 2,
          explanation: "Inferentzia da entrenatutako eredu batek datu berrien aurrean ikasitakoa aplikatzea — adibidez, irudi berri bat 'katu' edo 'txakur' bezala sailkatzea."
        }
      ],
      glossary: [
        { term: "Machine learning", def: "Makinek datuetatik patroiak ikasteko eta erabakiak hartzeko teknika." },
        { term: "Entrenamendua", def: "Sistema bati adibideak erakusten zaizkion fasea, patroiak ikas ditzan." },
        { term: "Inferentzia", def: "Entrenatutako ereduak datu berriekin ikasitakoa aplikatzea." },
        { term: "Etiketatzea", def: "Datu bakoitzari kategoria bat esleitzea (adib. 'katua', 'txakurra')." },
        { term: "Overfitting", def: "Sistemak entrenamendu datuak 'buruz' ikastea, baina datu berrietan gaizki aritzea." }
      ]
    },

    {
      id: 3,
      title: "Eredu generatiboak",
      level: "Ertaina",
      color: "purple",
      emoji: "✨",
      duration: "20 min",
      summary: "Chatbot-ek, irudi-sortzaileek eta ahots-klonatzaileek nola funtzionatzen duten: patroietatik eduki berria sortzen dute, baina ez dute 'ulertzen'.",
      keyConcepts: [
        { term: "Eredu generatiboa", icon: "✨", desc: "Eduki berria sortzen duen sistema: testua, irudiak, audioa..." },
        { term: "LLM (Large Language Model)", icon: "📝", desc: "Testu-sorkuntzarako entrenatutako eredu handia, hala nola GPT edo Claude." },
        { term: "Haluzinazioa", icon: "🌀", desc: "AAk sinesgarria baina guztiz faltsua den informazioa sortzen duenean." },
        { term: "Token-ek", icon: "🧩", desc: "LLM-ek testua zati txikietan (token) prozesatzen dute, ez hitz osoe tan." }
      ],
      sections: [
        {
          type: "text",
          heading: "Zer dira eredu generatiboak?",
          content: "Eredu generatiboak dira ikasitako patroietan oinarrituta eduki berria sortzen duten sistemak. ChatGPT, Claude, Gemini (testua), Stable Diffusion, DALL-E, Midjourney (irudiak), Suno (musika), ElevenLabs (ahotsa) — guztiak dira eredu generatiboak.\n\nEz dute kopiatzen: ikasitako egitura estatistikoak erabiliz sekuentzia berriak sortzen dituzte. Baina ez dute 'ulertzen' zer sortzen ari diren — probabilitateak jarraitzen dituzte."
        },
        {
          type: "text",
          heading: "Nola sortzen dute testua? (LLM-ak)",
          content: "Testu-eredu handi batek (LLM = Large Language Model) hitz bat emanez gero, hurrengo hitz probabileena kalkulatzen du, aurretik ikasitako milioika testu kontuan hartuta.\n\nAdibidez, 'Eguzkia ekialdetik...' eman ondoren, ereduak kalkulatzen du 'ateratzen' dela hurrengo hitz probabileena. Eta horrela jarraitzen du hitz batetik bestera.\n\n<strong>Funtsezko ideia:</strong> ereduak ez daki eguzkia zer den, ez daki ekialdea non dagoen, ez daki zer esan nahi duen ateratzeak. Probabilitate estatistikoak jarraitzen ditu, eta emaitza askotan sinesgarria da — baina batzuetan guztiz okerra."
        },
        {
          type: "didyouknow",
          heading: "Badakizu?",
          content: "GPT-4 bezalako ereduek 1.7 bilioi parametro dituztela uste da. Parametro bakoitza zenbaki txiki bat da, eta guztien artean testua sortzeko patroiak gordetzen dituzte. Zure garunean 100 bilioi neurona daude — baina funtzionatzeko modu guztiz desberdinean."
        },
        {
          type: "examples",
          heading: "Eredu generatibo motak",
          items: [
            { icon: "💬", title: "Testua (LLM)", desc: "ChatGPT, Claude, Gemini: elkarrizketak, laburpenak, itzulpenak, kodea sortzea, galderak erantzutea..." },
            { icon: "🎨", title: "Irudiak", desc: "DALL-E, Midjourney, Stable Diffusion: deskribapen batetik irudi berriak sortzen dituzte." },
            { icon: "🎵", title: "Musika eta audioa", desc: "Suno, Udio: musika sortzen dute, estilo eta letra deskribapenak emanez." },
            { icon: "🗣️", title: "Ahotsa", desc: "ElevenLabs: pertsona baten ahots laginetatik ahots klona sortu dezake." },
            { icon: "🎬", title: "Bideoa", desc: "Sora, Runway: testu deskribapen batetik bideo laburrak sortzen dituzte." },
            { icon: "💻", title: "Kodea", desc: "GitHub Copilot, Cursor: programazio kodea sortzen eta hobetzen laguntzen dute." }
          ]
        },
        {
          type: "warning",
          heading: "Haluzinazioak: AAren arazo handia",
          content: "Eredu generatiboek batzuetan egia ematen duten baina guztiz asmatutako informazioa sortzen dute. Honi <strong>haluzinazioa</strong> esaten zaio.\n\nAdibide errealak:\n• Liburu baten egile okerra ematea, ziurtasun handiz.\n• Existitzen ez den ikerketa zientifiko bat erreferentzia bezala aipatzea.\n• Herri bateko jatetxe bat deskribatzea, baina jatetxe hori inoiz existitu ez denean.\n• Data historiko okerrak ematea, testu sinesgarri batean sartuta.\n\n<strong>Zergatik gertatzen da?</strong> Ereduak ez duelako 'egia' zer den ulertzen — hurrengoen hitz probabileena kalkulatzen du, eta batzuetan sekuentzia sinesgarria baina faltsua sortzen du."
        },
        {
          type: "comparison",
          heading: "AI sorkuntza vs gizaki sorkuntza",
          items: [
            { label: "Prozesua", ai: "Patroi estatistikoak konbinatzen ditu", human: "Esperientziatik, emoziotik eta imajinaziotik sortzen du" },
            { label: "Ulermena", ai: "Ez du ulertzen zer sortzen ari den", human: "Dakizu zer esaten duzun eta zergatik" },
            { label: "Originalitatea", ai: "Ikasitakoaren birkonbinaketak", human: "Benetan berria den zerbait sor dezake" },
            { label: "Egiazkotasuna", ai: "Ez du bereizten egia eta fikzioa", human: "Zuzentzeko gaitasuna du" }
          ]
        },
        {
          type: "reflect",
          heading: "Hausnartu",
          content: "Chatbot batek eskolako lan bat bikain idazten badu, baina datu okerrak sartzen baditu: nork du ardura, tresnak ala erabiltzaileak? Zer gertatuko litzateke irakasle batek AAk sortutako testua onartu balu, egiaztatu gabe?"
        }
      ],
      miniQuiz: [
        {
          question: "Nola sortzen dute LLM-ek (ChatGPT, Claude...) testua?",
          options: ["Internet bilaketa eginez galdera bakoitzean", "Hurrengo hitz probabileena kalkulatuz, hitz batetik bestera", "Gizaki batek diktatuz atzean", "Liburu batetik kopiatuz"],
          answer: 1,
          explanation: "LLM-ek hitz bat emanez gero hurrengo hitz probabileena kalkulatzen dute, ikasitako milioika testutako patroietan oinarrituz. Ez dute 'pentsatzen' — probabilitateak jarraitzen dituzte."
        },
        {
          question: "Zer da haluzinazioa AAn?",
          options: ["AAk pantaila koloretsuak erakustea", "AAk sinesgarria baina guztiz faltsua den informazioa sortzea", "AAk lo hartzen duenean sortzen duen errorea", "AAk arinegi funtzionatzea"],
          answer: 1,
          explanation: "Haluzinazioa da AAk informazio faltsua sortzea tonu sinesgarri eta seguruan. Ereduak ez du bereizten egia eta fikzioa — probabilitateak jarraitzen ditu."
        }
      ],
      glossary: [
        { term: "LLM", def: "Large Language Model — testu-sorkuntzarako entrenatutako eredu handia." },
        { term: "Haluzinazioa", def: "AAk sinesgarria baina faltsua den informazioa sortzea." },
        { term: "Token", def: "Testua prozesatzeko erabiltzen den zati txikia (hitz bat, silaba bat...)." },
        { term: "Prompt", def: "AAri ematen zaion instrukzio edo galdera." },
        { term: "Deepfake", def: "AAk sortutako bideo edo audio faltsua, pertsona erreal baten itxurarekin." }
      ]
    },

    {
      id: 4,
      title: "Prompt onak idazten",
      level: "Ertaina",
      color: "green",
      emoji: "💬",
      duration: "15 min",
      summary: "AA tresnei galdera argiak, testuingurua eta formatua ematen ikastea: zenbat eta zehatzago galdetu, orduan eta hobeto erantzungo du.",
      keyConcepts: [
        { term: "Prompt", icon: "💬", desc: "AAri ematen diozun instrukzioa edo galdera: zure 'hitz egiteko modua' sistemarekin." },
        { term: "Testuingurua", icon: "🎯", desc: "Norentzat den, zein mailan, zein helbururekin — informazio hau guztiak emaitza hobetzen du." },
        { term: "Iterazioa", icon: "🔄", desc: "Prompta hobetuz joan: lehen emaitza ikusi, doitu, berriz probatu." },
        { term: "Formatua", icon: "📋", desc: "Nola nahi duzun emaitza: zerrendatan, paragrafoan, taulan, adibideekin..." }
      ],
      sections: [
        {
          type: "text",
          heading: "Zer da prompta eta zergatik da garrantzitsua?",
          content: "Prompt bat AAri ematen diozun instrukzio edo galdera da. Hitz egiteko modua zehatz aldatzen baduzu, emaitza guztiz desberdina izan daiteke.\n\nPrompt on batek lau elementu nagusi ditu:\n\n• <strong>Helburua:</strong> Zer nahi duzu? (azaldu, sortu, laburtu, konparatu...)\n• <strong>Testuingurua:</strong> Norentzat da? Zein maila? Zein egoera?\n• <strong>Formatua:</strong> Nola nahi duzu? (zerrendatan, laburra, adibideekin...)\n• <strong>Mugak:</strong> Zein luzeera, zein tonua, zein hizkuntza?"
        },
        {
          type: "comparison",
          heading: "Prompt txarrak vs prompt onak",
          items: [
            { label: "Gaia", ai: "❌ 'Azaldu klima aldaketa'", human: "✓ 'Azaldu klima aldaketa 14 urteko ikasle bati, 4 puntutan, adibide bisual batekin'" },
            { label: "Zeregina", ai: "❌ 'Idatzi zerbait'", human: "✓ 'Idatzi gutun formal bat nire irakasleari, azterketa atzeratzeko eskatuz, arrazoi medikoa azalduz'" },
            { label: "Ikerketa", ai: "❌ 'Esan energiari buruz'", human: "✓ 'Konparatu energia eolikoa eta solarra, abantailak eta desabantailak 2 paragrafoan, DBH3 mailarako'" },
            { label: "Sormena", ai: "❌ 'Sortu istorio bat'", human: "✓ 'Sortu 200 hitzeko istorio labur bat nerabeen arteko adiskidetasunaz, lehen pertsonan, tonu umoretsu batekin'" }
          ]
        },
        {
          type: "text",
          heading: "Iterazio teknika: hobetuz joan",
          content: "Lehen promptak emaitza perfektua ematen ez badu (eta normalean ez du emango), iteratu:\n\n1. <strong>Irakurri emaitza:</strong> Zer gustatzen zaizu? Zer falta da?\n2. <strong>Zuzendu:</strong> 'Laburrago egin', 'Adibide gehiago sartu', 'Tonua informalagoa izan dadila'\n3. <strong>Berriz probatu:</strong> Prompt berria idatzi, doikuntzak sartuta.\n4. <strong>Konparatu:</strong> Zer hobetu da? Zer falta da oraindik?\n\nAA tresnekin elkarrizketa izatea da eraginkorrena, ez galdera bakarra egitea eta lehen erantzunarekin geratzea."
        },
        {
          type: "didyouknow",
          heading: "Badakizu?",
          content: "Prompt engineering izeneko diziplina berria sortu da azken urteetan: prompt onak idazten dakiten profesionalak. Enpresa batzuek 'prompt engineer' lanpostuak eskaintzen dituzte soldata altuekin!"
        },
        {
          type: "text",
          heading: "Prompt teknika aurreratuak",
          content: "Oinarrizko elementuez gain, teknika aurreratu batzuk daude:\n\n• <strong>Rola esleitzea:</strong> 'Irudikatu irakasle bat zarela eta azaldu...' — honek tonua eta ikuspegia aldatzen du.\n• <strong>Adibideak ematea:</strong> 'Hona hemen adibide bat nahi dudanaren: [adibidea]. Egin antzeko bat baina klima aldaketari buruz.'\n• <strong>Pauso bidez pauso:</strong> 'Azaldu pauso batetik bestera, lehenengo kontzeptua, gero adibidea, gero ariketaren bat.'\n• <strong>Mugak zehaztea:</strong> 'Ez erabili hitz teknikorik, max 100 hitz, euskaraz.'"
        },
        {
          type: "reflect",
          heading: "Hausnartu",
          content: "Idatzi bi prompt berri: bat oso orokorra eta beste bat oso zehatza, gai berdinari buruz. Joan laborategira eta probatu biak prompt aztertzailean. Zergatik ematen ditu emaitza desberdinak?"
        }
      ],
      miniQuiz: [
        {
          question: "Zein da prompt on baten elementu garrantzitsuena?",
          options: ["Ahalik eta laburren idaztea", "Hitz teknikoak soilik erabiltzea", "Helburua, testuingurua eta formatua zehaztea", "Ingelesez idaztea beti"],
          answer: 2,
          explanation: "Prompt on batek argitzen du zer nahi duzun, norentzat, zein formatutan eta zein mugekin. Zenbat eta zehatzagoa, orduan eta hobeto."
        },
        {
          question: "Zer da iterazioa promptetan?",
          options: ["Prompt bera berriz eta berriz bidaltzea", "Emaitza ikusi, doitu eta berriz probatu, hobetuz joateko", "Ingelesera itzultzea beti", "Prompt luzeenak idaztea"],
          answer: 1,
          explanation: "Iterazioa emaitza ikusi eta prompta hobetuz joatea da: zuzenketak egin, xehetasunak gehitu, formatua aldatu, eta berriz probatu emaitza hobetu arte."
        }
      ],
      glossary: [
        { term: "Prompt", def: "AAri ematen zaion instrukzioa, galdera edo agindua." },
        { term: "Iterazioa", def: "Prozesua behin eta berriz hobetuz errepikatzea." },
        { term: "Prompt engineering", def: "AAri emaitza hobeak lortzeko prompt egokienak diseinatzeko diziplina." },
        { term: "Testuingurua", def: "Promptari ematen zaion informazio osagarria (norentzat den, zein maila, zer helburu)." }
      ]
    },

    {
      id: 5,
      title: "Fidagarritasuna eta egiaztapena",
      level: "Ertaina",
      color: "amber",
      emoji: "🔍",
      duration: "18 min",
      summary: "AAk ziurtasun handiz erantzun dezake baina oker egon, eta horregatik egiaztatzea funtsezko gaitasuna da.",
      keyConcepts: [
        { term: "Egiaztapena", icon: "✅", desc: "AAk emandako informazioa iturri fidagarrietan konprobatzea." },
        { term: "Haluzinazioa", icon: "🌀", desc: "AAk sinesgarria baina faltsua den informazioa sortzea." },
        { term: "Iturri fidagarriak", icon: "📖", desc: "Egiaztatzeko erabil daitezkeen lekuak: entziklopediak, erakunde ofizialak, liburu akademikoak." },
        { term: "Pentsamendu kritikoa", icon: "🧠", desc: "Informazioa aztertu, zalantzan jarri eta ebaluatu egia den ala ez." }
      ],
      sections: [
        {
          type: "text",
          heading: "Zergatik ez da AAren erantzun guztia fidagarria?",
          content: "AA tresnek oso modu sinesgarrian hitz egiten dute — tonu segurua, egituratua eta zehatza ematen duena. Baina tonu horrek ez du esan nahi egia esaten dutenik beti.\n\nArazoa da ereduak ez dakiela zer den egia eta zer den fikzioa. Hurrengo hitz probabileena kalkulatzen du, eta batzuetan sekuentzia sinesgarria baina guztiz okerra sortzen du.\n\n<strong>Funtsezko printzipioa:</strong> AAren ziurtasun tonua EZ da egiazkotasunaren froga. Sinesgarriki erantzuteak ez du esan nahi zuzen erantzuten duenik."
        },
        {
          type: "examples",
          heading: "Haluzinazio adibide errealak",
          items: [
            { icon: "📚", title: "Liburu asmatuak", desc: "Chatbot batek 'The Quantum Mind' liburua gomendatu dezake, Stephen Hawking-ek idatzia — baina liburu hori ez da existitzen." },
            { icon: "⚖️", title: "Kasu juridikoak", desc: "AEBetan, abokatu batek ChatGPT-k asmatutako kasu juridikoak aurkeztu zituen epaitegian. Existitzen ez ziren kasuak ziren!" },
            { icon: "🗺️", title: "Leku faltsuak", desc: "AAk zure herriko jatetxe bat deskribatu dezake: izena, helbidea eta menua emanez — baina jatetxe hori ez da existitzen." },
            { icon: "📅", title: "Data okerrak", desc: "Gertakari historiko baten data eman dezake ziurtasunez, baina urte bat edo bi okertuta egon daiteke." },
            { icon: "🔬", title: "Ikerketa asmatuak", desc: "Erreferentzia zientifikoak aipatu ditzake, autore izen eta guztirekin, baina artikulu horiek ez dira existitzen." }
          ]
        },
        {
          type: "process",
          heading: "Nola egiaztatu AAren erantzunak?",
          steps: [
            { title: "1. Identifikatu egiaztatu beharrekoa", desc: "Data, izen, zenbaki eta erreferentzia zehatzak dira arriskutsuenak. Iritzi orokorrak ez dira hain kezkagarriak." },
            { title: "2. Erabili iturri fidagarriak", desc: "Wikipedia, erakunde ofizialak, liburuak, egunkari handiak — AAren erantzuna bera ez da iturri bat." },
            { title: "3. Gurutzatu informazioa", desc: "Iturri bat baino gehiagotan egiaztatu: bi lekuk gauza bera esaten badute, fidagarriagoa da." },
            { title: "4. Galdetu AAri berari", desc: "'Hau nola dakizu?' galdetu diezaiokezu. AAk ez du beti zuzen erantzungo, baina batzuetan bere ziurtasun falta adieraziko du." },
            { title: "5. Zalantzarik baduzu, ez fidatu", desc: "AAren tonu segurua ez da froga nahikoa. Zalantzarik baduzu, beti hobeto da egiaztatzea." }
          ]
        },
        {
          type: "warning",
          heading: "Noiz da bereziki arriskutsua egiaztatu gabe fidatzea?",
          content: "Egoera batzuetan, AAren informazio okerra ondorio larriak izan ditzake:\n\n• <strong>Osasuna:</strong> Medikuntza gomendioak, sintomak, medikamentuak — beti mediku batekin egiaztatu.\n• <strong>Legea:</strong> Arau juridikoak, kontratuak, eskubideak — beti abokatu batekin.\n• <strong>Albisteak:</strong> Gertakari berriak — AAk ez du eguneroko informaziorik, eta datu zaharkituak eman ditzake.\n• <strong>Hezkuntza:</strong> Azterketarako estudiatzean, egiaztatu zuzenean AAren erantzunak liburuekin."
        },
        {
          type: "reflect",
          heading: "Hausnartu",
          content: "Zein egoeratan izango litzateke oso larria egiaztatu gabe AAren erantzun bat sinestea? Pentsatu hiru egoera konkretu: bat osasunean, bat eskolan eta bat albistegintzan. Zer ondorio izan ditzake bakoitzean?"
        }
      ],
      miniQuiz: [
        {
          question: "AAk emaitza bat tonu oso seguruan ematen badu, zer esan nahi du?",
          options: ["Egia da, ziurtasuna konfiantzazkoa da", "Tonu segurua ez da egiazkotasunaren froga", "Emaitza hori zuzentzeko ezinezkoa da", "Soilik kontu zientifikoetan fidatu"],
          answer: 1,
          explanation: "AAren ziurtasun tonua ez da egiazkotasunaren frogatzeko modua. Sinesgarriki erantzuteak ez du esan nahi zuzen erantzuten duenik."
        },
        {
          question: "Zer da egiaztatzeko modurik onena?",
          options: ["AAri berari galdetu ea zuzena den", "Iturri fidagarri independenteetan konprobatzea", "Ezer ez egiaztatzea, AAk beti ondo erantzuten du", "Sare sozialetan begiratzea"],
          answer: 1,
          explanation: "Egiaztatzeko modurik onena iturri fidagarri independenteetan konprobatzea da: entziklopediak, erakunde ofizialak, liburu akademikoak."
        }
      ],
      glossary: [
        { term: "Egiaztapena", def: "AAk emandako informazioa iturri independenteetan konprobatzea." },
        { term: "Iturri fidagarria", def: "Informazio egiaztatu eta kontrastatu bat eskaintzen duen lekua." },
        { term: "Pentsamendu kritikoa", def: "Informazioa aztertu, zalantzan jarri eta ebaluatzeko gaitasuna." },
        { term: "Confirmation bias", def: "Gure usteak berresten duen informazioa onartzeko joera, kontrakoaren gainetik." }
      ]
    },

    {
      id: 6,
      title: "Etika, pribatutasuna eta alborapena",
      level: "Aurreratua",
      color: "coral",
      emoji: "⚖️",
      duration: "22 min",
      summary: "AA erabiltzeak ondorio sozialak ditu: datuetako aurreiritziak, pribatutasun galera, eta erabaki bidegabeak ulertu eta saihestu behar dira.",
      keyConcepts: [
        { term: "Alborapena (bias)", icon: "⚖️", desc: "Entrenamendu datuetako aurreiritziek AAren emaitzetan islatzen diren joera bidegabeak." },
        { term: "Pribatutasuna", icon: "🔒", desc: "Zure datu pertsonalak babesteko eskubidea eta beharra AA tresnetan." },
        { term: "Gardentasuna", icon: "🪟", desc: "Nola eta zertarako erabili den AA azaltzeko betebeharra." },
        { term: "Integritate akademikoa", icon: "🎓", desc: "Eskolako lanetan AA modu zintzoan eta gardentasunez erabiltzea." }
      ],
      sections: [
        {
          type: "text",
          heading: "Zergatik da etika garrantzitsua AAn?",
          content: "AA sistemek gero eta erabaki gehiago hartzen dituzte gure bizitzan: nor kontratatu, nor aseguratu, nor zainduz gero lehenbailehen, zer berri erakutsi... Erabaki horiek zuzenak eta bidezko badira, AAk lagundu dezake. Baina bidegabeak badira, kalte handiak eragin ditzake.\n\nAAren etikak hiru alde nagusi ditu: nola tratatzen diren datuak (pribatutasuna), nola eragiten dien talde desberdinei (alborapena), eta nola erabiltzen den pertsonen erabakiak ordezkatuz (autonomia)."
        },
        {
          type: "text",
          heading: "Alborapena (bias): zer da eta nola gertatzen da?",
          content: "AA sistema bat entrenatzen duten datuetan aurreiritziak badaude, sistemak ere emaitza bidegabeak emango ditu. Hau da alborapena.\n\nAdibide errealak:\n\n• <strong>Kontratazio algoritmoa:</strong> Amazonek garatu zuen curriculum-hautaketa sistema batek gizonezkoak lehenesten zituen, entrenamendu datuetan gizonezko gehiago zegoelako.\n• <strong>Aurpegi-ezagutza:</strong> Sistema batzuek pertsona zuriekin hobeto funtzionatzen dute pertsona beltzekin baino, entrenamendu datuetan azal-tonu zabala ez zegoelako.\n• <strong>Kreditu erabakiak:</strong> Bankuko algoritmoak auzo jakin batzuetako pertsonei kredituak ukatzen zizkien, aurrekari historiko bidegabeak datuetan zegoelako."
        },
        {
          type: "text",
          heading: "Pribatutasuna: zer arriskutzen duzu?",
          content: "AA tresnei datu pertsonalak ematen dizkiegunean, informazio hori gorde eta prozesatu egiten da:\n\n• <strong>Zer biltzen da?</strong> Zure galderak, testuak, argazkiak, kokapena, eta nahiak.\n• <strong>Non gordetzen da?</strong> Enpresa baten zerbitzarietan, herrialde desberdinetan.\n• <strong>Zertarako erabiltzen da?</strong> Eredua hobetzeko, publizitaterako, edo beste helburu batzuetarako.\n\n<strong>Arau garrantzitsuak:</strong>\n• Ez partekatu pasahitzik.\n• Ez partekatu osasun informaziorik.\n• Ez partekatu beste pertsonen datu pertsonalik.\n• Ez partekatu kokapena edo helbiderik.\n• Ez igo aurpegi argazki pertsonalik baimenik gabe."
        },
        {
          type: "didyouknow",
          heading: "Badakizu?",
          content: "Europako GDPR legeak zure eskubidea babesten du: enpresek azaldu behar dizute zer datu biltzen dituzten eta zertarako, eta eskatu dezakezu zure datuak ezabatzeko. Baina AA tresna askok ez dituzte arau hauek ondo betetzen."
        },
        {
          type: "text",
          heading: "Erabilera arduratsu akademikoa",
          content: "Eskolan, AA laguntzaile bezala erabiltzea onartzen da gero eta gehiago, baina baldintza batzuekin:\n\n• <strong>Gardentasuna:</strong> Irakasleak jakin behar du nola erabili duzun. Esan zer zatitan lagundu dizun.\n• <strong>Prozesu-ebidentzia:</strong> Zirriborroak, ideien zerrendak edo bertsio desberdinak gorde.\n• <strong>Zure ahotsa:</strong> Lanak zure pentsamendua eta estiloa islatu behar du, ez AAren testu generikoa.\n• <strong>Egiaztapena:</strong> AAk emandako datuak beti egiaztatu.\n• <strong>Ez kopiatu:</strong> AAk idatzitakoa zuzenean entregatzea plagioa da."
        },
        {
          type: "warning",
          heading: "Deepfake-ak eta desinformazioa",
          content: "AA generatiboak irudi, bideo eta audio faltsuak sortzeko gaitasuna du. Deepfake-ek pertsona erreal baten itxura duten bideo faltsuak dira, eta gero eta zailagoa da bereiztea benetakotik.\n\nHonek arrisku larriak ditu:\n• Pertsona baten irudia erabiltzea baimenik gabe.\n• Politikari baten deklarazio faltsuak sortzea.\n• Gezurrezko albisteak zabaltzea modu sinesgarrian.\n\n<strong>Zer egin dezakezu?</strong> Beti egiaztatu iturria, bilatu jatorrizko bideoa, eta kontuz ibili sare sozialetan ikusten duzunarekin."
        },
        {
          type: "reflect",
          heading: "Hausnartu",
          content: "Zein arau ezarriko zenuke zure eskolan AA tresnak modu justuan eta gardentasunez erabiltzeko? Idatzi 5 arau zerrenda bat, eta pentsatu: nola bermatu daiteke arau horiek betetzen direla?"
        }
      ],
      miniQuiz: [
        {
          question: "Zer da alborapena AAn?",
          options: ["Sistemak azkarregi funtzionatzea", "Entrenamendu datuen aurreiritziek emaitza bidegabeak eragitea", "AAk soilik hizkuntza batean funtzionatzea", "Pantaila albo batera okertzea"],
          answer: 1,
          explanation: "Alborapena gertatzen da entrenamendu datuetan aurreiritzi edo desorekarik dagoenean, eta horrek emaitza bidegabeak sortzen ditu talde jakin batzuengan."
        },
        {
          question: "Eskolako lan batean AA erabiltzean, zer da garrantzitsuena?",
          options: ["AAk idatzitakoa zuzenean entregatzea", "Inori ez esatea erabili duzula", "Gardentasunez azaltzea nola eta zertan lagundu dizun", "Ahalik eta gehien erabiltzea nota hobea izateko"],
          answer: 2,
          explanation: "Integritate akademikoak eskatzen du gardentasuna: nola erabili duzun azaltzea, zure pentsamendua nagusi izatea, eta prozesua erakustea."
        }
      ],
      glossary: [
        { term: "Alborapena (bias)", def: "Entrenamendu datuen aurreiritziek eragindako joera bidegabeak." },
        { term: "GDPR", def: "Europako datu-babeserako erregulazio orokorra." },
        { term: "Deepfake", def: "AAk sortutako bideo edo audio faltsua, pertsona erreal baten itxurarekin." },
        { term: "Integritate akademikoa", def: "Eskolako lanak modu zintzoan egiteko betebeharra." },
        { term: "Gardentasuna", def: "AAren erabilera azaltzeko eta justifikatzeko betebeharra." }
      ]
    }
  ],

  /* Quiz eta lab datuak aldatu gabe mantentzen dira */
  quiz: [
    { question: "Adimen artifizialak benetan pentsatzen al du pertsona batek bezala?", options: ["Bai, pertsona baten maila berean","Ez, patroiak jarraitzen ditu baina ez du ulertzen","Bai, baina poliki-poliki","Batzuetan bai eta batzuetan ez"], answer: 1, explanation: "AAk ez du kontzientziarik: datuetatik ikasitako patroi estatistikoak aplikatzen ditu." },
    { question: "Zer da 'haluzinazioa' AA testuinguruan?", options: ["AAk pantailan irudi arraroak erakustea","AAk sinesgarria baina okerra den informazioa sortzea","AAk ordenagailua itzaltzea","AAk gure pentsamenduak irakurtzea"], answer: 1, explanation: "Haluzinazioek AAk sortzen dituen erantzun sinesgarri baina faltsuak dira." },
    { question: "Zergatik da garrantzitsua datuen kalitatea AAn?", options: ["Datuen kalitateak ez du garrantzirik","Datu txarrek emaitza txarrak edo bidegabeak eragiten dituzte","Datu gehiago beti hobea delako","Ordenagailuak azkarrago funtzionatzen duelako"], answer: 1, explanation: "Datuen kalitateak zuzenean eragiten du emaitzetan." },
    { question: "Zein da prompt on baten ezaugarri nagusietako bat?", options: ["Ahalik eta laburren idaztea","Helburua, testuingurua eta formatua zehaztea","Hitz teknikoak soilik erabiltzea","Ingelesez idaztea beti"], answer: 1, explanation: "Prompt on batek argitzen du zer nahi duzun, norentzat, zein formatutan." },
    { question: "Zer egin behar da AAk emandako informazioarekin?", options: ["Zuzenean fidatu","Beti egiaztatu iturri fidagarrietan","Soilik ingelesez badago fidatu","Ezer ez egin"], answer: 1, explanation: "Beti egiaztatu datu zehatzak iturri fidagarrietan." },
    { question: "Zer da alborapena (bias) AA sisteman?", options: ["Sistemak gehiegi ikasten duenean","Entrenamendu datuen aurreiritziek emaitza bidegabeak eragitea","Sistemak azkarregi funtzionatzea","Pantaila albo batera okertzea"], answer: 1, explanation: "Alborapena gertatzen da entrenamendu datuetan desorekatze edo aurreiritzirik dagoenean." },
    { question: "Eskolako lan batean AA erabiltzean, zer da garrantzitsuena?", options: ["AAk idatzitakoa zuzenean entregatzea","Inori ez esatea erabili duzula","Gardentasunez azaltzea nola eta zertan lagundu dizun","Ahalik eta gehien erabiltzea"], answer: 2, explanation: "Integritate akademikoak eskatzen du gardentasuna." },
    { question: "Zein informazio EZ da gomendagarria AA tresna bati ematea?", options: ["Klima aldaketari buruzko galderak","Pasahitzak, datu medikoak edo informazio pertsonala","Matematikako ariketak","Historiari buruzko galderak"], answer: 1, explanation: "Datu pertsonalak, pasahitzak eta informazio sentikorra ez dira partekatu behar." }
  ],

  labelingItems: [
    { text: "🐕 Txakur baten argazkia", desc: "Animalia etxeko bat agertzen den irudia", correct: "Animalia" },
    { text: "📐 Pitagorasen teoremaren azalpena", desc: "Triangeluen ezaugarriei buruzko testua", correct: "Hezkuntza" },
    { text: "🚗 Auto elektriko baten bideo bat", desc: "Garraio mota berri bati buruzko edukia", correct: "Garraioa" },
    { text: "🍰 Tarta baten errezeta", desc: "Osagaiak eta prestaketa pausoak ditu", correct: "Janaria" },
    { text: "🎵 Abestia gomendatzen duen aplikazioa", desc: "Zure gustuetan oinarritutako iradokizuna", correct: "Entretenimendua" },
    { text: "🏥 Sendagilearen txostena", desc: "Paziente baten datu medikoak jasotzen ditu", correct: "Osasuna" }
  ],
  labelingOptions: ["Animalia", "Hezkuntza", "Garraioa", "Janaria", "Entretenimendua", "Osasuna"],

  promptExamples: [
    { text: "Azaldu klima aldaketa", prompt: "Azaldu klima aldaketa", title: "Prompt lausoa", quality: "bad", reason: "Oso orokorra, ez du testuingururik" },
    { text: "Azaldu klima aldaketa 14 urteko ikasle bati, 4 puntutan, adibide batekin", prompt: "Azaldu klima aldaketa 14 urteko ikasle bati, 4 puntutan, adibide batekin", title: "Prompt zehatza", quality: "good", reason: "Publikoa, formatua eta edukia zehazten ditu" },
    { text: "Idatzi zerbait", prompt: "Idatzi zerbait", title: "Prompt hutsa", quality: "bad", reason: "Ez du helbururik, gaiarik ez formatuarik" },
    { text: "Idatzi gutun formal bat nire irakasleari, azterketa atzeratzeko eskatuz, arrazoi medikoa azalduz, euskaraz", prompt: "Idatzi gutun formal bat nire irakasleari, azterketa atzeratzeko eskatuz, arrazoi medikoa azalduz, euskaraz", title: "Prompt egituratua", quality: "good", reason: "Helburua, hartzailea, tonua eta hizkuntza argitzen ditu" }
  ]
};

// erronkak.html expects AA.challenges
window.AA.challenges = window.AA.quiz;

// labs.js "Egia ala fikzioa?" expects AA.truthStatements
window.AA.truthStatements = [
  {
    text: "GPT-4 ereduak 1,76 bilioi parametro ditu, eta horien guztien esanahia ezaguna da.",
    isTrue: false,
    explanation: "Parametro kopuru zehatza ez da ofizialki argitaratu, eta gainera parametroen esanahia ez da banaka interpretagarria — hau haluzinazio tipiko bat da, datu zehatz sinesgarriekin."
  },
  {
    text: "AAk irudi bat sortzean, ez du irudia pixelez pixel kopiatzen, baizik eta ikasitako patroi estatistikoetatik sortzen du berria.",
    isTrue: true,
    explanation: "Hori zuzena da. Irudi sortzaile generatiboek (DALL-E, Stable Diffusion) entrenamenduan ikasitako banaketa estatistikoetatik sortzen dituzte irudi berriak."
  },
  {
    text: "Lehen sare neuronal artifiziala 2015ean sortu zen Google-n.",
    isTrue: false,
    explanation: "Perceptron-a, lehen sare neuronal artifiziala, 1958an sortu zuen Frank Rosenblatt-ek. Google-k sare neuronalak erabiltzen ditu, baina ez zituen asmatu."
  },
  {
    text: "Chatbot batek zure galdera ulertu beharrean, hitz-segiden probabilitate estatistikoak kalkulatzen ditu hurrengo hitza aurreikusteko.",
    isTrue: true,
    explanation: "Hizkuntza-eredu handiek (LLM) hitz-segiden probabilitateak kalkulatzen dituzte. Ez dute benetan ulertzen, patroi estatistikoak aplikatzen dituzte."
  },
  {
    text: "UNESCO-k 2023an adimen artifiziala debekatu zuen hezkuntzan mundu osoan.",
    isTrue: false,
    explanation: "UNESCO-k ez du AA debekatu hezkuntzan. Gida eta gomendio etikoak argitaratu ditu, baina ez debeku orokorrik."
  },
  {
    text: "Aurpegi-ezagutza sistemek zehaztasun desberdina dute pertsonen azal-tonuaren arabera, entrenamendu datuen desorekak direla eta.",
    isTrue: true,
    explanation: "Hainbat ikerketak frogatu dute (adibidez, MIT-eko Gender Shades proiektua) aurpegi-ezagutza sistemek akats gehiago egiten dutela azal iluneko pertsonetan."
  },
  {
    text: "Espainiako Konstituzioaren 47. artikuluak adimen artifizialaren erabilera arautzen du.",
    isTrue: false,
    explanation: "47. artikulua etxebizitza eskubideari buruzkoa da. AA ez du zuzenean arautzen Espainiako Konstituzioak. Datu zehatzak eta tonu segurua sinesgarri bihurtzen dute gezurra."
  },
  {
    text: "Machine learning eredu bati datu gehiago ematea ez da beti hobea; datu txarrek emaitza txarragoak ekar ditzakete.",
    isTrue: true,
    explanation: "Datuen kalitatea kantitatea bezain garrantzitsua da. Zarata, akatsak edo aurreiritziak dituzten datuek ereduaren emaitzak okertu ditzakete."
  }
];
