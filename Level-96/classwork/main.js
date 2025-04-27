// ვქმნით ფუნქციას swapName
function swapName(name) {
    // ვყოფთ სტრიქონს ცალკეულ სიტყვებად
    const parts = name.split(' ');
    
    // ვაბრუნებთ გადაბრუნებულ ვერსიას: გვარი + სახელი
    return `${parts[1]} ${parts[0]}`;
  }
  
  // მაგალითები
  console.log(swapName("john McClane")); // "McClane john"
  console.log(swapName("Bruce Wayne"));  // "Wayne Bruce"
  