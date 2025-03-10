function findOdd(arr) {
    return arr.reduce((a, b) => a ^ b);
  }

  

function countDevelopers(list) {
    return list.filter(dev => dev.continent === "Europe" && dev.language === "JavaScript").length;


  }

  function getLengthOfMissingArray(arrayOfArrays) {
    if (!arrayOfArrays || arrayOfArrays.some(arr => !arr || arr.length === 0)) return 0;
  
    let lengths = arrayOfArrays.map(arr => arr.length).sort((a, b) => a - b);
    
    for (let i = 0; i < lengths.length - 1; i++) {
      if (lengths[i] + 1 !== lengths[i + 1]) return lengths[i] + 1;
    }
  
    return 0;
  }



  function rowSumOddNumbers(n) {
    return n * n * n;
  }

  
  function accum(s) {
    return s
      .split("")
      .map((char, i) => char.toUpperCase() + char.toLowerCase().repeat(i))
      .join("-");
  }
  