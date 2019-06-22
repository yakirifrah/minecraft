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

        let element = e.target.getAttribute("data");
        let tool = game.tool.getTool();
        let res = $(div).hasClass(`box sky`);
        if (game.sameTool(element, tool) && !res) {
            if (div.classList[0] !== "box") {
                game.tool.currentMining.push(div.classList[0]);
                let CurrentResource = game.tool.currentMining.pop();
                $('#CurrentResource').attr('class', `${CurrentResource}`);
                $(div).removeClass(div.classList[0]);
                $(div).addClass("sky");
            }
            else {
                game.tool.currentMining.push(div.classList[0]);
                let CurrentResource = game.tool.currentMining.pop();
                $('#CurrentResource').attr('class', `${CurrentResource}`);
                $(div).removeClass(div.classList[1]);
                $(div).addClass("sky");
            }

        }

    }

    Craft(event) {
        var ResourceBeenUsed = false;
        let craftbox = event.target;
        let craftResource = event.target.classList[0]
        if (craftResource !== undefined) {
            $(".box").unbind();
            $(".box").click(function (event) {
                let oldBlock = event.target;
                console.log(oldBlock)
                if (oldBlock.classList[0] !== "box") {
                    $(oldBlock).removeClass(oldBlock.classList[0]);
                    $(oldBlock).addClass(craftResource);
                    ResourceBeenUsed = true;
                }
                else {
                    $(oldBlock).removeClass(oldBlock.classList[1]);
                    $(oldBlock).addClass(craftResource);
                    ResourceBeenUsed = true;
                }
                if (ResourceBeenUsed === true) {
                    $(".box").unbind();
                    $(".box").click(game.mine);
                    $(craftbox).removeClass(craftResource);


                }
            });
        }


    }


}

