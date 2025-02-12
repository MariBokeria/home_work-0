function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log("კი");  // ნაკიანი წელია
    } else {
      console.log("არა");  // ნაკიანი არ არის
      findClosestLeapYear(year);
    }
  }
  
  function findClosestLeapYear(year) {
    let previous = year - 1;
    let next = year + 1;
  
    while (!isLeap(previous)) {
      previous--;
    }
  
    while (!isLeap(next)) {
      next++;
    }
  
    console.log(`უახლოესი ნაკიანი წლებია: ${previous} ან ${next}`);
  }
  
  function isLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  
  // ტესტი
  isLeapYear(2100);  // არა, უახლოესი ნაკიანი წლებია: 2096 ან 2104
  isLeapYear(2104);  // კი
  isLeapYear(2400);  // კი
  