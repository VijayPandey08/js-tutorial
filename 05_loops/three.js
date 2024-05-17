// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }  // puri kahani "auto" ki tarah chal ri h


const map =new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")

for (const [key, value] of map) {
    console.log(key, ':-', value);   
}