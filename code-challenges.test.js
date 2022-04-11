// ASSESSMENT 3: Coding Practical Questions with Jest

const { array, number } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
// MYNOTES
// set number that adds two previous numbers to get the following sum-Fibonacci its a set value.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


describe ("fibonacciSeq", () => {
    it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
    //    const input: "6"
    //    const input: "10"
      expect(fibonacciSeq("6")).toEqual[1, 1, 2, 3, 5, 8]
      expect(fibonacciSeq("10")).toEqual[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

    })
  })


//   ReferenceError: fibonacciSeq is not defined


//   Pseudo Code
// Create a function called fibonacciSeq that takes in a number greater than 2
// The newarray that will be return will return an array that is the length containing the number of the Fibonacci Seuqence 
// The Fib Seq the two previous numbers that are added and that sum gives you the following number and so on
// I will loop through array to go through each second value  and add the Fib Sequence. 
//  I will push a newarray that will return valyes for my expected sequence.

// **I googled this function and I am still not 100% sure exactly how I got my value. I understand why we looped and how we added and what index but the rest has me a little stumped**I recieved help with this question**

const fibonacciSeq =(num) =>{
    let newArray =[1]
    let fibSeqArray =[]
    fibonacciSeqArray.length = number +1
    fibonacciSeqArray[0]=0
    fibonacciSeqArray[1]=1
    for(let i = 2; i<=number; i++){
        fibonacciSeqArray[i] = fibonacciSeqArray[i-1] +fibonacciSeqArray[i-2]
        newArray.push(fibonacciSeqArray[i])
    }
    return newArray
}
//RESULTS NOT GIVING ME A VALID PASSING TEST
// -I tried fixing line 55 to no avail

// ● containing the numbers of the Fibonacci sequence.

// ReferenceError: fibonacciSeqArray is not defined

// 53 |     let newArray =[1]
// 54 |     let fibSeqArray =[]
// > 55 |     fibonacciSeqArray.length = number +1
//    |     ^
// 56 |     fibonacciSeqArray[0]=0
// 57 |     fibonacciSeqArray[1]=1
// 58 |     for(let i = 2; i<=number; i++){

// at fibonacciSeq (code-challenges.test.js:55:5)
// at Object.<anonymous> (code-challenges.test.js:33:14)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total
// Snapshots:   0 total
// Time:        0.167 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this com

// b) Create the function that makes the test pass.


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// // Expected output: [-9, 7, 9, 199]

// const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// // Expected output: [-823, 7, 23]

// filter sorting

describe ("fullArr", () => {
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest.", () => {
        const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
        const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
      expect(fullArr(fullArr1)).toEqual[-9, 7, 9, 199]
      expect(fullArr(fullArr2)).toEqual[-823, 7, 23]

    })
  })
//   ReferenceError: fullArr is not defined
// Pseudo Code
// Create a function called fullArr
// Function will take in an array and return a new array of only off number
// the new array will be sorted from least to greatest
// First we must sort the array using array.sort function a-b(least to greatest as google confirmed)
// Then I want it to filter the return value off only odd numbers which here I use boolean expression to get the odd value returned
// **I had to google to get the array.sort function and I think I understand it but I am a bit shaky on that undersatnding**

const fullArr =(array)=>{
    array.sort(function(a,b){return a-b})
    return array.filter(value =>{
        return typeof value ==='number'&& value %2 !==0
    })
}

// RESULTS

// PASS  ./code-challenges.test.js
// fullArr
//   ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest. (1 ms)
// numbersToAdd
//   ✓ takes in an array and returns an array of the accumulating sum. An empty array should return an empty array

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.149 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.88s.
// learnacademy@LEARNs-MacBook-Air-2 week-3-assessment-Kmmontes % 


// b) Create the function that makes the test pass.


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// // a) Create a test with expect statements for each of the variables provided.

// const numbersToAdd1 = [2, 4, 45, 9]
// // Excpected output: [2, 6, 51, 60]

// const numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]

// const numbersToAdd3 = []
// // Expected output: []

describe ("numbersToAdd", () => {
    it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
        const numbersToAdd1 = [2, 4, 45, 9]
        const numbersToAdd2 = [0, 7, -8, 12]
        const numbersToAdd3 = []
      expect(numbersToAdd(numbersToAdd1)).toEqual[2, 6, 51, 60]
      expect(numbersToAdd(numbersToAdd2)).toEqual[0, 7, -1, 11]
      expect(numbersToAdd(numbersToAdd3)).toEqual[""]
    })
  })
//  Results ReferenceError: numbersToAdd is not defined


// b) Create the function that makes the test pass.

// Pseudo Code
// Create a function called numbersToAdd
// My parameter will take in an array and return an array of the accumulating sum. 
// I will ensure it returns an empty array
// I will create a loop to go through the arrays
// I will create a condtional statment to ensure I cover my value and my empty array
// I will start 0 index cover the -1 of the index to insure all value are looped through
// 
// **Loops and condtional statments in them are still difficult for me. I recieved help on this question**

const numbersToAdd =(array)=>{
    newArray = [array[0]]
    if(array.length >0){
        for(let i=0; i<array.length; i++){  
            array[i]= array[i-1] + array[1]
            newArray.push(array[i])
        }
        return newArray
    }else {
            return[]
        }
    }
    
    // RESULTS    
    
//     ReferenceError: numbersToAdd1 is not defined

//     43 | describe ("numbersToAdd", () => {
//     44 |     it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
//   > 45 |       expect(numbersToAdd1("[2, 4, 45, 9]")).toEqual[2, 6, 51, 60]
//        |       ^
//     46 |       expect(numbersToAdd2("[0, 7, -8, 12]")).toEqual[0, 7, -1, 11]
//     47 |       expect(numbersToAdd3("[]")).toEqual[""]
//     48 |     })

//     at Object.<anonymous> (code-challenges.test.js:45:7)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        0.161 s, estimated 1 s
// Ran all test suites.

