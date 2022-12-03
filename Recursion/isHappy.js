function isHappy(n) {
  let slow = fast = n;
  while (true) {
    slow = sq(slow);
    fast = sq(sq(fast));
    if (slow === fast) break;
  }

  return slow === 1;
}

function sq(num) {
  let sum = 0;
  while (num > 0) {
    let d = num % 10;
    sum += d * d;
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(isHappy(7))