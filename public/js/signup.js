// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn

$("#signUpButton").on("click", function(event) {
    event.preventDefault();

    // Make a new user object
    var newUser = {
        username: $("#username").val().trim(),
        firstName: $("#name").val().trim(),
        lastName: $("#lastname").val().trim(),
        email: $("#email").val().trim(),
        password: $("#password").val().trim()
    };

    // Send an AJAX POST-request with jQuery
    $.post("/api/signup", newUser)
        // On success, run the following code
        .then(function(data) {
            // Log the data we found
            console.log(data);
        });

    // Empty each input box by replacing the value with an empty string
    $("#username").val("");
    $("#name").val("");
    $("#lastname").val("");
    $("#email").val("");
    $("#password").val("");
});

$("#signInButton").on("click", function(event) {
    event.preventDefault();
    $.post("/api/login", {
        email: $("#loginEmail").val().trim(),
        password: $("#loginPassword").val().trim()
    }).then(function(data) {
        setAuthentication(data);
        if (isAuthenticated()) {
            location.href = "/profile"

        } else {
            console.log("failed to login.");
        }
    });
});

// $("#submitButton").on("click", function(event) {
//   //$(document).on("click," "#signInButton", function (event) {
//     console.log("submit button on click")
//     event.preventDefault();




//     });
//       //empty fields//
//       $("#subEmail").val("");
//       $("#inputPassword").val("");
//     });