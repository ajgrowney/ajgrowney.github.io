function getInvolveText(){
  return "Testing Involvement Text";
}


function techClick(){
  //Button Showing
  $("#involve").show();
  $("#lead").show();
  $("#tech").hide();
  //Text Showing
  $("#resumeTitle").html("Tech Title Field");
  $("#resumeText").html("Tech text field");
  $(".resumeInfo").show();
}
function leadClick(){
  $("#involve").show();
  $("#lead").hide();
  $("#tech").show();
  //Text Showing
  //Text Showing
  $("#resumeTitle").html("Lead Title Field");
  $("#resumeText").html("Lead text field");
  $(".resumeInfo").show();

}
function involveClick(){
  $("#involve").hide();
  $("#lead").show();
  $("#tech").show();
  //Text Showing
  $("#resumeTitle").html("Involve Title Field");
  $("#resumeText").html("involve text field");
  $(".resumeInfo").show();
}

$(document).ready(function(){
  $(".resumeInfo").hide();
  $("#tech").click(function(){
    techClick();
  });
  $("#lead").click(function(){
    leadClick();
  });
  $("#involve").click(function(){
    involveClick();
  });

});
