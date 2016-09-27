// Dependencies 
// =============================================================
var path = require('path'); //require path 
// =============================================================
// Basic route that sends the user first to the AJAX Page

module.exports = function(app) {
		//HTML GET request
		//Below code handles when user "visits" a page.
	
		//second html path that will be send. 
		//***accidentally I misspelled survey****!
		app.get('/servey', function (req, res) {
		res.sendFile(path.join(__dirname, '/../public/servey.html'));
});
		//home.html will be used for the default page when a user visits the web page. 
		app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
});

};
