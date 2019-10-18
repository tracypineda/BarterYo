var express = require("express");
var flash = require("connect-flash");
var passport = require("passport");
var session = require("express-session");
var exphbs = require("express-handlebars");
var routes = require("./routes");
var db = require("./models");
var PORT = process.env.PORT || 3000;
var app = express();

// load passport strategies
require("./config/passport/passport.js")(passport, db.User);

// urlencoded middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// express static middleware setup
app.use(express.static("public"));

// handlebars middleware setup
app.set("views", "./views")
app.engine("hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

// passport/connect-flash middleware setup
app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// making flash messages available to front-end
app.use(function (req, res, next) {
    res.locals.successMsg = req.flash("successMsg");
    res.locals.errorMsg = req.flash("errorMsg");
    res.locals.error = req.flash("error");
    next();
});

// all routes, including auth and API routes
app.use(routes);

// sync w/database
db.sequelize.sync()
    .then(function () {
        // ...then start web server
        app.listen(PORT, function (err) {
            if (err) {
                return console.log(err);
            }

            console.log(`Server now running on http://localhost:${PORT}!`);
        });
    }).catch(function (err) {
        console.log(err, "Something went wrong with the db sync!");
    });