/*
Keyrt með:
node 03.json.js

Meðan í öðru terminal er keyrt:
node server.js

Framkvæmir GET á server og skilar JSON gögnum. Ath að ekkert þarf að kalla í
`JSON.parse`.
*/
require('isomorphic-fetch');

const API_URL = 'http://localhost:5000';

async function get() {
  const url = new URL('/json', API_URL).href;
  const response = await fetch(url);
  console.log('GET response status', response.status);
  const text = await response.json();
  console.log('GET response json', text);
}

get().catch(err => console.error(err));
