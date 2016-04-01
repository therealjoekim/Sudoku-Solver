// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready (function(event){

  $("form").on("submit", function(e){
    e.preventDefault();
    var request = $.ajax({
      type: "POST",
      url: $(this).attr("action"),
      data: $(this).serialize()
    });
    request.done(function(response){
      console.log("response: ", response);
      for(var row=0; row < response.length; row++){
        for(var col=0; col < response[row].length; col++){
          var selector = "tr:nth-child(" + (row + 1) + ") td:nth-child(" + (col + 1) + ") input";
          var cell = $($(selector)[0]);
          if (!cell.val()){
            cell.val(response[row][col]);
            cell.parent().addClass("flash");
          }
        };
      };
    });
  });

  $("input").change(function(e){
    $(this).parent().removeClass("flash");
  });

});