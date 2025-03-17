const person1={
    firstName:"Siva",
    lastName:"Naidu",
    age:30,
    isEmp:true,
    sayHello:function(){console.log("Hello Yuvi")},
    eat:function(){console.log("I am Eating a Pizza")},
}
const person2={
    firstName:"Siva",
    lastName:"Koti",
    age:30,
    isEmp:true,
    sayHello:()=>{console.log("Hello Kollikonda")},
    eat:()=>{console.log("I am Eating a Mango")},
}

person1.eat();
person2.eat();