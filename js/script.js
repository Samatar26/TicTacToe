window.onload = function() {

var playerOne = document.getElementById("playerOne");
var playerTwo = document.getElementById("playerTwo");
var header = document.getElementById("header");
var content = document.getElementById("content");
var button = document.getElementsByTagName("button");
var buttonText = document.getElementsByTagName;
var container = document.getElementById("container");
var list = document.getElementById("players");
var wrapper = document.getElementById("wrapper");
var cross;
var knot;
var choice;
var choiceTwo;
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
         cross = document.getElementById("choiceOne");
         knot = document.getElementById("choiceTwo");
        cross.addEventListener("click", ok);
        knot.addEventListener("click", ok);

    }, 500);

}


//Choice
function ok() {
    console.log(1, event);
    //Player One's Choice
    if (event.target.id==="choiceOne"){choice="X"} else{choice="O"};
    console.log(choice);
    //Fade Out
    header.style.opacity = "0";
    cross.style.opacity="0";
    knot.style.opacity="0";
    wrapper.style.background="black";
    //Display none
    setTimeout(function() {
    header.style.display = "none";
    cross.style.display = "none";
    knot.style.display = "none";
    players.style.display = "none";
    container.style.visibility = "visible";
    container.style.opacity = "1";
}, 500);
    console.log(event.target.id);


}


  function gameChoice(e) {
    choiceTwo = choice === "O" ? "X" : "O";
    e.target.childNodes[0].innerHTML = choice;
    var arr = [];
    for (var i=0; i<button.length; i++) {
      if(button[i].childNodes[0].innerHTML===""){arr.push(button[i])};
    }
    console.log(arr);
    for (var i=0; i<button.length; i++) {
        button[i].removeEventListener("click", gameChoice);
    }

    setTimeout(function() {
      //Computer's Choice
      var random =  Math.floor(Math.random() * (arr.length));
      arr[random].childNodes[0].innerHTML=choiceTwo;

      //Add back event listeneres
      for (var i=0; i<button.length; i++) {
          if(button[i].childNodes[0].innerHTML===""){
          button[i].addEventListener("click", gameChoice);
        }
      }

    }, 600);




}



playerOne.addEventListener("click", next);
playerTwo.addEventListener("click", next);
for (var i=0; i<button.length; i++) {
    button[i].addEventListener("click", gameChoice);
}

}
