$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var counter = 0;

    //formula Math.floor(Math.random() * ((y-x)+1) + x);
    var targetNumber = Math.floor(Math.random() * 100 + 19);
    $("#number").text(targetNumber);
    //crystal values
    var blue = 2; var yellow = 12; var red = 6; var green = 11;
    var counter = 0;
    var crystalvalue = 0;

    //gamestart 
    function gamereset() {
        targetNumber = Math.floor(Math.random() * 100 + 19);
        $("#number").text(targetNumber);
        blue = Math.floor(Math.random() * 12 + 1);
        yellow = Math.floor(Math.random() * 12 + 1);
        red = Math.floor(Math.random() * 12 + 1);
        green = Math.floor(Math.random() * 12 + 1);
    }

    //win function
    function win() {
        wins++;
        alert("YOU WON!!");
        $("#noofWins").text(wins);
        counter = 0;
        gamereset();
    }

    //lose function
    function lose() {
        losses++;
        alert("YOU LOSE");
        $("#noofLosses").text(losses);
        counter = 0;
        gamereset();
    }

    //crystal clicks
    $("#blue").on("click", function () {
        counter = counter + blue;
        $("#finalvalue").text(counter);
        if (counter == targetNumber) {
            win();
        }
        else if (counter > targetNumber) {
            lose();
        }
    });

    $("#yellow").on("click", function () {
        counter = counter + yellow;
        $("#finalvalue").text(counter);
        if (counter == targetNumber) {
            win();
        }
        else if (counter > targetNumber) {
            lose();
        }
    });

    $("#red").on("click", function () {
        counter = counter + red;
        $("#finalvalue").text(counter);
        if (counter == targetNumber) {
            win();
        }
        else if (counter > targetNumber) {
            lose();
        }
    });

    $("#green").on("click", function () {
        counter = counter + green;
        $("#finalvalue").text(counter);
        if (counter == targetNumber) {
            win();
        }
        else if (counter > targetNumber) {
            lose();
        }
    });

});