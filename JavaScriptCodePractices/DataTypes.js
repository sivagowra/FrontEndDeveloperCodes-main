function arr() {
    let list=[45,486,5465,2555]
    let b=[7655,22,5522,66]
    let c= [...list,...b]
    return c
}
console.log(arr())



function areaOfCircle(r,b) {
    const PI=Math.PI
    const circleArea=PI*r*r
    return circleArea

}
console.log(areaOfCircle(10,12))

const numbers=(...args)=> {
    let sum =0
    for (let i of args) {
        sum=sum+i
    }
    return sum

}
console.log(numbers(1,2,3,4))