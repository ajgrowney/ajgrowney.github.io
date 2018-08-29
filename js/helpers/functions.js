// Params: { Object } comp={id: string, title: string, info: (array[Objects: style, name(optional), text])}
// 
// Return: newComponent: string containing all the html holding new component
let renderSubComponent = (comp) => {
    let newComponent = "<div class=" + comp.class + ">";
    if(comp.title){
        newComponent += ("<h2 style='height: 100%' id=" + comp.id + ">" + comp.title + "</h2>");
    }

    comp.info.forEach((section) => {

        if (section.style == "div") {
            // Recursively Build Subsection
            newComponent += renderSubComponent(section);
        } else if (section.style == "ul") {
            // Unordered List Name Component Rendering 
            if (section.name != undefined) {
                newComponent += ("<h5>" + section.name + "</h5>");
            }
            // Rendering List Elements
            section.text.forEach((listElement) => {
                newComponent += ("<li>" + listElement + "</li>");
            });
        } else if (section.style == "ol") {
            // TODO: ol configuration

        } else {
            // Render standalone item
            section.text.forEach((textElement) => {
                newComponent += ("<" + section.style + ">" + textElement + "</" + section.style + ">");
            });
        }
    });

    newComponent += "</div>";
    return newComponent;

}

// Params: { Object } comp={id: string, title: string, info: (array[Objects: style, name(optional), text])}
// 
// Return: newComponent: string containing all the html holding new component
let renderMainComponent = (comp) => {
    let newComponent = ("<div class=" + comp.class + " id='"+comp.id+"'>");
    newComponent += ("<div class='main_comp_head' id='" + comp.id + "'><button class='clickHandler' id=" + comp.id + ">" + comp.title + "</button></div>");
    newComponent += ("<div class='main_comp_body' id='" + comp.id + "'>");
    comp.info.forEach((section) => {

        if (section.style == "div") {
            // Recursively Build Subsection
            newComponent += renderSubComponent(section);
        } else if (section.style == "ul") {
            // Unordered List Name Component Rendering 
            if (section.name != undefined) {
                newComponent += ("<h5>" + section.name + "</h5>");
            }
            // Rendering List Elements
            section.text.forEach((listElement) => {
                newComponent += ("<li>" + listElement + "</li>");
            });
        } else if (section.style == "ol") {
            // TODO: ol configuration

        } else {
            // Render standalone item
            section.text.forEach((textElement) => {
                newComponent += ("<" + section.style + ">" + textElement + "</" + section.style + ">");
            });
        }
    });

    newComponent += "</div></div>";
    return newComponent;

}