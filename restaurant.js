




var food1 ={
  "name":"Honeydew",
  "cost": 4
}

var food2 ={
  "name":"Mango",
  "cost": 4
}

var food3 ={
  "name":"Milktea",
  "cost": 4
}

var food4 ={
  "name":"Lychee",
  "cost": 4
}

var food5 ={
  "name":"Strawberry Banana",
  "cost": 4
}

var food6 ={
  "name":"Coffee",
  "cost": 4
}
function clearShit(){
    localStorage.clear();
  }

function buyhoneydew(){
  var quantity1=document.getElementById('quantity1').value;
  var price1=quantity1*food1.cost;
  localStorage.setItem('honeydew',food1.name);
  localStorage.setItem('honeydewprice',price1);
}

function buymango(){
  var quantity2=document.getElementById('quantity2').value;
  var price2=quantity2*food2.cost;
  localStorage.setItem('mango',food2.name);
  localStorage.setItem('mangoprice',price2);
}

function buymilktea(){
  var quantity3=document.getElementById('quantity3').value;
  var price3=quantity3*food1.cost;
  localStorage.setItem('milktea',food3.name);
  localStorage.setItem('milkteaprice',price3);
}

function buylychee(){
  var quantity4=document.getElementById('quantity4').value;
  var price4=quantity4*food4.cost;
  localStorage.setItem('lychee',food4.name);
  localStorage.setItem('lycheeprice',price4);
}

function buystrawberrybanana(){
  var quantity5=document.getElementById('quantity5').value;
  var price5=quantity5*food5.cost;
  localStorage.setItem('strawberrybanana',food5.name);
  localStorage.setItem('strawberrybananaprice',price5);
}

function buycoffee(){
  var quantity6=document.getElementById('quantity6').value;
  var price6=quantity6*food6.cost;
  localStorage.setItem('coffee',food6.name);
  localStorage.setItem('coffeeprice',price6);
}

function receipt() {
   location.href="restaurant2.html";
}

function getTotal() {
  var a=localStorage.getItem("honeydew");
  var b=localStorage.getItem("honeydewprice");
  var c=localStorage.getItem("mango");
  var d=localStorage.getItem("mangoprice");
  var e=localStorage.getItem("milktea");
  var f=localStorage.getItem("milkteaprice");
  var g=localStorage.getItem("lychee");
  var h=localStorage.getItem("lycheeprice");
  var i=localStorage.getItem("strawberrybanana");
  var j=localStorage.getItem("strawberrybananaprice");
  var k=localStorage.getItem("coffee");
  var l=localStorage.getItem("coffeeprice");
  var m=parseInt(b)+parseInt(d)+parseInt(f)+parseInt(h)+parseInt(j)+parseInt(l);

  
  
  
  document.getElementById('total').innerHTML=a+" $"+b+"<br>" +c+" $"+d+"<br>" +e+" $"+f+"<br>"+g +" $"+h+ "<br>" +i+" $"+j+"<br>" +k+" $"+l + "<br>"+"Total $" +m;

  
  
}
