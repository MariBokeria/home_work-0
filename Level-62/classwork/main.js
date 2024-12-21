// 1
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Test
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));


// 2
function nonMatchingElements(arr1, arr2) {
    return arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
}

// Test
console.log(nonMatchingElements([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [1, 2, 5, 6]


// 3
function removeElements(arr1, arr2) {
    return arr1.filter(x => !arr2.includes(x));
}

// Test
console.log(removeElements([1, 2, 3, 4], [2, 4])); // Output: [1, 3]



