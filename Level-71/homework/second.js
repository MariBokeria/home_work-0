function sortByIndices(values, indices) {
    // Create a new array by mapping each value to its position from indices
    const sortedArray = Array(values.length);

    for (let i = 0; i < indices.length; i++) {
        sortedArray[indices[i]] = values[i];
    }

    return sortedArray;
}

// Test cases
console.log(sortByIndices(['x', 'y', 'z'], [1, 2, 0])); // ['z', 'x', 'y']
console.log(sortByIndices(['z', 'x', 'y'], [0, 2, 1])); // ['z', 'y', 'x']
console.log(sortByIndices(['a', 'b', 'c'], [2, 0, 1])); // ['b', 'c', 'a']
