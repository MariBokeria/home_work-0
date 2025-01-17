function matchMyHusband(usefulness, months) {
    // Calculate the husband's usefulness
    const totalUsefulness = usefulness.reduce((sum, ability) => sum + ability, 0);

    // Calculate the woman's needs after exponential decay
    const initialNeeds = 100;
    const decayRate = 0.15; // 15% decay rate
    const needs = initialNeeds * Math.pow(1 - decayRate, months);

    // Determine if there is a match
    return totalUsefulness >= needs ? "Match!" : "No match!";
}

// Test cases
console.log(matchMyHusband([15, 26, 19], 0));  // "No match!" (usefulness = 60, needs = 100)
console.log(matchMyHusband([50, 30, 30], 0));  // "Match!" (usefulness = 110, needs = 100)
console.log(matchMyHusband([15, 26, 19], 6));  // "Match!" (usefulness = 60, needs = ~44.35)
console.log(matchMyHusband([10, 10, 10], 12)); // "No match!" (usefulness = 30, needs = ~13.22)
console.log(matchMyHusband([50, 50, 50], 1));  // "Match!" (usefulness = 150, needs = ~85)
