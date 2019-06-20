class Minecraft {
    constructor() {
        this.world = new World();
        this.matrix = this.world.matrix;
        this.tools = this.world.tools;
    }
    GetElementByClick = function (e) {
        console.log(e.target.getAttribute("data"));
    }

}

