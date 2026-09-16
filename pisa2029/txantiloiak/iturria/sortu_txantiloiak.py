#!/usr/bin/env python3
"""
artifiziala.eus · PISA 2029 MAIL — txantiloi deskargagarriak sortzeko script-a.

Txantiloi bakoitza HTML gisa sortzen da eta ondoren:
  - DOCX (editagarria): LibreOffice (soffice --headless)
  - PDF (inprimagarria): Google Chrome / Chromium headless

Erabilera (repoaren erroan):
    python3 pisa2029/txantiloiak/iturria/sortu_txantiloiak.py
"""
import os, shutil, subprocess, tempfile, zipfile, html

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.dirname(HERE)  # pisa2029/txantiloiak

C = {"etika": "#9d3f95", "sarbidea": "#23709f", "aztertu": "#c42b49",
     "partehartu": "#94591a", "sortu": "#0b7a76", "ink": "#2f2b7a"}

BOX = "☐"


def esc(s):
    return html.escape(s, quote=False)


def h2(title, color):
    return (f'<table width="100%" cellspacing="0" cellpadding="5" style="margin:14px 0 6px">'
            f'<tr><td bgcolor="{color}" style="background:{color};color:#fff;font-weight:bold;font-size:12pt;border:none">'
            f'<font color="#ffffff">{title}</font></td></tr></table>')


def table(headers, rows, heights=None, widths=None):
    out = ['<table border="1" cellspacing="0" cellpadding="5" width="100%" style="border-collapse:collapse">']
    if headers:
        out.append("<tr>")
        for i, h in enumerate(headers):
            w = f' width="{widths[i]}"' if widths else ""
            out.append(f'<th bgcolor="#f3eff8" align="left"{w} style="background:#f3eff8">{h}</th>')
        out.append("</tr>")
    for r in rows:
        hh = heights or 26
        out.append(f'<tr height="{hh}" style="height:{hh}px">')
        for i, cell in enumerate(r):
            w = f' width="{widths[i]}"' if widths and not headers else ""
            out.append(f'<td valign="top"{w}>{cell if cell else "&nbsp;"}</td>')
        out.append("</tr>")
    out.append("</table>")
    return "".join(out)


def fields(labels, height=26):
    return table(None, [[f"<b>{l}</b>", ""] for l in labels], height, ["32%", "68%"])


def check(items):
    return "".join(f'<p style="margin:3px 0">{BOX} {i}</p>' for i in items)


def lines(n):
    return table(None, [[""] for _ in range(n)], 24)


def p(t):
    return f'<p style="margin:4px 0">{t}</p>'


def doc(tid, title, sub, who, color, body, landscape=False):
    size = "A4 landscape" if landscape else "A4"
    return f"""<!DOCTYPE html><html lang="eu"><head><meta charset="utf-8"><title>{esc(title)}</title>
<style>
@page {{ size:{size}; margin:14mm 14mm; }}
body {{ font-family:'DejaVu Sans', Arial, sans-serif; font-size:10pt; color:#26234f; line-height:1.35; }}
h1 {{ font-size:19pt; margin:2px 0 2px; color:#26234f; }}
th, td {{ font-size:9.5pt; border:1px solid #b9b5cc; }}
table {{ border-collapse:collapse; page-break-inside:auto; }}
tr {{ page-break-inside:avoid; }}
.foot {{ margin-top:14px; font-size:7.5pt; color:#8a87a8; }}
</style></head><body>
<table width="100%" cellspacing="0" cellpadding="0" style="border-bottom:3px solid {color}"><tr>
<td style="border:none"><font size="1" color="#5c5882">artifiziala.eus · PISA 2029 · MAIL · {tid}</font><h1>{title}</h1><font color="#5c5882">{sub}</font></td>
<td align="right" valign="top" style="border:none;white-space:nowrap"><font size="1" color="#5c5882">{who}</font></td></tr></table>
{body}
<p class="foot">artifiziala.eus · CC BY-NC-SA 4.0 · ELGAren PISA 2029 MAIL markoan (lehen zirriborroa, 2026) oinarritutako material didaktiko independentea. Ez da ELGAren baliabide ofiziala.</p>
</body></html>"""


T = []

