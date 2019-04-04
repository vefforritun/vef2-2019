function greet(name) {
    return "hello, " + name;
}
var worldGreeting = greet('world');
var greeting = greet('óli');
console.log(worldGreeting);
console.log(greeting);
function add(x, y) {
    return x + y;
}
function sum() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (x, y) { return x + y; }, 0);
}
var result = add(1, 2);
var summed = sum(1, 2, 3, 4);
console.log(result);
console.log(summed);
