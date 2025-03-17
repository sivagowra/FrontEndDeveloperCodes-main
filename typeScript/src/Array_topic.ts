
// shorthand notation
let cities:string[] |number[]=["hyd","viz","vij","tenali"]
cities=[20,21,23,24,25,26,27]
console.log(cities);


//generic type notation
let countries:Array<string|number>=["india","u.s.a",256,216]

console.log(countries);

let person:Array<any>=["Siva",9493958284,24]
person[0]=25;
console.log(person);

