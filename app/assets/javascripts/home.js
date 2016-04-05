// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready (function(event){

  // Start all tds as 'neutral' class
  $("td").attr("class", "neutral");

  $("form").on("submit", function(e){

    e.preventDefault();

    var request = $.ajax({
      type: "POST",
      url: $(this).attr("action"),
      data: $(this).serialize()
    });

    request.done(function(response){
      // response is a 2-dimensional array.
      // Insert all values in response into the appropriate cell of the table:

      // For each element in response:
      for(var row=0; row < response.length; row++){
        for(var col=0; col < response[row].length; col++){

          // Build a css selector to target the input field inside the corresponding table cell:
          // "tr:nth-child(row+1) td:nth-child(col+1)"
          // Example: where row = 3 and col = 2
          // => "tr:nth-child(4) td:nth-child(3) input"
          // aka all inputs inside a 3rd td of a 4th tr
          // (The +1 is because nth-child is 1-indexed.)

          var selector = "tr:nth-child(" + (row + 1) + ") td:nth-child(" + (col + 1) + ") input";

          // That gives us an array of HTML objects, so we just need to grab the first (and only) element of it:
          var cell = $($(selector)[0]);

          // If that input is empty, aka nil value
          if (!cell.val()){
            // Set its value to the corresponding element in response
            cell.val(response[row][col]);
            // Set the parent cell's class to a special class that plays an FX animation
            cell.parent().attr("class", "flash");
          }
        };
      };
    });

  });

  // The special 'flash' class also slightly grays the numbers to visually distinguish computer-filled fields from the user.
  // We want to change this back whenever the user edits a fields

  // Whenever the user alters an input field
  $("input").change(function(e){
    // Set that input's parent cell's class (back) to neutral
    $(this).parent().attr("class", "neutral");
  });

});