# ---------------------------------------------------------------- T01
T.append(("T01", "egiaztapen-fitxa", "Egiaztapen-fitxa: irakurketa laterala",
          "Mezu, albiste edo AA erantzun bat egiaztatzeko urratsak (SIFT metodoa)",
          "Ikasleentzat · Aztertu eta ebaluatu", C["aztertu"],
          h2("0. Mezua", C["aztertu"]) +
          fields(["Zer dio mezuak? (esaldi batean)", "Non ikusi duzu? (plataforma / URL)", "Noiz? (data)", "Formatua"], 28) +
          h2("1. GELDITU", C["aztertu"]) +
          p("Zer sentitu dut irakurtzean?  " + "  ".join(f"{BOX} {e}" for e in ["Haserrea", "Beldurra", "Harridura", "Poza", "Ezer berezirik"])) +
          p(f"Ezagutzen dut iturria?  {BOX} Bai  {BOX} Ez   ·   Partekatzeko presarik dago?  {BOX} Bai  {BOX} Ez") +
          h2("2. ITURRIA IKERTU (irten orritik eta bilatu hari buruz)", C["aztertu"]) +
          fields(["Nor dago atzean? (egilea, erakundea)", "Zer diote beste iturri batzuek hari buruz?",
                  f"Helburua: {BOX} informatu {BOX} saldu {BOX} limurtu {BOX} entretenitu {BOX} klikak", "Fidagarritasuna (1–5) eta zergatik"], 30) +
          h2("3. ESTALDURA HOBEA BILATU", C["aztertu"]) +
          table(["Iturria (URL)", "Nor da?", "Zer dio?", "Bat dator?"], [["", "", "", f"{BOX} Bai {BOX} Ez {BOX} Zati bat"] for _ in range(3)], 40, ["30%", "20%", "32%", "18%"]) +
          h2("4. JATORRIRA JARRAITU", C["aztertu"]) +
          table(["Elementua (datua, aipua, irudia)", "Jatorrizko iturria", "Testuinguru bera?"], [["", "", ""] for _ in range(3)], 32, ["35%", "40%", "25%"]) +
          check(["Alderantzizko irudi-bilaketa egin dut", "Irudiaren metadatuak edo «Content Credentials» begiratu ditut",
                 "AA laburpen edo txatbot baten baieztapenak jatorrizko iturrian egiaztatu ditut"]) +
          h2("5. EPAIA ETA EKINTZA", C["aztertu"]) +
          p(f"<b>Mezua:</b>  {BOX} Zehatza   {BOX} Partzialki zehatza   {BOX} Okerra   {BOX} Ezin da egiaztatu") +
          p("<b>Justifikazioa</b> (zer ebidentziak eraman nau ondorio honetara?)") + lines(4) +
          p(f"<b>Zer egingo dut?</b>  {BOX} Ez partekatu   {BOX} Zuzenketa partekatu iturriarekin   {BOX} Plataforman salatu   {BOX} Heldu bati jakinarazi")))

# ---------------------------------------------------------------- T02
T.append(("T02", "mezu-azterketa", "Mezu baten azterketa: hiru kontzeptu gakoak",
          "Edozein mezu (testua, irudia, bideoa, AA erantzuna) aztertzeko galdera-gida",
          "Ikasleentzat · Aztertu eta ebaluatu", C["aztertu"],
          fields(["Aztertutako mezua", "Formatua eta plataforma"], 26) +
          h2("Egileak eta audientziak", C["aztertu"]) +
          table(["Galdera", "Nire erantzuna"], [
              ["Nork edo zerk sortu du mezua? AA erabili al da, eta zein fasetan (sortu, editatu, kuratu)?", ""],
              ["Nor da audientzia? Nola egokitu da (edo AAk egokitu du) hari iristeko?", ""],
              ["Nork ateratzen du etekina? (egilea, plataforma, AA enpresa, iragarleak…)", ""]], 46, ["45%", "55%"]) +
          h2("Mezuak eta esanahiak", C["aztertu"]) +
          table(["Galdera", "Nire erantzuna"], [
              ["Zergatik ikusten dut mezu hau? Algoritmo batek aukeratu edo gomendatu al dit?", ""],
              ["Zein da helburua (informatu, entretenitu, limurtu)? Nola lortzen du?", ""],
              ["Nola interpreta daiteke? Zein balio edo alborapen anplifika ditzake?", ""]], 46, ["45%", "55%"]) +
          h2("Irudikapenak eta errealitateak", C["aztertu"]) +
          table(["Galdera", "Nire erantzuna"], [
              ["Nola sortu da? Zein giza eta makina-prozesu nahasi dira?", ""],
              ["Zein datu edo iturritan oinarritu da?", ""],
              ["Nola irudikatzen dira pertsonak, taldeak, balioak? Zer falta da?", ""],
              ["AAren parte-hartzeak nola eragiten dio sinesgarritasunari?", ""]], 46, ["45%", "55%"]) +
          h2("Limurtze- eta manipulazio-teknikak (markatu aurkitutakoak)", C["aztertu"]) +
          check(["Hizkuntza emozionala (maiuskulak, emojiak, haserrea/beldurra)", "Dikotomia faltsua (bi aukera bakarrik)",
                 "Aditu faltsua edo izenik gabeko autoritatea", "Konspirazioa («ez dute nahi jakitea»)", "Presa artifiziala",
                 "Boc-emisarioa edo pertsonari erasoa (ad hominem)", "Datu engainagarriak (ardatz moztuak, lagin txikia, iturririk gabe)",
                 "Ezkutuko publizitatea (kodeak, opariak, «babestua»)"])))

