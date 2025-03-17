let x= function(a,b){
    return a*b    
}
console.log(x(2,4));

//function costructor

const myFunction=new Function("a","b", "return a*b");
console.log(myFunction(2,2));
