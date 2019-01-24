/*
Keyrt með:
node 05.url.js

Unnið með URL, búinn til URL hlutur og hann prentaður út.

Búinn til URLSearchParams hlutur sem tekur inn querystreng, vinnur með hann og
prentar út sem streng.
*/

const s = 'http://user:pass@www.example.org/a/b?foo=bar&bar=baz#hash';
const url = new URL(s);
console.log(url);

const qs = 'category=teaching&foo=bar';
const params = new URLSearchParams(qs);

params.set('name', 'Óli');
params.delete('foo');

console.log(params.toString());
// category=teaching&nafn=%C3%B3li