# ---------------------------------------------------------------- T03
T.append(("T03", "aa-erabilera-adierazpena", "AAren erabileraren adierazpena",
          "Lan batean AA nola erabili duzun gardentasunez azaltzeko",
          "Ikasleentzat · Sortu · Etika", C["sortu"],
          fields(["Izena / taldea", "Lana eta ikasgaia", "Data", "Irakaslearen araua (AA baimenduta? nola?)"], 26) +
          h2("Nola erabili dut AA?", C["sortu"]) +
          table(["Tresna", "Zertarako", "Nire eskaera (prompt) laburtuta", "Zer onartu / aldatu / baztertu dut eta zergatik"],
                [["", "", "", ""] for _ in range(4)], 54, ["16%", "20%", "30%", "34%"]) +
          h2("Egiaztapena eta ekarpen propioa", C["sortu"]) +
          check(["AAk emandako datu, data, izen eta erreferentzia guztiak egiaztatu ditut jatorrizko iturrietan",
                 "Azken testua nire hitzekin idatzi edo berrikusi dut; nire ahotsa eta iritzia islatzen ditu",
                 "Ez diot AAri datu pertsonalik (nireak edo besteenak) eman",
                 "Irudi edo audio sortuak argi adierazita daude lanean",
                 "Irakaslearen arauak bete ditut"]) +
          p("<b>Nire ekarpen nagusia</b> (zer egin dut nik, AAk egin ez duena?)") + lines(3) +
          p("<b>Adierazpen-esaldia lanean jartzeko</b> (adib.: «Testua: nire idazketa. AA txatbota ideiak ordenatzeko eta ortografia berrikusteko erabili da. Irudia: AA bidez sortua eta editatua.»)") + lines(2) +
          p("Sinadura: ______________________________")))

# ---------------------------------------------------------------- T04
T.append(("T04", "gelako-aa-akordioa", "AA semaforoa: gelako erabilera-akordioa",
          "Ikasleekin batera eraikitzeko AA erabilera-arauak",
          "Talde osoa · Etika", C["etika"],
          fields(["Taldea eta ikasgaia", "Data eta berrikuspen-data"], 26) +
          h2("Semaforoa", C["etika"]) +
          table(["🟢 BERDEA · Erabil daiteke", "🟡 HORIA · Adierazita eta baimenarekin", "🔴 GORRIA · Ez da erabiltzen"], [
              ["Kontzeptu bat beste modu batean azaltzeko eskatu", "Ideia-jasa eta eskema proposamenak", "Lan pertsonal bat osorik idatzi eta nirea bezala entregatu"],
              ["Nire burua probatzeko galderak sortu", "Nire testuaren ortografia eta estiloa berrikusi", "Azterketetan edo ebaluazio-probetan"],
              ["Ahozko aurkezpena praktikatu", "Irudiak edo ilustrazioak sortu", "Besteen datu pertsonalak edo irudiak sartu"],
              ["", "", ""], ["", "", ""], ["", "", ""]], 40, ["33%", "34%", "33%"]) +
          h2("Nola adieraziko dugu AAren erabilera?", C["etika"]) + lines(3) +
          h2("Datuak eta pribatutasuna", C["etika"]) + lines(2) +
          h2("Arauak hausten badira, zer egingo dugu?", C["etika"]) + lines(2) +
          p("<b>Sinadurak</b> (taldekideak eta irakaslea)") + lines(3)))

