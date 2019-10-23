var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.render("mainpage")
  })
  
  // add route loads the profilepage.html page where users can enter profile info
  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  app.get("/login", function(req,res){
res.render("login");
  })

  // all route loads the barter.html page, where user posts products
  app.get("/barter", function(req, res) {
    res.render("barter");
  });

  
  app.get("/dashboard", function(req, res) {
    res.render("dashboard");
  });

  

};