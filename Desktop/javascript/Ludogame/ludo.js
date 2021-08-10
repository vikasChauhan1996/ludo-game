console.log("ludo game");

const ludogame = () => {
  let play1 = Math.floor(Math.random() * 6) + 1;
  let play1Dice = `dice${play1}.png`;

  document.getElementById("check1").setAttribute("src", play1Dice);

  let play2 = Math.floor(Math.random() * 6) + 1;
  let play2Dice = `dice${play2}.png`;

  document.getElementById("check2").setAttribute("src", play2Dice);
  let greet = document.getElementById("head");

  if (play1 > play2) {
    greet.innerHTML = "player 1 has won";
  } else if (play1 == play2) {
    greet.innerHTML = "Match Draw";
  } else {
    greet.innerHTML = "player 2 has won";
  }
};
