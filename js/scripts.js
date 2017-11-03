var number = Math.floor((Math.random()*6)+1);

var player1Fn=function () {
  var player1=number;

  if (player1<=1) {
    alert("Player 2's Turn")
  } else {
    alert(player1)
  }
}
