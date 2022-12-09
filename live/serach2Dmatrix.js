const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]

/*
function searchMatrix(matrix, target){
    let rows = matrix.length
    let columns = matrix[0].length

    let left = 0, right = rows * columns - 1

    while(left <= right){
        let midVal = matrix[Math.floor(right/columns)][right%columns]
        if(midVal === target) return true
        else if(midVal > target) right--
        else left++
    }
    return false
}
*/

//Binary search
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false;
    let rows = 0;
    let cols = matrix[rows].length - 1;
    while (rows < matrix.length && cols >= 0 ) {
        if (matrix[rows][cols] === target) {
            return true;
        } else if (matrix[rows][cols] > target) {
            cols--;
        } else {
            rows++;
        }
    }
    return false;
}


console.log(searchMatrix(matrix, 34))