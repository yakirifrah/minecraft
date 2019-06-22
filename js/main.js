let game = new Minecraft();
let matrix = game.world.matrix;
let tools = game.world.tools;
let lenMatrix = matrix.length;
let lenTools = tools.length;
$(document).ready(intDomHtml);
function intDomHtml() {
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
        if (i === lenTools - 1) {
            // block.addClass(tools[i].class)
            block.attr('id', tools[i].id)
        }
        else {
            block.addClass(`toolBox ${tools[i].class}`)
                .attr('data', tools[i].class)
            block.click(clickTool);
        }
        toolBar.append(block);
    }
    $(".box").click(game.mine);
    $('#CurrentResource').click(game.craft);

}

function clickTool(event) {
    let tool = $(event.target);
    let data = $(tool).attr('data');
    game.updateTool(data);
    game.tool.toolsToggle(tool);

}


