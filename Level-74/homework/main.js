// მოსწავლის კონსტრუქტორი
function Student(name, age, grade, school) {
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.school = school;
  }
  
  // სამი მოსწავლის ობიექტის შექმნა
  const student1 = new Student("ანა", 10, "მე-4 კლასი", "თბილისის #1 სკოლა");
  const student2 = new Student("ნიკა", 12, "მე-6 კლასი", "ბათუმის #3 სკოლა");
  const student3 = new Student("მარი", 11, "მე-5 კლასი", "ქუთაისის #5 სკოლა");
  
  console.log(student1);
  console.log(student2);
  console.log(student3);
  