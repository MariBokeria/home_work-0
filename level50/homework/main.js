function addText() {
    const textInput = document.getElementById("textInput").value;
    document.getElementById("output").innerText = textInput;
}

function changeColor() {
    const colorInput = document.getElementById("colorInput").value;
    document.getElementById("output").style.color = colorInput;
}

function changeFontSize() {
    const sizeInput = document.getElementById("sizeInput").value;
    document.getElementById("output").style.fontSize = sizeInput + "px";
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
}
