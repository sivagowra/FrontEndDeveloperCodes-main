//interface 

interface student{
    name:string;
    age:number;
    class?:number|string;
}
const std:student={
    name:"Siva",
    age:14,
    class:9

}

console.log(`my name is ${std.name}, i am ${std.age} old`);

const emps:student={
    name:"Raju",
    age:25,
    class:"software developer",

}
console.log(`my name is ${emps.name}, i am ${emps.age} old`);


// inheritance
 interface player extends student {
    meddles:number
 }

 const stud1:player={
    name:"Gopala",
    age:24,
    meddles:4
 }
 console.log(`my name is ${stud1.name}, i am ${stud1.age} old` );
 

