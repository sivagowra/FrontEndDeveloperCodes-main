function otpNumber() {
    let otp="";
    otp=Math.floor(Math.random()*10000);
    return otp;
}
console.log(otpNumber())
console.log(typeof Number(otpNumber()))

