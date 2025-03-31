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

m++;
console.log(m);
let n=10;  //ReferenceError (let or const)

const aw=10;
aw++;
console.log(aw); //TypeError: Assignment to constant variable.


function data(){
    let t=q=10;
}
data()
console.log(q); //10
console.log(t); //ReferenceError: b is not defined

function data1(){
     t1=q1=10;
}
data1()
console.log(q1); //10
console.log(t1);//10

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
console.log(ab==bc);

let ab1={};
let bc1=false;
console.log(ab1==bc1); // false

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

// arrays are created by values pointed to arrays diiferent locations in array  it will return false
console.log([]==[]); // false

// 0 to 3 empty or undefined  forEach value concered to values
const cp=[];
cp[4]=1;
cp.forEach((i)=>{
    console.log("Hi");
    
})//Hi

// 
zp++
console.log(zp);
var zp=21;// NaN

const name1="Rama krishna";
age1=21;
console.log(delete name1); //false
console.log(delete age1);  // true


let newList =[1].push(2);
// console.log(newList.push(3)); //type error


const arr2=[1,2,3];
const str2="1,2,3";
console.log(arr2==str2);//true

yq=10;
var xy=1+yq;
console.log(xy); //11

let xp=10>9>8;
console.log(xp===true); // false

console.log(3+4+"5"); // 75


var per={
    name:"siva",
    hello: function() {
        console.log(this.name);
        
    }
}
per.hello(); //siva

function sum(a=5,b=4){
    console.log(a+b);
    
}
sum(null,20)//20
