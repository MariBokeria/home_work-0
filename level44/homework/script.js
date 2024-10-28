function getElementById(id) {
    return document.getElementById(id);
}

function modifyElementAttributes(id) {
    const element = getElementById(id);
    if (element) {
        element.style.color = "red";
        element.style.backgroundColor = "yellow";
        element.textContent = "Modified Content";
    }
}
