// Q1. Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Write the function that will make the test pass.
// Psuedocode -- 
// 1. Declare a Function called functionName
// 2. Parameter is a string that says, "tired" or "not tired"
// 3. Output will be another string 
// 4. Expected Outcome is "drink coffee" or "keep working"

 describe("functionName", () => {
    it ("returns drink coffee or keep working", () => {
        expect (functionName("tired")).toEqual("drink coffee");
        expect (functionName("not tired")).toEqual("keep working");
    });
});

// Good Fail:  FAIL  ./jest.test.js
//   functionName
//   ✕ returns drink coffee or keep working (1 ms)

// ● functionName › returns drink coffee or keep working

//   ReferenceError: functionName is not defined

const functionName = (string) => {
    if (string === "tired"){
        return "drink coffee"
    } else {
        return "keep working"
    }
}

// Success!!!  PASS  ./jest.test.js
//   functionName
//   ✓ returns drink coffee or keep working (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.572 s, estimated 1 s

// Q2. Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Write the function that will make the test pass.
// Psuedocode -- 
// 1. Declare a Function called billy
// 2. Parameter is a string that says, "stressed" or "not stressed"
// 3. Output will be another string 
// 4. Expected Outcome is "relax" or "keep going"

describe ("billy", () => {
    it ("will take a string and return relax or keep going", () => {
        expect (billy("stressed")).toEqual("relax");
        expect (billy("not stressed")).toEqual("keep going");
    });
});

// Good Fail:  FAIL  ./jest.test.js
//   functionName
//   ✓ returns drink coffee or keep working (2 ms)
// billy
//   ✕ will take a string and return relax or keep going (1 ms)

// ● billy › will take a string and return relax or keep going

//   ReferenceError: billy is not defined

const billy = (string) => {
    if (string === "stressed"){
        return "relax"
    } else{
        return "keep going"
    }
}

// // Success! PASS  ./jest.test.js
//   functionName
//   ✓ returns drink coffee or keep working (4 ms)
// billy
//   ✓ will take a string and return relax or keep going (1 ms)

// Test Suites: 1 passed, 1 total

// Q3. Write the test for a function that returns "in budget" if a price is lower than $300.
// Write the function that will make the test pass.
// Psuedocode -- 
// 1. Declare a Function called price
// 2. Parameter is a number 
// 3. Output will be another string 
// 4. Expected Outcome is "in budget" below $300 and "get job" above $300
// price(100) are these even correct...????

describe ("price", () => {
    it("will return in budget or get a job", () => {
        expect (price(100)).toEqual("in budget");
        expect (price(400)).toEqual("get job");
    });
});

//Good Fail  FAIL  ./jest.test.js
//   functionName
//   ✓ returns drink coffee or keep working (3 ms)
// billy
//   ✓ will take a string and return relax or keep going (1 ms)
// price
//   ✕ will return in budget or get a job (2 ms)

// ● price › will return in budget or get a job

//   ReferenceError: price is not defined

const price = (value) => {
    if (value > 300){
        return "get job"
    } else {
        return "in budget"
    }
}

// Q4. Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
// Write the function that will make the test pass.
// 1. Declare a Function called comparison
// 2. Parameters are numbers 
// 3. Output a number
// 4. Expected Outcome is the smaller number of the two

describe ("comparison", () => {
    let num1 = 4
    let num2 = 6
    let num3 = 10
    let num4 = 8
    it ("input 2 numbers, computer returns the smaller one", () => {
        expect (comparison(num1, num2)).toEqual(num1);
        expect (comparison(num3, num4)).toEqual(num4);
    });
});

// Good Fail: 
// FAIL  ./jest.test.js
// functionName
//   ✓ returns drink coffee or keep working (4 ms)
// billy
//   ✓ will take a string and return relax or keep going
// price
//   ✓ will return in budget or get a job (1 ms)
// comparison
//   ✕ input 2 numbers, computer returns the smaller one (2 ms)

// ● comparison › input 2 numbers, computer returns the smaller one

//   ReferenceError: comparison is not defined

const comparison = (firstNumber, secondNumber) => {
    if (firstNumber > secondNumber) {
        return secondNumber
    } else {
        return firstNumber
    }
} 

// Q5. Write the test for a function that takes in one argument(number) and returns whether the number is odd.
// Write the function that will make the test pass.
// 1. Declare a Function called oddNum
// 2. Parameter is a number 
// 3. Output a string tells if the number is odd or not odd 
// 4. Expected Outcome if oddd number is inputted we output a string that says "odd"

describe ("oddNum", () => {
    it ("input a number if its odd gives the string odd if not say not odd", () => {
            expect (oddNum(9)).toEqual("odd");
            expect (oddNum(6)).toEqual("not odd");
    }) ;
});

// Good Fail  FAIL  ./jest.test.js

//   ● Test suite failed to run

//   ReferenceError: oddNum is not defined

const oddNum = (number) => {
    if (number % 2 !== 0){
        return "odd"
    }else {
        return "not odd"
    }
}

// Success Test Suites: 1 passed, 1 total
// Tests:       5 passed, 5 total

// Q6. Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Write the function that will make the test pass.
// 1. Declare a Function called fruitColor
// 2. Parameter is a string of a fruit 
// 3. Output a string tells the fruits color for banna, apple, and grape
// 4. Expected Outcome gives the color of the 3 fruit in string 

describe ("fruitColor", () => {
    it ("gives the color of the 3 fruits: banna, apple, and grape", () => {
            expect (fruitColor("apple")).toEqual("red");
            expect (fruitColor("banana")).toEqual("yellow");
            expect (fruitColor("grape")).toEqual("purple");
            

    });
});

// good fail     ReferenceError: fruitColor is not defined

const fruitColor = (string) => {
    if (string === "apple"){
        return "red"
    } else if (string === "grape"){
        return "purple"
    } else if (string === "banana"){
        return "yellow"
    } else {
        return 
    }
    }

   
    // Success Test Suites: 1 passed, 1 total
// Tests:       6 passed, 6 total

// Q7. Write the test for a function called rick that returns "Morty".
// Write the function that will make the test pass.

describe ("rick", () => {
    it ("always returns morty", () => {
        expect (rick()).toEqual("morty")
    })
})


// ReferenceError: rick is not defined

const rick = () => {
    return "morty"
}

// Q8. 