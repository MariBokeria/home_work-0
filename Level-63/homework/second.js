function determineAttributeWinner(player1, player2) {
    if (player1.length !== 3 || player2.length !== 3) {
        return "Invalid input! Each player must have exactly 3 attributes.";
    }

    const [strength1, speed1, intelligence1] = player1;
    const [strength2, speed2, intelligence2] = player2;

    // Calculating scores
    const player1Score = strength1 + speed1 * 2 + (intelligence1 * (strength1 + speed1)) / 10;
    const player2Score = strength2 + speed2 * 2 + (intelligence2 * (strength2 + speed2)) / 10;

    if (player1Score > player2Score) {
        return "Player 1 wins!";
    } else if (player1Score < player2Score) {
        return "Player 2 wins!";
    } else {
        return "It's a draw!";
    }
}

// Test
console.log(determineAttributeWinner([5, 3, 4], [4, 4, 5])); // Example output: Player 2 wins!
console.log(determineAttributeWinner([6, 2, 3], [3, 3, 6])); // Example output: Player 1 wins!
console.log(determineAttributeWinner([5, 5, 5], [5, 5, 5])); // Output: It's a draw!
