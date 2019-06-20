class Minecraft {
    constructor() {
        this.world = new World();
        this.tool = new Tool();
    }
    updateTool(tool) {
        this.tool.setTool(tool);
    }

    sameTool(element, tool) {
        console.log('i same')
        if (element === tool) {
            return true;
        } else {
            console.log("this is a element " + element);
            console.log("this is a tool " + tool);
            let toolBox = document.getElementsByClassName(tool);
            $(toolBox).toggleClass("mistakeBorder");
            setTimeout(function () {
                $(toolBox).toggleClass("mistakeBorder");
            }, 100);

            return false;
        }
    }


    mine(e) {
        // console.log("this is the element" + e.target.getAttribute("data"));
        let element = e.target.getAttribute("data");
        // console.log("this is the tool" + game.tool.getTool());
        let tool = game.tool.getTool();
        game.sameTool(element, tool);
    }
}




