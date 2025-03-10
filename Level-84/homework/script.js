function similarity(a, b) {
    let setA = new Set(a);
    let setB = new Set(b);
  
    let intersection = [...setA].filter(num => setB.has(num)).length;
    let union = new Set([...a, ...b]).size;
  
    return intersection / union;
  }
  