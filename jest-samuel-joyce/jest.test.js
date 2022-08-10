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
        expect(fruitBasket("red")).toEqual("apple")
        expect(fruitBasket("yellow")).toEqual("banana")
        expect(fruitBasket("purple")).toEqual("grape")
    })
}) 

// create function named fruitBasket
// takes an argument as a string with a color 
// determine if it is a banana, apple, or grape 
// return banana, apple, or grape 


// Write the function that will make the test pass.
const fruitBasket = (string) => {
    if(string === "red") {
        return "apple"
    } else if(string === "yellow") {
        return "banana"
    } else if(string === "purple") {
        return "grape"
    } else {
        return "I dont know"
}
}


// Write the test for a function called rick that returns "Morty".

describe("rick", () => {
    it("returns Morty", () => {
        expect(rick()).toEqual("Morty")
    })
}) 


// Write the function that will make the test pass.

// create function named rick
// return morty 

const rick = (string) => {
    return "Morty"
}

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.

let name1 = "Morty"

describe("greeter", () => {
    it("takes a name as an argument and returns a greeting with that name to the screen", () => {
        expect(greeter(name1)).toEqual(`hello ${name1}`)
    })
}) 

// create function named greeter 
// takes a name as an argument 
// return a greeting with that name to the screen

// Write the function that will make the test pass.

const greeter = (name1) => {
        return `hello ${name1}`
    }



// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.

describe("oddOrEven", () => {
    it("takes a number as an argument and logs whether the number is odd or even.", () => {
        expect(oddOrEven(number1)).toEqual(`${number1} is even`)
        expect(oddOrEven(number2)).toEqual(`${number2} is odd`)
    })
}) 

// Write the function that will make the test pass.

// create function named oddOrEven
// takes an argument as a number
// determine if its odd or even using modulo operator
// return odd number if it is odd, return no if it isnt

// Write the function that will make the test pass.

const oddOrEven = (num1) => {
    if(num1 % 2 !== 0) {
        return `${num1} is odd`
    } else {
        return `${num1} is even`
    }
}


// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.

describe("doubler", () => {
    it("takes a number and returns the result of the number multiplied by 2.", () => {
        expect(doubler(number1)).toEqual(number1 * 2)
    })
}) 




// Write the function that will make the test pass.

// create function named doubler
// takes a number as an argument 
// return number and multiply by 2


const doubler = (number) => {
    return number * 2
}



// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.

describe("multiply", () => {
    it("takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.", () => {
        expect(multiply(number1, number2)).toEqual(number1 * number2)
        
    })
}) 


// Write the function that will make the test pass.

// create function named multiply
// takes two numbers as an argument 
// returns the numbers multiplied by the other
// tools: 

const multiply = (number1, number2) => {
    return number1 * number2
}


// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

describe("divisibleBy", () => {
    it("takes two numbers as arguments and returns whether the first number is evenly divisible by the second", () => {
        expect(divisibleBy(number3, number4)).toEqual(`${number3} is evenly divisible by ${number4}`)
    })
}) 

// Write the function that will make the test pass.

// create function named divisibleBy
// takes two numbers as an argument 
// returns the number is evenly divisible by other number or if number is not evenly divisible by other number 
// tools/methods: conditional statments to compare the two values to see if they are divisible to each other

let number3 = 10
let number4 = 5

const divisibleBy = (num1) => {
    if(number3 % number4 === 0) {
        return `${number3} is evenly divisible by ${number4}`
    } else {
        return `${number3} is not evenly divisible by ${number4}`
    }
}



// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.

describe("fizzbuzz", () => {
    it(" If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.", () => {
        expect(fizzbuzz(30)).toEqual("fizzbuzz")
        expect(fizzbuzz(9)).toEqual("fizz")
        expect(fizzbuzz(10)).toEqual("buzz")
    })
}) 


// Write the function that will make the test pass.

// create function named fizzbuzz
// takes a number as an argument and sees if it is divisible by 3, by 5, and by 3 & 5
// returns fizz if the number is divisible by 3, returns buzz if the number is divisible by 5, and returns fizzbuzz if the number is divisible by 5 & 3
// tools/methods: conditional statments to see if the number is divisible by 3, 5, and 3 & 5 

const fizzbuzz = (num) => {
    if(num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz"
    } else if(num % 3 === 0){
        return "fizz"
    } else if(num % 5 === 0) {
        return "buzz"
    }
}