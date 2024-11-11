function findMaxMin(arr) {
    if (arr.length === 0) {
        return "მასივი ცარიელია";
    }
    
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    
    return [max, min];
}

console.log(findMaxMin([3, 5, 7, 2, 8])); // [8, 2]
console.log(findMaxMin([-10, 20, 30, -5, 0])); // [30, -10]
console.log(findMaxMin([5])); // [5, 5]
console.log(findMaxMin([])); // "მასივი ცარიელია"
