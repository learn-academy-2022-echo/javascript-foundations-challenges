//Consider this variable:

const person = {
  firstName: "Arthur",
  lastName: "Dent",
  homePlanet: "Earth",
};
// Write the code that accesses the first name of the person object.
// Write the code that accesses the last name of the person object.
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// Update the person object with a method that logs "Arthur Dent is from planet Earth".
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.homePlanet)
// console.log(person.firstName, person.lastName, "is from planet", person.homePlanet.)

//Consider this variable:
// const product = {
//   name: "chair",
//   price: 24.99,
//   describeProduct: "The product is a chair. It costs $24.99"
//   totalWithTax: fucntion () {
//     return ".price * 7%"
//   };
//   let totalWithTax = product.price * 7%
// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.


//Consider this variable:

const lunch = {
  name: "beef pho",
  type: "soup",
  ingredients: ["broth", "noodles", "brisket"],
  makeSandwich: function() {
    return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]} ${this.ingredients[1]} and ${this.ingredients[2]}`
  }              
  };
  console.log(lunch.makeSandwich())
// Write the code that accesses the ingredients property.✅
// Write the code that access the third ingredient of the lunch object.✅
// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."✅
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

// console.log(lunch.ingredients)
// console.log(lunch.ingredients[2])
// console.log("The ingredients for PB and Banana sandwich are", lunch.ingredients[0], lunch.ingredients[1], "and", lunch.ingredients[2])
// console.log(lunch["sandwich"])
