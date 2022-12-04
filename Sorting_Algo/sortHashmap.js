const myMap = new Map();
myMap.set("a",3);
myMap.set("c",4);
myMap.set("b",1);
myMap.set("d",2);

// sort by value
const mapSort1 = new Map([...myMap.entries()].sort((a, b) => b[1] - a[1]));
console.log(mapSort1);
// Map(4) {"c" => 4, "a" => 3, "d" => 2, "b" => 1}

const mapSort2 = new Map([...myMap.entries()].sort((a, b) => a[1] - b[1]));
console.log(mapSort2);
// Map(4) {"b" => 1, "d" => 2, "a" => 3, "c" => 4}

// sort by key
const mapSort3 = new Map([...myMap.entries()].sort());
console.log(mapSort3);
// Map(4) {"a" => 3, "b" => 1, "c" => 4, "d" => 2}

const mapSort4 = new Map([...myMap.entries()].reverse());
console.log(mapSort4);
// Map(4) {"d" => 2, "b" => 1, "c" => 4, "a" => 3}

//https://stackoverflow.com/questions/37982476/how-to-sort-a-map-by-value-in-javascript