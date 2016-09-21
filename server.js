// Dependencies 
// =============================================================

var express = require('express'); //calls express npm.
var bodyParser = require('body-parser'); // calls body-parser npm.
const path = require('path'); //calls path npm.
// Sets up the Express App.

// =============================================================

var app = express(); //defines are app using express.
var PORT = 3001; //PORT Number that we are using.

// =============================================================
// Sets up the Express app to handle data parsing

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// =============================================================
//Routs

app.get("/", function(req, res){
	res.send('Welcome to Friends Travel Finder!');
});
app.get("/api/friends", function(req, res){

});



// =============================================================
//This Listener will tell you if you are connected.

app.listen(PORT, function () {
	console.log('Server started! At http://localhost:' + PORT);
});