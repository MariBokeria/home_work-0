function sumDigits(num) {
    let sum = 0;
    
    while (num !== 0) {
      sum += num % 10;  // ვიღებთ ბოლო ციფრს
      num = Math.floor(num / 10);  // ვშლით ბოლო ციფრს
    }
    
    return Math.abs(sum); // უარყოფითი რიცხვის შემთხვევაში ვაბრუნებთ დადებით ჯამს
  }
  
  // ტესტის მაგალითები:
  console.log(sumDigits(12345));   // 15 (1 + 2 + 3 + 4 + 5)
  console.log(sumDigits(-9876));   // 30 (9 + 8 + 7 + 6)
  console.log(sumDigits(0));       // 0
  