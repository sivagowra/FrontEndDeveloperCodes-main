// forEach()

let list=["C","C++","Java","Python"]
list.forEach(display)

// function upperCase(element,index,array) {
//     array[index] =element.toUpperCase();


// }
function display(element) {
    // console.log(element);

    console.log(element.toUpperCase());
}

//  map()

let studets=["Rama Rao","Ram Babu","Ramanjaneeyulu","Rama Sheshamma"];
let studentUpperCase=studets.map(upperCase)
console.log(studentUpperCase);
let studentLowerCase=studets.map(lowerCase)
console.log(studentLowerCase);




function upperCase(element) {
    return element.toUpperCase()
}
function lowerCase(element) {
    return element.toLowerCase()
}


// Filter()

let array=[45,66,55,68,9,76,88]

let EvenNumbers=array.filter(even);
console.log(EvenNumbers);
let OddNumbers=array.filter(odd);
console.log(OddNumbers);



function even(element) {
    return  element % 2===0;
}


function odd(element) {
    return  element % 2===1;
}



//Reduce method()

let Numbers=[5,10,15,20,25,30,35];


let Total=Numbers.reduce(sum);
console.log(Total);


function sum(acc,element) {
    return acc+element
}

//max used Reduce()

let max=Numbers.reduce(maxMethod);
console.log(max);


function maxMethod(acc,element){
    return Math.max(acc,element)
}

// min
let min=Numbers.reduce(minMethod);
console.log(min);


function minMethod(acc,element){
    return Math.min(acc,element)
}

