// function solution(s1, s2) {
//     while (s1.length > 0) {
//         let ind = s1.indexOf(s2)
//         if (ind == -1) {
//             break;
//         }
//         s1 = s1.replace(s2, "");
//     }
//     return s1.length == 0 ? "Yes" : "No"
// }

// console.log(solution("cocodede", "code"))

// function canBecomeEmpty(str, sub_str) {
//     while (str.length > 0) {

//         // idx: to store starting index of sub-
//         //      string found in the original string
//         let idx = str.indexOf(sub_str)
//         if (idx == -1) {
//             return "No";
//         }

//         // Erasing the found sub-string from
//         // the original string
//         str = str.replace(sub_str, "");
//     }
//     return "Yes";
// }

// // Driver code
// let str = "cocodede", sub_str = "code";

// console.log(canBecomeEmpty(str, sub_str))

// function solution(arr) {
//     arr = arr.split(' ')
//     console.log(arr)
//     if (arr.length == 1) return arr[0].split("").reverse().join("")
//     let b = []
//     let a = []
//     for (let i in arr) {
//         if (arr.length % 2 == 0) {
//             if (i % 2 == 0) a.push(arr[i])
//             else b.push(arr[i])
//         } else {
//             if (i % 2 != 0) a.push(arr[i])
//             else b.push(arr[i])
//         }
//     }
//     for (let i in b) {
//         b[i] = b[i].split("").reverse().join("")
//     }
//     b = b.reverse().concat(a)
//     return b.join(" ")
// }


// console.log(solution("asif raza ansari khan"))

function solution(arr, b) {
    arr = arr.split(" ")
    const count = {}
    for(let i in arr){
       count[arr[i]] = (count[arr[i]] || 0) + 1
    }
      return count[b]?count[b]:0
  }


  console.log(solution("hello world hello", "hello"))