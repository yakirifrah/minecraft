class Minecraft {
    constructor() {
        this.world = new World();
        this.tool = new Tool();
    }
    updateTool(tool) {
        this.tool.setTool(tool);
    }
    sameTool(element, tool) {
        if (element === tool) {
            return true;
        } else {
            // console.log("this is a element " + element);
            // console.log("this is a tool " + tool);
            let toolBox = document.getElementsByClassName(tool);
            $(toolBox).toggleClass("toggleError");
            setTimeout(function () {
                $(toolBox).toggleClass("toggleError");
            }, 100);

            return false;
        }
    }
    mine(e) {
        let div = e.target;
        console.log(div);
        let element = e.target.getAttribute("data");
        let tool = game.tool.getTool();
        let res = $(div).hasClass(`box sky`);
        if (game.sameTool(element, tool) && !res) {
            $(div).removeClass(div.classList[0]);
            $(div).addClass("sky");
        }
    }


}

