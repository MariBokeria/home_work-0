function roundToNextZero(number) {
    while (number % 10 !== 0) {
        number += 1;
    }
    return number;
}

// მაგალითი
console.log(roundToNextZero(156));   // Output: 200
console.log(roundToNextZero(5678));  // Output: 6000
