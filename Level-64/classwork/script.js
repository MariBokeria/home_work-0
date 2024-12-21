function checkNumbers(num1, num2) {
    return (num1 % 2 !== 0 && num1 > num2) || (num2 % 2 === 0);
}

// Test Cases
console.log(checkNumbers(5, 2)); // true (num1 is odd and greater than num2)
console.log(checkNumbers(4, 6)); // true (num2 is even)
console.log(checkNumbers(3, 1)); // true (num1 is odd and greater than num2)
console.log(checkNumbers(7, 9)); // false (none of the conditions met)
