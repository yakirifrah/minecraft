class Minecraft {
    constructor() {
        this.world = new World();
    }
    // updateTool(tool) {
    //     this.world.tools[3]().type
    // }
    mine(e) {
        console.log(e.target.getAttribute("data"));
        let element = e.target.getAttribute("data");


    }


}


function sameTool(element, tool) {
    if (element === tool) {
        return true;
    } else {
        $(tool).css("border-color", "red");
        return false;
    }
} 
