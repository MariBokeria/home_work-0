function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}

// გამოყენების მაგალითი:
console.log(minMax([1, 2, 3, 4, 5]));      // გამოსავალი: [1, 5]
console.log(minMax([2334454, 5]));         // გამოსავალი: [5, 2334454]
console.log(minMax([1]));                  // გამოსავალი: [1, 1]