# ---------------------------------------------------------------- T05
T.append(("T05", "sortze-egunkaria", "Sortze-egunkaria",
          "Eduki bat (bideoa, kartela, memea, argitalpena) sortzeko prozesua dokumentatzeko",
          "Ikasleentzat · Sortu", C["sortu"],
          h2("1. Sortu aurretik: lau galdera", C["sortu"]) +
          fields(["ZERGATIK? Helburua", "NORENTZAT? Audientzia (adina, interesak, non dagoen)", "ZER? Mezu nagusia esaldi batean", "NOLA? Formatua eta plataforma"], 34) +
          h2("2. Bertsioak eta feedbacka", C["sortu"]) +
          table(["Bertsioa / data", "Zer aldatu dut?", "Feedbacka (nork, zer esan du)", "AA erabili dut? Nola?"],
                [["v1", "", "", ""], ["v2", "", "", ""], ["v3", "", "", ""]], 50, ["14%", "30%", "32%", "24%"]) +
          h2("3. Erabilitako materialak eta aitortza (IEIL)", C["sortu"]) +
          table(["Izenburua", "Egilea", "Iturria (URL)", "Lizentzia"], [["", "", "", ""] for _ in range(4)], 26) +
          h2("4. Argitaratu aurreko kontrol-zerrenda", C["sortu"]) +
          check(["Helburua argi dago eta ekintzarako deia du (behar bada)", "Audientziara egokitutako tonua eta hizkuntza",
                 "Datuak egiazkoak dira eta iturria adierazita dago", "Irudiek ez dute errealitatea faltsutzen ezta inor irudikatzen baimenik gabe",
                 "AAren erabilera adierazita dago", "Egile-eskubideak errespetatu dira", "Irisgarria: kontrastea, azpitituluak, alt testua",
                 "Tonu errespetuzkoa: ez du inor lotsarazten ezta estereotiporik indartzen"]) +
          p("<b>Hausnarketa:</b> zer ikasi dut? zer egingo nuke desberdin?") + lines(3)))

# ---------------------------------------------------------------- T06
T.append(("T06", "talde-lanaren-akordioa", "Talde-lanaren akordio digitala",
          "Online elkarlanean hasi aurretik taldeak adosteko",
          "Taldeentzat · Parte hartu", C["partehartu"],
          fields(["Proiektua", "Entrega-data"], 26) +
          h2("Kideak eta rolak", C["partehartu"]) +
          table(["Izena", "Rola (koordinatzailea, iturriak, diseinua, idazketa…)", "Ardurak"], [["", "", ""] for _ in range(5)], 28, ["25%", "35%", "40%"]) +
          h2("Komunikazioa", C["partehartu"]) +
          fields(["Kanala (txata, posta, plataforma)", "Erantzuteko gehieneko denbora", "Ordutegia (noiz ez idatzi)", "Bilerak (noiz, nola)"], 26) +
          h2("Tresnak eta baimenak", C["partehartu"]) +
          fields(["Dokumentu partekatua / karpeta", "Nork editatu dezake? Nork ikusi?", "Fitxategien izendapena (adib. data_gaia_bertsioa)"], 26) +
          h2("AAren erabilera taldean", C["partehartu"]) + lines(2) +
          h2("Gatazkak nola konponduko ditugu", C["partehartu"]) +
          check(["Ez erantzun beroan; itxaron eta berrirakurri", "Arazoa pribatuan edo bileran hitz egin, ez talde-txatean publikoki",
                 "Feedbacka AZE formularekin: Aitortu · Zehaztu · Eskaini", "Konpontzen ez bada, irakasleari jakinarazi"]) +
          h2("Egutegia", C["partehartu"]) +
          table(["Data", "Zeregina", "Arduraduna", "✓"], [["", "", "", ""] for _ in range(5)], 26, ["18%", "50%", "24%", "8%"]) +
          p("<b>Sinadurak</b>") + lines(2)))

