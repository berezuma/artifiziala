# artifiziala.eus

**Adimen Artifiziala euskaraz** — 12-18 urteko ikasleentzat AI literacy plataforma interaktiboa.

## Zer da?

`aa-eus` GitHub Pages-en argitaratzeko prestatutako web proiektu estatikoa da. Helburua: ikasleek adimen artifiziala modu kritiko, praktiko eta arduratsuan ulertzea.

## Edukia

| Atala | Deskribapena |
|-------|-------------|
| **6 ikasgai** | AA zer den, nola ikasten duten makinek, eredu generatiboak, prompt onak, fidagarritasuna, etika |
| **3 laborategi** | Datu-etiketatzea, prompt-en azterketa, alborapen simulagailua |
| **8 quiz galdera** | Feedback zuzenarekin eta azalpenekin |
| **Irakasleentzako gida** | Sekuentzia didaktikoa, errubrika, erabilera-printzipioak |
| **Gurasoentzako gida** | Etxerako gomendioak, galdera gidariak, segurtasun aholkuak |

## PISA 2029 · MAIL atala (`pisa2029/`)

PISA 2029ko **Hedabideen eta Adimen Artifizialaren Alfabetatzea (MAIL)** proba prestatzeko gunea, ELGAren markoaren lehen zirriborroan (2026) oinarritua.

| Orria | Edukia |
|-------|--------|
| `index.html` | Atalaren hasiera: MAIL zer den, gaitasun-eredu interaktiboa, proba nolakoa den, aurrerapena |
| `markoa.html` | Markoa euskaraz: kontzeptu gakoak, gaitasunak eta mailak, testuinguruak, zailtasun-eragileak, loturak, glosarioa |
| `etika.html`, `sarbidea.html`, `aztertu.html`, `parte-hartu.html`, `sortu.html` | Gaitasun bakoitzeko gunea: definizioa, mailak, estrategiak, adibide ebatzia, simulagailua, ariketak, ikasgelarako ideiak |
| `simulagailua.html` | Ataza luzearen simulagailua (mahaigain birtuala: txata, nabigatzailea, bilatzailea, AA laburpena, sortzailea), 2 agertoki eta txostena |
| `ariketak.html` | 46 ariketako bankua (7 formatu) iragazkiekin eta denbora-mugako proba-saioa |
| `txantiloiak.html` | 12 txantiloi DOCX eta PDF formatuetan + ZIP |
| `irakasleak.html` | Gida didaktikoa: 2029rako ibilbide-orria, 10 saioko unitatea, ebaluazioa |

**Kodea:** `pisa2029/assets/` — `pisa.css` (diseinua), `pisa.js` (motorra, ariketa motak, aurrerapena), `items.js` (ariketa-bankua), `widgets.js` (simulagailu txikiak), `sim.js` (simulagailu nagusia).

**Ariketa berri bat gehitzeko:** gehitu objektu bat `items.js`-n (ikusi lehendik daudenak eredu gisa).

**Txantiloiak birsortzeko** (LibreOffice eta Chrome behar dira):

```
python3 pisa2029/txantiloiak/iturria/sortu_txantiloiak.py
```

## Karpeta egitura

```
aa-eus/
├── index.html
├── ikasgaiak.html
├── laborategia.html
├── erronkak.html
├── irakasleak.html
├── gurasoak.html
├── README.md
└── assets/
    ├── css/styles.css
    ├── js/
    │   ├── data.js
    │   ├── app.js
    │   └── labs.js
    └── img/favicon.svg
```

## Nola probatu lokalki

1. Deskargatu edo klonatu repo hau
2. Ireki `index.html` nabigatzailean

## GitHub Pages-en argitaratu

1. Sortu GitHub-en repo berria: `aa-eus`
2. Igo fitxategi guztiak repoaren erroan
3. Joan **Settings → Pages**
4. Hautatu **Deploy from a branch** → `main` → `/ (root)`
5. Gorde eta minutu pare bat itxaron

## Teknologia

- HTML, CSS, JavaScript hutsa (framework-rik gabe)
- Google Fonts: Fraunces + DM Sans
- localStorage bidezko aurrerapena
- Responsive diseinua (mugikorra, tableta, ordenagailua)
- Backendik gabea, edozein hosting estatikoan funtzionatzen du

## Hobekuntza posibleak

- Modulu gehiago gehitzea (prompt engineering aurreratua, AI lanbideetan, deepfakes)
- Bideo eta audio edukiak sartzea
- Gamifikazioa: puntuak, mailak, lorpenak
- JSON bidezko edukien kudeaketa independentea
- i18n: gaztelania eta frantsesa gehitzea
- PWA bihurtzea (offline erabilera)

## Lizentzia

Hezkuntza erabilerarako sortutako proiektu irekia.
