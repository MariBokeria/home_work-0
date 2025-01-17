function generate2DArray(rows, columns) {
    const result = [];
    let currentNumber = 1;

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            row.push(currentNumber++);
        }
        result.push(row);
    }

    return result;
}

// Test cases
console.log(generate2DArray(2, 2)); // [[1, 2], [3, 4]]
console.log(generate2DArray(3, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(generate2DArray(1, 4)); // [[1, 2, 3, 4]]
console.log(generate2DArray(4, 1)); // [[1], [2], [3], [4]]
