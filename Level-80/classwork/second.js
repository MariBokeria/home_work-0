function multiplicationTable(number) {
    let table = "";
  
    for (let i = 1; i <= 10; i++) {
      table += `${i} * ${number} = ${i * number}`;
      if (i < 10) {
        table += "\n"; // ვამატებთ ახალ ხაზს, გარდა ბოლო ხაზისა
      }
    }
  
    return table;
  }
  
  // ტესტის მაგალითი
  console.log(multiplicationTable(5));
  