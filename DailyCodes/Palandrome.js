function Pallindrome(str) {
    let len = str.length;
    for(i=0;i<len/2;i++) {
        if(str[i] !==str[i]-1-i) {
            return 'Not pallindrome'
        }
    }
    return 'Pallindrome'
}
console.log(Pallindrome("Madam"));
