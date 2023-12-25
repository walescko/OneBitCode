class Product{
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addOnStock(quantity) {
        this.inStock += quantity
    }

    calculateDiscount = function (price, discount){
        // this.priceDiscount = price*(1 - discount/100)
        return price*(1 - discount/100)
    }

}

const product01 = new Product("Castanha do Pará", "Rica em Selêncio e boas gorduras.", 6.90)
console.log(product01)
product01.addOnStock(100)
console.log(product01)
console.log(`Preço com desconto é R$ ${product01.calculateDiscount(product01.price, 30)}`)