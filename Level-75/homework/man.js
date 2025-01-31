function Car(brand, model, year, engineVolume) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engineVolume = engineVolume;

    this.getDescription = function() {
        return brand + " " + model + ", " + year + ", " + engineVolume + "L";
    };
}

function Book(title, author, pages, year) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;

    this.pagesPerDay = function() {
        return Math.floor(pages / 7);
    };
}

function Athlete(name, age, sport, trainingHours) {
    this.name = name;
    this.age = age;
    this.sport = sport;
    this.trainingHours = trainingHours;

    this.weeklyTraining = function() {
        return Math.floor(trainingHours * 7 * 1.2);
    };
}

// მაგალითი
var myCar = new Car("Toyota", "Prius", 2018, 1.8);
console.log(myCar.getDescription());

var myBook = new Book("Harry Potter", "J.K. Rowling", 350, 1997);
console.log("ყოველდღიურად უნდა წაიკითხოს: " + myBook.pagesPerDay() + " გვერდი.");

var myAthlete = new Athlete("Leo", 20, "Football", 2);
console.log("კვირაში უნდა ივარჯიშოს: " + myAthlete.weeklyTraining() + " საათი.");
