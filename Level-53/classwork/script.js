function welcomeUser(name, age = 18) {
    return `Name: ${name}, Age: ${age}`;
}

// ტესტები
console.log(welcomeUser("Ana"));       // Name: Ana, Age: 18
console.log(welcomeUser("Nika", 25)); // Name: Nika, Age: 25
