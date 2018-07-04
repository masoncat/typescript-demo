// Declare a tuple type
var x;
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
x[3] = 'world';
console.log(x[5].toString());
x[6] = true;
// document.body.innerHTML = greeter(user);
function n1() {
    throw new Error('ssss');
}
var n2 = null;
var n3 = null;
var n4 = null;
var n5 = null;
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
var someValue = 1;
var strLength = someValue.length;
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    return Clock;
}());
