function დააყენეგამოსაღვიძებელი(დასაქმებული, შვებულება) {
    return დასაქმებული && !შვებულება;
}

// გამოყენების მაგალითები:
console.log(დააყენეგამოსაღვიძებელი(true, true));   // false
console.log(დააყენეგამოსაღვიძებელი(true, false));  // true
console.log(დააყენეგამოსაღვიძებელი(false, true));  // false
console.log(დააყენეგამოსაღვიძებელი(false, false)); // false
