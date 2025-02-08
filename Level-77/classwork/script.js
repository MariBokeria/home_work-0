function countPoints(matches) {
    let totalPoints = 0;

    for (let match of matches) {
        let [x, y] = match.split(':').map(Number); // ვყოფთ x და y-ს და ვაკეთებთ რიცხვებად
        if (x > y) totalPoints += 3; // გამარჯვება
        else if (x === y) totalPoints += 1; // ფრე
    }

    return totalPoints;
}

// მაგალითი გამოყენება
const matchResults = ["3:1", "2:2", "0:1", "4:0", "1:1", "2:0", "3:3", "1:2", "0:0", "2:1"];
console.log(countPoints(matchResults)); // მოსალოდნელი შედეგი: 17
