// Iterate 0 to 10 using for loop, do the same using while and do while loop
for(let i = 0; i<=10; i++){
  console.log(i)
}

let i=0
while ( i <=10) {
console.log(i)
i++
}

let ii = 0
do{
  console.log(ii)
  ii++
} while (ii <= 10)

// Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let i = 10; i>=0; i--){
  console.log(i)
}

let a=10
while ( a >=0) {
console.log(a)
a--
}

// let w = 10
// do {
//   console.log(w)
//   i--
// } while ( w >=0)

// Iterate 0 to n using for loop

// Write a loop that makes the following pattern using console.log():

//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
// Use loop to print the following pattern:
for(let i =0; i<=10; i++ ){
let timesTable = (`${i} * ${i} = ${i * i}`)
console.log(timesTable)
}
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

// Using loop print the following pattern
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

// Use for loop to iterate from 0 to 100 and print only even numbers
for(let i=0; i<=100; i+=2){
  console.log(i)
}

// Use for loop to iterate from 0 to 100 and print only odd numbers
for(let i=0; i<=100; i++){
if(i % 2 == 1 ) {
  console.log(i)
}
}

// Use for loop to iterate from 0 to 100 and print only prime numbers
const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
console.log(num.length)
sum = 0
for(let i=0; i<num.length; i++){
sum = sum + num[i]
}
console.log(sum)

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
const nu = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
console.log(nu.length)
sum = 0
for(let i=0; i<nu.length; i++){
sum = sum + nu[i]
}
console.log(sum)
// The sum of all numbers from 0 to 100 is 5050.

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// sum of all odd
function sumOddNum() {
  let sum = 0
  for (let index=1; index<=100; index+=2){
    console.log(index)
    sum += index
  }
  console.log(sum);
}
sumOddNum()

// sum of all even numbers
function sumEvenNumbers() {
  let sum = 0
  for (let i=0; i<=100; i+=2) {
    console.log(i)
    sum+=i
  }
  console.log(sum)
}
sumEvenNumbers()

// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
//   [2550, 2500]
// Develop a small script which generate array of 5 random numbers
let numArr = ["0","1","3","1","3","8","7","4","7"];
let letters = "qwjjsfljsfslksfjjsjfjfjajjfak"
let letterArr = letters.split("");

let allCharArr = numArr.concat(letterArr)
console.log(allCharArr);
console.log(allCharArr.length)
let id = [];
for(let i=0; i<5; i++) {
  let randomNumber38 = Math.floor(Math.random() * allCharArr.length )
  console.log(randomNumber38)
let getRandonChar = allCharArr[randomNumber38]
console.log(getRandonChar)
id.push(getRandonChar)
}
console.log(id)
console.log(id.join(""))


// Develop a small script which generate array of 5 random numbers and the numbers must be unique


// Develop a small script which generate a six characters random id:
// 5j2khz

// Exercises: Level 2
// Develop a small script which generate any number of characters random id:

//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba
// Write a script which generates a random hexadecimal number.

// '#ee33df'
// Write a script which generates a random rgb color number.

// rgb(240,180,80)
// Using the above countries array, create the following new array.

// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// Using the above countries array, create an array for countries length'.

// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
// Use the countries array to create the following array of arrays:

//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

// ['Finland','Ireland', 'Iceland']
// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

// ['Albania', 'Bolivia','Ethiopia']
// Using the above countries array, find the country containing the biggest number of characters.

// Ethiopia
// Using the above countries array, find the country containing only 5 characters.

// ['Japan', 'Kenya']
// Find the longest word in the webTechs array

// Use the webTechs array to create the following array of arrays:

// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruit = ['banana', 'orange', 'mango', 'lemon']
let frutits= fruit.length
let emptyArr = []
for(let i =0; i < fruit.length; i++){
  emptyArr.push(fruit[i].toLowerCase())
}
console.log(emptyArr)

// Print all the elements of array as shown below.

//   const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB




// Exercises: Level 3
// Copy countries array(Avoid mutation)
// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
// Sort the webTechs array and mernStack array
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
console.log(webTechs.sort())

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
console.log(mernStack.sort())
// Extract all the countries contain the word 'land' from the countries array and print it as array

// Find the country containing the hightest number of characters in the countries array
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

// Extract all the countries contain the word 'land' from the countries array and print it as array
// Extract all the countries containing only four characters from the countries array and print it as array
// Extract all the countries containing two or more words from the countries array and print it as array

// Reverse the countries array and capitalize each country and stored it as an array
let newCountries = countries

function printFullName (){
  let firstName = 'Asabeneh'
  let lastName = 'Yetayeh'
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}
console.log(printFullName ())


const arr = ['apple', 'banana', 'cereal'];

const upper = arr.map(element => {
  return element.toUpperCase();
});
console.log(upper);
