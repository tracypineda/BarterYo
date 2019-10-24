// add a Want
console.log("hello");
$.ajax({
    method: "GET",
    url: "/api/user",
    data: user
  })
    .then(function() {
      window.location.href = "/profile";
    });
});




// $.ajax({
//     method: "GET",
//     url: "/api/user",
//     data: ser
// }).then(function(response) {
//       var results = response.data;
//       console.log(results);
//       $("#profilename").val(response.data.username);
//     });

// SELECT * FROM Users WHERE username = 

$(document).ready(function() {
    if (!isAuthenticated()) {
        location.href = "/signup";
        return;
    }

    $.ajax({
        url: "/api/user/" + getAuthentication().id,
        method: "GET",
        beforeSend: function(header) {
            header.setRequestHeader("x-access-token", getAuthToken());
        }
    }).then(function(response) {
        if (!response) {
            console.log("Error finding user");
            return;
        }

        console.log(response);
    });
})

$("#newItem").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    //  console.log("hello");

    var newItem = {
        itemName: $("#itemName").val().trim(),
        itemDescription: $("#itemDescription").val().trim(),
        itemCategory: $("#itemCategory").val().trim(),
        itemPhoto: $("#itemPhoto").val().trim(),
        UserId: $("#UserId").val().trim()
    };
    console.log(newItem);
    var type = $("input[name = 'havewant']:checked").val();
    $.ajax({
        url: (`/api/${type}`),
        method: "POST",
        data: newItem
    });

})