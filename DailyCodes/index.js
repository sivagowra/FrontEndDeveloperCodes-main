let name="Siva Naidu";
let age=25;
let langavge="javaScript";
document.getElementById('MyP1').innerHTML=`my Name is ${name}`;
document.getElementById('MyP2').innerHTML=`age is ${age}`;
document.getElementById('MyP3').innerHTML=`langavge is ${langavge}`;

// random number min to max generater

let min=20;
let max=50
let randomNumber=Math.floor(Math.random()*(max-min)+min);
console.log(randomNumber);
