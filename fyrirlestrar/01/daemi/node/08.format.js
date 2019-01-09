/*
Keyrt með:
node 08.format.js

Skilar formuðum gögnum með newline á milli:
halló heimur
123
123.456
{"foo":"bar","baz":"halló heimur"}
{ foo: 'bar', baz: 'halló heimur' }

%s – strengur
%i – integer
%f – floating point
%j – JSON
%o – Object

Sjá nánar https://nodejs.org/api/util.html#util_util_format_format_args
*/

const util = require('util');

const string = 'halló heimur';
const num = 123.456;
const obj = { foo: 'bar', baz: string };

const formatted = util.format(
  '%s\n%i\n%f\n%j\n%o',
  string, num, num, obj, obj,
);
console.log(formatted);
