function getInvolveText(){
  return "Testing Involvement Text";
}
function getLeadText(){
  return "Testing Leadership Text";
}
function getTechText(){
  return "Testing Technical Text";
}

function techClick(){
  //Button Showing
  $("#involve").show();
  $("#lead").show();
  $("#tech").hide();
  //Text Showing
  $("#resumeTitle").html("Tech Title Field");
  $("#resumeText").html(getTechText());
  $(".resumeInfo").show();
}
function leadClick(){
  $("#involve").show();
  $("#lead").hide();
  $("#tech").show();
  //Text Showing
  //Text Showing
  $("#resumeTitle").html("Lead Title Field");
  $("#resumeText").html(getLeadText());
  $(".resumeInfo").show();

}
function involveClick(){
  $("#involve").hide();
  $("#lead").show();
  $("#tech").show();
  //Text Showing
  $("#resumeTitle").html("Involve Title Field");
  $("#resumeText").html(getInvolveText());
  $(".resumeInfo").show();
}

$(document).ready(function(){

  $(".resumeInfo").css('visibility','none');
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
