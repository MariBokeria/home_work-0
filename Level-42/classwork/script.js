1

function sum(a, b) {
    return a + b;
}

// 1 ტესტი:
console.log(sum(5, 10)); // 15

2


function greet(name) {
    return `Hello, ${name}!`;
}

// 2 ტესტი:
console.log(greet("John")); // Hello, John!

 3

function randomNumber() {
    return Math.random();
}

// 3 ტესტი:
console.log(randomNumber()); // რიცხვი 0 და 1-ს შორის

4

function multiply(a, b, c) {
    return a * b * c;
}

// 4 ტესტი:
console.log(multiply(2, 3, 4)); // 24

5 


function greetWithDefault(name = "Stranger") {
    return `Hello, ${name}!`;
}

// 5 ტესტი:
console.log(greetWithDefault()); // Hello, Stranger!
console.log(greetWithDefault("Anna")); // Hello, Anna!

6 

function square(x) {
    return x * x;
}

let result = square(5);

// 6 ტესტი:
console.log(result); // 25

7

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

// 7 ტესტი:
console.log(capitalize("hello")); // Hello

8 

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

// 8 ტესტი:
console.log(capitalize("hello")); // Hello


9

function add(a, b) {
    return a + b;
}

function doubleAdd(a, b) {
    return add(a, a) + add(b, b);
}

// 9 ტესტი:
console.log(doubleAdd(3, 4)); // 14

10

function isEven(num) {
    return num % 2 === 0;
}

// 10 ტესტი:
console.log(isEven(4)); // true
console.log(isEven(5)); // false
    

