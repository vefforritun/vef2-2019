/*
Keyrt með:
node 05.error.js

Meðan í öðru terminal er keyrt:
node server.js

Gerir GET request á server sem svarar með 400 villu.
*/
require('isomorphic-fetch');

const API_URL = 'http://localhost:5000';

async function get() {
  const url = new URL('/error', API_URL).href;
  const response = await fetch(url);
  console.log('GET response status', response.status);
  console.log('Response ok?', response.ok);
  const text = await response.text();
  console.log('GET response text', text);
}

get().catch(err => console.error(err));
