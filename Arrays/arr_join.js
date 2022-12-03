const elements = [01,02,03]

// console.log(elements.join(":"));

// console.log(elements.join(""));

// console.log(elements.join('-'));

let res = ""
for(let i=0; i<elements.length; i++){
    res += elements[i] + ":"
}

console.log(res)