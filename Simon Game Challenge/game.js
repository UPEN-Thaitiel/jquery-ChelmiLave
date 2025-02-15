var buttonColor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var started = false;
var userClickedPattern = [];
var level = 0;

$(document).keypress(function() {
    if (!started) {

        $("#level-title").text("Level" + level);
        started = true;
    }
});

$("button").click(function() {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);

});

function nextSequence() {
    level = level +1;
    $("#level-title").text("Level " + level);
    let randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColor[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
}

function playSound(randomChosenColour){
    let audio =new Audio("souns/" + randomChosenColour + ".mp3");
    audio.play();
} 

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#"+ currentColor).removeClass("pressed");
    }, 100);

}

function checkAnswer (currentLevel) {

}