// Challenges
// IMPORTANT: Write the test FIRST, see it fail, then write the code to make it PASS.

// IMPORTANT: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
    describe("coffee", () => {
        it("takes a string, logs whether or not you're tired", () => {
            expect(coffee("yes")).toEqual("drink coffee")
            expect(coffee("no")).toEqual("keep working")
        })
    })

// Write the function that will make the test pass.
    const coffee = (string) => {
        if (string === "yes") {
            return "drink coffee"
        } else {
            return "keep working"
        }
    }


// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
    //describe method - takes a string parameter that gives the name of the function and a callback function
    describe("stressed", () => {
        // it method takes a string that describes what the test is doing AND a callback method
        it("returns string 'relaxed' if stressed OR 'keep going' if not stressed", () => {
            // within callback functino of it method, have the expect statement
            expect(stressed("yes")).toEqual("relax")
            expect(stressed("no")).toEqual("keep going")
        })
    })

// Write the function that will make the test pass.
    // PSEUDOCODE
    // declare a function named stressed
    // input/parameter - none
    // expected output/outcome - a string that says "relax" OR "keep going"

    const stressed = (string) => {
        if (string === "yes") {
            return "relax"
        } else {
            return "keep going"
        }
    }

// Write the test for a function that returns "in budget" if a price is lower than $300.
// Write the function that will make the test pass.
// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
// Write the function that will make the test pass.
// Write the test for a function that takes in one argument(number) and returns whether the number is odd.
// Write the function that will make the test pass.
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