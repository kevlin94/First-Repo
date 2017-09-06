var classroom={
room:"f103",
students:18
};



var userInput=prompt("room or students");
var lowercase=userInput.toLowerCase();


if ((lowercase==="room")||(lowercase==="students")){window.alert(classroom[lowercase]);}
else {for(i=1;i<5;i++){var userInput=prompt("room or students. This is your "+ i+" try");
var lowercase=userInput.toLowerCase();


if ((lowercase==="room")||(lowercase==="students")){
i=5;
window.alert(classroom[lowercase]);}

}
}

