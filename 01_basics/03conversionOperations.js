let score = "33abc"
let age = null
let name = undefined

// console.log(typeof score)
// console.log(typeof (name))

let valueInNumber = Number(name)
// console.log(typeof valueInNumber) // this will give number but as you can see score = "33abc" is not a complete number
// console.log(valueInNumber); // this is the right way to check and it is telling us that "33abc" is not a number

// "33" => 33
// "33abc" => NaN
// true => 1; false =>0
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);


let value = 3
let negValue = -value;
// console.log(negValue);

// console.log("1"+2)
// console.log(1+"2")
// console.log("1"+2+2)
// console.log(1+2+"2")

// console.log(+true)
// console.log(+"")

console.log(null>0); //  comparasion operator converted null to 0 and as 0 is not greater than 0 thats why false
console.log(null==0); // comparasion and quality works differently in js
console.log(null>=0); //  zero is at least equal to zero thats why true

console.log(undefined == 0 )
console.log(undefined > 0 )
console.log(undefined < 0 )

// === strict check  (cehcks datatype as well)
console.log("2"===2);


