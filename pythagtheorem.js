
<p>
A
</p>
<input type="number" id="a">
<p>
B
</p>
<input type="number" id="b">

<button onclick="findC()">
Find C
</button>
<p id="c">
</p>
//html

//html
function findC() {
	var a=document.getElementById('a').value;
	var b=document.getElementById('b').value;
	var c=Math.sqrt((Math.pow(a,2))+(Math.pow(b,2)));
	
	document.getElementById('c').innerHTML="C is " + c

}