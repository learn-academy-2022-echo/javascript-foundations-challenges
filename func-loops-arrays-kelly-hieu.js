// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// var testArr1 = [3, 9, 15, 4, 10];
// // --> [9, 27, 45, 12, 30]

    // PSEUDO CODE:
        // make a function that takes an array of numbers
        // returns an array with numbers multiplied by 3
        // make a new array to hold new numbers

//     var newArray = []
//     const arrayMultiplied3 = (array) => {
//         for (let i = 0; i < array.length; i++) {
//             newArray.push(array[i] * 3)
//         }
//         return newArray
//     }

// console.log(arrayMultiplied3(testArr1));



// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13];
// // --> [-7, 3, 5, 13]

    //PSEUDO CODE:
        // create empty array outside function
        // create function
        // iterate through original array
        // conditional statements to determine even or odd
        // pushes odd to outside array
        // returns outside array

//         const oddNumbersArr = (array) => {
//             let oddArr = []
//             for (let i = 0; i < array.length; i++) {
//                 if (array[i] % 2 !== 0) {
//                     oddArr.push(array[i])
//                 }
//             } return oddArr
//         }
//  console.log(oddNumbersArr(testArr2));


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
// var comboArr = [
//   7,
//   "n",
//   true,
//   "i",
//   "c",
//   10,
//   "e",
//   -388,
//   "w",
//   3,
//   "o",
//   0,
//   "r",
//   false,
//   "k",
// ];
// // --> "nicework"

    // PSEUDO CODE:
        // create a function that takes an array
        // create a new array inside function to hold string characters
        // create a loop
        // if typeof === string
            // add character to a new array
        // join characters within array into string
        // assign a string to variable
        // return new variable

    // const stringFromArr = (array) => {
    //     let stringChar = []
    //     for (let i = 0; i < array.length; i++) {
    //         if (typeof array[i] === "string") {
    //             stringChar.push(array[i])
    //         }
    //     } return stringChar.join("")
    // }
    // console.log(stringFromArr(comboArr));



// Create a function that takes in an array of numbers and returns the sum.
//  var addThese1 = [1, 2, 3, 4];
// // // --> 10

//     // PSEUDO CODE
//     // create a function named returnedSum that takes in an array
//     // create a for loop
//     // return the array values

//     const returnedSum = (array) => {
//         let addedNumber = 0
//         for (let i = 0; i < array.length; i++) {
//             addedNumber += array[i]
//         } return addedNumber
//     }
//     console.log(returnedSum(addThese1))


//  var addThese2 = [];
// // --> 0



// Create a function that takes in an array of numbers and returns the index of the largest number.
 var indexHighestNumber = [1, 4, 2, 3, 19];
// --> 1

    // PSEUDO CODE:
    // create a function named indexOfLargestNum takes in an array and returns the index of largest number
    // create a variable called largestNum that holds the largest number and starts at 0
    // create a variable for the index number
    // create a for loop that iterates through the array of numbers
    // if array value > largestNum, largestNum = new array value
    // return index of largestNum in indexHighestNumber array


    // const indexOfLargestNum = (array) => {
    //     let largestNum = 0;
    //     for (let i = 0; i < array.length; i++) {
    //         if (array[i] > largestNum) {
    //             largestNum = array[i]
    //         }
    //     } return array.indexOf(largestNum)
    // }
    // console.log(indexOfLargestNum(indexHighestNumber))



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

// EPIC Challenges

// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// Create an HTML page and link your JavaScript file. More info here.
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.
