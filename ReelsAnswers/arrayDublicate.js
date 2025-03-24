let array1=[1,2,3,4,5,6,7,8,9,9,8,7,4,5,6,1,2,3]
let uniq=[...new Set(array1)]
console.log(uniq);

// dont not worked this function 

let arr=[{a:1},{a:1},[1,2],[1,2]]
let uniq1=[...new Set(arr)]
console.log(uniq1);
