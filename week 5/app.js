// Exercise: Level 1
// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
// 1. Declare an empty array;
const newArray = []

// 2. Declare an array with more than 5 number of elements
const fruits = ['banana', 'orange', 'mango', 'lemon','Facebook', 'Google', 'Microsoft']

// Find the length of your array
console.log(fruits.length)

// Get the first item, the middle item and the last item of the array
console.log(fruits[0])
console.log(fruits[3])
console.log(fruits[6])
 
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// const arr = [
//     'Asabeneh',
//     250,
//      3,
//     true,
//     { country: 'Finland', city: 'Helsinki' },
//     { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const companies = ['Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon', 'Twitter']
// Print the array using console.log()
console.log(companies)

// Print the number of companies in the array
console.log(companies.length)

// Print the first company, middle and last company
console.log(companies[0])

const company = ['Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon', 'Twitter']
let middleCompany = company[3]
console.log(middleCompany)

console.log(companies[6])

// Print out each company
console.log(companies[0])
console.log(companies[1])
console.log(companies[2])
console.log(companies[3])
console.log(companies[4])
console.log(companies[5])
console.log(companies[6])

// Change each company name to uppercase one by one and print them out
console.log(companies[0].toUpperCase())
console.log(companies[1].toUpperCase())
console.log(companies[2].toUpperCase())
console.log(companies[3].toUpperCase())
console.log(companies[4].toUpperCase())
console.log(companies[5].toUpperCase())
console.log(companies[6].toUpperCase())

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
const secondlist = ['are big IT companies']
console.log(companies.concat(secondlist))

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const itCompanies = ['Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon', 'Twitter']
let index = itCompanies.indexOf('fff')
console.log(index)

if(index === -1){
    console.log('This company does not exists in the array')
} else {
    console.log('This company does exist in the array')
}

// Filter out companies which have more than one 'o' without the filter method

// Sort the array using sort() method
console.log (itCompanies.sort())

// Reverse the array using reverse() method
console.log(itCompanies.reverse())

// Slice out the first 3 companies from the 
console.log(companies.slice(3,7))

// Slice out the last 3 companies from the array
console.log(companies.slice(0,4))

// Slice out the middle IT company or companies from the array
console.log(companies.slice())

// Remove the first IT company from the array
companies.shift()
console.log(companies)

// Remove the middle IT company or companies from the array


// Remove the last IT company from the array
companies.pop()
console.log(companies)

// Remove all IT companies
companies.splice(0)
console.log(companies)

// Exercise: Level 2
// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// First remove all the punctuations and change the string to array and count the number of words in the array

// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

// Exercise: Level 3
// The following is an array of 10 students ages:
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages)

let medianAGe 



// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
// Find the middle country(ies) in the countries array

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

