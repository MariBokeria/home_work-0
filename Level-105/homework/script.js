var x = 10;

function testVar() {
    var x = 20;
    console.log(x);  // 20, რადგან x მხოლოდ ფუნქციის შიგნით განსაზღვრულია
}

console.log(x);  // 10, რადგან გლობალური x გამოხატავს 10-ს
testVar();





let a = 10;

if (true) {
    let a = 20;
    console.log(a);  // 20, მხოლოდ if ბლოკში
}

console.log(a);  // 10, გლობალური a, რომელიც 10-ს წარმოადგენს







const b = 100;
b = 200;  // Error! Cannot reassign a constant variable



const obj = { name: "John" };
obj.name = "Alice";  // ეს მუშაობს, რადგან ჩვენ ობიექტის შიგნით მნიშვნელობებს ვცვლით
console.log(obj);  // { name: "Alice" }

obj = { name: "Bob" };  // Error! Cannot reassign a constant object





// var example
var x = 5;
if (true) {
    var x = 10; // შეცვლის გლობალური x-ს
}
console.log(x); // 10

// let example
let y = 5;
if (true) {
    let y = 10; // მარტო if ბლოკში
}
console.log(y); // 5

// const example
const z = 5;
z = 10; // Error: Cannot reassign a constant variable


