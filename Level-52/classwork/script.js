function smaller(arr) {
    return arr.map((num, i) => arr.slice(i + 1).filter(x => x < num).length);
}

// Test Cases
console.log(smaller([5, 4, 3, 2, 1])); // Output: [4, 3, 2, 1, 0]
console.log(smaller([1, 2, 0]));       // Output: [1, 1, 0]
console.log(smaller([3, 8, 4, 1]));   // Output: [2, 2, 1, 0]
console.log(smaller([]));             // Output: []
console.log(smaller([1]));            // Output: [0]
