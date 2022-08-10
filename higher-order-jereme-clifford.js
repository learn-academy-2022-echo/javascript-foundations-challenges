// Q1. Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
var arr1 = [3, 9, 15, 4, 10];
// --> [30, 90, 150, 40, 100]
// Pseudocode: 
// use the forEach method; use a higher order funciton
//

arr1.forEach ((value) => {
    console.log(value * 10)
})

// Q2. Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var arr2 = [2, 7, 3, 5, 8, 10, 13];
// // --> [7, 3, 5, 13]
// Psuedocode: 
// Shortening the orginal array ==> filter()
// output should only be the odd numbers in the array arr2 

let oddStuff = arr2.filter( (value) => {
    return value % 2 !== 0})

console.log(oddStuff)

// Q3. Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"];
// --> "nicework"
// Psuedocode:
//Input is the array, comboArr
//Output should new array with only letters
// Picking desired data type = shortening index value = using filter

let lettersOnly = comboArr.filter( (string) => {
    return typeof string === "string"
})

console.log(lettersOnly.join(""))

// Q4. Create a function that takes in an array and returns an array without any false, null, 0, or blank values
var filterArrayValues = [58, " ", "abcd", true, null, false, 0];
// --> [58, "abcd", true]
//Input given array
//Output selected values; ommiting elements requires us to use the filter method

let restrictedArray = filterArrayValues.filter( (value) => {
    return value !== " " && value !== false && value !== null && value !== 0
});
console.log(restrictedArray)

// Q5. Create a function that takes in a string and returns a new string with all the vowels removed.
var str = "javascript is awesome";
// --> "jvscrpt s wsm"
// input string
// output everything but vowels a,e,i,o,u
// shortening the string so we'll use filter method
let strArray = str.split("")
let noVowels = strArray.filter( (value) => {
    return value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u"
});
console.log(noVowels.join(""))

// Q6. Create a function that takes in two arrays as arguments returns one array with no duplicate values.
var arr1 = [3, 7, 10, 5, 4, 3];
var arr2 = [7, 8, 2, 1, 5, 4];
// --> [3, 7, 10, 5, 4, 8, 2, 1]

// let combinedArr12 = arr1.map( (value) {
//     if (arr1 !== arr2){
//        return combinedArray.push(arr1,arr2)
//     } else 
// })
// console.log(combinedArr12)

// const arry = [1, 2, 1, 3, 4, 3, 5];

// const toFindDuplicates = (arry) => arry.filter((item, index) => {
//     return arry.indexOf(item) !==  index    
//     })
// const duplicateElementa = tofindDuplicates(arry);
// console.log(duplicateElements);

// const arry = [1, 2, 1, 3, 4, 3, 5];

// const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) === index)
// const duplicateElementa = toFindDuplicates(arry);
// console.log(duplicateElementa);
// console.log(toFindDuplicates(arry))

//conjoining the 2 arrays into one
let arr3 = arr1.concat(arr2)
// verifying if the mashing took place correctly
console.log(arr3)
// beginning to write function ... kinda
// we are letting duplicate be the placeholder for out filtered array --> arr3
// we are using 2 parameters value and index; we are checking for the first instances of an element in the array
let duplicate = arr3.filter( (value, index) => {
// arr3.indexOf(value) refers to the place of any element in the array, .indexOf is a special method that tells us the index of an element THE FIRST TIME, we are comparing these values together; i
// if the first time we see an element is registered as ,indexOf() is the same as the current index --- we keep it as this piece of code keeps only unique elements in an array
    return arr3.indexOf(value) === index
})
console.log (duplicate)