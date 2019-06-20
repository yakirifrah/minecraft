
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
            block.addClass(tools[i].class);
        }
        else {
            block.addClass(`toolBox ${tools[i].class}`)
                .attr('data', tools[i].class)
            block.click(clickTool);
        }
        toolBar.append(block);
    }

    $(".box").click(game.GetElementByClick);
}
// $(".toolBar").on('click', (event) => {
//     console.log('click')
//     console.log(event.target);
// })
function clickTool(e) {
    let tool = $(e.target);

    let data = $(tool).attr('data');
    game.updateTool(data);
    console.log(data);

    console.log('click');
}


