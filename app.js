var express = require('express')
var app = express()
var formidable = require("formidable")
var fs = require('fs')

app.get('/', function (req, res) {
    res.send('hello world')
})

app.use('/public', express.static('public'))

app.post('/upload', function (req, res) {
    // 图片上传
    var form = new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(req, function(error, fields, files) {
        console.log("parsing done");
        console.log(fields)
        console.log(files.upload.path);
        fs.writeFileSync("public/assets/" + Date.now() + '.png', fs.readFileSync(files.upload.path));
        res.send()
    });
});



var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port);
})

