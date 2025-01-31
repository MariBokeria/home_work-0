function Animal(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;

    this.describe = function() {
        console.log(name + " არის " + age + " წლის " + species + ".");
    };
}

// მაგალითი გამოყენება
var myPet = new Animal("ბობი", "ძაღლი", 3);
myPet.describe();
