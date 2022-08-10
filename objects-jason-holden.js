const person = {
    firstName: "Arthur",
    lastName: "Dent",
    homePlanet: "Earth",
    message: function() {
        return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
    }
  };

// Write the code that accesses the first name of the person object.

console.log(person.firstName);

// Write the code that accesses the last name of the person object.

console.log(person.lastName);

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// Update the person object with a method that logs "Arthur Dent is from planet Earth".

console.log(person.message());

const product = {
    name: "chair",
    price: 24.99,
    
  };

//   Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".

const describeProduct = (value) => {
    return `the product is a ${value.name}. It costs ${value.price}`
}

console.log(describeProduct(product))


//   Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

const totalWithTax = (value) => {
        var salesTax = value.price * 0.07
        var newPrice = value.price + salesTax
        return newPrice.toFixed(2)
    }
console.log(totalWithTax(product));    

const lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"],
    message: function () {
        return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]}, ${this.ingredients[1]}, ${this.ingredients[2]}.`
    } 
}
  

//   Write the code that accesses the ingredients property.

console.log(lunch.ingredients);

//   Write the code that access the third ingredient of the lunch object.

console.log(lunch.ingredients[2]);

//   Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

const ingredientForSandwich = (value) => {
    return `The ingredients for a ${value.name} ${value.type} are ${value.ingredients[0]}, ${value.ingredients[1]}, ${value.ingredients[2]}.`
}

console.log(ingredientForSandwich(lunch));

//   Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."  

console.log(lunch.message());

const animals = [
    { name: "Waffles", type: "dog", age: 7 },
    { name: "Fluffy", type: "cat", age: 14 },
    { name: "Spelunky", type: "dog", age: 4 },
    { name: "Hank", type: "cat", age: 11 },
  ];

//   Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.

const catArray = (array) => {
    return array.filter(value => value.type === "cat")
}

console.log(catArray(animals));

//   Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
//   Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
//   Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.  



