function getInvolveText(){
  return "Testing Involvement Text";
}


function techClick(){
  //Button Showing
  $("#involve").show();
  $("#lead").show();
  $("#tech").hide();
  //Text Showing
}
function leadClick(){
  $("#involve").show();
  $("#lead").hide();
  $("#tech").show();
  //Text Showing

}
function involveClick(){
  $("#involve").hide();
  $("#lead").show();
  $("#tech").show();
  //Text Showing
  $("#resumeTitle").html("Involve Title Field");
  $("#resumeText").html("involve text field");
  $(.resumeInfo).show();
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
