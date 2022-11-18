// function recur(arr){
//     if(arr.length === 0) return
//     else{
//         let ele  = arr.pop()
//         if(ele % 7 === 0){
//             console.log("Yes")
//         }else{
//             console.log("No")
//         }
//         recur(arr)
//     }
// }
//console.log(recur([7,42,63,58]))

function recurs(arr){
    if(arr.length === 0) return
    else{
        let ele  = arr.pop()
        console.log(ele)
        recurs(arr)
    }
}
//console.log(recurs([7,42,63,58]))

function pqr() {
    console.log("ac")
}

function xyz() {
    console.log("ad")
}

function abc() {
    pqr()
    xyz()
    console.log("asd")
}

console.log(abc())