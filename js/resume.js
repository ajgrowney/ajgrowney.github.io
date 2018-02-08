var expanded = 0;
const mq = window.matchMedia("(max-width: 800px)");
function closeAll(){
  $("#lead_inv2").html("");
  $("#education_info").css("display","none");
  $("#work_exp_info").css("display","none");
  $("#lead_inv_info").css("display","none");
  $("#skills_info").css("display","none");
}
$(".gridOne").click(function(){
  if(expanded!=1){
    closeAll();
    if(mq.matches){
      $(".main").css("grid-template-rows","15em 50em 5em 0em 5em 0em 5em 0em");
    }else{
      $(".main").css("grid-template-rows","15em 28em 5em 0em 5em 0em 5em 0em");
    }
    $(".main").css("grid-row-gap","0.5%");
    $("#education_info").css("display","grid");
    expanded=1;
  }else{
    $(".main").css("grid-template-rows","15em 0em 15em 0em 15em 0em 15em 0em");
    $(".main").css("grid-row-gap","5%");
    $("#education_info").css("display","none");
    expanded=0;
  }

});
$(".gridTwo").click(function(){
  if(expanded!=2){
    closeAll();
    if(mq.matches){
      $(".main").css("grid-template-rows","5em 0em 15em 58em 5em 0em 5em 0em");

    }else{
      $(".main").css("grid-template-rows","5em 0em 15em 25em 5em 0em 5em 0em");
    }
    $(".main").css("grid-row-gap","0.5%");
    $("#work_exp_info").css("display","grid");
    expanded=2;
  }else{
    $(".main").css("grid-template-rows","15em 0em 15em 0em 15em 0em 15em 0em");
    $(".main").css("grid-row-gap","5%");
    $("#work_exp_info").css("display","none");
    expanded=0;
  }

});
$(".gridThree").click(function(){
  if(expanded!=3){
    closeAll();
    if(mq.matches){
      $(".main").css("grid-template-rows","5em 0em 5em 0em 15em 20em 5em 0em");
    }else{
      $(".main").css("grid-template-rows","5em 0em 5em 0em 15em 20em 5em 0em");
    }
    $(".main").css("grid-row-gap","0.5%");
    $("#lead_inv_info").css("display","grid");
    $("#lead_inv_info").css("grid-template-rows","15em auto")
    expanded=3;
  }else{
    $(".main").css("grid-template-rows","15em 0em 15em 0em 15em 0em 15em 0em");
    $(".main").css("grid-row-gap","5%");
    $("#lead_inv_info").css("display","none");
    $("#lead_inv1 button").css("height","20em");
    expanded=0;
  }
});
$(".lead_inv_butt").click(function(){
  $("#lead_inv1 button").css("height","15em");
});
$(".gridFour").click(function(){
  if(expanded!=4){
    closeAll();
    $(".main").css("grid-template-rows","5em 0em 5em 0em 5em 0em 15em 25em");
    $(".main").css("grid-row-gap","0.5%");
    $("#skills_info").css("display","grid");
    expanded=4;
  }else{
    $(".main").css("grid-template-rows","15em 0em 15em 0em 15em 0em 15em 0em");
    $(".main").css("grid-row-gap","5%");
    $("#skills_info").css("display","none");
    expanded=0;
  }

});

