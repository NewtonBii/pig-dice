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


//user interface
$("#btn-start").click(function(event){
  $("#player1-tag").empty();
  $("#player2-tag").empty();
  $("input#player1").append(" ");
  $("input#player2").append(" ");

  $("#new-game-register").fadeIn(500);
});

$("#btn-register").click(function(event){
event.preventDefault();

  $(".game-panel").show(800);
  $("#new-game-register").fadeOut(1000);

  var player1Name = $("#player1").val();
  $("#player1-tag").append("PLAYER 1: "+player1Name);

  var player2Name = $("#player2").val();
  $("#player2-tag").append("PLAYER 2: "+player2Name);

  player1.playerName=player1Name;
  player2.playerName=player2Name;

});
