class Emp{
    name:string;
    age:number;
    department:string;

    constructor(name:string,age:number,department:string){
        this.name=name;
        this.age=age;
        this.department=department;

    }
empdetails() {
    console.log(`Employee name is ${this.name} from ${this.age} and ${this.department} department`);
    
}
}
const emp=new Emp("Siva",41,"cse")
emp.empdetails()