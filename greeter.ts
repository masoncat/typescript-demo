// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
x[3] = 'world';
console.log(x[5].toString());
x[6] = true;

// document.body.innerHTML = greeter(user);