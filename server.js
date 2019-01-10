var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

var db =require("./models");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/wishes_controllers.js");

app.use("/", routes);
db.sequelize.sync().then(function() {
app.listen(PORT, function(){
    console.log("server listening on: HTTP://localhost: " + PORT);
});
});

