// // this =  reference to object where THIS is used (the object depends on the immediate context) person.name=this.name

// const person1={
//     name:"Siva",
//     favFood:"Hamburgeres",
//     sayHello:function(){console.log(`Hi! I am ${this.name}`)},
//     eat:function(){console.log(`Hi! I am ${this.favFood}`)},
// }
// const person2={
//     name:"Koti",
//     favFood:"pizza",
//     sayHello:()=>{console.log(`Hi! I am ${this.named}`)},//dose not worked arrow functions
//     eat:()=>{console.log(`Hi! I am ${this.favFood}`)}, //dose not worked arrow functions
// }

// person1.eat();
// person1.sayHello();
// person2.eat();
// person2.sayHello();


const student={
    name:"Raju",
    age:25,
    myname:function(){
        console.log(`my name is ${this.name} `);
        
    },
    myage:function(){
        console.log(`my age is ${this.age} `);

    }
    
}
student.myname();
student.myage();