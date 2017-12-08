




var food1 ={
  "name":"honeydew",
  "cost": 4
}

function buyhoneydew(){
  var quantity1=document.getElementById('quantity1').value;
  var price1=quantity1*food1.cost;
  document.getElementById('one').innerHTML=food1.name;
  localStorage.setItem('honeydew',name);
  localStorage.setItem('honeydewprice',price1);
  location.href="restaurant2.html";
}

function getTotal() {
  var a=localStorage.getItem("honeydew");
  var b=localStorage.getItem("honeydewprice");
  document.getElementById('getTotal').innerHTML=a+" "+b;
  
  
}
