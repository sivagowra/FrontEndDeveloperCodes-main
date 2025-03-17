// always returns a promise
async function getData() {
    return "Hello Siva";
}
const dataPromise = getData();
dataPromise.then((res)=>console.log(res));


// async and await is handle to promiss

const p=new Promise((resolve,reject)=>{
    // resolve("promise resolved value!!");
    setTimeout(()=>{
        resolve("Promise Resolved value!!")
    },1000);
});
// await can only be used inside an async function
async function handlePromise() {
 // Js Engine was waiting for promise to resolved
    const val=await p;
    console.log(val);
    const val1=await p;
    console.log(val1);
    
    
}
handlePromise();