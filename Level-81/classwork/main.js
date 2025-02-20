function bonusTime(salary, bonus) {
    return `£${bonus ? salary * 10 : salary}`;
}

// გამოყენების მაგალითი:
console.log(bonusTime(5000, true));  // გამოსავალი: "£50000"
console.log(bonusTime(3000, false)); // გამოსავალი: "£3000"
