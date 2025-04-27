// ვქმნით ფუნქციას სახელად xor, რომელსაც ორი პარამეტრი აქვს: a და b
function xor(a, b) {
    // თუ მხოლოდ ერთი მათგანი არის true (და არა ორივე ერთად)
    return (a || b) && !(a && b);
  }
  
  // მაგალითად შემოწმება
  console.log(xor(false, false)); // false
  console.log(xor(true, false));  // true
  console.log(xor(false, true));  // true
  console.log(xor(true, true));   // false
  