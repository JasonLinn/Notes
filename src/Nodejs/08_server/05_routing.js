var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    if(req.url ==='/'){

        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    
    if(req.url === '/api'){
        res.writeHead(200, { 'Content-type': 'application/json' });
        var obj = {
            firstName: 'Jason',
            lastName: 'Lin'
        }
        res.end(JSON.stringify(obj));
    }

    // res.writeHead(404);
    res.end('not found');
    
    

}).listen(1337, '127.0.0.1');