# ---------------------------------------------------------------- T07
T.append(("T07", "pribatutasun-auditoria", "Pribatutasun-auditoria (5 minutu)",
          "Zure aplikazio edo sare sozial baten ezarpenak berrikusteko. Ez duzu inori erakutsi behar.",
          "Ikasleentzat · Eskuratu eta erabili", C["sarbidea"],
          fields(["Aplikazioa", "Zertarako erabiltzen dut?"], 26) +
          table(["Ezarpena", "Nire egoera", "Gomendioa", "Aldatu dut"], [
              ["Profilaren ikusgarritasuna", "", "Pribatua edo pertsonalizatua, helburuaren arabera", BOX],
              ["Kokapena argitalpenetan", "", "Desaktibatuta", BOX],
              ["Jaiotze-data eta telefonoa profilean", "", "Ezkutuan", BOX],
              ["Telefono edo emailez aurkitzea", "", "Desaktibatuta", BOX],
              ["Mezu zuzenak", "", "Jarraitzen ditudanek bakarrik", BOX],
              ["Etiketak onartu aurretik berrikusi", "", "Aktibatuta", BOX],
              ["Jarduera-egoera («linean»)", "", "Desaktibatuta", BOX],
              ["Publizitate pertsonalizatua", "", "Desaktibatuta / mugatuta", BOX],
              ["Edukiak AA entrenatzeko erabiltzea", "", "Desaktibatuta (aukera badago)", BOX],
              ["Konektatutako aplikazioak", "", "Erabiltzen ez ditudanak kendu", BOX],
              ["Bi urratseko egiaztapena", "", "Aktibatuta", BOX],
              ["Aplikazioaren baimenak (kamera, mikrofonoa, kontaktuak)", "", "Beharrezkoak bakarrik", BOX]],
              26, ["34%", "20%", "36%", "10%"]) +
          h2("Hausnarketa", C["sarbidea"]) +
          p("Zer ezarpenek harritu nau gehien? Zergatik?") + lines(2) +
          p("Pribatutasunaren eta helburuaren artean orekaren bat bilatu behar izan dut? Zein?") + lines(2)))

# ---------------------------------------------------------------- T08
LV = ["Oinarrizkoa", "Tartekoa", "Aurreratua"]
RUB = [
    ("⚖️ Hausnartu eta jardun etikoki eta arduraz",
     "Online arriskuen oinarrizko ulermena; bere ekintzen ondorio zabalez jabetzen hasia (pribatutasuna, ospea, ongizatea).",
     "Segurtasun-, etika-, jasangarritasun- eta ospe-alderdiez jabetzen da; truke sinpleak kontuan hartzen ditu tresnak erabiltzean.",
     "Pribatutasuna eta jasangarritasuna babesten ditu; ekintzen ondorioez hausnartzen du bere, ikaskideen eta gizartearen mailan; AAren mugak aztertzen ditu."),
    ("🧭 Eskuratu eta erabili",
     "Tresna arrunten oinarrizko ezagutza; bilaketa sinpleak, fitxategiak antolatu eta arazo errazak konpondu.",
     "Informazioa iragazi eta antolatu; ohiko arazoak identifikatu; hutsuneak tresna konplexuetan eta gomendio-sistemen ulermenean.",
     "Modu estrategikoan nabigatzen du: bilaketa-metodoak kritikoki hautatu, datu pertsonalak babestu, arazo teknikoak eraginkortasunez konpondu."),
    ("🔎 Aztertu eta ebaluatu",
     "Oinarrizko estrategiak (egiletza, iturria) erabiltzen ditu eta zehaztasuna eta motibazioa zalantzan jartzearen garrantzia ulertzen du.",
     "Sinesgarritasunaz eta alborapenaz jabetzen da; irakurketa laterala egiten du; informazio zuzena modu engainagarrian aurkezten denean detektatzen du.",
     "Iturri eta ikuspegi anitzak ebaluatzen ditu; hedabide/AA mekanismoak eta alborapenak aztertzen ditu; berrespen-alborapena kontuan hartzen du."),
    ("🤝 Parte hartu eta elkarlanean aritu",
     "Komunikazioa eta lankidetza egokitzeko lehen saiakerak; plataformak nola erabili ulertzen ari da.",
     "Tresna egoki eta seguruak hautatzen ditu; gatazkak prebenitu eta konpontzen saiatzen da; zereginak partekatzen ditu.",
     "Komunikazioa egokitu, trukeak moderatu, besteen eskubideak babestu eta proiektuak elkarlanean diseinatzen ditu, inklusioa sustatuz."),
    ("✨ Sortu",
     "Edizio sinpleak besteen proiektuetan; koherentzia, originaltasun eta asmoaren oinarrizko ulermena.",
     "Hainbat tresnarekin mezuak sortzen ditu audientziaren oinarrizko kontzientziarekin; iteratzeko prest dago.",
     "Maisutasunez sortu eta aldatzen du; ikuspegi etiko sendoa tresnak aukeratzean; helburura eta audientziara egokitzen du."),
]
T.append(("T08", "mail-errubrika", "MAIL errubrika: bost gaitasun, hiru maila",
          "PISA 2029 MAIL markoaren maila-progresioetan oinarritua (behin-behinekoak). Ebaluazio formatiborako.",
          "Irakasleentzat · Ebaluazioa", C["ink"],
          fields(["Ikaslea / taldea", "Jarduera eta data"], 24) +
          table(["Gaitasuna", LV[0], LV[1], LV[2], "Ebidentzia / oharrak"],
                [[f"<b>{r[0]}</b>", f"{BOX} {r[1]}", f"{BOX} {r[2]}", f"{BOX} {r[3]}", ""] for r in RUB],
                None, ["15%", "21%", "21%", "23%", "20%"]) +
          p("<b>Feedback orokorra eta hurrengo urratsa:</b>") + lines(3), True))

