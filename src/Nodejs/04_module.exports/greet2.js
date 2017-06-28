exports.greet = function (){
    console.log('Hello!2');
}
//變異之前(greet.js)exports跟module.exports是不一樣的
//mutate (變異之後exports和module.exports都會改變)
console.log(exports);
console.log(module.exports);