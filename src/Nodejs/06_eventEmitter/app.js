// const arr = [];

// arr.push(function(){
//     console.log('1');
// })
// arr.push(function(){
//     console.log('2');
// })

// arr.forEach(function(item){
//     item();
// })

var Emitter = require('events');
//用eventConfi 可以綁定事件變數在一個檔案中，比只輸入字串還要不容易產生錯誤，而且他會顯示此變數不在物件中
var eventConfig = require('./config').events;
var emtr = new Emitter();

emtr.on(eventConfig.GREET,function(){
    console.log('Hello');
})
emtr.on(eventConfig.CLICK,function(){
    console.log('click');
})
emtr.on(eventConfig.GREET,function(){
    console.log('greet');
})


emtr.emit('greet');
emtr.emit('click');