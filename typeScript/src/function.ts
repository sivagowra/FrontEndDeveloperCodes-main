function apple(){
    return "this is siva"
}

let a = 99;
let b= "Suresh"

function user():number{
    return a
}

// function expression
 const addingnumbers = function(c:number,d:number):number{
    return (c+d);
     
 }
 addingnumbers(45,65)
 console.log(addingnumbers);
 

 const product =(title:string,price:number,disc?:boolean)=>{
    return `the product name is ${title} and price is ${price}`
 }
 console.log(product("samsung",1550,false));
 