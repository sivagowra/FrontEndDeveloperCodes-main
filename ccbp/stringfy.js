//change to string

let person={
    name:"Siva",
    age:25,
    job:"software"
}

let stringifiedProfile=JSON.stringify(person)
console.log(stringifiedProfile);
console.log(typeof(stringifiedProfile));

// change to object 
let par='{"name":"Siva","age":25,"job":"software"}'

let parsed= JSON.parse(par)
console.log(parsed);
console.log(typeof(parsed));



