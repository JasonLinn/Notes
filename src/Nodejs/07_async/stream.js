var fs = require('fs');

//the stream will fill the buffer
//他會用內容填滿緩衝
//如果內容小於buffer大小，則會發送出完整檔案
//可以切成小塊
var readable = fs.createReadStream(__dirname + '/greet_stream.txt',{encoding:'utf8',highWaterMark:16*1024});


var writable = fs.createWriteStream(__dirname + '/copy.txt');
readable.on('data',function(chunk){
    // console.log(chunk);
    console.log(chunk.length);
    writable.write(chunk);
})