// Að importa svona úr lodash mun skila *öllu* lodash library í bundle
// import { range } from 'lodash';

// Sækjum bara range og þau föll sem range þarf
import range from 'lodash/range';

const calculate = require('./calculate');

// getum blandað saman, en ef við notum default export verðum við að
// sækja það úr `default` ef við notum require
const hello = require('./module').default;

hello('b');
console.log(calculate(10, 10));
console.log(range(1, 10));
