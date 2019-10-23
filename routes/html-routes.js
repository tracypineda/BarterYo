var path = require("path");


// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  })

  // add route loads the profilepage.html page where users can enter profile info
  app.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/signup.html"));
  });

  app.get("/login", function (req, res) {
    //res.render("login");
    res.sendFile(path.join(__dirname, "../views/login.html"));
  })

  // all route loads the barter.html page, where user posts products
  app.get("/barter", function (req, res) {
    //res.render("barter");
    res.sendFile(path.join(__dirname, "../views/barter.html"));
  });


  app.get("/dashboard", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/dashboard.html"));
    //res.render("dashboard");
  });



};