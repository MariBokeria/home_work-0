function createObject(keys, values) {
    let obj = {};
    for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i] !== undefined ? values[i] : null;
    }
    return obj;
}

// მაგალითი გამოყენება
let keys = ["name", "age", "country"];
let values = ["John", 30, "USA"];

console.log(createObject(keys, values)); 
// { name: "John", age: 30, country: "USA" }
