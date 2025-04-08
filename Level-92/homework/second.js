function compareNumbers(num1, num2) {
    console.log(
      num1 > num2 ? `${num1} მეტია` :
      num2 > num1 ? `${num2} მეტია` :
      "Equal"
    );
  }
  
  // გამოყენება:
  compareNumbers(10, 5);  // 10 მეტია
  compareNumbers(3, 9);   // 9 მეტია
  compareNumbers(7, 7);   // Equal
  