// მანქანის კონსტრუქტორი
function Car(name, year, engine, color) {
    this.name = name;
    this.year = year;
    this.engine = engine;
    this.color = color;
  }
  
  // სამი მანქანის ობიექტის შექმნა
  const car1 = new Car("Toyota Prius", 2021, "ჰიბრიდული", "თეთრი");
  const car2 = new Car("Ford Mustang", 2019, "ბენზინი", "წითელი");
  const car3 = new Car("Nissan Leaf", 2022, "ელექტრო", "ლურჯი");
  
  console.log(car1);
  console.log(car2);
  console.log(car3);
  