function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log(`${year} - კი (ნაკიანი წელია)`);
    } else {
      console.log(`${year} - არა (ნაკიანი არ არის)`);
      findClosestLeapYear(year);
    }
  }
  
  function findClosestLeapYear(year) {
    let previous = year - 1;
    let next = year + 1;
  
    // პოვნა წინა უახლოესი ნაკიანი წელი
    while (!isLeap(previous)) {
      previous--;
    }
  
    // პოვნა მომდევნო უახლოესი ნაკიანი წელი
    while (!isLeap(next)) {
      next++;
    }
  
    console.log(`უახლოესი ნაკიანი წლებია: ${previous} და ${next}`);
  }
  
  function isLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  
  // ტესტები
  isLeapYear(2100);  // 2100 - არა, უახლოესი ნაკიანი წლებია: 2096 და 2104
  isLeapYear(2104);  // 2104 - კი (ნაკიანი წელია)
  isLeapYear(2400);  // 2400 - კი (ნაკიანი წელია)

  function sumOfDigits(num) {
    let sum = 0;
  
    while (num !== 0) {
      sum += num % 10;  // ბოლო ციფრის მიღება და ჯამში დამატება
      num = Math.floor(num / 10);  // ბოლო ციფრის ამოღება
    }
  
    return sum;
  }
  
  // ტესტები
  console.log(`123-ის ციფრების ჯამი: ${sumOfDigits(123)}`);  // 6 (1 + 2 + 3)
  console.log(`987-ის ციფრების ჯამი: ${sumOfDigits(987)}`);  // 24 (9 + 8 + 7)
  console.log(`456-ის ციფრების ჯამი: ${sumOfDigits(456)}`);  // 15 (4 + 5 + 6)
  