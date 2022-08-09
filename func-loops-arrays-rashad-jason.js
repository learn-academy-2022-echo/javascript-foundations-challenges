//1. Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

var testArr1 = [3, 9, 15, 4, 10];
// --> [9, 27, 45, 12, 30]

const tripler = (array) => {
    let storageArray = []
    for (let i = 0; i < array.length; i++){
        storageArray.push(array[i] *3)
    }
    return storageArray
}
console.log(tripler(testArr1));

//2. Write a function that takes in an array of numbers and returns a new array with only odd numbers.

var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13];
// --> [-7, 3, 5, 13]

let odds = testArr2.filter(n => n%2)

console.log(odds);

//3. Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method

var comboArr = [ 7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k" ];

// filter through array and return only letters
//filter through array and only return letters in a new array


let stringStuff = comboArr.filter((word)=>{
       return typeof word == ("string")
       })
        console.log( stringStuff.join(""))

  // --> "nicework"

  //4. Create a function that takes in an array of numbers and returns the sum.

  var addThese1 = [1, 2, 3, 4];
// --> 10

var addThese2 = [];
// --> 0

 var sum = addThese1.reduce(function(a,b){return a + b}, 0);

 console.log(sum);

 //5. Create a function that takes in an array of numbers and returns the index of the largest number.

 var indexHighestNumber = [1, 4, 2, 3];
// --> 1

const max = Math.max(...indexHighestNumber);

const index = indexHighestNumber.indexOf(max);
console.log(index);

//STRETCH Challenges
//1. Create a function that takes in two arrays and returns one array with no duplicate values.

var arr1 = [3, 7, 10, 5, 4, 3, 3];
var arr2 = [7, 8, 2, 3, 1, 5, 4];
// --> [3, 7, 10, 5, 4, 8, 2, 1]

const merge = arr1.concat(arr2)
const unique = merge.filter((item,pos) => merge.indexOf(item) === pos)

console.log(unique)

//2. Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.

var arrayLength = 6;
var arrayValue = 0;
// --> [0, 0, 0, 0, 0, 0]

var arrayLength = 4;
var arrayValue = 11;
// --> [11, 11, 11, 11]
