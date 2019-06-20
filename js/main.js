
let game = new Mincraft();

let matrix = game.matrix;
let lenMatrix = matrix.length;
let tools = game.tools;
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
            let style = `toolBox ${tools[i].class}`
            block.addClass(style);
        }
        toolBar.append(block);
    }
}
$('.toolBox').click((event) => {
    console.log(event.target);
    // if (condition) {

    // }
})

