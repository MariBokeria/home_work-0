function sumMix(arr) {
    return arr.reduce((sum, num) => sum + Number(num), 0);
}

// გამოყენების მაგალითი:
console.log(sumMix([9, 3, '7', '3'])); // გამოსავალი: 22
console.log(sumMix(['5', '10', 15, 20])); // გამოსავალი: 50
console.log(sumMix([0, '0', 1, '1'])); // გამოსავალი: 2
