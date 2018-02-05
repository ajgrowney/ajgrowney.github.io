var expanded = 0;
function closeAll(){
  $("#education_info").css("display","none");
  $("#work_exp_info").css("display","none");
  $("#lead_inv_info").css("display","none");
  $("#skills_info").css("display","none");
}
$(".gridOne").click(function(){
  if(expanded!=1){
    closeAll();
    $(".main").css("grid-template-rows","10em 20em 5em 0em 5em 0em 5em 0em");
    $(".main").css("grid-row-gap","0.5%");
    $("#education_info").css("display","grid");
    expanded=1;
  }else{
    $(".main").css("grid-template-rows","10em 0em 10em 0em 10em 0em 10em 0em");
    $(".main").css("grid-row-gap","5%");
    $("#education_info").css("display","none");
    expanded=0;
  }

});
$(".gridTwo").click(function(){
  if(expanded!=2){
    closeAll();
    $(".main").css("grid-template-rows","5em 0em 10em 20em 5em 0em 5em 0em");
    $(".main").css("grid-row-gap","0.5%");
    $("#work_exp_info").css("display","grid");
    expanded=2;
  }else{
    $(".main").css("grid-template-rows","10em 0em 10em 0em 10em 0em 10em 0em");
    $(".main").css("grid-row-gap","5%");
    $("#work_exp_info").css("display","none");
    expanded=0;
  }

});
$(".gridThree").click(function(){
  if(expanded!=3){
    closeAll();
    $(".main").css("grid-template-rows","5em 0em 5em 0em 10em 20em 5em 0em");
    $(".main").css("grid-row-gap","0.5%");
    $("#lead_inv_info").css("display","grid");
    expanded=3;
  }else{
    $(".main").css("grid-template-rows","10em 0em 10em 0em 10em 0em 10em 0em");
    $(".main").css("grid-row-gap","5%");
    $("#lead_inv_info").css("display","none");
    expanded=0;
  }

});
$(".gridFour").click(function(){
  if(expanded!=4){
    closeAll();
    $(".main").css("grid-template-rows","5em 0em 5em 0em 5em 0em 10em 20em");
    $(".main").css("grid-row-gap","0.5%");
    $("#skills_info").css("display","grid");
    expanded=4;
  }else{
    $(".main").css("grid-template-rows","10em 0em 10em 0em 10em 0em 10em 0em");
    $(".main").css("grid-row-gap","5%");
    $("#skills_info").css("display","none");
    expanded=0;
  }

});

$(document).ready(function(){

});
