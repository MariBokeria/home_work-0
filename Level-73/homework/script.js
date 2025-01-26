// მასივი ობიექტების
const people = [
    { name: "ნიკა", age: 25, height: 180, gender: "მამრობითი" },
    { name: "ანა", age: 30, height: 165, gender: "მდედრობითი" },
    { name: "გიორგი", age: 28, height: 175, gender: "მამრობითი" },
    { name: "მარიამი", age: 22, height: 160, gender: "მდედრობითი" },
  ];
  
  // თითოეული ობიექტის გამოტანა
  people.forEach((person, index) => {
    console.log(
      `${index + 1}) ადამიანი: სახელი: ${person.name}, ასაკი: ${person.age}, სიმაღლე: ${person.height}, სქესი: ${person.gender}`
    );
  });
  