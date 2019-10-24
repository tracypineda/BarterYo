var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
<<<<<<< HEAD
// var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
=======
>>>>>>> 6dc2c7980aa955523690d11a15bd665717e31ae5
//var flash = require('connect-flash');

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));
<<<<<<< HEAD
//app.use(flash());
// app.use(passport.initialize());
// app.use(passport.session());

=======
>>>>>>> 6dc2c7980aa955523690d11a15bd665717e31ae5

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});


module.exports = app;