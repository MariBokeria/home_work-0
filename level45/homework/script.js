// ჩვეულებრივი ფუნქცია - აბრუნებს მნიშვნელობას
function convertMinutesToSeconds(minutes) {
    return minutes * 60;
}

// გამოსაყენებლად:
console.log(convertMinutesToSeconds(5));  // შედეგი: 300


function multiplySumByThird(num1, num2, num3) {
    return (num1 + num2) * num3;
}

console.log(multiplySumByThird(2, 3, 4));  // შედეგი: 20



function isFirstGreaterThanSecond(num1, num2) {
    return num1 > num2;
}

console.log(isFirstGreaterThanSecond(10, 5));  // შედეგი: true
console.log(isFirstGreaterThanSecond(5, 10));  // შედეგი: false


// ვოიდ ფუნქცია - არაფერს აბრუნებს
function printElement(element) {
    console.log("Element:", element);
}

printElement("Header");

// ვოიდ ფუნქცია - არაფერს აბრუნებს
function insertTextById(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    }
}

// გამოსაყენებლად HTML-ში:
