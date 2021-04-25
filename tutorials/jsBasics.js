"use strict"; //for strict mode, throws error when recognizes mistakes and unsafe actions
//Comments
/*multiline comment 
wu
wu 
*/

//defininf variables, its better to use let, let also has scope. var only has scope when done inside a function
var a;
a = 7;
//use let!!!!!!!!!!!!
let b = a;

//use camelCase
var myVar = "camelCase";

var numbersPractice = 5 + 4 - 3 * 2 / 6;

a++;
a--;

//we can use decimals
b = 5.7;

//% remainder
a = 9;
b = 2;
var c = a % b; //c == 1, the remainder

 a += 1; //10
 a -= 5; //5
 a *= 2; //10
 a /= 2; //5

 var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
 var goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 

 // we can also use backslash for \\ \n \t like in C#

 var lastNameLength = 0;
var lastName = "Contrer";
lastName += "as";

lastNameLength = lastName.length;

console.log(lastName[0]); //C






//Arrays
var myArr = [5,4,"Alan"];
var myArr2 = [[5,4], [6,4]];

myArr[0] = 4;
myArr[0][0] = 6;

var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(5);
myArray.push(["dog", 3]);

var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]
//shift can be used the same way for removing the first
var firstDown = threeArr.shift();
//not necessary to assign the eliminated element
//unshift adds at the beginning
threeArr.unshift(1);



//Functions

function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();

function funArgs(p1, p2){
	console.log(p1+p2);
	//you can also do return, if you need a value back, but not mandatory
	return p1+p2;
}

funArgs(2,4);

//regarding scope, creating a variable with var makes use of scope, if you create a variable and not use var, it will be a global variale
//always use var



//Booleans

var isTrue = true;
//writing "true", doesnt work, has to be without quotations



//If condition
if (isTrue){
	return "Yes, it was true";
}

var aNum = 12;

if (aNum == "12"){
	console.log("True");
}

if (aNum === "12"){
	console.log("True"); 
}//will evaluate to false

typeof 3; // returns "number"
typeof "3"; // returns "string"

// != not equal !== strictly not equal

// >  >=   <   <=


var val = 1

// && ||
if ((val <= 50 && val >= 25) || lastName == "Contreras") {
      return "Yes";
  }  

  function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

//switch

switch(val){
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
    default:
     answer = "dog";
     break;
  }


  // Counting cards
  var countingCards = 0;

function cc(card) {

  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      countingCards ++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      countingCards --;
      break;
  }

  if(countingCards > 0){
    return countingCards + " Bet";
  } else{
    return countingCards + " Hold";
  }

}


//objects


//you can set the properties with quotations or without
var myDog = {
// Only change code below this line
    "name": "Stella",
    legs: 4,
    tails: 1,
    friends: ["Nina", "Dolores"],
    Contreras: true,
    15: "test"

// Only change code above this line
};

console.log(myDog.name);
console.log(myDog["name"]);

//when using brackets we can use variables !!!!
console.log(myDog[lastName]); //Contreras

//updating values
myDog.friends.push("Loki");
myDog[15] = "test2"

//add new properties
myDog.bark = "Woof";

//delete properties
delete myDog.tails;

//to check if the object has the property
myDog.hasOwnProperty("tails");


var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2;  // "secrets"
ourStorage.desk.drawer; // "stapler"

// Setup
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(object, id, prop, value) {

  if(prop != "tracks" && value != ""){
    object[id][prop] = value;
  } else if(prop == "tracks" && !object[id].hasOwnProperty(prop)){
    object[id][prop] = [value];
  } else if(prop == "tracks" && value != ""){
    object[id][prop].push(value);
  } else if(value == ""){
    delete object[id][prop];
  }

  return object;
}

updateRecords(collection, 5439, 'artist', 'ABBA');


//loops


var myArray = [];

var i = 5;
while( i >= 0){
    myArray.push(i);
    i--;
}

for(var i = 1; i <= 5; i++){
    myArray.push(i);
}


