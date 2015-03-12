var express=require('express');
var path = require('path');
var bodyParser=require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', express.static(path.join(__dirname, '')));

app.get("/api/techstack", function(req, res){
	res.setHeader('Content-Type', 'application/json');
    res.json({temp:"value"});
});

app.listen(3001, function(){
    console.log(__dirname);
    console.log('Express server started on port 3001');
});