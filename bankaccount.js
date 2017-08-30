var x= prompt("input money");
var y=prompt("how much to take out")
var bankAccount={};
bankAccount["name"]="kevin";

bankAccount["money"]=x;

bankAccount["money"]-=y;
window.alert(bankAccount.money)