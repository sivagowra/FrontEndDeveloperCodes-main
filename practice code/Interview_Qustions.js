// for(var x=10;x<11;x++){
//     setTimeout(()=>{
//         console.log(x);
        
//     },1000)

// }

// const i=[];
// i[4]=1;
// i[1]=2;
// i[2]=4;
// i.forEach((j) => {
//     console.log("Hi");
    
// });


// let number=4;
// console.log(number % 2==0 ? "Even":"Odd");

// function abc(){
//     console.log(abc.xyz);
    
// }
// abc()

// abc.xyz=400;
// abc.xyz=200;
// abc()  //undefined 200


//Event propogation

// const Numbers=[1,2,3,4]
// Numbers[100]=500;
// console.log(Numbers); //[ 1, 2, 3, 4, <96 empty items>, 500 ]


//  console.log(typeof typeof 100); //string
// const arr=[..."Siva","Raju"];
// console.log(arr); [ 'S', 'i', 'v', 'a', 'Raju' ]

// console.log(parseInt('10+2')); //10
// console.log(parseInt('7FM')); //7
// console.log(parseInt('M7F')); //Nan



// function ABC(){
//     return;
// }
//  console.log(ABC()); //undefined

 

//  console.log([1,2].map(num=>{
//     if(num>0) return;
//     return num *2
//  }));  //[ undefined, undefined ]


// 'use strict'
//  {
//     function abc(){
//         console.log('Siva');      
//     }
//  }    
//  abc()


// function abc(a,b){
//     'use strict'
//     a=100
//     b=200
//     return arguments[0]+arguments[1]
//     console.log(a+b);
    
// }
// console.log(abc(100,200));


// console.log("A"-1);
// console.log("siva"+"100");
// console.log("2"+2-'2');
// console.log(typeof ("2"+2-'2'));


// let x=123;
// let y=new Number(123);
// console.log(typeof x);
// console.log(typeof y);
// console.log(x===y);

// console.log("5"+3);
// console.log("5"-3);


console.log(3 && 5);
console.log(3 || 5);


let a="he".split(",");
let b=["h","e"];
console.log(a==b);



