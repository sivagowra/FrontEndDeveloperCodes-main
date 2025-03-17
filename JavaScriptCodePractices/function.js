function greeting(){
console.log("hello Yuvi Siva")    
}
greeting()


// Return Function

function add() {
    return 2+4;
}
console.log(add())

function fullname(firstName,lastName="krishna") {
    return firstName + ' '+lastName;

}
console.log(fullname("Siva","Raju"));
console.log(fullname("Lokesh","Kanna"));
console.log(fullname("Siva"));

function washingclothes(){
    console.log('Washing Clothes...');
    console.log('Washing Clothes complted ...');
    return "clean Clothes"
    
}
 let clean=washingclothes();
 console.log(clean);
 