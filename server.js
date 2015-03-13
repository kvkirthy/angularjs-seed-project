var express=require('express');
var path = require('path');
var file = require("fs");
var bodyParser=require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended:false}));

function readTechStackFile(res){
	file.readFile("techStack.json", "utf8", function(err, data){
		if(err){
			console.log("Error reading file...");
			console.log(err);
			return;
		}
		console.log(data);
		res.json(JSON.parse(data));
		res.end();
	});
}

app.use('/', express.static(path.join(__dirname, '')));

app.get("/api/techstack", function(req, res){
	res.setHeader('Content-Type', 'application/json');
    readTechStackFile(res);
});

app.listen(3001, function(){
    console.log(__dirname);
    console.log('Express server started on port 3001');
});