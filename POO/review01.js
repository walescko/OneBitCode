// const book = {
//     title: "Emilio, uma lição de piada",
//     author: {
//         name: "Walescko Chimedes"
//     },
//     pages: 256,
//     published: true,
//     inStock: 23,
//     tags: ["live", "humor", "reality"],
//     addOnStock(quantity){
//         this.inStock += quantity
//     }
// }

// console.log(book)
// book.addOnStock(44)
// console.log(book)
// book.save = function (){
//     console.log("Hello")
// }
// console.log(book)

function Book(title, pages, tags, author){//usa-se Pascal Case para nomear funções construtoras
    this.title = title
    this.page = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0
    this.addOnStock = function addOnStock(quantity){
        this.inStock += quantity
    }
    this.save = function(){
       //dados a serem salvos
    }
}

const author = "Walescko Chimendes"
const tags = ["life", "reality", "learning"]

const emilio = new Book("Emilio, uma lição de piada", 256, tags, author)
console.log(emilio)
const caio = new Book("Caio, uma lição de dj", 156, tags, author)
console.log(caio)
