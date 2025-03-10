function concatenateProgressively(s) {
    let result = [];
    let n = Math.floor(s.length / 2);
  
    for (let i = 0; i < n; i++) {
      result.push(s[i] + s[s.length - 1 - i] + (i + 1));
    }
  
    return result.join('');
  }
  
  // Example cases:
  console.log(concatenateProgressively("abcdef"));  // Output: "af1be2cd3"
  console.log(concatenateProgressively("abc!def")); // Output: "af1be2cd3"
  console.log(concatenateProgressively("abcdefgh")); // Output: "ah1bg2cf3de4"
  console.log(concatenateProgressively("abcd"));  // Output: "ad1bc2"
  