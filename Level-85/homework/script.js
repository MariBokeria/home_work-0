// 1. getElementById - ID-ს მიხედვით ელემენტის წვდომა
let title = document.getElementById("title");
console.log(title.innerText);

// 2. getElementsByClassName - კლასის მიხედვით ელემენტების წვდომა
let paragraphs = document.getElementsByClassName("paragraph");
for (let para of paragraphs) {
    console.log(para.innerText);
}

// 3. getElementsByTagName - ტეგის მიხედვით ელემენტების წვდომა
let divs = document.getElementsByTagName("div");
for (let div of divs) {
    console.log(div.innerText);
}

// 4. innerHTML - ელემენტის შიგთავსის შეცვლა
let textElement = document.getElementById("text");
textElement.innerHTML = "ახალი ტექსტი";

// 5. style - ელემენტის სტილის შეცვლა
let button = document.getElementById("changeStyle");
button.addEventListener("click", function() {
    textElement.style.color = "red";
    textElement.style.fontSize = "20px";
    textElement.style.fontWeight = "bold";
});
