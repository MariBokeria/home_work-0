// Find the paragraph and button elements
const paragraph = document.getElementById('myParagraph');
const button = document.getElementById('changeButton');

// Add an event listener to the button
button.addEventListener('click', () => {
    // Change the text content of the paragraph
    paragraph.textContent = "This is the new text!";

    // Change the color of the paragraph
    paragraph.style.color = "blue";
});
