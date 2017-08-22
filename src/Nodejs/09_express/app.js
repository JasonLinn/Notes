var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
//middleware 介於req 與 res之間

app.use('/assets',express.static(__dirname + '/public'));
//用use所有的route就都會經過這個設定
app.use('/',function(req,res,next) {
    console.log(`Request Url: ${req.url}`);
    //run next middleware
    next();
})
app.get('/',function(req,res) {
    res.send(
        `<html><head>
        <link rel="stylesheet" href="assets/style.css"/>
        </head><body>Heloo</body></html>`
    )
    
})

app.get('/person/:id',function(req,res) {
    res.send(`<html><head></head><body>person:${req.params.id}</body></html>`)
})
app.get('/api',function (req,res) {
    res.json({firstname:'john'})
})
app.listen(port);