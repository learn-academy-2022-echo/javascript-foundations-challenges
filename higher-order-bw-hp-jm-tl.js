// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Use .map() or .filter() to complete all of the following exercises.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
var arr1 = [3, 9, 15, 4, 10];
// // --> [30, 90, 150, 40, 100]

// PSEUDOCODE: 
// Step through array using the higher-order function .map() and take every value to multiple by 10 in a new array 

// arr1.forEach((value) => {
//     console.log(value * 10)
// })

// const multTen = arr1.map((value) => {
//     return value * 10
// })
// console.log(multTen)

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var arr2 = [2, 7, 3, 5, 8, 10, 13];
// // --> [7, 3, 5, 13]

// PSEUDOCODE:
// Declare function named oddNumber 
// Use built-in method .filter() to filter out only odd numbers 
// Expected output: New array with only odd numbers [7, 3, 5, 13]

const oddNumber = (array) => {
    return array.filter((value) => value % 2 !== 0)
}  
console.log(oddNumber(arr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"];
// // --> "nicework"
//PSEUDOCODE: 
//declare a function named sentence
//utilize .filter method to remove anyting that is not a letter
//use .join method to combine all letters together to create one string
//expected output: "nicework"

const sentence = comboArr.filter((value) => {
        return typeof value === "string"
    })

console.log(sentence.join(""))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
var filterArrayValues = [58, " ", "abcd", true, null, false, 0];
//PSEUDOCODE
//declare a function missVal 
//filter function to remove values of false, null, 0, blank.
//expected outcome [58, "abcd", true]

const missVal = filterArrayValues.filter((value) => {
    if (value !== " " || value !== 0 || value !== false || value !== null){
        return value
    } 

})
console.log(missVal.splice(1, 1))

// // --> [58, "abcd", true]
// STRETCH Challenges

// Create a function that takes in a string and returns a new string with all the vowels removed.
//var str = "javascript is awesome";
// // --> "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3];
// var arr2 = [7, 8, 2, 1, 5, 4];
// // --> [3, 7, 10, 5, 4, 8, 2, 1]