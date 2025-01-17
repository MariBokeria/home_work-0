function printMatrix(matrix) {
    const n = matrix.length;

    // Print rows
    console.log("Rows:");
    for (let i = 0; i < n; i++) {
        console.log(matrix[i]);
    }

    // Print columns
    console.log("Columns:");
    for (let j = 0; j < n; j++) {
        const column = [];
        for (let i = 0; i < n; i++) {
            column.push(matrix[i][j]);
        }
        console.log(column);
    }

    // Print diagonals
    console.log("Diagonals:");
    const mainDiagonal = [];
    const antiDiagonal = [];
    for (let i = 0; i < n; i++) {
        mainDiagonal.push(matrix[i][i]);
        antiDiagonal.push(matrix[i][n - i - 1]);
    }
    console.log("Main diagonal:", mainDiagonal);
    console.log("Anti diagonal:", antiDiagonal);
}

// Test case
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

printMatrix(matrix);
