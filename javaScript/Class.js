class Person {
    constructor(firstName,lastName) {
        this.firstName=firstName
        this.lastName=lastName
        
    }
}
    const Person1= new Person('Asabeneh', 'Yetayeh');
    const Person2= new Person('Radha', 'Krishna');
    const Person3= new Person('Naga teja', 'Sai');



console.log(Person1.firstName);
console.log(Person2.firstName);
console.log(Person3.firstName);

class car{
    constructor(color,year){
        this.color=color;
        this.year=year;

    }
}
const car1=new car("blue",1999);
const car2=new car("green",1998);
const car3=new car("red",1999);

console.log(car1.color,car1.year);
console.log(car2.color,car2.year);
console.log(car3.color,car3.year);






class laptop{
    constructor(model,cost,color){
        this.model=model;
        this.cost=cost;
        this.color=color;

    }
}
const laptop1=new laptop("Asus",45000,"selver");
const laptop2=new laptop("Dell",55000,"black");
const laptop3=new laptop("Acer",35000,"blue");

console.log(laptop1.model,laptop1.cost, laptop1.color);
console.log(laptop2.model,laptop2.cost, laptop2.color);
console.log(laptop3.model,laptop3.cost, laptop3.color);