# ---------------------------------------------------------------- T09
CARDS = [
    "Lagun baten argazki barregarria festan; lotsatuta ageri da.",
    "Udalaren ohar ofiziala: bihar ur-mozketa auzoan.",
    "Kate-mezua: «Bidali 10 lagunei edo kontua ezabatuko dute».",
    "Irakasle baten ahotsarekin AAk sortutako audio barregarria.",
    "Zure taldeak irabazitako txapelketaren argazkia; denek onartu dute.",
    "Albiste bat haserre sentiarazi zaituena; ez duzu iturria ezagutzen.",
    "Ikaskide batek bere arazo pertsonala kontatu dizu pribatuan.",
    "Kanpaina solidario baten esteka; erakundea ez duzu ezagutzen.",
    "Zure etxearen kanpoko argazkia, kale-izena ikusten dela.",
    "Deepfake bat ziur faltsua dela ohartarazteko, testuinguruarekin.",
    "Influencer baten eskaintza: «Partekatu eta irabazi mugikor bat».",
    "AA irudi polit bat, adierazpenik gabe, «argazki erreala» balitz bezala.",
]
cardrows = []
for i in range(0, len(CARDS), 2):
    row = []
    for c in CARDS[i:i + 2]:
        row.append(f"<b>🃏 {esc(c)}</b><br><br><font size='1'>{BOX} Egia da? &nbsp; {BOX} Baimena dago? &nbsp; {BOX} Kalterik ez? &nbsp; {BOX} Erabilgarria?</font><br><br><b>{BOX} PARTEKATU &nbsp;&nbsp; {BOX} EZ PARTEKATU</b>")
    cardrows.append(row)
T.append(("T09", "partekatu-ala-ez-kartak", "«Partekatu ala ez?» kartak",
          "Inprimatu eta moztu. Talde bakoitzak EBKE galderekin sailkatzen ditu kartak eta desadostasunak eztabaidatzen dira.",
          "Talde txikiak · Etika", C["etika"],
          table(None, cardrows, 150, ["50%", "50%"]) +
          p("<b>EBKE:</b> <b>E</b>gia da? · <b>B</b>aimena dago? · <b>K</b>alterik egin diezaioke inori? · <b>E</b>rabilgarria da besteentzat? Bat «ez» bada, ez partekatu.")))

# ---------------------------------------------------------------- T10
LIK = "1 &nbsp; 2 &nbsp; 3 &nbsp; 4 &nbsp; 5"
QS = [
    ("Burutik irekitako pentsamendua", ["Nire iritziaren kontrako informazioa ere bilatzen dut.", "Ebidentzia berriak ikusten baditut, iritziz aldatzeko prest nago."]),
    ("AArekiko jarrerak", ["AA tresnek nire ikaskuntzan lagun dezaketela uste dut.", "AAren erantzunak zalantzan jartzen ditut, zuzenak diruditenean ere."]),
    ("Pribatutasuna babesteko estrategiak", ["Aplikazioen baimenak berrikusten ditut instalatzean.", "Ez ditut datu pertsonalak AA txatbotetan sartzen."]),
    ("Desinformazioarekiko sentikortasuna", ["Partekatu aurretik egiaztatzen dut albiste bat egia den.", "Emozio bizia sortzen didaten mezuekin kontu handiagoa izaten dut."]),
    ("Manipulazioarekiko sentikortasuna", ["Datu zuzenak modu engainagarrian aurkez daitezkeela badakit.", "Iragarki ezkutuak (kodeak, opariak) detektatzen ditut."]),
    ("Dependentzia digitala", ["Mugikorra begiratzen dut arrazoirik gabe askotan egunean.", "Jakinarazpenak mugatzen ditut kontzentratzeko."]),
    ("Hedabideetako parte-hartzea", ["Online eztabaidetan errespetuz parte hartzen dut.", "Norbait online erasotzen dutenean, zerbait egiten dut (esan, jakinarazi…)."]),
    ("Hedabide-praktikak", ["Kontsumitzen baino gehiago sortzen dut (bideoak, testuak, musika…).", "Lortzen dut pantailarik gabeko denbora izatea egunero."]),
]
qrows = []
for g, items in QS:
    qrows.append([f"<b>{g}</b>", ""])
    for q in items:
        qrows.append([f"&nbsp;&nbsp;{esc(q)}", LIK])
