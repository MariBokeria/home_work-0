function countArea(...args) {
    if (args.length === 2) {
        // მართკუთხედის ფართობის გამოთვლა
        const [length, width] = args;
        return length * width;
    } else if (args.length === 1) {
        // წრის ფართობის გამოთვლა
        const [radius] = args;
        return Math.PI * Math.pow(radius, 2);
    } else if (args.length === 3) {
        // სამკუთხედის ფართობის გამოთვლა ჰერონის ფორმულის მიხედვით
        const [a, b, c] = args;
        const s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    } else {
        return "არასწორი რაოდენობის პარამეტრები!";
    }
}

// ტესტის შემთხვევები
console.log(countArea(5, 10));         // მართკუთხედი: 50
console.log(countArea(7));              // წრე: 153.93804002589985 (დაახლ. 154)
console.log(countArea(3, 4, 5));        // სამკუთხედი: 6
console.log(countArea(3));              // "არასწორი რაოდენობის პარამეტრები!"
