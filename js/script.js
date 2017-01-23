window.onload = function() {

var playerOne = document.getElementById("playerOne");
var playerTwo = document.getElementById("playerTwo");
var header = document.getElementById("header");
var content = document.getElementById("content");

function next() {

  //Remove eventlistener
  playerOne.removeEventListener("click", next, false);
  playerTwo.removeEventListener("click", next, false);
  //Set Previous slides text to opacity 0
  //TimeOut waits the duration of the transition before setting the
  //new text to opacity 1

    header.style.opacity = "0";
    playerOne.style.opacity = "0";
    playerTwo.style.opacity = "0";
    setTimeout(function() {
        content.style.opacity="1";
        playerOne.style.opacity="1";
        playerTwo.style.opacity="1";
        header.style.opacity="1";
        header.innerText="Do you want be ";
        header.className += "choice";
        playerOne.innerText="X";
        playerTwo.innerText="O";
        playerOne.setAttribute("id", "choiceOne");
        playerTwo.setAttribute("id", "choiceTwo");
    }, 500);
}


playerOne.addEventListener("click", next);
playerTwo.addEventListener("click", next);


}
