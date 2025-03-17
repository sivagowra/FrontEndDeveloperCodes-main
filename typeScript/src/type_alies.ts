
type dataSample= string | number
interface product{
    name:dataSample;
    disc:dataSample;
    price:dataSample;
    discount:dataSample|boolean;
}

const sampleProduct:product={
    name:"Redmi ",
    disc:"note",
    price:15000,
    discount:false
}
console.log(sampleProduct.price);
