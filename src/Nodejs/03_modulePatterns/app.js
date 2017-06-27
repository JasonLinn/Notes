var greet = require('./greet1');
greet();


//require 會回傳一個module.exports

var greet2 = require('./greet2').greet;

greet2();

//第一次node看到require的名字後，他會快取結果(module.exports)
var greet3 = require('./greet3');

greet3.greet();

//因為他是by reference 所以greeting被改變了
greet3.greeting = 'Changed hello world!'

var greet3d = require('./greet3');
greet3d.greet();

var greet4 = require('./greet4');
var grtr = new greet4();

grtr.greet();

var greet5 = require('./greet5').greet;

greet5();