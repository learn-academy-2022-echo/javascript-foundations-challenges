//Q1.
const person = {
    firstName: "Arthur",
    lastName: "Dent",
    homePlanet: "Earth",
    planet: function () {
        return "Arthur Dent is from planet Earth"
    }
  };
// 1a)Write the code that accesses the first name of the person object.
console.log(person.firstName)
// 1b)Write the code that accesses the last name of the person object.
console.log(person.lastName)
// 1c)Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
console.log(person.homePlanet)
// 1d)Update the person object with a method that logs "Arthur Dent is from planet Earth".
console.log(person.planet())
// Psuedocode:
// write a function to grab the first name of an object
// write a function to grab the last name of an object
// update code, so that arthur's property:homePlanet is set to Earth
// create a console that says "Arthur Dent is from planet Earth".

//Q2. 
const product = {
    name: "chair",
    price: 24.99,
    describeProduct: function () {
        return `The product is a ${this.name}. It costs ${this.price}`
    },
    totalWithTaxes: function () {
        return product.price * 1.07
    }
  }
// 2a) Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
console.log(product.describeProduct())
// 2b) Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
            //turns number into string!!!!!!
        console.log((product.totalWithTaxes().toFixed(2)))

//Pseudocode:
//Declare a function called describeProduct, takes in an arguement, and outputs the string; "The product is a chair. It costs $24.99".
// Declare a function called totalWithTax that takes an objects as an arguenment and returns the total cost of chair + tax 
// .toFixed(insertnumberhere) is a method turns a number into a string and then rounds the string to a specific number of decimals 

//Q3. 
const lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"],
    tutorial: function () {
        return "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
    }

  };

//  3a) Write the code that accesses the ingredients property.
console.log(lunch.ingredients)
//  3b) Write the code that access the third ingredient of the lunch object.
console.log(lunch.ingredients[2])
//  3c) Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
const theThing = (value) => {
    if (value === lunch.name){
        return "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
    }
}
console.log(theThing(lunch.name))
//   3d) Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
console.log(lunch.tutorial())

// Q4.
const animals = [
    { name: "Waffles", type: "dog", age: 7 },
    { name: "Fluffy", type: "cat", age: 14 },
    { name: "Spelunky", type: "dog", age: 4 },
    { name: "Hank", type: "cat", age: 11 },
  ];

//   4a) Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
const pets = (array) => {
    return array.filter(value => value.type === "cat")
}
console.log(pets(animals))
//   4b) Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
// const petsName = (array) => {
//     return array.forEach((array.name) => {
//         console.log(
//     })
// }
//   4c) Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.

//   4d) Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
  
class LatteMaker {
    constructor (flavor, milktype, shots) {
        this.flavor = flavor,
        this.milktype = milktype,
        this.shots = shots
    }
        profile() {
        return [this.flavor , this.milktype, this.shots]
        }
}


const latte1 = new LatteMaker ("cheese","2","3" )
console.log(latte1.profile())