// Find the image and buttons
const image = document.getElementById('myImage');
const changeButton = document.getElementById('changeButton');
const resetButton = document.getElementById('resetButton');

// Define the image sources
const initialImage = 'image1.jpg'; // Replace with your initial image path
const newImage = 'image2.jpg';    // Replace with your new image path

// Change the image on "Change Image" button click
changeButton.addEventListener('click', () => {
    image.src = newImage;
});

// Reset the image on "Reset Image" button click
resetButton.addEventListener('click', () => {
    image.src = initialImage;
});
