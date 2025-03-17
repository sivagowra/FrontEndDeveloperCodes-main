//inference 

const mango={
    color:'red',
    price:25,
    discount:false
}
mango.color="orange";
console.log(mango.color);


//Annontations 
const grape:{color:string,price:number,discount:boolean}={
    color:'red',
    price:25,
    discount:false
}
grape.color="gray";
console.log(grape.color);