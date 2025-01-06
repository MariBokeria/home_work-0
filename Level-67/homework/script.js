function digitalRoot(n) {
    // Recursively sum digits until a single digit is produced
    while (n >= 10) {
        n = n.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
    }
    return n;
}


console.log(digitalRoot(16));      // Output: 7
console.log(digitalRoot(942));     // Output: 6
console.log(digitalRoot(132189));  // Output: 6
console.log(digitalRoot(493193));  // Output: 2


function digitalRoot(n) {
    return (n - 1) % 9 + 1;
}


console.log(digitalRoot(16));      // Output: 7
console.log(digitalRoot(942));     // Output: 6
console.log(digitalRoot(132189));  // Output: 6
console.log(digitalRoot(493193));  // Output: 2
