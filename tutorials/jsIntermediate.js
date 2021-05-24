//objects

//object literal
const myObject = {
  property: "Value!",
  otherProperty: 77,
  "obnoxious property": function () {
    // do stuff!
  },
};
myObject.property; // 'Value!'
myObject["obnoxious property"]; // [Function], can also be used for variables

//if you need to duplicate something many times its better to use
//object constructors
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(name);
  };
}
const player = new Player("steve", "X");
console.log(player.name); // 'steve'
player1.sayName(); // logs 'steve'
player2.sayName(); // logs 'also steve'

//add functions with prototype its better, because we only set on instance for all the objects
//don't use arrow functions when doing .prototype. work, it doesnt work.
Player.prototype.doSomething = function () {
  console.log(this.name + " does something");
};
player2.doSomething();
console.log(player2.constructor); // Player()

//book example
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    return `${title} by ${author}, ${pages} pages, ${read}.`;
  };
}
const theHobbit = new Book("The Hobbit", "Tolkien", 396, "not read yet");
console.log(theHobbit.info());

//a little prototype based inheritance
function Plant() {
  this.country = "Mexico";
  this.isOrganic = true;
}

// Add the showNameAndColor method to the Plant prototype property
Plant.prototype.showNameAndColor = function () {
  console.log("I am a " + this.name + " and my color is " + this.color);
};

function Fruit(fruitName, fruitColor) {
  this.name = fruitName;
  this.color = fruitColor;
}

// Set the Fruit's prototype to Plant's constructor, thus inheriting all of Plant.prototype methods and properties.
Fruit.prototype = Object.create(Plant.prototype); //recommended method

//can also be done Fruit.prototype = new Plant(); not recommended
// Creates a new object, aBanana, with the Fruit constructor
var aBanana = new Fruit("Banana", "Yellow");
aBanana.showNameAndColor();

//they all inherit from Object.prototype

//factory functions,
//doesn't run into issues when using this
//constructors, protos, etc. doesn't use new

const personFactory = (name, age) => {
  const sayHello = () => console.log("hello!");
  const sayEverything = () => console.log({ name, age });
  return { name, age, sayHello, sayEverything };
  //before ES6 it used to be return([name: name, age: age...])
  //try running sayEverything, will log(name: jeff, age: 27)!
};

const jeff = personFactory("jeff", 27);

console.log(jeff.name); // 'jeff'
jeff.sayHello(); // calls the function and logs 'hello!'

//taking advantage of private and public scoping on function factories
const FactoryFunction = (string) => {
  const capitalizeString = () => string.toUpperCase();
  const printString = () => console.log(`----${capitalizeString()}----`);
  return { printString };
};

const taco = FactoryFunction("taco");

printString(); // ERROR!!
capitalizeString(); // ERROR!!
taco.capitalizeString(); // ERROR!!
taco.printString(); // this prints "----TACO----"

//another example
const counterCreator = () => {
  let count = 0;
  return () => {
    console.log(count);
    count++;
  };
};

const counter = counterCreator();
counter(); // 0
counter(); // 1

//Player factory function, with some functions that are private
const Player = (name, level) => {
  let health = level * 2;
  const getLevel = () => level;
  const getName = () => name;
  const die = () => {
    // uh oh
  };
  const damage = (x) => {
    health -= x;
    if (health <= 0) {
      die();
    }
  };
  const attack = (enemy) => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    }
    if (level >= enemy.getLevel()) {
      enemy.damage(1);
      console.log(`${name} has damaged ${enemy.getName()}`);
    }
  };
  return { attack, damage, getLevel, getName };
};

const jimmie = Player("jim", 10);
const badGuy = Player("jeff", 5);
jimmie.attack(badGuy);

//inheritance with factory functions
const Person = (name) => {
  const sayName = () => console.log(`my name is ${name}`);
  return { sayName };
};

const Nerd = (name) => {
  // simply create a person and pull out the sayName function with destructuring assignment syntax!
  const { sayName } = Person(name);
  const doSomethingNerdy = () => console.log("nerd stuff");
  return { sayName, doSomethingNerdy };
};

