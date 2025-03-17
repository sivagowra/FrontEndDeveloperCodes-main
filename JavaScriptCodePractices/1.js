let arr1 =[2,3]
let arr2 =[1,...arr1,4,5]
console.log(arr2)


let person={name:"raju",age:27};
let personDetails={...person,city:"tokyo"};
console.log(personDetails)

function add(a,b,c){
    return a+b+c;

}
let numbers=[1,2,3,4,5]
console.log(add(...numbers));


function number(...args){
    console.log(args);
}
number(1,2,4)
let {s,...rest }={
    s:20,
    t:30,
    u:40


}
console.log(s)
console.log(rest)

// let firstName="raju"
// console.log(`hello ${firstName}!`)
// let a={name:"raju ",age:20}
// console.log(`my name ${a.age}`)


let p=["I","N","D"];
let q=[...p,"I","A"];
let r=[...q," ","4.0"];
console.log(r.join(""));
function mul(...args){
    console.log(args)

}mul(97,98,93)

let day =1;
switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1 :
        console.log("monday");
        break;
        default:
            console.log("invalid")    
break;
}