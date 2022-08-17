// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
//PC:
// write function called "areYouTired"
// create it statement
// return "drink coffee" if tired
// return "keep working" if not tired

// describe("areYouTired", () => {
//     it("returns drink coffee or keep working based on input", () => {
//         expect(areYouTired("yes")).toEqual("drink coffee");
//         expect(areYouTired("no")).toEqual("keep working");
//   })
// })

// const areYouTired =(string) => {
//     if (string === "yes") {
//         return "drink coffee";
//     } else if (string ==="no"){
//         return "keep working";
//     }
// }
//     console.log(areYouTired("yes"))
//     console.log(areYouTired("no"))

// Write the function that will make the test pass.
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

// describe("areYouStressed", () => {
//     it("returns relax or keep going based on input", () => {
//         expect(areYouStressed("yes")).toEqual("relax");
//         expect(areYouStressed("no")).toEqual("keep going");
//   })
// })

// const areYouStressed =(string) => {
//     if (string === "yes") {
//         return "relax";
//     } else if (string ==="no"){
//         return "keep going";
//     }
// }
//     console.log(areYouStressed("yes"))
//     console.log(areYouStressed("no"))


// Write the function that will make the test pass.
// Write the test for a function that returns "in budget" if a price is lower than $300.

describe("canAfford", () => {
    it("returns in budget or not in budget based on input", () => {
        expect(canAfford("<300")).toEqual("in budget");
        expect(canAfford(">=300")).toEqual("not in budget")
    })
})

const canAfford =(string) => {
    if (string === "<300") {
        return "in budget";
    } else if (string ===">=300"){
        return "not in budget";
    }
}
    console.log(canAfford("200"))
    console.log(canAfford("399"))

// Write the function that will make the test pass.
// Write the test for a function that takes in two arguments(numbers) and returns the smaller number. 
// PC: Write out test description & run test
    // create function called mini, argument has two values, use math.min to determine smaller value 
    // input: numbers
    // output: return smaller number of two 


    describe("mini", () => {
        it("returns smaller of two numbers", () => {
            expect(mini(21, 89)).toEqual(21);
            expect(mini(100, 34)).toEqual(34);
        })
    })

    const mini = (num1, num2) => {
        return Math.min(num1, num2);
    }   

    // math.min took the place of conditionals

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