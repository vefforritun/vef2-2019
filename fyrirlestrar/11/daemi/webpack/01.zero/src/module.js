export default function calculate(a, b) {
  return a * b;
}

export function foo(bar) {
  return bar + calculate(bar, 10);
}
