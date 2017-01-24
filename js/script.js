window.onload = function() {

var playerOne = document.getElementById("playerOne");
var playerTwo = document.getElementById("playerTwo");
var header = document.getElementById("header");
var content = document.getElementById("content");
var button = document.getElementsByTagName("button");
var buttonText = document.getElementsByTagName
console.log(button);
//Function for Title Screen action
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

//Set new id's for knots and crosses
        playerOne.setAttribute("id", "choiceOne");
        playerTwo.setAttribute("id", "choiceTwo");

//Add new event listeneres for new elements
        var cross = document.getElementById("choiceOne");
        var knot = document.getElementById("choiceTwo");
        cross.addEventListener("click", ok);
        knot.addEventListener("click", ok);

    }, 500);

}

function ok() {
    console.log("Yes");
}

function cross() {
    event.target.childNodes[0].innerHTML = "X";
}


//playerOne.addEventListener("click", next);
//playerTwo.addEventListener("click", next);
for (var i=0; i<button.length; i++) {
    button[i].addEventListener("click", cross);
}

}
