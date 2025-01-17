// Input variables
const A = 1; // True
const B = 0; // False
const C = 0; // False

// Expressions to test
const expressions = {
    a: (A && !B) || (B && !A),
    b: (B && C) && (A || B),
    g: (A && !C) || (B && !A) || (B && !C),
};

// Output the results
for (const [key, expression] of Object.entries(expressions)) {
    console.log(`Expression ${key}:`, expression ? "True" : "False");
}