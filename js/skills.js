var currentProject = 0;
var myHome = {
  project_type: "web",
  description: "As a personal interest, I wanted to stretch my knowledge outside of PHP and mySQL that we covered in Software Engineering and develop with the power of a Realtime Database like Firebase. During the project, which I am still developing, I have had to delve deep into a new documentation and learn the importance of authorization. I have also had to learn the signing in process and adjustment of profile data.",
  img: ["../img/project_img/home_1.png","../img/project_img/home_2.png"],
  title: "My Home",
  skills: ["Javascript","Databases","HTML5","CSS3","jQuery"],
  objectives: ["Gain realtime database experience","Utilize javascript expertise","Expand upon knowledge of Javascript Promises","Understand database architecture"]
}
var eventPlanner = {
  project_type: "web",
  description: "The Event planner was the first project assigned in our Software Engineering class. The only real description we received was to build a Doodle better than Google can. This entailed our first experience with version control which was essential to project success. Using my great knowledge and passion for front end design, I was placed in charge of the UI and accessibility of the database to the front end elements. Gained an immense knowledge of jQuery and its components as I communicated with the guys in charge of the backend mySQL and PHP handling.",
  img: ["../img/project_img/eventPlanner_1.png","../img/project_img/eventPlanner_2.png"],
  title: "Event Planner",
  skills: ["Git","Javascript","jQuery","PHP","HTML","CSS"],
  objectives: ["Effectively learn and use version control","Develop a better version of Doodle Event Planning", "Allow events to have breaks between event times", "Allow potential attendees to effecitvely view the event description", "Enable attendees to sign up for certain half hour slots of the event's time and make that transparent to other users"]
}
var eventPlanner2 = {
  project_type: "command_line",
  description: "The 'Fired' event planner was the second project assinged in our Software Engineering class. After the first project, we all got 'fired' by our company and 'hired' by another. What this entailed was swapping code bases with another group and continuing development given their code. This was by far one of the best opportunities I have had to learn and improve my code because of the lack of abstraction. The entire program was built into one massive while loop and reused several key variable in different places. As we developed, we made sure to implement classes of our own while attempting to navigate their procedural mess that did not meeet a lot of previous objectives.",
  img: ["../img/project_img/commandEventPlanner_1.PNG","../img/project_img/commandEventPlanner_2.PNG"],
  title: "Fired Event Planner",
  skills: ["C++", "Git", "Documentation", "External Collaboration","Abstraction"],
  objectives: ["Learn to interact with pre-existing code base", "Add an appended task list to each time slot of the event's duration", "Allow multiple day events"]
}
var noGracias = {
  project_type: "desktop",
  description: "Our final Software Engineering project was compeletely our own decision. Our development team decided to put together a desktop application executable game. The game was developed using the rules of a card game called 'No Thanks' and merely implemented for computer by us. Without any previous experience of using C# and Microsoft Visual Studio, I had to spend a good amount of time sifting through documentation and tutorials. My job was to design the overlay of the card table, menu screens, and animations. I was also in charge of creating a business plan for our product and being the scrum master.",
  img: ["../img/project_img/project4_1.png","../img/project_img/project4_2.png"],
  title: "No Gracias",
  skills: ["C#", "Microsoft Visual Studio", "Product Backlog","GANTT Chart", "Scrum", "Agile Development", "UX/UI","Animation"],
  objectives: ["Learn C#", "Design a user friendly executable file that is performance and energy efficient", "Create a plan to get the application on the market", "Keep detailed GANTT chart and Scrum Artifacts of the project","Create animations and fun environment for the game"]
}


var myProjects = [myHome,eventPlanner, eventPlanner2, noGracias];

function displayNew(projectTitle){

  //Flush Current Project from Elements
  $("#project_objectives").empty();
  $("#project_image").empty();
  $("#project_skills").empty();
  $("#project_description").empty();

  //Insert New Project from Object
  $("#project_name").html(projectTitle.title);
  for(var i=0; i<projectTitle.objectives.length;i++){
    $("#project_objectives").append("<li>"+projectTitle.objectives[i]+"</li>");
  }
  $("#project_description").append(projectTitle.description);
  for(var j=0; j<projectTitle.img.length;j++){
    $("#project_image").append("<img src='"+projectTitle.img[j]+"'></img>");
  }
  for(var k=0; k < projectTitle.skills.length;k++){
    $("#project_skills").append("<li>"+projectTitle.skills[k]+"</li>");
  }
}

//Left Button Click
$("#left_scroll").click(function(){
  if(currentProject == 0){
    currentProject = myProjects.length-1;
  }else{
    currentProject--;
  }
  displayNew(myProjects[currentProject]);
});
//Right Button CLick
$("#right_scroll").click(function(){
  if(currentProject == myProjects.length-1){
    currentProject = 0;
  }else{
    currentProject++;
  }
  displayNew(myProjects[currentProject]);
});


$(document).ready(function(){
  displayNew(myProjects[0]);

});
