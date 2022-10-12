// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = `Teejay`;
let lastName = `Ibrahim`;
let country = `Ghana`;
const city = 'Yaba'
let age = 20;
let isMarried = false;
let year = 2022;
console.log(typeof (firstNAme));
console.log(typeof (lastName));
console.log(typeof (country));
console.log(tyoeof (city));
console.log(typeof (age));
console.log(typeof year));

// 2. Check if type of '10' is equal to 10
console.log(typeof ('10') == 10);

// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt(`9.8`)==10);

/* 
   4a.Write three JavaScript statement which provide truthy value.
   4b. Write three JavaScript statement which provide falsy value.
*/
console.log(4 > 3);
console.log(10 >= 2);
console.log(2 > 1);

console.log(3 > 5)
console.log(1 == 2)
console.log(2 === 1)

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
4 > 3  //True
4 >= 3 //True
4 < 3 //false
4 <= 3 //false
4 == 4 //true
4 === 4 //true
4 != 4 //false
4 !== 4 //false
4 != '4' //false
4 == '4' //true
4 === '4' //false

//Find the length of python and jargon and make a falsy comparison statement.
console.log(python.length) && (jargon.length)

//Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
4 > 3 && 10 < 12 //true
4 > 3 && 10 > 12 //false
4 > 3 || 10 < 12 //true
4 > 3 || 10 > 12 //true
!(4 > 3) //false
!(4 < 3) //true
!(false) //true
!(4 > 3 && 10 < 12) //false
!(4 > 3 && 10 > 12) //true
!(4 === '4') //true
//There is no 'on' in both dragon and python
let animal1 = "dragon"
let animal2 = "python"
console.log(animal1 && animal2.includes(on))

//Use the Date object to do the following activities
//What is the year today?
let now = new Date()
let year = now.getFullYear()

//What is the month today as a number?
let now = new Date()
let month = now.getMonth()

//What is the date today?
let now = new Date()

//What is the day today as a number?
let now = new Date()
let day = now.getDay()

//What is the hours now?
let now = new Date()
let hours = now.getHours()

//What is the minutes now?
let now = new Date()
let minutes = now.getMinutes()

//Find out the numbers of seconds elapsed from January 1, 1970 to now.

Level 2
Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let userBase = prompt('enter base number')
let userHeight = prompt('enter height number')
let triangleArea= 0.5*userBase*userHeight
console.log('the area of a triangle is ${trianglesArea}')

Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let userSideA = +prompt('side A number')
let userSideB = +prompt('side B number')
let userSideC = +prompt('side C number')
let perimeter = userSideA + userSideB + userSideC
console.log('perimeter of triangle is ${perimeter}')

Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12

Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = Number(prompt('getLength'))
let width = Number(prompt('getwidth'))
let area = legth*width
console.log('area of a rectangle is ${area}')

let perimeter = 2*legth*width
console.log('the perimeter of rectangle is ${perimeter}')

Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let pi = 3.14
let radius = 100
let areaOfAcircle = pi*radius*radius
let circumference = 2*pi*radius

console.log('the area of a circle is ${areaOfaCircle}')

console.log('the circumference of a circle is ${circumference}')

Calculate the slope, x-intercept and y-intercept of y = 2x -2


Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

Compare the slope of above two questions.

Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let userHour = prompt('hours')
let userRatePerHour = prompt('Rate Per Hour')
let pay = userHour*userRatePerHour
console.log('the pay per person is ${pay}')
Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120

If the length of your name is greater than 7 say, your name is long else say your name is short.
let yourName = 

Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetayeh

Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25
I am 225 years older than you.

Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.
Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

let year = 1995
year = prompt('enter birth year');
if ()

Enter number of years you live: 100
You lived 3153600000 seconds.
Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
let now = new Date()
let year = now.getFullYear()
let month = now.getMonth()
let day = now.getDay()
let hours = now.getHours()
let minutes = now.getMinutes()
console.log('${year} - ${month} - ${day}  ${hours}:${minutes}')

DD-MM-YYYY HH:mm
let now = new Date()
let year = now.getFullYear()
let month = now.getMonth()
let day = now.getDay()
let hours = now.getHours()
let minutes = now.getMinutes()
console.log('${Day} - ${month} - ${year}  ${hours}:${minutes}')

DD/MM/YYYY HH:mm
let now = new Date()
let year = now.getFullYear()
let month = now.getMonth()
let day = now.getDay()
let hours = now.getHours()
let minutes = now.getMinutes()
console.log('${day} / ${month} / ${year}  ${hours}:${minutes}')

Exercises: Level 3
Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05
console.log('${('00' + month).slice(-2)} / ${day} / ${year} / ${hours}:${minutes}')



