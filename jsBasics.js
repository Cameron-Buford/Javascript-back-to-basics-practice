

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

const getName=()=>{
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

const getWeekDay=()=>{
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








