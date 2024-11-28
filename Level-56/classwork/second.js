// Get references to the input fields and button
const ageInput = document.getElementById('age');
const experienceInput = document.getElementById('experience');
const submitButton = document.getElementById('submitButton');

// Add an event listener to the submit button
submitButton.addEventListener('click', () => {
    // Get the values entered by the user
    const age = parseInt(ageInput.value);
    const experience = parseInt(experienceInput.value);

    // Validate the inputs
    if (isNaN(age) || isNaN(experience)) {
        console.log("Please enter valid numbers for age and experience.");
        return;
    }

    // Check the conditions
    if (age > 25 && experience > 5) {
        console.log("You are accepted for the job.");
    } else {
        console.log("You are not accepted for the job.");
    }
});
