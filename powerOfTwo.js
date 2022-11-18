function powerOfTwo(n) {
  if (n == 1) return true
  if (n % 2 !== 0) return false
  while (n > 0) {
    n = n / 2
    if (n == 1) return true
    //console.log(n)
    if (n % 2 !== 0) return false
  }
  return false
}

console.log(powerOfTwo(64))
