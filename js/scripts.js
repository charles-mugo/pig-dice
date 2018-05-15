//Business logic
var playerOne="";
var playerTwo="";

var rollDice = function() {
  return Math.floor(6*Math.random())+1;
}

function playerOne(turn) {
 this.roll = 0;
 this.tempscore = 0;
 this.totalscore = 0;
 this.turn = turn;
 this.playerName;
}

player.prototype.diceone = function() {
  if (this.roll === 1) {
    this.tempscore = 0;
  }
}

var score;
score = dice1 + dice2;
if(dice1 === 1 || dice2 ===1)
{
alert(score = "0")
}else if () {
  alert("You rolled a "+dice1+" and a "+dice2+" for a score of "+score)};



// User Interface
$(document).ready(function()){

  $("button#start").click(functio(event)){
    playerOne= new Player(true);
    playerTwo = new Player(false);
    $(".open-group").show();
    $(".start-menu").hide();
  }
}
