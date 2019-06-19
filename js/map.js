var minemap = {};
minemap.blocks = {
    'sky': { class: 'sky', data: 'nothing' },
    'ground': { class: 'ground', data: 'shovel' },
    'grass': { class: 'grass', data: 'shovel' },
    'leaf': { class: 'leaf', data: 'axe' },
    'wood': { class: 'wood', data: 'axe' },
    'stone': { class: 'stone', data: 'pickaxe' }
};

minemap.matrix = [
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'grass', 'grass', 'sky', 'wood', 'sky', 'sky', 'stone'],
    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass'],
    ['ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground'],
    ['ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground'],
    ['ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground'],
    ['ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground'],
    ['stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone'],
    ['stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone']
    ['stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone'],
    ['stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone']
    ['stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone'],
    ['stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone']
    ['stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone'],
    ['stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone']
    ['stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone'],
    ['stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone']
    ['stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone'],
    ['stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone']
    ['stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone'],
    ['stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone']
];

minemap.createMap = function () {
    let mainCon = $('#world');
    for (var i = 0; i < minemap.matrix.length; i++) {
        for (var j = 0; j < minemap.matrix[i].length; j++) {
            let block = $('<div/>');
            block.addClass(minemap.blocks[minemap.matrix[i][j]].class)
                .addClass('box')
                .attr('data', minemap.blocks[minemap.matrix[i][j]].data)
                .click(minemap.clickBlock);
            mainCon.append(block);
        }
    }
}

minemap.createMap();

