function newData() {
    let a=20;
    let b=10;
    return a*b;
    
}
console.log(newData());

const areaOfCircle=(radius)=>{
    let area=Math.PI*radius*radius;
    console.log(Math.round(area));
    
}
areaOfCircle(10)

const anonymousFun = function() {
    console.log(
      'I am an anonymous function and my value is stored in anonymousFun'
    )
  }
  anonymousFun()


  const numbersList=(arr) =>{
 let sum=0;
 for(const a of arr) {
  sum=sum+a
 }
 return sum
  }
  num=[1,2,3,4,5,6,7,8,9]
  console.log(numbersList(num));
  

  const yourAge  =(BirthYear,PresentYear) =>{

    let age=PresentYear-BirthYear
    console.log(age);
    

  }
  yourAge(2001,2024)
