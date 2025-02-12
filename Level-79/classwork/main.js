function binRota(seatingPlan) {
    const rota = [];
    
    for (let i = 0; i < seatingPlan.length; i++) {
      if (i % 2 === 0) {
        // ლუწი რიგი (მარცხნიდან მარჯვნივ)
        rota.push(...seatingPlan[i]);
      } else {
        // კენტი რიგი (მარჯვნიდან მარცხნივ)
        rota.push(...seatingPlan[i].slice().reverse());
      }
    }
    
    return rota;
  }
  
  // ტესტის მაგალითი
  const seatingPlan = [
    ["Stefan", "Raj", "Marie"],
    ["Alexa", "Amy", "Edward"],
    ["Liz", "Claire", "Juan"],
    ["Dee", "Luke", "Katie"]
  ];
  
  console.log(binRota(seatingPlan));
  // შედეგი: ["Stefan", "Raj", "Marie", "Edward", "Amy", "Alexa", "Liz", "Claire", "Juan", "Katie", "Luke", "Dee"]
  