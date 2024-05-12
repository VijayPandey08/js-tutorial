let myCreatedDate = new Date("01-14-2023")

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));
// console.log(myCreatedDate);
// console.log(myCreatedDate.getTime());
// console.log(myCreatedDate.toLocaleString());

let newDate = new Date()


newDate.toLocaleString('default',{
    weekday: "long",
})