class Tool {
    constructor(type) {
        this.type = null;
        this.id = 'CurrentResource';
        this.currentMining = [];
    }
    getTool() {
        return this.type;
    }
    setTool(tool) {
        this.type = tool;
    }

    toolsToggle(tool) {
        let axe = document.getElementsByClassName("axe");
        let pickaxe = document.getElementsByClassName("pickaxe");
        let shovel = document.getElementsByClassName("shovel");
        let toolsarray = [axe[0], pickaxe[0], shovel[0]];
        $(tool).addClass("pickedToolColor");
        for (var i = 0; i < toolsarray.length; i++) {
            if (toolsarray[i] !== tool) {
                $(toolsarray[i]).removeClass("pickedToolColor");
            }

        }
    }

}