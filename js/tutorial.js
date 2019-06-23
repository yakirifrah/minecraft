$(document).ready(function () { 
    $("#tools").hide(), $("#world").hide() 
    });

$("#btn_tools").click(function () {
    $("#tools").toggle("highlight");
});

$("#btn_world").click(function () {
    $("#world").toggle("highlight");
});


