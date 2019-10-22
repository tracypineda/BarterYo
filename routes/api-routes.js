
// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/Want", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Want.findAll({}).then(function(dbWant) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbWant);
    });
  });
  
   // GET route for getting all of the todos
   app.get("/api/Have", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Have.findAll({}).then(function(dbHave) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbHave);
    });
  });



  // POST route for saving a new todo
  app.post("/api/users", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.User.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbUser) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbUser);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });
  // Add a user
  app.post("/api/sign-up", function (req, res) {
    console.log("user data:");
    console.log(req.body);
    user.create({
      email: req.body.email,
      password: req.body.password
    }).then(function (results) {
      res.json(results);
    });
  });

  // Delete a product 
  app.delete("/api/todos/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });
};
