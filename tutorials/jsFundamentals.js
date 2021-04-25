
//String
let doubleQuote = "Hello World"; //string primitives
let singleQuote = 'his name is "alan"';
let backquote = `he said "${singleQuote + doubleQuote}"`;
let escapeChars = singleQuote + "I\'m Alan, \" \t\n\\";
let strNumber = "123";
let strToNum = Number(strNumber);
let numToStr = strToNum.toString();
typeof numToStr; //string
doubleQuote.charAt(0); //"H"
doubleQuote[0]; //"H"
doubleQuote.toUpperCase(); //"HELLO WORLD", .toLowerCase

let s1 = '2 + 2'              // creates a string primitive
let s2 = new String('2 + 2')  // creates a String object
console.log(eval(s1))         // returns the number 4
console.log(eval(s2))         // returns the string "2 + 2"
console.log(eval(s2.valueOf()))  // == 4, valueOf gives primitive

let longStr = "hi" +
                "whatup";
let longStr2 = "hi \
                whatup";

//string methods
strNumber.length; // "123".length == 3
"1212".indexOf("1"); //returns 0, if not found -1
"1212".indexOf("1",1);//return 2, started looking from index 1

const strSlice = 'The quick brown fox jumps over the lazy dog.';
strSlice.slice(31);// "the lazy dog."
strSlice.slice(4, 19);//"quick brown fox"
strSlice.slice(-4);// "dog."
strSlice.slice(-9, -5);//"lazy"

let splitArr = strSlice.split(" "); //["the", "quick", etc.]
let splitArr2 = strSlice.split(); //["The quick brown..."]
//.split("") == ["T", "h", etc]
//join(" ") to create a string out of arrays
//we also have trim .trim(), eliminates whitespace

//Conditionals
let time = 10; let greeting;
if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
let switchNum = 3;
switch(switchNum){
    case 1:
        console.log("do this");
        break;
    case 2:
    case 3:
        console.log("if 2 or 3 do this");
        break;
    default:
        console.log("default answer");
}

let ternaryCondition = (5 > 4) ? true : false;


//functions
function firstFunction(){ //function declaration
    console.log("something");
}
const myButton = document.querySelector('button');
mybutton.onclick = function(){
    console.log("something")
}
function random(number) { //with return value
    return Math.floor(Math.random() * number);
}
function showMessage(from, text = "no text given") { //default
console.log( from + ": " + text );
}
showMessage("Ann"); // Ann: no text given
function showMessage1(from, text = anotherFunction()) {
    // anotherFunction() only executed if no text given
    // its result becomes the value of text
}
function showMessage(text) {
    text = text || 'empty';
    console.log(text); // "empty"
}
function showMessage(text) {
  text = text || 'empty';
  //stuff
}
let sum = (a, b) => a + b;
let logSomething = something => console.log(something);
let sayNothing = () => console.log("Nothing");
let age = prompt("What is your age?", 18);
let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");
welcome();


//console prompt
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));


//Arrays
let cars = ["Saab", "Volvo",
             "BMW"];
console.log(cars[0]);// Saab
cars.length; //3
let carStr = cars.join(", ");
cars.push("ford"); //at the end
cars.pop(); //removes ford, can be stored ex. let delEl = cars.pop(); ford
cars.shift();//removes the first, Saab, can be stored
cars.unshift("Saab"); //inserts at beginning of arr
//splice, first param is index, second is how many are removed, and then if we want to add
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); //["Banana", "Orange","Lemon", "Kiwi", "Apple", "Mango"]
fruits.splice(0,1); //removes Banana
//slice when we dont want to remove, just save that section to new arr
let fruits2 = fruits.slice(1); //slices starting from orange
let fruits3 = ["Banana", "Orange", "Apple", "Mango"].slice(1,3)// the second param is not inclusive
//[orange,apple]


//loop
for (let initializer = 0; initializer < 20; initializer++) {
    // code to run
    break; //exits out of the loop
    continue; //start the next iteration immediately
}

let countWhile = 5;
while (countWhile>0) {
  // code to run

  countWhile--;
}

do{
countWhile++;
}while(countWhile < 5)






//DOM selectors
console.dir(document); //all document properties on the browser
console.log(document.URL);
document.title = "123"; //we can actually changeitp
console.log(document.body);//can be head, body, anything basically
console.log(document.images);//gives htmlcollection of all imgs, can also be forms, links, etc
/* <div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
<!--we can select them with-->

use css selectors
div.display all divs with class display
.class1.class2 all class 1 that are also class2
.display
header .container all class container inside header
#container > .display all display where container is parent
div#container > div.display
input[type="submit"]
.list-group-item:last-child
.list-group-item:nth-child(2)

*/
const displayDiv = document.querySelector(".display");

