// 1. Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

// expected output--> [9, 27, 45, 12, 30]
// psuedocode
// declare a function named trippled
// use a for loop to multiply the array
// declare a variable for the results and return outside of the proper }'s
// var testArr1 = [3, 9, 15, 4, 10];
// var newTest = [];
// const trippled = (array) => {
//     for (let i=0; i <array.length; i++) {
//         newTest.push(array[i] * 3)
//     } return newTest;
// }
// console.log(trippled(testArr1))


// 2. Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// expected output--> [-7, 3, 5, 13]
// pseudocode
// declare a function name oddity
// use a for loop to only show odd numbers which will be achieved by useing the % 
// declare a variable for the results and return outside of the proper }'s

var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13];
// var oddOneOut = []

// const oddity = (array) => {
//     for (let i=0; i < array.length; i++) {
//         if (array[i] % 2 !== 0) {
//             oddOneOut.push(array[i]);
//         }
//     }
//     return oddOneOut
// }
// console.log(oddity(testArr2));




// 3. Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.

// pseudocode: create a function name letterMaker
// use a for loop to go through each value in the array and outputting only letters
// us typeof expected output is nicejob
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


// var leftOvers = []

// const letterMaker = (array) => {
//     for (let i=0; i < array.length; i++) {
//         if (typeof array[i] === "string"){
//             leftOvers.push(array[i])
//         }
//     }
        
//     return leftOvers
// }
// console.log(letterMaker(comboArr).join(""));


// 4. Create a function that takes in an array of numbers and returns the sum.
// pseudocode: create a function named summer
// use a for loop to add the numbers
// need to make an extra variable maybe



// var addThese1 = [1, 2, 3, 4];
// // // --> 10

// var addThese2 = [];
// // // --> 0
// // 


// const summer = (array) => {
//     var addedStuff =0
//         for (let i=0; i < array.length; i++){    
//             addedStuff += array[i]
//         }
//         return addedStuff
       
//      }
        
//         console.log(summer(addThese2))
//         console.log(summer(addThese1))


// 5. Create a function that takes in an array of numbers and returns the index of the largest number.
// pseudocode: make a fucntion named largestNum
// use a for loop to acheive this
// expected result // // --> 1
// var indexHighestNumber = [1, 4, 2, 3];
// var biggest = []
// var bigger =[]

// const largestNum = (array) => {
//     for (let i=0; i < array.length; i++) {
//         if (array[i] > array[i++]) {
//             bigger.push(array[i])
//         } return bigger
//     }   
    // for (let i=0; i < array.length; i++) {
    //     if (bigger[i] > array[i]){
    //         biggest.push(array[i])
    //     }
      
    // } 


var indexHighestNumber = [1, 4, 2, 3];
// --> 1

const largeNumFinder = (array) => {
    
    let newArray = array.sort()
    console.log(newArray[0])
}
// console.log(largeNumFinder(indexHighestNumber))
console.log(indexHighestNumber.sort())
// console.log(largestNum(indexHighestNumber))







// STRETCH Challenges

// 1. Create a function that takes in two arrays and returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3, 3];
// var arr2 = [7, 8, 2, 3, 1, 5, 4];
// // --> [3, 7, 10, 5, 4, 8, 2, 1]










// 2. Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// var arrayLength = 6;
// var arrayValue = 0;
// // --> [0, 0, 0, 0, 0, 0]

// var arrayLength = 4;
// var arrayValue = 11;
// // --> [11, 11, 11, 11]







// 3. Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
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
