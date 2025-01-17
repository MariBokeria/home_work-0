function isSortedAndHow(array) {
    // Check if the array is sorted in ascending order
    const isAscending = array.every((val, i, arr) => i === 0 || arr[i - 1] <= val);
    
    // Check if the array is sorted in descending order
    const isDescending = array.every((val, i, arr) => i === 0 || arr[i - 1] >= val);

    // Return the appropriate result
    if (isAscending) {
        return "yes, ascending";
    } else if (isDescending) {
        return "yes, descending";
    } else {
        return "no";
    }
}

// Test cases
console.log(isSortedAndHow([1, 2, 3, 4]));       // "yes, ascending"
console.log(isSortedAndHow([4, 3, 2, 1]));       // "yes, descending"
console.log(isSortedAndHow([1, 3, 2, 4]));       // "no"
console.log(isSortedAndHow([10, 10, 10]));       // "yes, ascending"
console.log(isSortedAndHow([100, 50, 20, 10]));  // "yes, descending"
