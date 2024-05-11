let score = "33abc"
let age = null
let name = undefined

console.log(typeof score)
console.log(typeof (name))

let valueInNumber = Number(name)
console.log(typeof valueInNumber) // this will give number but as you can see score = "33abc" is not a complete number
console.log(valueInNumber); // this is the right way to check and it is telling us that "33abc" is not a number

// "33" => 33
// "33abc" => NaN
// true => 1; false =>0
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);