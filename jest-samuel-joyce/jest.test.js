// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

describe("drink", () => {
    it("returns drink coffee if you are tired and keep working if you are not tired.", () => {
        expect(drink("yes")).toEqual("drink coffee")
        expect(drink("no")).toEqual("keep working")
    })
}) 

// create a function called drink
// use conditional statements to determine whether you are tired or not
// if tired, display drink coffee
// if not tired, display keep working

// Write the function that will make the test pass.

const drink = (string) => {
    if(string === "yes") {
        return "drink coffee"
    } else if (string === "no") {
        return "keep working"
    }
}


// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

describe("stress", () => {
    it("relax if you are stressed and keep going if you are not stressed.", () => {
        expect(stress("yes")).toEqual("relax")
        expect(stress("no")).toEqual("keep going")
    })
}) 

// Write the function that will make the test pass.
// create a function called stress
// use conditional statements to determine whether you are stressed or not
// if tired, display relax
// if not tired, display keep going

const stress = (string) => {
    if(string === "yes") {
        return "relax"
    } else if (string === "no") {
        return "keep going"
    }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.
let number1 = 200
let number2 = 311
describe("money", () => {
    it("return in budget if a price is lower than $300", () => {
        expect(money(number1)).toEqual(`${number1} is in budget`)
        expect(money(number2)).toEqual(`${number2} is too expensive`)
    })
}) 

// Write the function that will make the test pass.
// create a function called money
// use conditional statements to determine whether price is over or under 300
// if over 300, display not in budget
// if under 300, display in budget

const money = (number) => {
    if(number < 300) {
        return `${number} is in budget`
    } else {
        return `${number} is too expensive`
    }
}

// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.

describe("numbers", () => {
    it("take two arguments and return the smaller number", () => {
        expect(numbers(number1, number2)).toEqual(`${number1} is the smaller number`)
    })
}) 


// Write the function that will make the test pass.
// create function named numbers
// takes two arguments as numbers
// determine which one is smaller using conditionals
// return smaller number

const numbers = () => {
    if(number1 < number2) {
        return `${number1} is the smaller number`
    } else {
        return `${number2} is the smaller number`
    }
}

// Write the test for a function that takes in one argument(number) and returns whether the number is odd.

describe("oddNum", () => {
    it("take one argument and return whether the number is odd", () => {
        expect(oddNum(number2)).toEqual(`${number2} is odd`)
    })
}) 


// Write the function that will make the test pass.

// create function named oddNum
// takes an argument as a number
// determine if its odd or even using modulo operator
// return odd number if it is odd, return no if it isnt

const oddNum = (num1) => {
    if(num1 % 2 !== 0) {
        return `${num1} is odd`
    } else {
        return `${num1} is even`
    }
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

describe("fruitBasket", () => {
    it("takes in a fruit and returns yellow if the argument is banana, red if apple and purple if grape.", () => {
        expect(fruitBasket()).toEqual()
        expect(fruitBasket()).toEqual()
    })
}) 


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



// describe("", () => {
//     it("", () => {
//         expect(()).toEqual()
//         expect(()).toEqual()
//     })
// }) 