$("#self_lead_but").click(function(){
  if(mq.matches){
    $(".main").css("grid-template-rows","5em 0em 5em 0em 15em 55em 5em 0em");

  }else{
    $(".main").css("grid-template-rows","5em 0em 5em 0em 15em 35em 5em 0em");
  }
  $("#lead_inv2").html("<div id='self_1'><h3>How?</h3><p>- Selected through a competitive application process as one of 30 engineering students for the SELF Leadership Fellows 2019 Cohort</p>"+
  "<h3>What?</h3><p>- Participate in professional development, workshops, and activities to develop management, entrepreneurship, leadership, engineering, business, communication, and interpersonal skills to create future engineering and business leaders</p>"+
  "</div><div id='self_2'><h3>More?</h3><p>- Planned and created the School of Engineering's largest recruitment event in the Fall, High School Design</p>"+
  "<p>- Created and implemented a philanthropy fundraiser called Donuts for Diplomas used to benefit the Shelter Inc. and foster care children in Lawrence, KS</p></div>"
);
});
$("#bey_lead_but").click(function(){
  if(mq.matches){
    $(".main").css("grid-template-rows","5em 0em 5em 0em 15em 75em 5em 0em");
  }else{
    $(".main").css("grid-template-rows","5em 0em 5em 0em 15em 45em 5em 0em");
  }
  $("#lead_inv2").html("<div id='bey_1'>"+
  "<h2>Leadership</h2>"+
  "<h5>Recruitment Chair (Spring 2017 - Fall 2017)</h5>"+
  "<p>Schedule consistent events with advanced scheduling and entertaining ideas</p>"+
  "<p>Promote participation of actives along with attendance of potential new members</p>"+
  "<p>Actively contact PNM's and keep chapter involved in membership updates</p>"+
  "<p><b>Results</b>: Very high quality associate member class with <b>6</b> of the 10 serving on the executive board</p>"+
  "<h3>Service</h3>"+
  "<h5>Pizza and Puppies</h5>"+
  "<p>Raised over $1,500 in support of the Lawrence Humane Society by selling tickets and training at the LHS</p>"+
  "<h5>Relay for Life</h5>"+
  "</div><div id='bey_3'>"+

  "<div style='grid-column: 3' id='academic_chair'><br><br><br><h5>Academic Chair (Spring 2016 - Fall 2016)</h5>"+
  "<p>Monitor, encourage, and motivate fellow members to achieve high academic standards</p>"+
  "<p>Implement the Academic Draft to engage members with their peers' academic success</p>"+
  "<p><b>Result</b>: Highest GPA by a Fraternity in <b>KU IFC Historical Records</b> at <b>3.64</b></p></div>"+

  "</div>");
});
$("#schol_hall_but").click(function(){
  if(mq.matches){
    $(".main").css("grid-template-rows","5em 0em 5em 0em 15em 62em 5em 0em");
  }else{
    $(".main").css("grid-template-rows","5em 0em 5em 0em 15em 35em 5em 0em");
  }
  $("#lead_inv2").html("<div id='schol_1'>"+
  "<h2>Executive Board Member</h2>"+
  "<h5>Fall 2015 - Spring 2017</h5>"+
  "<p> Involved in the entirety of the scholarship hall's activities, fund allocation, and decision making process</p>"+
  "</div><div id='schol_2'><h2>Intramurals and Sports Chair</h2>"+
  "<h5>Fall 2016 - Spring 2017</h5>"+
  "<p> Created interactive Google Spreadsheet to help residents be aware of upcoming registration dates, relative interest of peers, and opportunities</p>"+
  "<p> Work with partner hall to prepare KU Basketball \"camping\" schedule, assure reliability in people filling their slots, and creating a fair system to allow attendance at the games based off participation.</p>"+
  "<p> Create an easy to use ordering system for the Stephenson Hall Intramural Team shirts that are pride of the hall's history</p>"+
  "</div>"
);
});
$("#slc_but").click(function(){
  if(mq.matches){
    $(".main").css("grid-template-rows","5em 0em 5em 0em 15em 55em 5em 0em");
  }else{
    $(".main").css("grid-template-rows","5em 0em 5em 0em 15em 35em 5em 0em");
  }
  $("#lead_inv2").html("<div id='slc_1'>"+
  "<h2>Koinonia<br>(Spring 2016, Fall 2016, Spring 2017, Spring 2018)</h2>"+
  "<p>Help organize and lead semesterly retreat for KU students held at Prairie Star Ranch in Williamsburg, KS</p>"+
  "<p>Meetings every Saturday for a month and a half before the weekend of the retreat</p>"+
  "<p>Lead and facilitate conversation in small group settings along with developing a talk over a given topic</p>"+
  "</div><div id='slc_2'>"+
  "<h2>Choral Scholar<br>(Fall 2017-Spring 2018)</h2>"+
  "<p>Leader of the 9 PM choir involving cantoring at service frequently and arriving early to help organist prepare and organize</p>"+
  "<p>Social committee in charge of setting up activities for the end of the year celebrations</p>"+
  "<p>Spend 10 hours a week at SLC helping Music and Liturgy Director, attending seminars, working with choir, and attending events</p>"+
  "</div>");
});
$(document).ready(function(){

});
