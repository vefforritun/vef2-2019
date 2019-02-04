# Verkefni 2

Verkefni 2 snýst um að setja upp vef sem bíður upp á senda inn atvinnuumsóknir ásamt síðu sem listar upp allar umsóknir.

## Útlit

Útlit er gefið í möppu `utlit/`, bæði fyrir `1200px` breiðan skjá og `400px` breiðan. Sjá má allar stöður sem komið geta upp. Útfæra skal útlit sem er mjög líkt en ekki þarf að gera það nákvæmlega eins. Um útlit í sýnilausn gildir:

* `Open sans regular` notað fyrir meginmál
* `Source Sans Pro bold` fyrir fyrirsagnir
* Grunnleturstærð er `16px` fyrir texta og form
* Aðalfyrirsögn er `48px` (nota `em` eða `rem`), önnur fyrirsögn `24px`, label fyrir form eru `22px`
* Bil frá viewport að efni er `32px`
* Texti í formi skal vera `16px` með `8px` padding
* Önnur bil eru `48px`, `32px` og `16px`
* Litir eru
  * Border á input `#888`
  * Border ef input ef ógilt `#855`, bakgrunnur `#fbb`
  * Bakgrunnur á texta þegar sveimað yfir `#bbb`, skipt með `easin-in` á `300ms`

## Gagnagrunnur

Gefnar eru tvær skrár sem fylla skal inn í, `schema.sql` sem skilgreinir hvernig taflan `applications` er búin til og `insert.sql` sem fyllir inn gögn, sjá að neðan.

Setja skal _tengistreng_ (connection string) fyrir gagnagrunn í skrá sem heitir `.env` undir lyklinum `DATABASE_URL`. Þessi skrá skilgreinir breytur í keyrsluumhverfi (environment). Hún fylgir ekki verkefninu og er ekki geymd í Git vegna þess að tengiupplýsingar eru upplýsingar sem ekki á að dreifa því þær innihalda oft t.d. lykilorð. Afrita skal `.env_example` yfir í skrá `.env` og stilla tengistreng þar. Pakkinn `dotenv` er uppsettur og sér um að lesa þessar upplýsingar og koma þeim yfir í `process.env.DATABASE_URL`.

Gefin er virkni í `setup.js` sem keyrð er með `npm run setup`. Þessi virkni mun eyða töflunni `applications`, setja upp töfluna `applications` úr `schema.sql` og bæta við færslum úr `insert.sql`. Ef allt er rétt sett upp þá mun þetta keyra:

```bash
> npm run setup -s
Set upp gagnagrunn á postgres://:@localhost/gagnagrunnur # <- þinn tengistrengur
Töflu eytt
Tafla búin til
Gögnum bætt við
```

Athugið, fyrst þarf að setja upp `pg` pakkann úr NPM og keyra `npm install` fyrir þá pakka sem eru skilgreindir í `package.json`.

_CRUD_ virkni fyrir verkefni skal setja upp í `db.js`.

### Prufugögn

Í `insert.sql` skal setja inn eftirfarandi gögn með `INSERT` skipunum í gagnagrunn:

Nafn | Netfang | Sími | Texti | Starf | Unnin?
-----|---------|------|-------|-------|-------
Jón Jónsson | jon@example.org | 1231231 | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum eleifend odio, eu laoreet sapien sollicitudin quis. | forritari | Nei
Guðmundur Guðmundsson | gummi@example.org | 1233211 | Nam a sapien tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus tincidunt ante nisl, eu placerat arcu porttitor mollis. Duis porttitor dolor vitae aliquet sollicitudin. Etiam scelerisque, lorem eu varius eleifend, elit diam facilisis leo, sit amet volutpat est enim eu tortor. Mauris non tortor eget nibh fermentum maximus vel sit amet ante. Vestibulum condimentum facilisis nisl eget interdum. Donec vel cursus purus. | forritari | Já
Anna Önnudóttir | anna@example.org | 3333333 | Sed in sem sagittis, fringilla justo eget, vulputate nunc. Cras pharetra faucibus blandit. Sed non porta ligula, non efficitur dolor. | forritari | Nei
Guðmunda Guðmundsdóttir | gudmunda@example.org | 1111111 | Aenean a nibh a enim cursus bibendum. Donec dictum velit in odio feugiat imperdiet. Sed blandit, justo vitae lacinia efficitur, tortor ante ultrices orci, nec placerat dui purus ac augue. Nullam aliquet purus sit amet erat laoreet, nec consequat augue suscipit. Curabitur rutrum pretium erat sed pellentesque. Proin ligula massa, varius id tristique in, varius id elit. Sed congue volutpat fringilla. | hönnuður | Nei
John Johnson | john@example.org | 1000000 | Etiam accumsan neque nec mauris fringilla, id dignissim tortor maximus. Proin sit amet sodales felis. Vivamus ut est magna. Quisque porta quam ac orci dignissim convallis. Nunc efficitur sagittis felis at gravida. Praesent quis quam molestie, rutrum mi sed, malesuada nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse felis tortor, imperdiet in metus eget, bibendum aliquet nisl. | verkefnastjóri | Nei

