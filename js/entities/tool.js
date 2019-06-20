class Tool {
    constructor(type) {
        this.type = null;
        this.class = 'CurrentResource';
        this.currentMining = [];
    }
    getTool() {
        return this.type;
    }
    setTool(tool) {
        this.type = tool;
    }
}