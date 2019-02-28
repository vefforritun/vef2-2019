/*
Keyrt með:
node 04.headers.js

Meðan í öðru terminal er keyrt:
node server.js

Útbýr custom request með header og sendir á server sem svarar með hvort header
hafi verið settur eða ekki.
*/
require('isomorphic-fetch');

const API_URL = 'http://localhost:5000';

async function post() {
  const options = {
    headers: { 'X-oli': 'Hææ' },
    method: 'GET',
  };

  const url = new URL('/headers', API_URL).href;
  const response = await fetch(url, options);
  const text = await response.text();
  console.log('Response', text);
}

post().catch(err => console.error(err));
