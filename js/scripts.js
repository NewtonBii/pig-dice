//business logic

var player1 = "";
var player2 = "";

var playFn = function(){
  return Math.floor((Math.random()*6)+1);
}

    //create constructor for properties
 function Rounds(players){
   this.play=0;
   this.rolledScore=0;
   this.totalScore=0;
   this.players=players;
 }

 //create function for firstplay
 Rounds.prototype.firstPlay = function(){
   if (this.play==1) {
     this.rolledScore=0;
     alert("You rolled 1. Next player's turn");
   }else {
     this.rolledScore += this.play;
   }
 };

 //function for holding.

 Rounds.prototype.hold = function () {

   this.totalScore += this.rolledScore;
   this.rolledScore = 0;
   alert("HOLD. Next Player's Turn");

 };


var player1Fn = function () {
  var player1=number;
  for (player1 <=1; i++) {
    array[i]
  }

  var
  if (player1<=1) {
    alert("Player 2's Turn")
  } else {

  }
}
