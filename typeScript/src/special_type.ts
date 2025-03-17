//void

// function username():void{

// }

// void type, a function that is not returning anything is called is void type
function studentName(name:string){
    console.log("student name is: ",name);
    

}
studentName("Raju")

function addNumbers(a:number,b:number){
    console.log(a+b);
    
}
addNumbers(2,5)


//null (not accepet any data type )  null is used to explicityly assgain as empty value to a variable 

let a:null;


//undefind 

// undefined type will accept only undefined as value not (string,number and boolean)

let stadium:undefined;
console.log(stadium);


//never 

// never is used when a function never completes or never returns a value,

function failedToConnect():never{
    throw new Error("connection failed")
}

const DBConnection =()=>{
    try {
        console.log("DB connection");
        
    }
    catch (error) {
        failedToConnect()
    }
    
}
