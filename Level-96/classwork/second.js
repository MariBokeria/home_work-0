// ვქმნით combat ფუნქციას
function combat(health, damage) {
    // ვაგეგმავთ ახალ ჯანმრთელობას
    const newHealth = health - damage;
    
    // თუ ახალი ჯანმრთელობა ნაკლებია 0-ზე, ვაბრუნებთ 0-ს, სხვანაირად ახალ ჯანმრთელობას
    return newHealth < 0 ? 0 : newHealth;
  }
  
  // მაგალითები
  console.log(combat(100, 30)); // 70
  console.log(combat(80, 100)); // 0 (ვერ იქნებ  -20, მინიმუმ 0 უნდა იყოს)
  console.log(combat(50, 20));  // 30
  