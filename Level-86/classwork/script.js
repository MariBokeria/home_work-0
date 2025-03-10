// ვიღებთ ყველა div ელემენტს
let boxes = document.getElementsByClassName("box");

// ვხსნით თითოეულ div-ში არსებულ p ელემენტებს
for (let i = 0; i < boxes.length; i++) {
    let paragraphs = boxes[i].getElementsByTagName("p");

    // თითოეულ p ელემენტზე ვცვლით ფონტის ზომას
    for (let j = 0; j < paragraphs.length; j++) {
        paragraphs[j].style.fontSize = "3px";
    }
}
