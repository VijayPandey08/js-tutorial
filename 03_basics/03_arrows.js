// global scope ko pullute hone se bachane k lie,, IIFE (immediately invoked function expressions (IIFE) la istemal krna hota h)


(function chai(){
    console.log(`DB CONNECTED`);
})();

(  ()=>{
    console.log(`DB CONNECTED TWO`);
})();