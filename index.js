
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceIamgeSource1="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceIamgeSource1);


var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImageSource2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Sravani Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Lavanya Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!!!";

}