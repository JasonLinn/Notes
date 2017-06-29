'use strict';
var Greetr = require("./greet");
// function Greetr(){
//     //把this指向EventEmitter，確保所有屬性跟方法都建立在EventEmitter上
//     EventEmitter.call(this);
//     this.greeting ='Hello world!';
// }

//Greetr 繼承EventEmitter  擁有它的方法及屬性
// util.inherits(Greetr,EventEmitter);

// //在Greetr增加一個方法
// Greetr.prototype.greet = function(data){
//     console.log(this.greeting+":"+data);
//     //執行屬性為greet的函數
//     this.emit('greet',data);
// }

//產生一個新的Greetr(擁有Greetr跟EE的屬性和方法)
var greeter1 = new Greetr();

//綁定屬性為greet的函數
greeter1.on('greet',function(data){
    console.log('Someone greeted!'+":"+data);
})
// console.log(EventEmitter.greet('hi'));

greeter1.greet('Jason');