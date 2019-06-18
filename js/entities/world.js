const GRASS_LENGTH = 20;
const DIRT_LENGTH = 120;
const SKY_LENGTH = 240;
const ROCK_LENGTH = 3;
const CLOUD_LENGTH = 28;
const TRUNK_LENGTH = 3;
const LEAF_LENGTH = 12;
const WORLD_LENGTH = 423;

class World {
    constructor() {
        this.grassWorld = [];
        this.skyWorld = [];
        this.rockWorld = [];
        this.dirtWorld = [];
        this.cloudWorld = [];
        this.treeWorld = [];





        this.createWorld = createWorld;
    }
    createWorld() {
        let world = [];
        for (let i = 0; i < WORLD_LENGTH; i++) {
            


        }


    }
    createGrass() {
        for (let i = 0; i < GRASS_LENGTH; i++) {
            this.grassWorld.push(new Grass().grass);
        }
    }
    createSky() {
        for (let i = 0; i < SKY_LENGTH; i++) {
            this.skyWorld.push(new Sky().sky);
        }
    }
    createRock() {
        for (let i = 0; i < ROCK_LENGTH; i++) {
            this.rockWorld.push(new Rock().rock);
        }
    }
    createDirt() {
        for (let i = 0; i < GRASS_LENGTH; i++) {
            this.dirtWorld.push(new Dirt().dirt);
        }
    }

    creteCloud() {
        for (let i = 0; i < CLOUD_LENGTH; i++) {
            this.cloudWorld.push(new Cloud().cloud);
        }
    }
    createTree() {
        for (let i = 0; i < TRUNK_LENGTH + LEAF_LENGTH; i++) {
            if (i < TRUNK_LENGTH) {
                this.treeWorld.push(new Tree().trunk);
            }
            else {
                this.treeWorld.push(new Tree().leaft);
            }
        }
    }
}