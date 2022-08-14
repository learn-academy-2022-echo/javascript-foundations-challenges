// Challenges

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
    //PSEUDO CODE:
        // write the code that makes a black coffee
        // instantiate a new coffee class
        // write a code that outputs the coffee's profile

    // const blackCoffee = new Coffee("black", 0, 0)
    // console.log(blackCoffee);
    // console.log(blackCoffee.coffeeProfile());


// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.
    //PSEUDO CODE:
        // write the code that makes a coffee with 1 cream and 2 sugars
        // instantiate a new coffee class
        // write a code that outputs the coffee's profile

    // const newCoffee = new Coffee("ethiopian", 1, 2)
    // console.log(newCoffee);
    // console.log(newCoffee.coffeeProfile());


// Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.
    //PSEUDO CODE:
        // create a class that takes a flavor, a milk type and a number of shots

class Latte{
    constructor(flavor, milk, shots){
        this.flavor = flavor,
        this.milk = milk,
        this.shots = shots
    }
// Write a method for your Latte class that outputs the latte's profile.
    latteProfile() {
        return `${this.flavor} latte has ${this.milk} milk and ${this.shots} shots of espresso`
    }
}
// console.log(new Latte("vanilla", "oat", 2));

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
// const singleShot = new Latte("regular", "oat", 1)
// console.log(singleShot.latteProfile());
// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
// const doubleShot = new Latte("hazelnut", "almond", 2)
// console.log(doubleShot.latteProfile());


// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
    //PSEUDO CODE:
        // write a class named Volume
        // input: radius, height
        // output: volume

class Volume {
    constructor(radius, height){
        this.radius = radius,
        this.height = height
        this.volume = this.cylinderVolume()
    }
    // const volume = [];

    cylinderVolume() {
        return Math.round(Math.PI * (this.radius ** 2) * this.height * 10000) / 10000
    }
}
// Write the code that creates three unique cylinder objects
const cylinder1 = new Volume(4, 5)
console.log(cylinder1.cylinderVolume());
console.log(cylinder1);
console.log(cylinder1.volume);

const cylinder2 = new Volume(21, 50)
const cylinder3 = new Volume(9, 32)
console.log(cylinder2, cylinder3);
