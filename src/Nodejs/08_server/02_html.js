var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    //plain 簡單的
    res.writeHead(200, { 'Content-type': 'text/html' });
    var html  = fs.readFileSync(__dirname + '/index.html','utf8')

    var message = 'Hello Jason';
    html = html.replace('{Message}',message);
    //發送結束 告知是最後一筆
    res.end(html);

}).listen(1337, '127.0.0.1');