## Umsóknarsíða

Umsóknarsíða skal svara á `/` og birta form til að skrá umsókn. Öll gögn skal vista í gagnagrunni og passa upp á XSS, hreinsa af þeim auka bil (`trim`) og passa upp á að ekkert HTML fari með (`escape`) að auki sjá frekari hreinsun á reitum að neðan. Nota skal `xss` og `express-validator` pakka.

Umsókn samanstendur af og skulu gögn uppfylla:

* Nafn
  * Má ekki vera tómt
* Netfang
  * Má ekki vera tómt, verður að vera netfang
  * Normalísera sem netfang
* Sími
  * Verður að líta út eins og sjö stafa íslenskt símanúmer, leyfilegt skal að hafa ` ` eða `-` eftir fyrstu þrjá stafi
  * Símanúmer skal hreinsa þ.a. það sé sjö stafir og vista sem tölu (`int`)
* Kynning
  * Verður að vera a.m.k. 100 stafir
* Starf sem sótt er um
  * Verður að vera eitt af: `forritari`, `hönnuður`, `verkefnastjóri`

Aukalega skal hver umsókn hafa:

* `processed`, boolean breytu sem segir til um hvort umsókn hafi verið unnin, sjálfgefið `false`
* `created`, dagstími þegar umsókn var búin til, sjálfgefið tími þegar röð er búin til
* `updated`, dagstími þegar umsókn var seinast breytt, sjálfgefið tími þegar röð er búin til

Ef gögn sem send eru inn uppfylla ekki kröfur skal birta villuskilaboð og merkja reit (sjá fyrirmyndir undir `utlit/`). Birta skal öll gögn sem notandi hafði nú þegar slegið inn.

Ef gögn eru í lagi skal vista þau í gagnagrunni og senda á þakkarsíðu.

## Yfirlitssíða

Yfirlitssíða skal vera aðgengileg á `/applications`. Þar skal birta allar umsóknir sem eru í gagnagrunni. Til að viðhalda röð að einhverju leiti er æskilegt að velja reit til að raða eftir, t.d. `id` (betra en að nota dags þar sem prufugögn verða öll skráð á sama tíma) með `SELECT * FROM applications ORDER BY id`.

Auka upplýsinga skal birta tvo takka fyrir hverja umsókn:

* `Vinna umsókn` sem breytir `processed` yfir í `true` og uppfærir `updated` yfir í dagstíma þegar smellt var á takka
* `Eyða umsókn` sem eyðir umsókn úr gagnagrunni

## Annað

Notast skal við EJS template til að útbúa HTML.

Setja skal upp villumeðhöndlun fyrir almennar villur og ef beðið er um slóð sem ekki er til (404). Skilaboð skulu birt notanda um hvað gerðist („Síða fannst ekki“ – „Villa kom upp“)..

Öll dependency skulu skráð í package.json. eslint pakkar eru nú þegar uppsettir sem devDependency.

npm start skal keyra upp vefþjón á localhost porti 3000.

## Git og GitHub

Verkefni þetta er sett fyrir á GitHub og almennt ætti að skila því úr einka (private) repo nemanda. Nemendur geta fengið gjaldfrjálsan aðgang að einkarepos á meðan námi stendur, sjá https://education.github.com/.

Til að byrja er hægt að afrita þetta repo og bæta við á sínu eigin:

```bash
> git clone https://github.com/vefforritun/vef2-2019-v1.git
> cd vef2-2019-v1
> git remote remove origin # fjarlægja remote sem verkefni er í
> git remote add origin <slóð á repo> # bæta við í þínu repo
> git push
```

## Mat

* 10% – Snyrtilegur kóði, engar villur þegar `npm test` er keyrt
* 10% – Skema fyrir gagnagrunn sett upp og leiðbeiningum fylgt um uppsetningu
* 20% – Útlit uppsett eftir forskrift, merkingarfræðilegt HTML og snyrtilegt CSS
* 30% – Umsóknarsíða tekur við umsókn, staðfestir (validate), hreinsar (sanitize) og vistar í grunni
* 30% – Yfirlitssíða sýnir allar umsóknir, leyfir að merkja þær sem unnar og eyða þeim

## Sett fyrir

Verkefni sett fyrir á Uglu laugardaginn 26. janúar 2019.

## Skil

Skila skal undir „Verkefni og hlutaprófa“ á Uglu í seinasta lagi fyrir lok dags föstudaginn 8. febrúar 2019.

Skilaboð skulu innihalda:

* Slóð á GitHub repo fyrir verkefni, og dæmatímakennurum skal hafa verið boðið í repo (sjá leiðbeiningar). Notendanöfn þeirra eru `freyrdanielsson`, `gunkol`, `kth130`, `osk`

## Einkunn

Sett verða fyrir sex minni verkefni þar sem fimm bestu gilda 6% hvert, samtals 30% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 15%, samtals 30% af lokaeinkunn.

Verkefnahluti gildir 60% og lokapróf gildir 40%. Ná verður *bæði* verkefnahluta og lokaprófi með lágmarkseinkunn 5.

---

> Útgáfa 0.1
