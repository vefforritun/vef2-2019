/*
Keyrt með t.d.
node 05.args.js hallo heimur

Skrifar út fylki af strengjum sem segja til um hvernig kallað var í forrit, t.d.
[
  '/bin/node',
  '/Users/foo/daemi/args.js',
  'hallo',
  'heimur'
]

Forrit hættir með villukóða "1", getum séð í skel með
> echo $?
1
*/

console.log(process.argv);

process.exit(1);
