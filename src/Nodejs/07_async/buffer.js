//buffer 是node的全域建構式，所以不用require
var buf = new Buffer('Hello','utf8');
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('wo');
console.log(buf.toString());