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
        $("#userName").html(`${response.firstName} ${response.lastName}`)

        $("#aboutMe").html(response.aboutMe);
        if (response.Haves) {
            var html = "";
            response.Haves.forEach(function(v) {
                html += `<tr><td>${v.itemName}</td><td>${v.itemDescription}</td></tr>`
            })
            $("#have tbody").html(html);
        }


        if (response.Wants) {
            var html = "";
            response.Wants.forEach(function(v) {
                html += `<tr><td>${v.itemName}</td><td>${v.itemDescription}</td></tr>`
            })
            $("#want tbody").html(html);
        }
    });
})

$("#newItem").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    if (!isAuthenticated()) {
        return;
    }
    var newItem = {
        itemName: $("#itemName").val().trim(),
        itemDescription: $("#itemDescription").val().trim(),
        itemCategory: $("#itemCategory").val().trim(),
        UserId: getAuthentication().id
    };
    var type = $("input[name='havewant']:checked").val();
    if (type) {
        $.ajax({
            url: (`/api/${type}`),
            method: "POST",
            data: newItem
        }).then(function() {
            location.reload();
        });
    }

})