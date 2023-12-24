const book = {
    title: "Emilio, uma lição de piada",
    author: {
        name: "Walescko Chimedes"
    },
    pages: 256,
    published: true,
    inStock: 23,
    tags: ["live", "humor", "reality"],
    addOnStock(quantity){
        this.inStock += quantity
    }
}

console.log(book)
book.addOnStock(44)
console.log(book)
book.save = function (){
    console.log("Hello")
}
console.log(book)