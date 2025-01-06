function uniqueElements(arr) {
    // ობიექტი ელემენტების რაოდენობის დასათვლად
    const count = {};
    
    // მასივის გავლა და თითოეული ელემენტის რაოდენობის დათვლა
    arr.forEach(element => {
        count[element] = (count[element] || 0) + 1;
    });

    // მასივის ფილტრაცია, სადაც ვაბრუნებთ მხოლოდ უნიკალურ ელემენტებს
    return arr.filter(element => count[element] === 1);
}


const inputArray = [1, 2, 3, 2, 4, 5, 6, 5];
const result = uniqueElements(inputArray);
console.log(result); // Output: [1, 3, 4, 6]
