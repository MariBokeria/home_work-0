function number(lines) {
    return lines.map((line, index) => `${index + 1}: ${line}`);
}

// გამოყენების მაგალითი:
console.log(number([])); // გამოსავალი: []
console.log(number(["a", "b", "c"])); // გამოსავალი: ["1: a", "2: b", "3: c"]
