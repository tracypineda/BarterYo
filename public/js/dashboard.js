// add a Want



$("#newItem").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newItem = {
      itemName: $("#itemName").val().trim(),
      itemDescription: $("itemDescription").val().trim(),
      itemCategory: $("#itemCategory").val().trim(),
      itemPhoto: $("itemPhoto").val().trim()
    };
});
// google how to get the value of the radio button
var type = $("#havewant `[name = ${type}]`:checked").val();
$.ajax ({
    url: (`/api/${type}`),
    method: "POST",
    data: newItem
});

$("#itemName").val("");
$("#itemnDescription").val("");
$("#itemCategory").val("");
$("#itemPhoto").val("");


$.ajax ({
    url:("/api/have"),
    method: "POST",
    data: Have
});
$.ajax({
    url:("/api/want"),
    method: "POST",
    data: Want
});


