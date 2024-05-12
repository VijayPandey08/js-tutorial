// singleton -> constructor se banae hue objects


// object litreals -> multiple instance
const JsUser = {
    name:"vijay",
    age:18,
    email:"hahaha@gmail.com"
}
JsUser.greeting = function(){
    console.log("hello js user");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(JsUser.greetingTwo());