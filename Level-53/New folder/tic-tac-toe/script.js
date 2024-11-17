const board = document.getElementById('board');
const statusDiv = document.getElementById('status');
const restartBtn = document.getElementById('restart');

let currentPlayer = 'X';
let gameActive = true;
let gameState = Array(9).fill(null);

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// სათამაშო დაფის შექმნა
function createBoard() {
    board.innerHTML = '';
    gameState = Array(9).fill(null);
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        board.appendChild(cell);
    }
    statusDiv.textContent = `Player ${currentPlayer}'s turn`;
    gameActive = true;
}

// მოგების შემოწმება
function checkWinner() {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            return gameState[a];
        }
    }
    if (!gameState.includes(null)) {
        return 'Tie';
    }
    return null;
}

// უჯრაზე კლიკი
function handleCellClick(e) {
    const cell = e.target;
    const index = cell.dataset.index;

    if (gameState[index] || !gameActive) return;

    gameState[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add('taken');

    const winner = checkWinner();
    if (winner) {
        endGame(winner);
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDiv.textContent = `Player ${currentPlayer}'s turn`;

    if (currentPlayer === 'O') {
        setTimeout(makeAIMove, 500);
    }
}

// ხელოვნური ინტელექტის სვლა
function makeAIMove() {
    const emptyCells = gameState
        .map((cell, index) => (cell === null ? index : null))
        .filter((index) => index !== null);

    if (emptyCells.length === 0 || !gameActive) return;

    const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    gameState[randomIndex] = 'O';

    const cell = board.children[randomIndex];
    cell.textContent = 'O';
    cell.classList.add('taken');

    const winner = checkWinner();
    if (winner) {
        endGame(winner);
        return;
    }

    currentPlayer = 'X';
    statusDiv.textContent = `Player ${currentPlayer}'s turn`;
}

// თამაშის დასრულება
function endGame(winner) {
    gameActive = false;

    if (winner === 'Tie') {
        statusDiv.textContent = "It's a tie!";
        Array.from(board.children).forEach((cell) => cell.classList.add('loser'));
    } else {
        statusDiv.textContent = `Player ${winner} wins!`;
        const winnerClass = winner === 'X' ? 'winner' : 'loser';
        Array.from(board.children).forEach((cell, index) => {
            if (gameState[index] === winner) {
                cell.classList.add(winnerClass);
            }
        });
    }
}

// თამაში თავიდან
function restartGame() {
    currentPlayer = 'X';
    createBoard();
}

// ინიციალიზაცია
board.addEventListener('click', handleCellClick);
restartBtn.addEventListener('click', restartGame);

createBoard();
