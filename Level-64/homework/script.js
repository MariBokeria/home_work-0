// 1

function shouldTakeTest(scores, writers) {
    return scores.some(score => score >= 60) || writers.some(writer => writer >= 2);
}

// Test
console.log(shouldTakeTest([50, 40], [1, 3])); // true
console.log(shouldTakeTest([30, 40], [1, 1])); // false

// 2

function canGoOutside(weather, timeAvailable, isReady) {
    return (weather === "good" || timeAvailable >= 30) && isReady;
}

// Test
console.log(canGoOutside("good", 20, true)); // true
console.log(canGoOutside("bad", 40, true)); // true
console.log(canGoOutside("bad", 20, false)); // false


// 3


function shouldMove(barrier, spaceAvailable, signal) {
    return !barrier && spaceAvailable || signal;
}

// Test
console.log(shouldMove(false, true, false)); // true
console.log(shouldMove(true, false, true)); // true
console.log(shouldMove(true, false, false)); // false


// 4

function shouldPickUpItem(isAvailable, isAllowed, isWantedByOthers) {
    return (isAvailable && isAllowed) || !isWantedByOthers;
}

// Test
console.log(shouldPickUpItem(true, false, false)); // true
console.log(shouldPickUpItem(false, false, true)); // false

// 5


function shouldRecallInfo(isRelevant, isStillNeeded, timeAvailable) {
    return (isRelevant || isStillNeeded) && timeAvailable > 0;
}

// Test
console.log(shouldRecallInfo(true, false, 10)); // true
console.log(shouldRecallInfo(false, false, 5)); // false


// 6

function shouldSleep(isLate, isTired, earlyMorning, lightsOff) {
    return (isLate && isTired) || (earlyMorning && lightsOff);
}

// Test
console.log(shouldSleep(true, true, false, false)); // true
console.log(shouldSleep(false, false, true, true)); // true


// 7

function shouldGoToParty(friendsAgree, noWorkTomorrow, isNearby) {
    return (friendsAgree && noWorkTomorrow) || isNearby;
}

// Test
console.log(shouldGoToParty(true, true, false)); // true
console.log(shouldGoToParty(false, false, true)); // true


// 8


function shouldStayHome(weather, plans) {
    return (weather === "rainy" || weather === "snowy") && !plans;
}

// Test
console.log(shouldStayHome("rainy", false)); // true
console.log(shouldStayHome("sunny", false)); // false

// 9


function shouldGoRunning(weather, shoesAvailable, friendReady) {
    return (weather === "dry" && shoesAvailable) || friendReady;
}

// Test
console.log(shouldGoRunning("dry", true, false)); // true
console.log(shouldGoRunning("wet", false, true)); // true


// 10


function shouldWatchFootball(day, isFavoriteTeam, noOtherTasks) {
    return ((day === "Saturday" || day === "Sunday") && noOtherTasks) || isFavoriteTeam;
}

// Test
console.log(shouldWatchFootball("Saturday", true, false)); // true
console.log(shouldWatchFootball("Monday", false, true)); // false
