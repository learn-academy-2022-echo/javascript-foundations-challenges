// const person = {
//     firstName: "Arthur",
//     lastName: "Dent",
//   };

// //   Write the code that accesses the first name of the person object.

// console.log(person.firstName)

// // Write the code that accesses the last name of the person object.

// console.log(person.lastName)

// // Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

// person.homePlanet = "Earth"
// console.log(person.homePlanet)

// Update the person object with a method that logs "Arthur Dent is from planet Earth".

//  person.sentence = strSentence = () => {
//     return `${person.firstName} ${person.lastName} is from planet ${person.homePlanet}`
// }



// const product = {
//     name: "chair",
//     price: 24.99,
//   };

// //   Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
// // create a function named describeProduct
// // input is name "chair"
// // output price


// const describeProduct = () => {
//     return `The product is a ${product.name}. It costs ${product.price}.`
// }
// console.log(describeProduct(product))

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
// create function named totalWithTax
//take product object as arguemnt 
// 

// const totalWithTax = () => {
//     return (product.price * 1.07).toFixed(2)
// }
// console.log(totalWithTax(product))

const lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"],
  };

  // Write the code that accesses the ingredients property.

lunch.ingredients
console.log(lunch.ingredients)
// Write the code that access the third ingredient of the lunch object.

lunch.ingredients[2]
console.log(lunch.ingredients[2])
// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

var ingredientList = () => {
    return `The ingredients for a PB and Banana sandwich are ${lunch.ingredients[0]}, ${lunch.ingredients[1]}, and ${lunch.ingredients[2]}.`
}
// console.log(ingredientList(lunch))
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

lunch.string = ingredientList = () => {
    return `The ingredients for a PB and Banana sandwich are ${lunch.ingredients[0]}, ${lunch.ingredients[1]}, and ${lunch.ingredients[2]}.`
}

console.log(lunch.string())