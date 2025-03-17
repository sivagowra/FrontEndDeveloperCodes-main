const arr1=[
    "Sivanaidu",
    "Nagamani",
    "Radha Krishna"
]
const arr2=[
    "gopala krishna",
    "mohan",
    "Sivanaidu"
]

function mergeNames(a,b) {
    const merge=[...a,...b];
    const uniqe=[...new Set(merge)];
    return uniqe;
}
console.log(mergeNames(arr1,arr2))  

let s=[1,2,3,4,5,6,7,8,9,10];
let t=[11,12,23,4,0,6,8,9,7,2,7,2];

let mer=(a,b)=>{
    let merge=[...a,...b];
    let set=[...new Set(merge)];
    return set
}
console.log(mer(s,t));