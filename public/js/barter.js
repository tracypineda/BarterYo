// Make a get request to our api route that will return every item
$.get("/api/have", function(data) {
    // For each book that our server sends us back
    for (var i = 0; i < data.length; i++) {
      // Create a parent div to hold book data
      var itemData = $("<div>");
      // Add a class to this div: 'well'
      itemData.addClass("product");
      // Add an id to the well to mark which well it is
      itemData.attr("id", "book--" + i);
      // Append the well to the well section
      $("#itemData").append(itemSection);
  
      // Now  we add our have  data to be placed on the page
      $("#id-" + i).append("<h2>" + (i + 1) + ". " + data[i].userId + "</h2>");
      $("#itemname-" + i).append("<h3>item: " + data[i].item + "</h4>");
      $("#itemdescription-" + i).append("<h3>description: " + description[i].genre + "</h4>");
      $("#itemCatergory-" + i).append("<h3>Catergory: " + data[i].catergory + "</h4>");
    }
  });
  id 
  itemname
  itemdescription
  itemCategory