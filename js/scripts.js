$(document).ready(function() {
  $("form").submit(function(event) {
    var groceryList = [$('#vegetable').val(), $('#bread').val(), $('#protein').val(), $('#snack').val()];

    var sortedList = groceryList.sort();

    sortedList.forEach(function(item) {
      $("ul#hide").append("<li>" + item.toUpperCase() + "</li>");
    })

    $("hide").show();
    $("form").hide();

    event.preventDefault();

  });
});