// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Use .map() or .filter() to complete all of the following exercises.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// var arr1 = [3, 9, 15, 4, 10];
// --> [30, 90, 150, 40, 100]

//Psuedo 
//declare function arrayMultiplied
// Use .map
// Output - [30, 90, 150, 40, 100]

// const arrayMultiplied = arr1.map((value) => {
//     return value * 10

// })
// console.log(arrayMultiplied)



// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// var arr2 = [2, 7, 3, 5, 8, 10, 13];
// --> [7, 3, 5, 13]

//Psuedo Code 
// declare function oddNumbers
// Use .filter
// output - [7, 3, 5, 13]

 
// const oddNumbers = arr2.filter((value)=>{
//     return value % 2 !== 0
// })
// console.log(oddNumbers)

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
// var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"];
// // --> "nicework"

//Psuedo code
// declare function niceWork
// use typeof 
// 
// const niceWork = comboArr.filter((value)=>{
//     return typeof value === "string"
// })
// console.log(niceWork.join(""))



// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.

// // --> [58, "abcd", true]

//Psuedo code
// declare function stringArray
// use .filter
// output abcd true 58
// const stringArray = (value) => {
//     return  filterArrayValues.filter((value)=>{ 
//     return typeof value === " " && value === false
 
//     return typeof value !== 0 && value === null 
//     }
// )}

// console.log(stringArray)
var filterArrayValues = [58, " ", "abcd", true, null, false, 0];
const stringArray = (value) => {



let stringsOnlyNoSpaces =  value.filter( value => {
    return (typeof value === "string" && value !== " ") || (typeof value === "number" && value !== 0) || (typeof value === "boolean")
}) 
return stringsOnlyNoSpaces



}
// console.log(filterValues(filterArrayValues))
console.log(stringArray(filterArrayValues))
// STRETCH Challenges

// Create a function that takes in a string and returns a new string with all the vowels removed.
// var str = "javascript is awesome";
// // --> "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3];
// var arr2 = [7, 8, 2, 1, 5, 4];
// // --> [3, 7, 10, 5, 4, 8, 2, 1