/*
Keyrt með:
node 01.get.js

Meðan í öðru terminal er keyrt:
node server.js

Framkvæmir GET á server sem svarar með texta og prentar út.
*/
require('isomorphic-fetch');

// Þetta myndum við vilja geyma í umhverfi
const API_URL = 'http://localhost:5000';

async function get() {
  const response = await fetch(API_URL);
  console.log('GET response status', response.status);
  const text = await response.text();
  console.log('GET response text', text);
}

get().catch(err => console.error(err));
