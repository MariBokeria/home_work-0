// მანქანის კონსტრუქტორი
function Car(name, year, engine, horsepower, color, owner) {
    this.name = name;
    this.year = year;
    this.engine = engine;
    this.horsepower = horsepower;
    this.color = color;
    this.owner = owner; // მფლობელი არის ადამიანის ტიპის ობიექტი
  }
  
  // მანქანის სამი ობიექტის შექმნა
  const car1 = new Car("Toyota Corolla", 2022, "ბენზინი", 132, "თეთრი", person1);
  const car2 = new Car("BMW X5", 2020, "დიზელი", 300, "შავი", person2);
  const car3 = new Car("Tesla Model 3", 2023, "ელექტრო", 283, "წითელი", person3);
  
  console.log(car1);
  /*
  {
    name: "Toyota Corolla",
    year: 2022,
    engine: "ბენზინი",
    horsepower: 132,
    color: "თეთრი",
    owner: { name: "გიორგი", age: 25, height: 180, id: 1 }
  }
  */
  
  console.log(car2);
  /*
  {
    name: "BMW X5",
    year: 2020,
    engine: "დიზელი",
    horsepower: 300,
    color: "შავი",
    owner: { name: "თამარი", age: 30, height: 165, id: 2 }
  }
  */
  
  console.log(car3);
  /*
  {
    name: "Tesla Model 3",
    year: 2023,
    engine: "ელექტრო",
    horsepower: 283,
    color: "წითელი",
    owner: { name: "ნიკა", age: 28, height: 175, id: 3 }
  }
  */
  