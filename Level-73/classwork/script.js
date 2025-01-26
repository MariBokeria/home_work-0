// ფუნქციის შექმნა
function generateArrayFromObject(obj) {
    const { quantity, element } = obj; // ობიექტიდან value-ების ამოღება
    return Array(quantity).fill(element); // მასივის შექმნა
  }
  
  // ტესტირება
  const inputObject = { quantity: 4, element: "apple" };
  const resultArray = generateArrayFromObject(inputObject);
  console.log(resultArray); // Output: ["apple", "apple", "apple", "apple"]
  