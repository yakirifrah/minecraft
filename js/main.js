
let world = new World();
let matrix = world.matrix;
let lenMatrix = matrix.length;
$(document).ready(intDomHtml);
function intDomHtml() {
    let mainCon = $('#world');
    for (let i = 0; i < lenMatrix; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let block = $('<div/>');
            block.addClass(matrix[i][j].class)
                .addClass('box')
                .attr('data', matrix[i][j].data)
            mainCon.append(block);
        }
    }
}


$('.toolBox').click((event) => {
    // console.log(event.target)
    if (condition) {
        
    }
})

