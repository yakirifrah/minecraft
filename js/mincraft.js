class Minecraft {
    constructor() {
        this.world = new World();
        this.tool = new Tool();
    }
    updateTool(tool) {
        this.tool.setTool(tool);
    }
    mine(e) {
        // console.log(e.target.getAttribute("data"));
        let element = e.target.getAttribute("data");
        let cuurentTool = this.tool.getTool();
        console.log(cuurentTool);
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
