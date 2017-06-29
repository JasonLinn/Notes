'use strict';
var EventEmitter = require('events');
var util = require('util');


module.exports = class Greetr extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello world!';
    }
    greet(data) {
        console.log(this.greeting + ":" + data);
        //執行屬性為greet的函數
        this.emit('greet', data);
    }
}