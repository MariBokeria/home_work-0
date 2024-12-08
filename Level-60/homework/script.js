function checkAge() {
    const age = parseInt(prompt("შეიყვანეთ თქვენი ასაკი:"));
    const parentConsent = confirm("გაქვთ მშობლის თანხმობა?");
  
    if (age >= 18) {
      console.log("თქვენ სრულწლოვანი ხართ");
    } else if (age < 18 && parentConsent) {
      console.log("თქვენ შეგიძლიათ გამოიყენოთ ეს სერვისი");
    } else {
      console.log("თქვენ ვერ გამოიყენებთ ამ სერვისს");
    }
  }
  
  // ტესტი
  checkAge();
  