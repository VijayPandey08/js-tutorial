// arrays // 
// java script array resizable
// shallow copy -> share refrence
// deep copy -> share copy
const myArr = [ 0,1,2,3,4,5]
const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// slice and splice

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("C", myArr);