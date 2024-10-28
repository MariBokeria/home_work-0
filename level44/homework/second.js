function sayHello() {
    console.log("გამარჯობა");
}
sayHello();



function greetByName(name) {
    console.log(`გამარჯობა, ${name}`);
}
greetByName("ლაშა");


function incrementNumber(number) {
    return number + 1;
}
console.log(incrementNumber(55));  // შედეგი: 56


function makeNegative(number) {
    return number > 0 ? -number : number;
}

function printIncrementedNegative(number) {
    const negativeNumber = makeNegative(number);
    console.log(negativeNumber + 1);
}
printIncrementedNegative(44);  // შედეგი: -43
