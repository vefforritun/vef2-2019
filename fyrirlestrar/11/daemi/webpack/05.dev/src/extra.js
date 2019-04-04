console.log('extra');

function bar() {
  console.log('bar');
}

function foo() {
  console.log('foo');
  bar();
}

foo();
