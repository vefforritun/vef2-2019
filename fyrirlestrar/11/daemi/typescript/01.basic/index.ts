function greet(name: string) {
  return `hello, ${name}`;
}

const worldGreeting = greet('world');
const greeting = greet('óli');

console.log(worldGreeting);
console.log(greeting);

function add(x: number, y: number): number {
  return x + y;
}

function sum(...nums: number[]): number {
  return nums.reduce((x, y) => x + y, 0);
}

const result: number = add(1, 2);
const summed: number = sum(1, 2, 3, 4);

console.log(result);
console.log(summed);