function multiplyAll(arr) {
  var product = 1;
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
      product *= arr[i][j];
    }
  }

  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);



var i =10;

do {
  myArray.push(i);
  i++;
}while (i < 5)





// just an exercise
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    }
];


function lookUpProfile(name, prop) {
  for (var x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

console.log(lookUpProfile("Akira", "likes"));


//Math.random

//returns a number between 0 and 9
function randomWholeNum() {

  return Math.floor(Math.random() * 10);
}

//returns a number between a range
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

//parse
//returns NaN if not a number
function convertToInteger(str) {
    return parseInt(str);
}

convertToInteger("56");


//the radix here represents to the power, so a 2 is like the power of 2, this converts binary!!
function convertToIntegerFromRadiz(str) {
 return parseInt(str, 2)
}
convertToInteger("10011");


//ternary
function checkEqual(a, b) {
 return a == b ? "Equal" : "Not Equal";
}

//using several ternaries instead of if, else if, else. this is best practice for readability
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}

//recursive
//calling functions within the function instead of doing loops

//instead of
function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }
//or
function countdown(n) {
	var myArray2 = [];
  for(var i = n; i > 0; i--){
  	myArray2.push(n);
  }
  return myArray2;
}

//we do this
 function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
//or
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}




//ES6




//vas vs let
//let is better as throws error when declaring more than once the same variable
//let has scope, var only has scope within functions but not for statements, expressions, loops, etc.
//"use strict" can be used so it throws error when recognizes mistakes and unsafe actions

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

for(var ij = 0; ij<2; ij++){}
console.log(ij);//1
for(let ij1 = 0; ij1<2; ij1++){}
console.log(ij1);//ij1 is not defined

function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

//const
//const makes the variable unchangeable
//but can still be mutated by the variables it contains or arrays
const A_NAME = firstName + lastName;
firstName = "Alan R.";//works and aName1 was changed
A_NAME = "alan"; //would throw error

const AN_ARR = [1,2];
AN_ARR = [2,3]; //throws error
AN_ARR[0] = 5; //is ok and works

//to prevent mutation for anything, lets or const
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; // will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj); 
// { name: "FreeCodeCamp", review:"Awesome"}


//arrow functions, instead of writing a whole function to just return a value
const magic = () => new Date();
//after the arrow we put the return value, ie "value" variable etc.

//we can also pass arguments
const doubler = (item) => item * 2;
doubler(4); // returns 8
//if only one arg we can skip the parenthesis
const doubler = item => item * 2;
//multiple args
const multiplier = (item, multi) => item * multi;
multiplier(4, 2); // returns 8

//we can put default parameters in functions *not only on arrow functions
const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous


//Rest paramenter, several args
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.

//search for .map .filter .reduce
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

//spread operator
//only works in-place, like arg for a function or array literal
//spreads the array as if it were different elements. i.e. arr= [1,2] => 1,2
const arr4 = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89


//Destructuring
//we have an object and want to retrieve or assign his props
const USER = { name: 'John Doe', age: 34 };
//instead of this
const name = USER.name; // name = 'John Doe'
const age = USER.age; // age = 34
//we do this
const { name, age } = USER;
// name = 'John Doe', age = 34

//we can even choose what name to assign to this new variable
const { name: userName, age: userAge } = USER;
// userName = 'John Doe', userAge = 34

//Destructuring nested objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

  const {today: { low: lowToday, high: highToday}} = LOCAL_FORECAST
console.log(lowToday); //64

//destructuring arrays
const [a,b] = [1,2,3,4,5,6];
console.log(a,b); //1,2
//we dont need to redeclare it.
[a,,, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 4

[a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [,,...arr] = list; // Change this line
  return arr;
}
const arr = removeFirstTwo(source);

//destructuring an objetc for use within a function
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
  return name + " is a bitch"
}
//Destructuring is all done so its used so we dont have to create all new variables for mutability or operations
//if for example we already know which object is being sent or structure we could quickly do something like this
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max, min}) => (max + min) /2.0;
console.log(half(stats));




