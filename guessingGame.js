var playerOne=prompt("pick a number between 1 and 6");
//isNaN is for when is not a number
if ((playerOne<1)||(playerOne>6)|| (isNaN(playerOne))) {
window.alert("pick a new number")}
else{
var playerTwo=prompt("guess a number between 1 and 6");
if(playerOne==playerTwo){
window.alert("winner");
}
else{
window.alert("player one was "+ playerOne);
window.alert("you chose "+playerTwo);
}
}


