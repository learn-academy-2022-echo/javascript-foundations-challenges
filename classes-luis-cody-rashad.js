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

var blackCoffee = new Coffee("black coffee", 0, 0)
console.log(blackCoffee.coffeeProfile());


// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.

var coffeeOrder = new Coffee("basic", 1, 2)
console.log(coffeeOrder.coffeeProfile())

// Latte Maker
class Latte {
    constructor(flavor, type, shots) {
        this.flavor = flavor;
        this.type = type;
        this.shots = shots;
    }
    latteProfile() {
        return `A ${this.type} ${this.flavor} latte with ${this.shots}`
    }
}


// Write a Latte class that takes a flavor, a milk type and a number of shots.

// class Latte {
//     constructor(flavor, type, shots) {
//         this.flavor = flavor;
//         this.type = type;
//         this.shots = shots;
//     }

// }

// Write a method for your Latte class that outputs the latte's profile.

// latteProfile() {
//     return `A ${type} ${flavor} latte with ${shots}`
// }

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.

var regLatte = new Latte("basic", "regular", "a single shot")
console.log(regLatte.latteProfile());

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
var hazeLatte = new Latte("hazelnut","almond milk,", "a double shot")
console.log(hazeLatte.latteProfile())
// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
class Volume {
  constructor(radius,height,) {
    this.radius = radius ** 2;
    this.height = height;
    this.pi = 3.14159;
  } 
  volumeOfCyl() {
    return (this.pi * this.radius * this.height).toFixed(4)
  }
}

var cyl1 = new Volume(2,4,this.pi)
console.log(cyl1.volumeOfCyl())

// Write the code that creates three unique cylinder objects

var unique1 = new Volume(1,4,)
console.log(unique1.volumeOfCyl())
var unique2 = new Volume(5,10)
console.log(unique2.volumeOfCyl())
var unique3 = new Volume(9,13)
console.log(unique3.volumeOfCyl())