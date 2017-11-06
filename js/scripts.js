//business logic

function Player(playerName, turnScore, totalScore) {
  this.playerName = playerName;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}

Player.prototype.roll = function() {
  var diceValues = [1, 2, 3, 4, 5, 6];
  var rollValue = diceValues[Math.floor(Math.random() * diceValues.length)];
  if (rollValue === 1) {
    this.turnScore = 0;
  } else {
    this.turnScore = this.turnScore + rollValue;
  };
  return rollValue;
}

Player.prototype.score = function() {
  this.totalScore = this.turnScore + this.totalScore;
  this.turnScore = 0;
}

//user interface

//button to launch game
$("#btn-start").click(function(event){
  $("#new-game-register").fadeIn(500);
});
//click to register players and start game.
$("#btn-register").click(function(event){
event.preventDefault();
  $("#well-play1").show(900);
  $("#well-play2").show(900);
  $("h5").show(1200);
  $("#name-0").show(300);
  $("#name-1").show(300);
  $(".game-panel1").show(600);
  $(".game-panel2").show(700);
  $("#new-game-register").fadeOut(400);

  var player1Name = $("#player1").val();
  var player2Name = $("#player2").val();
  var player1 = new Player (player1Name,0,0)
  var player2 = new Player (player2Name,0,0)


  $(".player1-name").text(player1.playerName);
  $(".player1-total-score").html("<span class='player1-total-score'>" + player1.totalScore + "</span>");

  $("#btn-roll").click(function(event) {
    event.preventDefault();
    var player1RolledNumber = player1.roll();
    if (player1RolledNumber === 1) {
      $(".player1-scored1").show(500).fadeOut(1000);
      $("#well-play1").fadeOut(900);
      $("#well-play2").show(900);
    }
    $(".player1-rolled-number").text(player1RolledNumber);
    $(".player1-turn-score").text(player1.turnScore);
  });

  $("#btn-hold").click(function(event) {
    event.preventDefault();
    player1.score();
    $(".player1-total-score").text(player1.totalScore);
    $(".player1-rolled-number").text("");
    $(".player1-turn-score").text(player1.turnScore);
    if (player1.totalScore >= 100) {
      $("#game-section").fadeOut(400);
      $(".player1-victory").show().fadeOut(1200);
    } else {

    $(".player2-scored1").hide();
    $("#well-play2").show(900);
    $("#well-play1").hide(900);
    $(".hold").show().fadeOut(1500);
    }

  });

  $(".player2-name").text(player2.playerName);
  $(".player2-total-score").html("<span class='player2-total-score'>" + player2.totalScore + "</span>");

  $("#btn-roll1").click(function(event) {
    event.preventDefault();
    var player2RolledNumber = player2.roll();
    if (player2RolledNumber === 1) {
      $(".player2-scored1").show().fadeOut(1000);
      $("#well-play2").fadeOut(1000);
      $("#well-play1").show(900);
    }
    $(".player2-rolled-number").text(player2RolledNumber);
    $(".player2-turn-score").text(player2.turnScore);
  });

  $("#btn-hold1").click(function(event) {
    event.preventDefault();
    player2.score();
    $(".player2-total-score").text(player2.totalScore);
    $(".player2-rolled-number").text("");
    $(".player2-turn-score").text("");
    if (player2.totalScore >= 100) {
      $("#game-section").fadeOut(400);
      $(".player2-victory").show().fadeOut(1200);
    } else {
    $("#well-play1").show(900);
    $(".hold").show().fadeOut(1500);
    $("#well-play2").hide(900);

    }
  });

});
