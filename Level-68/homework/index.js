function askForPassword() {
    const correctPassword = "12348765";
    
    while (true) {
        const userPassword = prompt("შეიყვანეთ პაროლი:");
        
        if (userPassword === correctPassword) {
            alert("პაროლი სწორი!");
            break;
        } else {
            alert("არასწორი პაროლი, სცადეთ კვლავ.");
        }
    }
}

// ფუნქციის გაშვება
askForPassword();
