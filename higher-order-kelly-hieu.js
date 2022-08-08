// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Use .map() or .filter() to complete all of the following exercises.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// var arr1 = [3, 9, 15, 4, 10];
//  --> [30, 90, 150, 40, 100]

    // PSEUDO CODE:
    // create a function named mult10 that takes an array of numbers
    // use the .map method to multiply each number by 10
    // create a new variable to hold the returned array
    // returns a new array of all numbers multipled by 10

    // const mult10 = (numArr) => {
    //     let times10 = numArr.map(value => value * 10)
    //     return times10
    // }
    // console.log(mult10(arr1))


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
 // var arr2 = [2, 7, 3, 5, 8, 10, 13];
// --> [7, 3, 5, 13]

    // PSEUDO CODE
    // create a function named oddNumbers
    // use filter method to create an array of odd numbers
    // create a variable to hold the new array
    // returns an array of odd numbers

    // const oddNumbers = (numArr) => {
    //     let oddArr = numArr.filter(value => value % 2 !== 0)
    //     return oddArr
    // }
    // console.log(oddNumbers(arr2))



// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
 var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"];
// --> "nicework"

    // PSEUDO CODE
    // create a function named lettersOnly which takes in an array of numbers and letters
    // create a variable of empty array
    // determine if the values in the array are a string or not using the .forEach() method and the typeof method
    // if string, push to array
    // join array to string
    // return a string of only the letters

    // const lettersOnly = (arr) => {
    //     let lettersArr = [];
    //     arr.forEach(value => {
    //         if (typeof value === "string") {
    //             lettersArr.push(value);
    //         }
    //     }) 
    //     return lettersArr.join("")
    // }
    // console.log(lettersOnly(comboArr))


// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
//  var filterArrayValues = [58, " ", "abcd", true, null, false, 0];
// --> [58, "abcd", true]

    // PSEUDO CODE
    // create a function named filteredArr that takes an array 
    // create a variable for results
    // use the filter method on the array using decision tree for false, null, 0, or blank
    // returns an array without any false, null, 0, or blank values

    // const filterArr = (arr) => {
    //     let results = []
    //     arr.filter(value => {
    //         if (value !== false && value !== null && value !== 0 && value !== " ") {
    //             results.push(value)
    //         }
    //     })
    //     return results
    // }
    // console.log(filterArr(filterArrayValues))




// STRETCH Challenges

// Create a function that takes in a string and returns a new string with all the vowels removed.
// var str = "javascript is awesome";
// // --> "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3];
// var arr2 = [7, 8, 2, 1, 5, 4];
// // --> [3, 7, 10, 5, 4, 8, 2, 1]