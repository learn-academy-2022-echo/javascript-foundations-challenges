// Challenges
// Consider this variable:

const person = {
  firstName: "Arthur",
  lastName: "Dent",
};
// Write the code that accesses the first name of the person object.
    console.log(person.firstName)
// Write the code that accesses the last name of the person object.
    console.log(person.lastName)
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
    person.homePlanet = "Earth"
    console.log(person.homePlanet)
// Update the person object with a method that logs "Arthur Dent is from planet Earth".
person.message = function() {
    return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
}
console.log(person.message())

// Consider this variable:

const product = {
  name: "chair",
  price: 24.99,
};
// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
    const describeProduct = (obj) => {
        console.log((`The product is a ${obj.name}`))
    }

    describeProduct(product)

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

const totalWithTax = (obj) => {
    return ((obj.price * 0.07) + obj.price).toFixed(2)
}

console.log(totalWithTax(product))


// Consider this variable:

const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"],
};
// Write the code that accesses the ingredients property.
console.log(lunch.ingredients)

// Write the code that access the third ingredient of the lunch object.
console.log(lunch.ingredients[2])

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
const lunchString = (obj) => {
    return `The ingredients for a ${obj.name} ${obj.type} are ${obj.ingredients[0]}, ${obj.ingredients[1]}, and ${obj.ingredients[2]}.` 
}
console.log(lunchString(lunch))

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
lunch.statement = function () {
    return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]}, ${this.ingredients[1]}, and ${this.ingredients[2]}.`
}
console.log(lunch.statement())

// Consider this variable:

const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 },
];

// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
const catsOnly = (arr) => arr.filter(petObj => petObj.type === "cat")
console.log(catsOnly(animals))
 
// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
const animalNames = (arr) => {
    return arr.map(petObj => petObj.name)
}
console.log(animalNames(animals))


// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
const names = (arr) => {
    let result = []
    for (let i = 0; i < arr.length; i ++){
        if (arr[i].age > 10){
            result.push(arr[i].name)
        }
    }
    return result
}
console.log(names(animals))

// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
const animalSentence = (arr) => {
    return arr.map(petObj => `${petObj.name} is a ${petObj.type} and is ${petObj.age} years old.`)
}
console.log(animalSentence(animals))

// Consider this variable:

const author = {
  name: "H. G. Wells",
  genre: "science fiction",
};


// Write the code that destructures the author object so that the following code snippet will run successfully:
const {name,genre} = author
console.log(`${name} is a ${genre} author`);
// // Output: "H. G. Wells is a science fiction author"

// Consider this variable:

const pokeOne = {
  species: "Charmandar",
  pokemon_type: "Fire",
};

const pokeTwo = {
  species: "Magikarp",
  pokemon_type: "Water",
};

// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:
const describePokemon = (arr) => {
  return `${arr.species} is a ${arr.pokemon_type} pokemon.`
}
console.log(describePokemon(pokeOne));
// // Output: "Charmandar is a Fire pokemon"

console.log(describePokemon(pokeTwo));
// // Output: "Magikarp is a Water pokemon"


// Consider this variable:

// const triangleDimensions = {
//   base: 2,
//   height: 5,
// };

// Modify the triangleDimensions object to have a method that returns the area of the triangle.

// NEED HELP
// const area = (arr) => {
//   return (arr.base * arr.height)
// }
// // console.log(area(triangleDimensions))

// // Write the code that will update the base to be the value of 6.

// const triangleDimensions = {
//   base: numOne,
//   height: numTwo,
// };

// const { numOne, numTwo } = triangleDimensions

// console.log(area(triangleDimensions))


// Consider this variable:

const learn = {
  cohorts: {
    2021: ["Alpha", "Bravo", "Charlie", "Delta", "Echo"],
    2022: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"],
  },
};
// Write the code that logs the name of your cohort.
console.log(learn.cohorts.2022)

// Write the code that uses destructuring to log the name of your cohort.
// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.
// // Output: ["2021 Alpha", "2021 Bravo", "2021 Charlie", "2021 Delta", "2021 Echo", "2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot"]