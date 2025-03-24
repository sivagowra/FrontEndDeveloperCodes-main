let x=2;
let y=3;
console.log(x++ + ++y); //6

let str="jscafe";
str[0]="c";
console.log(str); // jscafe 

let obj={age:24};
let {age:userage}=obj;
console.log(userage);//24
// console.log(age); // ReferenceError

// in function 
const arr=[1,2,3,4];
console.log(1 in arr); // true
console.log(2 in arr); // true
console.log(4 in arr); // false

const str1="1,2,3";
const arr1=[1,2,3];
console.log(arr1==str1); // true

console.log(2+"3"+4);//234

// object access
const a={};
const b= { key: "b"};
const c= { key: "c"};
a[b]=146;
a[c]=286;
console.log(a[b]); // 286
console.log(a[c]); // 286

// new Promise
new Promise(()=>{
    console.log("D"); // D
})
console.log("S"); // S

console.log([1,2]+![]); // 1,2false


let ar1=[1,2,[3,4]];
let ar2=[...ar1];
ar2[1]=10;
ar2[2][0]=100;
console.log(ar2);// [ 1, 10, [ 100, 4 ] ]

// string are immutable not change
let str12="sai";
str12.length=0;
console.log(str12.length); //3

//NaN

n++;
console.log(n);
var n=10; //NaN

function data(){
    let t=q=10;
}
data()
console.log(q); //10

 setTimeout(()=>{
    console.log("1");
    
 },0)
console.log("2");
//2
//1


const data1={
    id:'1'
};
data1.id="2";
console.log(data1.id);//2


const aa=[1,2,3];
delete aa[1];
console.log(aa);//[ 1, <1 empty item>, 3 ]
console.log(aa.length); //3

// invoking function


(function(num){
    console.log(num*num);
    
})(false) //0

let bb="learn";
console.log(bb.substring(5,1));// earn

// empty array trated as 0
let ab=[];
let bc=false;
console.log(ab==bc); // true

// object  last name is over ride

const name={
    names:"sai",
    names:"Krishna"
}
console.log(name.names); // krishna


// function executed but not display

let timer = setInterval(()=>{
    console.log("helo");
    
})
clearInterval(timer)

// globle scope and block scope

var d=1;
let e=1;
{
    var d=2;
    let e=2;
}
console.log(d,e); //2,1

// array and reverse

let ary=[1,2];
let rev=ary.reverse();
console.log(ary,rev); //[ 2, 1 ] [ 2, 1 ]

//postfix value is return to increment

let as=5;
let sa=as++;
console.log(sa);//5
console.log(as+sa); //11

// NaN is not Equal to NaN
const Nan=NaN;
const Na=NaN;
console.log(Nan==Na); // false
console.log(Nan===Na); // false

for(var i=0;i<10;i++){
    setTimeout(function(){
        console.log(i); //10 times 10
        
    })
}




