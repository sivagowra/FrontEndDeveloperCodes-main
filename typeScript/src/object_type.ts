//object type
type fruitType={color:string, price:number, discount:boolean}

const apple:fruitType={
    color:'red',
    price:25,
    discount:false
}
console.log(apple);
apple.color="yellow";
apple.price=40;
console.log(apple);

const banana:fruitType={
    color:'yellow',
    price:20,
    discount:true

}
console.log("banana color", banana.color);
console.log("banana discount", banana.discount);
console.log("banana price", banana.price);


