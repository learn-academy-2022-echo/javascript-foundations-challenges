// Challenges
// Consider this variable:

// const person = {
//   firstName: "Arthur",
//   lastName: "Dent",
// };
// Write the code that accesses the first name of the person object.
//Psuedocode: used dot notation to access they key firstName ..the outputwas : Arthur
// console.log(person.firstName)
// // Write the code that accesses the last name of the person object.
//Psuedocode: used dot notation to access they key was firstName
// console.log(person.lastName)
// // Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
//Pseudocode: used the name of the object. then the name of the new property homePlanet and the value 'Earth' added on some more properties to see that it accept any number of properties

//  person.homePlanet = 'Earth'        
// person.petName = 'Bear-Bear'
// console.log(person)
// Update the person object with a method that logs "Arthur Dent is from planet Earth".
//Pseudocode:add a value of sentence and give it a function that uses string interpolation to say Arthur Dent is from planet Earth
//in the console log we call the object person . then the sentence function and we get the sentence
// Consider this variable:
// const person = {
//     firstName: "Arthur",
//     lastName: "Dent",
//     homePlanet: "Earth",
//     sentence: function () {
//         return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
//     }

//   };
// console.log(person.sentence())

// const product = {
//   name: "chair",
//   price: 24.99,
// };
// // Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
// //Pseudocode: create function called describeProduct 
// //input: a product object
// //output: logs "The product is a chair. It costs $24.99".
// //use string interpolation to return string
// //access object values using dot notation
// const describeProduct = (obj) => {
//     return `The product is a ${obj.name}. It costs $${obj.price}.`
// }
// console.log(describeProduct(product))

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
// const product = {
//     name: "chair",
//     price: 24.99,
//   };
// //Pseudocode:write a function called totalWithTax
// //input: product object
// //output: price of chair with 7% sales tax 
// //return Math.round(multiply by 100) divided by 100 will round the number two decimals
// const totalWithTax = (obj) => {
//     return Math.round(obj.price * 1.07*100)/100
// }

// console.log(totalWithTax(product));
// Consider this variable:
// const lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"],
// };
// // Write the code that accesses the ingredients property.
// console.log(lunch.ingredients);
// // Write the code that access the third ingredient of the lunch object.
// console.log(lunch.ingredients[2]);
// // Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// //Pseudocode: write function named minions 
// //input: a lunch object
// //output:sentence that describes lunch object
// //use string interpolation and dot notation to return the output
// const minions = (food) => {
//     return `The ingridients for a ${food.name} ${food.type} are ${food.ingredients}.`
// }
// console.log(minions(lunch));
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// lunch.minions = minions
// console.log(lunch);



// // Consider this variable:

const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 },
];

// const nameChecker = (pets) => {
//     return animals.name
// }
// console.log(nameChecker(pets))
// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
//Pseudocode: write a function named catsOnly 
//input: an array of objects 
//output: a new array with only objects that are cats 
//use the filter method
// const catsOnly = (pets) => {
//     return pets.filter(value => value.type === "cat")
// }
// console.log(catsOnly(animals));
// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
//Pseudocode: write a function called animalNames 
//input:  an array of animal objects
//output: an array with only the animal names 
// const animalNames = (pets) => {
//     return pets.map(value => value.name)
// }
// console.log(animalNames(animals));
// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
//Pseudocode: write a function called oldPets 
//input: array of animal objects
//output: array of animal names for animals that are older than 10
// const oldPets = (pets) => {
//     const seniorPets = pets.filter(value => value.age > 10 )
//     const seniorNames = seniorPets.forEach(value => value.name)
//     return seniorNames
// } 
   
// console.log(oldPets(animals));

// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
//Psuedo code: make a function called animalId that takes in an array 
//input: an array of animal objects
//output: a new array with a sentence about each animal 
const animalNames = animals.map((pets) => {
    return `${pets.name} is a great companion.`
}); 
 console.log(animalNames)
// // Consider this variable:

const author = {
  name: "H. G. Wells",
  genre: "science fiction",
};
// Write the code that destructures the author object so that the following code snippet will run successfully:
const {name, genre } = author
console.log(`${name} is a ${genre} author`);
// // Output: "H. G. Wells is a science fiction author"
// Consider this variable:

const pokeOne = {
  species: "Charmandar",
  pokemon_type: "Fire",
};

// const {species, pokemon_type} = pokeOne // destructured, not necessary
//as the function does that?
const describePokemon = (type) => {
    return `${type.species} is a ${type.pokemon_type} pokemon`
}

// const describePokemon = (type) => {
//     return ` ${species.type} is a ${pokemon_type.type}`
// }
const pokeTwo = {
  species: "Magikarp",
  pokemon_type: "Water",
};

// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:
//Pseudocode: make a function that will take and object and 
//input a type of pokemone object 
//output: a string with the species and type of pokemon
 console.log(describePokemon(pokeOne));
// // Output: "Charmandar is a Fire pokemon"
console.log(describePokemon(pokeTwo));
// // Output: "Magikarp is a Water pokemon"

// Consider this variable:

const triangleDimensions = {
  base: 2,
  height: 5,
  volume: function (tri) {
    return (this.base * this.height)/2
  }
};
// Modify the triangleDimensions object to have a method that returns the area of the triangle.
console.log(triangleDimensions.volume());
//Pseudocode: going to add function which is called volume inside the object it is a method that will 
//return the area of a trianhle
//input is the base and height and output is the base * height divided by 2 
triangleDimensions.base = 6
// Write the code that will update the base to be the value of 6.
console.log(triangleDimensions.base)
// Consider this variable:

const learn = {
  cohorts: {
    2021: ["Alpha", "Bravo", "Charlie", "Delta", "Echo"],
    2022: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"],
  },
};
// Write the code that logs the name of your cohort.
const echo = learn.cohorts.filter((value) => value.cohorts[2022] === "Echo")
console.log(echo(learn))


// Write the code that uses destructuring to log the name of your cohort.
// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.