const jeff = Nerd("jeff");

jeff.sayName(); //my name is jeff
jeff.doSomethingNerdy(); // nerd stuff

//if we wanted to inherit everything
const Nerd = (name) => {
  const prototype = Person(name);
  const doSomethingNerdy = () => console.log("nerd stuff");
  return Object.assign({}, prototype, { doSomethingNerdy });
};

//modules, for doing private and public scoping
const Module = (() => {
  let _aPrivateVar = "hello darkness";
  let _privateMethod = function () {};
  let publicMethod = function () {
    _privateMethod();
  };
  let anotherPublicMethod = () => {
    //something
    console.log(_aPrivateVar);
  };
  return {
    publicMethod,
    anotherPublicMethod,
  };
})();
Module.anotherPublicMethod();

//another module example
const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
})();

calculator.add(3, 5); // 8
calculator.sub(6, 2); // 4
calculator.mul(14, 5534); // 77476

//classes
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }

  static calcSum(a, b) {
    return a + b;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
console.log(square.calcSum()); //error
console.log(Rectangle.calcSum(5, 5)); //10

//extending classes
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog("Mitzie");
d.speak(); // Mitzie barks.

//JSON
//is used to save objects to text, and vice versa, can be used in local storage
let myObj, myJSON, text, obj;

// Storing data:
myObj = { name: "John", age: 31, city: "New York" };
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;

//to parse dates:
var text = '{ "name":"John", "birth":"1986-12-14", "city":"New York"}';
var obj = JSON.parse(text);
obj.birth = new Date(obj.birth);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;

//or use  reviver
var text = '{ "name":"John", "birth":"1986-12-14", "city":"New York"}';
var obj = JSON.parse(text, function (key, value) {
  if (key == "birth") {
    return new Date(value);
  } else {
    return value;
  }
});
document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;

//to create http requests
let requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
//here we directly convert into javascript object, cause we received the json object
request.responseType = "json";
request.send();
request.onload = function () {
  const superHeroes = request.response;
  console.log(superHeroes);
};

//if we dont specify responseType json, or we are just getting a string
request.responseType = "text";
request.send();
request.onload = function () {
  const superHeroes = JSON.parse(request.response);
  console.log(superHeroes);
};

//w3 school example
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    document.getElementById("demo").innerHTML = myArr[0];
  }
};
xmlhttp.open("GET", "json_demo_array.txt", true);
xmlhttp.send();

//callback, are just using calling functions inside of asynch functions
//to be performed only after something is done loading
function greeting(name) {
  alert("Hello " + name);
}
function processUserInput(callback) {
  var name = prompt("Please enter your name.");
  callback(name);
}
processUserInput(greeting);

//this is also a callback
myDiv.addEventListener("click", function () {
  // do something!
});

var fs = require("fs");
fs.readFile("movie.mp4", finishedReading);

function finishedReading(error, movieData) {
  if (error) return console.error(error);
  // do something with the movieData
}

//promises
const myData = getData(); // if this is refactored to return a Promise...

myData.then(function (data) {
  // .then() tells it to wait until the promise is resolved
  const pieceOfData = data["whatever"]; // and THEN run the function inside
});

//traversy media async example, callback, promises, async
//callbacks first
const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPostWithCallback(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

// getPosts();

createPostWithCallback(
  { title: "Post Three", body: "This is post three" },
  getPosts
);
//in here we call the callback and will only happen until create posts is finished.

//promises

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

createPost({ title: "Post Three", body: "This is post three" })
  .then(getPosts)
  .catch((err) => console.log(err));


//Promise.all
const promise1 = Promise.resolve("Hello World!");
const promise2 = 10;
const promise3 = new Promise((resolve, reject)=>{
  setTimeout(resolve, 2000, "Goodbye")
})
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())

Promise.all([promise1, promise2, promise3]).then(values => console.log(values));

//Async / Await, super easyyyyy

async function init(){
  await createPost({ title: "Post Three", body: "This is post three" });

  getPosts();
}

init();

async function fetchUsers(){
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await res.json();
  console.log(data);
}

fetchUsers();