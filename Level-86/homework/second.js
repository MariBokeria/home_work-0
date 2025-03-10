// ფუნქცია, რომელიც ქმნის შემთხვევით ფერს
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 10 div ელემენტის სტილის განახლება
for (let i = 1; i <= 10; i++) {
    let box = document.getElementById("box" + i);

    // შემთხვევითი ფონის დანიშვნა
    box.style.backgroundColor = getRandomColor();
    // ტექსტის ფერის შეცვლა
    box.style.color = "white";
    // ტექსტის ზომის გაზრდა
    box.style.fontSize = (12 + i * 2) + "px"; // თითოეული div-ის ზომა იზრდება
    // კუთხეების მომრგვალება
    box.style.borderRadius = (i * 5) + "px";
    // ელემენტის ბრუნვა
    box.style.transform = `rotate(${i * 5}deg)`; // ელემენტების ბრუნვა
}
