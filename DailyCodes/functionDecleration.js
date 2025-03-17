//functon decleration and function expresion

let hello = function(){
console.log('hello guru')
}
setTimeout(hello,3000)


//Arrow functions

//single line
const HelloGuru=(name)=>console.log(`$Hello Guru My Name Is ${name}`);
HelloGuru("naidu")
//multopul line

const Hello=(name,age)=>{
    console.log(`$Hello Guru My Name Is ${name}`);
console.log(`My Gge is ${age} years old`);
}

Hello("Batul",25)
setTimeout(()=>console.log("hello babu"),4000)

const numbers=[1,2,3,4,5,6,7,8,9,10]

const squre=numbers.map((element)=>Math.pow(element,2))
console.log(squre);
const even=numbers.filter((element)=> element%2===0)
console.log(even);
const odd=numbers.filter((element)=>element%2!==0)
console.log(odd);