T.append(("T10", "autoebaluazio-galdetegia", "Autoebaluazio-galdetegia: jarrerak eta ohiturak",
          "PISA MAILen galdetegiko eraikuntzetan inspiratua. 1 = ez nator bat batere · 5 = guztiz bat nator. Ez da notarik: hausnartzeko da.",
          "Ikasleentzat · Hausnarketa", C["ink"],
          fields(["Izena (aukerakoa)", "Data"], 24) +
          table(["Adierazpena", "1–5"], qrows, 24, ["80%", "20%"]) +
          h2("Hausnarketa", C["ink"]) +
          p("Zein da nire indargunerik handiena? Eta zer hobetu nahi dut hurrengo hilabeteetan?") + lines(3)))

# ---------------------------------------------------------------- T11
DRV = ["Testuinguruaren konplexutasuna", "Hedabide moten aniztasuna", "Tresna eta plataformen aniztasuna", "Goi-mailako pentsamendua",
       "Erantzun irekiak", "Agertokiaren errealismoa", "Jarraibideen anbiguotasuna", "Laguntza eta gidaritza kopurua"]
T.append(("T11", "jarduera-diseinua", "MAIL jarduera diseinatzeko txantiloia",
          "PISA 2029 MAIL markoaren ataza-deskribatzaileetan oinarritua (testuingurua, hedabideak, tresnak, atazak, zailtasuna)",
          "Irakasleentzat · Diseinua", C["ink"],
          fields(["Jardueraren izenburua", "Ikasgaia(k) eta maila", "Iraupena"], 24) +
          h2("Zer landuko da?", C["ink"]) +
          p("<b>Gaitasunak:</b> " + " &nbsp; ".join(f"{BOX} {x}" for x in ["Etika", "Eskuratu eta erabili", "Aztertu eta ebaluatu", "Parte hartu", "Sortu"])) +
          p("<b>Kontzeptu gakoa:</b> " + " &nbsp; ".join(f"{BOX} {x}" for x in ["Egileak eta audientziak", "Mezuak eta esanahiak", "Irudikapenak eta errealitateak"])) +
          p("<b>Testuingurua:</b> " + " &nbsp; ".join(f"{BOX} {x}" for x in ["Harremanak", "Ikaskuntza", "Aisialdia", "Limurtzea", "Herritartasuna"])) +
          p("<b>Hedabideak:</b> " + " &nbsp; ".join(f"{BOX} {x}" for x in ["Testu digitala", "Audioa", "Irudiak/grafikoak", "Bideoa", "AA/algoritmoek sortua"])) +
          p("<b>Tresnak:</b> " + " &nbsp; ".join(f"{BOX} {x}" for x in ["Sare soziala", "Bilatzailea", "Txata", "Posta", "Editorea", "Hodeia", "AA txatbota", "Irudi-sortzailea"])) +
          p("<b>Ataza mota:</b> " + " &nbsp; ".join(f"{BOX} {x}" for x in ["Laburra (aukera anitza, lotu…)", "Luzea (agertoki irekia)"])) +
          fields(["Ikaskuntza-helburua (ikasleak gai izango dira…)"], 44) +
          h2("Zailtasun-eragileak (egokitu mailara)", C["ink"]) +
          table(["Eragilea", "Erraztu (oinarrizkoa)", "Zaildu (aurreratua)"], [[d, "", ""] for d in DRV], 24, ["34%", "33%", "33%"]) +
          h2("Sekuentzia", C["ink"]) +
          table(["Fasea", "Jarduera", "Denbora", "Baliabideak"], [["Hasiera", "", "", ""], ["Garapena", "", "", ""], ["Itxiera eta hausnarketa", "", "", ""]], 50, ["18%", "52%", "12%", "18%"]) +
          h2("Ebaluazioa", C["ink"]) +
          fields(["Ebidentziak (produktua eta prozesua)", "Tresna (T08 errubrika, autoebaluazioa…)"], 30)))

