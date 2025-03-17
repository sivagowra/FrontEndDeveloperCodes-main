var age=5;
let inter=setInterval(() => {
    age+=1;
    console.log(age)
    if(age==10){
        clearInterval(inter);
    }
}, 500);
