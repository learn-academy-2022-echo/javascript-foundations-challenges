// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.



describe("wantCofee", () => {
    it ("create a string that returns drink coffee if tired and keep working if not tired",() => {
        expect(wantCofee("yes")).toEqual("drink coffee")
        expect(wantCofee("no")).toEqual("keep working")
    })
})

// Psuedo Code
// Declare a function named wantCofee
// Input/parmater - string of yes or no
// Expected output - return "drink coffee" if you are tired and "keep working" if you are not tired.


// Write the function that will make the test pass.
const wantCofee = (string) => {
    if (string === "yes"){
        return "drink coffee"
    }else{
        return "keep working"
    }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

describe("stressed", () => {
    it ("create a string that returns relax if stressed and keep going if not" ,() => {
        expect(stressed("yes")).toEqual("relax")
        expect(stressed("no")).toEqual("keep going")
    })
})

// Write the function that will make the test pass.

// Psuedo Code
// Declare a function named stressed
// Input/parmater - string of yes or no
// Expected output - return "relax" if you are stressed and "keep going" if you are not stressed.

const stressed = (string) => {
    if (string === "yes"){
        return "relax"
    }else{
        return "keep going"
    }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.

describe("budget", () => {
    it ("returns in budget if lower than $300" ,() => {
        expect(budget(value)).toEqual("in budget")
    })
})
// Write the function that will make the test pass.
// pseudo: 
//declare function named budget
//input- a number less than $300
//output- if less than $300 return in budget
var value = 100
const budget = (value) => {
    if(value < 300){
        return "in budget"
    } 
}
// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.

describe("smallOnly", () => {
    let numberOne = 10 
    let numberTwo = 15
  it("compares numbers and returns smaller number",() => {
    expect(smallOnly(numberOne, numberTwo)).toEqual(numberOne)

})
})

// Write the function that will make the test pass.
// pseudo:
// declare a function named smallOnly
// input - takes two numbers
// output - returns smaller number
// use a conditional to compare the two variables using less than operator\
// if the first number is smaller than the second number
// return first number
// else return second number
let numberOne = 10
let numberTwo = 15

const smallOnly = ()=>{
    if(numberOne < numberTwo){
        return numberOne
    } else {
        return numberTwo
    }
}
// Write the test for a function that takes in one argument(number) and returns whether the number is odd.

describe("oddNum", () => {
    let number = 7
    it("returns if number is odd or not", () => {
        expect(oddNum(number)).toEqual("odd")
    })
})

// Write the function that will make the test pass.

// Psuedo code:
// Declare function named odd
// Input: take in a number
// Output: the string "odd"
    // using if statement to determine if number % 2 does not equal 0 then return when number is odd return the string "odd"

    let number = 7
    const oddNum = (number) => {
        if(number % 2 !== 0){
            return "odd"
        }
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