var fs = require('fs');

//utf8 是 Default
//sync同步
var greet = fs.readFileSync(__dirname + '/greet.txt','utf8');
console.log(greet);

//error-first
//readFile是async異步
var greet2 = fs.readFile(__dirname + '/greet.txt','utf8',function(err,data){
    console.log(data);
})


console.log('Done!');