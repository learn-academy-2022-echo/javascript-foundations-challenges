// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
var arr1 = [3, 9, 15, 4, 10];

// create function that takes in array of numbers
    //use the map function to multiply each value by 10
// console log function

const multiTen = (arr) => arr.map((num) => num * 10)

console.log(multiTen(arr1))

// // --> [30, 90, 150, 40, 100]


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var arr2 = [2, 7, 3, 5, 8, 10, 13];

// create function that takes in array
    // return the array with filter method, filtering to only keep odd numbers within array
const filterArr = (arr) => arr.filter((value) => value % 2 !== 0)
console.log(filterArr(arr2))

// // --> [7, 3, 5, 13]
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
var comboArr2 = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"];

// create new function (takes in an array) that uses the filter method on comboArr2
    // filter with typeof = "string" to remove numbers
    // join array together to create string
//console log filtered and joined variable

const filteredCombo = (arr) => arr.filter((item) => typeof item === "string").join('')
console.log(filteredCombo(comboArr2))
// // --> "nicework"


// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
var filterArrayValues = [58, " ", "abcd", true, null, false, 0];

// create new function that takes in array
    // use filter method to remove null, 0, blank, and false values

const arrFunc = (arr) => {
    return arr.filter((value) => value !== null && value !== 0 && value !== " " && value !== false);
}

console.log(arrFunc(filterArrayValues))
// // --> [58, "abcd", true]

// STRETCH Challenges

// Create a function that takes in a string and returns a new string with all the vowels removed.
var str = "javascript is awesome";
// // --> "jvscrpt s wsm"

// create regexp with vowels
//create new function that takes in a string
    // within the function, split the string to create an array in order to use the filter method
    // filter out vowels using regexp test




let vowels = /^[aeiou]/i

const vowelRemoved = (letters) => {
   letters = letters.split('')
    // console.log(letters)
    return letters.filter((letter) => !vowels.test(letter)).join('')
}

console.log(vowelRemoved(str));

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
var arr1 = [3, 7, 10, 5, 4, 3];
var arr2 = [7, 8, 2, 1, 5, 4];

// Create a new function, taking in two arrays
    // create a new array that concats both passed in arrays
    // return the joined arrays using filter method to filter if indexOf number in array matches its index (only items matching their respective index will be returned)

const joinFilterArrays = (arrOne, arrTwo) => {
    let joinedArr = arrOne.concat(arrTwo);
    return joinedArr.filter((num, i) => joinedArr.indexOf(num) === i)
}

console.log(joinFilterArrays(arr1, arr2))

// // --> [3, 7, 10, 5, 4, 8, 2, 1]
