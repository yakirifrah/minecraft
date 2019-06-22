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
            game.updateTool(tool);
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
    mine(event) {
        let div = event.target;
        let element = event.target.getAttribute("data");
        let tool = game.tool.getTool();
        let res = $(div).hasClass(`box sky`);
        if (game.sameTool(element, tool) && !res) {
            game.tool.currentMining = div.classList[0];
            let CurrentResource = game.tool.currentMining;
            $('#CurrentResource').attr('class', `${CurrentResource}`);
            $(div).removeClass(div.classList[0]);
            $(div).addClass("sky");
        }
    }
    craft(event) {
        let ResourceBeenUsed = false;
        let craftbox = event.target;
        let currentMine = game.tool.currentMining;
        if (currentMine !== null) {
            $(".box").unbind();
            $('.box.sky').click(game.addBox);

            // $(".box").click(function (event) {
            //     let oldBlock = event.target;
            //     console.log(oldBlock);
            //     if (oldBlock.classList[0] !== "box") {
            //         $(oldBlock).removeClass(oldBlock.classList[0]);
            //         $(oldBlock).addClass(craftResource);
            //         ResourceBeenUsed = true;
            //     }
            //     else {
            //         $(oldBlock).removeClass(oldBlock.classList[1]);
            //         $(oldBlock).addClass(craftResource);
            //         ResourceBeenUsed = true;
            //     }
            //     if (ResourceBeenUsed === true) {
            //         $(".box").unbind();
            //         $(".box").click(game.mine);
            //         $(craftbox).removeClass(craftResource);
            //     }
            // });
        }
    }
    addBox(event) {
        console.log('ADD BOX');
        let dataAttr;
        let box = event.target;
        dataAttr = $(box).attr('data');
        if ((dataAttr === 'nothing' || 'pickaxe' || 'shovel') && (game.tool.currentMining !== null)) {
            let getTool = game.tool.getTool();
            let newClass = game.tool.currentMining;
            $(this).attr('class', newClass + ' box')
                .attr('data', getTool);

            $(".box").click(game.mine);
            game.tool.currentMining = null;
            $('#CurrentResource').removeClass();

        }


    }
}

