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
