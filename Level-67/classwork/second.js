function isVampire(fang1, fang2) {
    // Calculate the product of the two fangs
    const product = fang1 * fang2;

    // Convert both fangs and the product to strings
    const fangsStr = fang1.toString() + fang2.toString();
    const productStr = product.toString();

    // Check if the sorted digits of the fangs and product match
    return fangsStr.split('').sort().join('') === productStr.split('').sort().join('');
}


console.log(isVampire(6, 21));  // Output: true
console.log(isVampire(10, 11)); // Output: false
