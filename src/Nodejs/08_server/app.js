var http = require('http');

http.createServer(function(req,res){
    //plain 簡單的
    res.writeHead(200,{'Content-type':'text/plain'});
    //發送結束 告知是最後一筆
    res.end('Hello world!\n');

}).listen(1337,'127.0.0.1');