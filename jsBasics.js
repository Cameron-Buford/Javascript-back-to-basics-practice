

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

// const user = {
//   name: "Billy",
//   age: 18,
//   email: "billy123@billy.com"
// }


// function getName(){
//   return user.name

// }

// const getName2=()=>{
//    user.name
// }




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

// let users = [
//   {
//     name: 'jon',
//     age:20
//   },
//   {
//     name:'mike',
//     age:49
//   }

// ]



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
console.log(fn())



// Write a function called createName.
// The function should return a single string value, which will be the result of concatenating the existing variables firstName and lastName.

// NOTE: the returned value should have a space between the original two strings

// For example, with the existing variable values, createName should return "Jeremy Robertson":


const firstName = "Jeremy";
const lastName = "Robertson";
function createName(firstName, lastName){
  // const names = 
  return `${firstName} + ' ' + ${lastName}`
}
console.log(createName())



// Create a function called showMeSeven that returns the number 7.

function showMeSeven(){
  return 7;
}

console.log(showMeSeven())




// Create a function called multiplier that has two parameters (these will be numbers).
// The function should return the product of the two numbers.

const number= 3;
const numberTwo= 5;

function multiplierOne(number, numberTwo){

  return number + numberTwo

}
console.log(multiplierOne())


// Write a function called sayHello that has two parameters--greeting, and firstName (these will be strings).
// The function should return a single string value, which will be the result of concatenating greeting and firstName.

// For example, if we invoke sayHello passing in "Hello, " as the first parameter, and "Jeremy."  as the second parameter, it should return "Hello, Jeremy."

function sayHello(hello, cam){
return 'hello' + 'cam'
}
console.log(sayHello())




// Create a function called makeExercise that has two parameters-- exerciseName(string) and duration(number).
// The function should return an object with two key-value pairs. The first property name should be "exerciseName" with a value of the first parameter. The second property name should be "duration" with a value of the second parameter.

function makeExercise(exerciseName, duration){
  return {
    exerciseName: 'run',
    duration: 10
  }
}
console.log(makeExercise())



//IF STATEMENTS

// Inside the isOldEnough function write an if/else statement that will return "old enough" if the variable  age is greater than 21 and return "not yet" other wise.

// Use the if and else keywords in your final solution.
// The variable age will be changed during testing.



let age = 25;

function isOldEnough(){
  if(age > 21){
    return 'old enough'
  }
  else{
    return 'not yet'
  }
}
console.log(isOldEnough())


// Inside the successPredictor function write an if/else statement that will return "success at DevMountain" if the variable  workEthic is equal to "great" and return "failure at DevMountain" otherwise.  

// Use the if and else keywords in your final solution.
// The variable workEthic will be changed during testing.




let workEthic = 'great';

function successPredicter(){
  if( 
    workEthic === 'great'
  ){
    return 'success at DevMountain'
  }
  else {
    return 'failure at DevMountain'
  }
}
console.log(successPredicter())




// Inside the eatOrTrash function write an if/else statement that will return "throw in trash" if the variable cookieType is equal to "raisin" and return "eat" other wise. 

// Use the if and else keywords in your final solution.
// The variable cookieType will be changed during testing.

let cookieType = "raisin";

function eatOrTrash(){
  if(cookieType === 'raisin'){
    return 'throw in trash'
  }
  else{
    return 'eat'
  }
}
console.log(eatOrTrash())




// Inside the finalScore function write an if/else statement that will return "we are the champions" if the variable myTeamScore is greater than the variable yourTeamScore and return ":(" otherwise. 

// Use the if and else keywords in your final solution.
// The variables myTeamScore and yourTeamScore will be changed during testing.


var myTeamScore = 45;
var yourTeamScore = 21;

function finalScore(){
  if (
    myTeamScore > yourTeamScore
  ){
    return 'we are the champions'
  }
  else{
    return ':('
  }
}
console.log(finalScore())




// Inside the findCorrectTransportation function write an if/else statement that will return check the variable age and return the correct response according to the following criteria.

 
// If age is from 3 to 7 "tricycle".
// If age is from 8 to 15 "bicycle".
// If age is 16 or greater return "car".
// Use the if and else keywords in your final solution.
// The variable age will always be a number and be changed during testing. 


let ageOne = "28";

function findCorrectTransportation(){
  if(
    ageOne >= 3 && ageOne <= 7
  ){
    return 'tricycle'
  }else if(
    ageOne >= 8 && ageOne <= 15
  ){
    return 'bicycle'
  }else if(
    ageOne >= 16
  ){
    return 'car'
  }
  
}
console.log(findCorrectTransportation())





// Inside the doIGetIceCream function write an if/else statement that will return check the variables money and temp and return the correct response according to the following criteria.
 
// If temp is equal to "hot" and money is true return "Get Ice Cream!".
// Otherwise return "Save up for another day.".
// Use the if and else keywords in your final solution.
// The variable temp will always be a string and will change during testing.
// The variable money will always be true or false and will change during testing.

let temp = "hot";
let moneyOne = false;

function canIGetIceCream(){
  if(
    temp === 'hot' && moneyOne === true
  ){
    return 'Get Ice Cream!'
  }else{
    return 'Save up for another day.'
  }
}
console.log(canIGetIceCream())




// Inside the doIHaveFreeTime function write an if/else statement that will return "free time!" if either chores or work are false. Use the logical NOT operator(bang operator) to complete this problem.
 
// Do not use the true of false keywords in your final solution.
// Use the if and else keywords in your final solution.
// The variables chores and work will always be a true or false and be changed during testing.

let chores = false;
let work = false;

function doIHaveFreeTime(){
  if( 
    chores !== true && work !== true
  ){
    return 'free time!'
  }else{
    return 'bummer'
  }
  
}
console.log(doIHaveFreeTime())



// Inside the setCrash function write an if/else statement that will set the value of crash to true if currentSpeed if equal to "fast" and brakes are false. Otherwise do nothing.

// Use the if and else keywords in your final solution.
// The variable currentSpeed will always be a string and will change during testing.
// The variable brakes will always be true or false and will change during testing.

let currentSpeed = "fast";
let brakes = true;
let crash = false;

function setCrash(){
  if(
    currentSpeed === 'fast' && brakes === false
  ){
    return crash = true 
  }else{
    return crash = false;
  }
}
console.log(setCrash())


// Write a function called makePurchase that takes in a parameter called priceOfItem. If the priceOfItem is less than or equal to the total on the user object, have the makePurchase function subtract the priceOfItem from the current users total. If the priceOfItem is greater than the total in the user object then have the function return "not enough funds".

// Use the if and else keywords in your final solution.
// The arguments passed into the makePurchase function will always be numbers.

var user = {
  name: "Tiffany",
  total: 50
}
const priceOfItem = 15;

const makePurchase = (priceOfItem) => {
  if(
    priceOfItem <= user.total
  ){
    return user.total - priceOfItem
  }else if(
    priceOfItem >= user.total
  ){
    return 'not enough funds'
  }
}
console.log(makePurchase())







//MORE JAVASCRIPT

//ARRAYS

// Return the first element in the array that is being passed in.

// function first( arr ) {
//   var firstItem = arr[0]
//   return firstItem;
// }


// const first = (arr) => {
//   const arr = ['hi', 1, 4, 'no']
//   const firstItem = arr[0]
//   return firstItem
// }
// console.log(first())



// Add a number to the end of the array that is being passed in.

function addItem( array, number ) {
  array.push(number)  
  return array;
}


// Remove the last element from the array that is being passed in.

const popItem = (arra) => {
  arra.pop()
  return arra
}







