var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  app.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/signup.html"));
  });
  // add route loads the profilepage.html page where users can enter profile info
  app.get("/login", function (req, res) {
<<<<<<< HEAD
    //res.render("login");
    res.sendFile(path.join(__dirname, "../views/signup.html"));
  })
=======
    res.sendFile(path.join(__dirname, "../views/signup.html")
    );
  });
>>>>>>> 43e5aa8a4e3a619b5844fdb18d79dadfae066857

  // all route loads the barter.html page, where user posts products
  app.get("/barter", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/barter.html"));
  });


  app.get("/profile", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/profile.html"));
  });

};