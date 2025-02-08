function getLengths(matrix) {
    // გამოიყენეთ map() რათა გადავახვიდეთ თითოეულ ელემენტზე და დავუბრუნოთ მისი სიგრძე
    return matrix.map(row => row.length);
  }
  
  // ტესტი
  console.log(getLengths([[1, 2, 3], [4, 5], [6]]));  // [3, 2, 1]
  console.log(getLengths([['a', 'b', 'c'], ['d', 'e'], ['f', 'g', 'h']]));  // [3, 2, 3]
  