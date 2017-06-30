var http = require('http');

http.createServer(function (req, res) {
    //plain 簡單的
    res.writeHead(200, { 'Content-type': 'application/json' });
    var obj ={
        firstName:'Jason',
        lastName:'Lin'
    }
    res.end(JSON.stringify(obj));

}).listen(1337, '127.0.0.1');