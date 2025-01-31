function BankAccount(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;

    this.deposit = function(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(amount + " GEL შეტანილია. ახალი ბალანსი: " + this.balance + " GEL");
        } else {
            console.log("შეყვანილი თანხა უნდა იყოს დადებითი.");
        }
    };

    this.withdraw = function(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(amount + " GEL გამოტანილია. ახალი ბალანსი: " + this.balance + " GEL");
        } else {
            console.log("არასაკმარისი თანხა ან არასწორი მოთხოვნა.");
        }
    };

    this.showBalance = function() {
        console.log(this.owner + ": " + this.balance + " GEL");
    };
}

// მაგალითი გამოყენება
var account = new BankAccount("გიორგი", 1000);
account.showBalance();
account.deposit(500);
account.withdraw(200);
account.showBalance();
