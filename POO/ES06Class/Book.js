class Book {
    constructor(title){
        this.title = title
        this.published = false
    }
    publish(){
        this.published = true
    }

}

const emilio = new Book("Emilio, uma lição de piada")
const caio = new Book("Caio, uma lição de DJ")
emilio.publish()
console.log(emilio)
console.log(caio)
console.log(emilio instanceof Book)
console.log(emilio instanceof Array)
console.log([emilio, caio] instanceof Array)
console.log([emilio, caio])
