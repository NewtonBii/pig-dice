//business logic

var scores, roundScore, activePlayer, gamePlaying;



//user interface

//button to launch game
$("#btn-start").click(function(event){
  $("#new-game-register").fadeIn(500);
});
//click to register players and start game.
$("#btn-register").click(function(event){
event.preventDefault();
  $("#well-play").show(900);
  $("#name-0").show(300);
  $("#name-1").show(300);
  $(".game-panel1").show(600);
  $(".game-panel2").show(700);

  $("#new-game-register").fadeOut(400);

  var player1Name = $("#player1").val();
  $("#name-0").append("PLAYER 1: "+player1Name);

  var player2Name = $("#player2").val();
  $("#name-1").append("PLAYER 2: "+player2Name);

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
