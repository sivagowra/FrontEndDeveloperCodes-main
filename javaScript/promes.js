function myPromise(some) {
    console.log(some);
    
}

let promes= new Promise(function(myResolve, myReject) {
let s=0;
if (s==0) {
    
myResolve("Ok");
} else {
myReject("Error")
}

});
promes.then(
    function(value) {
        myPromise(value);
    },
    function(error) {
        myPromise(error);
    }
);