// Declare a tuple type
let x: [string, number, boolean];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
x[3] = 'world';
console.log(x[5].toString());
x[6] = true;

// document.body.innerHTML = greeter(user);

function n1(): never {
    throw new Error('ssss')
}

let n2: void = null;
let n3: any = null;
let n4: null = null;
let n5: undefined = null;

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

let someValue: number = 1;

let strLength: number = (<string>someValue).length;

interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime:string;
    constructor(h: number, m: number) { }
}

function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}