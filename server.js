var express = require ("express");
var app = express();
var nodefs =require("fs");
var bodyparser = require("body-parser");
var validator = require("validator");

app.set("views", "./views");
app.set("view engine", "jade");
app.use(express.static(__dirname+"/views"));
app.use(bodyparser.urlencoded({extend:false}));
app.use(bodyparser.json());


function toStringAlpha (string){
	string.replace("-", "").split(" ").join("");
}

function validateAlpha(data){
	var errors={};
		
		if( validator.isAlpha(toStringAlpha(data.name)==false)){
			errors.name = "pas de caractere spéciaux"
	}
	
}


app.get("/", function(req, res){

	
	res.render("page1")
});

app.post("/page2", function(req, res){
	console.log(validateAlpha(req.body))
	console.log(req.body)
	res.render("page2")
});

app.post("/page3", function(req, res){

	res.render("page3")
});

app.listen(3000, function(){

	console.log("Yipikai, le serveur est en route!")
});