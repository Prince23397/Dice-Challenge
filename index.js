var randonNumber1 = Math.floor((Math.random()*6))+1; // 1-6 number

var randomDiceImage1 = "dice" + randonNumber1 + ".png"; // gives random image from 1 to 6

var randomImageSource1 = "images/" + randomDiceImage1;// set source folder

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute ("src" , randomImageSource1);

var randonNumber2 = Math.floor((Math.random()*6))+1; // 1-6 number

var randomDiceImage2 = "dice" + randonNumber2 + ".png"; // gives random image from 1 to 6

var randomImageSource2 = "images/" + randomDiceImage2;// set source folder

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute ("src" , randomImageSource2);

//If player 1 wins
if(randonNumber1>randonNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
//If both gets the same number
else if(randonNumber2>randonNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
//If player 2 Wins
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
