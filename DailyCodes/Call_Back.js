//call backs
function dispalyGreet(dispaly){
    console.log("1");
    dispaly();
    console.log("2");
}
dispalyGreet(function(){
    console.log('3');
    

})


//Passing a  function as An Arugument;
function dispalyGreeting(dispalyName) {
    console.log("Hello");
    dispalyName();
    console.log("Good Morning");   
}
function dispalySiva() {
    console.log("Siva");
    
}
dispalyGreeting(dispalySiva);

console.log(2+"2"-1);
