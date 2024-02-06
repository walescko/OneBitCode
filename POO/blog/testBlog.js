const Author = require('./Author.js')
const jonh = new Author("Jonh Nada")
const post = jonh.writePost("Test Post", "APAPAPA PIPII POOPOPOPO...")

post.addComment("Gaspar", "mimim immomomo")
post.addComment("XYlva", "apapap pipi momomo mimiimi")

console.log(jonh)
console.log(post)