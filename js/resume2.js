let educationObj = 
{
    title: "Education",
    class: "gridOne",
    info: [
        {
            style: "h3",
            text: ["University of Kansas"]
        },
        {
            style: "h4",
            text: ["August 2015 - May 2019"]
        },
        {
            style: "p",
            text: [
                "Major: Bachelor of Science in Interdisciplinary Computing (EECS)",
                "Concentration: Physics",
                "Minor: Business Administration",
                "Cumulative GPA: 3.85"
            ]
        },
        {
            style: "ul",
            name: "Current Courses",
            text: [
                "EECS 560- Data Structures",
                "EECS 678- Intro to Operating Systems",
                "EECS 511- Quantum Mechanics",
                "MKTG 305- Survey of Marketing",
                "PHSX 503- Undergraduate Reserach"
            ]
        },
        {
            style: "ul",
            name: "Scholarships",
            text: [
                "SELF Engineering Leadership Fellowship",
                "Engineering Diversity Scholarship",
                "Engineering Dean's Scholarship",
                "University Traditions Scholarship",
                "Garmin Excellence Scholarship"
            ]
        },
        {
            style: "ul",
            name: "Notable Coursework",
            text: [
                "Programming II: C++ and Basic Data Structures",
                "Introduction to Theory of Formal Languages and Automata",
                "Embedded Systems",
                "Software Engineering"
            ]
        }
    ]

}

let work_volunteerObj = {
    title: "Work and Volunteer Experience",
    class: "gridTwo",
    info: [
        {
            style: "h2",
            name: "Camp Tekakwitha Executive Staff",
            text: [
                "<b>Job Requirements</b>",
                "<li>Develop cirriculum for all the middle school through high school campers</li>",
                "<li>Manage staff of 70 college students</li>",
                "<li>Maintain close connection and responsibility for small portion of the staff and set up weekly meetings to check in</li>",
                "<b>Skills</b>",
                "<li>Management and leadership</li>",
                "<li>Professional Communication</li>",
                "<li>Event Planning, Organization, and Maintenance</li>",
                "<li>Daily and Weekly Report Creation and Reflection</li>"
            ]
        },
        {
            style: "h2",
            name: "Entreprenurial Landscape Business",
            text: [
                "<b>Job Requirements</b>",
                "<li>Create a consistent customer base</li>",
                "<li>Maintain relationships with each customer</li>",
                "<li>Provide high quality landscaping with options for different services</li>",
                "<b>Skills</b>",
                "<li>Customer Satisfaction</li>",
                "<li>Marketing</li>",
                "<li>Organization and Scheduling</li>",
                "<li>Communication with volatile climate</li>"
            ]
        }
    ]
}

let leadership_involvementObj = {
    title: "Leadership and Involvement",
    class: "gridThree",
    info: [
        
    ]
}
let mainComponents = [
    educationObj,
    work_volunteerObj,
    leadership_involvementObj
]

let addComponent = (comp) => {
    let newComponent = "<div>";
    newComponent += ("<h2 class="+comp.class+">"+comp.title+"</h2>");

    comp.info.forEach( (section) => {

        if(section.style == "ol"){
            // TODO: Ordered List Component Rendering


        }else if(section.style == "ul"){
            // Unordered List Name Component Rendering 
            if(section.name != undefined){
                newComponent += ("<h5>"+section.name+"</h5>");
            }
            // Rendering List Elements
            section.text.forEach( (listElement) => {
                newComponent += ("<li>"+listElement+"</li>");
            });
        }else if(section.name != undefined){
            // Check if it is a div element
            newComponent += ("<div><"+section.style+">"+section.name+"</"+section.style+">");
            section.text.forEach( (element) => {
                newComponent += (element);
            });
            newComponent += ("</div>");
        }else{
            section.text.forEach( (textElement) => {
                newComponent += ("<"+section.style+">"+textElement+"</"+section.style+">");
            });
        }
    });
    newComponent += "</div>";
    return newComponent;

}

$(document).ready(() => {
    mainComponents.forEach( (comp) => {
        $(".main").append(addComponent(comp));
    });
});