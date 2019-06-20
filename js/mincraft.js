class Mincraft {
    constructor() {
        this.world = new World();
    }
    updateTool(tool) {
        this.world.tools[3]().type
    }
}


function sameTool(element,tool) {
    if(element === tool) {
        return true;
    } else {
        $(tool).css("border-color", "red");
        return false;
    }
} 