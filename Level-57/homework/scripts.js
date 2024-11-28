const resultInput = document.getElementById('result');
let currentValue = '';
let operation = '';
let previousValue = '';

document.querySelector('.keypad').addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return;

    const button = e.target.textContent;

    if (!isNaN(button) || button === '.') {
        currentValue += button;
        resultInput.value = currentValue;
    } else if (button === 'DEL') {
        currentValue = currentValue.slice(0, -1) || '0';
        resultInput.value = currentValue;
    } else if (button === 'RESET') {
        currentValue = '';
        previousValue = '';
        operation = '';
        resultInput.value = '0';
    } else if (button === '=') {
        if (currentValue && previousValue && operation) {
            currentValue = eval(`${previousValue}${operation}${currentValue}`);
            resultInput.value = currentValue;
            previousValue = '';
            operation = '';
        }
    } else {
        if (currentValue) {
            previousValue = currentValue;
            operation = button;
            currentValue = '';
        }
    }
});
