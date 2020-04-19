
var ComputerPick = Math.floor(Math.random() * 101) + 19;
var diamond = Math.floor(Math.random() * 10) + 2;
var emerald = Math.floor(Math.random() * 9) + 3;
var topaz = Math.floor(Math.random() * 4) + 9;
var ruby = Math.floor(Math.random() * 6) + 2;
var userscore = 0;
wins = 0;
losses = 0;

console.log("1st Computerpick: "+ComputerPick);
console.log("1st ruby value: "+diamond);
console.log("1st emerald value: "+emerald);
console.log("1st topaz value: "+topaz);
console.log("1st ruby: "+ruby);



//assigned all four crsytal variables to random numbers
//set total user score variable to 0 
//set your wins and losses variable to 0
$(document).ready(function () {


        function initial() {
                $("#random-area").html(ComputerPick);
                var diamond = $("<img>");
                diamond.attr("id", "diamond");
                diamond.attr("src", "assetts/images/blue.png");

                var emerald = $("<img>");
                emerald.attr("id", "emerald");
                emerald.attr("src", "assetts/images/blue.png");

                var topaz = $("<img>");
                topaz.attr("id", "topaz");
                topaz.attr("src", "assetts/images/blue.png");

                var ruby = $("<img>");
                ruby.attr("id", "ruby");
                ruby.attr("src", "assetts/images/blue.png");


        }
        function resetGame() {
                //Here all crystal variables and computerpick are reset
                //to new random picks

                //Total user  is zero
                ComputerPick = Math.floor(Math.random() * 51) + 19;
                var diamond = Math.floor(Math.random() * 10) + 2;
                var emerald = Math.floor(Math.random() * 9) + 3;
                var topaz = Math.floor(Math.random() * 4) + 9;
                var ruby = Math.floor(Math.random() * 6) + 2;
                userscore = 0;
                $("#random-area").html(ComputerPick);
                $("winlose-message").html("");
                $("#wins").html("Wins:  " + wins);
                $("#losses").html("Losses  " + losses);
                console.log("next Computerpick: "+ComputerPick);
                console.log("next ruby value: "+diamond);
                console.log("next emerald value: "+emerald);
                console.log("next topaz value: "+topaz);
                console.log("next ruby: "+ruby);
                
        }
        function checkWinsOrLosses() {

                if (userscore === ComputerPick) {
                        wins++;
                        $("#winlose-message").html("You are a winner!");
                        $("#wins").html("Wins:  " + wins);
                        $("#losses").html("Losses  " + losses);
                        resetGame();
                }
                else if (userscore > ComputerPick) {
                        losses++;
                        $("#winlose-message").html("You are a loser!")
                        $("#wins").html("Wins:  " + wins);
                        $("#losses").html("Losses  " + losses);
                        resetGame();
                }
 
        }

        function playGame() {

                $("#diamond").on("click", function () {
                        userscore += diamond;
                        $("#score-area").html(userscore)
                        checkWinsOrLosses();

                });

                $("#emerald").on("click", function () {
                        userscore += emerald;
                        $("#score-area").html(userscore)
                        checkWinsOrLosses();

                });
                $("#topaz").on("click", function () {
                        userscore += topaz;
                        $("#score-area").html(userscore)
                        checkWinsOrLosses();

                });
                $("#ruby").on("click", function () {
                        userscore += ruby;
                        $("#score-area").html(userscore)
                        checkWinsOrLosses();

                });

        }

        initial();

        playGame();

});
