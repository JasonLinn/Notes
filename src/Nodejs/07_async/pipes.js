var fs = require('fs');
var zlib = require('zlib');
//the stream will fill the buffer
//他會用內容填滿緩衝
//如果內容小於buffer大小，則會發送出完整檔案
//可以切成小塊
var readable = fs.createReadStream(__dirname + '/greet_stream.txt');

//連接readable 和 writable 的管子叫做pipe
var writable = fs.createWriteStream(__dirname + '/copy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

var gzip = zlib.createGzip();
readable.pipe(writable);

//先讀取，在壓縮，最後寫入.gz
readable.pipe(gzip).pipe(compressed);