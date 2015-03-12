var express=require('express');
var path = require('path');
var bodyParser=require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', express.static(path.join(__dirname, '')));

app.listen(3000, function(){
    console.log(__dirname);
    console.log('Express server started on port 3000');
});