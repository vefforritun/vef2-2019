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
|   3  | 24. janúar  | HTTP, form, postgres                  | Verkefni #2    | Verkefni #1    |
|   4  | 31. janúar  | Öryggi                                |                |                |
|   6  | 18. febrúar | Vefþjónustur                          | Hópverkefni #1 |                |
|   5  | 7. febrúar  | Auðkenning, Heroku                    | Verkefni #3    | Verkefni #2    |
|   7  | 21. febrúar | Vefþjónustur                          | Verkefni #4    | Verkefni #3    |
|   8  | 28. febrúar | redis, cache & scraping               |                |                |
|   9  | 7. mars     | Prófanir, React                       | Verkefni #5    | Verkefni #4    |
|  10  | 14. mars    | React                                 | Hópverkefni #2 | Hópverkefni #1 |
|  11  | 21. mars    | React, next.js                        | Verkefni #6    | Verkefni #5    |
|  12  | 28. mars    | Bundling, CMS, DevOps                 |                |                |
|  13  | 4. apríl    | Vue, Typescript                       |                | Verkefni #6    |
|  14  | 11. apríl   | Upprifjun og um lokapróf              |                | Hópverkefni #2 |
|  15  | 18. apríl   | Páskafrí                              |                |                |

## Fyrirlestrar

* [Fyrirlestur 1, 10. janúar](fyrirlestrar/01/)
  - Kynning, node.js, ósamstillt forritun
* [Fyrirlestur 2, 17. janúar](fyrirlestrar/02/)
  - Einingar, atburðir, express
* [Fyrirlestur 3, 24. janúar](fyrirlestrar/03/)
  - HTTP, form, Postgres
* [Fyrirlestur 4, 31. janúar](fyrirlestrar/04/)
  - Öryggi
* [Fyrirlestur 5, 7. febrúar](fyrirlestrar/05/)
  - Auðkenning, Heroku

## Ítarefni

