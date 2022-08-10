// Coffee Maker
class Coffee {
  constructor(type, cream, sugar) {
    this.type = type.toLowerCase();
    this.cream = cream;
    this.sugar = sugar;
  }

  coffeeProfile() {
    return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`;
  }

  creams() {
    if (this.cream > 1) {
      return `${this.cream} creams`;
    } else {
      return `${this.cream} cream`;
    }
  }

  sugars() {
    if (this.sugar > 1) {
      return `${this.sugar} sugars`;
    } else {
      return `${this.sugar} sugar`;
    }
  }
}
// Write the code that makes a black coffee. Then write the code that outputs the coffee's profile.
const blackCoffee = new Coffee("black",0,0)
console.log(blackCoffee.coffeeProfile())

// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.
const mixedCoffee = new Coffee("mixed", 1,2)
console.log(mixedCoffee.coffeeProfile())

// Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.
class Latte{
    constructor(flavor, milk, shots){
        this.flavor = flavor
        this.milk = milk
        this.shots = shots
    }
    latteProfile(){
        return`A ${this.flavor} Latte with ${this.milk} and ${this.shots} number of shots`
    }
}
// Write a method for your Latte class that outputs the latte's profile.

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
const regularLatte = new Latte("vanilla","regular","1")
console.log(regularLatte.latteProfile())
// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
const favoriteLatte = new Latte("hazelnut","almond milk","2")
console.log(favoriteLatte.latteProfile())

// Volume of a Cylinder

// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
class Cylinder {
    constructor(radius, height) {
      this.pi = 3.141592653589793238
      this.radius = radius
      this.height = height
    }
    
    cylinderProfile(){
    return (this.pi * ((this.radius ** 2) * this.height)).toFixed(4)
  }
}  

// Write the code that creates three unique cylinder objects
var cylOne = new Cylinder(5, 8)
var cylTwo = new Cylinder(10, 9)
var cylThree = new Cylinder(12, 18)

console.log(cylOne.cylinderProfile())
console.log(cylTwo.cylinderProfile())
console.log(cylThree.cylinderProfile())