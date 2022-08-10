// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
//  var arr1 = [3, 9, 15, 4, 10];
// // //expected output // --> [30, 90, 150, 40, 100]
// // //Pseudocode:
// // //input an array of numbers and outputs a new array
// // //multiply all the new numbers in the array by 10 and 
// // //
// // const arr2 =arr1.map((value) => {
// // return value *10
// // })
// // console.log(arr2)

// let solve2 =arr1.map(value => value * 10)



// console.log("solve2:",solve2)
// // Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// //Pseudocode
// //input will be an array of numbers and output a new array but only odd numbers
// //using a method of filter we check if the value at any point in the array is 
// //not even if that is true then we return that value
// //
// //

//  var arr2 = [2, 7, 3, 5, 8, 10, 13];
// // expected output// --> [7, 3, 5, 13]
// const oddOrEven = arr2.filter((value)=> {
//     if(value % 2 !== 0){
//         return value;
//     } 
// })
// console.log(oddOrEven)
//const oddChecker =arr2.filter((value))





// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
 var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"];
//expected output // --> "nicework"
// const stringR = comboArr.filter((value) =>{
//     if (typeof value === "string"){
//         return value
//     }
// } )
// stringR2 = stringR.join("")

// console.log(stringR2);

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
var filterArrayValues = [58, " ", "abcd", true, null, false, 0];
// // --> [58, "abcd", true]
//Psuedo code:
//created function  name filterArray 
//If there is a blanl value return nothing
// only output string and numbers and true Boolean val
//output-[58, "abcd", true]
const filterArray = filterArrayValues.filter((value) =>{
    if (value === " "){
        return;
    } else if  (typeof value === "string" || typeof value === "number" ||  value === true){
        return value;
    }
})

console.log(filterArray)


// STRETCH Challenges

// Create a function that takes in a string and returns a new string with all the vowels removed.
var str = "javascript is awesome";
// // --> "jvscrpt s wsm"
//tried to set up a filter to take out all the vowels
//turned string into an array then used a method to filter out vowels and give no return if found.
//
// let newOne =str.split(" ")
// const getErDone = newOne.filter ((value) => {
//     if (value === "a" || value === "e" || value  === "i"|| value === "o"){
//         return;
//     } else if (value === "string"){
//         return value}
        
//     }
// )
// console.log(getErDone)
//Pseudocode to remove the vowels from a string call the relpace() method with the following Regex
// /[aeiou]/gi, ''); The method will return a new string where any vowel in the original string is 
//replaced with nothing
let noVowels = str.replace(/[aeiou]/gi, '');
console.log(noVowels)


// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
 var arr1 = [3, 7, 10, 5, 4, 3];
var arr2 = [7, 8, 2, 1, 5, 4];
// // --> [3, 7, 10, 5, 4, 8, 2, 1]


//Pseudeocode;
// turns two arrays as arguments into one array with no duplicates
let superCombo = [].concat(arr1, arr2);


const dopppleGo = superCombo.filter ((value) =>{
    letnewArr2=[]
    if(value === value){
        return;
    }else {return letnewArr2.push(value[i])}
})
console.log(dopppleGo);