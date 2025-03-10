// ფუნქცია, რომელიც რანდომ ფერებს აბრუნებს
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 10 ელემენტის ID-ების მასივი
let divIds = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9", "box10"];

// თითოეულ div-ს ვანიჭებთ უნიკალურ სტილს
divIds.forEach((id, index) => {
    let element = document.getElementById(id);
    
    element.style.backgroundColor = getRandomColor();
    element.style.color = "white";
    element.style.fontSize = (10 + index * 2) + "px"; // ტექსტის ზომა იზრდება
    element.style.borderRadius = (index * 5) + "px"; // კუთხეების მომრგვალება
});
