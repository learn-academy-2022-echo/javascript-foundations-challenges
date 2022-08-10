
// Write a method for your Latte class that outputs the latte's profile.
const latte1 = new LatteMaker ("cheese","2","3" )
console.log(latte1.profile())
// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
const regular = new LatteMaker ("regular", "Oat milk", "1" )
console.log(regular.profile())
// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
const hazelnut = new LatteMaker ("hazelnut", "Almond milk", "2" )
console.log(hazelnut.profile())
// Volume of a Cylinder
class volume {
    constructor(radius,height) {
      this.radius = radius;
      this.height = height;
    }
    equasion() {
        return Math.PI * this.radius ** 2 * this.height
    }
}
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
const cylinder = new volume (6,68)
console.log(cylinder.equasion().toFixed(4))
// Write the code that creates three unique cylinder objects
const cylinderOne = new volume (6,68)
console.log("this is cylinderOne", cylinderOne.equasion().toFixed(4))
const cylinderTwo = new volume (30,68)
console.log("this is cylinderTwo", cylinderTwo.equasion().toFixed(4))
const cylinderThree = new volume (42,12)
console.log("this is cylinderThree",cylinderThree.equasion().toFixed(4))