class Minecraft {
    constructor() {
        this.world = new World();
    }
    // updateTool(tool) {
    //     this.world.tools[3]().type
    // }
    GetElementByClick = function (e) {
        console.log(e.target.getAttribute("data"));
    }

}

