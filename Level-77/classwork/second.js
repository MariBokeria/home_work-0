function getGrade(score1, score2, score3) {
    let average = (score1 + score2 + score3) / 3;

    if (average >= 90) return 'A';
    if (average >= 80) return 'B';
    if (average >= 70) return 'C';
    if (average >= 60) return 'D';
    return 'F';
}

// მაგალითი გამოყენება
console.log(getGrade(95, 90, 93)); // 'A'
console.log(getGrade(85, 87, 89)); // 'B'
console.log(getGrade(70, 75, 72)); // 'C'
console.log(getGrade(60, 65, 63)); // 'D'
console.log(getGrade(50, 55, 58)); // 'F'
