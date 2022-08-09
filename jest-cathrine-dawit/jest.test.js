// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

// describe("drinkCoffee", () => {
//     it ("drink coffee", () => {
//         expect(drinkCoffee("tired")).toEqual("drink coffee")
//         expect(drinkCoffee("not tired")).toEqual("keep working")
//     }) 
// })

//  FAIL  ./jest.test.js
//   drinkCoffee
//   ✕ drink coffee (1 ms)

// ● drinkCoffee › drink coffee

// Psedo Code:
// Create a function drinkCoffee
// Parameter: string that will return "drink coffee" or "keep working"
// Output: "drink coffee" if you are tired and "keep working" if you are not tired
// Write the function that will make the test pass.
// const drinkCoffee = (string) => {
//     if (string === "tired") {
//         return "drink coffee"
//     } else {
//         return "keep working"
//     }
// } 
// PASS  ./jest.test.js
//   drinkCoffee
//     ✓ drink coffee (2 ms)

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

// describe("workDay", () => {
//     it ("workDay", () => {
//         expect(workDay("stressed")).toEqual("relax")
//         expect(workDay("not stressed")).toEqual("keep going")
//     }) 
// })

// FAIL  ./jest.test.js
// workDay
//   ✕ workDay (1 ms)

// ● workDay › workDay

// Write the function that will make the test pass.

// Psedo Code:
// Create a function workDay
// Parameter: string that will return "relax" or "keep going"
// Output: "relax" if you are stressed and "keep going" if you are not stressed

// const workDay = (string) => {
//     if (string === "stressed") {
//         return "relax"
//     } else {
//         return "keep going"
// }
// }
// PASS  ./jest.test.js
//   workDay
//     ✓ workDay (3 ms)

// Write the test for a function that returns "in budget" if a price is lower than $300.
// describe("inBudget", () => {
//     it("in budget", () => {
//         expect(inBudget(inBudget < 300)).toEqual("in budget")
//     })
// })
// FAIL  ./jest.test.js
//   inBudget
//     ✕ in budget (2 ms)

//   ● inBudget › in budget

// Write the function that will make the test pass.
// Pseudo Code
// Declare a function inBudget
// Parameter: number with a value of < 300 and string "In Budget"
// Output: returns "in budget" if a price is lower than $300

// const inBudget = (number) => {
//     if(number < 300) {
//         return "in budget"
//     }
// } 

// PASS  ./jest.test.js
//   inBudget
//     ✓ in budget (2 ms)

// // Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
// describe("myNum", () => {
//     it("returns the smaller number", () => {
//         expect(myNum(32, 18)).toEqual(18)
//     })
// })

// FAIL  ./jest.test.js
// myNum
//   ✕ returns the smaller number (1 ms)

// ● myNum › returns the smaller number

// Write the function that will make the test pass.
// Psedo Code
// Declare a function myNum
// Argument input: numbers
// Output: returns the smaller number

// const myNum = (numOne, numTwo) => {
//     if (numOne < numTwo) {
//         return numOne
//     } else {
//         return numTwo
//     }
// }

// Write the test for a function that takes in one argument(number) and returns whether the number is odd.
// describe("myOdd", () => {
//     it("returns whether the number is odd", () => {
//         expect(myOdd(5)).toEqual("number is odd")
//     })
// })
// FAIL  ./jest.test.js
// myOdd
//   ✕ returns whether the number is odd (2 ms)

// ● myOdd › returns whether the number is odd

// Write the function that will make the test pass.

// Pseudo Code
// Declare function call myOdd
// Input: Take number
// Output: returns whether the number is odd

// const myOdd = (number) => {
//     if (number % 2 !== 0) {
//         return "number is odd"
//     }
// }
// PASS  ./jest.test.js
//   myOdd
//     ✓ returns whether the number is odd (3 ms)

// // Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// describe("colorFruit", () => {
//     it("returns 'yellow' if the argument is banana, 'red' if apple and 'purple' if grape", () => {
//         expect(colorFruit("banana")).toEqual("yellow")
//         expect(colorFruit("apple")).toEqual("red")
//         expect(colorFruit("grape")).toEqual("purple")
//     })
// })

// FAIL  ./jest.test.js
//   colorFruit
//     ✕ returns 'yellow' if the argument is banana, 'red' if apple and 'purple' if grape (1 ms)

//   ● colorFruit › returns 'yellow' if the argument is banana, 'red' if apple and 'purple' if grape

// Write the function that will make the test pass.
// Psuedo Code:
// Declare a function called colorFruit
// Parameter: Strings
// Output: returns 'yellow' if the argument is banana, 'red' if apple and 'purple' if grape

// const colorFruit = (string) => {
//     if(string === "banana") {
//         return "yellow"
//     } else if (string === "apple") {
//         return "red"
//     } else if (string === "grape") {
//         return "purple"
//     } else {
//         return "no color"
//     }
// }
// PASS  ./jest.test.js
//   colorFruit
//     ✓ returns 'yellow' if the argument is banana, 'red' if apple and 'purple' if grape (7 ms)

// Write the test for a function called rick that returns "Morty".
// Write the function that will make the test pass.
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Write the function that will make the test pass.
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Write the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Write the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Write the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Write the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
// Write the function that will make the test pass.