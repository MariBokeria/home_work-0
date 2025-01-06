function checkDuplicateText() {
    let previousText = "";  // გასული ტექსტი
    
    while (true) {
        const userInput = prompt("შეიყვანეთ ტექსტი:");
        
        if (userInput === previousText) {
            alert("ეს ტექსტი უკვე შეყვანილია!");
            break;  // ამ შემთხვევაში გამოგვყავს პროგრამიდან
        } else {
            previousText = userInput;  // ახალი ტექსტი გვახსოვს
            alert("თქვენი ტექსტი მიღებულია!");
        }
    }
}

// ფუნქციის გაშვება
checkDuplicateText();
