// let fact=(n)=> {
//     if(n==0){
//         return 1;
//     }
//     else {

//       return  n*fact(n-1)
      
//     }

// }
// let num=4
// let result= fact(num);
// console.log(result);

let fact1=(n)=>
{
  if(n==0){
    return 1;
  }
  else {
    return n*fact1(n-1)
  }
}
let num1=4
console.log(fact1(num1));

