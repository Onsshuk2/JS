//1
function generateRandomArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push((Math.random()* 100) + 1) ;
    }
    return array;
}

let randomArray = generateRandomArray(20); 
console.log(randomArray);

//2
let array0 =[1,2,23,4,15,6,7,14]

for (let i = 0; i < array0.length; i++) {
    console.log(`Element[${i}]: ${array0[i]}`);
}

//3
for (let i = 0; i < array0.length; i++) {
    if (array0[i] % 7 === 0) {
        console.log(`Element[${i}] (${array0[i]}) is divisible by 7`);
    }
}

//4
array0.sort((a, b) => b - a);
console.log("Sorted with custom func:", array0);

//5
let array = [1, 2, 3, 4, 5, 6, 7, 8]; 
let middle = array.length / 2; 

for (let i = middle; i < array.length; i++) {
    array[i] = 0; }

console.log("Modified array:", array);

//6
array0.splice(0, 3); // 3 element from index 2
console.log("After remove:", array0);

//7
function hasDuplicates(arr) {
    return new Set(arr).size !== arr.length;
}

if (hasDuplicates(array)) {
    console.log("The array has duplicate elements.");
} else {
    console.log("The array has all unique elements.");
}

//8
console.log(array)
array.pop(); 
array.shift(); 
console.log(" Array after remove first and end elements:", array);

//9
let count=0
for (let i = 0; i < array0.length; i++) {
    if (array0[i] % 2 === 0) {
        console.log(`Element[${i}] (${array0[i]}) is divisible by 2`);
        count++
    }
}
console.log(`Total even numbers: ${count}`);