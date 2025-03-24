// find Method Used to display only 1 item
let array1=[1,2,3,4,5,6,7,8,9,9,8,7,4,5,6,1,2,3]
let x=array1.find(a=>a>4)
console.log(x); //5

// Filter Method  used to display to 4 above items
let y=array1.filter(a=>a>4)
console.log(y); // [5, 6, 7, 8, 9,9, 8, 7, 5, 6]


// par1 is parameters and 20 30 is argumnets
function addion(par1,par2) {
    console.log(par1+par2);   
}
addion(20,30)// 50

