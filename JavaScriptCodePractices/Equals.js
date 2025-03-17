// == , ===,  !=

let age = 18;
let sage = "18"
console.log(age);
console.log(sage);

//strict equality
console.log(age === 18, "Strict Equality");
console.log(sage == 18, "Losse Equality");

//Loose Equality

console.log(typeof age)
if(Number(age)>=18) {
    console.log("Your Eligible")
}
else {
    console.log("Your  Not Eligible")

}