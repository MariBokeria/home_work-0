// მომხმარებლისგან ვიღებთ წინადადებას
let sentence = prompt("შეიყვანეთ წინადადება:");

// ვყოფთ წინადადებას სიტყვებად
let words = sentence.split(" ");

// შემოტრიალების პროცესი: თითოეული სიტყვა შემოტრიალდება
let reversedWords = words.map(word => word.split("").reverse().join(""));

// შედეგი: სიტყვები ისევ აერთიანება
let result = reversedWords.join(" ");

// შედეგის გამოტანა
console.log("შედეგი:", result);
