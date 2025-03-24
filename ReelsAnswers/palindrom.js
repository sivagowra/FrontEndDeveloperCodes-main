// palindrome code .
function checkPalindrome(str) {
    let length=str.length;
    for(i=0;i<str.length/2;i++) {
        if(str[i]!==str[length-1-i]){
            return "not Pallindrome"
        }
    }
    return "Pallindrome"
}
console.log(checkPalindrome("ramaamar"));