# ---------------------------------------------------------------- T12
SES = [
    ("1", "Zer da MAIL? Nire dieta digitala", "Etika · Eskuratu", "Pantaila-denboraren eta aplikazioen auditoria; hiru kontzeptu gakoak.", "markoa.html · T10"),
    ("2", "Nork aukeratzen du zer ikusten dudan?", "Eskuratu · Etika", "Jario-simulagailua; gomendio-sistemen eztabaida.", "etika.html · jarioa"),
    ("3", "Bilatu hobeto, galdetu hobeto", "Eskuratu", "Bilaketa-lasterketa; prompt onaren 5 gakoak.", "sarbidea.html"),
    ("4", "Pribatutasuna eta datuak", "Eskuratu · Etika", "Pribatutasun-panela; bakarkako auditoria.", "sarbidea.html · T07"),
    ("5", "Manipulazioaren txertoa", "Aztertu", "Limurtze-teknikak; iragarki ezkutuak; ariketak AZ-01/02.", "aztertu.html · T02"),
    ("6", "Irakurketa laterala", "Aztertu", "SIFT; egiaztatzaile-taldeak albiste biral batekin.", "aztertu.html · T01"),
    ("7", "Ataza luzea: kazetari gaztea", "Aztertu · Sortu", "Simulagailu nagusia bikoteka; txostenak alderatu.", "simulagailua.html"),
    ("8", "Elkarlana eta gatazkak", "Parte hartu", "Talde-txataren simulagailua; rol-jokoa.", "parte-hartu.html · T06"),
    ("9", "Sortu arduraz", "Sortu · Etika", "Kontra-kanpaina; kanpaina-editorea; AAren adierazpena.", "sortu.html · T05 · T03"),
    ("10", "Proba-saioa eta hausnarketa", "Guztiak", "Proba-saio ertaina; errubrika eta autoebaluazioa; gelako AA akordioa.", "ariketak.html · T08 · T04"),
]
T.append(("T12", "unitate-didaktikoa-10-saio", "Unitate didaktikoa: MAIL 10 saiotan",
          "DBH 3–4rako proposamena (50 min/saio). Egokitu ikasgai eta taldearen arabera.",
          "Irakasleentzat · Plangintza", C["ink"],
          table(["#", "Saioa", "Gaitasunak", "Jarduera nagusia", "Baliabideak (artifiziala.eus/pisa2029)", "Oharrak"],
                [[f"<b>{a}</b>", f"<b>{b}</b>", c, d, e, ""] for a, b, c, d, e in SES], 40, ["4%", "20%", "14%", "30%", "18%", "14%"]) +
          h2("Ebaluazio-plana", C["ink"]) + lines(3), True))


def find_chrome():
    for c in ["google-chrome", "chromium", "chromium-browser", "google-chrome-stable"]:
        if shutil.which(c):
            return c
    return None


def main():
    os.makedirs(OUT, exist_ok=True)
    chrome = find_chrome()
    tmp = tempfile.mkdtemp(prefix="mail-tpl-")
    made = []
    for t in T:
        tid, slug, title, sub, who, color, body = t[:7]
        landscape = t[7] if len(t) > 7 else False
        name = f"{tid}-{slug}"
        src = os.path.join(tmp, name + ".html")
        with open(src, "w", encoding="utf-8") as f:
            f.write(doc(tid, title, sub, who, color, body, landscape))
        subprocess.run(["soffice", "--headless", "--infilter=HTML (StarWriter)", "--convert-to", "docx:MS Word 2007 XML",
                        "--outdir", OUT, src], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        if chrome:
            subprocess.run([chrome, "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
                            f"--print-to-pdf={os.path.join(OUT, name + '.pdf')}", "file://" + src],
                           check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        made.append(name)
        print("✓", name)
    with zipfile.ZipFile(os.path.join(OUT, "MAIL-txantiloiak-guztiak.zip"), "w", zipfile.ZIP_DEFLATED) as z:
        for n in made:
            for ext in (".docx", ".pdf"):
                pth = os.path.join(OUT, n + ext)
                if os.path.exists(pth):
                    z.write(pth, n + ext)
    shutil.rmtree(tmp, ignore_errors=True)


if __name__ == "__main__":
    main()
