function gyanu(firstname,lastname="karki"){
document.getElementById("demo").innerHTML = firstname+' '+lastname
document.getElementById("demo").style.color="red";
    //alert("alert box")
//console.log(firstname+' '+lastname)
//document.getElementById("demo").innerHTML =firstname
//return firstname+' '+lastname
//return firstname+' '+lastname
}
//var fullname=gyanu("Gyanu","Karki")
//console.log(fullname)
//document.getElementById("demo").innerHTML = gyanu("gyanu")
function test(){
var input= document.getElementById("sumit_button").value;
var input1= document.getElementById("sumit_button1").value;
document.getElementById("resuld").innerHTML=input * input1;
}