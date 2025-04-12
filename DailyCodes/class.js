class Product {
    constructor(name, price){
        this.name=name;
        this.price=price;
    }
    dispalyProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price}`);
        
        
    }
}
const Product1=new Product("Siva",250);
Product1.dispalyProduct()

class car {
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
}

const car1=new car("nano",1999)
console.log(car1.name);
console.log(car1.year);

