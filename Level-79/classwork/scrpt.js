function isFlush(cards) {
    // ვიღებთ თითოეული ბარათის ბოლო სიმბოლოს (ბარათის მასტს)
    const suits = cards.map(card => card.slice(-1));
    // ვამოწმებთ, ყველა მასტი ერთნაირია თუ არა
    return new Set(suits).size === 1;
  }
  
  // ტესტის მაგალითები
  console.log(isFlush(["AS", "3S", "9S", "KS", "4S"]));  // true (ყველა მასტი "S" ანუ Spades-ია)
  console.log(isFlush(["AD", "4S", "7H", "KS", "10S"])); // false (მასტები განსხვავებულია)
  