function multiplyNumbers() {
    while (true) {
        // მომხმარებლისგან ორი რიცხვის შეყვანა
        const num1 = prompt("შეიყვანეთ პირველი რიცხვი:");
        const num2 = prompt("შეიყვანეთ მეორე რიცხვი:");

        // გამოთვლა და შედეგის გამოყვანა
        const product = Number(num1) * Number(num2);
        console.log(`ნამრავლი: ${product}`);

        // მომხმარებლის შემდგომი ქმედების მოთხოვნა
        const action = prompt("გსურთ პროგრამიდან გამოსვლა? შეიყვანეთ 'exit', ან სხვა ტექსტი გააგრძელებისთვის:");
        if (action.toLowerCase() === "exit") {
            console.log("პროგრამა დასრულდა. ნახვამდის!");
            break;
        }
    }
}

// პროგრამის გაშვება
multiplyNumbers();
