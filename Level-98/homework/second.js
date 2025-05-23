function powers(n) {
    const result = [];
  
    // სანამ n დადებითია
    while (n > 0) {
      // ვპოულობთ ყველაზე დიდ 2-ის ხარისხს, რომელიც ნაკლებია ან ტოლია n-ზე
      let power = 1;
      while (power * 2 <= n) {
        power *= 2;
      }
  
      // ვამატებთ პოვებულ 2-ის ხარისხს შედეგებში
      result.push(power);
  
      // ვაკლებთ მას ძირითად რიცხვს
      n -= power;
    }
  
    // ვაბრუნებთ შედეგს ზრდადობით დალაგებულს (სხვათაშორის ისედაც ასეა შენახული)
    return result.sort((a, b) => a - b);
  }
  