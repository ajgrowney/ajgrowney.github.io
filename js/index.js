function techClick(){
  $("#involve").show();
  $("#lead").show();
  $("#tech").hide();
}
function leadClick(){
  $("#involve").show();
  $("#lead").hide();
  $("#tech").show();
}
function involveClick(){
  $("#involve").hide();
  $("#lead").show();
  $("#tech").show();

}

$(document).ready(function(){

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
