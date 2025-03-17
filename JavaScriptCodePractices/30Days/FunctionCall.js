let person= {
   
    fullName:function(){
        return this.firstName+" "+this.lastName;
    }
}
const person1={
    firstName:"Siva",
    lastName:"Naidu",

}
const person2={
    firstName:"Siva Krishna",
    lastName:"Naidu",   
}
const person3={
    firstName:"Siva Lella",
    lastName:"Naidu",
}
console.log(person.fullName.call(person2));


let car ={
    details: function(color,cost){
        return this.color+ this.cost;

    }
}
let car1={
    color:"red ",
    cost:1520

}
console.log(car.details.call(car1));
