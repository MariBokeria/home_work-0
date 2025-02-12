function sumOfDigits(num) {
    let sum = 0;
  
    while (num !== 0) {
      sum += num % 10;  // ბოლო ციფრი
      num = Math.floor(num / 10);  // ბოლო ციფრის წაშლა
    }
  
    return sum;
  }
  
  // ტესტის მაგალითები
  console.log(sumOfDigits(123));  // 6 (1 + 2 + 3)
  console.log(sumOfDigits(987));  // 24 (9 + 8 + 7)
  