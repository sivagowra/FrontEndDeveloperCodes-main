const name="Sivannarayana";
age=25
console.log(delete name); // false
console.log(delete age); //true

console.log(5 && 1); // AND operater is both true values so print last value  1
console.log(5 || 1); // OR operater is both true values so print first value  5

console.log(0 && 1); // 0
console.log(0 || 1);  //1

console.log(1 && -1); //-1
console.log(-1 || -1); //-1

console.log(typeof null); // object
console.log(typeof undefined); // undefind
console.log( typeof NaN); // number
console.log(typeof function(){}); // function



let x=123;
let y=new Number(123);
console.log(x==y); // true

console.log(x===y); //false

console.log(+true);  // 1
console.log(+false); // 0
console.log(+"123"); // 123
console.log(+null); // 0

setTimeout(()=>{
    console.log('timeOut 1');
    
},0)
Promise.resolve().then(()=>{    // stroed data in Micro   
    console.log('promise 1');   // promise 1
                                // stroed data in macro 
                                // timeOut 1 
})

console.log('1');
setTimeout(()=>{
    console.log("2");

},0)

console.log('3');  // 1
                   // 3 
                   // 2 
console.log(1+2+'3'); //33

const [p,q=5]=[10];
console.log(p+q); //15

const [s,t=10]=[10,20];
console.log(s+t); // 30

//pallindrome

function CheckPallindrome(str){
    const len= str.length;
    for(i=0;i<len/2;i++){
        if(str[i]!==str[len-1-i]){
            return 'Not Pallindrome';
        }
    }
    return 'Pallindrome'
}
let answer=CheckPallindrome("madam")
console.log(answer);


let array=[1,2,3,4];
console.log(1 in array); // true
console.log(2 in array); // true
console.log(4 in array); // false

let arr=["a","b","c","d"];
console.log(1 in arr); //true



let obj={age:24};
let {age:userage}=obj;
console.log(userage) //24  (rename age to userage)
//console.log(age); //type erroe

const str="1,2,3";
const a=[1,2,3]
console.log(str==a); // true

let string="jscafe";
string[0]="c";
console.log(string);  //jscafe

let r=1;
let w=2;
console.log(r++ + ++w); //4

let timer = setTimeout(()=>{
    console.log("hello");
    
},0)
clearInterval(timer)  // not dispaly output

console.log([1,2]+![]); // 1,2false


const l={};
const m={key:"m"};
const n={key:"n"};

l[m]=146;
l[n]=286;

console.log(l[m]);// 286

let k=[1,2];
let j=k;
j.push(3)
console.log(k); //[1,2,3]

// Destructuring  Syntax

let {length}="Siva";
console.log(length); //4

let xx="8";
let yy=1;
console.log(xx+yy+1); // 811
console.log(+xx+yy+1); // 10

let xxx=1||2&&3;   //(2 && 3=3    1||3 =1)
console.log(xxx); //1

let note=[1,2];
for(var i=0;i<note.length;i++){
    setTimeout(()=>{
        console.log(i);
        
    },[1000]) //2 
              //2
}

let strings="change";
strings=strings.replace('c',"R");
console.log(strings);//Rhange

let num="ABC"+ +"DEF";
console.log(num); //ABCNaN

var str1="siva";
var str2=str1;
str2="Ram";
console.log(str1); //siva

const empty=[];
empty[4]=1;
empty.forEach((i)=>{
    console.log("hi"); //hi
    
})
console.log(empty.length);

const xxxx={name: "Sai"};
const arr1=['name'];
xxxx[arr1]="Krishna";
console.log(xxxx.name); // krishna

ww++;
console.log(ww);//NaN
var ww=21;

function data() {
    let a=b=5;

}
data()
console.log(b);//5

let condtion=10>9>8
console.log(condtion===true); // false

let firstArr=[1];
let secondArr=[2];
console.log(firstArr+secondArr); // 12


let str11="Siva";
str11.length=0;
console.log(str11.length);//4

const NAN1=NaN;
const NAN2=NaN;
console.log(NAN1===NAN2); // false

function sum1(a=5,b=10){
    console.log(a+b);//20
    
}
sum1(null,20) //null automatically convert into 0


let ar1=[1,2];
let ar2=ar1;
ar2.push(3);
console.log(ar1); //[ 1, 2, 3 ]


const aw=[11,12,13];
for(var i=0;i<aw.length;i++) {
    setTimeout(()=>{
        console.log('Siva',i);
        
    },[1000])
}

//substring swap values  // last index in swap to first index and first index is swap to last index
let le="learn";
console.log(le.substring(5,1)); // earn   


// reasign 

const dataId ={
    id:'1'

};
dataId.id='2'
console.log(dataId.id); // 2


//Original Array

let a1=[1,2,[3,4]]
let a2=[...a1]
a2[1]=10;
a2[2][0]=100;
console.log(a2); // [ 1, 10, [ 100, 4 ] ]
  let T=[];
  let F=false;
  console.log('Condtion',T==F); // true // automatically convert to numaric values empty array=0  value and false value =0
  
let value1=1;
var value2=1;
{
    let value1=2;
    var value2=2
}
console.log(value1,value2);// 1 2


