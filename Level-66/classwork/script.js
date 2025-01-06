function filterEvenNumbers(matrix) {
    // ახალი მასივის შექმნა, სადაც ყველა ლუწი რიცხვი იქნება
    return matrix.map(row => row.filter(num => num % 2 === 0));
}


// მაგალითი 2D მასივით
const inputMatrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

// ფუნქციის გამოძახება
const result = filterEvenNumbers(inputMatrix);

// შედეგის ბეჭდვა
console.log(result);
