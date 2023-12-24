const input = document.getElementById('input')

document.getElementById('value').addEventListener("click", function (){
    input.value = "Hello World!"
    // input.value = input.value === '' ? "Digite algo aqui!" : ''
    // input.getAttribute('value')
    console.log(input.value)
    console.log(input.getAttribute('value'))
})

document.getElementById('type').addEventListener("click", function(){
    input.type = input.type !== 'radio'? 'radio' : 'text'
})
document.getElementById('placeholder').addEventListener("click", function(){
    input.placeholder = 'Digite algo aqui!'
})

document.getElementById('disable').addEventListener("click", function(){
    input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('clic', function(){
    const data = input.dataset.something
    console.log("O valor do atrituto data-something é " + data)
})