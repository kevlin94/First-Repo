<p>click to create P element</p>

<button onclick="myFunction()">show</button>
//HTML

function myFunction() {
var para=document.createElement("P");
var t=document.createTextNode("this is a paragraph");
para.appendChild(t);
document.body.appendChild(para);
}
//JS