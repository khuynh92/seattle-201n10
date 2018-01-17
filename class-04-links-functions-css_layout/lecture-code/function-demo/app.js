'use strict';
//basic function taking an element from the DOM and changing it using js 
//the function acts like a store; it holds what you need until you are ready to use it

var msg = 'We HAVE THE POWER';
function updateMessage() {
    //inside the function this is the first statement
    var element = document.getElementById('message');
    //inside function this is the second statement
    element.textContent = msg;
}
//calling the function
updateMessage();

//function = keyword 
//sayHello() is the function name
//code block is in curly braces
//one statement in the code block
function sayHello() {
    document.write('Hello');
}
sayHello();

//declaring a function that needs information: parameter, used like variables in a function
//parameters are width & height
function getArea(width, height) {
    //this function will calculate and return the value of width and height
    console.log('getArea:' + width * height);
}
//when you call a function that has parameters, you specify the values it should use in the parentheses that follow it's name.
//these values are called arguments 3 is width, 5 is height
getArea(3, 5);

//getting a single value out of a function
function calculateArea(width, height) {
    var area = width * height;
    //return keyword is used to return the value to the code that called the function
    return area;
}
var wallOne = calculateArea(3, 5);
var wallTwo = calculateArea(8, 5);

console.log('wallOne:' + wallOne);
console.log('wallTwo:' + wallTwo);

//getting multiple values out of a function
//functions can return more than one value using an array
function getSize(width, height, depth) {
    var area = width * height;
    var volume = width * height * depth;
    var sizes = [area, volume];
    return sizes;
}
var areaOne = getSize(3, 2, 1)[0];
var volumeOne = getSize(3, 2, 3)[1];
console.log('areaOne:' + areaOne);
console.log('volume:' + volumeOne);

//anonymous functions: a function with no name ex: var area = function()

//immediately invoked function(IIFE "iffy")
//no name, instead are executed once as the interpreter comes across them
//use them for code that only needs to run ONCE within a task ex: event handlers

var area = (function() {
    var width = 3;
    var height = 2;
    return width * height;
}());
console.log('area IIFE: ' + area);

//variable scope read pg 98
//area is local scope in this example (best practice)
//global scope? wallSize

function getArea(width, height) {
    var area = width * height;
    return area;
}
var wallSize = getArea(3, 2);
document.write(wallSize);
