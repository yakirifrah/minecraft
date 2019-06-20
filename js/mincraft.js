class Mincraft {
    constructor() {
        this.world = new World();
        this.tool = new Tool();
    }
    updateTool(tool) {
        this.tool.setTool(tool);
    }
}
