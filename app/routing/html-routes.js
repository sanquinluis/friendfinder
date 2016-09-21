// Your html-routes.js file should include two routes:

// A GET Route to /survey.html which should display the survey page.
// A default USE route that leads to /home.html which displays the home page.

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/servey', function (req, res) {
	res.sendFile(path.join(__dirname, 'servey.html'));
});
