function twoSum(nums, target) {
  // შექმენით ობიექტი, რათა მოვამზადოთ თითოეული ელემენტის ინდექსები
  let numMap = new Map();
  
  // გაიარეთ რიცხვების მასივზე
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    
    // თუ ჩანაცვლების რიცხვი უკვე არსებობს, დაბრუნეთ შედეგი
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    
    // დაამატეთ ამჟამინდელი რიცხვი მახსოვრობაზე
    numMap.set(nums[i], i);
  }

  return [];  // თუ ვერ მოიძებნა, დაბრუნდება ცარიელი მასივი
}

// ტესტი
console.log(twoSum([1, 2, 3], 4));  // [0, 2] 
console.log(twoSum([3, 2, 4], 6));  // [1, 2]
