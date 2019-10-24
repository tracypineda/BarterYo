// Requiring our models
var db = require("../models");
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var config = require("../config/config");
var auth = require("../controller/auth");
// Routes
// =============================================================
module.exports = function(app) {
    console.log("hit routes")
        // GET route for getting all items in wants
    app.get("/api/want", function(req, res) {
        // findAll returns all entries for a table when used with no options
        db.Want.findAll({}).then(function(dbWant) {
            // We have access to the todos as an argument inside of the callback function
            res.json(dbWant);
        });
    });

    // GET route for getting all of the items in have
    app.get("/api/have/:userId?", function(req, res) {
        if (!req.params.userId) {
            // findAll returns all entries for a table when used with no options
            db.Have.findAll({}).then(function(dbHave) {
                res.json(dbHave);
            });
        } else {
            db.Have.findAll({
                where: {
                    userId: req.params.userId
                }
            }).then(function(dbHave) {
                res.json(dbHave);
            })
        }
    });

    app.post("/api/have", function(req, res) {
        db.Have.create({
            itemName: req.body.itemName,
            itemDescription: req.body.itemDescription,
            itemCategory: req.body.itemCategory,
            UserId: req.body.UserId
        }).then(function(results) {
            res.json(results);
        });
    });

    app.get("/api/user/:id", auth, function(req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            },
            attributes: { exclude: ['password'] },
            include: [
                { model: db.Have },
                { model: db.Want }
            ]
        }).then(function(results) {
            console.log(results);
            res.json(results);
        });
    });

    // Add a user
    app.post("/api/signup", function(req, res) {
        var hash = crypto.createHash('sha256').update(req.body.password).digest('base64');

        db.User.create({
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash,
            aboutMe: req.body.aboutMe
        }).then(function(results) {
            res.json(results);
        });
    });

    app.post("/api/login", function(req, res) {
        console.log(req.body.email, revq.body.password);
        var email = req.body.email;
        var password = req.body.password;
        var hash = crypto.createHash('sha256').update(password).digest('base64');

        db.User.findOne({ where: { email: email, password: hash } }).then(function(results) {
            if (results) {
                res.json({
                    authenticated: true,
                    token: jwt.sign({ id: results.id }, config.jwt_privatekey),
                    id: results.id,
                    username: results.username,
                    email: results.email,
                    firstName: results.firstName,
                    lastName: results.lastName
                });
                return;
            }

            res.json({ authenticated: false });
        })
    });


    app.post("/api/want", function(req, res) {
        db.Want.create({
            itemName: req.body.itemName,
            itemDescription: req.body.itemDescription,
            itemCategory: req.body.itemCategory,
            UserId: req.body.UserId
        }).then(function(results) {
            res.json(results);
        });
    });

    // Delete a product 
    app.delete("/api/items/:id", function(req, res) {

        db.item.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbWant) {
            res.json(dbWant);
        });
    });
};