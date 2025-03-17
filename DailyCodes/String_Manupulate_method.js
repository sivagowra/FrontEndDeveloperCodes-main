let new_user_name=" Orginal Gangstar ";
console.log(new_user_name.length);//18
console.log(new_user_name.charAt(4)); //i
console.log(new_user_name.trim( ));//Orginal Gangstar
console.log(new_user_name.toLowerCase());// orginal gangstar 
console.log(new_user_name.toUpperCase());// ORGINAL GANGSTAR 
console.log(new_user_name.startsWith(" "));//true
console.log(new_user_name.lastIndexOf(" "));//17

//repalce and  padding

let phoneNumber="949-395-8284";
console.log(phoneNumber.replaceAll("-","")); //9493958284
console.log(phoneNumber.padStart(20,"0")); //00000000949-395-8284
console.log(phoneNumber.padEnd(20,"0")); //949-395-828400000000


// string sliceing slice(start,end)

let FullName="Sri Krishna Devarayulu";
console.log(FullName.slice(2,10)); //i Krishn
console.log(FullName.slice(-11)); // Devarayulu
let firstname=FullName.slice(0,FullName.indexOf(" "));//Sri
let lastname=FullName.slice(FullName.indexOf(" ")+1,);//Krishna Devarayulu
console.log(firstname);
console.log(lastname);














