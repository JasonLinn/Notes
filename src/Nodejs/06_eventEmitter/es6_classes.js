'use strict';
class Person {
    //類似 function constructors 
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //自動加入prototype
    greet(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

var jason = new Person('Jason','Lin');
jason.greet();
console.log(jason.__proto__);
// function Person(firstname,lastname){
//     this.firstName = firstName;
// }