// // Get references to page elements
// var userInput = $("#user-input");
// var barterList = $("#barter-list");
// var submitBtn = $("#submit");
// var wishList = $("#wish-list");

// // The API object contains methods for each kind of request we'll make
// var API = {
//     saveitem: function(example) {
//         return $.ajax({
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             type: "POST",
//             url: "api/",
//             data: JSON.stringify(example)
//         });
//     },
//     getitem: function() {
//         return $.ajax({
//             url: "api/examples",
//             type: "GET"
//         });
//     },
//     deleteitem: function(id) {
//         return $.ajax({
//             url: "api/examples/" + id,
//             type: "DELETE"
//         });
//     }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshWishlist = function() {
//     API.getwishlist().then(function(data) {
//         var items = data.map(function(example) {
//             var anchor = $("<a>")
//                 .text(example.text)
//                 .attr("href", "/wishlist/" + wishlist.id);

//             var $li = $("<li>")
//                 .attr({
//                     class: "list-group-item",
//                     "data-id": example.id
//                 })
//                 .append($a);

//             var $button = $("<button>")
//                 .addClass("btn btn-danger float-right delete")
//                 .text("ｘ");

//             $li.append($button);

//             return $li;
//         });

//         $exampleList.empty();
//         $exampleList.append($examples);
//     });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//     event.preventDefault();

//     var newEntry = {
//         text: newEntry.text.val().trim(),
//         description: newEntry.Description.val().trim()
//     };

//     if (!(newEntry.text && newEntry.description)) {
//         alert("You must enter an example text and description!");
//         return;
//     }

//     API.savenewEntry(example).then(function() {
//         refreshExamples();
//     });

//     $exampleText.val("");
//     $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//     var idToDelete = $(this)
//         .parent()
//         .attr("data-id");

//     API.deleteExample(idToDelete).then(function() {
//         refreshExamples();
//     });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);