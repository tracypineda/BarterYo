// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn

$("#signInButton").on("click", function(event) {
//$(document).on("click," "#signInButton", function (event) {
  console.log("submit button on click")
  event.preventDefault();

  // Make a new user object
  var newUser = {
    userName: $("#username").val().trim(),
    firstName: $("#name").val().trim(),
    lastName: $("#lastname").val().trim(),
    email: $("#email").val().trim(),
    password: $("#newpass").val().trim()
  };

  console.log("newUser: " + newUser)

  // Send an AJAX POST-request with jQuery
  $.post("/api/signup", newUser)
    // On success, run the following code
    .then(function (data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#userName").val("");
  $("#name").val("");
  $("#lastname").val("");
  $("#email").val("");
  $("#newpass").val("");

});
