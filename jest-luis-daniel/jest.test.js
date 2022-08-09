// IMPORTANT: Write the test FIRST, see it fail, then write the code to make it PASS.

// IMPORTANT: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
describe("drinkCoffee", () => {
    it('returns "drink coffee" if you are tired and "keep working" if you are not tired', () => {
        expect(drinkCoffee("yes")).toEqual("drink coffee")
        expect(drinkCoffee("no")).toEqual("keep working")
    })
})

// Write the function that will make the test pass.
const drinkCoffee = (str) => {
    if (str === "yes") {
        return "drink coffee"
    } else if (str === "no") {
        return "keep working"
    }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

describe("relaxedOrStressed", () => {
    it("returns 'relax' if you are stressed and 'keep going' if you are not stressed", () => {
        expect(relaxedOrStressed("yes")).toEqual("relax")
        expect(relaxedOrStressed("no")).toEqual("keep going")
    })
})


// Write the function that will make the test pass.

const relaxedOrStressed = (str) => {
    if (str === "yes") {
        return "relax"
    } else if (str === "no") {
        return "keep going"
    }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.

describe("inBudget", () => {
    it("returns 'in budget' if price is lower than 300", () => {
        expect(inBudget(200)).toEqual("in budget")
        expect(inBudget(500)).toEqual("not affordable")
    })
})


// Write the function that will make the test pass.

const inBudget = (num) => {
    if (num < 300) {
        return "in budget"
    } else {
        return "not affordable"
    }
}


// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.

describe("smallerNum", () => {
    it("takes in two numbers and returns the smaller number", () => {
        expect(smallerNum(3, 2)).toEqual(2)
        expect(smallerNum(10, 5000)).toEqual(10)
    })
})


// Write the function that will make the test pass.

const smallerNum = (num1, num2) => {
    if (num1 < num2) {
        return num1
    } else {
        return num2
    }
}

// Write the test for a function that takes in one argument(number) and returns whether the number is odd.

describe("isOdd", () => {
    it("takes in one number and returns whether number is odd", () => {
        expect(isOdd(15)).toEqual('15 is odd')
        expect(isOdd(26)).toEqual('26 is not odd')
    })
})


// Write the function that will make the test pass.

const isOdd = (num) => {
    if (num % 2 !== 0) {
        return `${num} is odd`
    } else {
        return `${num} is not odd`
    }
}


// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

describe("fruitColor", () => {
    it("takes in a fruit and returns 'yellow' if the argument is banana, 'red' if apple and 'purple' if grape.", () => {
    expect(fruitColor("banana")).toEqual("yellow")
    expect(fruitColor("apple")).toEqual("red")
    expect(fruitColor("grape")).toEqual("purple")
    })
})


// Write the function that will make the test pass.

const fruitColor = (fruit) => {
    if (fruit === "banana") {
        return "yellow"
    } else if (fruit === "apple") {
        return "red"
    } else if (fruit === "grape") {
        return "purple"
    }
} 


// Write the test for a function called rick that returns "Morty".
describe("rickMorty",() => {
    it("returns morty", () => {
        expect(rickMorty("rick")).toEqual("Morty")
    })
})


// Write the function that will make the test pass.
const rickMorty = (str) => {
 if (str === "rick") {
    return "Morty"
 }
}


// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.

describe("greeterFunc", () => {
    it("takes a name as an argument and returns a greeting with that name to the screen.", () => {
        expect(greeterFunc("Luis")).toEqual("Hello Luis")
        expect(greeterFunc("Daniel")).toEqual("Hello Daniel")
    })
})

// Write the function that will make the test pass.

const greeterFunc = (name) => {
    return `Hello ${name}`
}

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
    describe("oddOrEven", () => {
        it("takes a number as an argument and logs whether the number is odd or even.", () => {
            expect(oddOrEven(5)).toEqual("Odd")
            expect(oddOrEven(26)).toEqual("Even")
        })
    })



// Write the function that will make the test pass.

const oddOrEven = (num) => {
    if (num % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
    describe("doubler", () => {
        it("takes a number and returns the result of the number multiplied by 2.", () => {
            expect(doubler(4)).toEqual(8)
            expect(doubler(5)).toEqual(10)
        })
    })



// Write the function that will make the test pass.

const doubler = (num) => {
    return num * 2
}


// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.

// Write the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Write the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
// Write the function that will make the test pass.
