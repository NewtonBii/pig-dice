//business logic
//assign two global variables to player1 and player2.
var player1="";
var player2="";
// create a rollDice function
var rollDice = function(){
  return Math.floor(Math.random()*6)+1;
};


// create a constructor

function Player(turn){
  this.roll=0;
  this.temporaryScore=0;
  this.totalRoundScore=0;
  this.turn=turn;
  this.playerName;
}

//add a method that will check that everytime a rollDice event is created, it adds to the total Round score unless 1 is picked whereby it changes turn and current player scores 0.

Player.prototype.rollcheck = function () {
  if (this.roll==1) {
    this.temporaryScore=0;
    console.log("Rolled One. Next player");
  } else {
    this.temporaryScore+=this.roll;
    console.log("Nice! Roll Again or HOLD");
  }
};

//Check for winning condition

Player.prototype.checkWinner = function () {
  if (this.totalRoundScore >=100) {
    console.log("Winner");
  }
};

//create a hold method

Player.prototype.hold = function () {
  this.totalRoundScore+=this.temporaryScore;
  this.temporaryScore=0;
  console.log("Okay. Next Player Turn");
};
//user interface

//button to launch game
$("#btn-start").click(function(event){
  $("#player1-tag").empty();
  $("#player2-tag").empty();
  $("input#player1").append(" ");
  $("input#player2").append(" ");

  $("#new-game-register").fadeIn(500);
});
//click to register players and start game.
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

//click #btn-roll1 to play for player1 and display at #current1
$("#btn-roll1").click(function(event){
  player1.roll = rollDice();
  $("td#current1").text("how");
});
//click #btn-roll2 to play for player2 and display at #current2
$("#btn-roll2").click(function(event){
  player1.roll = rollDice();
  $("td#current2").text("how");
});
//click #btn-hold1 to hold for player1 and display at #total1
$("#btn-hold1").click(function(event){
  player1.roll = rollDice();
  $("#total1").text("total");

});
//click #btn-hold2 to hold for player2 and display at #total2
$("#btn-hold2").click(function(event){
  player1.roll = rollDice();
  $("#total2").text("total");
});
