# Síður og Postgres

Sett upp með því að útbúa gagnagrunn, setja gögn í `.env` og keyra `setup.js`.

`setup.js` útbýr 10.000 færslur í gagnagrunni með [faker](https://github.com/Marak/Faker.js)

```bash
npm install
createdb vef2-mock
cp .env_example # eða afrita á annan hátt
node app.js
```

Til að auðkenna þarf að senda `POST` á `http://localhost:3000` með JSON sem inniheldur `username` og `password` fyrir notanda. Ef notandi og lykilorð eru rétt er `jwt token` skilað, annars koma villuskilaboð.

Eftir það er hægt að senda fyrirspurn á `/admin` með token í `Autherization` header sem `Bearer` token.

```bash
curl -H "Content-Type: application/json" -d '{"username": "admin", "password": "123"}' http://localhost:3000/login
{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTUxMjIxODA3LCJleHAiOjE1NTEyMjE4Mjd9.N3yIqdhejRKMyNb31rYWrZRVOg-DBew-0E2n1KHdF5o"}

curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTUxMjIxODU3LCJleHAiOjE1NTEyMjE4Nzd9.SVhW21cjpkO9V3Xe4OwxNxVX6_ns40qu7nBcaeUt9tI" http://localhost:3000/admin
{"data":"top secret"}

# Eftir að token er útrunnin
{"error":"expired token"}
```
