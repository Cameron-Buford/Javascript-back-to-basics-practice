

// DATA TYPES



//Make a variable named greeting with a data type of string that says "Hi" (with double quotes).

// After the first variable, make a variable named farewell with a data type of string that says 'Goodbye' (with single quotes).

// JavaScript doesn't care if you use single or double quotes for your strings. Both of the variables you made above work.basics 


const greeting = "Hi";
const farewell = 'Goodbye';
console.log(greeting)
console.log(farewell)

// Make a variable called hello and a variable called userName with data types of string. Concatenate them together in the order listed above and store the result in a variable called greeting.

const hello = 'hi'
const userName = 'cam'

const greetings = hello + ' ' + userName
console.log(greetings)



// Make a variable called seven with a value of 7. This data type is a number

const seven = 7;
console.log(seven)


// Make a variable called money with a value equal to  the amount in your bank account 2 years from now. This datatype should be a number

const money='1,000,000.01';
console.log(money)



// Edit the function called "sum" so that when it is invoked, it returns the result of adding num1 and num2.

const num1=45;
const num2=23;
const sum = num1+num2;
console.log(sum)


function newSum(num1, num2){
  let newSum = num1 + num2
  return newSum;
} 




// Assign num1 and num2 number values.
// Edit the function called "multiply" so that when it is invoked, it returns the result of multiplying num1 and num2.


let num3=35;
let num4=84;
const multiply=(num3,num4)=>{
  num3 * num4
}
console.log(multiply)





// Edit the function called assignName so that when it is invoked with the variable theName passed in as an argument, the function assigns the variable theBoss the value of theName  without retyping the value.

// here is the provided initial code incase you need to start over:

var theName = "Jeremy";
var theBoss=theName;

function assignName(name){
 return theBoss
}
console.log(theBoss)


// You are provided with a user object and a function called getName. 
// Edit the getName function so that it accesses the name property of the user object using dot notation and returns its value.

const user = {
  name: "Billy",
  age: 18,
  email: "billy123@billy.com"
}


function getName(){
  return user.name

}

const getName2=()=>{
   user.name
}




// Edit the function called getWeekDay so that it accesses the 3rd item in the weekDays array that is stored in the calendar object and return that value.

// NOTE: do not merely type the string "Tuesday" on the return line of the function. Make sure you are accessing it from the weekDays array of the calendar object


const calendar = {
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  weekDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  days: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
}

function getWeekDay(){
  return calendar.weekDays [2];
}

const getWeekDay2=()=>{
  calendar.weekDays[2];
}




// Create a variable called users. 
// users should be an array with 4 items in it. 
// The 4 array items should be objects.
// Each object should have 2 properties: name and age.
// name should be a string.
// age should be a number.

let users = [
  {
    name: 'jon',
    age:20
  },
  {
    name:'mike',
    age:49
  }

]



// Set variable myCar to null.

let myCar=null;




// Create a variable called family
// family should be an object
// family should contain three properties, which will be names of people (you can choose these names)
// The values for the names of those people will be objects
// The people objects will have a property called hobbies
// hobbies should be an object.



const family={
  'andrea':{hobbies:{}},
  'cam':{hobbies:{}},
  'leilani':{hobbies:{}}

}
console.log(family)





// Create a variable called gameScores
// gameScores should be an array
// gameScores should have three items in it
// gameScores' items should be arrays with two items(numbers) in each array


const gameScores= [
  [24],
  [49]
]
console.log(gameScores)




// Create a variable called people
// people should be an array of 3 objects
// The objects should have 3 properties (name, gender, height)
// The name and gender properties should have string values
// The height property should have a number value


const people = [
  {
    name:'cam',
    gender:'male',
    height: 56
  },
  {
    name:'doug',
    gender: 'male',
    height:243
  },
  {
    name: 'ash',
    gender: 'female',
    height:55545
  }
]
console.log(people)



// Create a variable called awesome.
// awesome should have a value, which type is boolean.
// awesome should have a value of true.

const awesome= true;


console.log(awesome)



// Make a function called favFood that does not take in any parameters.
// The function should return a string that has a value of  "My favorite food is pizza"
// Instead of explicitly typing "pizza", make reference to the existing variable called food.

// Use template strings.
// Do not use concatenation ("My favorite food is " + food)

const food = "pizza";

const favFood = () => {
  return `My favorite food is ${food}`
}

console.log(favFood)

function favFoodTwo(){
  return `My favorite food is ${food}`

}
console.log(favFoodTwo)



// Create a variable called cowboy
// cowboy should be an object with these properties: name, state, favoriteCountrySong
// The property values should all be strings

const cowboy = {
  name: 'Cam',
  state: 'Utah',
  favoriteCountrySong: 'Hates country music'
}
console.log(cowboy)



// Create an array called dataTypes
// dataTypes should have the following items:
//          the number 42
//          the string "meaning"
//          the boolean true
//          an array with 5 numbers
//          the object spaceship
//          the function launch






let spaceship = {
  fuel: "liquid hydrogen",
  topSpeed: 36000,
  fuelLevel: 100,
  altitude: 0
}

function launch(){
  spaceship.fuelLevel -= 30;
  spaceship.altidude += 1000
}

const dataTypes = [
  42,
  'meaning',
  true,
  [
    4,
    3,
    2,
    1,
    5
  ],
  {
    spaceship
  },
  launch
]

console.log(dataTypes)


//FUNCTIONS


// Create a function called "fn" that takes in a parameter and returns that parameter.

function fn(parameter){
  return parameter;
}
console.log(fn)



// Write a function called createName.
// The function should return a single string value, which will be the result of concatenating the existing variables firstName and lastName.

// NOTE: the returned value should have a space between the original two strings

// For example, with the existing variable values, createName should return "Jeremy Robertson":

const firstName = "Jeremy";
const lastName = "Robertson";

function createName(){
  return 
}