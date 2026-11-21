// # primitive

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