var db = require("../models");

module.exports = function(app) {

    app.get("/api/index", function(app){
        res.sendFile(path.join(__dirname + '/../js/index.js'));
    });

    app.get("/api/have/:id", function(app) {

    });
}