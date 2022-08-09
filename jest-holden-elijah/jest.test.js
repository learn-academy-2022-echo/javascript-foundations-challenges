// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Write the function that will make the test pass.

//Psuedo Code:
// declare caffinated()
// parameters - string for either "yes" or "no"
// expected output - string message "drink coffee" or "keep working"

describe("caffinated",()=>{
    it("returns the string drink coffee if you are tired or keep working",()=>{
        expect(caffinated("yes")).toEqual("drink coffee")
        expect(caffinated("no")).toEqual("keep working")
    })
})

const caffinated = (string) => {
    if(string === "yes") {
        return "drink coffee"
    } else {
        return "keep working"
    }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Write the function that will make the test pass.

//Psuedo Code:
// declare stressChecker()
// parameters - string for either "yes" or "no"
// expected output - string message "relax" or "keep going"

describe("stressChecker",()=>{
    it("returns the string relax if you are stressed or keep going",()=>{
        expect(stressChecker("yes")).toEqual("relax")
        expect(stressChecker("no")).toEqual("keep going")
    })
})

const stressChecker = (string) => {
    if(string === "yes") {
        return "relax"
    } else {
        return "keep going"
    }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.
// Write the function that will make the test pass.

//Psuedo Code:
// declare budgetChecker()
// parameters - num as an input value
// expected output - string message "in budget"

describe("budgetChecker",()=>{
    it("returns the string in budget if an input price is lower than $300",()=>{
        expect(budgetChecker(200)).toEqual("in budget")
    })
})

const budgetChecker = (num) => {
        if( num < 300) {
            return "in budget"
        }
}


// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
// Write the function that will make the test pass.

//Psuedo Code:
// declare smallNum()
// parameters - number1 and number2 as an input values
// expected output - smaller number of either number1 or number2

describe("smallNum",()=>{
    it("returns the smaller of two numbers",()=>{
       expect(smallNum(20, 50)).toBeLessThan(50)
    })
})

const smallNum = (number1, number2) => {
    if(number1 < number2) {
        return number1
    } else if(number1 > number2) {
        return number2
    }
}

// Write the test for a function that takes in one argument(number) and returns whether the number is odd.
// Write the function that will make the test pass.

//Psuedo Code:
// declare oddNum()
// parameters - number as an input value
// expected output - "odd" if the number is odd

describe("oddNum",()=>{
    it("returns whether the number is odd or not",()=>{
       expect(oddNum(21)).toEqual("odd")
    })
})

const oddNum = (number) => {
    if(number % 2 !== 0) {
        return "odd"
    }
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Write the function that will make the test pass.

//Psuedo Code:
// declare fruitColor()
// parameters - a string with the value of either "banana", "apple", or "purple"
// expected output - either "yellow", "red", or "purple" depending on strings value

describe("fruitColor",()=>{
    it("returns yellow if banana, red if apple, and purple if grape",()=>{
       expect(fruitColor("banana")).toEqual("yellow")
       expect(fruitColor("apple")).toEqual("red")
       expect(fruitColor("grape")).toEqual("purple")

    })
})

const fruitColor = (string) => {
    if(string === "banana") {
        return "yellow"
    } else if(string === "apple") {
        return "red"
    } else if(string === "grape") {
        return "purple"
    }
}

// Write the test for a function called rick that returns "Morty".
// Write the function that will make the test pass.

//Psuedo Code:
// declare getShwifty()
// parameters - none
// expected output - the string "Morty"

describe("getShwifty",()=>{
    it("returns the string Morty ",()=>{
       expect(getShwifty()).toEqual("Morty")
    })
})

const getShwifty = () => {
    return "Morty"
}
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