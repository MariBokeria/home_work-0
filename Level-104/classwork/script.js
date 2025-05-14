function swapValues(arr) {
  let temp = arr[0];  
  arr[0] = arr[1];    
  arr[1] = temp;     
}

let myArray = [1, 2];
swapValues(myArray);
console.log(myArray);  