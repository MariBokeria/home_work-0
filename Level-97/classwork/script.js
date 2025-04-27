// ვქმნით ფუნქციას
function nextId(ids) {
    // ვიწყებთ 0-იდან და ვამოწმებთ არის თუ არა მასივში
    let id = 0;
    
    // სანამ ასეთი id არსებობს მასივში, ვზრდით მას
    while (ids.includes(id)) {
      id++;
    }
    
    // ვაბრუნებთ პირველ თავისუფალ ID-ს
    return id;
  }
  
  // მაგალითები
  console.log(nextId([0,1,2,3,5])); // 4
  console.log(nextId([1,2,0,2,3,5])); // 4
  console.log(nextId([0,1,2,3,4,5])); // 6
  console.log(nextId([])); // 0
  