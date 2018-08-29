let mainComponents = [
    educationObj,
    work_volunteerObj,
    leadership_involvementObj
]

let getObjectHeight = (id) => {
    console.log(id);
    if(id=='gridOne'){
         return '600px';
    }else if(id == 'gridTwo'){ 
        return '60%';
    }else{ 
        return '30%';
    }
}
let currentExpanded ="";
$(document).ready(() => {
    mainComponents.forEach((comp) => {
        $(".main").append(renderMainComponent(comp));
    });
    $(".clickHandler").click( (el) => {
        $(".main_comp_head").css({'grid-row': '1/3'});
        $(".main_comp_body").css({'display': 'none'});
        if(el.target.id != currentExpanded){
            $(".main_grid_obj").css({'height': '15%'});
            console.log(getObjectHeight(el.target.id));
            $(".main_grid_obj#"+el.target.id).css({'height': ''+getObjectHeight(el.target.id)+''});
            console.log($(".main_grid_obj#"+el.target.id).css('height'));
            $(".main_comp_head#"+el.target.id).css({'grid-row': '1'});
            $(".main_comp_body#"+el.target.id).css({ 'display': 'inline' });
            currentExpanded = el.target.id;
        }else{
            $(".main_grid_obj").css({'height': '33%'});
            currentExpanded = "";
        }
    });
});
