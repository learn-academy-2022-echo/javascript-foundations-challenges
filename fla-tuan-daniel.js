// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
//create function that takes in an array as an argument.
//create an empty array.
//iterate over passed in array
//push array[i]*3 into result array.
//return result
var testArr1 = [3, 9, 15, 4, 10];

const multThree = (arr) => {
    let result = []
    for (let i = 0;i < arr.length;i++){
        result.push(arr[i] * 3)
    }
return result
}
console.log(multThree(testArr1))

// // --> [9, 27, 45, 12, 30]
// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13];
//Create a function that takes in an array 
//create empty result array
//Iterate over passed in array
    //conditional statement that filters only odd results and pushes into result array.
//return result
const oddNumsOnly = (arr) => {
    let result = []
    for (let i = 0;i < arr.length;i++){
        if (arr[i] % 2 !== 0){
            result.push(arr[i])
        }
    } return result
}
console.log(oddNumsOnly(testArr2))


// // --> [-7, 3, 5, 13]
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
var comboArr = [
  7,
  "n",
  true,
  "i",
  "c",
  10,
  "e",
  -388,
  "w",
  3,
  "o",
  0,
  "r",
  false,
  "k",
];
//create a function takes in an array
//create empty result array
//iterate over passed in array
    //conditional statement that filters for strings only
    //push into result array
//join array to create string and then return that result

const lettersOnly = (arr) => {
let result =[]
for (let i = 0;i < arr.length; i++){
    if (typeof arr[i] === "string"){
        result.push(arr[i])
    }
}
return result.join("")
}
console.log(lettersOnly(comboArr))
// // --> "nicework"

// Create a function that takes in an array of numbers and returns the sum.
//create a function that takes in an array
//create sum variable set to 0
    //iterate over passed in array
    //add sum with array[i]
    //return sum

var addThese1 = [1, 2, 3, 4];
const addedUp = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length;i++){
        sum += arr[i]
        console.log(sum)
    }
    return sum
}
console.log(addedUp(addThese1))
// // --> 10

var addThese2 = [];
console.log(addedUp(addThese2))
// // --> 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
// var indexHighestNumber = [1, 4, 2, 3];
// // --> 1
// STRETCH Challenges

// Create a function that takes in two arrays and returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3, 3];
// var arr2 = [7, 8, 2, 3, 1, 5, 4];
// // --> [3, 7, 10, 5, 4, 8, 2, 1]
// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// var arrayLength = 6;
// var arrayValue = 0;
// // --> [0, 0, 0, 0, 0, 0]

// var arrayLength = 4;
// var arrayValue = 11;
// // --> [11, 11, 11, 11]
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// var addUp1 = 4;
// // 1 + 2 + 3 + 4 = 10
// // --> 10

// var addUp2 = 10;
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // --> 55

// var addUp3 = 600;
// // --> 180300