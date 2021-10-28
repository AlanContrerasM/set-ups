"use strict";
//don't forget to install globally npm i -g typescript
//to compile on terminal tsc index
//we can also do it watch mode tsc --watch index
//to create the typescript config on terminal, tsc --init
//on the config we can for example edit the rootDir and outDir, and now we only call tsc to compile.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var id = 5;
// id = "4"; will throw error from both vs code and when compiling
var company = "Walx";
var isPublished = true;
var x = "hello";
x = true;
var age;
age = 6;
var ids = [1, 2, 3, 4, 5];
// ids.push("hey"); throws erros
var arr = [1, 4, 5, 6];
//tuple
var person = [1, "hey", true];
//tuple array
var employee;
employee = [
    [1, "hey"],
    [2, "hey"],
    [3, "hey"],
];
//Union
var pid;
pid = 22;
pid = "hey";
//Enums
//by default first value is 0, if you didnt asssign anything
//if the previous value was a number the next numbers by default start increasing by one
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Valid";
    Direction1[Direction1["Down"] = 55] = "Down";
    Direction1[Direction1["Left"] = 56] = "Left";
    Direction1[Direction1["Right"] = 57] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); //Should return 56
var user = {
    id: 1,
    name: 'John',
};
//type Assertion
var cid = 1;
// let customerId = <number>cid;
var customerId = cid;
//can be done both ways.
// customerId = "hey"; will throw error
//using types in functions
//functions obligatorily demand a type, unless in config you change the implicit any option
//optionally we can also set the return type
function addNum(x, y) {
    return x + y;
}
//void
function log(message) {
    if (message === void 0) { message = "default param"; }
    console.log(message);
}
log(2);
var user1 = {
    id: 2,
    name: 'Alan',
};
var p1 = 1;
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return this.name + " is now registered";
    };
    return Person;
}());
var alan = new Person(2, "Alan");
console.log(alan.register());
//subclass
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(3, "Luis", Direction1.Up);
console.log(emp.register());
//Generics, reusable components
//basically a placeholder we can replace later
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4]);
var strArray = getArray(["hi", "hello", "oops"]);
var Header = function (props) {
    return (""
    // <Header>
    //     <h1 style={color: props.color ? props.color : 'blue'}>{props.title}</h1>
    // </Header>
    );
};
exports.default = Header;
