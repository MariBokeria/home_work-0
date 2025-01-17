
function shouldWatchFootball(day, isFavoriteTeam, noOtherTasks) {
    return ((day === "Saturday" || day === "Sunday") && noOtherTasks) || isFavoriteTeam;
}

// Test
console.log(shouldWatchFootball("Saturday", true, false)); // true
console.log(shouldWatchFootball("Monday", false, true)); // false
