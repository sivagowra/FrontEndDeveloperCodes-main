let person={
    firstName:"Siva ",
    lastname:"Naidu",
    age:25,
    fullName:function() {
        return this.firstName+this.lastname;
    }
}

let x=person.fullName()
console.log(x.toUpperCase());

const car={
    name:"BMW",
    model:2023,
    cost:15000
}
 const y= car;
 console.log(y);
 
function laptop(brand,model,cost) {
    this.brand=brand;
    this.model=model;
    this.cost=cost;
}
const laptop1=new laptop("ASUS",2024,50000);
console.log(laptop1.cost);
