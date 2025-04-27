function findMissingNumber(arr) {
    // მთელი 0-დან 100-მდე რიცხვების ჯამი შეგვიძლია წინასწარ გამოვთვალოთ
    const expectedSum = (100 * 101) / 2; // არითმეტიკული პროგრესიის ფორმულა
    const actualSum = arr.reduce((sum, num) => sum + num, 0); // რეალური მასივის ჯამი
    
    // განსხვავება არის დაკარგული რიცხვი
    return expectedSum - actualSum;
  }
  