var a =20;
var b=30;
console.log("Before Swapped Values" ,a,b);

var temp=a;
a=b;
b=temp;
console.log("After Swapped values", a,b);

// without using 3 variable
// var a = 20;
// var b = 30;
// console.log("Before Swapped Values", a, b);

a = a + b; // a becomes 50
b = a - b; // b becomes 20 (original value of a)
a = a - b; // a becomes 30 (original value of b)

console.log("After Swapped Values", a, b);

// var a = 20;
// var b = 30;
// console.log("Before Swapped Values", a, b);

a = a ^ b;
b = a ^ b; // b becomes 20 (original value of a)
a = a ^ b; // a becomes 30 (original value of b)

console.log("After Swapped Values", a, b);
