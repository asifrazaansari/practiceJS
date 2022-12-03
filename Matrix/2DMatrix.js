let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3

//brute force
const searchMatrix = function (matrix, target) {
    let rows = matrix.length
    let columns = matrix[0].length

    let left = 0, right = rows * columns - 1

    while (left <= right) {
        let mid = Math.floor(left + (right - left))
        let midVal = matrix[Math.floor(right / columns)][right % columns]

        if (midVal === target) return true
        else if (midVal > target) right = mid - 1
        else left = mid + 1
    }
    return false
}

console.log(searchMatrix(matrix, target))

/*
var searchMatrix = function(matrix, target) {
    var temp;
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j]==target){
                return true;
            }
        }
        if(i==matrix.length-1){
            return false;
        }
    }
};
*/


function searchMatrix(matrix, target) {
    const h = matrix.length;
    const w = h > 0 ? matrix[0].length : 0;
    if (h === 0 || w === 0) { return false; }  
  
    const arr = getArr();
    if (!arr) { return false; }
    return binarySearch(arr, target) !== null;
    
    // This function can be implemented using binary search as well (may be next time)
    function getArr() {
      for (let i = 0; i < h; i++) {
        let arr = matrix[i];
        if (arr[0] <= target && target <= arr[arr.length - 1]) {
          return arr;
        }
      }
      return null;
    }
  
    function binarySearch(arr, t) {
      let left = 0;
      let right = arr.length - 1;
     
      while (left <= right) {
        if (arr[left] === t) {
          return left;
        }
  
        if (arr[right] === t) {
          return right;
        }
  
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === t) {
          return mid;
        }
        if (arr[mid] < t) {
          left = mid + 1;
        }
        else if (arr[mid] > t) {
          right = mid - 1;
        }
      }
      return null;
    }
  };