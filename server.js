var express=require('express');
var path = require('path');
var file = require("fs");
var bodyParser=require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended:false}));

function readTechStackFile(res){
	file.readFile("server/techStack.json", "utf8", function(err, data){
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

function readProfileFile(name,res){

	var responseCallback = function(err, data){
		console.log("got into response call back");
		if(err){
			console.log("Error reading file...");
			console.log(err);
			return;
		}
		console.log(data);
		res.json(JSON.parse(data));
		res.end();
	};

	if(name === "keerti"){
		file.readFile("server/keertiProfile.json", "utf8", responseCallback);
	}else{
		file.readFile("server/ngHyderabadProfile.json", "utf8", responseCallback);
	}
};

app.use('/', express.static(path.join(__dirname, '')));

app.get("/api/profile/:name", function(req, res){
	console.log("got request for " + req.params.name)
	res.setHeader('Content-Type', 'application/json');
    readProfileFile(req.params.name,res);
});

app.get("/api/techstack", function(req, res){
	res.setHeader('Content-Type', 'application/json');
    readTechStackFile(res);
});

app.listen(3001, function(){
    console.log(__dirname);
    console.log('Express server started on port 3001');
});