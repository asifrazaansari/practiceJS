// ============= map ======================

const arr = [5, 1, 3, 2, 6]

// Double -- [10, 2, 6 , 4, 12]
// Triple -- [15, 3, 9, 6, 18]
// Binary -- ["101", "1", "11", "10". "110"]

function double (X){
    return x *2
}

function triple(x){
    return x * 3;
}

function binary(x){
    return x.toString(2);
}

// different way 
//  const output =arr.map(function binary(x){
//     return x.toString(2);
//  });

// arrow function
//  const output =arr.map((x) => {
//     return x.toString(2);
//  });

// different way of writing arrow function if you have 1 line of body
//  const output =arr.map((x) => x.toString(2));

const output = arr.map(binary);
console.log(output)

// ============= filter ==========================

const arr1 = [5, 1, 3, 2, 6]

//filter odd values

const outFiltre = arr1.filter(oddValue => oddValue%2 !== 0);
// console.log(outFiltre)

// ================ reduce ===================

const arr2 = [5, 1, 3, 2, 6]

// sum or max

function findSum (arr){
    let sum = 0;
    for (let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
// console.log(findSum(arr))


// acc-- accumelator like sum from above
// curr - current values like arr[i] from above
// reduce takes 1st argument as function and 2nd argument as initializing 
// the value 0 as written '}, 0);' like from above 'let sum = 0;' we initialized
const outReduce = arr2.reduce(function (acc, curr){
    acc = acc + curr;
    return acc;
}, 0);

// console.log(outReduce)


const arr3 = [5, 1, 3, 2, 6]

function findMax(arr3){
    let max = 0;
    for (let i=0; i<arr3.length; i++){
        if(arr3[i]> max){
            max = arr3[i]
        }
    }
    return max;
}
console.log(findMax(arr3))


const outMaxReduce = arr3.reduce(function(max, curr){
    if(curr >max){
        max = curr;
    }
    return max;
}, 0);

console.log(outMaxReduce)

// ===================================================================================== //
const profile = [
    {firstName: "Asif Raza", lastName: "Ansari", age: 21},
    {firstName: "Salman", lastName: "Ansari", age: 23},
    {firstName: "Ahmad", lastName: "Khan", age: 22},
    {firstName: "Israr", lastName: "Khan", age: 21},
    {firstName: "Adnan", lastName: "Thanwal", age: 22},
];

// {21: 2, 22:2, 23:1}   uisng HoF reduce

const out = profile.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age]
    }else {
        acc[curr.age] = 1
    }
    return acc;
}, {})

console.log(out);

// Return firstName name of age > 21 using chain map & filter and without chain reduce 

//method 1 using map and filter chain method
const users = profile.filter(x => x.age > 21).map(y => y.firstName)
console.log(users)

//method2 using reduce

const accounts = profile.reduce(function(acc, curr){
    if(curr.age > 21){
      acc.push(curr.firstName)
    }
    return acc;
}, [])

console.log(accounts)