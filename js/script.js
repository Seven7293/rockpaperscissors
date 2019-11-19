// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$(document).ready(function() {
    $("#shoot").click(function(){
        $("#userChoice").text($("#input").val());
    var com = Math.random();

    console.log(com);
    if (com < 1 && com > .66666) {
        $("#computerChoice").text("Rock");
    } else if (com < .66666 && com > .33333){
        $("#computerChoice").text("Paper");
    } else {
        $("#computerChoice").text("Scissors")};
    })
    //DOM manipulation code
});