//Strings Template literal
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, \n"'my name is ${person.name}!
I am ${person.age + 2} years old.`;
console.log(greeting); // prints
// Hello, 
//"'my name is Zodiac Hasbro!
// I am 58 years old.







//Concise object literal

const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender
  };
};
//to this, no reason to repeat stuff
const createPerson = (name, age, gender) => ({name, age, gender});


//functions can be written like this, instead of setGear = function(newGear) {};
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);


//Classes in javascript are syntaxis sugar to properties
//the community actually prefers to use function factories instead of classes or properties
//properties example
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
//class example
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
//factory function doesn't use new!

//in class we can do set and get, its convention to name the variable with a _ if its private, and only accesible with get or set
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);  // anonymous
novel.writer = 'newAuthor';
console.log(novel.writer);  // newAuthor



//to insert javascript in html
/*<html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>*/

//to export
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export {uppercaseString, lowercaseString};


//to import     ./ tells its on the same folder
import { uppercaseString, lowercaseString} from './string_functions.js';
uppercaseString("hello");
lowercaseString("WORLD!");

//to import all
import * as stringFunctions from "./string_functions.js"
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");





//Promise
const myPromise = new Promise((resolve, reject) => {

});
//has three states, pending, fulfilled and rejected, the myPromise is stuck in pending rn because it has nothing
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data")
  } else {  
    reject("Data not received")
  }
});
//resolve would give us a fulfilled state, and reject a rejected.
//to do something after getting a resolve use then
makeServerRequest.then(result => console.log(result));
//for reject we use catch
makeServerRequest.catch(error => console.log(error));




//Regular expressions Regex
//with regex we use test to find if true it found the regex on the string or false
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); 

//to find either of the regex  the same as ||
let petRegex = /dog|cat|bird|fish/; 

//we can use flags, for example to make it case insensitive
let caseInsRegex = /hello/i; //finds HeLLo hEllo HELLO etc

//to extract the actual matches, its string.match(regex)
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); 

//if we want an array with multiple matches
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; //
let result = twinkleStar.match(starRegex); //["Twinkle", "twinkle"]

let wildcardRegex = /.un/; //fun, sun, run, etc.

//to give multiple possibilities 
// /p[aeious]n/   can be pan pen pin pon pun, if we add de global flag we will get an array
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // brings in all the vowels
let result = quoteSample.match(vowelRegex);

let bgRegex = /[a-e]at/;//for a range, bat, cat, aat, dat,eat

let myRegex = /[a-z0-9]/ig; //match all numbers and letters

let myRegex = /[^0-9aeiou]/gi;  //negated characters, match all chars that are not numbers or vowels

let myRegex = /s+/gi; // matches on or more timeMississipi would return ["ss", "ss"], instead of normally ["s", "s", "s", "s"], if misssissipi = ["sss", "ss"]

let myRegex = /Lo*/; //matches when letter L appears and can be followed by zero or more o. ex. Looo = Looo,  Luo = L , ouLa = L

//greedy and lazy
//say we have titanic word, and we tell regex we want a string from t to i
//by default its greedy and will return longest string.
let myRegexGreedy = /t[a-z]*i/i; //will find Titani
//lazy version
let myRegexLazy = /t[a-z]*?i/i ; // will return Ti

//When outside the [] ^ is used to identify if the string begins with that
//string = "Alan is cool";
let myRegex = /^Alan/; 
myRegex.test("Alan is cool"); //would return true
myRegex.test("not cool Alan"); //would return false

//to match if in the end use $
let lastRegex = /end$/;
lastRegex.test("this is the end"); //returns true "end this is" returns false


//match all letters and numbers and underscore

let shortHand = /\w+/; //equals let longHand = /[A-Za-z0-9_]+/;
let alphabetRegexV2 = /\w/g; // if we want to just return any num or letter in a string
let result = quoteSample.match(alphabetRegexV2).length; //brings the length of the array, how many numbers and letters

//matches anything thats not numbers letters and underscore
let notAlphabetRegex = /\W/g;
let string24 = "Hello/&#"; string24.match(notAlphabetRegex); //returns ["/", "&", "#"];

//to look for numbers or only digits is /\d/

let numRegex = /\d/g; //array of digits in string

// \D is to look for non digits = [^0-9]
let nonNumRegex = /\D/g;


let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; //checking for username valid, must start alpha, if number must be at end,
//if only two char long must be alpha both.

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g; // [" ", " "] but also can return tab, new line, etc. \r\t\f\n\v
let spaceRegex = /\S/g; //non whitespace


//quantity specifiers
//+ is for one or more times * is for zero or more times
//{min,max} number of times
let multipleA = /a{3,5}h/; //aah would return false  aaah would return true
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/;// true

//we can specify only minimum or maximum
let minRegex = /ha{3,}/; // only true if haaa+
let maxReges = /ha{,5}/; //only true if less than haaaaa
//exact number
let exactRegex = /ha{3}/; //only true if haaa


//check for all or none ?
let mayExistRegex = /colou?r/; //can be color or colour

//lookaheads, checks ahead if the pattern exists, or checks if the pattern doesnt exist
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]
//checker that looks for between 3 and 6 characters and at least one number:
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true
//match passwords that are greater than 5 characters long, do not begin with numbers, and have two consecutive digits.
let sampleWord = "astronaut";
let pwRegex = /^\D(?=\w{4,})(?=\w*\d{2,})/; // Change this line
let result = pwRegex.test(sampleWord);

//check for options
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
// Returns true


//Reuse patterns
//The patterns we want to reuse go inside parenthesis, capture groups, and then we specify how many times we want to repeat them
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
//if we wanted "regex regex regex" we can either /(\w+)(\s)\1\2\1/ or /(\w+)(\s)1\s\1/


//use regex to replace
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."
//we can also access the capture groups in the replacement string with dollar signs
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);

//eliminating whitespace at the beginning and end of string
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
console.log(result)






//basic data structures
//unshift and pop adds to the array, at the beginning and end
let arr = [4,5,6]
arr.unshift("I", 2, "Three");
arr.push(7, "VIII", 9);
//[ 'I', 2, 'Three', 4, 5, 6, 7, 'VIII', 9 ]

//pop and shift remove from the array
//when we pop or shift the value removed can be assigned to a variable
let popped = arr.pop(); // 9
let shifted = arr.shift(); // I

//to remove any number of consecutives elements
// can have 3 parameters, usually we only use 2, start index and how many elements
let arr = ['today', 'was', 'not', 'so', 'great'];
arr.splice(2, 2); //['today', 'was', 'great']
//like pop and shift we can store the values removed
let splicedArr = arr.splice(0,2) //['today', 'was']
//as a third parameter we can tell it what elements to insert into the array, separated by a comma
const numbers = [10, 11, 12, 12, 15];
numbers.splice(3, 1, 13, 14); // numbers == [ 10, 11, 12, 13, 14, 15 ]

//slice is for creating a new array out of elements from one. first param is where to start, second is where to end (not inclusive)
//slice doesnt mutate the original array
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3); // todaysWeather equals ['snow', 'sleet'];
//if you dont give arguments it just creates a copy

//spread
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray]; // thatArray equals [true, true, undefined, false, null]

let fragment = ['to', 'code'];
let sentence = ["learning", ...fragment, "is", "fun"]; // ["learning", 'to', 'code', "is", "fun"]
sentence.splice(1,0,...fragment); //we can also

//check for the presence of an element with indexof
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
fruits.indexOf('dates'); // returns -1
fruits.indexOf('oranges'); // returns 2
fruits.indexOf('pears'); // returns 1, the first index at which the element exists









//objects

let foods = {
  apples: {
    greenApples: 24
  },
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

foods.apples.greenApples = 25;
foods["plums"];//28
let newFood = "strawberries2";
foods.pears = 17; //adding new key value pair
foods[newFood] = 5;
delete foods.pears;
delete foods.apples;

console.log(foods);

if(food.hasOwnProperty("oranges") && "grapes" in users){ //basically same thing
    return true;
  }

  //to loop through an object
for(let user in usersObj){
	if(usersObj[user].online){
	  counter++;
	}
}

//if we want an array of the object keys
function getArrayOfUsers(obj) {
  return Object.keys(obj);
}


//method of an object
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function(){return `This dog has ${this.numLegs} legs.` }
}

dog.sayLegs();



//constructor function
function Dog(){
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}

let stella = new Dog();

//with params
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("Terry", "brown")

terrier instanceof Dog; //true;

let ownProps = [];
for (let property in terrier) {
  if(terrier.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}


//if we want to add to the prototype, and make it a static value, if it never changes, etc. 
Dog.prototype.tail = 1; //prototype property

let ownProps = [];
let prototypeProps = [];

for (let property in terrier) {
  if(terrier.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); // prints ["name", "color", "numLegs"]
console.log(prototypeProps); // prints ["tail"]

terrier.constructor === Dog; //true, but its better to use instanceof. terrier instanceof Dog; //true;

//if we want to add more prototypes at once, we can do it to the class, or instance
/*terrier.prototype = {
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};*/

//when we set a property to a created object, we now get false on
terrier.constructor === Dog; //false
terrier instanceof Dog; //keeps being true
//to fix this we can add constructor to when we add the property
terrier.prototype = {
  constructor: Dog,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};


//if we have several objects that repeat prototypes, we can set a supertype or parent


function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }

};
function Cat(name) {
  this.name = name;
}

Cat.prototype.constructor = Cat;

function Bear(name) {
  this.name = name;
}

Bear.prototype.constructor = Bear;

//to set the object to inherit from parent or supertype
Bear.prototype = Object.create(Animal.prototype);
Cat.prototype = Object.create(Animal.prototype);
let panda = new Bear("Po");
panda.eat();// nom nom nom
//if we do this, and we call to see constructor of panda
panda.constructor; // Animal{...} 
//so we have to set it manually
Bear.prototype.constructor = Bear;
panda.constructor; // Bear{...}
//we can still add stuff to the bear prototype
Bear.prototype.fight = function() {
  console.log("Dragon warrios is here!");
};


//in short this is the correct order
function Animal() { }
Animal.prototype.constructor = Animal;
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }


Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function(){console.log("Woof!")}


let beagle = new Dog();

//we can also override

Dog.prototype.eat = () => console.log("crunch crunch crunch");



//when the objects are unrelated but we want to reuse code or assign them a property and since 
//the are unrelated theres no sense in a parent, we use Mixins
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj){
  obj.glide = () => console.log("Glides gracefully");
}

glideMixin(bird);
glideMixin(boat);
bird.glide(); //"Glides gracefully"
boat.glide(); //"Glides gracefully"



//inside a function object, if we want to set a private variable we just set it as a variable let, 
//whithout this.
function Bird() {
  let hatchedEgg = 10; // private variable

  /* publicly available method that a bird object can use */
  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount(); // returns 10




//Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("Chirp, chirp!");
})(); // this is an anonymous function expression that executes right away
// Outputs "Chirp, chirp!" immediately

//This can be used to implement modules!!
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})(); // The two parentheses cause the function to be immediately invoked

motionModule.glideMixin(duck);
duck.glide();
//This is relatively good if we want to make our functions private, so no one messes with them.
//but its probably better to do a module in a new file and use export import.







//functional programming do not mutate or modify global variables
// Set clones, pass objects as arguments
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];


function add (arr, bookName) {
 let newArrClone = [...arr]
  newArrClone.push(bookName);
  return newArrClone;
 
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(newBookList);


//map()
const users = [
  { name: 'John', age: 34, race: "white" },
  { name: 'Amy', age: 20, race: "black" },
  { name: 'camperCat', age: 10, race: "cat" }
];

const names = users.map(user => user.name);
console.log(names); // [ 'John', 'Amy', 'camperCat' ]
let moreInfo = users.map(user => ({
	name: user.name,
	race: user["race"]
}))
console.log(moreInfo); //[{"John", "White"}, {"Amy", "Black"}, {"camperCat", "cat"}]


//creating your own map
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  this.forEach(a => newArray.push(callback(a)));
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});


//filter, returns the elements who return true
//The callback function accepts three arguments. 
//The first argument is the current element being processed. 
//The second is the index of that element and the third is the array upon which the filter method was called.
//filter(e => ...<>==, i, arr)
const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30); // [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]


var filteredList = users.map(e =>({name: e.name, age: e.age})).filter(e => e.age > 18);//mapping the list and filtering for only adults

//we can use splice, slice, concat
//splice to remove parts of the array, but splice mutates the original array
//slice is to attain parts of the array, does not mutate the original, can be used to create a clone
//splice and slice can be found on a previous section
//concat is to join two arrays, does not mutate either
[1, 2, 3].concat([4, 5, 6]);
// Returns a new array [1, 2, 3, 4, 5, 6]
//we can probably achieve the same original.push(...newArr);



//reduce
//The callback function accepts four arguments. 
//The first argument is known as the accumulator, which gets assigned the return value of the callback function from the previous iteration, 
//the second is the current element being processed, 
//the third is the index of that element and the fourth is the array upon which reduce is called.

//In addition to the callback function, reduce has an additional parameter which takes an initial value for the accumulator. 
//If this second parameter is not used, then the first iteration is skipped and the second iteration gets passed the first element of the array as the accumulator.
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges); // 64

//if we used all params in callback function (sum, user, index, arr) => etc.

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj); // { John: 34, Amy: 20, camperCat: 10 }


//a little complex manipulation using what was learned
function getRating(watchList){
  // Add your code below this line
  var averageRating =
  watchList
    // Use filter to find films directed by Christopher Nolan
    .filter(film => film.Director === "Christopher Nolan")
    // Use map to convert their ratings from strings to numbers
    .map(film => Number(film.imdbRating))
    // Use reduce to add together their ratings
    .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
  // Divide by the number of Nolan films to get the average rating
  watchList.filter(film => film.Director === "Christopher Nolan").length;
  // Add your code above this line
  return averageRating;
}
console.log(getRating(watchList));

//sort
//If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b. 
//If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a. 
//If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.

function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);
// Returns [1, 2, 3, 4, 5]

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
// Returns ['z', 's', 'l', 'h', 'b']

//sort mutates the array, so if we want to create a new one:
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  let newArr = [];

  newArr.concat(arr);//we are basically cloning it
  newArr= arr.slice(); //we can clone it like this too

  newArr.sort((a,b)=> a-b)
  return newArr;

}
console.log(nonMutatingSort(globalArray));


//split, splits a string into an array of strings
var str = "Hello World";
var bySpace = str.split(" ");
// Sets bySpace to ["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
// Sets byDigits to ["How", "are", "you", "today"]

//join
let arr = ["Hello", "World"];
let str = arr.join(" ");
// Sets str to "Hello World"


//using several techniques at once
let globalTitle = "Winter Is Coming";

function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}

//every, checks if all return true
let numbers = [1, 5, 8, 0, 10, 11];
numbers.every(currentValue => currentValue < 10);// Returns false

//some returns true as long as one meets the criteria
var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(currentValue =>currentValue < 10); //returns true

//curried
//Un-curried function
function unCurried(x, y) {
  return x + y;
}

//Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
//Alternative using ES6
const curried = x => y => x + y

curried(1)(2) // Returns 3
//This helps if we want to store one part of a function if we still dont have all the params as a variable
// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3

//partial and impartial are similar
//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13









//closures
function makeAdder(x) {
	// parameter `x` is an inner variable

	// inner function `add()` uses `x`, so
	// it has a "closure" over it
	function add(y) {
		return y + x;
	};

	return add;
}
// `plusOne` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusOne = makeAdder( 1 );

// `plusTen` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusTen = makeAdder( 10 );

plusOne( 3 );		// 4  <-- 1 + 3
plusOne( 41 );		// 42 <-- 1 + 41

plusTen( 13 );		// 23 <-- 10 + 13