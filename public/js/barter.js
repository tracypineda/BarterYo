$(document).ready(function() {
    if (!isAuthenticated()) {
        location.href = "/signup";
        return;
    }

    $.ajax({
        url: "/api/have",
        method: "GET",
        beforeSend: function(header) {
            header.setRequestHeader("x-access-token", getAuthToken());
        }
    }).then(function(response) {
        response.forEach(function(v) {
            $("#itemList").append(`<div class="card" style="width: 20rem">
              <img src="https://www.kwikot.com/wp-content/uploads/2017/10/Image-Coming-Soon-Placeholder.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${v.itemName}</h5>
                  <p class="card-text">${v.itemDescription}</p>
                  <p class="card-text"><small class="text-muted">Last updated ${moment(v.updatedAt).fromNow()}</small></p>
              </div>
          </div>`)
        });
    });
});