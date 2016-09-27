// Your api-routes.js file should contain two routes: 
// This route will also be used to handle the compatibility logic.
//Loading DATA
// Dependencies 
// =============================================================
//grabs the data from the friends .js Json file insode the data folder.
var friends = require('../data/friends');
// =============================================================
//ROUTING

module.exports = function(app) {
		//API GET request
		//The code bellow will handel when user visits the page.
		//In each of the below cases when the user visits the link
		app.get('/api/friends', function(req, res) {
			res.json(friends);
		});

		//API POST REQUEST
		//Creates a userData if true
		app.post('/api/friends', function(req, res) {
			// body-parsing middleware to populate === req.body
			var userData = req.body;
				var theRealDiffrence = [];
				var totalDifference = 0;
			//for loop in the friends file (the - 1 is to eliminate the current user)
			for(var i = 0; i <(friends.length -1); i++) {
				//loop within a loop for the questions
				for (var x = 0; x < friends[i].scores.length; x ++){
					totalDifference += Math.abs(friends[i].scores[x] - userData.scores[x]);
				}
				theRealDiffrence.push(totalDifference);
				totalDifference = 0;
			}
			// matching the array
			var theMatch = friends[theRealDiffrence.indexOf(Math.min.apply(null, theRealDiffrence))];
			res.send(theMatch);
		});



}