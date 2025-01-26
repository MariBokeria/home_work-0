// ცხოველის კონსტრუქტორი
function Animal(name, species, age, color) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.color = color;
  }
  
  // სამი ცხოველის ობიექტის შექმნა
  const animal1 = new Animal("ლეო", "ლომი", 5, "ოქროსფერი");
  const animal2 = new Animal("ბელა", "ძაღლი", 3, "შავი");
  const animal3 = new Animal("კოკო", "თუთიყუში", 2, "მწვანე");
  
  console.log(animal1);
  console.log(animal2);
  console.log(animal3);
  