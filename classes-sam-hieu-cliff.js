class Coffee {
    constructor(type, cream, sugar) {
      this.type = type;
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
//   Write the code that makes a black coffee. Then write the code that outputs the coffee's profile.
const blackCoffee = new Coffee('black', 0, 0)
console.log(blackCoffee.coffeeProfile())
  
//   Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.
const fooFoo = new Coffee('FooFoo', 1, 2)
console.log(fooFoo.coffeeProfile())


// Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.

class LatteMaker {
    constructor(flavor, milkType, shotNum) {
        this.flavor = flavor
        this.milkType = milkType
        this.shotNum = shotNum
    }


// Write a method for your Latte class that outputs the latte's profile.
    latteProfile() {
        return `This is a ${this.flavor} latte, it's made with ${this.milkType} milk, and has ${this.shotNums()} ` 
    }

    shotNums() {
        if (this.shotNum > 1) {
          return `${this.shotNum} shots`;
        } else {
          return `${this.shotNum} shot`;
        }
      }

}
// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
// const singleLatte = new LatteMaker('regular', 'normal', 1)
// console.log(singleLatte.latteProfile())

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

// const doubleShot = new LatteMaker('hazelnut','almond milk', 2 )
// console.log(doubleShot.latteProfile())

// Volume of a Cylinder

// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

class Volume {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  } 
  theVolume() {
    return (Math.PI * (this.radius ** 2) * this.height).toFixed(4)
  }
}
const dowel = new Volume(3, 4);
console.log(dowel.theVolume())


// Write the code that creates three unique cylinder objects

const plumbingPipe = new Volume(35, 12);
const drinkingStraw = new Volume(1, 2);
const waterTank = new Volume(1235234, 6509835);

console.log(plumbingPipe.theVolume())
console.log(drinkingStraw.theVolume())
console.log(waterTank.theVolume())

console.log("All 3 Volumes", plumbingPipe.theVolume(), drinkingStraw.theVolume(), waterTank.theVolume())