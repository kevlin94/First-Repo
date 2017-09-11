<p class="stem">HITLER</p>
<p class="stem">STALIN</p>
<p class="stem">KIM</p>
<p class="stem">JIM</p>
<button onclick="deathNote()">
random Death
</button>
//this is HTML

function deathNote(){
var death=Math.floor(Math.random()*4);
document.getElementsByClassName('stem')[death].innerHTML="<img src='https://www.w3schools.com/css/img_fjords.jpg' width='10%'>";
}
//This is JS