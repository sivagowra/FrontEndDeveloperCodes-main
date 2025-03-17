let arr =[12,11,44,88,66,7]
arr.forEach((n,i)=> console.log(i+1,n));
//filter
console.log( arr.filter(n=>n%2==0));
arr.filter(n=>n%2==0).forEach(n=>{
    console.log(n);
    
})

//map

let resut=arr.filter(n=>n%2===0).map(n=>n*3).reduce((a,b)=>a+b);
console.log(resut);
