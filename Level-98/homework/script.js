function sharePrice(invested, changes) {
    // გამოვთვალოთ საბოლოო ფასი რედუქციის (reduce) გამოყენებით
    const finalPrice = changes.reduce((currentPrice, change) => {
      // ყოველი დღიური პროცენტული ცვლილება უნდა გადავიტანოთ ფასზე
      return currentPrice * (1 + change / 100);
    }, invested);
  
    // დავაბრუნოთ ორი ათწილადი რიცხვით და სტრინგის სახით
    return finalPrice.toFixed(2);
  }
  