function differenceInMaxMin(arr) {
    // ვპოულობთ მასივის უდიდეს და უმცირეს მნიშვნელობებს
    const max = Math.max(...arr);
    const min = Math.min(...arr);
  
    // ვაბრუნებთ მათ სხვაობას
    return max - min;
  }
  