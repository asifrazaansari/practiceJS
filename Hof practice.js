const radius = [1, 2, 4, 5, 9]

const area = function(radius){
    return Math.round(Math.PI * radius * radius);
};

const diameter = function(radius){
    return 2 * radius;
};

const circumference = function(radius){
    return 2 * Math.PI * radius
}


const calculate = function(radius, logic){
    const output = [];
    for (let i = 0; i<radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}



console.log(calculate(radius, area))
console.log(radius.map(area));
// console.log(calculate(radius, diameter));
// console.log(calculate(radius, circumference));

