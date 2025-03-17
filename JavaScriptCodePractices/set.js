const a= new Set()
console.log();
a.add("SIva")
a.add("Kotesh")
a.add("Rama ")
a.add("Gopala")
a.add("Lokesh")
a.add("raghava")
a.add("hari")
a.add("hari")
console.log(a.delete("hari"));


console.log(a.size);

console.log(a);

//Union set
const s=[1,2,3,4,5]
const i=[3,4,5,6]
const v=new Set([...s,...i])
console.log(v);


//intersection

let o=[1,2,3,4,5,6]
let t=[4,5,6]
let p=new Set(o)
let n=new Set(t)
let w=o.filter((num)=>n.has(num))
console.log(w);

//Difference of sets
let f=[1,2,3,4,5,6]
let l=[4,5,6]
let ff=new Set(o)
let e=new Set(t)
let u=f.filter((num)=>!e.has(num))
console.log(u);