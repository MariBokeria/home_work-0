// rentalCarCost ფუნქცია
function rentalCarCost(d) {
    let cost = d * 40;
    if (d >= 7) {
        cost -= 50;
    } else if (d >= 3) {
        cost -= 20;
    }
    return cost;
}

console.log(rentalCarCost(2));  // მოსალოდნელი შედეგი: 80
console.log(rentalCarCost(3));  // მოსალოდნელი შედეგი: 100
console.log(rentalCarCost(7));  // მოსალოდნელი შედეგი: 230
