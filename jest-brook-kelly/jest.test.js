
// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

// describe("coffee", () => {
//     it("returns a string depending on if you're tired or not",() => {
//         expect(coffee("tired")).toEqual("Drink Coffee")
//      expect(coffee("not tired")).toEqual("Keep Working")
//     })
// })

// Psuedo Code
// function: Create a function named coffeee
// Input: A string indicating tiredness
// Expected outcome: Drink coffee if tired, Keep working if not
// If statement will be usewd for the different outcomes



// Write the function that will make the test pass.

// const coffee = (string) => {
//  return string === "tired" ? "Drink Coffee": "Keep Working"

// }


// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

// describe("Stress", () => {
//     it("returns a string depending on if your stressed or nah",() => {
//         expect(Stress("Stressed")).toEqual("Relax")
//         expect(Stress("notStressed")).toEqual("Keep Working")
//     })
// })


// Write the function that will make the test pass.

// Psuedo Code
// function: Create a function named Stress
// Input: A string indicating Stress
// Expected outcome: Relax if tired, Keep working if not
// If statement will be used for the different outcomes


// const Stress = (string) => {
// return  string === "Stressed" ? "Relax": "Keep Working"

// }


// Write the test for a function that returns "in budget" if a price is lower than $300.

// describe("budget", () => {
//     it("returns if the price is lower than $300 or not", () => {
//         expect(budget(257)).toEqual("in budget")
//         expect(budget(5000)).toEqual("you're over the budget")
//     })
// })

// Write the function that will make the test pass.

//PSEUDO CODE:
    // function: create a function named budget
    // input: a number that indicates money
    // output: if the price is < 300, it would return "in budget"
            // else, "you're over the budget"
    // use an if statement to determine is the input is above or below budget

// const budget = (cash) => {
//     return cash < 300 ? "in budget" : "you're over the budget"
// }



// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.

// describe("smallerNumber", () => {
//     it("returns the smaller number of the two arguments", () => {
//         expect(smallerNumber(32, 56)).toEqual(32)
//         expect(smallerNumber(250, 120)).toEqual(120)
//     })
// })

// Write the function that will make the test pass.

//PSEUDO CODE:
    // function: create a function named smallerNumber
    // input: two numbers
    // output: returns the smaller number
    // use an if statement to determine is the first or second number is smaller

// const smallerNumber = (num1, num2) => {
//     return num1 < num2 ? num1 : num2
// }



// Write the test for a function that takes in one argument(number) and returns whether the number is odd.

describe("oddNumber", () => {
    it("returns whether the number is odd", () => {
        expect(oddNumber(9)).toEqual("odd")
        expect(oddNumber(24)).toEqual("not odd")
    })
})


// Write the function that will make the test pass.

//PSEUDO CODE:
    // function: create a function named oddNumber
    // input: one number
    // output: returns if the number is odd or not
    // use an if statement to determine if the number is odd

const oddNumber = (num1) => {
    return num1 % 2 === 1 ? "odd" : "not odd"
}



// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Write the function that will make the test pass.
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
