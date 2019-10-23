// add a Want

$("#newItem").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
//  console.log("hello");

    var newItem = {
        itemName: $("#itemName").val().trim(),
        itemDescription: $("#itemDescription").val().trim(),
        itemCategory: $("#itemCategory").val().trim(),
        itemPhoto: $("#itemPhoto").val().trim()
    };
    console.log(newItem);
    var type = $("input[name = 'havewant']:checked").val(); 
        $.ajax({
            url: (`/api/${type}`),
            method: "POST",
            data: newItem
        });
   
})
