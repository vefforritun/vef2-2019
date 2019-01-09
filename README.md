# Vefforritun 2, 2019

Hér má nálgast alla fyrirlestra, dæmi og verkefni í áfangagnum vefforritun 2 kenndan við HÍ vorið 2019.

[Upptökur af fyrirlestrum eru á YouTube](https://www.youtube.com/playlist?list=PLRj-ccg8iozy9xtBk-02VNOnOoIFR84Oe).

## Dæmatímar

Sjá Uglu.

## Kennsluáætlun

| Vika | Fimmtudagur   | Viðfangsefni                        | Verkefni       | Skil           |
|------|-------------|---------------------------------------|----------------|----------------|
|   1  | 10. janúar  | Kynning, node.js, ósamstillt forritun | Verkefni #1    |                |
|   2  | 17. janúar  | Einingar, atburðir, express           |                |                |
|   4  | 24. janúar  | HTTP, form, postgres                  | Verkefni #2    | Verkefni #1    |
|   5  | 31. janúar  | Öryggi, Heroku                        |                |                |
|   6  | 7. febrúar  | Auðkenning                            | Verkefni #3    | Verkefni #2    |
|   7  | 18. febrúar | Vefþjónustur                          | Hópverkefni #1 |                |
|   8  | 21. febrúar | Vefþjónustur                          | Verkefni #4    | Verkefni #3    |
|   9  | 28. febrúar | redis, cache & scraping               |                |                |
|  10  | 7. mars     | Prófanir, React                       | Verkefni #5    | Verkefni #4    |
|  11  | 14. mars    | React                                 | Hópverkefni #2 | Hópverkefni #1 |
|  12  | 21. mars    | React, next.js                        | Verkefni #6    | Verkefni #5    |
|  13  | 28. mars    | Bundling, CMS, DevOps                 |                |                |
|  14  | 4. apríl    | Vue, Typescript                       |                | Verkefni #6    |
|  15  | 11. apríl   | Upprifjun og um lokapróf              |                | Hópverkefni #2 |
|  16  | 18. apríl   | Páskafrí                              |                |                |

## Fyrirlestrar

## Verkefni

Verkefnum og einkunnum fyrir þau er skilað í gegnum Uglu.

* [Verkefni 1](https://github.com/vefforritun/vef2-2019-v1), sett fyrir 10. janúar, skilist 25. janúar
* [Verkefni 2](https://github.com/vefforritun/vef2-2019-v2), sett fyrir 24. janúar, skilist 8. febrúar
* [Verkefni 3](https://github.com/vefforritun/vef2-2019-v3), sett fyrir 7. febrúar, skilist 22. febrúar
* [Verkefni 4](https://github.com/vefforritun/vef2-2019-v4), sett fyrir 21. febrúar, skilist 8. mars
* [Verkefni 5](https://github.com/vefforritun/vef2-2019-v5), sett fyrir 7. mars, skilist 22. mars
* [Verkefni 6](https://github.com/vefforritun/vef2-2019-v6), sett fyrir 21. mars, skilist 5. apríl

## Hópverkefni

* [Hópverkefni 1](https://github.com/vefforritun/vef2-2019-h1), sett fyrir 18. febrúar, skilist 15. mars
* [Hópverkefni 2](https://github.com/vefforritun/vef2-2019-h2), sett fyrir 14. mars, skilist 12. apríl

## Einkunn

Verkefnahluti gildir 60% og lokapróf gildir 40%. Ná verður *bæði* verkefnahluta og lokaprófi með lágmarkseinkunn 5.

---

## Útbúa fyrirlestra

Allir fyrirlestrar eru skrifaðir í Markdown.
Til að útbúa fyrirlestra er [revel.js](https://revealjs.com/) notað með pakkanum [reveal-md](https://github.com/webpro/reveal-md).
Til þess að keyra fyrirlestra þarf að keyra í rót verkefnis:

```bash
npm install
npm run present
```

## Linting

Til að keyra linting á markdown:

```bash
npm run markdownlint
```

JavaScript kóða í `.js`, `.html` og `.md` skrám:

```bash
npm run eslint-js
npm run eslint-markdown
npm run eslint-html
npm run eslint # keyrir allt að ofan
```

Allt saman keyrir með:

```bash
npm test
```
