function otpCode() {
    let otp="";
     otp=Math.floor(Math.random()*10000);
     return otp;
}
console.log( otpCode());

