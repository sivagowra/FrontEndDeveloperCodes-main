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