//if we want to select a list
//its not an array but can be used with Array.from(), or using ...spread
const displayDiv = document.querySelectorAll(".display");

//we can also select them relating to their tree structure
const container = document.querySelector('#container');
// select the #container div (don't worry about the syntax, we'll get there)
console.dir(container.firstElementChild);                      
// select the first child of #container => .display

const controls = document.querySelector('.controls');   
// select the .controls div
console.dir(controls.previousElementSibling);                  
// selects the prior sibling => .display

//we also have document.getElement but not recommended
//getElementById("anId"); getElementsByClassName("aClassName"); getElementsByTagName("x");

//we can also select parents and siblings, children
displayDiv.parentNode; //.container
displayDiv.parentNode.parentNode; //body probably
//parentElement is same thing
displayDiv.children;//we get the children
displayDiv.children[1].backgroundColor = "yellow";
displayDiv.firstElementChild.textContent= "yellow";
displayDiv.lastElementChild.textContent= "hello";
displayDiv.nextElementSibling; //.control div
displayDiv.nextElementSibling.previousElementSibling; //.display div



const div = document.createElement('div'); //create element

//apending
parentNode.appendChild(childNode); //appends childNode as the last child of parentNode
parentNode.insertBefore(newNode, referenceNode); //inserts newNode into parentNode before referenceNode

//removing
parentNode.removeChild(child) //removes child from parentNode on the DOM and returns reference to child

//setting inline styles
div.style.color = 'blue';// adds the indicated style rule
div.style.cssText = 'color: blue; background: white'; // adds several style rules

//div.style.background-color // doesn't work - attempts to subtract color from div.style.background
div.style.backgroundColor // accesses the divs background-color style
div.style['background-color'] // also works
div.style.cssText = "background-color: white" // ok in a string

div.setAttribute('style', 'color: blue; \
                            background: white;');// adds several style rules

//to remove all styles
div.style.cssText = "";
div.removeAttribute('style'); 

//get actual computer styles
console.log(window.getComputedStyle(div));

//editing attributes
div.setAttribute('id', 'theDiv');                              
// if id exists update it to 'theDiv' else create an id
// with value "theDiv"
div.getAttribute('id');                                        
// returns value of specified attribute, in this case
// "theDiv"
div.removeAttribute('id');                                     
// removes specified attribute

div.classList.add('foo');
div.classList.remove('foo');
//more clean to toggle it
div.classList.toggle('active');                                
// if div doesn't have class "active" then add it, or if it does, then remove it

//Adding text
div.textContent = 'Hello World!';// creates a text node containing "Hello World!" and inserts it in div
div.innerHTML = '<span>Hello World!</span>';// renders the html inside div

//event listeners
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});

//we can also access functions
function alertFunction() { alert("YAY! YOU DID IT!");}
btn.addEventListener('click', alertFunction);

//we can access more stuff with callback e
btn.addEventListener('click', function (e) {
    console.log(e.target);
});
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
    console.log(e.altKey);//returns true if alt key was pressed when clicked
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
});


//for a list of nodes
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});

buttons[0].addEventListener("dblclick", console.log("dblclick"));
buttons[0].addEventListener("mousedown", console.log("dblclick"));
buttons[0].addEventListener("mouseup", console.log("dblclick"));
buttons[0].addEventListener("mouseenter", console.log("dblclick"));
buttons[0].addEventListener("mouseleave", console.log("dblclick"));
buttons[0].addEventListener("mousemove", console.log("dblclick"));


//cool stuff

//suppose we have a box over some background

let box = document.querySelector(".box");

box.addEventListener("mousemove", mouseMove);

function mouseMove(e){
    document.body.style.backgroundColor = "rgb("+ e.offsetX + "," + e.offsetY+",40)";
}

let itemInput = document.querySelector('input[type="text"]');

//we have keydown keyup
itemInput.addEventListener("keypress", e =>{
    displayDiv.textContent= e.target.value;
})

//we have focus and blur, for when we select
//we have cut and paste for when the user cuts or copies
//we can put input, anything we do fires up the eventlistener

var select = document.querySelector("select");
//for when we have options and the user selects something
select.addEventListener('change', something);

let form = document.querySelector("form");
form.addEventListener("sumbit", e=>{
    //first we prevent the default sumbit
    e.preventDefault();
});



//objects
const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
      alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
      alert('Hi! I\'m ' + this.name[0] + '.');
    }
  };

person.name;
person.name[0];
person["age"];//can also be variables
person.interests[1];
person.bio();
person.greeting();