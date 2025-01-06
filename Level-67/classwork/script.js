function catMouse(s) {
    // Count the distance (number of '.' characters)
    const distance = s.split('.').length - 1;
    return distance <= 3 ? "Caught!" : "Escaped!";
}


console.log(catMouse("C.....m")); // Output: "Escaped!"
console.log(catMouse("C...m"));   // Output: "Caught!"
