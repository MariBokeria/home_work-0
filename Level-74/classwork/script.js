// ადამიანის კონსტრუქტორი
function Person(name, age, height, id) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.id = id;
  }
  
  // ადამიანის სამი ობიექტის შექმნა
  const person1 = new Person("გიორგი", 25, 180, 1);
  const person2 = new Person("თამარი", 30, 165, 2);
  const person3 = new Person("ნიკა", 28, 175, 3);
  
  console.log(person1); // { name: "გიორგი", age: 25, height: 180, id: 1 }
  console.log(person2); // { name: "თამარი", age: 30, height: 165, id: 2 }
  console.log(person3); // { name: "ნიკა", age: 28, height: 175, id: 3 }
  