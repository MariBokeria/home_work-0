function determineWinner(player1Move, player2Move) {
    const moves = ["rock", "paper", "scissors"];
    if (!moves.includes(player1Move) || !moves.includes(player2Move)) {
        return "Invalid input!";
    }

    if (player1Move === player2Move) {
        return "It's a draw!";
    }

    if (
        (player1Move === "rock" && player2Move === "scissors") ||
        (player1Move === "scissors" && player2Move === "paper") ||
        (player1Move === "paper" && player2Move === "rock")
    ) {
        return "Player 1 wins!";
    } else {
        return "Player 2 wins!";
    }
}

// Test
console.log(determineWinner("rock", "scissors")); // Output: Player 1 wins!
console.log(determineWinner("paper", "rock"));    // Output: Player 1 wins!
console.log(determineWinner("scissors", "rock")); // Output: Player 2 wins!
console.log(determineWinner("rock", "rock"));     // Output: It's a draw!
