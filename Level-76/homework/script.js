// sumDigits ფუნქცია (JS ვერსია)
function sumDigits(n) {
    n = Math.abs(n); // უარყოფითი რიცხვებისთვის ვიღებთ აბსოლუტურ მნიშვნელობას
    let result = 0;
    while (n > 0) {
        result += n % 10;
        n = Math.floor(n / 10);
    }
    return result;
}

console.log(sumDigits(123)); // მოსალოდნელი შედეგი: 6 (1 + 2 + 3)
console.log(sumDigits(405)); // მოსალოდნელი შედეგი: 9 (4 + 0 + 5)

// sumTwoLargest ფუნქცია (JS ვერსია)
function sumTwoLargest(arr) {
    if (arr.length < 2) return null;

    let max1 = Math.max(...arr);
    arr.splice(arr.indexOf(max1), 1); // ვშლით პირველ მაქსიმალურ ელემენტს
    let max2 = Math.max(...arr);

    return max1 + max2;
}

console.log(sumTwoLargest([3, 7, 2, 9, 5]));  // მოსალოდნელი შედეგი: 16 (9 + 7)
console.log(sumTwoLargest([10, 10, 5, 3]));   // მოსალოდნელი შედეგი: 20 (10 + 10)
