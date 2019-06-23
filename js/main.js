let game = new Minecraft();
let matrix = game.world.matrix;
let tools = game.world.tools;
let lenMatrix = matrix.length;
let lenTools = tools.length;
$(document).ready(initDomHtml);
function initDomHtml() {
    let mainCon = $('#world');
    let toolBar = $('.toolBar');
    for (let i = 0; i < lenMatrix; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let block = $('<div/>');
            block.addClass(matrix[i][j].class)
                .addClass('box')
                .attr('data', matrix[i][j].data)
            mainCon.append(block);
        }
    }
    for (let i = 0; i < lenTools; i++) {
        let block = $('<div/>');
        let imgTool = $('<img/>');
        if (i === lenTools - 1) {
            block.attr('id', tools[i].id)
        }
        else {
            block.addClass(`toolBox ${tools[i].class}`)
                .attr('data', tools[i].class)
            block.click(clickTool);
            imgTool.addClass(`img-tool`)
                .attr('src', `./img/${tools[i].class}.png`)
                .attr('title', tools[i].class)
            block.append(imgTool);
        }
        toolBar.append(block);
    }
    $(".box").click(game.mine);
    $('#CurrentResource').click(game.craft);
}
function clickTool(event) {
    let tool = $(event.currentTarget);
    $('.toolBox').removeClass('toolSelected');
    $(this).toggleClass('toolSelected');
    let data = $(tool).attr('data');
    game.updateTool(data);
    game.tool.toolsToggle();
}


