// # primitive

const { useInsertionEffect } = require("react");

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// const score = (undefined) 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

//const bigNumber = 46453755788668678675

// References (non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "nikesh",
    age:22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof scoreValue);


// ++++++++++++++++++++++++++++++++++Memmory

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "nikeshkumar.com"

let anothername = myYoutubename
anothername = "nexaworrier"

console.log(myYoutubename)
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "nikeshkumar23021@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);