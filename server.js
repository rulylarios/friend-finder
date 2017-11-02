//setting our dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//setting up express and our port
var app = express();
var PORT = process.env.PORT || 8080;

//setting up body parser for our JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//requiring our routes to serve to the page
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

//function for setting up our server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
