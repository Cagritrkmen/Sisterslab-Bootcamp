let a = 2;
let b = 3;
let c = 2;
(a == b) // returns false
(a == c) //returns true

typeof "John Doe" // Returns string
typeof 3.14 // Returns number
typeof true // Returns boolean
typeof 234567890123456789012345678901234567890n // Returns bigint
typeof undefined // Returns undefined 
typeof null // Returns object
typeof Symbol('symbol') // Returns symbol

let x = 2;
let y = "2";
(x == y) // Returns true
(x === y) // Returns false

let x = 3;
let y = "3";
x + y // Returns 33

let x = 24;
let y = "Hello";
x + y // Returns 24Hello

let name = "Vivek";
let surname = " Bisht";
name + surname // Returns Vivek Bisht

let x = 3;
let y = "3";
x - y //Returns 0

let x = 0;
let y = 23;

if(x) { console.log(x) } //undefined

if(y) { console.log(y) } //23

isNaN("Hello") // Returns true
isNaN(345) // Returns false
isNaN('1') // Returns false
isNaN(true) // Returns false
isNaN(false) // Returns false
isNaN(undefined) // Returns true