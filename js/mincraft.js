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
        let div = e.target;
        let element = e.target.getAttribute("data");
        let tool = game.tool.getTool();
        if (game.sameTool(element, tool)) {
            // console.log(div)
            // console.log(element);
            $(div).removeClass(div.classList[0]);
            $(div).addClass("sky");
        }


    }


}

