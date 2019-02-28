/*
Keyrt með:
node 01.get.js

Meðan í öðru terminal er keyrt:
node server.js

Framkvæmir POST á server með gögnum sem server grípur og setur saman í streng
sem skilað er.
*/
require('isomorphic-fetch');

const API_URL = 'http://localhost:5000';

async function post() {
  const data = { foo: 'hér er foo', bar: 'foobar' };

  const options = {
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
  };

  const url = new URL('/post', API_URL).href;
  const response = await fetch(url, options);
  const text = await response.text();
  console.log(`Response = ${text}`);
}

post().catch(err => console.error(err));
