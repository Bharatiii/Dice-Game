alert ("Working!!");

// For Player 1 -------------

var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage;  // /images/dice1.png - /images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


// For Player 2 -------------

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


//IF PLAYER 1 WINS --------
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
//IF PLAYER 2 WINS ---------
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "🏁 Player 2 wins!";
}
//IF BOTH OF THEM WINS OR BECOME DRAW -------
else {
    document.querySelector("h1").innerHTML = "DRAW!";
}