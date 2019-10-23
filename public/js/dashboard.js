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
  
    var type = $("#havewant" `[name = ${type}]:checked`).val();
​
if ( type.toLowerCase() === "have") { 
//Add the item to Haves table 
​
	$.ajax ({
		url: (`/api/${type}`),
		method: "POST",
		data: newItem
	});
}
else { 
}//perform a different Ajax call or any other action u would like it to do 
