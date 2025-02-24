// TODO: Add code to check answers to questions
// document.addEventListener('DOMContentLoaded', function(){

    // let correctAnswer = document.querySelector('#choice3');
    // correctAnswer.addEventListener('click', function(){
    //     correctAnswer.style.backgroundColor = 'green';
    //     document.querySelector('#answer').innerHTML='Correct!';
    // });

    // let wrongAnswer = document.querySelectorAll('#choice2, #choice1, #choice4');
    // wrongAnswer.forEach(function(button){
    //     button.addEventListener('click', function(){
    //         button.style.backgroundColor = 'red';
    //         document.querySelector('#answer').innerHTML = 'Incorrect';
    //     });
    // });

    // let correctAnswer2 = document.querySelector('#choice11');
    // correctAnswer2.addEventListener('click', function(){
    //     correctAnswer2.style.backgroundColor = 'green';
    //     document.querySelector('#answer2').innerHTML='Correct!';
    // });

    // let wrongAnswer2 = document.querySelectorAll('#choice22, #choice33, #choice44');
    // wrongAnswer2.forEach(function(button){
    //     button.addEventListener('click', function(){
    //         button.style.backgroundColor = 'red';
    //         document.querySelector('#answer2').innerHTML = 'Incorrect';
    //     });
    // });

    // table score
    let player = 0;
    let pc = 0;

    let pcChoice = 0;
    let pcPick = "";
    let tie = "This round Tie!";
    let win = "This round you won";
    let lose = "This round you lose";

    document.querySelector('#rock').onclick = function(){
        document.querySelector('#winner').innerHTML = "Who's going to win?";
        pcChoice = Math.floor(Math.random() *3);
        pcPick = intToString(pcChoice);
        document.querySelector('#pcdisplay').innerHTML = pcPick;

        if( pcChoice === 0 ){
            document.querySelector('#result').innerHTML = tie;
        }else if (pcChoice === 1){
            document.querySelector('#result').innerHTML = lose;
            pc = pc + 1;
            document.querySelector('#score2').innerHTML = pc;
            check();
        } else {
            document.querySelector('#result').innerHTML = win;
            player = player + 1;
            document.querySelector('#score1').innerHTML = player;
            check();
        }
    }
    document.querySelector('#paper').onclick = function(){
        document.querySelector('#winner').innerHTML = "Who's going to win?";
        pcChoice = Math.floor(Math.random() *3);
        pcPick = intToString(pcChoice);
        document.querySelector('#pcdisplay').innerHTML = pcPick;

        if( pcChoice === 0 ){
            document.querySelector('#result').innerHTML = win;
            player = player + 1;
            document.querySelector('#score1').innerHTML = player;
            check();
        }else if (pcChoice === 1){
            document.querySelector('#result').innerHTML = tie;
        } else {
            document.querySelector('#result').innerHTML = lose;
            pc = pc + 1;
            document.querySelector('#score2').innerHTML = pc;
            check();
        }
    }

    document.querySelector('#scissor').onclick = function(){
        document.querySelector('#winner').innerHTML = "Who's going to win?";
        pcChoice = Math.floor(Math.random() *3);
        pcPick = intToString(pcChoice);
        document.querySelector('#pcdisplay').innerHTML = pcPick;

        if( pcChoice === 0 ){
            document.querySelector('#result').innerHTML = lose;
            pc = pc + 1;
            document.querySelector('#score2').innerHTML = pc;
            check();
        }else if (pcChoice === 1){
            document.querySelector('#result').innerHTML = win;
            player = player + 1;
            document.querySelector('#score1').innerHTML = player;
            check();
        } else {
            document.querySelector('#result').innerHTML = tie;
        }
    }

    function intToString(num) {
        if (num === 0) {
            return "-Rock--";
        } else if (num === 1) {
            return "-Paper-";
        } else {
            return "Scissor";
        }
    }

    function check(){
        if (player === 5){
            document.querySelector('#winner').innerHTML = "You won!";
            player = 0;
            document.querySelector('#score1').innerHTML = 0;
            pc = 0;
            document.querySelector('#score2').innerHTML = 0;
            document.querySelector('#result').innerHTML = "Reset";
        } else if (pc === 5){
            document.querySelector('#winner').innerHTML = "You Lose!";
            player = 0;
            document.querySelector('#score1').innerHTML = 0;
            pc = 0;
            document.querySelector('#score2').innerHTML = 0;
            document.querySelector('#result').innerHTML = "Reset";
        }
    }




var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var flag = true;
var gamePattern = [];
var userClickPattern = [];
$("#level-title").click(function(){
    if(flag){
        nextSequence();
        flag=false;
    }
})
// $(document).on("keypress",function(event){
//     if(event.key && flag){
//         nextSequence();
//         flag = false;
//     }
// });

// $(".btn").on("click", function(){
$(".btn").click(function(){
    // userClickPattern.push($(this).attr("id"));
    var tempColor = this.id;
    userClickPattern.push(tempColor);
    animatePress(tempColor);
    playSound(tempColor);


    if(!checkAnswer(userClickPattern.length - 1)){
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Click Restart");
        setTimeout(function(){$("body").removeClass("game-over");},200);
        // reset game;
        gamePattern = [];
        level = 0;
        flag = true;
        userClickPattern = []
    }else{
        if(userClickPattern.length === gamePattern.length){
            userClickPattern = [];
            setTimeout(nextSequence,1000);
        }
    }
    
    
});

function checkAnswer(currentLevel){
    return userClickPattern[currentLevel] === gamePattern[currentLevel];
}

function nextSequence(){
    level++;
    $("#level-title").text("Level " + level);
    var randNum = Math.floor(Math.random()* 4);
    var randChosenColor = buttonColors[randNum];
    gamePattern.push(randChosenColor);
    
    animatePress(randChosenColor);
    playSound(randChosenColor);
    // console.log(gamePattern);
} 

function animatePress(color){
    $("#"+color).addClass("pressed");
    setTimeout(function(){
        $("#"+color).removeClass("pressed")
    }, 100);
}

function playSound(soundTrack){
    var audio = new Audio("sounds/" + soundTrack + ".mp3");
    audio.play(); 
}


// });


