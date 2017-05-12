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

	return string.replace("-", "").split(" ").join("");
}

function validateAlpha(data){
	var errors={};
		 	
		if( !validator.isAlpha(toStringAlpha(data.name))){
			errors.name = "pas de caractere spéciaux"
		}
		if (!validator.isAlpha(toStringAlpha(data.forname))){
			errors.forename ="pas de caractere spéciaux"
		}
		if (!validator.isEmpty(data.name)){
			errors.name = "Veuillez renseigner ce champ"
		}
		if (!validator.isEmpty(data.forname)){
			errors.forename = "Veuillez renseigner ce champ"
		}
		if (!validator.isEmpty(data.adress)){
			errors.adress = "Veuillez renseigner ce champ"	
		}
		console.log(errors);
		return errors;
}



app.get("/", function(req, res){

	
	res.render("page1")
});

app.post("/page2", function(req, res){
	validateAlpha(req.body)
	res.render("page2")
});

app.post("/page3", function(req, res){

	res.render("page3")
});

app.listen(3000, function(){

	console.log("Yipikai, le serveur est en route!")
});