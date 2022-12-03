// 1725. Number Of Rectangles That Can Form The Largest Square

var countGoodRectangles = function (rectangles) {
  let arr = rectangles.map((el) => {
    return Math.min(el[0], el[1]);
  });
  let maxLen = Math.max(...arr);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] === maxLen ? count++ : count;
  }
  return count;
}

console.log(countGoodRectangles([[5, 8], [3, 9], [5, 12], [16, 5]]))