* Fyrirlestur 1
  - [Jake Archibald: In The Loop](https://www.youtube.com/watch?v=cCOL7MC4Pl0), 35 mín fyrirlestur
* Fyrirlestur 2
  - [Anatomy of an HTTP Transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/), HTTP server frá grunni með Node.js
  - [The Node.js Community Is Quietly Changing the Face of Open Source](http://caines.ca/blog/2013/04/13/the-node-dot-js-community-is-quietly-changing-the-face-of-open-source/), frá 2013
  - [Rage-quit: Coder unpublished 17 lines of JavaScript and “broke the Internet”](https://arstechnica.com/information-technology/2016/03/rage-quit-coder-unpublished-17-lines-of-javascript-and-broke-the-internet/)
  - [NPM & left-pad: Have We Forgotten How To Program?](http://www.haneycodes.net/npm-left-pad-have-we-forgotten-how-to-program/)
  - [Code dependencies are the devil.](https://medium.freecodecamp.org/code-dependencies-are-the-devil-35ed28b556d)
  - [I’m harvesting credit card numbers and passwords from your site. Here’s how.](https://hackernoon.com/im-harvesting-credit-card-numbers-and-passwords-from-your-site-here-s-how-9a8cb347c5b5)
  - „event-stream incident“, óprúttinn aðili tók yfir `event-stream` pakkann á npm
    + ["An NPM package with 2,000,000 weekly downloads had malicious code injected into it. No one knows what the malicious code does yet."](https://twitter.com/garybernhardt/status/1067111872225136640)
    + ["I don't know what to say."](https://github.com/dominictarr/event-stream/issues/116)
    + [The npm blog: Details about the event-stream incident](https://blog.npmjs.org/post/180565383195/details-about-the-event-stream-incident)
  - [The Ant Design Christmas Egg that Went Wrong](https://blog.shunliang.io/frontend/2018/12/25/the-ant-design-xmas-egg-that-went-wrong.html)
* Fyrirlestur 3
  - [Að tengjast Postgres](itarefni/postgres.md)
  - [cURL tutorial](https://curl.haxx.se/docs/httpscripting.html)
  - [PostgreSQL on the command-line](http://phili.pe/posts/postgresql-on-the-command-line/)
  - [PostgreSQL Exercises](https://pgexercises.com/)
* Fyrirlestur 4
  - OWASP top 10
    + [A10:2017 Insufficient Logging and Monitoring](https://github.com/OWASP/Top10/blob/master/2017/en/0xaa-logging-detection-response.md)
    + [A9:2017 Using Components with Known Vulnerabilities](https://github.com/OWASP/Top10/blob/master/2017/en/0xa9-known-vulns.md)
    + [A8:2017 Insecure Deserialization](https://github.com/OWASP/Top10/blob/master/2017/en/0xa8-insecure-deserialization.md)
    + [A7:2017 Cross-Site Scripting (XSS)](https://github.com/OWASP/Top10/blob/master/2017/en/0xa7-xss.md)
    + [A6:2017 Security Misconfiguration](https://github.com/OWASP/Top10/blob/master/2017/en/0xa6-security-misconfiguration.md)
    + [A5:2017 Broken Access Control](https://github.com/OWASP/Top10/blob/master/2017/en/0xa5-broken-access-control.md)
    + [A4:2017 XML External Entities (XXE)](https://github.com/OWASP/Top10/blob/master/2017/en/0xa4-xxe.md)
    + [A3:2017 Sensitive Data Exposure](https://github.com/OWASP/Top10/blob/master/2017/en/0xa3-sensitive-data-disclosure.md)
    + [A2:2017 Broken Authentication](https://github.com/OWASP/Top10/blob/master/2017/en/0xa2-broken-authentication.md)
    + [A1:2017 Injection](https://github.com/OWASP/Top10/blob/master/2017/en/0xa1-injection.md)
  - [have i been pwned?](https://haveibeenpwned.com/)
  - [Reply All #130: The Snapchat Thief](https://www.gimletmedia.com/reply-all/130-lizard)
  - [Hacker Lexicon: SQL Injections, an Everyday Hacker’s Favorite Attack](https://www.wired.com/2016/05/hacker-lexicon-sql-injections-everyday-hackers-favorite-attack/)
  - [How I Hacked 40 sites in 7 minutes](https://hackernoon.com/how-i-hacked-40-websites-in-7-minutes-5b4c28bc8824)
  - [The MySpace Worm that Changed the internet Forever](https://motherboard.vice.com/en_us/article/wnjwb4/the-myspace-worm-that-changed-the-internet-forever)
  - [Meet the seven people who hold the keys to worldwide internet security](https://www.theguardian.com/technology/2014/feb/28/seven-people-keys-worldwide-internet-security-web)
  - [XSS Prevention Cheat Sheet](https://www.owasp.org/index.php/SQL_Injection_Prevention_Cheat_Sheet)
  - [alert(1) to win – XSS leikur!](https://alf.nu/alert1)
  - [OWASP: Logging cheat sheet](https://www.owasp.org/index.php/Logging_Cheat_Sheet)
* Fyrirlestur 5
  - [Saga kökunnar frá höfundi hennar](http://www.montulli-blog.com/2013/05/the-reasoning-behind-web-cookies.html?m=1)
  - [The drastic effects of omitting NODE_ENV in your Express.js applications](https://www.dynatrace.com/news/blog/the-drastic-effects-of-omitting-node_env-in-your-express-js-applications/)
  - The Twelve-Factor App
    + [I. Codebase](https://12factor.net/codebase)
    + [II. Dependencies](https://12factor.net/dependencies)
    + [III. Config](https://12factor.net/config)
    + [IV. Backing services](https://12factor.net/backing-services)
    + [V. Build, release, run](https://12factor.net/build-release-run)
    + [VI. Processes](https://12factor.net/processes)
    + [VII. Port binding](https://12factor.net/port-binding)
    + [VIII. Concurrency](https://12factor.net/concurrency)
    + [IX. Disposability](https://12factor.net/disposability)
    + [X. Dev/prod parity](https://12factor.net/dev-prod-parity)
    + [XI. Logs](https://12factor.net/logs)
    + [XII. Admin processes](https://12factor.net/admin-processes)

## Verkefni

Verkefnum og einkunnum fyrir þau er skilað í gegnum Uglu.

* [Verkefni 1](https://github.com/vefforritun/vef2-2019-v1), sett fyrir 10. janúar, skilist 25. janúar
  - [Kynning á verkefni](https://youtu.be/ADmCKJJOzuk), [Nánar í fyrirlestri 2](https://youtu.be/MQBTq1yuxBA)
  - [Sýnilausn](https://github.com/vefforritun/vef2-2019-v1-synilausn)
* [Verkefni 2](https://github.com/vefforritun/vef2-2019-v2), sett fyrir 26. janúar, skilist 8. febrúar
  - [Kynning í fyrirlestri](https://www.youtube.com/watch?v=XHvDatOMwE4)
* [Verkefni 3](https://github.com/vefforritun/vef2-2019-v3), sett fyrir 9. febrúar, skilist 22. febrúar
* [Verkefni 4](https://github.com/vefforritun/vef2-2019-v4), sett fyrir 23. febrúar, skilist 8. mars
* [Verkefni 5](https://github.com/vefforritun/vef2-2019-v5), sett fyrir 9. mars, skilist 22. mars
* [Verkefni 6](https://github.com/vefforritun/vef2-2019-v6), sett fyrir 23. mars, skilist 5. apríl

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
