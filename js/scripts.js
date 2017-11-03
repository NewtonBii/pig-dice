//business logic

var player1 = "";
var player2 = "";

var playFn = function(){
  return Math.floor((Math.random()*6)+1);
}
console.log(playFn);
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


//user interface
$("#btn-roll1").click(function(event){

  player1.play = playFn();
  alert(player1.play);
  $("#current1").text(player1.play);
});
