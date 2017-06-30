var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    //plain 簡單的
    res.writeHead(200, { 'Content-type': 'text/html' });
    //能用stream就用，把檔案分割減輕伺服器負擔
    fs.createReadStream(__dirname + '/index.html').pipe(res);
    


}).listen(1337, '127.0.0.1');