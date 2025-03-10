// ფუნქცია, რომელიც აბრუნებს შემთხვევით ფერს
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// ყველა div-ის წვდომა მათი class-ის გამოყენებით
let boxes = document.getElementsByClassName("box");

// თითოეული div-ის სტილის შეცვლა
for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i];

    box.style.backgroundColor = getRandomColor(); // შემთხვევითი ფონი
    box.style.color = "white"; // ტექსტის ფერი
    box.style.fontSize = (10 + i * 2) + "px"; // ტექსტის ზომა (ზრდადი)
    box.style.borderRadius = (i * 5) + "px"; // კუთხეების მომრგვალება
    box.style.transform = `rotate(${i * 5}deg)`; // მცირე ბრუნვა ვიზუალური ეფექტისთვის
}
