let counter = 0;

const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

function updateCounter() {
    counterElement.textContent = counter;
    if (counter === 0) {
        counterElement.classList.add('red');
    } else {
        counterElement.classList.remove('red');
    }
}

incrementButton.addEventListener('click', () => {
    if (counter < 100) {
        counter++;
        updateCounter();
    } else {
        alert("You cannot exceed 100!");
    }
});

decrementButton.addEventListener('click', () => {
    if (counter > -100) {
        counter--;
        updateCounter();
    } else {
        alert("You cannot go below -100!");
    }
});

resetButton.addEventListener('click', () => {
    if (counter === 0) {
        alert("Counter is already at 0. You cannot reset!");
    } else {
        counter = 0;
        updateCounter();
    }
});

updateCounter();
