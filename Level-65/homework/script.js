function likes(names) {
    const count = names.length;

    if (count === 0) {
        return "no one likes this";
    } else if (count === 1) {
        return `${names[0]} likes this`;
    } else if (count === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (count === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
        return `${names[0]}, ${names[1]} and ${count - 2} others like this`;
    }
}

// Test cases
console.log(likes([]));                                // "no one likes this"
console.log(likes(["Peter"]));                       // "Peter likes this"
console.log(likes(["Jacob", "Alex"]));              // "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"]));       // "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // "Alex, Jacob and 2 others like this"
